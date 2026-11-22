// Mounts an interactive viewer. Usage: mountViewer(THREE, OrbitControls, el, spec, {views, still})
import { buildHouse } from './scene.js';

export function mountViewer(THREE, OrbitControls, el, spec, o = {}) {
  const W = () => el.clientWidth, Hh = () => el.clientHeight;
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: !!o.still });
  renderer.setPixelRatio(o.pixelRatio || Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(W(), Hh());
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  el.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(o.bg || '#e9e5de');
  const { root, walls, ceilings } = buildHouse(THREE, spec, o);
  scene.add(root);
  // ground
  const bb = new THREE.Box3().setFromObject(root); const ctr = bb.getCenter(new THREE.Vector3()); const size = bb.getSize(new THREE.Vector3());
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(size.x + 12, size.z + 12), new THREE.MeshStandardMaterial({ color: '#d4cfc4', roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(ctr.x, -0.01, ctr.z); ground.receiveShadow = true; scene.add(ground);
  scene.add(new THREE.HemisphereLight(0xfff6e8, 0x8a7f70, 1.1));
  const sun = new THREE.DirectionalLight(0xfff1dc, 1.6);
  sun.position.set(ctr.x - 5, 13, ctr.z + 7); sun.target.position.copy(ctr); scene.add(sun.target);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.left = -12; sc.right = 12; sc.top = 12; sc.bottom = -12; sc.far = 40; sun.shadow.bias = -0.0005;
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  const cam = new THREE.PerspectiveCamera(o.fov || 50, W() / Hh(), 0.05, 200);
  const controls = new OrbitControls(cam, renderer.domElement);
  controls.enableDamping = true; controls.maxPolarAngle = Math.PI / 2 - 0.02;

  const roomsOf = id => spec.rooms.find(r => r.id === id);
  function applyView(v) {
    // views are given in plan coords [x, height, y]
    cam.position.set(v.pos[0], v.pos[1], -v.pos[2]); controls.target.set(v.target[0], v.target[1], -v.target[2]); cam.fov = v.fov || o.fov || 50; cam.updateProjectionMatrix(); controls.update();
    ceilings.visible = !!v.ceiling;
    sun.intensity = v.ceiling ? 0.9 : 1.6;
    const focus = v.rooms; // room ids or undefined
    const cp = cam.position;
    for (const w of walls) {
      const dx = cp.x - w.c[0], dz = cp.z - w.c[1];
      let vis = dx * w.n[0] + dz * w.n[1] <= 0; // back-facing walls stay
      if (focus && !focus.includes(w.roomId)) {
        // other rooms: drop walls that sit between the camera and the target
        const t = controls.target; const dWall = Math.hypot(dx, dz); const dT = Math.hypot(cp.x - t.x, cp.z - t.z);
        if (dWall < dT) vis = false;
      }
      if (v.hideAll) vis = false;
      if (v.showAll) vis = true;
      w.grp.visible = vis;
    }
  }
  function resize() { renderer.setSize(W(), Hh()); cam.aspect = W() / Hh(); cam.updateProjectionMatrix(); }
  window.addEventListener('resize', resize);
  let dirty = true; controls.addEventListener('change', () => { dirty = true; });
  function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, cam); }
  if (o.views && o.views.length) applyView(o.views[o.start || 0]);
  if (o.still) { renderer.render(scene, cam); } else loop();
  controls.addEventListener('end', () => {
    // re-evaluate cutaway as user orbits
    const v = { pos: cam.position.toArray(), target: controls.target.toArray(), fov: cam.fov, rooms: undefined };
    ceilings.visible = false;
    const cp = cam.position;
    for (const w of walls) { const dx = cp.x - w.c[0], dz = cp.z - w.c[1]; w.grp.visible = dx * w.n[0] + dz * w.n[1] <= 0; }
  });
  return { applyView, render: () => renderer.render(scene, cam), renderer, cam, controls, center: ctr, size };
}
