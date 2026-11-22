# Rumah DD-30: redesain interior

- `plan/rencana-redesain.md`: rencana lengkap (denah perkiraan, diagnosis, konsep, redesain per ruang, anggaran 3 tingkat, tahapan, keputusan terbuka). Disusun oleh advisor (Fable) dari 26 foto. Semua ukuran perkiraan, ±0,3–0,5 m.
- `model/scene_spec.json`: data ruang, bukaan, dan 66 perabot dengan koordinat (dipakai renderer).
- `model/pascal-scene.json`: model dinding, pintu, dan jendela dari Pascal Editor (lolos `verify_scene`; perabot belum dimasukkan). Bisa dibuka di Pascal Editor lokal (`npx @pascal-app/cli@1.1.6 editor`).
- `renders/`: render setiap ruang.
- `security/`: hasil audit NVIDIA SkillSpector untuk skill Pascal.
