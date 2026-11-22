# Rumah DD-30: redesain interior

- `plan/rencana-redesain.md`: rencana lengkap (denah perkiraan, diagnosis, konsep, redesain per ruang, anggaran 3 tingkat, tahapan, keputusan terbuka). Disusun oleh advisor (Fable) dari 26 foto. Semua ukuran perkiraan, ±0,3–0,5 m.
- `model/scene_spec.json`: desain baru (Sesudah): ruang, bukaan, dan 66 perabot usulan dengan koordinat.
- `model/scene_spec_asis.json`: kondisi sekarang: 130 barang ditiru dari foto, termasuk kekacauannya, dengan warna dinding dan lantai saat ini.
- `model/pascal-scene.json`: ekspor model dasar dari Pascal Editor 1.1.6, berisi dinding, 8 pintu, dan 3 dari 8 jendela. Lima jendela di dinding bersama belum masuk, finishing masih default, dan perabot belum dimasukkan. Lolos `verify_scene`. Impor ulang ke Pascal belum diuji.
- `renders/`: render desain baru; `renders/sekarang/`: render kondisi sekarang dari sudut yang sama.
- `security/`: hasil audit NVIDIA SkillSpector untuk skill Pascal.
