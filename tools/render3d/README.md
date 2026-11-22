# Renderer 3D (three.js)

Merender `docs/model/scene_spec.json` menjadi gambar potongan (cutaway) dan model interaktif.

```bash
npm i three@0.160.0
cp ../../docs/model/scene_spec.json spec.json
python3 -m http.server 8765 &   # dari folder ini
node shoot.cjs 11 out_          # butuh Playwright + Chromium; menghasilkan out_0.png … out_10.png
```

- `scene.js` membangun dinding (setengah tebal per ruang, berpusat di garis as), bukaan, lantai, dan perabot.
- `viewer.js` menyiapkan kamera, cahaya, dan cutaway (dinding yang menghadap kamera disembunyikan).
- `views.json` berisi sudut kamera dalam koordinat denah `[x, tinggi, y]`.
