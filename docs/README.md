# Rumah DD-30: redesain interior

- `plan/rencana-redesain.md`: rencana lengkap (denah perkiraan, diagnosis, konsep, redesain per ruang, anggaran 3 tingkat, tahapan, keputusan terbuka). Disusun oleh advisor (Fable) dari 26 foto. Semua ukuran perkiraan, ±0,3–0,5 m.
- `model/scene_spec.json`: data ruang, bukaan, dan 66 perabot dengan koordinat (dipakai renderer).
- `model/pascal-scene.json`: ekspor model dasar dari Pascal Editor 1.1.6, berisi dinding, 8 pintu, dan 3 dari 8 jendela. Lima jendela di dinding bersama belum masuk, finishing masih default, dan perabot belum dimasukkan. Lolos `verify_scene`. Impor ulang ke Pascal belum diuji.
- `renders/`: render setiap ruang.
- `security/`: hasil audit NVIDIA SkillSpector untuk skill Pascal.
