# Rencana Penataan Rumah Blok DD-30

Disusun dari 26 foto (16 foto awal + 10 foto tambahan dapur, kamar belakang, dan sisi rumah). Semua ukuran adalah **perkiraan dari foto**, belum diukur dengan meteran. Semua harga adalah **kisaran** tahun 2026 dengan asumsi tarif kota di Jawa di luar Jakarta (asumsi saya; sesuaikan dengan kota Anda dan cek ulang di toko).

## Ringkasan

1. **Perbaiki bangunan dulu, baru dekorasi.** Atap ruang belakang bocor, dinding bawah lembap di hampir semua ruang, kamar belakang dan dapur tidak punya ventilasi, dan kabel listrik menumpuk. Mengecat sebelum ini beres berarti cat mengelupas lagi dalam satu musim hujan.
2. **Konsep: Tropis Hangat** (Japandi tropis). Dinding putih gading di seluruh rumah, kayu jati yang sudah ada dipertahankan, hijau ubin diulang sebagai hijau sage, dan semua barang masuk lemari tertutup.
3. **Ubin hijau dipertahankan** di teras, ruang tamu, ruang tengah, kamar belakang, dan dapur. Hanya kamar depan yang ditutup SPC motif kayu terang. Tidak ada bongkar lantai.
4. **Perubahan fungsi terbesar:** TV pindah ke ruang tamu, kulkas pindah ke dapur, dispenser dan galon pindah ke ruang belakang, ruang belakang jadi ruang makan + tempat sepatu + utilitas.
5. **Anggaran:** hemat Rp 28.015.000, menengah Rp 108.510.000, premium Rp 251.950.000 (sudah termasuk cadangan 10%). Rekomendasi saya: **menengah, dikerjakan bertahap** selama 6–12 bulan. Tahap wajib pertama (perbaikan + cat) di tingkat menengah sekitar Rp 32.690.000; furnitur menyusul ruang demi ruang.

---

## 1. Denah perkiraan

### Sistem koordinat

- Titik asal (0 ; 0) = sudut kiri-depan rumah, pada dinding yang menghadap jalan.
- x ke kanan sepanjang fasad, y masuk ke dalam rumah.
- "Depan" = arah jalan, "belakang" = menjauhi jalan, "kiri/kanan" = dilihat dari jalan menghadap rumah.
- Garis ruang = as dinding. Tebal dinding 15 cm, jadi muka dalam dinding ada 7,5 cm di dalam garis ruang dan ukuran bersih tiap ruang 15 cm lebih kecil. Semua furnitur sudah ditempatkan terhadap muka dalam dinding.
- Tapak total 8,15 × 11,8 m. Bagian asli rumah (lebar 5,0 m) ada di kiri; carport dan ruang belakang (lebar 3,15 m) adalah tambahan di kanan.

```
y=11.8 +----------------------------+--------+ . . . . . . +
       | DAPUR (galley) 4.7 x 1.8   | KAMAR  |  belum      |
       | kompor . . . bak cuci      | MANDI  |  diketahui  |
y=10.0 +----------+-[pintu]---------+--+-----+-------------+
       | KAMAR    | RUANG TENGAH       | RUANG BELAKANG    |
       | BELAKANG | 2.7 x 4.0          | 3.15 x 5.0        |
       | 2.3 x 4.0|                    | (ubin oranye,     |
       |      [pintu]              [pintu]  plafon bocor)  |
y=6.0  +----------+-[bukaan]-----------+                   |
       | KAMAR    | RUANG TAMU         |                   |
y=5.0  | DEPAN [pintu] 2.7 x 4.0       +-[pintu]-[jendela]-+
       | 2.3 x 6.0|                    | CARPORT           |
       |          |                    | 3.15 x 5.0        |
y=2.0  |          +[j]-[pintu 2 daun]-[j]                  |
       |       [j]| TERAS 2.7 x 2.0    . (terbuka)         |
y=0    +---[j]----+--------------------+-------------------+
      x=0        2.3                  5.0                8.15
                         J A L A N
```

### Ruang

| id | Ruang | x | y | lebar w | kedalaman d | Luas | Keyakinan |
|---|---|---|---|---|---|---|---|
| `kamar_depan` | Kamar Depan (tidur + kerja) | 0.0 | 0.0 | 2.3 | 6.0 | 13.8 m² | sedang (lebar ±0.2 m, panjang ±0.5 m) |
| `teras` | Teras | 2.3 | 0.0 | 2.7 | 2.0 | 5.4 m² | sedang (±0.2 m) |
| `ruang_tamu` | Ruang Tamu | 2.3 | 2.0 | 2.7 | 4.0 | 10.8 m² | sedang (lebar ±0.2 m, kedalaman ±0.4 m) |
| `ruang_tengah` | Ruang Tengah / Keluarga | 2.3 | 6.0 | 2.7 | 4.0 | 10.8 m² | sedang (lebar ±0.2 m, kedalaman ±0.4 m) |
| `kamar_belakang` | Kamar Belakang | 0.0 | 6.0 | 2.3 | 4.0 | 9.2 m² | sedang-rendah (±0.4 m) |
| `dapur` | Dapur (galley) | 0.0 | 10.0 | 4.7 | 1.8 | 8.5 m² | sedang (lebar bersih lorong 1.5-1.8 m, panjang ±0.4 m) |
| `kamar_mandi` | Kamar Mandi | 4.7 | 10.0 | 1.6 | 1.8 | 2.9 m² | rendah (hanya terlihat dari pintu; posisi di ujung kanan dapur pasti, ukuran dalam tebakan) |
| `ruang_belakang` | Ruang Belakang (makan + tempat sepatu + utilitas) | 5.0 | 5.0 | 3.1 | 5.0 | 15.8 m² | sedang (lebar ±0.15 m, kedalaman ±0.3 m) |
| `carport` | Carport | 5.0 | 0.0 | 3.1 | 5.0 | 15.8 m² | sedang (±0.3 m) |

Area x 6,3–8,15 ; y 10,0–11,8 (di belakang ruang belakang, di kanan kamar mandi) tidak terlihat di foto mana pun. Jangan dimodelkan sebagai ruang.

### Pintu dan jendela

Offset diukur dari sudut x-terkecil (dinding depan/belakang) atau y-terkecil (dinding kiri/kanan) ruang tersebut. Tiap bukaan ditulis satu kali.

| Ruang | Dinding | Offset (m) | Lebar (m) | Tinggi (m) | Ambang (m) | Jenis | Posisi absolut | Menuju | Catatan |
|---|---|---|---|---|---|---|---|---|---|
| `kamar_depan` | depan | 0.75 | 0.80 | 1.20 | 0.9 | jendela | y=0.00, x 0.75–1.55 | luar | jendela berteralis ke arah jalan; AC indoor di atasnya |
| `kamar_depan` | kanan | 0.50 | 0.80 | 1.80 | 0.3 | jendela | x=2.30, y 0.50–1.30 | teras | jendela tinggi berteralis menghadap teras |
| `kamar_depan` | kanan | 5.05 | 0.85 | 2.05 | 0.0 | pintu | x=2.30, y 5.05–5.90 | ruang_tamu | pintu kamar depan |
| `kamar_depan` | belakang | 0.75 | 0.60 | 0.30 | 2.3 | jendela | y=6.00, x 0.75–1.35 | kamar_belakang | roster/lubang angin dekat plafon, kemungkinan tembus ke kamar belakang (perlu dicek); rekomendasi: tutup akrilik bening yang bisa dibuka |
| `ruang_tamu` | depan | 0.15 | 0.35 | 1.80 | 0.3 | jendela | y=2.00, x 2.45–2.80 | teras | jendela mati sempit kiri pintu |
| `ruang_tamu` | depan | 0.70 | 1.30 | 2.10 | 0.0 | pintu | y=2.00, x 3.00–4.30 | teras | pintu utama dua daun @65 cm |
| `ruang_tamu` | depan | 2.10 | 0.50 | 1.80 | 0.3 | jendela | y=2.00, x 4.40–4.90 | teras | jendela jungkit kanan pintu |
| `ruang_tamu` | belakang | 0.10 | 0.90 | 2.10 | 0.0 | pintu | y=6.00, x 2.40–3.30 | ruang_tengah | bukaan tanpa daun pintu (sekarang bertirai), segaris dengan pintu utama dan pintu dapur |
| `ruang_tengah` | kiri | 0.15 | 0.85 | 2.05 | 0.0 | pintu | x=2.30, y 6.15–7.00 | kamar_belakang | pintu kamar belakang, berhadapan lurus dengan pintu ruang belakang |
| `ruang_tengah` | kanan | 0.10 | 0.85 | 2.05 | 0.0 | pintu | x=5.00, y 6.10–6.95 | ruang_belakang | pintu ke ruang belakang |
| `ruang_tengah` | belakang | 0.10 | 0.85 | 2.05 | 0.0 | pintu | y=10.00, x 2.40–3.25 | dapur | pintu dapur |
| `ruang_belakang` | depan | 0.30 | 0.85 | 2.05 | 0.0 | pintu | y=5.00, x 5.30–6.15 | carport | pintu samping dari carport; 2 lubang angin di atasnya |
| `ruang_belakang` | depan | 1.60 | 0.75 | 1.20 | 0.9 | jendela | y=5.00, x 6.60–7.35 | carport | jendela berteralis ke carport; 2 lubang angin di atasnya |
| `ruang_belakang` | belakang | 0.70 | 1.70 | 0.25 | 2.3 | jendela | y=10.00, x 5.70–7.40 | belum pasti | 3 glass block tinggi (digambar sebagai satu pita); sisi baliknya belum diketahui (kamar mandi atau area belakang) |
| `dapur` | belakang | 2.30 | 1.20 | 0.25 | 2.3 | jendela | y=11.80, x 2.30–3.50 | luar | 3 glass block tinggi di atas bak cuci (digambar sebagai satu pita) |
| `kamar_mandi` | kiri | 0.10 | 0.70 | 2.00 | 0.0 | pintu | x=4.70, y 10.10–10.80 | dapur | pintu kamar mandi di ujung kanan dapur |

### Dasar penyusunan denah (hubungan antar-ruang terlihat jelas di foto; angkanya tetap perkiraan)

- Kamar depan menjorok ke depan di sisi kiri teras. Jendelanya menghadap jalan (AC di atasnya) dan ada satu jendela tinggi berteralis menghadap teras. Pintunya ada di ujung belakang dinding kiri ruang tamu.
- Ruang tamu, ruang tengah, dan dapur berderet lurus ke belakang. Pintu utama, bukaan bertirai, dan pintu dapur hampir segaris.
- Pintu kamar belakang dan pintu ruang belakang berhadapan lurus di ujung depan ruang tengah.
- Ruang belakang ada di belakang carport. Dinding depannya (dengan pintu samping, jendela berteralis, dan 4 lubang angin) adalah dinding belakang carport, dan letaknya sekitar 1 m lebih ke depan daripada batas ruang tamu–ruang tengah.
- Dapur adalah lorong memanjang kiri–kanan di paling belakang, di belakang kamar belakang dan ruang tengah. Kompor di ujung kiri, bak cuci tepat di seberang pintu dari ruang tengah, kamar mandi di ujung kanan.
- Dinding belakang kamar depan punya roster di dekat plafon. Menurut denah ini roster itu tembus ke kamar belakang (belum terlihat dari sisi kamar belakang; mohon dicek). Ini petunjuk bahwa y≈6 dulunya dinding belakang rumah asli, dan semua yang di belakangnya adalah tambahan.

### Ukur dulu (10 menit dengan meteran)

Kesalahan perkiraan foto bisa ±0,3–0,5 m. Tujuh ukuran ini menentukan apakah furnitur muat:

1. **Lebar bersih kamar depan** (dinding ke dinding). Rencana tempat tidur melintang butuh ≥ 2,10 m.
2. Panjang kamar depan.
3. **Lebar lorong dapur** (dinding ke dinding). Rencana butuh ≥ 1,50 m.
4. Lebar dan kedalaman ruang tengah.
5. Lebar dan kedalaman ruang belakang.
6. Lebar bersih kamar belakang.
7. Lebar ruang tamu.

---

## 2. Diagnosis

### Prioritas 1 — kesehatan bangunan dan keselamatan

| # | Masalah | Di mana terlihat | Akibat kalau dibiarkan |
|---|---|---|---|
| 1 | **Atap bocor** | Ruang belakang: plafon bernoda hitam, berjamur, sambungan melendut, ada lubang di dua titik | Plafon runtuh, jamur menyebar, furnitur baru rusak |
| 2 | **Rembesan plafon** | Ruang tengah (pojok kanan-belakang dan dekat pintu ruang belakang), teras (cat plafon mengelupas) | Sama, skala lebih kecil |
| 3 | **Lembap naik dari bawah** (rising damp) dan garam dinding | Dinding kiri ruang tamu sampai ±1 m, hampir semua dinding kamar depan, dinding kanan ruang tengah dekat bangku, bercak putih di dinding biru kamar belakang, kaki dinding ruang belakang | Cat baru menggelembung dalam beberapa bulan, bau apek, jamur di belakang lemari |
| 4 | **Ventilasi buruk** | Kamar belakang tanpa jendela; dapur tanpa jendela (hanya 3 glass block mati dan satu grill plafon); ruang belakang hanya lubang angin kecil; jemuran di dalam rumah | Lembap, bau masakan, jamur, tidur tidak sehat |
| 5 | **Listrik** | Kamar depan: adaptor bertumpuk + stabilizer 1 kVA + 2 router pada satu stopkontak, kabel menjuntai di belakang TV. Ruang tengah: kabel melintang longgar di dinding. Dapur: stopkontak panjang tergeletak di atas koran dekat bak cuci. Ruang belakang: kotak meter/panel listrik di dinding kiri terhalang rak dan barang | Risiko korsleting dan kebakaran |
| 6 | **Sampah dan api di dapur** | Karung sampah besar terbuka di dalam dapur, koran dipakai alas dekat kompor | Kecoa, tikus, bau, risiko api |
| 7 | **Retak rambut** | Dinding ruang belakang (retak vertikal), sambungan balok–plafon teras | Kemungkinan besar kosmetik. Tandai ujungnya dengan pensil; kalau melebar lebih dari 2 mm dalam 3 bulan, panggil ahli struktur |

Catatan atap: jika lembaran atap lama adalah asbes gelombang, jangan dipotong atau diamplas kering. Tukang harus membasahi lembaran, memakai masker, dan membungkus bongkarannya.

### Prioritas 2 — per ruang

**Teras.** Set jati bagus dan layak dipertahankan, tetapi meja kopi berdiri tepat di depan jendela jungkit dan mempersempit jalan ke pintu. Meteran listrik dan kabel AC terbuka. Warna kuning lemon + lis oranye emas + ubin hijau saling berebut perhatian.

**Ruang tamu.** Tidak ada tempat duduk selain satu kursi yang dipakai menumpuk bantal. Keranjang cucian dan kipas di pojok. Foto keluarga tersebar acak di ketinggian berbeda. Ruang gelap: kanopi carport, gorden tebal, lampu satu titik 6500K, dan lantai gelap mengilap. Dinding kiri bernoda lembap.

**Ruang tengah.** Jadi gudang lewat: kasur cadangan berdiri di dinding, kulkas, bangku ukir penuh kardus, dispenser, kipas. Empat pintu/bukaan membuat hampir tidak ada dinding bebas. Kabel longgar di ketinggian kepala. Plafon bernoda.

**Kamar depan (tidur + kerja).** Kasur di lantai (lembap dan berdebu). Lemari pajangan kaca dipakai sebagai lemari baju sehingga semua isi terlihat. Meja kerja kaca penuh skincare, handuk, dan kabel. Stabilizer dan router di atas meja. Karpet zig-zag hitam-putih di atas ubin bermotif membuat ruang sempit 2,3 m terasa lebih ramai. Dinding kusam dan berjamur. Roster di dinding belakang kemungkinan besar membocorkan udara AC dan suara ke kamar belakang.

**Kamar belakang.** Tidak ada jendela. Biru tua menyerap cahaya. Dua lemari tidak serasi (aluminium motif mawar dan kayu gelap), keduanya penuh tumpukan kardus sepatu sampai plafon. Meja rias kelebihan muatan. Tas digantung di paku. Bercak garam di dinding.

**Dapur.** Lorong dengan lebar bersih ±1,65 m. Hijau stabilo + keramik biru + ubin hijau motif = tiga warna keras di ruang tanpa jendela. Papan rak di ketinggian 1,9 m penuh kardus (berdebu minyak, bisa jatuh). Panci digantung langsung di dinding yang berjamur. Meja tambahan penuh koran dan kardus mempersempit jalan ke kamar mandi. Sampah menumpuk di karung. Lampu satu bohlam, tidak ada lampu di atas meja kerja.

**Kamar mandi.** Hanya terlihat dari pintu: dinding keramik, shower dinding, kondisi tampak layak. Keyakinan rendah; belum bisa didiagnosis lebih jauh.

**Ruang belakang.** Meja makan bundar tertimbun barang. Sepatu, galon, jemuran, sapu, gitar, meja setrika, dan kardus bercampur. Kotak meter/panel listrik terhalang rak. Plafon bocor. Satu lampu 6500K.

**Carport dan fasad.** Kanopi berlumut membuat teras dan ruang tamu gelap. Lisplang bernoda hitam. Cat kuning sudah pudar.

---

## 3. Konsep desain: Tropis Hangat

Tiga aturan yang berlaku di semua ruang:

1. **Satu warna dinding terang-hangat di seluruh rumah.** Rumah kecil dengan lima warna dinding (kuning, krem, putih, biru, hijau) terasa seperti lima rumah. Satu warna membuat ruang menyambung dan memantulkan cahaya.
2. **Kayu sebagai benang merah.** Set jati teras dan bangku ukir ruang tengah dipertahankan. Furnitur baru memakai kayu terang (oak/sungkai) agar ruang tidak bertambah gelap.
3. **Semua barang punya rumah tertutup.** Sumber utama kesan berantakan adalah barang di atas lemari dan di lantai. Solusinya lemari tertutup, bukan rak terbuka tambahan.

### Keputusan ubin hijau

**Pertahankan** di teras, ruang tamu, ruang tengah, kamar belakang, dan dapur. **Tutup dengan SPC** hanya di kamar depan. **Jangan bongkar.**

- Kondisi ubin sangat baik: mengilap, tidak retak, nat rapat. Mengganti ±45 m² dengan granit 60×60 berarti sekitar Rp 16–19 juta ditambah 2 minggu debu. Uang itu lebih berguna untuk atap dan dinding lembap.
- Masalah ubin ini bukan motifnya, tetapi lingkungannya. Motif ramai + dinding kuning + lis emas + barang berserakan = kacau. Motif ramai + dinding putih gading + karpet jute polos di tengah + furnitur berkaki = terlihat seperti tegel lama yang sengaja dipertahankan.
- Menutup seluruh rumah dengan SPC selagi dinding masih lembap berisiko: uap terperangkap di bawah papan dan berbau. Tunggu satu musim hujan setelah perbaikan lembap.
- Kamar depan dikecualikan karena ruang 2,3 m yang dipakai bekerja seharian butuh lantai tenang. SPC klik 4 mm bisa dipasang di atas ubin dalam satu hari dan bisa dilepas lagi.

Syarat SPC: pasang setelah dinding kering dan dicat, pakai underlay, sisakan celah muai 8 mm di tepi (ditutup plint), dan serut bagian bawah daun pintu ±5 mm.

### Palet

| Peran | Warna | Hex | Dipakai di |
|---|---|---|---|
| Dinding utama | Putih gading hangat | `#F3EDE1` | Semua dinding dalam |
| Plafon dan lis profil | Putih bersih | `#FAFAF7` | Semua plafon; lis emas-oranye dicat putih |
| Aksen 1 | Hijau sage | `#8A9A7B` | Dinding belakang ruang tamu (di belakang kaligrafi) |
| Aksen 1 muda | Sage muda | `#A9B59B` | Dinding kiri kamar depan (latar video call) |
| Aksen 2 | Biru-hijau kabut | `#9DB0A8` | Dinding belakang kamar belakang (pengganti biru tua) |
| Dinding bawah tahan kotor | Sage abu | `#B7BFA9` | 1 m terbawah dinding ruang belakang |
| Ubin lama | Hijau botol | `#1E4D40` | Lantai (tetap) |
| Kayu lama | Jati madu | `#B5783C` | Set teras, bangku sepatu |
| Kayu baru | Oak terang | `#D8B98A` | Meja, rak, rangka tempat tidur |
| Lemari | Putih hangat | `#F7F4EE` | Semua lemari tertutup |
| Kusen dan pintu | Cokelat jati tua, satin | `#4A3426` | Pengganti hitam mengilap |
| Tekstil utama | Linen krem | `#E6DCCB` | Sofa, gorden |
| Tekstil alami | Jute/rotan | `#C9A46B` | Karpet, keranjang, kap lampu |
| Aksen kecil | Terakota | `#C4744F` | Bantal, pot (maksimal 10%) |
| Logam/garis | Arang | `#3B3F3A` | Bingkai foto, kaki lampu |
| Eksterior | Putih krem | `#EFE8DA` | Fasad, teras, carport (tahap 2) |

Minta toko cat mencocokkan (tinting) ke kode hex ini atau memilih warna terdekat di kartu warna. Pakai hasil akhir matte/eggshell yang bisa dilap.

### Pencahayaan

- **Ganti semua bohlam 6500K (putih kebiruan).** Itu yang membuat dinding terlihat kusam dan hijau.
- **3000K** (putih hangat) untuk ruang tamu, ruang tengah, kamar, meja makan.
- **4000K** (putih netral) untuk bidang kerja: meja kerja, meja dapur, kamar mandi, zona utilitas.
- CRI ≥ 90 di meja kerja dan meja rias, ≥ 80 di tempat lain.
- Tiga lapis di tiap ruang utama: lampu plafon, lampu kerja, satu lampu rendah (lampu lantai atau meja).
- Siang hari: ganti gorden tebal dengan vitrase tipis + gorden linen terang, bersihkan glass block, bersihkan atau ganti kanopi carport yang berlumut.

---

## 4. Redesign per ruang

Cara baca tabel: titik tengah dan rentang dalam meter pada koordinat bersama. Tapak sudah dalam posisi akhir (ukuran searah x × searah y). Semua tata letak sudah dicek: tidak ada benda di luar ruang, tidak saling tumpang, tidak ada benda dalam 85 cm di depan/belakang pintu, dan jalur jalan selebar ≥ 80 cm tersedia pada rute berikut: gerbang → teras → ruang tamu → ruang tengah → dapur → ujung kiri dapur dan kamar mandi; gerbang → carport → ruang belakang → ruang tengah; ruang belakang → meja makan; ruang tamu → kamar depan → sisi tempat tidur; ruang tengah → kamar belakang → sisi tempat tidur. (Pintu kamar mandi sendiri hanya 70 cm.)

### 4.1 Teras

Set jati dipertahankan dan disusun membentuk L di pojok kiri sehingga jalur dari carport ke pintu utama selebar ±1,2 m bebas. Meja kopi jati dipindah ke ruang belakang sebagai bangku sepatu.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Bangku jati 3 dudukan | lama | 150 × 60 × 85 | 3.75 ; 0.40 | 3.00–4.50 | 0.10–0.70 | +y (belakang) |
| Kursi jati A | lama | 60 × 60 × 85 | 2.69 ; 1.02 | 2.39–2.99 | 0.72–1.32 | +x (kanan) |
| Kursi jati B | lama | 60 × 60 × 85 | 2.69 ; 1.62 | 2.39–2.99 | 1.32–1.92 | +x (kanan) |
| Meja sudut kecil + lampu/tanaman | baru | 45 × 45 × 50 | 2.61 ; 0.31 | 2.38–2.83 | 0.08–0.54 | +y (belakang) |
| Pot tanaman tinggi | baru | 35 × 35 × 110 | 4.75 ; 0.30 | 4.58–4.92 | 0.12–0.47 | +y (belakang) |

- **Dinding:** `#EFE8DA`; lis putih. Kotak kWh dan kabel AC dirapikan dalam duct putih.
- **Lampu:** 1 lampu plafon 3000K + 1 lampu dinding di samping pintu.
- **Simpan:** tidak ada sepatu di teras. Sepatu masuk lewat pintu carport ke ruang belakang.

### 4.2 Ruang tamu

Ruang terima tamu sekaligus ruang keluarga. Sisi kiri (x 2,7–3,5) adalah jalur lurus dari pintu utama ke ruang tengah, jadi semua furnitur menempel dinding kanan dan dinding belakang. Tengah ruang sengaja kosong: karpet 150×220 cukup untuk lesehan atau salat 2–3 orang (cek arah kiblat dengan kompas; karpet bisa diputar).

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Sofa 3 dudukan kain linen | baru | 80 × 180 × 80 | 4.53 ; 3.95 | 4.12–4.93 | 3.05–4.85 | −x (kiri) |
| Meja samping | baru | 40 × 40 × 50 | 4.72 ; 2.78 | 4.52–4.92 | 2.58–2.98 | +y (belakang) |
| Tanaman lantai | baru | 35 × 35 × 120 | 4.74 ; 2.27 | 4.57–4.92 | 2.10–2.44 | +y (belakang) |
| Rak TV gantung 150 cm | baru | 30 × 150 × 35 | 2.52 ; 3.70 | 2.38–2.67 | 2.95–4.45 | +x (kanan) |
| TV (dinding) — dipasang di dinding/plafon, bawah +1.00 m | baru | 6 × 97 × 57 | 2.40 ; 3.70 | 2.38–2.43 | 3.22–4.19 | +x (kanan) |
| Karpet jute polos 150x220 | baru | 150 × 220 × 1 | 3.40 ; 3.95 | 2.65–4.15 | 2.85–5.05 | +y (belakang) |
| Bangku simpan 120 cm (sajadah/mukena) | baru | 120 × 35 × 45 | 4.20 ; 5.75 | 3.60–4.80 | 5.58–5.92 | −y (jalan) |
| Kaligrafi Al-Quran (titik fokus) — dipasang di dinding/plafon, bawah +1.35 m | lama | 100 × 3 × 70 | 4.20 ; 5.91 | 3.70–4.70 | 5.90–5.92 | −y (jalan) |
| Galeri foto keluarga 3x3 bingkai — dipasang di dinding/plafon, bawah +1.15 m | baru | 3 × 180 × 90 | 4.91 ; 3.95 | 4.90–4.92 | 3.05–4.85 | −x (kiri) |
| Lampu lantai 3000K | baru | 30 × 30 × 150 | 4.75 ; 5.20 | 4.60–4.90 | 5.05–5.35 | +y (belakang) |

- **Dinding:** `#F3EDE1`; dinding belakang `#8A9A7B` sebagai latar kaligrafi berbingkai emas.
- **Galeri foto:** semua foto keluarga dikumpulkan di dinding kanan di atas sofa, 9 bingkai seragam warna arang, susunan 3×3, jarak antar bingkai 5 cm, garis tengah di ketinggian 150 cm. Foto lama dicetak ulang seukuran. Kaligrafi tetap sendirian di dinding belakang.
- **TV:** TV 32" dari kamar depan dipindah ke sini (dinding kiri, tengah layar ±1,25 m dari lantai). Jarak tonton ±2 m cocok untuk 32–43".
- **Lampu:** 2 lampu plafon 3000K, lampu lantai di pojok kanan-belakang, LED strip di bawah rak TV.
- **Simpan:** rak TV gantung (remote, charger, dokumen), bangku simpan di bawah kaligrafi (sajadah, mukena, bantal lantai). Rak dan bangku digantung/berkaki agar dinding lembap tetap bisa bernapas.
- **Versi hemat:** tanpa sofa. Karpet + 4 bantal lantai + meja lipat rendah.

### 4.3 Ruang tengah

Ruang ini adalah persimpangan empat pintu. Tugasnya: tetap kosong. Sisi kiri (x 2,3–3,3) adalah jalur ruang tamu → dapur. Kasur cadangan dikeluarkan (jual, atau ganti kasur lipat yang masuk lemari). **Kulkas pindah ke dapur. Dispenser pindah ke ruang belakang.**

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Lemari serbaguna/pantry kering 150 cm pintu geser | baru | 150 × 40 × 220 | 4.17 ; 9.72 | 3.42–4.92 | 9.53–9.92 | −y (jalan) |
| Bangku kayu ukir + bantalan | lama | 55 × 150 × 85 | 4.65 ; 8.30 | 4.38–4.93 | 7.55–9.05 | −x (kiri) |
| Cermin dinding 60x150 — dipasang di dinding/plafon, bawah +0.40 m | baru | 3 × 60 × 150 | 2.39 ; 8.20 | 2.38–2.41 | 7.90–8.50 | +x (kanan) |
| Foto pasangan bingkai putih (dinding depan) — dipasang di dinding/plafon, bawah +1.10 m | lama | 70 × 3 × 90 | 3.70 ; 6.09 | 3.35–4.05 | 6.08–6.10 | +y (belakang) |

- **Dinding:** `#F3EDE1`, tanpa aksen.
- **Lemari serbaguna 150 cm** di dinding belakang, tepat di samping pintu dapur: pantry kering (dapur terlalu sempit untuk lemari berdiri), seprai, handuk, kasur lipat tamu, stok rumah tangga. Pintu geser.
- **Bangku ukir** diberi bantalan dudukan krem; kolongnya untuk 2 keranjang rotan.
- **Kabel** di dinding dimasukkan ke trunking putih dekat plafon.
- **Lampu:** 1 lampu plafon 3000K; cermin di dinding kiri memantulkan cahaya dari ruang tamu.

### 4.4 Kamar depan (tidur + kerja)

Ruang 2,3 × 6,0 m (bersih ±2,15 × 5,85 m) dibagi tiga zona dari depan ke belakang: tidur (y 0–1,7), rias + kerja (y 1,75–4,35), lemari + pintu (y 4,1–6,0).

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Tempat tidur 160x200 berlaci (kepala di dinding kiri) | baru | 200 × 160 × 45 | 1.15 ; 0.92 | 0.15–2.15 | 0.12–1.72 | +x (kanan) |
| Ambalan samping tempat tidur — dipasang di dinding/plafon, bawah +0.55 m | baru | 20 × 35 × 4 | 0.17 ; 1.92 | 0.07–0.28 | 1.74–2.09 | +x (kanan) |
| Meja rias slim + cermin | baru | 40 × 70 × 76 | 2.02 ; 2.10 | 1.82–2.23 | 1.75–2.45 | −x (kiri) |
| Stool rias | baru | 35 × 35 × 45 | 1.60 ; 2.10 | 1.43–1.78 | 1.93–2.27 | +y (belakang) |
| Meja kerja 120x60 + cable tray | baru | 60 × 120 × 74 | 1.93 ; 3.10 | 1.62–2.23 | 2.50–3.70 | −x (kiri) |
| Kursi kerja ergonomis | lama | 55 × 55 × 120 | 1.34 ; 3.10 | 1.07–1.62 | 2.83–3.38 | +x (kanan) |
| Monitor ultrawide — di atas meja | lama | 20 × 82 × 45 | 2.08 ; 3.10 | 1.98–2.18 | 2.69–3.51 | −x (kiri) |
| Kabinet teknis berventilasi (stabilizer, router) | baru | 35 × 60 × 70 | 2.05 ; 4.05 | 1.87–2.22 | 3.75–4.35 | −x (kiri) |
| Lemari pakaian pintu geser 180 cm | baru | 60 × 180 × 220 | 0.40 ; 5.00 | 0.10–0.70 | 4.10–5.90 | +x (kanan) |
| Cermin badan 50x160 — dipasang di dinding/plafon, bawah +0.30 m | baru | 50 × 3 × 160 | 1.00 ; 5.91 | 0.75–1.25 | 5.90–5.92 | −y (jalan) |
| Ambalan buku 120 cm x2 — dipasang di dinding/plafon, bawah +1.50 m | baru | 20 × 120 × 4 | 0.17 ; 2.90 | 0.07–0.28 | 2.30–3.50 | +x (kanan) |
| AC indoor — dipasang di dinding/plafon, bawah +2.30 m | lama | 80 × 20 × 28 | 1.15 ; 0.17 | 0.75–1.55 | 0.07–0.28 | +y (belakang) |

- **Tempat tidur:** rangka 160×200 berlaci, melintang di ujung depan dengan kepala di dinding kiri. Naik dari sisi panjang. **Cadangan jika lebar bersih < 2,10 m:** kasur 140×200 atau 160×200 dipasang memanjang menempel dinding kiri, kepala di dinding depan, menyisakan lorong 60–70 cm di sisi kanan; meja rias digeser 40 cm ke belakang. Jika kamar hanya untuk 1 orang, pakai 120×200.
- **Lemari:** pintu geser 180 cm, tinggi 220 cm, di dinding kiri dekat pintu. Beri jarak 2–5 cm dari dinding dan pasang setelah dinding kering. Lemari pajangan kaca dikeluarkan.
- **Meja kerja 120×60** di dinding kanan. Saat duduk Anda menghadap dinding kanan; dinding kiri (`#A9B59B`, dua ambalan, 2–3 bingkai) menjadi latar video call.
- **Kabel dan perangkat:**
  - 2 stopkontak ganda baru setinggi 90 cm di atas meja + 1 di bawah meja (pekerjaan tukang listrik).
  - Cable tray di bawah daun meja; stopkontak panjang bersaklar dipasang di dalam tray; kabel diikat velcro dan diberi label.
  - Stabilizer dan router masuk **kabinet teknis berventilasi** di antara meja dan pintu: pintu rotan/bilah, jarak bebas 10 cm di sekitar stabilizer, router di rak atas (jangan kotak logam, sinyal Wi-Fi terhalang).
  - AC idealnya di jalur MCB sendiri.
- **Meja rias slim** di antara tempat tidur dan meja kerja, supaya skincare tidak lagi di meja kerja.
- **Roster di dinding belakang** (bila benar tembus ke kamar belakang): tutup dengan akrilik bening berengsel. AC tidak bocor, suara teredam, tetap bisa dibuka.
- **Lantai:** SPC oak terang. Karpet zig-zag dikeluarkan.
- **Lampu:** plafon 3000K, lampu meja 4000K CRI 90, lampu baca dinding di sisi tempat tidur.
- **TV** pindah ke ruang tamu; monitor ultrawide cukup untuk menonton di kamar.

### 4.5 Kamar belakang

Ruang 2,3 × 4,0 m (bersih ±2,15 × 3,85 m) tanpa jendela. Prioritasnya udara dan cahaya, baru furnitur.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Tempat tidur 160x200 (rangka kayu lama, kepala di dinding kanan) | lama | 200 × 160 × 45 | 1.15 ; 9.10 | 0.15–2.15 | 8.30–9.90 | −x (kiri) |
| Lemari pakaian pintu geser 180 cm | baru | 60 × 180 × 220 | 0.40 ; 7.00 | 0.10–0.70 | 6.10–7.90 | +x (kanan) |
| Meja rias 80 cm + cermin + ambalan | baru | 40 × 80 × 76 | 2.02 ; 7.55 | 1.82–2.23 | 7.15–7.95 | −x (kiri) |
| Stool rias | baru | 30 × 30 × 45 | 1.68 ; 7.55 | 1.53–1.82 | 7.40–7.70 | +y (belakang) |
| Karpet polos 120x150 | baru | 120 × 150 × 1 | 1.25 ; 7.70 | 0.65–1.85 | 6.95–8.45 | +y (belakang) |
| Rel gantungan tas (dinding kiri) — dipasang di dinding/plafon, bawah +1.50 m | baru | 6 × 30 × 10 | 0.10 ; 8.10 | 0.07–0.14 | 7.95–8.25 | +x (kanan) |
| Exhaust fan plafon + ducting — dipasang di dinding/plafon, bawah +2.75 m | baru | 30 × 30 × 10 | 1.15 ; 8.00 | 1.00–1.30 | 7.85–8.15 | +y (belakang) |

- **Ventilasi (wajib):** exhaust fan plafon dengan ducting ke atap, menyala dengan timer, ditambah celah 2 cm di bawah daun pintu atau kisi di atas pintu sebagai jalan masuk udara. Jika dinding kiri ternyata dinding luar, lebih baik lagi: pasang jalusi/jendela kecil 40×60 cm.
- **Dinding:** `#F3EDE1`; dinding belakang (di sisi tempat tidur) `#9DB0A8`. Biru tua perlu satu lapis sealer/undercoat sebelum cat terang.
- **Lemari:** satu lemari pintu geser 180 cm sampai dekat plafon menggantikan dua lemari lama, sehingga tidak ada lagi "atas lemari" untuk menumpuk kardus. Kardus sepatu pindah ke lemari sepatu di ruang belakang atau ke 4 boks kolong ranjang.
- **Tempat tidur:** rangka kayu lama dipertahankan di posisi sekarang (sepanjang dinding belakang, kepala di kanan). Seprai polos krem/sage.
- **Meja rias 80 cm** dengan cermin dan satu ambalan; tas pindah ke rel gantungan di dinding kiri.
- **Lantai:** ubin hijau tetap + karpet polos 120×150.
- **Lampu:** plafon 3000K terang (≥ 1.200 lumen karena tanpa jendela), lampu cermin 4000K, lampu baca.

### 4.6 Dapur

Lorong 4,7 × 1,8 m (lebar bersih ±1,65 m). Aturan utamanya: **satu sisi kerja, satu sisi jalan.** Semua meja dan alat berderet di dinding belakang; dinding depan (sisi pintu) hanya boleh diisi benda gantung sedalam ≤ 15 cm. Dengan begitu lorong jalan ±1,05 m (masih ±0,9 m kalau lebar bersih dapur ternyata hanya 1,5 m).

Urutan kerja dari kanan ke kiri: kulkas → bak cuci → meja persiapan → kompor. Bak cuci dan kompor tetap di posisi sekarang, jadi tidak ada pekerjaan pipa.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Meja dapur sisi kiri (lama, dilapis ulang) - rice cooker | lama | 60 × 105 × 85 | 0.38 ; 10.60 | 0.08–0.68 | 10.07–11.12 | +x (kanan) |
| Meja sudut + kompor 2 tungku | lama | 150 × 60 × 85 | 0.82 ; 11.43 | 0.07–1.57 | 11.12–11.73 | −y (jalan) |
| Meja persiapan | lama | 100 × 60 × 85 | 2.08 ; 11.43 | 1.58–2.58 | 11.12–11.73 | −y (jalan) |
| Bak cuci + kabinet bawah | lama | 90 × 60 × 85 | 3.02 ; 11.43 | 2.57–3.48 | 11.12–11.73 | −y (jalan) |
| Kulkas 2 pintu (dipindah dari ruang tengah) | lama | 60 × 65 × 170 | 3.80 ; 11.40 | 3.50–4.10 | 11.08–11.72 | −y (jalan) |
| Tempat sampah pilah 2 x 25 L (injak, bertutup) | baru | 50 × 40 × 45 | 4.38 ; 11.53 | 4.12–4.62 | 11.33–11.72 | −y (jalan) |
| Cooker hood slim 60 cm — dipasang di dinding/plafon, bawah +1.60 m | baru | 60 × 45 × 15 | 1.10 ; 11.50 | 0.80–1.40 | 11.28–11.72 | −y (jalan) |
| Kabinet atas 100 cm — dipasang di dinding/plafon, bawah +1.50 m | baru | 100 × 34 × 70 | 2.08 ; 11.55 | 1.58–2.58 | 11.38–11.72 | −y (jalan) |
| Rak piring gantung stainless 90 cm — dipasang di dinding/plafon, bawah +1.45 m | baru | 90 × 28 × 60 | 3.02 ; 11.59 | 2.57–3.48 | 11.45–11.73 | −y (jalan) |
| Kabinet atas aluminium sisi kiri — dipasang di dinding/plafon, bawah +1.50 m | lama | 34 × 105 × 60 | 0.24 ; 10.60 | 0.07–0.42 | 10.07–11.12 | +x (kanan) |
| Rel gantung + ambalan 15 cm (dinding depan) — dipasang di dinding/plafon, bawah +1.20 m | baru | 160 × 15 × 60 | 1.55 ; 10.15 | 0.75–2.35 | 10.08–10.22 | +y (belakang) |

- **Meja dapur cor yang ada dipertahankan** (kokoh). Top dilapis ulang granit tile abu terang, backsplash keramik putih 60 cm, kolong diberi pintu aluminium/ACP. Versi hemat: bersihkan, nat ulang, pasang pintu kolong sederhana.
- **Penyimpanan:** papan rak panjang di ketinggian 1,9 m dan lemari kaca di lantai dikeluarkan. Gantinya kabinet atas 100 cm di atas meja persiapan, rak piring gantung di atas bak cuci (piring menetes langsung ke bak), satu rel gantung rapi untuk panci harian, dan ambalan 15 cm di dinding depan. Stok kering dan alat jarang pakai pindah ke lemari serbaguna ruang tengah, dua langkah dari pintu dapur.
- **Ventilasi:** cooker hood slim 60 cm di atas kompor dengan ducting ke grill plafon yang sudah ada (cek apakah grill itu tembus ke luar atap). Tambah exhaust fan 10" di dinding belakang jika dinding itu dinding luar: ganti satu glass block dengan exhaust.
- **Sampah:** dua tong injak bertutup 25 L di ujung kanan (organik dan anorganik), dikosongkan setiap malam ke tong beroda 60–80 L bertutup di carport (di bawah jendela ruang belakang, di belakang mobil). Tidak ada karung terbuka di dalam rumah. Koran dan kardus bekas langsung keluar.
- **Gas:** tabung LPG di kolong kompor dengan pintu berkisi (gas LPG turun ke bawah), selang dan regulator SNI baru, tidak ada koran di sekitar kompor.
- **Listrik:** 2 stopkontak dinding setinggi 110 cm (rice cooker dan kulkas), jauh dari bak cuci. Stopkontak panjang tidak dipakai lagi di dapur.
- **Dinding:** `#F5EFE4` washable. Hijau stabilo perlu sealer + 2–3 lapis.
- **Lampu:** LED strip/batten 4000K di bawah kabinet atas + 2 lampu plafon 4000K.
- **Meja tambahan** di samping pintu dikeluarkan supaya jalan ke kamar mandi bebas.

### 4.7 Kamar mandi

Hanya terlihat dari pintu dapur. Posisinya di ujung kanan dapur pasti; ukuran dan tata letak dalam adalah tebakan.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Kloset | lama | 40 × 65 × 40 | 5.95 ; 11.35 | 5.75–6.15 | 11.03–11.67 | −y (jalan) |
| Area shower | lama | 80 × 80 × 2 | 5.20 ; 11.30 | 4.80–5.60 | 10.90–11.70 | −y (jalan) |

- Pasang exhaust fan, nat dan silikon ulang, rak sudut untuk botol.
- Cek apakah air merembes ke dinding ruang belakang atau dapur di sebelahnya. Jika ya, waterproofing lantai ulang masuk daftar perbaikan.

### 4.8 Ruang belakang (makan + tempat sepatu + utilitas)

Ruang 3,15 × 5,0 m (bersih ±3,0 × 4,85 m) ini adalah pintu masuk sehari-hari keluarga (dari carport). Dibagi tiga zona dari depan ke belakang dengan jalur jalan lurus selebar ±0,95 m di sisi kiri.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Lemari sepatu tertutup 120 cm | baru | 35 × 120 × 100 | 7.90 ; 5.75 | 7.73–8.08 | 5.15–6.35 | −x (kiri) |
| Bangku sepatu (meja jati teras lama + bantalan) | lama | 100 × 50 × 45 | 6.95 ; 5.33 | 6.45–7.45 | 5.08–5.58 | +y (belakang) |
| Lemari utilitas tinggi (sapu, pel, setrika) | baru | 40 × 60 × 200 | 7.88 ; 6.72 | 7.67–8.07 | 6.42–7.02 | −x (kiri) |
| Dispenser | lama | 36 × 34 × 130 | 5.25 ; 8.00 | 5.08–5.43 | 7.83–8.17 | +x (kanan) |
| Rak galon 3 susun | baru | 38 × 38 × 110 | 5.26 ; 8.42 | 5.07–5.46 | 8.23–8.61 | +x (kanan) |
| Bangku banquette simpan 140 cm | baru | 45 × 140 × 45 | 7.85 ; 8.20 | 7.62–8.07 | 7.50–8.90 | −x (kiri) |
| Meja makan 120x70 | baru | 70 × 120 × 75 | 7.28 ; 8.20 | 6.93–7.62 | 7.60–8.80 | +y (belakang) |
| Kursi makan 1 | baru | 48 × 45 × 80 | 6.66 ; 7.90 | 6.42–6.90 | 7.68–8.12 | +x (kanan) |
| Kursi makan 2 | baru | 48 × 45 × 80 | 6.66 ; 8.50 | 6.42–6.90 | 8.28–8.72 | +x (kanan) |
| Lemari serbaguna/laundry pintu geser 160 cm | baru | 160 × 45 × 200 | 5.90 ; 9.70 | 5.10–6.70 | 9.47–9.92 | −y (jalan) |
| Keranjang laundry + jemuran lipat (parkir) | baru | 110 × 45 × 60 | 7.40 ; 9.70 | 6.85–7.95 | 9.47–9.92 | −y (jalan) |
| Lampu gantung meja makan 3000K — dipasang di dinding/plafon, bawah +1.55 m | baru | 35 × 35 × 30 | 7.28 ; 8.20 | 7.10–7.45 | 8.02–8.38 | +y (belakang) |
| Kotak meter/panel listrik (akses harus bebas) — dipasang di dinding/plafon, bawah +1.50 m | lama | 6 × 50 × 50 | 5.11 ; 7.35 | 5.08–5.14 | 7.10–7.60 | +x (kanan) |

- **Zona masuk (y 5,0–7,0):** lemari sepatu tertutup 120 cm di dinding kanan, bangku sepatu di bawah jendela (meja kopi jati dari teras + bantalan), lemari utilitas tinggi untuk sapu, pel, vakum, setrika, dan papan setrika. Gitar digantung di dinding kanan di atas lemari sepatu sebagai hiasan.
- **Kotak meter/panel listrik** di dinding kiri: 1 m di depannya harus selalu kosong.
- **Pos minum (dinding kiri, y 7,8–8,6):** dispenser + rak galon 3 susun. Galon datang lewat pintu carport, tidak perlu diangkat melintasi rumah.
- **Zona makan (y 7,5–8,9):** bangku banquette menempel dinding kanan (kolongnya laci stok), meja 120×70, 2 kursi. Muat 4–5 orang dan tetap menyisakan jalan ±0,95 m di sisi kiri. Meja bundar lama dikeluarkan.
- **Dinding belakang:** lemari serbaguna/laundry 160 cm pintu geser + tempat parkir keranjang cucian dan jemuran lipat.
- **Jemur:** jangan jemur di dalam ruang ini saat cuaca cerah. Pasang jemuran lipat dinding di carport. Saat hujan, jemur di sini dengan exhaust menyala.
- **Dinding:** `#F5EFE4`; 1 m terbawah `#B7BFA9` cat washable satin supaya bekas sepatu dan galon mudah dilap.
- **Plafon:** baru (PVC atau gipsum tahan lembap) setelah atap beres.
- **Lampu:** lampu gantung 3000K di atas meja makan, 2 lampu plafon 4000K di zona masuk dan laundry.
- **Ventilasi:** exhaust fan di dinding depan di atas jendela, membuang ke carport.

### 4.9 Carport

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Mobil | lama | 170 × 440 × 160 | 7.15 ; 2.30 | 6.30–8.00 | 0.10–4.50 | −y (jalan) |
| Tong sampah beroda 60-80 L bertutup (di bawah jendela ruang belakang) | baru | 50 × 40 × 95 | 6.55 ; 4.72 | 6.30–6.80 | 4.52–4.92 | −y (jalan) |

- Jalur jalan ±1,2 m di sisi kiri mobil tetap bebas sampai pintu ruang belakang. Mobil parkir mepet ke depan supaya tong sampah beroda muat di belakangnya, di bawah jendela ruang belakang.
- Bersihkan atau ganti lembaran kanopi yang berlumut dengan polikarbonat bening-susu agar teras dan ruang tamu lebih terang.
- Rel gantung di dinding kanan untuk tangga lipat dan selang; jemuran lipat dinding.

---

## 5. Anggaran

Semua angka adalah kisaran. Tarif acuan: tukang Rp 170–200 rb/hari, kenek Rp 120–140 rb/hari, borongan cat Rp 20–30 rb/m². Luas cat ±225 m² dinding + ±60 m² plafon. Merek hanya contoh kelas harga (Dulux Catylac / Nippon Vinilex untuk ekonomis; Dulux EasyClean / Nippon Spot-less untuk washable; IKEA, Informa, atau tukang kayu lokal untuk furnitur).

### Perbandingan

| Kelompok | Hemat | Menengah | Premium |
|---|---:|---:|---:|
| A. Perbaikan bangunan & keselamatan | Rp 8.275.000 | Rp 18.650.000 | Rp 41.000.000 |
| B. Cat | Rp 3.550.000 | Rp 14.040.000 | Rp 30.150.000 |
| C + D + F. Lantai, lampu, dekor | Rp 3.450.000 | Rp 13.270.000 | Rp 28.500.000 |
| E. Furnitur & penyimpanan | Rp 10.190.000 | Rp 52.700.000 | Rp 129.400.000 |
| Cadangan 10% | Rp 2.550.000 | Rp 9.850.000 | Rp 22.900.000 |
| **Total** | **Rp 28.015.000** | **Rp 108.510.000** | **Rp 251.950.000** |

Cara memilih:

- **Hemat:** bocor ditambal, lembap ditangani di titik terparah, cat sendiri, furnitur lama dipakai semaksimal mungkin, lesehan di ruang tamu.
- **Menengah (rekomendasi):** atap ruang belakang diganti, lembap ditangani tuntas, cat oleh tukang, lemari tertutup baru di semua ruang, sofa, SPC kamar depan, dapur dilapis ulang.
- **Premium:** semua custom sampai plafon, kitchen set baru, listrik ditata ulang, fasad dicat.

Jika dana terbatas, kerjakan kelompok A dan B tingkat menengah dulu (Rp 32.690.000), lalu beli furnitur ruang demi ruang dengan urutan: kamar depan → dapur → ruang belakang → kamar belakang → ruang tamu.

Opsi yang **tidak** saya masukkan ke total mana pun: mengganti ubin hijau ruang tamu + ruang tengah (±21 m², kisaran Rp 8–9 juta). Jangan dilakukan sebelum dinding terbukti kering selama satu musim hujan.

### Tingkat hemat

| Kelompok | Pekerjaan / barang | Kisaran biaya |
|---|---|---:|
| A. Perbaikan bangunan & keselamatan | Tambal bocor atap ruang belakang + flashing pertemuan dinding (material + 2 tukang × 2 hari) | Rp 1.500.000 |
|  | Ganti plafon ruang belakang 15 m² (GRC/gipsum, rangka hollow) @ Rp 120 rb/m² | Rp 1.800.000 |
|  | Penanganan lembap dinding, area terparah ±25 m² (kerok, waterproofing semen, plamir) @ Rp 75 rb/m² | Rp 1.875.000 |
|  | Cairan anti-jamur, sealer alkali 2 × 5 kg, cat penutup noda plafon | Rp 550.000 |
|  | Listrik: 6 titik stopkontak baru (kamar depan 3, dapur 2, ruang belakang 1) @ Rp 175 rb + duct/klem kabel | Rp 1.300.000 |
|  | Ventilasi: exhaust fan dapur 10" + kamar belakang 8" + ruang belakang 8", termasuk pasang | Rp 1.250.000 |
| B. Cat (dikerjakan sendiri) | Cat dinding interior ekonomis 3 pail 25 kg (kelas Catylac/Vinilex) @ Rp 700 rb | Rp 2.100.000 |
|  | Cat plafon putih 1 pail 25 kg | Rp 700.000 |
|  | Alat cat, plamir, amplas, lakban, plastik penutup | Rp 500.000 |
|  | Cat kayu/besi untuk lis profil dan perapian kusen | Rp 250.000 |
| C. Lantai | Kamar depan: vinyl lembaran motif kayu 14 m² @ Rp 50 rb (pasang sendiri) | Rp 700.000 |
|  | Ruang tamu: karpet/tikar polos 150×220 | Rp 600.000 |
| D. Lampu | 12 bohlam LED 3000K, 2 LED batten 4000K dapur, 3 fitting/kap, 1 lampu meja | Rp 1.100.000 |
| E. Furnitur — kamar depan | Dipan 160×200 buatan lokal (kasur lama dipakai dulu) | Rp 1.500.000 |
|  | Lemari pakaian 3 pintu lokal | Rp 1.900.000 |
|  | Cable management: cable tray, kotak kabel, velcro, 2 stopkontak panjang SNI bersaklar | Rp 450.000 |
|  | 3 ambalan dinding + pegboard | Rp 300.000 |
| E. Furnitur — ruang tamu | Ambalan/rak TV 120 cm + bracket (TV 32" lama) | Rp 450.000 |
|  | 4 bantal lantai + meja lipat rendah (lesehan, ganti sofa) | Rp 600.000 |
|  | 9 bingkai foto seragam | Rp 400.000 |
| E. Furnitur — ruang tengah | Bantalan bangku ukir + lemari serbaguna sederhana tertutup | Rp 900.000 |
| E. Furnitur — kamar belakang | 4 boks kolong ranjang, rel gantungan tas, organizer meja rias (lemari lama dipakai dulu) | Rp 550.000 |
| E. Furnitur — dapur | 2 rak dinding stainless 90 cm + rel gantung panci (ganti papan rak lama) | Rp 500.000 |
|  | Tempat sampah injak 2 × 25 L + tong beroda 60 L bertutup di carport | Rp 500.000 |
|  | Selang + regulator LPG SNI baru, rak piring 2 susun, keset anti-slip | Rp 450.000 |
|  | Pintu kolong meja dapur 3 m (aluminium sederhana) | Rp 600.000 |
| E. Furnitur — ruang belakang | Rak sepatu tertutup | Rp 450.000 |
|  | Gantungan sapu dinding, rak galon, 4 kontainer bertutup | Rp 640.000 |
| F. Dekor | Gorden polos 5 bukaan @ Rp 150 rb | Rp 750.000 |
|  | 4 tanaman + pot | Rp 300.000 |
| | **Subtotal** | **Rp 25.465.000** |
| | Cadangan tak terduga 10% | Rp 2.550.000 |
| | **TOTAL** | **Rp 28.015.000** |

### Tingkat menengah

| Kelompok | Pekerjaan / barang | Kisaran biaya |
|---|---|---:|
| A. Perbaikan bangunan & keselamatan | Ganti penutup atap ruang belakang 16 m² (spandek pasir + flashing + talang) @ Rp 230 rb/m² | Rp 3.700.000 |
|  | Plafon PVC ruang belakang 15 m² @ Rp 190 rb/m² terpasang | Rp 2.850.000 |
|  | Penanganan lembap dinding ±45 m² (kerok plester lapuk, waterproofing semen 2 lapis, plester + acian ulang) @ Rp 110 rb/m² | Rp 4.950.000 |
|  | Perbaikan plafon bernoda (ruang tengah, teras, dapur) + tambal retak | Rp 1.000.000 |
|  | Listrik: 10 titik stopkontak @ Rp 200 rb, grup MCB dapur & AC, RCBO, trunking kabel | Rp 3.200.000 |
|  | Ventilasi: cooker hood slim 60 cm + ducting, exhaust plafon kamar belakang + ducting ke atap, exhaust dinding ruang belakang | Rp 2.950.000 |
| B. Cat (tukang) | Sealer alkali 20 L + 5 L | Rp 1.230.000 |
|  | Cat dinding washable anti-jamur 2 pail 20 L (kelas EasyClean/Spot-less) @ Rp 2,2 jt + 3 kaleng 2,5 L warna aksen | Rp 5.300.000 |
|  | Cat plafon putih 1 pail 25 kg | Rp 750.000 |
|  | Cat kusen, pintu, lis profil | Rp 600.000 |
|  | Upah cat borongan ±280 m² dinding + plafon @ Rp 22 rb/m² | Rp 6.160.000 |
| C. Lantai | Kamar depan: SPC 4 mm klik 15,2 m² (termasuk 10% sisa potong) @ Rp 200 rb terpasang + plint | Rp 3.540.000 |
|  | Karpet jute 150×220 ruang tamu + karpet polos 120×150 kamar belakang | Rp 1.900.000 |
| D. Lampu | 14 titik lampu plafon/downlight 3000K, LED strip bawah kabinet dapur 4000K, lampu gantung meja makan, lampu lantai, lampu meja | Rp 3.930.000 |
| E. Furnitur — kamar depan | Rangka tempat tidur 160×200 berlaci | Rp 3.500.000 |
|  | Kasur 160×200 | Rp 3.500.000 |
|  | Lemari pintu geser 180 cm | Rp 4.200.000 |
|  | Meja kerja 120×60 + cable management + kabinet teknis berventilasi | Rp 2.550.000 |
|  | Meja rias slim + cermin + ambalan | Rp 1.500.000 |
| E. Furnitur — ruang tamu | Sofa 3 dudukan kain (lebar 180 cm) | Rp 4.500.000 |
|  | Rak TV gantung 150 cm + meja samping + bangku simpan 120 cm (TV 32" lama dipakai) | Rp 2.500.000 |
|  | 12 bingkai galeri seragam + cetak ulang foto | Rp 900.000 |
| E. Furnitur — ruang tengah | Lemari serbaguna/pantry kering 150 cm pintu geser | Rp 3.000.000 |
|  | Bantalan bangku ukir + cermin dinding | Rp 850.000 |
| E. Furnitur — kamar belakang | Lemari pintu geser 180 cm (ganti 2 lemari lama) | Rp 4.000.000 |
|  | Meja rias 80 cm + cermin + stool | Rp 1.300.000 |
|  | Seprai/bed cover polos + rel gantungan tas | Rp 600.000 |
| E. Furnitur — dapur | Lapis ulang top meja dapur 4 m lari (granit tile 60×60) + backsplash keramik putih 6 m² + upah | Rp 3.800.000 |
|  | Pintu kolong aluminium/ACP 4 m lari @ Rp 450 rb | Rp 1.800.000 |
|  | Kabinet atas 1 m + rak piring gantung stainless 90 cm + rel panci + ambalan 15 cm | Rp 2.300.000 |
|  | Sistem sampah: 2 tong injak 25 L + tong beroda 80 L di carport | Rp 650.000 |
|  | Pindah kulkas (stopkontak sudah di pos listrik) + selang/regulator LPG baru | Rp 250.000 |
| E. Furnitur — ruang belakang | Meja makan 120×70 + 2 kursi | Rp 2.800.000 |
|  | Bangku banquette simpan 140 cm (tukang kayu) | Rp 1.800.000 |
|  | Lemari sepatu 120 cm + lemari utilitas tinggi | Rp 2.500.000 |
|  | Lemari serbaguna/laundry 160 cm pintu geser | Rp 2.800.000 |
|  | Rak galon + bantalan bangku sepatu | Rp 400.000 |
| E. Furnitur — kamar mandi | Exhaust fan, rak sudut, nat/silikon ulang | Rp 700.000 |
| F. Dekor | Gorden linen + vitrase 6 bukaan | Rp 2.100.000 |
|  | 6 tanaman + pot | Rp 900.000 |
|  | Bantal sofa, keranjang rotan, tong sampah kecil tiap ruang | Rp 900.000 |
| | **Subtotal** | **Rp 98.660.000** |
| | Cadangan tak terduga 10% | Rp 9.850.000 |
| | **TOTAL** | **Rp 108.510.000** |

### Tingkat premium

| Kelompok | Pekerjaan / barang | Kisaran biaya |
|---|---|---:|
| A. Perbaikan bangunan & keselamatan | Atap ruang belakang baru: rangka baja ringan + spandek pasir + insulasi 16 m² @ Rp 450 rb/m² | Rp 7.200.000 |
|  | Plafon gipsum tahan lembap + drop ceiling lampu ruang belakang 15 m² | Rp 4.000.000 |
|  | Lembap: seluruh dinding bawah ±70 m² @ Rp 140 rb/m² + injeksi DPC kimia di titik terparah | Rp 12.800.000 |
|  | Plafon lain: perbaikan, skim, ganti panel rusak (ruang tengah, dapur, teras) | Rp 2.500.000 |
|  | Listrik: panel MCB baru + RCBO, grounding, 16 titik, jalur khusus AC & dapur, semua kabel dalam pipa/trunking | Rp 8.500.000 |
|  | Ventilasi: cooker hood ducted, exhaust kamar belakang ducted, exhaust ruang belakang & kamar mandi, jalusi baru kamar belakang bila dindingnya dinding luar | Rp 6.000.000 |
| B. Cat (tukang) | Sealer alkali 2 pail | Rp 1.900.000 |
|  | Cat premium anti-jamur rendah VOC 3 pail @ Rp 3,2 jt | Rp 9.600.000 |
|  | Cat plafon | Rp 1.200.000 |
|  | Refinishing 9 daun pintu + kusen @ Rp 450 rb | Rp 4.050.000 |
|  | Upah cat ±300 m² @ Rp 28 rb/m² | Rp 8.400.000 |
|  | Cat eksterior fasad + carport (cat weatherproof 20 L + upah) | Rp 5.000.000 |
| C. Lantai | SPC 5 mm kamar depan + kamar belakang 25 m² @ Rp 260 rb terpasang + plint | Rp 7.500.000 |
|  | 2 karpet besar (ruang tamu 200×290, kamar) | Rp 4.000.000 |
| D. Lampu | Downlight CRI 90, LED strip tersembunyi, lampu gantung, saklar pintar | Rp 8.000.000 |
| E. Furnitur — kamar depan | Tempat tidur hidrolik 160×200 | Rp 5.500.000 |
|  | Kasur 160×200 kelas atas | Rp 7.000.000 |
|  | Lemari custom HPL 1,8 m sampai plafon, pintu geser | Rp 6.000.000 |
|  | Meja kerja custom + kabinet teknis + rak dinding | Rp 5.500.000 |
|  | Meja rias custom | Rp 2.500.000 |
| E. Furnitur — ruang tamu | Sofa 3 dudukan premium | Rp 9.000.000 |
|  | Panel TV custom + konsol gantung | Rp 6.500.000 |
|  | TV 43" 4K baru | Rp 4.500.000 |
|  | Bangku simpan + meja samping kayu solid | Rp 2.500.000 |
|  | Bingkai galeri oleh jasa pigura | Rp 2.000.000 |
| E. Furnitur — ruang tengah | Lemari built-in 1,5 m sampai plafon | Rp 4.500.000 |
|  | Refinishing bangku ukir + bantalan custom + cermin besar | Rp 2.100.000 |
| E. Furnitur — kamar belakang | Lemari custom 1,8 m sampai plafon | Rp 5.500.000 |
|  | Meja rias custom + lampu cermin | Rp 2.500.000 |
|  | Kasur baru + headboard | Rp 5.000.000 |
| E. Furnitur — dapur | Kitchen set baru: 4 m lari bawah + 3 m lari atas (aluminium/HPL tahan lembap) + top granit/solid surface | Rp 22.000.000 |
|  | Bak cuci + kran baru, kompor tanam 2 tungku | Rp 4.500.000 |
|  | Backsplash penuh + rak gantung dinding depan | Rp 3.500.000 |
|  | Tempat sampah tarik (pull-out) + tong luar | Rp 1.500.000 |
| E. Furnitur — ruang belakang | Meja makan kayu solid + 2 kursi + banquette berlapis | Rp 7.500.000 |
|  | Zona masuk built-in 3 m lari (lemari sepatu + bangku + lemari utilitas) | Rp 7.800.000 |
|  | Lemari laundry 1,6 m | Rp 4.200.000 |
|  | Dispenser galon bawah | Rp 2.200.000 |
| E. Furnitur — kamar mandi | Waterproofing ulang lantai, exhaust, aksesori | Rp 3.500.000 |
| E. Furnitur — teras | Refinishing set jati + bantal outdoor + lampu dinding | Rp 2.100.000 |
| F. Dekor | Gorden custom + vitrase | Rp 5.500.000 |
|  | Tanaman, pot, aksesori | Rp 3.500.000 |
| | **Subtotal** | **Rp 229.050.000** |
| | Cadangan tak terduga 10% | Rp 22.900.000 |
| | **TOTAL** | **Rp 251.950.000** |

---

## 6. Tahapan kerja (8 minggu, tingkat menengah)

DIY = dikerjakan sendiri. Tukang = perlu tukang/teknisi.

| Minggu | Pekerjaan | Siapa |
|---|---|---|
| 0 | Ukur 7 ukuran kunci. Jawab keputusan terbuka. Saat hujan, catat titik tetes di ruang belakang dan ruang tengah. Minta 2 penawaran tukang atap dan tukang listrik. | DIY |
| 0 | Pilah barang tahap 1: tiga tumpukan (simpan, donasi/jual, buang). Mulai dari atas lemari, dapur, dan ruang belakang. Kasur cadangan, lemari pajangan kaca, meja bundar, lemari kaca dapur, kardus, koran keluar. | DIY |
| 1 | Atap ruang belakang: ganti penutup, flashing, talang. Uji siram. Bongkar plafon lama. Cek sumber rembesan plafon ruang tengah dan teras. | Tukang |
| 1 | Listrik: tarik titik stopkontak baru, grup MCB, RCBO, trunking kabel. Harus selesai sebelum plester dan cat. | Tukang listrik |
| 2 | Dinding lembap: kerok cat dan plester lapuk sampai ±1,2 m, waterproofing semen 2 lapis, plester + acian ulang. Bersihkan saluran air di sekeliling rumah. | Tukang |
| 2 | Pasang plafon baru ruang belakang. Pasang exhaust kamar belakang, cooker hood, exhaust ruang belakang. | Tukang |
| 3 | Masa kering plester (minimal 14 hari, jendela dan kipas dibuka). Sementara itu: cuci jamur di dinding yang tidak diplester, tambal retak, amplas, cat semua plafon. | DIY + tukang |
| 3 | Dapur: lapis ulang top, backsplash, pintu kolong, kabinet atas. | Tukang |
| 4 | Cat dinding yang tidak diplester ulang: sealer 1 lapis + cat 2 lapis. Cat kusen, pintu, lis. Urutan ruang: kamar belakang → dapur → ruang tengah → ruang tamu. | Tukang (hemat: DIY) |
| 5 | Sealer + cat dinding yang diplester ulang. Cat kamar depan dan ruang belakang. Pasang lampu baru. | Tukang |
| 6 | Pasang SPC kamar depan (setelah cat kering). Masuk furnitur besar: lemari, rangka tempat tidur, sofa, lemari serbaguna, banquette, lemari sepatu. Pindah kulkas ke dapur, dispenser ke ruang belakang, TV ke ruang tamu. | Tukang + DIY |
| 7 | Cable management meja kerja. Isi lemari dengan aturan satu barang satu tempat. Sistem sampah baru mulai jalan. | DIY |
| 8 | Galeri foto, gorden, karpet, tanaman, bantalan. Periksa ulang: tidak ada barang di lantai selain furnitur. | DIY |

Aturan urutan: atap → listrik → plester → kering → cat → lantai → furnitur → dekor. Jangan dibalik.

---

## 7. Keputusan terbuka

| # | Pertanyaan | Jawaban bawaan saya |
|---|---|---|
| 1 | Dinding kiri kamar belakang dan kamar depan itu dinding luar, atau menempel rumah tetangga? | Dianggap menempel tetangga: kamar belakang pakai exhaust plafon ber-ducting, tanpa jendela baru. Jika ternyata dinding luar, tambah jalusi 40×60 cm. |
| 2 | Mesin cuci ada di mana, dan jemur di mana? | Mesin cuci ditempatkan di pojok kanan-belakang ruang belakang (menggantikan parkir keranjang cucian); jemur di carport dengan jemuran lipat dinding. |
| 3 | Ada apa di kanan kamar mandi / di belakang ruang belakang? | Tidak dimodelkan. Jika ternyata halaman terbuka milik sendiri, itu tempat jemur dan mesin cuci terbaik. |
| 4 | Kamar depan dipakai 1 atau 2 orang, dan berapa lebar bersihnya? | 2 orang, tempat tidur 160×200 melintang. Cadangan memanjang jika lebar < 2,10 m. |
| 5 | Setuju ubin hijau dipertahankan dan hanya kamar depan yang ditutup SPC? | Ya. |
| 6 | TV pindah ke ruang tamu? | Ya, pakai TV 32" lama dulu. |
| 7 | Kulkas pindah ke ujung kanan dapur? | Ya. Jika lorong dapur ternyata < 1,5 m, kulkas tetap di ruang tengah di samping pintu dapur dan lemari serbaguna diperkecil jadi 90 cm. |
| 8 | Tingkat anggaran, dan rumah milik sendiri atau kontrak? | Menengah bertahap, rumah milik sendiri. Jika kontrak: kerjakan hanya tambal bocor, ventilasi, listrik, cat, dan furnitur lepas. |

---

## 8. SCENE_SPEC

Catatan untuk pembuat model 3D:

- `x`, `y` furnitur = **titik tengah** tapak, koordinat absolut dalam meter.
- `w_cm` = ukuran searah sumbu x, `d_cm` = ukuran searah sumbu y, **sudah dalam posisi akhir**. Jangan diputar lagi dengan `rotation_deg`.
- `rotation_deg` hanya arah hadap muka benda: 0 = +y (belakang), 90 = +x (kanan), 180 = −y (jalan), 270 = −x (kiri).
- `z_m` = tinggi sisi bawah dari lantai. Benda dengan `wall_mounted`, `rug`, atau `on_furniture` bukan penghalang lantai.
- Garis ruang = as dinding, tebal dinding 0,15 m (`wall_thickness_m`). Muka dalam dinding ada 0,075 m di dalam garis ruang; semua furnitur sudah ditempatkan terhadap muka dalam, jadi dinding harus digambar **berpusat di garis ruang**.
- Isi: 66 furnitur, 16 bukaan. Sudah divalidasi dengan skrip (ruang tidak tumpang, furnitur di dalam muka dalam dinding, bukaan di dinding bersama yang benar, pintu bebas 85 cm, rute ≥ 80 cm diukur dari muka dalam dinding).

### SCENE_SPEC

```json
{
 "name": "SCENE_SPEC",
 "units": "meter untuk x,y,w,d,offset,width,height; cm untuk w_cm,d_cm,h_cm",
 "conventions": {
  "origin": "sudut kiri-depan rumah pada dinding yang menghadap jalan",
  "x": "ke kanan sepanjang fasad",
  "y": "masuk ke dalam rumah (menjauhi jalan)",
  "rooms": "x,y = sudut kiri-depan ruang; w = lebar searah x; d = kedalaman searah y; garis ruang = AS dinding (tebal dinding 0.15 m, 0.075 m ke tiap sisi); teras dan carport tidak berdinding di sisi open_sides",
  "openings": "front = sisi y minimum (arah jalan), back = y maksimum, left = x minimum, right = x maksimum; offset_m dari sudut x-minimum (front/back) atau y-minimum (left/right) ruang ke tepi awal bukaan; sill_m = tinggi ambang dari lantai; tiap bukaan ditulis SATU kali, ruang seberangnya ada di connects_to",
  "furniture": "x,y = TITIK TENGAH tapak (absolut); w_cm = ukuran searah sumbu x, d_cm = ukuran searah sumbu y, SUDAH dalam posisi akhir (kotak sejajar sumbu - JANGAN diputar lagi); rotation_deg HANYA arah hadap muka benda: 0 = menghadap +y (ke belakang rumah), 90 = +x (kanan), 180 = -y (ke jalan), 270 = -x (kiri); z_m = tinggi sisi bawah dari lantai (default 0); wall_mounted/rug/on_furniture = bukan penghalang lantai",
  "wall_thickness_m": 0.15,
  "wall_note": "muka dalam dinding = 0.075 m di dalam garis ruang; semua furnitur sudah ditempatkan terhadap muka dalam (benda dinding menempel tepat di muka dalam)",
  "total_footprint_m": {
   "w": 8.15,
   "d": 11.8
  },
  "unknown_area": "x 6.3-8.15, y 10.0-11.8 (di belakang ruang belakang, kanan kamar mandi) belum diketahui - jangan dimodelkan sebagai ruang"
 },
 "rooms": [
  {
   "id": "kamar_depan",
   "name": "Kamar Depan (tidur + kerja)",
   "x": 0,
   "y": 0,
   "w": 2.3,
   "d": 6.0,
   "floor_material": "spc_oak_terang_di_atas_ubin_lama",
   "wall_color_hex": "#F3EDE1",
   "accent_wall": {
    "wall": "left",
    "color_hex": "#A9B59B"
   },
   "ceiling_h_m": 2.9,
   "enclosed": true,
   "confidence": "sedang (lebar ±0.2 m, panjang ±0.5 m)"
  },
  {
   "id": "teras",
   "name": "Teras",
   "x": 2.3,
   "y": 0,
   "w": 2.7,
   "d": 2.0,
   "floor_material": "ubin_keramik_hijau_motif_40x40_existing",
   "wall_color_hex": "#EFE8DA",
   "ceiling_h_m": 2.9,
   "enclosed": false,
   "open_sides": [
    "front",
    "right"
   ],
   "confidence": "sedang (±0.2 m)"
  },
  {
   "id": "ruang_tamu",
   "name": "Ruang Tamu",
   "x": 2.3,
   "y": 2.0,
   "w": 2.7,
   "d": 4.0,
   "floor_material": "ubin_keramik_hijau_motif_40x40_existing",
   "wall_color_hex": "#F3EDE1",
   "accent_wall": {
    "wall": "back",
    "color_hex": "#8A9A7B"
   },
   "ceiling_h_m": 2.9,
   "enclosed": true,
   "confidence": "sedang (lebar ±0.2 m, kedalaman ±0.4 m)"
  },
  {
   "id": "ruang_tengah",
   "name": "Ruang Tengah / Keluarga",
   "x": 2.3,
   "y": 6.0,
   "w": 2.7,
   "d": 4.0,
   "floor_material": "ubin_keramik_hijau_motif_40x40_existing",
   "wall_color_hex": "#F3EDE1",
   "ceiling_h_m": 2.9,
   "enclosed": true,
   "confidence": "sedang (lebar ±0.2 m, kedalaman ±0.4 m)"
  },
  {
   "id": "kamar_belakang",
   "name": "Kamar Belakang",
   "x": 0,
   "y": 6.0,
   "w": 2.3,
   "d": 4.0,
   "floor_material": "ubin_keramik_hijau_motif_40x40_existing",
   "wall_color_hex": "#F3EDE1",
   "accent_wall": {
    "wall": "back",
    "color_hex": "#9DB0A8"
   },
   "ceiling_h_m": 2.9,
   "enclosed": true,
   "confidence": "sedang-rendah (±0.4 m)"
  },
  {
   "id": "dapur",
   "name": "Dapur (galley)",
   "x": 0,
   "y": 10.0,
   "w": 4.7,
   "d": 1.8,
   "floor_material": "ubin_keramik_hijau_motif_40x40_existing",
   "wall_color_hex": "#F5EFE4",
   "ceiling_h_m": 2.8,
   "enclosed": true,
   "confidence": "sedang (lebar bersih lorong 1.5-1.8 m, panjang ±0.4 m)"
  },
  {
   "id": "kamar_mandi",
   "name": "Kamar Mandi",
   "x": 4.7,
   "y": 10.0,
   "w": 1.6,
   "d": 1.8,
   "floor_material": "keramik_kamar_mandi_existing",
   "wall_color_hex": "#FFFFFF",
   "ceiling_h_m": 2.6,
   "enclosed": true,
   "confidence": "rendah (hanya terlihat dari pintu; posisi di ujung kanan dapur pasti, ukuran dalam tebakan)"
  },
  {
   "id": "ruang_belakang",
   "name": "Ruang Belakang (makan + tempat sepatu + utilitas)",
   "x": 5.0,
   "y": 5.0,
   "w": 3.15,
   "d": 5.0,
   "floor_material": "keramik_oranye_40x40_existing",
   "wall_color_hex": "#F5EFE4",
   "accent_wall": {
    "wall": "all_lower_1m",
    "color_hex": "#B7BFA9"
   },
   "ceiling_h_m": 2.7,
   "enclosed": true,
   "confidence": "sedang (lebar ±0.15 m, kedalaman ±0.3 m)"
  },
  {
   "id": "carport",
   "name": "Carport",
   "x": 5.0,
   "y": 0,
   "w": 3.15,
   "d": 5.0,
   "floor_material": "keramik_batu_abu_existing",
   "wall_color_hex": "#EFE8DA",
   "ceiling_h_m": 3.0,
   "enclosed": false,
   "open_sides": [
    "front",
    "left_partial_ke_teras"
   ],
   "confidence": "sedang (±0.3 m)"
  }
 ],
 "openings": [
  {
   "room_id": "kamar_depan",
   "wall": "front",
   "offset_m": 0.75,
   "width_m": 0.8,
   "height_m": 1.2,
   "type": "window",
   "sill_m": 0.9,
   "connects_to_outside": true,
   "note": "jendela berteralis ke arah jalan; AC indoor di atasnya"
  },
  {
   "room_id": "kamar_depan",
   "wall": "right",
   "offset_m": 0.5,
   "width_m": 0.8,
   "height_m": 1.8,
   "type": "window",
   "sill_m": 0.3,
   "connects_to": "teras",
   "note": "jendela tinggi berteralis menghadap teras"
  },
  {
   "room_id": "kamar_depan",
   "wall": "right",
   "offset_m": 5.05,
   "width_m": 0.85,
   "height_m": 2.05,
   "type": "door",
   "sill_m": 0,
   "connects_to": "ruang_tamu",
   "swing_into": "kamar_depan",
   "hinge": "sisi belakang",
   "note": "pintu kamar depan"
  },
  {
   "room_id": "kamar_depan",
   "wall": "back",
   "offset_m": 0.75,
   "width_m": 0.6,
   "height_m": 0.3,
   "type": "window",
   "sill_m": 2.3,
   "connects_to": "kamar_belakang",
   "note": "roster/lubang angin dekat plafon, kemungkinan tembus ke kamar belakang (perlu dicek); rekomendasi: tutup akrilik bening yang bisa dibuka"
  },
  {
   "room_id": "ruang_tamu",
   "wall": "front",
   "offset_m": 0.15,
   "width_m": 0.35,
   "height_m": 1.8,
   "type": "window",
   "sill_m": 0.3,
   "connects_to": "teras",
   "note": "jendela mati sempit kiri pintu"
  },
  {
   "room_id": "ruang_tamu",
   "wall": "front",
   "offset_m": 0.7,
   "width_m": 1.3,
   "height_m": 2.1,
   "type": "door",
   "sill_m": 0,
   "connects_to": "teras",
   "swing_into": "ruang_tamu",
   "note": "pintu utama dua daun @65 cm"
  },
  {
   "room_id": "ruang_tamu",
   "wall": "front",
   "offset_m": 2.1,
   "width_m": 0.5,
   "height_m": 1.8,
   "type": "window",
   "sill_m": 0.3,
   "connects_to": "teras",
   "note": "jendela jungkit kanan pintu"
  },
  {
   "room_id": "ruang_tamu",
   "wall": "back",
   "offset_m": 0.1,
   "width_m": 0.9,
   "height_m": 2.1,
   "type": "door",
   "sill_m": 0,
   "connects_to": "ruang_tengah",
   "leaf": false,
   "note": "bukaan tanpa daun pintu (sekarang bertirai), segaris dengan pintu utama dan pintu dapur"
  },
  {
   "room_id": "ruang_tengah",
   "wall": "left",
   "offset_m": 0.15,
   "width_m": 0.85,
   "height_m": 2.05,
   "type": "door",
   "sill_m": 0,
   "connects_to": "kamar_belakang",
   "swing_into": "kamar_belakang",
   "hinge": "sisi depan",
   "note": "pintu kamar belakang, berhadapan lurus dengan pintu ruang belakang"
  },
  {
   "room_id": "ruang_tengah",
   "wall": "right",
   "offset_m": 0.1,
   "width_m": 0.85,
   "height_m": 2.05,
   "type": "door",
   "sill_m": 0,
   "connects_to": "ruang_belakang",
   "swing_into": "ruang_tengah",
   "hinge": "sisi depan",
   "note": "pintu ke ruang belakang"
  },
  {
   "room_id": "ruang_tengah",
   "wall": "back",
   "offset_m": 0.1,
   "width_m": 0.85,
   "height_m": 2.05,
   "type": "door",
   "sill_m": 0,
   "connects_to": "dapur",
   "swing_into": "ruang_tengah",
   "hinge": "sisi kiri",
   "note": "pintu dapur"
  },
  {
   "room_id": "ruang_belakang",
   "wall": "front",
   "offset_m": 0.3,
   "width_m": 0.85,
   "height_m": 2.05,
   "type": "door",
   "sill_m": 0,
   "connects_to": "carport",
   "swing_into": "ruang_belakang",
   "hinge": "sisi kiri",
   "note": "pintu samping dari carport; 2 lubang angin di atasnya"
  },
  {
   "room_id": "ruang_belakang",
   "wall": "front",
   "offset_m": 1.6,
   "width_m": 0.75,
   "height_m": 1.2,
   "type": "window",
   "sill_m": 0.9,
   "connects_to": "carport",
   "note": "jendela berteralis ke carport; 2 lubang angin di atasnya"
  },
  {
   "room_id": "ruang_belakang",
   "wall": "back",
   "offset_m": 0.7,
   "width_m": 1.7,
   "height_m": 0.25,
   "type": "window",
   "sill_m": 2.3,
   "note": "3 glass block tinggi (digambar sebagai satu pita); sisi baliknya belum diketahui (kamar mandi atau area belakang)"
  },
  {
   "room_id": "dapur",
   "wall": "back",
   "offset_m": 2.3,
   "width_m": 1.2,
   "height_m": 0.25,
   "type": "window",
   "sill_m": 2.3,
   "connects_to_outside": true,
   "note": "3 glass block tinggi di atas bak cuci (digambar sebagai satu pita)"
  },
  {
   "room_id": "kamar_mandi",
   "wall": "left",
   "offset_m": 0.1,
   "width_m": 0.7,
   "height_m": 2.0,
   "type": "door",
   "sill_m": 0,
   "connects_to": "dapur",
   "swing_into": "kamar_mandi",
   "note": "pintu kamar mandi di ujung kanan dapur"
  }
 ],
 "furniture": [
  {
   "room_id": "teras",
   "name": "Bangku jati 3 dudukan",
   "x": 3.75,
   "y": 0.4,
   "w_cm": 150,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 0,
   "color_hex": "#B5783C",
   "existing": true
  },
  {
   "room_id": "teras",
   "name": "Kursi jati A",
   "x": 2.69,
   "y": 1.02,
   "w_cm": 60,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 90,
   "color_hex": "#B5783C",
   "existing": true
  },
  {
   "room_id": "teras",
   "name": "Kursi jati B",
   "x": 2.69,
   "y": 1.62,
   "w_cm": 60,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 90,
   "color_hex": "#B5783C",
   "existing": true
  },
  {
   "room_id": "teras",
   "name": "Meja sudut kecil + lampu/tanaman",
   "x": 2.61,
   "y": 0.31,
   "w_cm": 45,
   "d_cm": 45,
   "h_cm": 50,
   "rotation_deg": 0,
   "color_hex": "#B5783C"
  },
  {
   "room_id": "teras",
   "name": "Pot tanaman tinggi",
   "x": 4.75,
   "y": 0.3,
   "w_cm": 35,
   "d_cm": 35,
   "h_cm": 110,
   "rotation_deg": 0,
   "color_hex": "#5E7A5A"
  },
  {
   "room_id": "ruang_tamu",
   "name": "Sofa 3 dudukan kain linen",
   "x": 4.525,
   "y": 3.95,
   "w_cm": 80,
   "d_cm": 180,
   "h_cm": 80,
   "rotation_deg": 270,
   "color_hex": "#E6DCCB"
  },
  {
   "room_id": "ruang_tamu",
   "name": "Meja samping",
   "x": 4.72,
   "y": 2.78,
   "w_cm": 40,
   "d_cm": 40,
   "h_cm": 50,
   "rotation_deg": 0,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_tamu",
   "name": "Tanaman lantai",
   "x": 4.74,
   "y": 2.27,
   "w_cm": 35,
   "d_cm": 35,
   "h_cm": 120,
   "rotation_deg": 0,
   "color_hex": "#5E7A5A"
  },
  {
   "room_id": "ruang_tamu",
   "name": "Rak TV gantung 150 cm",
   "x": 2.525,
   "y": 3.7,
   "w_cm": 30,
   "d_cm": 150,
   "h_cm": 35,
   "rotation_deg": 90,
   "color_hex": "#D8B98A",
   "z_m": 0.3
  },
  {
   "room_id": "ruang_tamu",
   "name": "TV (dinding)",
   "x": 2.405,
   "y": 3.7,
   "w_cm": 6,
   "d_cm": 97,
   "h_cm": 57,
   "rotation_deg": 90,
   "color_hex": "#1A1A1A",
   "z_m": 1.0,
   "wall_mounted": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "Karpet jute polos 150x220",
   "x": 3.4,
   "y": 3.95,
   "w_cm": 150,
   "d_cm": 220,
   "h_cm": 1,
   "rotation_deg": 0,
   "color_hex": "#C9A46B",
   "rug": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "Bangku simpan 120 cm (sajadah/mukena)",
   "x": 4.2,
   "y": 5.75,
   "w_cm": 120,
   "d_cm": 35,
   "h_cm": 45,
   "rotation_deg": 180,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_tamu",
   "name": "Kaligrafi Al-Quran (titik fokus)",
   "x": 4.2,
   "y": 5.91,
   "w_cm": 100,
   "d_cm": 3,
   "h_cm": 70,
   "rotation_deg": 180,
   "color_hex": "#6B4A2B",
   "z_m": 1.35,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "Galeri foto keluarga 3x3 bingkai",
   "x": 4.91,
   "y": 3.95,
   "w_cm": 3,
   "d_cm": 180,
   "h_cm": 90,
   "rotation_deg": 270,
   "color_hex": "#2B2B2B",
   "z_m": 1.15,
   "wall_mounted": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "Lampu lantai 3000K",
   "x": 4.75,
   "y": 5.2,
   "w_cm": 30,
   "d_cm": 30,
   "h_cm": 150,
   "rotation_deg": 0,
   "color_hex": "#3B3F3A"
  },
  {
   "room_id": "ruang_tengah",
   "name": "Lemari serbaguna/pantry kering 150 cm pintu geser",
   "x": 4.175,
   "y": 9.725,
   "w_cm": 150,
   "d_cm": 40,
   "h_cm": 220,
   "rotation_deg": 180,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "ruang_tengah",
   "name": "Bangku kayu ukir + bantalan",
   "x": 4.65,
   "y": 8.3,
   "w_cm": 55,
   "d_cm": 150,
   "h_cm": 85,
   "rotation_deg": 270,
   "color_hex": "#8A5530",
   "existing": true
  },
  {
   "room_id": "ruang_tengah",
   "name": "Cermin dinding 60x150",
   "x": 2.39,
   "y": 8.2,
   "w_cm": 3,
   "d_cm": 60,
   "h_cm": 150,
   "rotation_deg": 90,
   "color_hex": "#DDE3E3",
   "z_m": 0.4,
   "wall_mounted": true
  },
  {
   "room_id": "ruang_tengah",
   "name": "Foto pasangan bingkai putih (dinding depan)",
   "x": 3.7,
   "y": 6.09,
   "w_cm": 70,
   "d_cm": 3,
   "h_cm": 90,
   "rotation_deg": 0,
   "color_hex": "#FFFFFF",
   "z_m": 1.1,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Tempat tidur 160x200 berlaci (kepala di dinding kiri)",
   "x": 1.15,
   "y": 0.92,
   "w_cm": 200,
   "d_cm": 160,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_depan",
   "name": "Ambalan samping tempat tidur",
   "x": 0.175,
   "y": 1.92,
   "w_cm": 20,
   "d_cm": 35,
   "h_cm": 4,
   "rotation_deg": 90,
   "color_hex": "#D8B98A",
   "z_m": 0.55,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Meja rias slim + cermin",
   "x": 2.025,
   "y": 2.1,
   "w_cm": 40,
   "d_cm": 70,
   "h_cm": 76,
   "rotation_deg": 270,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_depan",
   "name": "Stool rias",
   "x": 1.6,
   "y": 2.1,
   "w_cm": 35,
   "d_cm": 35,
   "h_cm": 45,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB"
  },
  {
   "room_id": "kamar_depan",
   "name": "Meja kerja 120x60 + cable tray",
   "x": 1.925,
   "y": 3.1,
   "w_cm": 60,
   "d_cm": 120,
   "h_cm": 74,
   "rotation_deg": 270,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_depan",
   "name": "Kursi kerja ergonomis",
   "x": 1.345,
   "y": 3.1,
   "w_cm": 55,
   "d_cm": 55,
   "h_cm": 120,
   "rotation_deg": 90,
   "color_hex": "#8E9093",
   "existing": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Monitor ultrawide",
   "x": 2.08,
   "y": 3.1,
   "w_cm": 20,
   "d_cm": 82,
   "h_cm": 45,
   "rotation_deg": 270,
   "color_hex": "#1A1A1A",
   "z_m": 0.74,
   "existing": true,
   "on_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Kabinet teknis berventilasi (stabilizer, router)",
   "x": 2.05,
   "y": 4.05,
   "w_cm": 35,
   "d_cm": 60,
   "h_cm": 70,
   "rotation_deg": 270,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_depan",
   "name": "Lemari pakaian pintu geser 180 cm",
   "x": 0.395,
   "y": 5.0,
   "w_cm": 60,
   "d_cm": 180,
   "h_cm": 220,
   "rotation_deg": 90,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "kamar_depan",
   "name": "Cermin badan 50x160",
   "x": 1.0,
   "y": 5.91,
   "w_cm": 50,
   "d_cm": 3,
   "h_cm": 160,
   "rotation_deg": 180,
   "color_hex": "#DDE3E3",
   "z_m": 0.3,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Ambalan buku 120 cm x2",
   "x": 0.175,
   "y": 2.9,
   "w_cm": 20,
   "d_cm": 120,
   "h_cm": 4,
   "rotation_deg": 90,
   "color_hex": "#D8B98A",
   "z_m": 1.5,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "AC indoor",
   "x": 1.15,
   "y": 0.175,
   "w_cm": 80,
   "d_cm": 20,
   "h_cm": 28,
   "rotation_deg": 0,
   "color_hex": "#FFFFFF",
   "z_m": 2.3,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "kamar_belakang",
   "name": "Tempat tidur 160x200 (rangka kayu lama, kepala di dinding kanan)",
   "x": 1.15,
   "y": 9.1,
   "w_cm": 200,
   "d_cm": 160,
   "h_cm": 45,
   "rotation_deg": 270,
   "color_hex": "#8A5530",
   "existing": true
  },
  {
   "room_id": "kamar_belakang",
   "name": "Lemari pakaian pintu geser 180 cm",
   "x": 0.395,
   "y": 7.0,
   "w_cm": 60,
   "d_cm": 180,
   "h_cm": 220,
   "rotation_deg": 90,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "kamar_belakang",
   "name": "Meja rias 80 cm + cermin + ambalan",
   "x": 2.025,
   "y": 7.55,
   "w_cm": 40,
   "d_cm": 80,
   "h_cm": 76,
   "rotation_deg": 270,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_belakang",
   "name": "Stool rias",
   "x": 1.675,
   "y": 7.55,
   "w_cm": 30,
   "d_cm": 30,
   "h_cm": 45,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB"
  },
  {
   "room_id": "kamar_belakang",
   "name": "Karpet polos 120x150",
   "x": 1.25,
   "y": 7.7,
   "w_cm": 120,
   "d_cm": 150,
   "h_cm": 1,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB",
   "rug": true
  },
  {
   "room_id": "kamar_belakang",
   "name": "Rel gantungan tas (dinding kiri)",
   "x": 0.105,
   "y": 8.1,
   "w_cm": 6,
   "d_cm": 30,
   "h_cm": 10,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 1.5,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_belakang",
   "name": "Exhaust fan plafon + ducting",
   "x": 1.15,
   "y": 8.0,
   "w_cm": 30,
   "d_cm": 30,
   "h_cm": 10,
   "rotation_deg": 0,
   "color_hex": "#FFFFFF",
   "z_m": 2.75,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Meja dapur sisi kiri (lama, dilapis ulang) - rice cooker",
   "x": 0.375,
   "y": 10.6,
   "w_cm": 60,
   "d_cm": 105,
   "h_cm": 85,
   "rotation_deg": 90,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Meja sudut + kompor 2 tungku",
   "x": 0.825,
   "y": 11.425,
   "w_cm": 150,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Meja persiapan",
   "x": 2.075,
   "y": 11.425,
   "w_cm": 100,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Bak cuci + kabinet bawah",
   "x": 3.025,
   "y": 11.425,
   "w_cm": 90,
   "d_cm": 60,
   "h_cm": 85,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Kulkas 2 pintu (dipindah dari ruang tengah)",
   "x": 3.8,
   "y": 11.4,
   "w_cm": 60,
   "d_cm": 65,
   "h_cm": 170,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Tempat sampah pilah 2 x 25 L (injak, bertutup)",
   "x": 4.375,
   "y": 11.525,
   "w_cm": 50,
   "d_cm": 40,
   "h_cm": 45,
   "rotation_deg": 180,
   "color_hex": "#3B3F3A"
  },
  {
   "room_id": "dapur",
   "name": "Cooker hood slim 60 cm",
   "x": 1.1,
   "y": 11.5,
   "w_cm": 60,
   "d_cm": 45,
   "h_cm": 15,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.6,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Kabinet atas 100 cm",
   "x": 2.075,
   "y": 11.555,
   "w_cm": 100,
   "d_cm": 34,
   "h_cm": 70,
   "rotation_deg": 180,
   "color_hex": "#F7F4EE",
   "z_m": 1.5,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Rak piring gantung stainless 90 cm",
   "x": 3.025,
   "y": 11.585,
   "w_cm": 90,
   "d_cm": 28,
   "h_cm": 60,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.45,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Kabinet atas aluminium sisi kiri",
   "x": 0.245,
   "y": 10.6,
   "w_cm": 34,
   "d_cm": 105,
   "h_cm": 60,
   "rotation_deg": 90,
   "color_hex": "#F7F4EE",
   "z_m": 1.5,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Rel gantung + ambalan 15 cm (dinding depan)",
   "x": 1.55,
   "y": 10.15,
   "w_cm": 160,
   "d_cm": 15,
   "h_cm": 60,
   "rotation_deg": 0,
   "color_hex": "#B8BABD",
   "z_m": 1.2,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_mandi",
   "name": "Kloset",
   "x": 5.95,
   "y": 11.35,
   "w_cm": 40,
   "d_cm": 65,
   "h_cm": 40,
   "rotation_deg": 180,
   "color_hex": "#FFFFFF",
   "existing": true,
   "low_confidence": true
  },
  {
   "room_id": "kamar_mandi",
   "name": "Area shower",
   "x": 5.2,
   "y": 11.3,
   "w_cm": 80,
   "d_cm": 80,
   "h_cm": 2,
   "rotation_deg": 180,
   "color_hex": "#DDE3E3",
   "rug": true,
   "existing": true,
   "low_confidence": true
  },
  {
   "room_id": "ruang_belakang",
   "name": "Lemari sepatu tertutup 120 cm",
   "x": 7.9,
   "y": 5.75,
   "w_cm": 35,
   "d_cm": 120,
   "h_cm": 100,
   "rotation_deg": 270,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Bangku sepatu (meja jati teras lama + bantalan)",
   "x": 6.95,
   "y": 5.325,
   "w_cm": 100,
   "d_cm": 50,
   "h_cm": 45,
   "rotation_deg": 0,
   "color_hex": "#B5783C",
   "existing": true
  },
  {
   "room_id": "ruang_belakang",
   "name": "Lemari utilitas tinggi (sapu, pel, setrika)",
   "x": 7.875,
   "y": 6.72,
   "w_cm": 40,
   "d_cm": 60,
   "h_cm": 200,
   "rotation_deg": 270,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Dispenser",
   "x": 5.255,
   "y": 8.0,
   "w_cm": 36,
   "d_cm": 34,
   "h_cm": 130,
   "rotation_deg": 90,
   "color_hex": "#FFFFFF",
   "existing": true
  },
  {
   "room_id": "ruang_belakang",
   "name": "Rak galon 3 susun",
   "x": 5.265,
   "y": 8.42,
   "w_cm": 38,
   "d_cm": 38,
   "h_cm": 110,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Bangku banquette simpan 140 cm",
   "x": 7.85,
   "y": 8.2,
   "w_cm": 45,
   "d_cm": 140,
   "h_cm": 45,
   "rotation_deg": 270,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Meja makan 120x70",
   "x": 7.275,
   "y": 8.2,
   "w_cm": 70,
   "d_cm": 120,
   "h_cm": 75,
   "rotation_deg": 0,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Kursi makan 1",
   "x": 6.66,
   "y": 7.9,
   "w_cm": 48,
   "d_cm": 45,
   "h_cm": 80,
   "rotation_deg": 90,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Kursi makan 2",
   "x": 6.66,
   "y": 8.5,
   "w_cm": 48,
   "d_cm": 45,
   "h_cm": 80,
   "rotation_deg": 90,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Lemari serbaguna/laundry pintu geser 160 cm",
   "x": 5.9,
   "y": 9.7,
   "w_cm": 160,
   "d_cm": 45,
   "h_cm": 200,
   "rotation_deg": 180,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Keranjang laundry + jemuran lipat (parkir)",
   "x": 7.4,
   "y": 9.7,
   "w_cm": 110,
   "d_cm": 45,
   "h_cm": 60,
   "rotation_deg": 180,
   "color_hex": "#C9A46B"
  },
  {
   "room_id": "ruang_belakang",
   "name": "Lampu gantung meja makan 3000K",
   "x": 7.275,
   "y": 8.2,
   "w_cm": 35,
   "d_cm": 35,
   "h_cm": 30,
   "rotation_deg": 0,
   "color_hex": "#C9A46B",
   "z_m": 1.55,
   "wall_mounted": true
  },
  {
   "room_id": "ruang_belakang",
   "name": "Kotak meter/panel listrik (akses harus bebas)",
   "x": 5.105,
   "y": 7.35,
   "w_cm": 6,
   "d_cm": 50,
   "h_cm": 50,
   "rotation_deg": 90,
   "color_hex": "#DDDDDD",
   "z_m": 1.5,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "carport",
   "name": "Mobil",
   "x": 7.15,
   "y": 2.3,
   "w_cm": 170,
   "d_cm": 440,
   "h_cm": 160,
   "rotation_deg": 180,
   "color_hex": "#1A1A1A",
   "existing": true
  },
  {
   "room_id": "carport",
   "name": "Tong sampah beroda 60-80 L bertutup (di bawah jendela ruang belakang)",
   "x": 6.55,
   "y": 4.72,
   "w_cm": 50,
   "d_cm": 40,
   "h_cm": 95,
   "rotation_deg": 180,
   "color_hex": "#3E5C4B"
  }
 ]
}
```
