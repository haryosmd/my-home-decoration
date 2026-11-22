// Draws an item by its "kind" (as-is scene vocabulary). Local frame: width w across the face (x),
// depth d front-to-back (z, front = +z), height h (y, from 0). Returns false for unknown kinds.
export function drawKind(THREE, H, kind, w, d, h, c, g, f, rnd) {
  const { box, cyl, sph, mat, tex } = H;
  const col = (fallback) => f.color_hex || fallback;
  const darkWood = mat('#3d2617', { r: 0.5 });
  const metal = mat('#b9bcbf', { m: 0.6, r: 0.35 });
  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
  const clutterColors = ['#c0392b', '#e8e2d6', '#2c3e50', '#d35400', '#8e44ad', '#16a085', '#f1c40f', '#7f8c8d', '#e91e63', '#ffffff', '#34495e', '#b8916a'];
  // fills a footprint with small random blocks up to height hh, starting at y0
  const scatter = (ww, dd, hh, y0, n, colors = clutterColors, minS = 0.06, maxS = 0.25) => {
    for (let i = 0; i < n; i++) {
      const sw = Math.min(ww, minS + rnd() * (maxS - minS)), sd = Math.min(dd, minS + rnd() * (maxS - minS)), sh = Math.min(hh, 0.03 + rnd() * hh * 0.7);
      const m = box(sw, sh, sd, mat(pick(colors), { r: 0.85 }), (rnd() - 0.5) * (ww - sw), y0 + sh / 2, (rnd() - 0.5) * (dd - sd), g);
      m.rotation.y = (rnd() - 0.5) * 0.6;
    }
  };
  const legs4 = (ww, dd, hh, m, t = 0.04) => { for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(t, hh, t, m, sx * (ww / 2 - t), hh / 2, sz * (dd / 2 - t), g); };
  switch (kind) {
    case 'bed_frame': {
      box(w, h * 0.7, d, darkWood, 0, h * 0.35, 0, g);
      box(w - 0.04, h * 0.32, d - 0.04, mat(col('#b03a48'), { r: 1 }), 0, h * 0.7 + h * 0.16, 0, g);
      scatter(w * 0.8, d * 0.8, 0.15, h * 1.02, 6);
      return true;
    }
    case 'mattress_floor': {
      box(w, h, d, mat(col('#2B4DB3'), { r: 1 }), 0, h / 2, 0, g);
      box(w * 0.3, 0.12, d * 0.25, mat('#f2f2f2', { r: 1 }), w * 0.3, h + 0.06, -d * 0.35, g);
      scatter(w * 0.8, d * 0.7, 0.18, h, 7, ['#1f3a8a', '#c0392b', '#7f8c8d', '#e91e63', '#2c3e50', '#ffffff']);
      return true;
    }
    case 'mattress_standing': box(w, h, Math.max(d, 0.18), mat(col('#3d5a4a'), { r: 1, map: tex('floral') }), 0, h / 2, 0, g); return true;
    case 'pillow_pile': { const n = f.count || 4; for (let i = 0; i < n; i++) box(w * (0.85 + rnd() * 0.1), Math.min(0.16, h / n), d * 0.9, mat(pick(['#e7d27a', '#9ec3e6', '#e7a0b5', '#d9d2c5', '#f4ead2']), { r: 1 }), (rnd() - 0.5) * 0.05, (i + 0.5) * h / n, 0, g).rotation.y = (rnd() - 0.5) * 0.3; return true; }
    case 'clothes_pile': case 'shoe_pile': { scatter(w, d, h, 0, f.count || 12, kind === 'shoe_pile' ? ['#222', '#e8e2d6', '#7f8c8d', '#5b7fbf', '#c0392b'] : clutterColors, 0.08, kind === 'shoe_pile' ? 0.3 : 0.4); return true; }
    case 'wardrobe_wood': {
      box(w, h, d, mat(col('#4a2c1a'), { r: 0.55 }), 0, h / 2, 0, g);
      const n = Math.max(2, Math.round(w / 0.45)); for (let i = 1; i < n; i++) box(0.008, h - 0.06, 0.005, darkWood, -w / 2 + i * w / n, h / 2, d / 2 + 0.003, g);
      return true;
    }
    case 'wardrobe_rose_print': {
      box(w, h, d, mat('#c62828', { r: 0.5 }), 0, h / 2, 0, g);
      const n = Math.max(2, Math.round(w / 0.4));
      for (let i = 0; i < n; i++) box(w / n - 0.03, h - 0.08, 0.01, mat('#ffffff', { r: 0.6, map: tex('roses') }), -w / 2 + (i + 0.5) * w / n, h / 2, d / 2 + 0.006, g);
      return true;
    }
    case 'glass_cabinet': {
      const fr = metal; const t = 0.025;
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(t, h, t, fr, sx * (w / 2 - t / 2), h / 2, sz * (d / 2 - t / 2), g);
      const shelves = Math.max(3, Math.round(h / 0.35));
      for (let i = 0; i <= shelves; i++) { const y = 0.03 + i * (h - 0.06) / shelves; box(w, 0.015, d, mat('#d7dde0', { op: 0.5, r: 0.1 }), 0, y, 0, g); if (i < shelves) scatter(w - 0.06, d - 0.06, (h - 0.06) / shelves - 0.04, y + 0.01, 7); }
      box(w, h, 0.006, mat('#cfe3ea', { op: 0.18, r: 0.05 }), 0, h / 2, d / 2, g).castShadow = false;
      return true;
    }
    case 'dresser_mirror': {
      const lowH = Math.min(h, 0.8);
      box(w, lowH, d, mat(col('#4a2c1a'), { r: 0.55 }), 0, lowH / 2, 0, g);
      box(w * 0.6, Math.max(0.5, h - lowH - 0.1), 0.03, darkWood, 0, lowH + (h - lowH) / 2, -d / 2 + 0.03, g);
      box(w * 0.55, Math.max(0.45, h - lowH - 0.15), 0.035, mat('#c9d8dd', { r: 0.12, m: 0.15 }), 0, lowH + (h - lowH) / 2, -d / 2 + 0.035, g);
      scatter(w - 0.05, d - 0.1, 0.18, lowH, 14, ['#ffffff', '#f5b7b1', '#d7bde2', '#a9cce3', '#f9e79f', '#2c3e50']);
      return true;
    }
    case 'desk_glass': {
      box(w, 0.012, d, mat('#a9c6cf', { op: 0.55, r: 0.05 }), 0, h - 0.006, 0, g);
      legs4(w, d, h - 0.012, mat('#5f6468', { m: 0.4, r: 0.4 }), 0.035);
      return true;
    }
    case 'office_chair': {
      cyl(0.03, 0.03, 0.42, mat('#333'), 0, 0.21, 0, g); cyl(0.3, 0.3, 0.03, mat('#333'), 0, 0.04, 0, g);
      box(w * 0.9, 0.07, d * 0.85, mat('#8e9093', { r: 0.8 }), 0, 0.47, 0, g);
      box(w * 0.85, h - 0.55, 0.06, mat('#5c5f63', { r: 0.9 }), 0, 0.5 + (h - 0.55) / 2, -d / 2 + 0.05, g);
      if (f.draped) box(w * 0.9, h * 0.5, 0.12, mat('#3a2a22', { r: 1 }), 0, 0.5 + h * 0.3, -d / 2 + 0.05, g);
      return true;
    }
    case 'monitor': case 'tv': box(w, h, Math.min(0.05, d), mat('#111', { r: 0.25 }), 0, h / 2 + (kind === 'monitor' ? 0.1 : 0), 0, g); if (kind === 'monitor') box(0.08, 0.1, 0.08, mat('#222'), 0, 0.05, 0, g); return true;
    case 'laptop': box(w, Math.max(0.02, h), d, mat('#b5b8bb', { m: 0.6, r: 0.3 }), 0, Math.max(0.02, h) / 2, 0, g); return true;
    case 'stabilizer': box(w, h, d, mat('#c0392b', { r: 0.5 }), 0, h / 2, 0, g); box(w * 0.9, h * 0.6, 0.005, mat('#f4efe6'), 0, h * 0.45, d / 2 + 0.003, g); return true;
    case 'router': box(w, h * 0.35, d, mat('#ffffff', { r: 0.4 }), 0, h * 0.175, 0, g); for (const sx of [-0.35, 0.35]) box(0.012, h * 0.65, 0.012, mat('#ffffff'), sx * w, h * 0.35 + h * 0.32, 0, g); return true;
    case 'whiteboard': box(w, h, 0.02, metal, 0, h / 2, 0, g); box(w - 0.04, h - 0.04, 0.025, mat('#f7f7f5', { r: 0.3 }), 0, h / 2, 0.001, g); return true;
    case 'shelf_open': {
      const levels = Math.max(2, Math.round(h / 0.4));
      for (const sx of [-1, 1]) box(0.025, h, d, mat(col('#6d4c3d')), sx * (w / 2 - 0.0125), h / 2, 0, g);
      for (let i = 0; i <= levels; i++) { const y = i * h / levels; box(w, 0.02, d, mat(col('#6d4c3d')), 0, y + 0.01, 0, g); if (i < levels) scatter(w - 0.06, d - 0.04, h / levels - 0.05, y + 0.02, 6); }
      return true;
    }
    case 'wall_shelf_board': { box(w, 0.03, d, mat(col('#8fbf8f'), { r: 0.7 }), 0, 0.015, 0, g); if (h > 0.05) scatter(w - 0.04, d - 0.02, h, 0.03, f.count || Math.round(w * 6), ['#b8916a', '#c9a77c', '#e8e2d6', '#c0392b', '#ffffff', '#7f8c8d'], 0.15, 0.45); return true; }
    case 'upper_cabinet': {
      box(w, h, d, mat(col('#e6e6e0'), { r: 0.5 }), 0, h / 2, 0, g);
      const n = Math.max(1, Math.round(w / 0.3)); for (let i = 0; i < n; i++) box(w / n - 0.04, h - 0.08, 0.006, mat('#2b2f33', { op: 0.75, r: 0.1 }), -w / 2 + (i + 0.5) * w / n, h / 2, d / 2 + 0.004, g);
      return true;
    }
    case 'counter_masonry': case 'sink_counter': case 'stove_counter': {
      box(w, h - 0.03, d, mat('#3b3f3a', { r: 0.9 }), 0, (h - 0.03) / 2, 0, g);
      box(w, h * 0.75, 0.01, mat(kind === 'sink_counter' ? '#1e4d40' : '#2F55B8', { r: 0.3, map: kind === 'sink_counter' ? tex('greentile') : null }), 0, h * 0.42, d / 2 + 0.006, g);
      box(w + 0.01, 0.03, d + 0.01, mat(col('#2F55B8'), { r: 0.25 }), 0, h - 0.015, 0, g);
      box(w, 0.4, 0.01, mat('#2F55B8', { r: 0.25 }), 0, h + 0.2, -d / 2 + 0.006, g);
      if (kind === 'sink_counter') { box(0.5, 0.02, 0.38, mat('#c8c8c8', { m: 0.8, r: 0.25 }), 0, h + 0.002, 0, g); cyl(0.012, 0.012, 0.3, metal, 0.1, h + 0.15, -d / 2 + 0.06, g); }
      if (kind === 'stove_counter') { box(0.68, 0.08, 0.4, mat('#151515', { r: 0.3 }), 0, h + 0.04, 0, g); }
      scatter(w * 0.8, d * 0.7, 0.2, h, f.count || 6);
      return true;
    }
    case 'fridge': box(w, h, d, mat(col('#a9adb1'), { m: 0.5, r: 0.35 }), 0, h / 2, 0, g); box(0.02, h * 0.25, 0.03, mat('#555'), w / 2 - 0.07, h * 0.62, d / 2 + 0.015, g); box(w + 0.02, 0.01, d * 0.9, mat('#d4b06a', { r: 1 }), 0, h + 0.005, 0, g); scatter(w, d, 0.25, h, 4); return true;
    case 'dispenser': box(w, h, d, mat('#f2f2f2', { r: 0.4 }), 0, h / 2, 0, g); cyl(0.14, 0.14, 0.42, mat('#9ec9e0', { op: 0.6, r: 0.1 }), 0, h + 0.21, 0, g); return true;
    case 'gallon': { const n = f.count || 1; for (let i = 0; i < n; i++) cyl(0.135, 0.135, Math.min(h, 0.48), mat('#9ec9e0', { op: 0.65, r: 0.1 }), -w / 2 + 0.14 + i * 0.29, Math.min(h, 0.48) / 2, 0, g); return true; }
    case 'carved_bench': case 'teak_sofa': {
      const m = mat(col(kind === 'teak_sofa' ? '#B5783C' : '#7a4522'), { r: 0.55 });
      box(w, 0.06, d, m, 0, 0.44, 0, g); box(w, h - 0.47, 0.05, m, 0, 0.47 + (h - 0.47) / 2, -d / 2 + 0.025, g);
      for (let i = 0; i < Math.round(w / 0.1); i++) box(0.025, h - 0.6, 0.02, m, -w / 2 + 0.05 + i * 0.1, 0.5 + (h - 0.6) / 2, -d / 2 + 0.03, g);
      box(0.06, 0.6, d, m, -w / 2 + 0.03, 0.3, 0, g); box(0.06, 0.6, d, m, w / 2 - 0.03, 0.3, 0, g);
      if (f.count) scatter(w * 0.8, d * 0.7, 0.35, 0.47, f.count);
      return true;
    }
    case 'teak_chair': {
      const m = mat(col('#B5783C'), { r: 0.55 });
      box(w, 0.06, d, m, 0, 0.44, 0, g); box(w, h - 0.47, 0.05, m, 0, 0.47 + (h - 0.47) / 2, -d / 2 + 0.025, g);
      box(0.06, 0.62, d, m, -w / 2 + 0.03, 0.31, 0, g); box(0.06, 0.62, d, m, w / 2 - 0.03, 0.31, 0, g);
      return true;
    }
    case 'teak_table': case 'side_table': case 'chair_simple': case 'plastic_chair': {
      const m = mat(col(kind === 'plastic_chair' ? '#ece6d6' : kind === 'teak_table' ? '#B5783C' : '#5a4a3a'), { r: kind === 'plastic_chair' ? 0.4 : 0.6 });
      if (kind.endsWith('chair')) { box(w, 0.04, d, m, 0, 0.44, 0, g); box(w, h - 0.46, 0.04, m, 0, 0.46 + (h - 0.46) / 2, -d / 2 + 0.02, g); legs4(w, d, 0.44, m, 0.03); }
      else { box(w, 0.04, d, m, 0, h - 0.02, 0, g); legs4(w, d, h - 0.04, m, 0.045); if (kind === 'teak_table') box(w - 0.06, 0.02, d - 0.06, m, 0, h * 0.3, 0, g); }
      if (f.count) scatter(w * 0.85, d * 0.85, 0.2, kind.endsWith('chair') ? 0.46 : h, f.count);
      return true;
    }
    case 'round_table_clutter': {
      const r = Math.min(w, d) / 2;
      cyl(r, r, 0.03, mat('#6b4a32'), 0, h - 0.015, 0, g);
      cyl(r + 0.02, r + 0.06, h * 0.55, mat(col('#d9c9a3'), { r: 1, map: tex('cloth') }), 0, h - h * 0.275, 0, g);
      cyl(0.03, 0.03, h, mat('#2b2b2b'), 0, h / 2, 0, g);
      const n = f.count || 28;
      for (let i = 0; i < n; i++) { const a = rnd() * Math.PI * 2, rr = Math.sqrt(rnd()) * (r - 0.08); const s = 0.04 + rnd() * 0.12, hh = 0.04 + rnd() * 0.22; const m = rnd() < 0.4 ? cyl(s / 2, s / 2, hh, mat(pick(clutterColors)), Math.cos(a) * rr, h + hh / 2, Math.sin(a) * rr, g, 10) : box(s, hh, s * 1.3, mat(pick(clutterColors)), Math.cos(a) * rr, h + hh / 2, Math.sin(a) * rr, g); m.rotation.y = rnd() * 3; }
      return true;
    }
    case 'drying_rack': {
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.015, h, 0.015, metal, sx * (w / 2 - 0.01), h / 2, sz * (d / 2 - 0.01), g);
      for (let i = 0; i < 4; i++) box(w, 0.012, 0.012, metal, 0, h * (0.35 + i * 0.2), (i % 2 ? 1 : -1) * (d / 2 - 0.01), g);
      if (f.count) for (let i = 0; i < f.count; i++) box(0.25 + rnd() * 0.2, 0.3 + rnd() * 0.3, 0.01, mat(pick(clutterColors), { r: 1 }), (rnd() - 0.5) * (w - 0.3), h * 0.6, (rnd() - 0.5) * d * 0.6, g);
      return true;
    }
    case 'clothes_rail': {
      box(w, 0.02, 0.02, metal, 0, h, 0, g);
      const n = f.count || Math.round(w * 5); for (let i = 0; i < n; i++) { const ch = 0.3 + rnd() * 0.5; box(0.05 + rnd() * 0.25, ch, 0.02 + rnd() * 0.05, mat(pick(clutterColors), { r: 1 }), -w / 2 + (i + 0.5) * w / n, h - ch / 2 - 0.03, 0, g); }
      return true;
    }
    case 'boxes': {
      const colors = ['#b8916a', '#c9a77c', '#a87f56', '#d2b48c', '#9c7a54', '#e0c9a6'];
      const n = f.count || Math.max(2, Math.round(w * d * h * 30));
      let y = 0, layer = 0;
      for (let i = 0; i < n && y < h - 0.05; ) {
        const lh = Math.min(h - y, 0.15 + rnd() * 0.2); const k = 1 + Math.floor(rnd() * 3);
        for (let j = 0; j < k && i < n; j++, i++) { const bw = Math.min(w, (w / k) * (0.8 + rnd() * 0.2)); const bd = d * (0.7 + rnd() * 0.3); box(bw, lh, bd, mat(f.color_hex && layer === 0 && j === 0 ? f.color_hex : pick(colors), { r: 0.95 }), -w / 2 + (j + 0.5) * w / k, y + lh / 2, (rnd() - 0.5) * (d - bd), g).rotation.y = (rnd() - 0.5) * 0.2; }
        y += lh; layer++;
      }
      return true;
    }
    case 'bags': case 'trash_sack': {
      const n = f.count || (kind === 'trash_sack' ? 1 : 4);
      for (let i = 0; i < n; i++) {
        const s = kind === 'trash_sack' ? Math.min(w, d) / 2 : Math.min(w, d) * (0.25 + rnd() * 0.25);
        const sh = kind === 'trash_sack' ? h : h * (0.5 + rnd() * 0.5);
        const m = sph(s, mat(kind === 'trash_sack' ? '#eeeeee' : pick(['#c0392b', '#ffffff', '#1c1c1c', '#7d3c98', '#f5b7b1', '#2e86c1', '#b03a2e']), { r: 0.6 }), kind === 'trash_sack' ? 0 : (rnd() - 0.5) * (w - s), sh / 2, kind === 'trash_sack' ? 0 : (rnd() - 0.5) * (d - s), g);
        m.scale.set(1, sh / (2 * s), 1);
      }
      if (kind === 'trash_sack') sph(Math.min(w, d) * 0.3, mat('#d62c2c', { r: 0.5 }), w * 0.1, h * 0.95, 0, g);
      return true;
    }
    case 'laundry_basket': box(w, h, d, mat(col('#2e6fd6'), { r: 0.5 }), 0, h / 2, 0, g); scatter(w * 0.8, d * 0.8, 0.1, h, 3, ['#ffffff', '#e8e2d6', '#9ec3e6']); return true;
    case 'fan_standing': case 'fan_wall': {
      const m = mat(col(kind === 'fan_wall' ? '#ffffff' : '#1c1c1c'), { r: 0.5 });
      if (kind === 'fan_standing') { cyl(0.2, 0.22, 0.04, m, 0, 0.02, 0, g); cyl(0.02, 0.02, h - 0.3, m, 0, (h - 0.3) / 2, 0, g); }
      const head = cyl(Math.min(w, 0.45) / 2, Math.min(w, 0.45) / 2, 0.1, kind === 'fan_wall' ? mat('#8e7cc3', { r: 0.5 }) : m, 0, kind === 'fan_standing' ? h - 0.2 : h / 2, 0.02, g); head.rotation.x = Math.PI / 2;
      return true;
    }
    case 'rug_zigzag': case 'rug_plain': case 'door_mat': { const m = box(w, 0.012, d, mat(col(kind === 'rug_zigzag' ? '#ffffff' : '#8a6d5a'), { r: 1, map: kind === 'rug_zigzag' ? tex('zigzag', w, d) : null }), 0, 0.006, 0, g); m.castShadow = false; return true; }
    case 'guitar_wall': { const m = mat('#141414', { r: 0.7 }); const b = sph(w / 2, m, 0, h * 0.25, 0, g); b.scale.set(1, (h * 0.5) / w, Math.max(0.1, d) / w); const u = sph(w * 0.38, m, 0, h * 0.52, 0, g); u.scale.set(1, 1.1, Math.max(0.1, d) / w); box(w * 0.22, h * 0.4, Math.max(0.06, d * 0.6), m, 0, h * 0.8, 0, g); return true; }
    case 'broom': cyl(0.012, 0.012, h, mat(col('#c0c0c0')), 0, h / 2, 0, g); box(Math.max(0.2, w), 0.1, 0.06, mat('#2a2a2a'), 0, 0.05, 0, g); return true;
    case 'mirror': box(w, h, 0.025, mat(col('#7a3b22')), 0, h / 2, 0, g); box(w - 0.06, h - 0.06, 0.03, mat('#c9d8dd', { r: 0.12, m: 0.15 }), 0, h / 2, 0.002, g); return true;
    case 'frame': case 'calligraphy': box(w, h, 0.03, mat(col(kind === 'calligraphy' ? '#6b4a2b' : '#2b2b2b')), 0, h / 2, 0, g); box(w - 0.06, h - 0.06, 0.034, mat(kind === 'calligraphy' ? '#e9dfc7' : pick(['#a89a8a', '#8c9aa6', '#b39e86', '#c9c2b5']), { r: 0.9 }), 0, h / 2, 0.002, g); return true;
    case 'clock': { const m = cyl(w / 2, w / 2, 0.04, mat(col('#ffffff'), { r: 0.4 }), 0, w / 2, 0, g); m.rotation.x = Math.PI / 2; return true; }
    case 'curtain': { const n = Math.max(3, Math.round(w / 0.08)); for (let i = 0; i < n; i++) box(w / n + 0.01, h, 0.04 + (i % 2) * 0.03, mat(col('#a0743c'), { r: 1 }), -w / 2 + (i + 0.5) * w / n, h / 2, (i % 2) * 0.02, g); return true; }
    case 'pots_hanging': { const n = f.count || 6; for (let i = 0; i < n; i++) { const r = 0.08 + rnd() * 0.1; const m = cyl(r, r, 0.04, metal, -w / 2 + (i + 0.5) * w / n, h * (0.3 + rnd() * 0.6), 0.03, g); m.rotation.x = Math.PI / 2; } return true; }
    case 'dish_rack': { box(w, 0.02, d, mat('#ffffff'), 0, 0.01, 0, g); box(w, 0.02, d, mat('#ffffff'), 0, h * 0.55, 0, g); for (let i = 0; i < 8; i++) { const m = cyl(0.1, 0.1, 0.01, mat(pick(['#ffffff', '#e8d9c0', '#2e86c1'])), -w / 2 + 0.06 + i * (w - 0.12) / 7, 0.13, 0, g); m.rotation.z = Math.PI / 2; } return true; }
    case 'toilet': box(w, 0.42, d * 0.6, mat('#FFFFFF', { r: 0.2 }), 0, 0.21, d * 0.1, g); box(w, 0.4, 0.18, mat('#FFFFFF', { r: 0.2 }), 0, 0.6, -d / 2 + 0.09, g); return true;
    case 'shower': box(w, 0.02, d, mat('#cfe0d6', { r: 0.3 }), 0, 0.01, 0, g); box(0.04, 1.9, 0.04, metal, 0, 0.95, -d / 2 + 0.03, g); return true;
    case 'car': {
      const body = mat(col('#151515'), { r: 0.25, m: 0.6 });
      box(w, 0.62, d, body, 0, 0.5, 0, g); box(w - 0.12, 0.5, d * 0.52, body, 0, 1.06, -d * 0.04, g);
      box(w - 0.1, 0.42, d * 0.5, mat('#26323a', { r: 0.1, m: 0.3 }), 0, 1.06, -d * 0.04, g);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const t = cyl(0.33, 0.33, 0.22, mat('#111', { r: 0.9 }), sx * (w / 2 - 0.08), 0.33, sz * (d / 2 - 0.75), g); t.rotation.z = Math.PI / 2; }
      return true;
    }
    case 'plant_pot': {
      cyl(Math.min(w, d) * 0.4, Math.min(w, d) * 0.3, Math.min(0.4, h * 0.3), mat('#3b3b3b', { r: 0.9 }), 0, Math.min(0.4, h * 0.3) / 2, 0, g);
      const leaf = mat('#4f7046', { r: 0.9 }); const r0 = Math.max(w, d) * 0.45;
      for (let i = 0; i < 6; i++) sph(r0 * (0.7 + 0.1 * (i % 3)), leaf, Math.cos(i * 2.1) * r0 * 0.4, h * 0.45 + i * h * 0.08, Math.sin(i * 2.1) * r0 * 0.4, g);
      return true;
    }
    case 'generic_box': box(w, h, d, mat(col('#9a8f80'), { r: 0.8 }), 0, h / 2, 0, g); return true;
    case 'vanity_table': {
      const top = mat(col('#D8B98A'), { r: 0.55 });
      const deskH = Math.min(h, 0.76);
      box(w, 0.03, d, top, 0, deskH - 0.015, 0, g);
      box(w * 0.42, deskH - 0.03, d - 0.02, top, -w / 2 + w * 0.21, (deskH - 0.03) / 2, 0, g); // drawer stack
      for (let i = 0; i < 3; i++) box(w * 0.4, 0.004, 0.005, mat('#b39a74'), -w / 2 + w * 0.21, 0.2 + i * 0.2, d / 2 + 0.003, g);
      box(0.04, deskH - 0.03, d - 0.04, top, w / 2 - 0.02, (deskH - 0.03) / 2, 0, g);
      box(w - 0.06, 0.1, d - 0.05, top, 0, deskH - 0.08, 0, g); // drawer
      if (h > deskH + 0.3) {
      const mh = Math.max(0.5, h - deskH - 0.05), mw = Math.min(w * 0.7, 0.7);
      box(mw + 0.04, mh + 0.04, 0.03, mat('#E6DCCB', { r: 0.6 }), 0, deskH + 0.05 + mh / 2, -d / 2 + 0.03, g);
      box(mw, mh, 0.035, mat('#c9d8dd', { r: 0.12, m: 0.15 }), 0, deskH + 0.05 + mh / 2, -d / 2 + 0.035, g);
      for (let i = 0; i < 4; i++) for (const sx of [-1, 1]) sph(0.02, mat('#fff7e8', { e: '#fff1d6', ei: 2 }), sx * (mw / 2 + 0.03), deskH + 0.12 + i * (mh - 0.1) / 3, -d / 2 + 0.06, g).castShadow = false;
      }
      for (let i = 0; i < 6; i++) cyl(0.018, 0.018, 0.06 + rnd() * 0.08, mat(pick(['#ffffff', '#f5b7b1', '#d7bde2', '#E6DCCB', '#C4744F'])), w * 0.1 + i * 0.05, deskH + 0.06, -d / 2 + 0.12, g, 10);
      box(0.22, 0.12, 0.12, mat('#E6DCCB'), w / 2 - 0.16, deskH + 0.06, -d / 2 + 0.12, g); // organiser
      return true;
    }
    // ---- remote-work kit (redesign) ----
    case 'desk_standing': {
      const top = mat(col('#D8B98A'), { r: 0.55 }), frame = mat('#2f3236', { m: 0.4, r: 0.4 });
      box(w, 0.03, d, top, 0, h - 0.015, 0, g);
      for (const sx of [-1, 1]) { box(0.07, h - 0.03, 0.07, frame, sx * (w / 2 - 0.12), (h - 0.03) / 2, 0, g); box(0.07, 0.04, d * 0.9, frame, sx * (w / 2 - 0.12), 0.02, 0, g); }
      box(w - 0.3, 0.05, 0.05, frame, 0, h - 0.06, 0, g);
      box(w * 0.75, 0.08, 0.14, frame, 0, h - 0.11, -d / 2 + 0.1, g); // cable tray
      box(w * 0.38, 0.003, 0.32, mat('#2d3436'), 0, h + 0.002, d * 0.2, g); // desk mat
      box(0.06, 0.02, 0.03, mat('#555'), w / 2 - 0.12, h - 0.05, d / 2 - 0.02, g); // handset
      return true;
    }
    case 'monitor_arm': {
      const m = mat('#2f3236', { m: 0.5, r: 0.35 });
      box(0.08, 0.06, 0.1, m, 0, 0.03, -d / 2 + 0.06, g); cyl(0.018, 0.018, 0.38, m, 0, 0.22, -d / 2 + 0.06, g);
      box(0.04, 0.04, d * 0.5, m, 0, 0.4, -d / 4 + 0.06, g);
      return true;
    }
    case 'light_bar': box(w, 0.025, 0.06, mat('#1c1c1c', { r: 0.3 }), 0, 0.012, 0, g); box(w * 0.95, 0.006, 0.02, mat('#fff7e8', { e: '#ffe9c4', ei: 1.5 }), 0, -0.002, 0.01, g); return true;
    case 'ups': box(w, h, d, mat(col('#1c1c1c'), { r: 0.45 }), 0, h / 2, 0, g); box(w * 0.6, 0.04, 0.004, mat('#7fd38f', { e: '#3fbf5f', ei: 0.8 }), 0, h * 0.75, d / 2 + 0.002, g); return true;
    case 'mesh_node': cyl(Math.min(w, d) / 2, Math.min(w, d) / 2, h, mat('#f4f4f2', { r: 0.4 }), 0, h / 2, 0, g); cyl(Math.min(w, d) / 2.4, Math.min(w, d) / 2.4, 0.004, mat('#8fd0ff', { e: '#8fd0ff', ei: 1 }), 0, h + 0.002, 0, g); return true;
    case 'acoustic_panel': box(w, h, Math.max(0.03, d), mat(col('#8A9A7B'), { r: 1 }), 0, h / 2, 0, g); return true;
    case 'pegboard': {
      box(w, h, 0.018, mat(col('#E6DCCB'), { r: 0.8 }), 0, h / 2, 0, g);
      for (let i = 0; i < 6; i++) box(0.05 + rnd() * 0.12, 0.04 + rnd() * 0.1, 0.05, mat(pick(['#2f3236', '#C4744F', '#8A9A7B', '#ffffff', '#D8B98A'])), (rnd() - 0.5) * (w - 0.15), 0.1 + rnd() * (h - 0.2), 0.035, g);
      return true;
    }
    case 'key_light': { cyl(0.01, 0.01, h * 0.7, mat('#222'), 0, h * 0.35, 0, g); const p = box(Math.max(0.2, w), 0.25, 0.03, mat('#f7f3ea', { e: '#fff1d6', ei: 0.9 }), 0, h * 0.78, 0, g); p.rotation.x = -0.25; return true; }
    case 'footrest': { const p = box(w, 0.04, d, mat(col('#3b3f3a'), { r: 0.8 }), 0, Math.max(0.06, h) - 0.02, 0, g); p.rotation.x = 0.18; return true; }
  }
  return false;
}

// Procedural textures used by the kinds above.
export function makeTextures(THREE) {
  const cache = new Map();
  return (name, w = 1, d = 1) => {
    const key = name + (name === 'zigzag' ? `${w}x${d}` : '');
    if (cache.has(key)) return cache.get(key);
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    let rx = 1, ry = 1;
    if (name === 'roses') {
      g.fillStyle = '#f4f1ec'; g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 9; i++) { const x = (i * 83) % 256, y = (i * 57 + 30) % 256, r = 18 + (i % 3) * 12; g.fillStyle = '#4f8a3a'; g.beginPath(); g.ellipse(x + r, y + r * 0.6, r * 0.6, r * 0.25, 0.6, 0, 7); g.fill(); g.fillStyle = i % 2 ? '#b3122e' : '#e98aa6'; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); g.strokeStyle = 'rgba(80,0,10,.5)'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, r * 0.55, 0, 5); g.stroke(); }
    } else if (name === 'zigzag') {
      g.fillStyle = '#7d7d7d'; g.fillRect(0, 0, 256, 256);
      for (let i = -4; i < 10; i++) { g.strokeStyle = i % 2 ? '#111' : '#f2f2f2'; g.lineWidth = 16; g.beginPath(); for (let x = 0; x <= 256; x += 64) g.lineTo(x, i * 40 + ((x / 64) % 2 ? 40 : 0)); g.stroke(); }
      rx = Math.max(1, w / 0.9); ry = Math.max(1, d / 0.9);
    } else if (name === 'floral') {
      g.fillStyle = '#3d5a4a'; g.fillRect(0, 0, 256, 256); g.strokeStyle = '#c9c49a'; g.lineWidth = 3;
      for (let i = 0; i < 10; i++) { g.beginPath(); g.arc((i * 71) % 256, (i * 113) % 256, 20 + (i % 3) * 8, 0, 4); g.stroke(); }
    } else if (name === 'cloth') {
      g.fillStyle = '#d9c9a3'; g.fillRect(0, 0, 256, 256); for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(120,80,40,.35)'; g.beginPath(); g.arc(Math.random() * 256, Math.random() * 256, 6 + Math.random() * 10, 0, 7); g.fill(); }
    } else if (name === 'curtain') {
      g.fillStyle = '#a0743c'; g.fillRect(0, 0, 256, 256); for (let i = 0; i < 12; i++) { g.fillStyle = 'rgba(90,50,20,.45)'; g.beginPath(); g.ellipse((i * 47) % 256, (i * 91) % 256, 14, 26, 0.5, 0, 7); g.fill(); }
    } else if (name === 'greentile') {
      g.fillStyle = '#17392f'; g.fillRect(0, 0, 256, 256); g.strokeStyle = '#cfc39a'; g.lineWidth = 4; g.beginPath(); g.arc(128, 128, 50, 0, 7); g.stroke(); rx = 3; ry = 2;
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
    cache.set(key, t); return t;
  };
}
