// Builds a cutaway 3D model of a house from SCENE_SPEC.
// Plan coords: x right along the facade, y into the house (metres). three.js: (x, up, -y).
// Room rectangles are wall centrelines; each room draws its own half wall (0.075 m) on the inside,
// so two neighbouring rooms make a 0.15 m wall with each side in its own paint.
// Furniture: x,y = footprint centre; w_cm along x, d_cm along y (final orientation);
// rotation_deg = facing only (0 +y, 90 +x, 180 -y, 270 -x); z_m = bottom height.
export function buildHouse(THREE, spec, opts = {}) {
  const root = new THREE.Group();
  const HALF = 0.075;
  const mats = new Map();
  const mat = (hex, o = {}) => {
    const k = hex + JSON.stringify(o);
    if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color: new THREE.Color(hex), roughness: o.r ?? 0.8, metalness: o.m ?? 0, transparent: o.op != null, opacity: o.op ?? 1, emissive: o.e ? new THREE.Color(o.e) : undefined, emissiveIntensity: o.ei ?? 1 }));
    return mats.get(k);
  };
  const add = (mesh, parent) => { mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh; };
  const box = (w, h, d, m, x, y, z, parent = root) => { const g = add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m), parent); g.position.set(x, y, z); return g; };
  const cyl = (rt, rb, h, m, x, y, z, parent, seg = 24) => { const g = add(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m), parent); g.position.set(x, y, z); return g; };
  const sph = (r, m, x, y, z, parent) => { const g = add(new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), m), parent); g.position.set(x, y, z); return g; };

  // ---------- procedural floor textures ----------
  const texCache = new Map();
  function floorTex(kind) {
    if (texCache.has(kind)) return texCache.get(kind);
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    let rep = 1, rough = 0.6;
    if (/spc|vinyl|kayu|wood|oak|parket|laminat/.test(kind)) {
      for (let i = 0; i < 8; i++) { const l = 168 + (i * 37) % 30; g.fillStyle = `rgb(${l + 48},${l + 18},${l - 30})`; g.fillRect(0, i * 32, 256, 32); g.fillStyle = 'rgba(80,50,20,.35)'; g.fillRect(0, i * 32, 256, 1.5); g.fillRect((i * 97) % 256, i * 32, 1.5, 32); }
      for (let k = 0; k < 500; k++) { g.fillStyle = 'rgba(110,70,30,.07)'; g.fillRect(Math.random() * 256, Math.random() * 256, 30 + Math.random() * 60, 1); }
      rep = 1 / 1.2; rough = 0.7;
    } else if (/hijau|green/.test(kind)) {
      g.fillStyle = '#17392f'; g.fillRect(0, 0, 256, 256);
      for (let k = 0; k < 600; k++) { g.fillStyle = 'rgba(40,90,70,.25)'; g.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); }
      g.strokeStyle = '#6f9c87'; g.lineWidth = 2; g.strokeRect(5, 5, 246, 246); g.strokeRect(11, 11, 234, 234);
      g.strokeStyle = '#cfc39a'; g.lineWidth = 3.5;
      for (let i = 0; i < 8; i++) { g.beginPath(); const a = i * Math.PI / 4; g.ellipse(128 + Math.cos(a) * 36, 128 + Math.sin(a) * 36, 30, 11, a, 0, Math.PI * 2); g.stroke(); }
      g.beginPath(); g.arc(128, 128, 58, 0, 7); g.stroke();
      g.beginPath(); g.arc(128, 128, 15, 0, 7); g.fillStyle = '#cfc39a'; g.fill();
      for (const [x, y] of [[0, 0], [256, 0], [0, 256], [256, 256]]) { g.beginPath(); g.arc(x, y, 18, 0, 7); g.stroke(); }
      rep = 1 / 0.4; rough = 0.25;
    } else if (/mandi|putih|white/.test(kind)) {
      g.fillStyle = '#e6e8e6'; g.fillRect(0, 0, 256, 256); g.strokeStyle = 'rgba(0,0,0,.15)'; g.lineWidth = 3; g.strokeRect(0, 0, 256, 256); rep = 1 / 0.3; rough = 0.3;
    } else if (/abu|grey|gray|batu|stone/.test(kind)) {
      for (let r = 0; r < 8; r++) for (let q = 0; q < 2; q++) { const l = 120 + ((r * 7 + q * 13) % 5) * 12; g.fillStyle = `rgb(${l},${l - 4},${l - 10})`; g.fillRect(q * 128 + (r % 2) * 64, r * 32, 128, 32); }
      g.strokeStyle = 'rgba(40,40,40,.35)'; g.lineWidth = 2; for (let r = 0; r < 8; r++) { g.strokeRect(0, r * 32, 256, 32); }
      rep = 1 / 0.6; rough = 0.8;
    } else { // orange / terracotta ceramic
      g.fillStyle = '#c98a56'; g.fillRect(0, 0, 256, 256);
      for (let k = 0; k < 300; k++) { g.fillStyle = 'rgba(150,90,40,.15)'; g.fillRect(Math.random() * 256, Math.random() * 256, 20, 2); }
      g.strokeStyle = 'rgba(80,40,10,.3)'; g.lineWidth = 3; g.strokeRect(0, 0, 256, 256); rep = 1 / 0.4; rough = 0.3;
    }
    const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const r = { t, rep, rough }; texCache.set(kind, r); return r;
  }

  // ---------- absolute openings ----------
  const roomById = Object.fromEntries(spec.rooms.map(r => [r.id, r]));
  const absOpen = (spec.openings || []).map(o => {
    const r = roomById[o.room_id];
    if (o.wall === 'front') return { ...o, axis: 'x', line: r.y, a: r.x + o.offset_m };
    if (o.wall === 'back') return { ...o, axis: 'x', line: r.y + r.d, a: r.x + o.offset_m };
    if (o.wall === 'left') return { ...o, axis: 'y', line: r.x, a: r.y + o.offset_m };
    return { ...o, axis: 'y', line: r.x + r.w, a: r.y + o.offset_m };
  });

  // ---------- rooms ----------
  const walls = [];
  const ceilings = new THREE.Group(); ceilings.visible = false; root.add(ceilings);
  for (const r of spec.rooms) {
    const fmk = (r.floor_material || '').toLowerCase();
    const ft = floorTex(fmk);
    const tex = ft.t.clone(); tex.needsUpdate = true; tex.repeat.set(r.w * ft.rep, r.d * ft.rep);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(r.w, r.d), new THREE.MeshStandardMaterial({ map: tex, roughness: ft.rough }));
    floor.rotation.x = -Math.PI / 2; floor.position.set(r.x + r.w / 2, 0.004, -(r.y + r.d / 2)); floor.receiveShadow = true; root.add(floor);
    if (r.enclosed === false) continue;
    const H = r.ceiling_h_m || 2.9;
    { // ceiling (shown only in interior views) + ceiling light
      const cm = new THREE.Mesh(new THREE.PlaneGeometry(r.w, r.d), new THREE.MeshStandardMaterial({ color: '#FAFAF7', roughness: 1, side: THREE.DoubleSide }));
      cm.rotation.x = Math.PI / 2; cm.position.set(r.x + r.w / 2, H, -(r.y + r.d / 2)); cm.castShadow = true; cm.receiveShadow = true; ceilings.add(cm);
      const cool = /dapur|mandi/.test(r.id);
      const L = new THREE.PointLight(cool ? 0xfff2e2 : 0xffdcb4, opts.roomLight ?? 2.2, 7, 1.6); L.position.set(r.x + r.w / 2, H - 0.25, -(r.y + r.d / 2)); root.add(L);
      sph(0.08, mat('#ffffff', { e: cool ? '#fff2e2' : '#ffdcb4', ei: 2 }), r.x + r.w / 2, H - 0.05, -(r.y + r.d / 2), ceilings).castShadow = false;
    }
    const sides = [
      { side: 'front', axis: 'x', line: r.y, a0: r.x, len: r.w, inward: +1 },
      { side: 'back', axis: 'x', line: r.y + r.d, a0: r.x, len: r.w, inward: -1 },
      { side: 'left', axis: 'y', line: r.x, a0: r.y, len: r.d, inward: +1 },
      { side: 'right', axis: 'y', line: r.x + r.w, a0: r.y, len: r.d, inward: -1 },
    ];
    for (const s of sides) {
      const acc = r.accent_wall && r.accent_wall.wall === s.side ? r.accent_wall.color_hex : null;
      const wc = acc || r.wall_color_hex || '#F3EDE1';
      const lowerBand = r.accent_wall && r.accent_wall.wall === 'all_lower_1m' ? r.accent_wall.color_hex : null;
      const m = mat(wc, { r: 0.92 });
      const grp = new THREE.Group(); root.add(grp);
      // centre of this half wall, perpendicular coordinate (plan units)
      const perp = s.line + s.inward * HALF / 2;
      const seg = (u0, u1, y0, y1, material = m) => {
        if (u1 - u0 < 0.004 || y1 - y0 < 0.004) return;
        const mid = (u0 + u1) / 2, len = u1 - u0;
        if (s.axis === 'x') box(len, y1 - y0, HALF, material, mid, (y0 + y1) / 2, -perp, grp);
        else box(HALF, y1 - y0, len, material, perp, (y0 + y1) / 2, -mid, grp);
      };
      const holes = absOpen.filter(o => o.axis === s.axis && Math.abs(o.line - s.line) < 0.03 && o.a < s.a0 + s.len - 0.01 && o.a + o.width_m > s.a0 + 0.01).sort((p, q) => p.a - q.a);
      // draw wall as vertical strips between holes; each hole keeps sill + lintel parts
      let cur = s.a0;
      const strip = (u0, u1, y0, y1) => {
        if (lowerBand) { seg(u0, u1, y0, Math.min(y1, Math.max(y0, 1.0)), mat(lowerBand, { r: 0.6 })); seg(u0, u1, Math.max(y0, 1.0), y1); }
        else seg(u0, u1, y0, y1);
      };
      for (const o of holes) {
        const a = Math.max(s.a0, o.a), b = Math.min(s.a0 + s.len, o.a + o.width_m);
        strip(cur, a, 0, H);
        const sill = o.type === 'door' ? 0 : (o.sill_m ?? 0.9);
        const top = Math.min(H, sill + o.height_m);
        strip(a, b, 0, sill); strip(a, b, top, H);
        // frames / glass (only from the room that owns the opening, so it is not doubled)
        if (o.room_id === r.id) {
          const fr = mat('#4A3426', { r: 0.5 });
          const u = (a + b) / 2, len = b - a;
          const P = (uu, yy, w, h, d, mm) => s.axis === 'x' ? box(w, h, d, mm, uu, yy, -s.line, grp) : box(d, h, w, mm, s.line, yy, -uu, grp);
          if (o.type === 'door') {
            P(a + 0.025, top / 2, 0.05, top, 0.17, fr); P(b - 0.025, top / 2, 0.05, top, 0.17, fr); P(u, top - 0.025, len, 0.05, 0.17, fr);
          } else {
            const gl = P(u, (sill + top) / 2, len, top - sill, 0.012, mat('#a9c6d3', { op: 0.3, r: 0.05 })); gl.castShadow = false;
            P(u, sill, len + 0.04, 0.04, 0.2, fr); P(u, top, len + 0.04, 0.04, 0.17, fr);
            P(a + 0.02, (sill + top) / 2, 0.04, top - sill, 0.17, fr); P(b - 0.02, (sill + top) / 2, 0.04, top - sill, 0.17, fr);
            if ((o.note || '').match(/teralis/)) for (let i = 1; i < Math.max(2, Math.round(len / 0.12)); i++) P(a + i * len / Math.max(2, Math.round(len / 0.12)), (sill + top) / 2, 0.012, top - sill, 0.012, mat('#222', { m: 0.5 }));
          }
        }
        cur = b;
      }
      strip(cur, s.a0 + s.len, 0, H);
      // skirting on the inner face
      const sk = mat('#E8E0D2', { r: 0.6 });
      const sp = s.line + s.inward * (HALF + 0.005);
      if (s.axis === 'x') box(s.len - 0.15, 0.08, 0.01, sk, s.a0 + s.len / 2, 0.04, -sp, grp).castShadow = false;
      else box(0.01, 0.08, s.len - 0.15, sk, sp, 0.04, -(s.a0 + s.len / 2), grp).castShadow = false;
      // normal pointing out of the room, in three.js (x, z)
      const n = s.axis === 'x' ? [0, s.inward > 0 ? 1 : -1] : [s.inward > 0 ? -1 : 1, 0];
      const c = s.axis === 'x' ? [s.a0 + s.len / 2, -s.line] : [s.line, -(s.a0 + s.len / 2)];
      walls.push({ grp, n, c, roomId: r.id, side: s.side });
    }
  }

  // ---------- furniture ----------
  for (const f of spec.furniture || []) {
    const rot = ((f.rotation_deg || 0) % 360 + 360) % 360;
    const sideways = rot === 90 || rot === 270;
    const w = (sideways ? f.d_cm : f.w_cm) / 100; // local width across the face
    const d = (sideways ? f.w_cm : f.d_cm) / 100; // local depth front-to-back
    const h = f.h_cm / 100;
    const c = f.color_hex || '#b08960';
    const n = (f.name || '').toLowerCase();
    const g = new THREE.Group();
    const base = mat(c, { r: 0.7 });
    const wood = mat('#D8B98A', { r: 0.6 });
    const dark = mat('#3B3F3A', { r: 0.5, m: 0.2 });
    const linen = mat('#ECE5D8', { r: 1 });
    let z0 = f.z_m ?? 0;
    if (f.rug || /karpet|rug/.test(n)) {
      if (/shower/.test(n)) { box(w, 0.03, d, mat('#d4dadb', { r: 0.3 }), 0, 0.015, 0, g); cyl(0.04, 0.04, 0.02, dark, 0, 0.03, 0, g); box(0.04, 1.9, 0.04, mat('#c8c8c8', { m: 0.8, r: 0.2 }), 0, 1.0, -d / 2 + 0.03, g); }
      else { const m = box(w, 0.012, d, mat(c, { r: 1 }), 0, 0.006, 0, g); m.castShadow = false; box(w - 0.08, 0.002, d - 0.08, mat(shade(c, 0.92), { r: 1 }), 0, 0.013, 0, g).castShadow = false; }
    } else if (/tempat tidur|kasur|ranjang|bed\b/.test(n)) {
      box(w, 0.3, d, base, 0, 0.15, 0, g);
      box(w - 0.06, 0.22, d - 0.1, linen, 0, 0.41, 0.03, g);
      box(w, 0.95, 0.07, base, 0, 0.475, -d / 2 + 0.035, g);
      box(w - 0.04, 0.05, d * 0.42, mat('#A9B59B', { r: 1 }), 0, 0.545, d * 0.25, g);
      const k = w > 1.3 ? 2 : 1, pw = (w - 0.2) / k;
      for (let i = 0; i < k; i++) box(pw - 0.06, 0.12, 0.38, mat('#FAF8F3', { r: 1 }), -w / 2 + 0.13 + pw / 2 + i * pw, 0.58, -d / 2 + 0.3, g);
      box(0.5, 0.15, 0.4, mat('#C4744F', { r: 1 }), w * 0.18, 0.6, -d / 2 + 0.55, g);
    } else if (/mobil|car\b/.test(n)) {
      const body = mat(c, { r: 0.25, m: 0.6 });
      box(w, 0.62, d, body, 0, 0.5, 0, g); box(w - 0.12, 0.5, d * 0.52, body, 0, 1.06, -d * 0.04, g);
      box(w - 0.1, 0.42, d * 0.5, mat('#26323a', { r: 0.1, m: 0.3, op: 0.9 }), 0, 1.06, -d * 0.04, g);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const t = cyl(0.33, 0.33, 0.22, mat('#111', { r: 0.9 }), sx * (w / 2 - 0.08), 0.33, sz * (d / 2 - 0.75), g); t.rotation.z = Math.PI / 2; }
    } else if (/kloset|toilet|wc\b/.test(n)) {
      box(w, 0.42, d * 0.6, mat('#FFFFFF', { r: 0.2 }), 0, 0.21, d * 0.1, g); box(w, 0.4, 0.18, mat('#FFFFFF', { r: 0.2 }), 0, 0.6, -d / 2 + 0.09, g);
    } else if (/kompor|bak cuci|meja dapur|meja persiapan/.test(n)) {
      box(w, h - 0.04, d, mat('#E6E3DC', { r: 0.6 }), 0, (h - 0.04) / 2, 0, g);
      box(w + 0.01, 0.04, d + 0.01, mat('#B9B8B2', { r: 0.35 }), 0, h - 0.02, 0, g);
      const doors = Math.max(1, Math.round(w / 0.5)); for (let i = 1; i < doors; i++) box(0.006, h - 0.12, 0.005, dark, -w / 2 + i * w / doors, (h - 0.12) / 2 + 0.04, d / 2 + 0.003, g);
      box(w, 0.6, 0.012, mat('#FAFAF7', { r: 0.25 }), 0, h + 0.3, -d / 2 + 0.006, g); // backsplash
      if (/kompor/.test(n)) { box(0.7, 0.04, 0.4, mat('#222', { r: 0.3, m: 0.4 }), w * 0.12, h + 0.02, 0, g); for (const sx of [-0.17, 0.17]) cyl(0.08, 0.08, 0.02, mat('#555'), w * 0.12 + sx, h + 0.05, 0, g); }
      if (/bak cuci/.test(n)) { box(0.55, 0.02, 0.4, mat('#c8c8c8', { m: 0.8, r: 0.25 }), 0, h + 0.002, 0.02, g); cyl(0.012, 0.012, 0.3, mat('#c8c8c8', { m: 0.8, r: 0.2 }), 0, h + 0.15, -d / 2 + 0.08, g); }
    } else if (/sofa/.test(n)) {
      const cm = mat(c, { r: 1 });
      box(w, 0.22, d, cm, 0, 0.3, 0, g);
      box(w - 0.3, 0.14, d - 0.24, mat(shade(c, 1.03), { r: 1 }), 0, 0.48, 0.07, g);
      box(w - 0.3, h - 0.22, 0.2, cm, 0, 0.2 + (h - 0.22) / 2, -d / 2 + 0.1, g);
      box(0.15, 0.4, d, cm, -w / 2 + 0.075, 0.42, 0, g); box(0.15, 0.4, d, cm, w / 2 - 0.075, 0.42, 0, g);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.04, 0.19, 0.04, mat('#6b4a32'), sx * (w / 2 - 0.08), 0.095, sz * (d / 2 - 0.08), g);
      box(0.42, 0.4, 0.14, mat('#C4744F', { r: 1 }), -w / 2 + 0.4, 0.68, -d / 2 + 0.28, g); box(0.42, 0.4, 0.14, mat('#8A9A7B', { r: 1 }), w / 2 - 0.4, 0.68, -d / 2 + 0.28, g);
    } else if (/bangku jati|bangku kayu ukir/.test(n)) {
      box(w, 0.06, d, base, 0, 0.44, 0, g); box(w, h - 0.47, 0.05, base, 0, 0.47 + (h - 0.47) / 2, -d / 2 + 0.025, g);
      for (let i = 0; i < Math.round(w / 0.12); i++) box(0.03, h - 0.55, 0.02, base, -w / 2 + 0.06 + i * 0.12, 0.5 + (h - 0.55) / 2, -d / 2 + 0.03, g);
      box(0.05, 0.62, d, base, -w / 2 + 0.025, 0.31, 0, g); box(0.05, 0.62, d, base, w / 2 - 0.025, 0.31, 0, g);
      box(w - 0.12, 0.06, d - 0.12, linen, 0, 0.5, 0.02, g);
    } else if (/kursi|stool/.test(n)) {
      const seatH = 0.45;
      box(w, 0.06, d, base, 0, seatH, 0, g);
      if (!/stool/.test(n)) box(w, h - seatH, 0.05, base, 0, seatH + (h - seatH) / 2, -d / 2 + 0.025, g);
      if (/jati/.test(n)) { box(0.05, 0.62, d, base, -w / 2 + 0.025, 0.31, 0, g); box(0.05, 0.62, d, base, w / 2 - 0.025, 0.31, 0, g); box(w - 0.12, 0.06, d - 0.12, linen, 0, seatH + 0.06, 0.02, g); }
      else if (/ergonomis/.test(n)) { cyl(0.03, 0.03, seatH, dark, 0, seatH / 2, 0, g); cyl(0.28, 0.28, 0.03, dark, 0, 0.05, 0, g); }
      else for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.035, seatH, 0.035, base, sx * (w / 2 - 0.035), seatH / 2, sz * (d / 2 - 0.035), g);
    } else if (/bangku|banquette/.test(n)) { // storage benches
      box(w, h - 0.08, d, base, 0, (h - 0.08) / 2, 0, g); box(w - 0.02, 0.08, d - 0.02, mat(/sepatu/.test(n) ? '#E6DCCB' : '#8A9A7B', { r: 1 }), 0, h - 0.04, 0, g);
    } else if (/meja rias/.test(n)) {
      box(w, h, d, base, 0, h / 2, 0, g); box(w * 0.8, 0.7, 0.03, mat('#5b4636'), 0, h + 0.4, -d / 2 + 0.03, g); box(w * 0.8 - 0.05, 0.65, 0.035, mat('#c9d8dd', { r: 0.15, m: 0.15 }), 0, h + 0.4, -d / 2 + 0.035, g);
    } else if (/meja/.test(n)) {
      box(w, 0.035, d, base, 0, h - 0.0175, 0, g);
      if (/samping|sudut kecil/.test(n)) { cyl(0.025, 0.025, h - 0.035, wood, 0, (h - 0.035) / 2, 0, g); cyl(0.18, 0.18, 0.02, wood, 0, 0.01, 0, g); if (/lampu|tanaman/.test(n)) { cyl(0.07, 0.06, 0.12, mat('#C4744F'), 0.05, h + 0.06, 0, g); sph(0.12, mat('#4f7046', { r: 0.9 }), 0.05, h + 0.2, 0, g); } }
      else for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.04, h - 0.035, 0.04, /kerja/.test(n) ? dark : base, sx * (w / 2 - 0.04), (h - 0.035) / 2, sz * (d / 2 - 0.04), g);
      if (/kerja/.test(n)) { box(w * 0.42, 0.003, 0.3, mat('#2d3436'), 0, h + 0.002, 0.12, g); box(w * 0.9, 0.08, 0.15, dark, 0, h - 0.1, -d / 2 + 0.1, g); }
      if (/makan/.test(n)) { cyl(0.09, 0.07, 0.12, mat('#E6DCCB'), 0, h + 0.06, 0, g); }
    } else if (/\btv\b|monitor/.test(n)) {
      box(w, h, 0.04, mat('#111111', { r: 0.25 }), 0, h / 2, 0, g);
      if (/monitor/.test(n)) { box(0.08, 0.12, 0.08, dark, 0, -0.06, 0, g); z0 = Math.max(z0, 0.74) + 0.12; }
    } else if (/tanaman|pot tanaman/.test(n)) {
      cyl(Math.min(w, d) * 0.4, Math.min(w, d) * 0.3, Math.min(0.4, h * 0.3), mat('#C9A46B', { r: 0.9 }), 0, Math.min(0.4, h * 0.3) / 2, 0, g);
      const leaf = mat('#4f7046', { r: 0.9 }); const r0 = Math.max(w, d) * 0.45;
      for (let i = 0; i < 7; i++) sph(r0 * (0.75 + 0.1 * (i % 3)), leaf, Math.cos(i * 2.1) * r0 * 0.4, h * 0.45 + i * h * 0.075, Math.sin(i * 2.1) * r0 * 0.4, g);
    } else if (/lampu gantung|pendant/.test(n)) {
      const shadeM = mat(c, { r: 0.8 });
      cyl(Math.min(w, d) * 0.2, Math.min(w, d) / 2, h, shadeM, 0, h / 2, 0, g);
      cyl(0.004, 0.004, 1.2, dark, 0, h + 0.6, 0, g);
      sph(0.05, mat('#fff2d8', { e: '#ffcf8a', ei: 2 }), 0, 0.05, 0, g).castShadow = false;
      const L = new THREE.PointLight(0xffd7a8, 1.2, 4, 2); L.position.set(0, -0.05, 0); g.add(L);
    } else if (/lampu/.test(n)) {
      cyl(0.13, 0.15, 0.03, dark, 0, 0.015, 0, g); cyl(0.012, 0.012, h - 0.3, dark, 0, (h - 0.3) / 2, 0, g);
      cyl(w * 0.35, w / 2, 0.32, mat('#E6DCCB', { r: 1, e: '#ffcf8a', ei: 0.35 }), 0, h - 0.16, 0, g);
      const L = new THREE.PointLight(0xffd7a8, 1.0, 4, 2); L.position.set(0, h - 0.2, 0); g.add(L);
    } else if (/kaligrafi|foto pasangan/.test(n)) {
      box(w, h, 0.03, mat(/kaligrafi/.test(n) ? '#A07A3A' : '#FFFFFF', { r: 0.5, m: /kaligrafi/.test(n) ? 0.4 : 0 }), 0, h / 2, 0, g);
      box(w - 0.1, h - 0.1, 0.035, mat(/kaligrafi/.test(n) ? '#EFE6D0' : '#9a9ea3', { r: 0.9 }), 0, h / 2, 0.002, g);
    } else if (/galeri|gallery/.test(n)) {
      const cols = 3, rows = 3, gw = (w - 0.1) / cols, gh = (h - 0.1) / rows;
      const tones = ['#d9c8a9', '#a9b8a0', '#c7b2a0', '#b8c4cc', '#d6cbb8', '#9fa99a'];
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const x = -w / 2 + gw / 2 + 0.05 + i * gw, y = 0.05 + gh / 2 + j * gh; box(gw - 0.05, gh - 0.05, 0.025, mat('#2B2B2B'), x, y, 0, g); box(gw - 0.11, gh - 0.11, 0.028, mat(tones[(i + j * 2) % 6], { r: 0.9 }), x, y, 0.002, g); }
    } else if (/cermin|mirror/.test(n)) {
      box(w, h, 0.025, mat('#4A3426'), 0, h / 2, 0, g); box(w - 0.05, h - 0.05, 0.03, mat('#c9d8dd', { r: 0.12, m: 0.15 }), 0, h / 2, 0.002, g);
    } else if (/kulkas|dispenser/.test(n)) {
      box(w, h, d, mat(c, { r: 0.35, m: /kulkas/.test(n) ? 0.5 : 0 }), 0, h / 2, 0, g);
      box(0.02, h * 0.25, 0.03, mat('#777', { m: 0.6 }), w / 2 - 0.07, h * 0.62, d / 2 + 0.015, g);
      if (/dispenser/.test(n)) cyl(0.14, 0.14, 0.42, mat('#9ec9e0', { op: 0.6, r: 0.1 }), 0, h + 0.21, 0, g);
    } else if (/rak galon/.test(n)) {
      for (let i = 0; i < 3; i++) { box(w, 0.02, d, dark, 0, 0.05 + i * 0.36, 0, g); cyl(0.13, 0.13, 0.3, mat('#9ec9e0', { op: 0.65, r: 0.1 }), 0, 0.22 + i * 0.36, 0, g).rotation.x = Math.PI / 2; }
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.02, h, 0.02, dark, sx * (w / 2 - 0.01), h / 2, sz * (d / 2 - 0.01), g);
    } else if (/sampah/.test(n)) {
      box(w, h, d, base, 0, h / 2, 0, g); box(w + 0.02, 0.03, d + 0.02, mat(shade(c, 0.8)), 0, h, 0, g);
    } else if (/keranjang/.test(n)) {
      cyl(0.22, 0.2, 0.5, mat('#C9A46B', { r: 1 }), -w / 2 + 0.25, 0.25, 0, g); box(0.6, h, 0.06, mat('#d0d0d0', { m: 0.6, r: 0.3 }), w / 2 - 0.32, h / 2, -d / 2 + 0.05, g);
    } else if (/ac indoor/.test(n)) {
      box(w, h, d, mat('#FFFFFF', { r: 0.4 }), 0, h / 2, 0, g); box(w - 0.06, 0.02, 0.01, mat('#ddd'), 0, 0.05, d / 2, g);
    } else { // cabinets, shelves, wardrobes and the rest
      box(w, h, d, base, 0, h / 2, 0, g);
      if (/lemari|kabinet|rak tv/.test(n)) {
        const doors = Math.max(1, Math.round(w / (/geser/.test(n) ? 0.9 : 0.45)));
        for (let i = 1; i < doors; i++) box(0.006, h - 0.04, 0.005, mat('#b9b2a5'), -w / 2 + i * w / doors, h / 2, d / 2 + 0.003, g);
        for (let i = 0; i < doors; i++) box(0.015, Math.min(0.25, h * 0.3), 0.02, dark, -w / 2 + (i + 0.5) * w / doors + (i % 2 ? -1 : 1) * (w / doors / 2 - 0.05), Math.min(h / 2, 1.05), d / 2 + 0.01, g);
        if (/rak tv/.test(n)) box(w, 0.01, 0.01, mat('#fff1d6', { e: '#ffcf8a', ei: 1.5 }), 0, -0.005, d / 2 - 0.02, g);
        if (/teknis/.test(n)) for (let i = 0; i < 8; i++) box(w * 0.8, 0.012, 0.004, mat('#9b7b55'), 0, 0.1 + i * h / 9, d / 2 + 0.005, g);
      }
    }
    g.rotation.y = Math.PI - THREE.MathUtils.degToRad(rot);
    g.position.set(f.x, z0, -f.y);
    g.userData = { name: f.name, room: f.room_id };
    root.add(g);
  }

  function shade(hex, k) { const c = new THREE.Color(hex); c.multiplyScalar(k); return '#' + c.getHexString(); }
  return { root, walls, roomById, ceilings };
}
