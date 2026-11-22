// Mounts an interactive viewer.
// mountViewer(THREE, OrbitControls, el, specOrSpecs, {views, start, model, still, bg})
// Pass an array of specs (e.g. [asIs, redesign]) and switch with setModel(i).
import { buildHouse } from './scene.js';

export function mountViewer(THREE, OrbitControls, el, specs, o = {}) {
  if (!Array.isArray(specs)) specs = [specs];
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
  const models = specs.map(s => { const m = buildHouse(THREE, s, o); m.root.visible = false; scene.add(m.root); return m; });
  let cur = models[o.model || 0]; cur.root.visible = true;
  // ground
  const bb = new THREE.Box3().setFromObject(cur.root); const ctr = bb.getCenter(new THREE.Vector3()); const size = bb.getSize(new THREE.Vector3());
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

  let lastView = null;
  function cutaway(v) {
    const cp = cam.position;
    cur.ceilings.visible = !!(v && v.ceiling);
    sun.intensity = v && v.ceiling ? 0.9 : 1.6;
    for (const w of cur.walls) {
      const dx = cp.x - w.c[0], dz = cp.z - w.c[1];
      let vis = dx * w.n[0] + dz * w.n[1] <= 0; // back-facing walls stay
      if (v && v.rooms && !v.rooms.includes(w.roomId)) {
        const t = controls.target; const dWall = Math.hypot(dx, dz); const dT = Math.hypot(cp.x - t.x, cp.z - t.z);
        if (dWall < dT) vis = false; // other rooms' walls between camera and target
      }
      if (v && v.hideAll) vis = false;
      if (v && v.showAll) vis = true;
      w.grp.visible = vis;
    }
  }
  function applyView(v) {
    // views are given in plan coords [x, height, y]
    cam.position.set(v.pos[0], v.pos[1], -v.pos[2]); controls.target.set(v.target[0], v.target[1], -v.target[2]); cam.fov = v.fov || o.fov || 50; cam.updateProjectionMatrix(); controls.update();
    lastView = v; cutaway(v);
  }
  function setModel(i) { cur.root.visible = false; cur = models[i]; cur.root.visible = true; cutaway(lastView); if (o.still) renderer.render(scene, cam); }
  function resize() { renderer.setSize(W(), Hh()); cam.aspect = W() / Hh(); cam.updateProjectionMatrix(); }
  window.addEventListener('resize', resize);
  function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, cam); }
  if (o.views && o.views.length) applyView(o.views[o.start || 0]);
  if (o.still) renderer.render(scene, cam); else loop();
  controls.addEventListener('end', () => { lastView = null; cutaway(null); }); // re-evaluate cutaway as the user orbits
  return { applyView, setModel, render: () => renderer.render(scene, cam), renderer, cam, controls, center: ctr, size };
}
