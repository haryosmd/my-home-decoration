# Rencana Penataan Rumah Blok DD-30 — Draft v3

Disusun dari 26 foto (16 foto awal + 10 foto tambahan dapur, kamar belakang, dan sisi rumah) dan koreksi pemilik (panjang kamar mandi, warna keramik tiap ruang). Semua ukuran adalah **perkiraan dari foto**, belum diukur dengan meteran. Semua harga adalah **kisaran** tahun 2026 dengan asumsi tarif kota di Jawa di luar Jakarta (asumsi saya; sesuaikan dengan kota Anda dan cek ulang di toko).

## Ringkasan

**Draft v3.** Perubahan dari v2: kamar depan dirancang sebagai kamar bersama suami-istri (zona tidur + rias untuknya, zona kerja untuknya), dapur ditata menurut alur memasak, ada strategi listrik untuk dua meter (bagian 6), dan ada tempat kerja fase 2 untuk istri yang sudah disiapkan kabelnya.

1. **Listrik adalah risiko terbesar bagi penghasilan.** Zona kerja sekarang menumpang di meter 900 VA bersama rice cooker, setrika, dan kulkas. Keputusan: pindahkan sirkuit zona kerja ke meter token, naikkan meter token dari 1.300 ke 2.200 VA (biaya PLN ±Rp 0,85 juta, tarif per kWh tetap), biarkan meter 900 apa adanya, dan pakai aturan beban sederhana. Kedua meter tidak digabung.
2. **Kamar depan dibalik susunannya:** tempat tidur 160×200 dan meja rias 90 cm berlampu ada di ujung depan dekat jendela, di balik tirai; meja sit-stand 140×70 pindah ke dinding kiri; dinding kanan menjadi latar video call; lemari 180 cm sampai plafon dibagi dua.
3. **Dapur enak untuk memasak:** satu sisi kerja dengan urutan kulkas → bak cuci → meja persiapan 100 cm → kompor, tinggi meja 86 cm, lampu di bawah kabinet, cooker hood, rak bumbu dan rel pisau di samping kompor, meja lipat dinding, tong sampah bertutup, detektor gas.
4. **Fase 2 (istri bekerja dari rumah):** mejanya di ruang tamu sisi kiri-depan, di balik dinding kamar depan. Outlet LAN dan stopkontak dari meter token dipasang sekarang, mejanya dibeli nanti.
5. **Perbaiki bangunan dulu, baru dekorasi:** atap ruang belakang bocor, dinding bawah lembap, kamar belakang dan dapur tanpa ventilasi. Konsep Tropis Hangat dan keputusan ubin hijau tidak berubah.
6. **Anggaran:** hemat Rp 37.085.000, menengah Rp 135.110.000, premium Rp 314.850.000 (termasuk cadangan 10%). Rekomendasi: **menengah, bertahap** selama 6–12 bulan, dimulai dari paket kerja remote + listrik (Rp 22.000.000), lalu perbaikan + cat (Rp 33.190.000), lalu furnitur ruang demi ruang.

## Jawaban pemilik

Fakta yang sudah pasti dari pemilik dan dipakai di draf ini:

- Pemilik adalah programmer yang bekerja remote penuh waktu dari rumah.
- Kamar depan dipakai berdua. Istri sekarang bekerja di bank dan nanti akan bekerja dari rumah.
- Istri ingin dapur yang enak untuk memasak dan kamar yang nyaman untuk wanita, dengan meja rias yang layak.
- Ada dua meter listrik. Pascabayar 900 VA melayani semua beban kecuali pompa air dan AC. Prabayar (token) 1.300 VA melayani pompa air dan AC.
- Kamar mandi memanjang di belakang, hampir sepanjang ruang belakang tetapi sedikit lebih pendek.
- Semua ruang berubin hijau motif yang sama, kecuali ruang belakang (keramik cokelat) dan kamar mandi (hijau lebih muda).
- Pemilik minta tampilan sebelum dan sesudah tiap ruang.

Belum dijawab, jadi jawaban bawaan dipakai: ubin hijau dipertahankan, TV pindah ke ruang tamu, kulkas pindah ke dapur, anggaran menengah bertahap, rumah milik sendiri.

---

## 1. Denah perkiraan

### Sistem koordinat

- Titik asal (0 ; 0) = sudut kiri-depan rumah, pada dinding yang menghadap jalan.
- x ke kanan sepanjang fasad, y masuk ke dalam rumah.
- "Depan" = arah jalan, "belakang" = menjauhi jalan, "kiri/kanan" = dilihat dari jalan menghadap rumah.
- Garis ruang = as dinding. Tebal dinding 15 cm, jadi muka dalam dinding ada 7,5 cm di dalam garis ruang dan ukuran bersih tiap ruang 15 cm lebih kecil. Semua furnitur sudah ditempatkan terhadap muka dalam dinding.
- Tapak total 8,15 × 11,8 m. Bagian asli rumah (lebar 5,0 m) ada di kiri; carport dan ruang belakang (lebar 3,15 m) adalah tambahan di kanan.

```
y=11.8 +----------------------------+---------------------+.+
       | DAPUR (galley) 4.7 x 1.8  [p] KAMAR MANDI 3.1 x 1.8|.|
       | kompor . . . bak cuci      | (keramik hijau muda)  |.|
y=10.0 +----------+-[pintu]---------+--+---[glass block]----+-+
       | KAMAR    | RUANG TENGAH       | RUANG BELAKANG    |
       | BELAKANG | 2.7 x 4.0          | 3.15 x 5.0        |
       | 2.3 x 4.0|                    | (keramik cokelat, |
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
| `kamar_mandi` | Kamar Mandi | 4.7 | 10.0 | 3.1 | 1.8 | 5.6 m² | sedang-rendah (panjang menurut keterangan pemilik: hampir sepanjang ruang belakang; tata letak dalam hanya terlihat dari pintu) |
| `ruang_belakang` | Ruang Belakang (makan + tempat sepatu + utilitas) | 5.0 | 5.0 | 3.1 | 5.0 | 15.8 m² | sedang (lebar ±0.15 m, kedalaman ±0.3 m) |
| `carport` | Carport | 5.0 | 0.0 | 3.1 | 5.0 | 15.8 m² | sedang (±0.3 m) |

Kamar mandi digambar x 4,7–7,8 mengikuti keterangan pemilik (memanjang di belakang, hampir sepanjang ruang belakang tetapi sedikit lebih pendek). Sisa 0,35 m di kanannya (x 7,8–8,15 ; y 10,0–11,8) tidak dimodelkan sebagai ruang.

Lantai menurut pemilik: semua ruang memakai ubin hijau motif yang sama, kecuali ruang belakang (keramik cokelat 40×40) dan kamar mandi (keramik hijau lebih muda). Carport memakai keramik batu abu.

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
| `ruang_belakang` | belakang | 0.70 | 1.70 | 0.25 | 2.3 | jendela | y=10.00, x 5.70–7.40 | kamar_mandi | 3 glass block tinggi (digambar sebagai satu pita); dengan kamar mandi sepanjang ini, glass block menghadap kamar mandi (meminjam cahaya, bukan ventilasi) |
| `dapur` | belakang | 2.30 | 1.20 | 0.25 | 2.3 | jendela | y=11.80, x 2.30–3.50 | luar | 3 glass block tinggi di atas bak cuci (digambar sebagai satu pita) |
| `kamar_mandi` | kiri | 0.10 | 0.70 | 2.00 | 0.0 | pintu | x=4.70, y 10.10–10.80 | dapur | pintu kamar mandi di ujung kanan dapur |

### Dasar penyusunan denah (hubungan antar-ruang terlihat jelas di foto; angkanya tetap perkiraan)

- Kamar depan menjorok ke depan di sisi kiri teras. Jendelanya menghadap jalan (AC di atasnya) dan ada satu jendela tinggi berteralis menghadap teras. Pintunya ada di ujung belakang dinding kiri ruang tamu.
- Ruang tamu, ruang tengah, dan dapur berderet lurus ke belakang. Pintu utama, bukaan bertirai, dan pintu dapur hampir segaris.
- Pintu kamar belakang dan pintu ruang belakang berhadapan lurus di ujung depan ruang tengah.
- Ruang belakang ada di belakang carport. Dinding depannya (dengan pintu samping, jendela berteralis, dan 4 lubang angin) adalah dinding belakang carport, dan letaknya sekitar 1 m lebih ke depan daripada batas ruang tamu–ruang tengah.
- Dapur adalah lorong memanjang kiri–kanan di paling belakang, di belakang kamar belakang dan ruang tengah. Kompor di ujung kiri, bak cuci tepat di seberang pintu dari ruang tengah, kamar mandi di ujung kanan, memanjang ke kanan di belakang ruang belakang. Tiga glass block di dinding belakang ruang belakang dengan demikian menghadap kamar mandi.
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

**Kamar mandi.** Hanya terlihat dari pintu: dinding keramik, shower dinding, lantai keramik hijau muda, kondisi tampak layak. Panjangnya ±3,1 m menurut pemilik; tata letak dalam belum terlihat. Dindingnya berbagi dengan ruang belakang dan dapur, jadi ia kandidat sumber lembap di kedua ruang itu.

**Ruang belakang.** Meja makan bundar tertimbun barang. Sepatu, galon, jemuran, sapu, gitar, meja setrika, dan kardus bercampur. Kotak meter/panel listrik terhalang rak. Plafon bocor. Satu lampu 6500K.

**Carport dan fasad.** Kanopi berlumut membuat teras dan ruang tamu gelap. Lisplang bernoda hitam. Cat kuning sudah pudar.

---

## 3. Konsep desain: Tropis Hangat

Tiga aturan yang berlaku di semua ruang:

1. **Satu warna dinding terang-hangat di seluruh rumah.** Rumah kecil dengan lima warna dinding (kuning, krem, putih, biru, hijau) terasa seperti lima rumah. Satu warna membuat ruang menyambung dan memantulkan cahaya.
2. **Kayu sebagai benang merah.** Set jati teras dan bangku ukir ruang tengah dipertahankan. Furnitur baru memakai kayu terang (oak/sungkai) agar ruang tidak bertambah gelap.
3. **Semua barang punya rumah tertutup.** Sumber utama kesan berantakan adalah barang di atas lemari dan di lantai. Solusinya lemari tertutup, bukan rak terbuka tambahan.

### Keputusan ubin hijau

**Pertahankan** di teras, ruang tamu, ruang tengah, kamar belakang, dan dapur. **Tutup dengan SPC** hanya di kamar depan. **Jangan bongkar.** Keramik cokelat ruang belakang dan keramik hijau muda kamar mandi juga tetap.

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
| Aksen 1 muda | Sage muda | `#A9B59B` | Dinding kanan kamar depan (latar video call, dinding meja rias) |
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

### Sebelum → sesudah

| Ruang | Sebelum (kondisi foto) | Sesudah (fungsi) |
|---|---|---|
| Teras | Set jati + meja kopi menghalangi jendela dan jalan ke pintu; dinding kuning | Tempat duduk tamu berbentuk L di pojok, jalan ke pintu 1,2 m bebas |
| Ruang tamu | Kosong, satu kursi penuh bantal, keranjang cucian, foto tersebar | Terima tamu + ruang keluarga + salat: sofa, TV, galeri foto, karpet tengah kosong; sisi kiri-depan disiapkan untuk meja kerja istri (fase 2) |
| Ruang tengah | Kasur berdiri, kulkas, dispenser, bangku penuh kardus, kabel melintang | Persimpangan yang lapang: satu lemari serbaguna, bangku ukir, mesh Wi-Fi |
| Kamar depan | Kasur di lantai, meja kaca penuh barang dan skincare, stabilizer dan kabel bertumpuk, lemari kaca | Kamar bersama: zona tidur + meja rias berlampu di depan, zona kerja remote di belakang tirai, lemari berdua |
| Kamar belakang | Dua lemari penuh kardus sampai plafon, tanpa ventilasi, biru tua | Kamar tidur keluarga: satu lemari geser, meja rias, exhaust, dinding terang |
| Dapur | Karung sampah, rak papan penuh kardus, meja tambahan di jalan, satu bohlam | Enak untuk memasak: satu sisi kerja (kulkas → bak cuci → persiapan 100 cm → kompor), lampu meja, cooker hood, rak bumbu, tong sampah bertutup |
| Kamar mandi | Tanpa exhaust (tata letak belum terlihat) | Zona kering dekat pintu, shower di tengah, kloset di ujung, exhaust |
| Ruang belakang | Meja makan tertimbun, sepatu, galon, jemuran, plafon bocor | Makan + zona masuk sepatu + utilitas/laundry + pojok kerja cadangan |
| Carport | Sepatu di lantai, kanopi berlumut | Jalur 1,2 m bebas, tong sampah beroda, jemuran lipat |

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
| Rak TV gantung 150 cm | baru | 30 × 150 × 35 | 2.52 ; 4.20 | 2.38–2.67 | 3.45–4.95 | +x (kanan) |
| TV (dinding) — dipasang di dinding/plafon, bawah +1.00 m | baru | 6 × 97 × 57 | 2.40 ; 4.20 | 2.38–2.43 | 3.72–4.69 | +x (kanan) |
| Titik pra-kabel fase 2: outlet LAN + stopkontak ganda (sirkuit meter token) — dipasang di dinding/plafon, bawah +0.90 m | baru | 3 × 25 × 12 | 2.39 ; 2.75 | 2.38–2.41 | 2.62–2.88 | +x (kanan) |
| FASE 2 - Meja kerja istri 120x50 (sit-stand atau tetap) | baru | 50 × 120 × 74 | 2.62 ; 2.75 | 2.38–2.88 | 2.15–3.35 | +x (kanan) |
| FASE 2 - Kursi kerja | baru | 52 × 55 × 110 | 3.14 ; 2.75 | 2.88–3.40 | 2.48–3.02 | −x (kiri) |
| FASE 2 - Monitor di lengan monitor — di atas meja | baru | 18 × 60 × 38 | 2.50 ; 2.75 | 2.41–2.59 | 2.45–3.05 | +x (kanan) |
| FASE 2 - Lampu meja / key light — di atas meja | baru | 8 × 20 × 45 | 2.47 ; 2.25 | 2.43–2.51 | 2.15–2.35 | +x (kanan) |
| Karpet jute polos 150x220 | baru | 150 × 220 × 1 | 3.40 ; 3.95 | 2.65–4.15 | 2.85–5.05 | +y (belakang) |
| Bangku simpan 120 cm (sajadah/mukena) | baru | 120 × 35 × 45 | 4.20 ; 5.75 | 3.60–4.80 | 5.58–5.92 | −y (jalan) |
| Kaligrafi Al-Quran (titik fokus) — dipasang di dinding/plafon, bawah +1.35 m | lama | 100 × 3 × 70 | 4.20 ; 5.91 | 3.70–4.70 | 5.90–5.92 | −y (jalan) |
| Galeri foto keluarga 3x3 bingkai — dipasang di dinding/plafon, bawah +1.15 m | baru | 3 × 180 × 90 | 4.91 ; 3.95 | 4.90–4.92 | 3.05–4.85 | −x (kiri) |
| Lampu lantai 3000K | baru | 30 × 30 × 150 | 4.75 ; 5.20 | 4.60–4.90 | 5.05–5.35 | +y (belakang) |

- **Dinding:** `#F3EDE1`; dinding belakang `#8A9A7B` sebagai latar kaligrafi berbingkai emas.
- **Galeri foto:** semua foto keluarga dikumpulkan di dinding kanan di atas sofa, 9 bingkai seragam warna arang, susunan 3×3, jarak antar bingkai 5 cm, garis tengah di ketinggian 150 cm. Foto lama dicetak ulang seukuran. Kaligrafi tetap sendirian di dinding belakang.
- **TV:** TV 32" dari kamar depan dipindah ke sini (dinding kiri bagian belakang, tengah layar ±1,25 m dari lantai). Jarak tonton ±2 m cocok untuk 32–43".
- **Fase 2, meja kerja istri:** dinding kiri bagian depan (y 2,15–3,35) sengaja dikosongkan. Sekarang hanya dipasang outlet LAN + stopkontak ganda dari sirkuit meter token. Nanti masuk meja 120×50 dan kursi (ditandai `phase: 2` di SCENE_SPEC). Cahaya jendela datang dari sisi kiri badan, latarnya dinding galeri foto, dan dinding bata memisahkan suaranya dari panggilan suami. Saat ia bekerja, daun kiri pintu utama ditutup dan orang masuk lewat daun kanan; jalur ke ruang tengah tetap ≥ 80 cm.
- **Lampu:** 2 lampu plafon 3000K, lampu lantai di pojok kanan-belakang, LED strip di bawah rak TV.
- **Simpan:** rak TV gantung (remote, charger, dokumen), bangku simpan di bawah kaligrafi (sajadah, mukena, bantal lantai). Rak dan bangku digantung/berkaki agar dinding lembap tetap bisa bernapas.
- **Versi hemat:** tanpa sofa. Karpet + 4 bantal lantai + meja lipat rendah.

### 4.3 Ruang tengah

Ruang ini adalah persimpangan empat pintu. Tugasnya: tetap kosong. Sisi kiri (x 2,3–3,3) adalah jalur ruang tamu → dapur. Kasur cadangan dikeluarkan (jual, atau ganti kasur lipat yang masuk lemari). **Kulkas pindah ke dapur. Dispenser pindah ke ruang belakang.**

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Lemari serbaguna/pantry kering 150 cm pintu geser | baru | 150 × 40 × 220 | 4.17 ; 9.72 | 3.42–4.92 | 9.53–9.92 | −y (jalan) |
| Bangku kayu ukir + bantalan | lama | 55 × 150 × 85 | 4.65 ; 8.30 | 4.38–4.93 | 7.55–9.05 | −x (kiri) |
| Mesh node 2 di rak dinding (tengah rumah) — dipasang di dinding/plafon, bawah +2.00 m | baru | 10 × 25 × 20 | 4.87 ; 7.30 | 4.82–4.92 | 7.17–7.42 | −x (kiri) |
| Cermin dinding 60x150 — dipasang di dinding/plafon, bawah +0.40 m | baru | 3 × 60 × 150 | 2.39 ; 8.20 | 2.38–2.41 | 7.90–8.50 | +x (kanan) |
| Foto pasangan bingkai putih (dinding depan) — dipasang di dinding/plafon, bawah +1.10 m | lama | 70 × 3 × 90 | 3.70 ; 6.09 | 3.35–4.05 | 6.08–6.10 | +y (belakang) |

- **Dinding:** `#F3EDE1`, tanpa aksen.
- **Lemari serbaguna 150 cm** di dinding belakang, tepat di samping pintu dapur: pantry kering (dapur terlalu sempit untuk lemari berdiri), seprai, handuk, kasur lipat tamu, stok rumah tangga. Pintu geser.
- **Bangku ukir** diberi bantalan dudukan krem; kolongnya untuk 2 keranjang rotan.
- **Kabel** di dinding dimasukkan ke trunking putih dekat plafon.
- **Lampu:** 1 lampu plafon 3000K; cermin di dinding kiri memantulkan cahaya dari ruang tamu.
- **Mesh node 2** di rak dinding kanan setinggi 2 m: titik tengah rumah, melayani kamar belakang, dapur, dan ruang belakang di balik dinding.

### 4.4 Kamar depan (kamar bersama: tidur + rias + kerja remote)

Ruang 2,3 × 6,0 m (bersih ±2,15 × 5,85 m), dipakai berdua. Dibagi dua oleh tirai di y≈2,7:

- **Depan (y 0–2,7), miliknya berdua untuk istirahat:** tempat tidur dan meja rias, dekat kedua jendela, palet paling lembut.
- **Belakang (y 2,7–6,0), kantor dan lemari:** meja sit-stand di dinding kiri, latar video call di dinding kanan, lemari di dinding kiri dekat pintu.

Dibanding v2, zona kerja dipindah dari dinding kanan ke dinding kiri dan mundur 0,85 m. Semua perlengkapannya sama. Alasannya: hanya dengan begitu meja rias 90 cm bisa berada di dekat jendela tanpa mempersempit lorong, dan lemari bisa sederet dengan meja.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Tempat tidur 160x200 berlaci, sandaran kepala berambalan (kepala di dinding kiri) | baru | 200 × 160 × 45 | 1.15 ; 0.90 | 0.15–2.15 | 0.10–1.70 | +x (kanan) |
| Lampu baca dinding sisi jendela — dipasang di dinding/plafon, bawah +1.10 m | baru | 8 × 12 × 15 | 0.12 ; 0.45 | 0.08–0.15 | 0.39–0.51 | +x (kanan) |
| Lampu baca dinding sisi ruangan — dipasang di dinding/plafon, bawah +1.10 m | baru | 8 × 12 × 15 | 0.12 ; 1.35 | 0.08–0.15 | 1.29–1.41 | +x (kanan) |
| Gorden blackout + vitrase jendela depan (rel ganda) — dipasang di dinding/plafon, bawah +0.10 m | baru | 150 × 7 × 220 | 1.15 ; 0.11 | 0.40–1.90 | 0.07–0.15 | +y (belakang) |
| Gorden blackout + vitrase jendela ke teras (rel ganda) — dipasang di dinding/plafon, bawah +0.10 m | baru | 7 × 120 × 220 | 2.19 ; 0.90 | 2.15–2.22 | 0.30–1.50 | −x (kiri) |
| Meja rias 90 cm berlaci + organizer | baru | 45 × 90 × 76 | 2.00 ; 2.20 | 1.77–2.23 | 1.75–2.65 | −x (kiri) |
| Cermin rias berlampu depan 4000K CRI 90 — dipasang di dinding/plafon, bawah +0.95 m | baru | 4 × 70 × 80 | 2.21 ; 2.20 | 2.19–2.23 | 1.85–2.55 | −x (kiri) |
| Stool rias empuk D35 (digambar masuk kolong meja rias; saat dipakai di x 1.43-1.78) | baru | 35 × 35 × 45 | 1.85 ; 2.20 | 1.68–2.02 | 2.03–2.38 | +x (kanan) |
| Karpet lembut 125x85 (zona tidur + rias) | baru | 125 × 85 × 2 | 0.72 ; 2.20 | 0.09–1.34 | 1.78–2.62 | +y (belakang) |
| Tirai pembatas zona tidur/rias (rel gantung, bagian atas terbuka 40 cm) — dipasang di dinding/plafon, bawah +0.10 m | baru | 215 × 3 × 210 | 1.15 ; 2.69 | 0.07–2.22 | 2.67–2.70 | +y (belakang) |
| Meja sit-stand elektrik 140x70 | baru | 70 × 140 × 74 | 0.45 ; 3.40 | 0.10–0.79 | 2.70–4.10 | +x (kanan) |
| Kursi kerja ergonomis | lama | 55 × 55 × 120 | 1.07 ; 3.65 | 0.80–1.35 | 3.38–3.92 | −x (kiri) |
| Lengan monitor (gas spring, jepit meja) — di atas meja | baru | 12 × 12 × 45 | 0.17 ; 3.65 | 0.11–0.23 | 3.59–3.71 | +x (kanan) |
| Monitor ultrawide di lengan monitor — di atas meja | lama | 20 × 82 × 38 | 0.30 ; 3.65 | 0.20–0.40 | 3.24–4.06 | +x (kanan) |
| Light bar monitor — di atas meja | baru | 10 × 50 × 5 | 0.32 ; 3.65 | 0.27–0.37 | 3.40–3.90 | +x (kanan) |
| Laptop di laptop stand — di atas meja | lama | 26 × 34 × 25 | 0.48 ; 2.90 | 0.35–0.61 | 2.73–3.07 | +x (kanan) |
| Keyboard + mouse — di atas meja | baru | 15 × 60 × 3 | 0.62 ; 3.65 | 0.55–0.69 | 3.35–3.95 | +x (kanan) |
| Key light panel LED lembut (jepit meja) — di atas meja | baru | 8 × 20 × 45 | 0.15 ; 2.82 | 0.11–0.19 | 2.72–2.92 | +x (kanan) |
| Lampu meja 4000K CRI 90 — di atas meja | baru | 15 × 15 × 45 | 0.20 ; 3.10 | 0.12–0.28 | 3.02–3.18 | +x (kanan) |
| Footrest (di kolong meja) | baru | 35 × 45 × 12 | 0.55 ; 3.65 | 0.38–0.73 | 3.42–3.88 | +x (kanan) |
| UPS line-interactive 1200 VA (di kolong meja) | baru | 15 × 40 × 22 | 0.25 ; 3.00 | 0.17–0.33 | 2.80–3.20 | +x (kanan) |
| Pegboard perangkat (headset, kabel, charger) — dipasang di dinding/plafon, bawah +0.95 m | baru | 3 × 40 × 70 | 0.09 ; 2.92 | 0.07–0.10 | 2.72–3.12 | +x (kanan) |
| Panel akustik dinding kiri 1 (di atas monitor) — dipasang di dinding/plafon, bawah +1.65 m | baru | 3 × 55 × 60 | 0.09 ; 3.25 | 0.07–0.10 | 2.98–3.52 | +x (kanan) |
| Panel akustik dinding kiri 2 (di atas monitor) — dipasang di dinding/plafon, bawah +1.65 m | baru | 3 × 55 × 60 | 0.09 ; 3.83 | 0.07–0.10 | 3.55–4.10 | +x (kanan) |
| Panel akustik dinding kanan 1 (latar video call) — dipasang di dinding/plafon, bawah +0.80 m | baru | 3 × 60 × 60 | 2.21 ; 3.35 | 2.19–2.23 | 3.05–3.65 | −x (kiri) |
| Panel akustik dinding kanan 2 (latar video call) — dipasang di dinding/plafon, bawah +0.80 m | baru | 3 × 60 × 60 | 2.21 ; 4.00 | 2.19–2.23 | 3.70–4.30 | −x (kiri) |
| 2 ambalan tipis 10 cm: buku tampak muka + tanaman kecil (latar video call) — dipasang di dinding/plafon, bawah +1.50 m | baru | 10 × 120 × 4 | 2.17 ; 3.65 | 2.12–2.22 | 3.05–4.25 | −x (kiri) |
| Karpet bulu pendek 110x130 (peredam, roda kursi tetap jalan) | baru | 110 × 130 × 1 | 1.35 ; 3.50 | 0.80–1.90 | 2.85–4.15 | +y (belakang) |
| Lemari pakaian pintu geser 180 cm sampai plafon (90 cm suami + 90 cm istri, satu pintu cermin) | baru | 60 × 180 × 260 | 0.40 ; 5.03 | 0.10–0.70 | 4.12–5.93 | +x (kanan) |
| Router utama / mesh node 1 di rak dinding — dipasang di dinding/plafon, bawah +1.90 m | baru | 10 × 25 × 20 | 2.17 ; 4.60 | 2.12–2.22 | 4.47–4.72 | −x (kiri) |
| Papan tulis rencana mingguan — dipasang di dinding/plafon, bawah +0.90 m | lama | 60 × 3 × 90 | 1.07 ; 5.91 | 0.77–1.37 | 5.90–5.92 | −y (jalan) |
| AC indoor — dipasang di dinding/plafon, bawah +2.30 m | lama | 80 × 20 × 28 | 1.15 ; 0.17 | 0.75–1.55 | 0.07–0.28 | +y (belakang) |

**Untuk istri**

- **Meja rias 90×45 cm** di dinding kanan, tepat setelah tempat tidur: 2–3 laci dengan sekat untuk skincare dan makeup, permukaan kosong. Cahaya alami datang dari jendela teras di sampingnya dan jendela depan.
- **Cermin berlampu depan** 70×80 cm, 4000K, CRI ≥ 90, bisa diredupkan. Lampu dari depan (bukan dari atas) menghilangkan bayangan di wajah.
- **Stool empuk** diameter 35 cm yang masuk ke kolong meja. Saat dipakai, lorong di belakangnya ±0,7 m; saat disimpan ±1,0 m.
- **Stopkontak ganda** setinggi 90 cm di samping cermin untuk hairdryer dan catokan (sirkuit meter token; aturan pakainya di bagian 6).
- **Lemari 180 cm sampai plafon** dibagi dua: 90 cm suami, 90 cm istri, satu pintu cermin setinggi badan, loker atas untuk koper dan seprai. Tambahan simpan: laci tempat tidur dan laci meja rias. Lemari tambahan 60 cm tidak saya pasang di dinding kanan karena akan menyempitkan jalan di belakang kursi kerja menjadi < 60 cm.
- **Tempat tidur 160×200 berlaci** melintang, kepala di dinding kiri, sandaran kepala berambalan, dan **lampu baca dinding di kedua sisi** dengan saklar masing-masing.
- **Karpet lembut** di depan tempat tidur dan meja rias; gorden blackout + vitrase di kedua jendela.
- **Palet zona depan:** putih gading, linen krem, kayu terang, sage muda di dinding kanan, aksen terakota lembut atau merah muda kusam pada bantal dan stool.

**Untuk suami (rincian di bagian 5)**

- **Meja sit-stand 140×70** di dinding kiri (2 cm dari dinding). Ia duduk di y≈3,65 menghadap dinding kiri; jendela depan ada di sisi kiri badannya (90° terhadap layar); lorong di belakang kursi ±0,875 m. **Jika lebar bersih kamar < 2,10 m, pakai meja 120×60.**
- **Latar video call** = dinding kanan sage dengan 2 ambalan tipis dan 2 panel akustik. Tempat tidur, meja rias, lemari, dan pintu di luar bingkai.
- **Tirai pembatas** digantung setinggi ±2,2 m dengan bagian atas terbuka ±40 cm supaya udara AC dari dinding depan tetap sampai ke meja kerja.
- **Papan tulis** di dinding belakang di samping lemari.

**Umum**

- **Cadangan jika lebar bersih < 2,10 m:** tempat tidur 140×200 atau 160×200 memanjang menempel dinding kiri dengan kepala di dinding depan, meja rias 80 cm pindah ke dinding kanan di y 2,2–3,0, tirai mundur ke y≈3,1, meja kerja 120×60.
- **Dinding:** `#F3EDE1`; dinding kanan `#A9B59B`. **Lantai:** SPC oak terang.
- **Lampu:** plafon 3000K dua titik (satu per zona, saklar terpisah), lampu baca, cermin berlampu, light bar + lampu meja 4000K, key light.
- **Roster** di dinding belakang ditutup akrilik bening berengsel; pintu diberi seal.

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

Alur memasak dari kanan ke kiri, tanpa berbalik badan: **kulkas → bak cuci → meja persiapan 100 cm → kompor → landasan panci panas → rice cooker.** Bak cuci dan kompor tetap di posisi sekarang, jadi tidak ada pekerjaan pipa.

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Meja dapur sisi kiri (lama, dilapis ulang) - rice cooker + pendaratan belanja | lama | 60 × 105 × 86 | 0.38 ; 10.60 | 0.08–0.68 | 10.07–11.12 | +x (kanan) |
| Meja sudut (landasan panci panas) | lama | 60 × 60 × 86 | 0.38 ; 11.43 | 0.08–0.68 | 11.12–11.73 | −y (jalan) |
| Dudukan rendah + kompor 2 tungku (tabung LPG di kolong, pintu berkisi) | lama | 90 × 60 × 65 | 1.12 ; 11.43 | 0.68–1.57 | 11.12–11.73 | −y (jalan) |
| Meja persiapan 100 cm (menerus antara kompor dan bak cuci) | lama | 100 × 60 × 86 | 2.08 ; 11.43 | 1.58–2.58 | 11.12–11.73 | −y (jalan) |
| Bak cuci + kabinet bawah | lama | 90 × 60 × 86 | 3.02 ; 11.43 | 2.57–3.48 | 11.12–11.73 | −y (jalan) |
| Kulkas 2 pintu (dipindah dari ruang tengah, engsel kanan) | lama | 60 × 65 × 170 | 3.80 ; 11.40 | 3.50–4.10 | 11.08–11.72 | −y (jalan) |
| Tempat sampah pilah 2 x 25 L (injak, bertutup) | baru | 50 × 40 × 45 | 4.38 ; 11.53 | 4.12–4.62 | 11.33–11.72 | −y (jalan) |
| Cooker hood slim 60 cm — dipasang di dinding/plafon, bawah +1.45 m | baru | 60 × 45 × 15 | 1.12 ; 11.50 | 0.82–1.43 | 11.28–11.72 | −y (jalan) |
| Rak bumbu + minyak (rel dinding, di samping kompor) — dipasang di dinding/plafon, bawah +1.10 m | baru | 45 × 12 × 30 | 1.83 ; 11.66 | 1.60–2.06 | 11.60–11.72 | −y (jalan) |
| Rel magnet pisau + gantungan alat masak — dipasang di dinding/plafon, bawah +1.20 m | baru | 45 × 6 × 8 | 2.35 ; 11.69 | 2.12–2.58 | 11.66–11.72 | −y (jalan) |
| Kabinet atas 100 cm (bawah 1,42 m) — dipasang di dinding/plafon, bawah +1.42 m | baru | 100 × 34 × 65 | 2.08 ; 11.55 | 1.58–2.58 | 11.38–11.72 | −y (jalan) |
| LED strip 4000K di bawah kabinet atas dan rak piring — dipasang di dinding/plafon, bawah +1.40 m | baru | 190 × 3 × 2 | 2.55 ; 11.42 | 1.60–3.50 | 11.40–11.44 | −y (jalan) |
| Rak piring gantung stainless 90 cm (menetes ke bak) — dipasang di dinding/plafon, bawah +1.42 m | baru | 90 × 28 × 55 | 3.02 ; 11.59 | 2.57–3.48 | 11.45–11.73 | −y (jalan) |
| Kabinet atas aluminium sisi kiri — dipasang di dinding/plafon, bawah +1.45 m | lama | 34 × 105 × 60 | 0.24 ; 10.60 | 0.07–0.42 | 10.07–11.12 | +x (kanan) |
| Rel gantung panci + ambalan 15 cm (dinding depan) — dipasang di dinding/plafon, bawah +1.20 m | baru | 160 × 15 × 60 | 1.55 ; 10.15 | 0.75–2.35 | 10.08–10.22 | +y (belakang) |
| Meja lipat dinding 60x35 (terlipat; dibuka saat menata piring) — dipasang di dinding/plafon, bawah +0.50 m | baru | 60 × 5 × 35 | 1.20 ; 10.10 | 0.90–1.50 | 10.07–10.12 | +y (belakang) |
| Keset anti-lelah 120x45 di depan meja persiapan dan bak cuci | baru | 120 × 45 × 2 | 2.50 ; 10.88 | 1.90–3.10 | 10.66–11.11 | +y (belakang) |
| Detektor gas + APAR 1 kg (dinding dekat pintu) — dipasang di dinding/plafon, bawah +1.20 m | baru | 6 × 3 × 35 | 2.33 ; 10.09 | 2.30–2.36 | 10.07–10.11 | +y (belakang) |

- **Meja persiapan menerus 100 cm** di antara bak cuci dan kompor: tempat memotong tepat di antara air dan api.
- **Tinggi meja 86 cm** untuk tinggi badan ±160 cm (siku dikurangi 10–15 cm). Ukur meja cor yang ada: jika sekarang 80–83 cm, lapisan granit baru + adukan menaikkannya ke 86 cm. **Kompor tetap di dudukan rendah** (±65 cm) supaya bibir wajan setinggi ±80 cm dan lengan tidak terangkat saat menumis.
- **Dalam jangkauan tangan dari kompor:** rak bumbu dan minyak di rel dinding, rel magnet pisau dan gantungan sutil di atas meja persiapan, panci harian di rel dinding depan. Kabinet atas dipasang dengan sisi bawah 1,42 m agar rak teratas masih terjangkau.
- **Rak piring gantung di atas bak cuci:** piring menetes langsung ke bak, meja tetap kering.
- **Lampu:** LED strip 4000K di bawah kabinet atas dan rak piring (menerangi talenan tanpa bayangan badan) + 2 lampu plafon 4000K.
- **Asap dan panas:** cooker hood slim 60 cm, 65–75 cm di atas tungku, ducting ke grill plafon yang sudah ada (cek bahwa grill itu tembus ke luar atap). Tambah exhaust fan 10" bila dinding belakang adalah dinding luar.
- **Pantry dua langkah dari pintu:** stok kering dan alat jarang pakai di lemari serbaguna ruang tengah. Papan rak di ketinggian 1,9 m dan lemari kaca di lantai dikeluarkan.
- **Meja lipat dinding 60×35 cm** di dinding depan, di seberang kompor: dibuka saat menata piring atau menaruh belanjaan (lorong tersisa ±0,7 m), dilipat kembali setelahnya. Troli tidak saya pakai: di lorong 1,05 m ia akan menghalangi ayunan pintu kulkas atau jalan ke kamar mandi.
- **Kulkas** di ujung kanan deretan, engsel di kanan sehingga pintunya membuka menjauhi bak cuci. Pintu 60 cm yang terbuka penuh menyisakan ±0,4 m lorong selama beberapa detik; karena itu tidak ada benda apa pun di seberangnya.
- **Keset anti-lelah** di depan meja persiapan dan bak cuci.
- **Sampah:** dua tong injak bertutup 25 L di ujung kanan (organik dan anorganik), dikosongkan setiap malam ke tong beroda 60–80 L bertutup di carport. Tidak ada karung terbuka, koran, atau kardus di dapur.
- **Keamanan gas:** tabung LPG di kolong dudukan kompor dengan pintu berkisi (gas LPG turun ke bawah), selang berklem dan regulator SNI baru (ganti tiap 2–3 tahun), detektor gas dan APAR 1 kg di dekat pintu, tidak ada stopkontak di kolong kompor.
- **Listrik (meter 900 VA):** 2 stopkontak dinding setinggi 110 cm jauh dari bak cuci, satu khusus kulkas. Yang boleh menyala bersamaan: kulkas + cooker hood + lampu + rice cooker memasak (±700 W). Jangan menyalakan setrika, dispenser panas, atau blender lama pada saat itu. Kompor induksi, ketel listrik, microwave, dan air fryer tidak cocok untuk meter ini.
- **Dinding:** `#F5EFE4` washable, backsplash keramik putih 60 cm. Hijau stabilo perlu sealer + 2–3 lapis.

### 4.7 Kamar mandi

Ruang memanjang 3,1 × 1,8 m (bersih ±2,95 × 1,65 m) di belakang ruang belakang, masuk dari ujung kanan dapur. Panjangnya dari keterangan pemilik; posisi kloset dan shower adalah usulan (hanya shower yang terlihat dari pintu).

| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |
|---|---|---|---|---|---|---|
| Kloset | lama | 40 × 65 × 40 | 7.35 ; 11.35 | 7.15–7.55 | 11.03–11.67 | −y (jalan) |
| Area shower | lama | 90 × 90 × 2 | 6.00 ; 11.25 | 5.55–6.45 | 10.80–11.70 | −y (jalan) |
| Exhaust fan plafon — dipasang di dinding/plafon, bawah +2.45 m | baru | 25 × 25 × 10 | 6.60 ; 10.90 | 6.47–6.72 | 10.78–11.03 | +y (belakang) |
| Rak sudut + gantungan handuk — dipasang di dinding/plafon, bawah +1.00 m | baru | 15 × 30 × 60 | 4.86 ; 11.55 | 4.79–4.94 | 11.40–11.70 | +x (kanan) |

- Zona kering di dekat pintu, shower di tengah, kloset di ujung kanan.
- Pasang exhaust fan plafon (ruang ini tidak punya jendela ke luar; glass block ke ruang belakang hanya meneruskan cahaya), nat dan silikon ulang, rak sudut dan gantungan handuk.
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
| Stopkontak + lampu dinding pojok kerja cadangan — dipasang di dinding/plafon, bawah +1.10 m | baru | 6 × 20 × 25 | 8.04 ; 7.70 | 8.01–8.07 | 7.60–7.80 | −x (kiri) |
| Kotak meter/panel listrik (akses harus bebas) — dipasang di dinding/plafon, bawah +1.50 m | lama | 6 × 50 × 50 | 5.11 ; 7.35 | 5.08–5.14 | 7.10–7.60 | +x (kanan) |

- **Zona masuk (y 5,0–7,0):** lemari sepatu tertutup 120 cm di dinding kanan, bangku sepatu di bawah jendela (meja kopi jati dari teras + bantalan), lemari utilitas tinggi untuk sapu, pel, vakum, setrika, dan papan setrika. Gitar digantung di dinding kanan di atas lemari sepatu sebagai hiasan.
- **Kotak meter/panel listrik** di dinding kiri: 1 m di depannya harus selalu kosong.
- **Pos minum (dinding kiri, y 7,8–8,6):** dispenser + rak galon 3 susun. Galon datang lewat pintu carport, tidak perlu diangkat melintasi rumah.
- **Zona makan (y 7,5–8,9):** bangku banquette menempel dinding kanan (kolongnya laci stok), meja 120×70, 2 kursi. Muat 4–5 orang dan tetap menyisakan jalan ±0,95 m di sisi kiri. Meja bundar lama dikeluarkan.
- **Pojok kerja cadangan:** ujung depan banquette diberi stopkontak dan lampu dinding. Latar di belakangnya dinding polos; sinyal dari mesh node 2 di balik dinding kiri.
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

## 5. Ruang kerja remote

Programmer remote duduk 8–10 jam sehari dan penghasilannya bergantung pada tiga hal: badan yang tidak sakit, listrik dan internet yang tidak putus, dan tampil serta terdengar baik di video call. Lembar spesifikasi ini disusun menurut tiga hal itu.

### Keputusan tata letak

- **Zona kerja di paruh belakang kamar depan, di dinding kiri.** Layar tegak lurus terhadap jendela depan (jendela di sisi kiri badan), tidak ada jendela di belakang layar maupun di belakang punggung, dan dinding di belakang punggung (dinding kanan) polos tanpa bukaan sepanjang bingkai kamera. Pantulan jendela teras jatuh di luar bidang monitor.
- **Tempat tidur tetap 160×200 berlaci, bukan sofa bed atau Murphy bed.**
  - Sofa bed: harus dibuka-lipat setiap hari oleh dua orang, dan kasurnya tidak dirancang untuk tidur setiap malam.
  - Murphy bed: butuh angkur kuat di dinding bata yang sekarang lembap, harga custom Rp 12–20 juta, dan lantai yang dibebaskannya adalah ujung depan kamar yang tidak dipakai bekerja dan tidak masuk bingkai kamera.
  - Tempat tidur berlaci: paling murah, paling nyaman, dan menambah laci penyimpanan di sisi yang terbuka.
- **Tirai pembatas** (kain tebal, y≈2,7) punya tiga guna: memisahkan zona istirahat dari kantor, meredam gema, dan menahan cahaya layar atau silau jendela bila salah satu bekerja saat yang lain tidur atau berdandan. Bagian atasnya terbuka ±40 cm untuk aliran AC. Buka di siang hari supaya cahaya jendela sampai ke meja.
- **Dua orang tidak bekerja di kamar yang sama.** Dua panggilan video bersamaan dalam ruang selebar 2,15 m saling mengganggu, dan meja kedua tidak muat tanpa mengorbankan lorong. Karena itu meja istri (fase 2) ada di ruang tamu, di balik dinding yang sama, dengan kabel yang disiapkan sekarang.
- **Tidak ada kulkas kecil atau pojok ketel di kamar.** Lebar 2,15 m tidak cukup, dan ketel listrik membebani meter. Cukup tumbler di meja.

### Lembar spesifikasi

| Bagian | Spesifikasi | Alasan |
|---|---|---|
| Meja | Sit-stand elektrik 140×70 cm, rentang tinggi ±72–118 cm, memori ketinggian. Cadangan 120×60 jika lebar bersih kamar < 2,10 m | Berganti duduk-berdiri tiap 45–60 menit mengurangi pegal punggung; kedalaman 70 cm memberi jarak mata yang cukup untuk ultrawide |
| Layar | Monitor ultrawide lama di lengan monitor gas spring (beban ≥ 9 kg). Tepi atas layar setinggi mata atau sedikit di bawahnya, jarak mata–layar 60–75 cm | Lengan membebaskan permukaan meja dan ikut naik saat mode berdiri |
| Laptop | Di laptop stand di sisi belakang meja sebagai layar kedua; keyboard dan mouse eksternal | Leher tidak menunduk |
| Kursi dan kaki | Kursi ergonomis yang ada (atur: siku 90°, lumbar terisi), footrest di kolong, alas karpet bulu pendek | Kursi sudah baik; footrest perlu karena tinggi meja duduk standar sering terlalu tinggi |
| Cahaya kerja | Light bar di atas monitor + lampu meja, 4000K, CRI ≥ 90. Lampu plafon 3000K tetap menyala agar kontras ruangan rendah | Menerangi meja tanpa memantul di layar |
| Kendali silau | Layar 90° terhadap jendela. Rel ganda di kedua jendela: vitrase (siang) + blackout (silau sore, tidur siang). Dinding matte | Jendela di belakang atau di depan layar adalah penyebab utama mata lelah |
| Listrik | Sirkuit khusus zona kerja ditarik dari **meter token** (bukan meter 900 VA), MCB 6 A + RCBO 30 mA; sirkuit AC terpisah. 2 stopkontak ganda setinggi 90 cm di atas meja + 1 di kolong, dengan pelindung surja. Rincian di bagian 6 | Di meter 900 VA, rice cooker + setrika bisa mematikan komputer di tengah panggilan. Di meter token bebannya hanya AC, pompa, dan zona kerja, sehingga bisa diperkirakan |
| Cadangan daya | UPS line-interactive 1.200 VA (±650–720 W) dengan AVR, menggantikan stabilizer. Dicolok ke UPS: laptop, monitor, router, ONT. Bukan untuk AC, hairdryer, atau printer laser. 1.500 VA hanya perlu bila memakai PC desktop | Beban ±200 W memberi waktu ±20–30 menit; laptop punya baterai sendiri, jadi beban kritis sebenarnya (monitor + router ±80 W) bertahan ±45–60 menit. AVR menahan kedip tegangan saat kompresor AC atau pompa menyala di meter yang sama |
| Kabel | Cable tray di kolong meja, laci kabel, spiral kabel yang ikut naik-turun, label di tiap ujung | Meja sit-stand menarik kabel; tanpa tray kabel tercabut |
| Jaringan | Router utama/mesh node 1 di rak dinding kanan setinggi 1,9 m dekat pintu kamar depan; kabel LAN Cat6 dari router ke meja lewat trunking di dinding belakang; satu kabel LAN menembus dinding ke titik fase 2 di ruang tamu; mesh node 2 di ruang tengah (tengah rumah) dengan kabel backhaul lewat trunking dekat plafon | Rumah sepanjang 11,8 m dengan dinding bata; satu router di pojok depan tidak sampai ke kamar belakang dan ruang belakang. LAN kabel ke meja membuat panggilan tidak bergantung pada Wi-Fi |
| Internet cadangan | Opsional: modem 4G/5G dengan failover otomatis lewat router dual-WAN, atau ISP kedua | Satu jalur internet adalah titik gagal tunggal untuk penghasilan |
| Latar video call | Dinding kanan sage `#A9B59B` dengan 2 ambalan tipis 10 cm (buku tampak muka, 1–2 tanaman kecil) dan 2 panel akustik setinggi badan duduk. Tempat tidur, meja rias, lemari, pintu, dan papan tulis di luar bingkai | Rapi, tidak ramai, dan tetap terasa rumah |
| Cahaya wajah | Key light panel LED lembut di ujung depan meja (sisi jendela), 45° dari wajah, 4000–4500K, searah cahaya jendela | Wajah terang merata tanpa bayangan keras, siang maupun malam |
| Suara | 4 panel akustik PET/kain (2 di dinding kiri di atas monitor, 2 di dinding kanan di belakang punggung), karpet, gorden dan tirai tebal. Seal karet di kusen + seal bawah pintu. Roster ke kamar belakang ditutup akrilik | Kamar sempit berdinding keras bergema; panel di dinding depan dan belakang pembicara paling efektif. Pintu dan roster adalah jalan bocor suara terbesar |
| Perangkat | Pegboard di dinding kiri di ujung depan meja (headset, kabel, charger). Papan tulis lama di dinding belakang | Barang kecil punya tempat; meja tetap kosong |
| Udara | AC ½–¾ PK cukup untuk ±14 m² (cek label unit yang ada; servis dan cuci sebelum dipakai lagi). Kipas meja kecil yang senyap untuk sirkulasi. Tirai pembatas tidak menutup sampai plafon | Unit ½ PK (±350–400 W) paling ramah untuk meter token; ¾ PK baru masuk akal setelah meter token naik ke 2.200 VA |
| Tempat kerja cadangan | Bangku banquette ruang belakang: stopkontak + lampu dinding, sinyal dari mesh node 2 di balik dinding | Dipakai saat kamar depan sedang dikerjakan tukang, saat pasangan beristirahat, atau untuk ganti suasana |
| Fase 2: meja istri | Ruang tamu, dinding kiri bagian depan: meja 120×50 (sit-stand atau tetap), kursi kerja, lengan monitor, lampu. Pra-kabel sekarang: 1 outlet LAN + 1 stopkontak ganda dari sirkuit meter token. Opsional nanti: AC ½ PK ruang tamu | Ruang tamu kosong dan tenang di jam kerja, berbatas dinding bata dengan kamar depan, dan hanya ±2 m kabel dari router. Ruang belakang ditolak: jauh dari router, ada di meter 900 VA, bising (cuci, dapur, pintu masuk) |

### Urutan pasang

1. Minggu 0: beli dan langsung pakai di meja lama: UPS, mesh, lengan monitor, light bar. Tidak perlu menunggu cat.
2. Minggu 0–1: ajukan tambah daya meter token lewat PLN Mobile; tukang listrik menarik sirkuit zona kerja dari meter token, stopkontak meja dan meja rias, kabel LAN, dan titik pra-kabel fase 2.
3. Minggu 2–4: kamar depan dikerjakan paling dulu (plester lembap, kering, cat). Selama itu bekerja dari ruang tamu atau banquette ruang belakang dengan UPS dan mesh yang sudah ada.
4. Akhir minggu 4: SPC, meja sit-stand, panel akustik, gorden, tirai. Zona kerja selesai sebelum ruang lain.

---

## 6. Listrik dua meter

### Beban nyata per meter

Daya terpakai kira-kira 85–90% dari VA: meter 900 VA ≈ 770–810 W, meter 1.300 VA ≈ 1.100–1.170 W, meter 2.200 VA ≈ 1.870–1.980 W. Angka watt di bawah adalah kisaran alat rumah tangga umum; cek label alat Anda.

**Meter pascabayar 900 VA (sekarang: semua kecuali pompa dan AC)**

| Beban | Watt | Catatan |
|---|---:|---|
| Kulkas 2 pintu | 100–150 | Lonjakan sesaat 3–5× saat kompresor menyala |
| Lampu LED seluruh rumah (malam) | 60–100 | |
| TV + mesh node + charger | 80–110 | |
| 2 kipas | 80–100 | |
| Cooker hood + exhaust | 120–200 | |
| Zona kerja (laptop + ultrawide + router/ONT) | 170–200 | **Sekarang di sini; ini yang berisiko** |
| Rice cooker memasak | 300–400 | Menghangatkan ±50 W |
| Setrika | 300–400 | |
| Dispenser panas | 300–350 | Menyala-mati sepanjang hari bila saklar panas hidup |
| Mesin cuci | 300–400 | |

Beban dasar siang ±450–550 W (kulkas, kipas, zona kerja, TV). Rice cooker memasak menaikkannya ke ±850–950 W: sudah di batas. Ditambah setrika atau dispenser panas, MCB turun dan komputer serta router ikut mati.

**Meter prabayar (token) 1.300 VA (sekarang: pompa dan AC)**

| Beban | Watt | Catatan |
|---|---:|---|
| AC ½ PK | 350–400 | ¾ PK 550–600 W; lonjakan sesaat 2–3× |
| Pompa air | 125–250 | Lonjakan sesaat 2–3×; menyala sebentar-sebentar |
| Total sekarang | 475–650 | Sisa ±450–650 W tidak terpakai |

### Pilihan yang ditimbang

| Pilihan | Biaya sekali | Dampak bulanan | Penilaian |
|---|---:|---|---|
| (a) Pindahkan sirkuit zona kerja ke meter token | ±Rp 0,7–1,4 juta (kabel 2,5 mm² ±20 m, MCB, RCBO, stopkontak, upah) | Nol; hanya pindah pemakaian ±45 kWh/bulan ke token | **Ambil.** AC ½ PK + pompa + zona kerja ≈ 850 W dari ±1.150 W. UPS menahan kedip saat AC/pompa menyala |
| (b) Naikkan meter 900 VA ke 1.300 / 2.200 VA | ±Rp 375 ribu / ±Rp 1,22 juta (Rp 937 per VA tambahan) + SLO | Bila meter ini bersubsidi (kode tarif R1/900 VA, ±Rp 605/kWh), tarif naik ke ±Rp 1.445/kWh: ±2,4×. Bila sudah R1M/900 VA (±Rp 1.352/kWh), naik ±7% | **Tidak sekarang.** Masalah meter ini adalah alat pemanas yang menyala bersamaan; itu selesai dengan aturan (d) tanpa biaya |
| (c) Gabung menjadi satu meter 2.200 VA | ±Rp 0,85 juta + rombak panel ±Rp 1–2 juta + SLO | Subsidi 900 VA hilang bila ada | **Tolak.** Kapasitas total sama dengan sekarang (900 + 1.300), tetapi satu MCB turun atau token habis mematikan seluruh rumah. Dua meter adalah cadangan gratis |
| (d) Aturan beban di meter 900 VA | Rp 0 | Nol | **Ambil.** Lihat di bawah |
| (e) Naikkan meter **token** 1.300 → 2.200 VA | ±Rp 843 ribu (900 VA × Rp 937) + SLO/pemeriksaan ±Rp 100–300 ribu | Nol: tarif per kWh 1.300 VA dan 2.200 VA sama | **Ambil (tingkat menengah).** Memberi ruang untuk hairdryer di meja rias, AC ¾ PK, dan meja kerja kedua di fase 2 |

Tarif dan biaya penyambungan di atas adalah angka yang berlaku sampai 2025; cek simulasi di aplikasi PLN Mobile sebelum mengajukan, dan lihat kode tarif di tagihan meter 900 VA (R1 = bersubsidi, R1M = tidak).

### Keputusan

1. **Minggu 1:** sirkuit zona kerja (stopkontak meja, router, ONT) dipindah ke meter token. Meter 900 VA lega ±200 W dan tidak lagi bisa mematikan pekerjaan.
2. **Minggu 0–2:** ajukan tambah daya meter token ke 2.200 VA. Sampai itu selesai, hairdryer dipakai pada setelan rendah atau saat AC dimatikan sebentar.
3. **Meter 900 VA tidak diubah.** Kulkas, lampu, TV, dapur, dan ruang belakang tetap di sini dengan aturan beban.
4. **Kedua meter tidak digabung dan tidak pernah dijembatani.**

Hitungan meter token setelah keputusan ini:

| Kondisi | AC | Pompa | Zona kerja | Lain | Total | Batas |
|---|---:|---:|---:|---:|---:|---:|
| Sekarang, 1.300 VA, AC ½ PK | 400 | 250 | 200 | – | 850 W | ±1.150 W |
| 1.300 VA + hairdryer 1.000 W | 400 | 250 | 200 | 1.000 | 1.850 W | **lewat**: pakai setelan rendah atau matikan AC dulu |
| 2.200 VA, fase 1 + hairdryer | 400 | 250 | 200 | 1.000 | 1.850 W | ±1.950 W, pas |
| 2.200 VA, fase 2 (2 meja, AC kedua ½ PK) | 800 | 250 | 300 | – | 1.350 W | ±1.950 W |

Pemakaian token setelah zona kerja pindah: AC ±96 kWh + pompa ±6 kWh + zona kerja ±45 kWh ≈ 150 kWh/bulan ≈ Rp 215 ribu. **Token yang habis mematikan AC, pompa, dan zona kerja sekaligus:** isi ulang saat sisa < 30 kWh, aktifkan alarm batas rendah di meter, dan pasang pengingat mingguan. UPS memberi waktu untuk membeli token dari ponsel.

### Pembagian listrik

| Sirkuit | Meter | Pengaman | Melayani |
|---|---|---|---|
| T1 | Token | MCB 6 A | AC kamar depan |
| T2 | Token | MCB 4–6 A | Pompa air |
| T3 | Token | MCB 6 A + RCBO 30 mA | Zona kerja kamar depan: 2 stopkontak ganda di atas meja (UPS → laptop, monitor, ONT, router), 1 stopkontak kolong meja |
| T4 | Token | MCB 6 A + RCBO 30 mA | Stopkontak meja rias (hairdryer, catokan) dan titik pra-kabel fase 2 di ruang tamu (meja istri; AC kedua bila kelak dipasang) |
| P1 | 900 VA | MCB 2–4 A | Lampu seluruh rumah, termasuk kamar depan |
| P2 | 900 VA | MCB 4 A | Stopkontak umum ruang tamu, ruang tengah, kamar belakang (TV, mesh node 2, kipas, charger) |
| P3 | 900 VA | MCB 4 A + RCBO 30 mA | Dapur: kulkas (stopkontak sendiri), rice cooker, cooker hood, exhaust |
| P4 | 900 VA | MCB 4 A + RCBO 30 mA | Ruang belakang dan kamar mandi: dispenser, setrika, mesin cuci, exhaust, pojok kerja cadangan |

Syarat pemasangan untuk tukang listrik:

- Tiap sirkuit diberi label di panel, dan tiap stopkontak meter token diberi stiker warna berbeda.
- Fasa dan netral kedua meter **tidak boleh disambung satu sama lain** di titik mana pun, termasuk di kotak sambung plafon. Tiap meter punya rel netral sendiri. Arde (grounding) boleh bersama.
- MCB cabang hanya memisahkan gangguan; batas total tetap MCB di meter.
- Kabel 2,5 mm² untuk stopkontak, 1,5 mm² untuk lampu, di dalam pipa atau trunking.

### Aturan beban (ditempel di dapur)

1. **Satu alat pemanas pada satu waktu di meter 900 VA:** rice cooker memasak, setrika, dispenser panas, atau mesin cuci. Tidak dua sekaligus.
2. **Saklar panas dispenser dimatikan.** Nyalakan hanya saat perlu; ini beban tersembunyi terbesar.
3. Menyetrika tidak bersamaan dengan memasak nasi.
4. Hairdryer dan catokan hanya di stopkontak meja rias (meter token).
5. Tidak ada kompor induksi, ketel listrik, microwave, atau air fryer sebelum ada keputusan naik daya untuk meter 900 VA.
6. Token diisi saat sisa < 30 kWh.

---

## 7. Anggaran

Semua angka adalah kisaran. Tarif acuan: tukang Rp 170–200 rb/hari, kenek Rp 120–140 rb/hari, borongan cat Rp 20–30 rb/m². Luas cat ±225 m² dinding + ±60 m² plafon. Merek hanya contoh kelas harga (Dulux Catylac / Nippon Vinilex untuk ekonomis; Dulux EasyClean / Nippon Spot-less untuk washable; IKEA, Informa, atau tukang kayu lokal untuk furnitur).

### Perbandingan

| Kelompok | Hemat | Menengah | Premium |
|---|---:|---:|---:|
| A. Perbaikan bangunan & keselamatan | Rp 8.275.000 | Rp 19.150.000 | Rp 41.000.000 |
| B. Cat | Rp 3.550.000 | Rp 14.040.000 | Rp 30.150.000 |
| C + D + F. Lantai, lampu, dekor | Rp 3.150.000 | Rp 12.570.000 | Rp 27.000.000 |
| E. Furnitur & penyimpanan | Rp 11.590.000 | Rp 55.050.000 | Rp 132.400.000 |
| R. Paket kerja remote | Rp 7.170.000 | Rp 22.000.000 | Rp 55.700.000 |
| Cadangan 10% | Rp 3.350.000 | Rp 12.300.000 | Rp 28.600.000 |
| **Total** | **Rp 37.085.000** | **Rp 135.110.000** | **Rp 314.850.000** |

Cara memilih:

- **Hemat:** bocor ditambal, lembap ditangani di titik terparah, cat sendiri, furnitur lama dipakai semaksimal mungkin, lesehan di ruang tamu.
- **Menengah (rekomendasi):** atap ruang belakang diganti, lembap ditangani tuntas, cat oleh tukang, lemari tertutup baru di semua ruang, sofa, SPC kamar depan, dapur dilapis ulang.
- **Premium:** semua custom sampai plafon, kitchen set baru, listrik ditata ulang, fasad dicat.

Jika dana terbatas, urutannya: (1) paket kerja remote, karena penghasilan bergantung padanya (Rp 22.000.000 di tingkat menengah; versi hemat Rp 7.170.000); (2) kelompok A dan B tingkat menengah (Rp 33.190.000); (3) furnitur ruang demi ruang: kamar depan → dapur → ruang belakang → kamar belakang → ruang tamu.

Paket kerja remote + listrik per tingkat: **hemat** = sirkuit zona kerja dipindah ke meter token (tanpa naik daya), meja kayu tetap 120×60, lengan monitor, UPS 1.200 VA merek lokal, 1 node mesh tambahan, panel akustik buatan sendiri; **menengah** = ditambah naik daya meter token ke 2.200 VA, meja sit-stand elektrik, UPS bermerek, mesh 2 node dengan kabel backhaul, modem 4G cadangan dengan failover, pra-kabel fase 2; **premium** = meja motor ganda, mesh 3 node, ISP kedua, kamera dan mikrofon, AC inverter baru. Langganan internet cadangan bulanan tidak dihitung.

**Fase 2 belum masuk total:** meja 120×50 + kursi + lengan monitor + lampu untuk istri ±Rp 4–7 juta; AC ½ PK ruang tamu ±Rp 4–5 juta bila diperlukan.

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
|  | 3 ambalan dinding (latar video call) + pegboard | Rp 300.000 |
|  | Meja rias 80–90 cm + cermin + lampu LED cermin CRI 90 + stool | Rp 1.000.000 |
|  | 2 lampu baca dinding | Rp 200.000 |
| E. Furnitur — ruang tamu | Ambalan/rak TV 120 cm + bracket (TV 32" lama) | Rp 450.000 |
|  | 4 bantal lantai + meja lipat rendah (lesehan, ganti sofa) | Rp 600.000 |
|  | 9 bingkai foto seragam | Rp 400.000 |
| E. Furnitur — ruang tengah | Bantalan bangku ukir + lemari serbaguna sederhana tertutup | Rp 900.000 |
| E. Furnitur — kamar belakang | 4 boks kolong ranjang, rel gantungan tas, organizer meja rias (lemari lama dipakai dulu) | Rp 550.000 |
| E. Furnitur — dapur | 2 rak dinding stainless 90 cm + rel gantung panci (ganti papan rak lama) | Rp 500.000 |
|  | Tempat sampah injak 2 × 25 L + tong beroda 60 L bertutup di carport | Rp 500.000 |
|  | Selang + regulator LPG SNI baru, rak piring 2 susun, keset anti-slip | Rp 450.000 |
|  | Pintu kolong meja dapur 3 m (aluminium sederhana) | Rp 600.000 |
|  | Rak bumbu, rel pisau/alat, lampu LED bawah rak, detektor gas | Rp 650.000 |
| E. Furnitur — ruang belakang | Rak sepatu tertutup | Rp 450.000 |
|  | Gantungan sapu dinding, rak galon, 4 kontainer bertutup | Rp 640.000 |
| F. Dekor | Gorden polos 3 bukaan ruang lain @ Rp 150 rb | Rp 450.000 |
|  | 4 tanaman + pot | Rp 300.000 |
| R. Paket kerja remote | Meja kerja kayu 120×60 buatan lokal (ganti meja kaca) + cable tray, velcro, label | Rp 1.200.000 |
|  | Lengan monitor gas spring + laptop stand | Rp 470.000 |
|  | Light bar monitor + footrest | Rp 400.000 |
|  | UPS line-interactive 1.200 VA merek lokal (ganti stabilizer) + stopkontak pelindung surja | Rp 1.500.000 |
|  | Sirkuit zona kerja dipindah ke meter token (kabel 2,5 mm² ±20 m, MCB + RCBO, label sirkuit) | Rp 800.000 |
|  | 1 node mesh tambahan + kabel LAN Cat6 20 m + trunking (pasang sendiri) | Rp 1.100.000 |
|  | Lampu LED panel kecil untuk video call | Rp 250.000 |
|  | 2–4 panel akustik buatan sendiri + seal pintu + penutup roster | Rp 550.000 |
|  | Gorden blackout + vitrase 2 jendela + tirai pembatas zona tidur | Rp 900.000 |
| | **Subtotal** | **Rp 33.735.000** |
| | Cadangan tak terduga 10% | Rp 3.350.000 |
| | **TOTAL** | **Rp 37.085.000** |

### Tingkat menengah

| Kelompok | Pekerjaan / barang | Kisaran biaya |
|---|---|---:|
| A. Perbaikan bangunan & keselamatan | Ganti penutup atap ruang belakang 16 m² (spandek pasir + flashing + talang) @ Rp 230 rb/m² | Rp 3.700.000 |
|  | Plafon PVC ruang belakang 15 m² @ Rp 190 rb/m² terpasang | Rp 2.850.000 |
|  | Penanganan lembap dinding ±45 m² (kerok plester lapuk, waterproofing semen 2 lapis, plester + acian ulang) @ Rp 110 rb/m² | Rp 4.950.000 |
|  | Perbaikan plafon bernoda (ruang tengah, teras, dapur) + tambal retak | Rp 1.000.000 |
|  | Listrik: 10 titik stopkontak @ Rp 200 rb, grup MCB dapur, RCBO, trunking kabel | Rp 3.200.000 |
|  | Ventilasi: cooker hood slim 60 cm + ducting, exhaust plafon kamar belakang + ducting ke atap, exhaust dinding ruang belakang | Rp 2.950.000 |
|  | Label semua sirkuit, pemisahan tegas dua meter, cek grounding | Rp 500.000 |
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
|  | Lemari pintu geser 180 cm sampai plafon, dibagi dua, satu pintu cermin | Rp 5.200.000 |
|  | Meja rias 90 cm berlaci + cermin berlampu CRI 90 + stool empuk | Rp 2.800.000 |
|  | 2 ambalan tipis latar video call + 2 lampu baca dinding + karpet lembut | Rp 1.150.000 |
| E. Furnitur — ruang tamu | Sofa 3 dudukan kain (lebar 180 cm) | Rp 4.500.000 |
|  | Rak TV gantung 150 cm + meja samping + bangku simpan 120 cm (TV 32" lama dipakai) | Rp 2.500.000 |
|  | 12 bingkai galeri seragam + cetak ulang foto | Rp 900.000 |
| E. Furnitur — ruang tengah | Lemari serbaguna/pantry kering 150 cm pintu geser | Rp 3.000.000 |
|  | Bantalan bangku ukir + cermin dinding | Rp 850.000 |
| E. Furnitur — kamar belakang | Lemari pintu geser 180 cm (ganti 2 lemari lama) | Rp 4.000.000 |
|  | Meja rias 80 cm + cermin + stool | Rp 1.300.000 |
|  | Seprai/bed cover polos + rel gantungan tas | Rp 600.000 |
| E. Furnitur — dapur | Lapis ulang top meja dapur 4 m lari (granit tile 60×60, dinaikkan ke 86 cm) + backsplash keramik putih 6 m² + upah | Rp 3.800.000 |
|  | Pintu kolong aluminium/ACP 4 m lari @ Rp 450 rb | Rp 1.800.000 |
|  | Kabinet atas 1 m + rak piring gantung stainless 90 cm + rel panci + ambalan 15 cm | Rp 2.300.000 |
|  | Sistem sampah: 2 tong injak 25 L + tong beroda 80 L di carport | Rp 650.000 |
|  | Ergonomi dan keselamatan dapur: rak bumbu, rel pisau/alat, meja lipat dinding, keset anti-lelah, detektor gas, APAR 1 kg | Rp 1.250.000 |
|  | Pindah kulkas (stopkontak sudah di pos listrik) + selang/regulator LPG baru | Rp 250.000 |
| E. Furnitur — ruang belakang | Meja makan 120×70 + 2 kursi | Rp 2.800.000 |
|  | Bangku banquette simpan 140 cm (tukang kayu) | Rp 1.800.000 |
|  | Lemari sepatu 120 cm + lemari utilitas tinggi | Rp 2.500.000 |
|  | Lemari serbaguna/laundry 160 cm pintu geser | Rp 2.800.000 |
|  | Rak galon + bantalan bangku sepatu | Rp 400.000 |
| E. Furnitur — kamar mandi | Exhaust fan plafon, rak sudut + gantungan handuk, nat/silikon ulang (kamar mandi ±5,6 m²) | Rp 900.000 |
| F. Dekor | Gorden linen + vitrase 4 bukaan ruang lain | Rp 1.400.000 |
|  | 6 tanaman + pot | Rp 900.000 |
|  | Bantal sofa, keranjang rotan, tong sampah kecil tiap ruang | Rp 900.000 |
| R. Paket kerja remote | Meja sit-stand elektrik 140×70 dengan memori ketinggian | Rp 4.800.000 |
|  | Lengan monitor gas spring untuk ultrawide | Rp 700.000 |
|  | Laptop stand + desk mat | Rp 350.000 |
|  | Light bar monitor + lampu meja 4000K CRI 90 | Rp 800.000 |
|  | Footrest + karpet bulu pendek 120×170 | Rp 850.000 |
|  | UPS line-interactive 1.200–1.500 VA bermerek (ganti stabilizer) | Rp 2.300.000 |
|  | Sirkuit zona kerja + meja rias dari meter token (kabel 2,5 mm², MCB + RCBO), 3 stopkontak pelindung surja, cable tray, laci kabel | Rp 1.500.000 |
|  | Tambah daya meter token 1.300 → 2.200 VA (biaya penyambungan PLN ±Rp 843 rb + SLO/pemeriksaan) | Rp 1.100.000 |
|  | Pra-kabel fase 2 di ruang tamu: outlet LAN + stopkontak ganda dari meter token | Rp 350.000 |
|  | Mesh Wi-Fi 6 2 node + kabel LAN Cat6 ±25 m, trunking, 2 outlet RJ45, pasang | Rp 2.700.000 |
|  | Internet cadangan: modem 4G/5G + router dual-WAN failover (perangkat saja) | Rp 1.600.000 |
|  | Key light panel LED lembut + jepit meja | Rp 600.000 |
|  | Akustik: 4 panel PET + seal pintu + penutup roster akrilik | Rp 1.450.000 |
|  | Gorden blackout + vitrase 2 jendela (rel ganda) + tirai pembatas rel plafon | Rp 2.100.000 |
|  | Pegboard perangkat + pasang ulang papan tulis | Rp 250.000 |
|  | Servis + cuci AC, stopkontak + lampu dinding pojok kerja cadangan | Rp 550.000 |
| | **Subtotal** | **Rp 122.810.000** |
| | Cadangan tak terduga 10% | Rp 12.300.000 |
| | **TOTAL** | **Rp 135.110.000** |

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
|  | Lemari custom HPL 1,8 m sampai plafon, dibagi dua, pintu geser cermin | Rp 6.500.000 |
|  | Meja rias custom 100 cm berlaci + cermin berlampu + stool | Rp 4.500.000 |
|  | Lampu baca dinding ×2, ambalan latar, karpet lembut | Rp 1.500.000 |
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
|  | Ergonomi dan keselamatan dapur: rak bumbu tarik, rel alat, meja lipat, detektor gas, APAR | Rp 2.500.000 |
| E. Furnitur — ruang belakang | Meja makan kayu solid + 2 kursi + banquette berlapis | Rp 7.500.000 |
|  | Zona masuk built-in 3 m lari (lemari sepatu + bangku + lemari utilitas) | Rp 7.800.000 |
|  | Lemari laundry 1,6 m | Rp 4.200.000 |
|  | Dispenser galon bawah | Rp 2.200.000 |
| E. Furnitur — kamar mandi | Waterproofing ulang lantai ±5,6 m² + kaki dinding, exhaust, aksesori | Rp 5.500.000 |
| E. Furnitur — teras | Refinishing set jati + bantal outdoor + lampu dinding | Rp 2.100.000 |
| F. Dekor | Gorden custom + vitrase ruang lain | Rp 4.000.000 |
|  | Tanaman, pot, aksesori | Rp 3.500.000 |
| R. Paket kerja remote | Meja sit-stand motor ganda 140×70, top kayu solid | Rp 9.000.000 |
|  | Lengan monitor kelas atas | Rp 3.000.000 |
|  | Light bar kelas atas + lampu meja | Rp 2.600.000 |
|  | Footrest, alas kursi, karpet wool | Rp 1.800.000 |
|  | UPS line-interactive 1.500 VA gelombang sinus | Rp 5.500.000 |
|  | Stopkontak pelindung surja + cable management lengkap | Rp 1.200.000 |
|  | Tambah daya meter token 1.300 → 2.200 VA (biaya penyambungan PLN ±Rp 843 rb + SLO/pemeriksaan) | Rp 1.100.000 |
|  | Pra-kabel fase 2 di ruang tamu: outlet LAN + 2 stopkontak dari meter token | Rp 500.000 |
|  | Mesh 3 node (Wi-Fi 6E/7) + backhaul kabel + switch 8 port + instalasi rapi | Rp 6.500.000 |
|  | Internet cadangan: pemasangan ISP kedua + router dual-WAN | Rp 2.500.000 |
|  | Video call: key light + fill light, webcam 4K, mikrofon USB | Rp 5.000.000 |
|  | Akustik: 6 panel PET + pintu kamar solid berseal + penutup roster | Rp 4.500.000 |
|  | Gorden blackout custom + vitrase + tirai pembatas akustik | Rp 4.500.000 |
|  | AC ¾ PK inverter baru (bila unit lama kurang/boros) | Rp 5.500.000 |
|  | Pegboard, papan tulis kaca, ambalan custom, pojok kerja cadangan | Rp 2.500.000 |
| | **Subtotal** | **Rp 286.250.000** |
| | Cadangan tak terduga 10% | Rp 28.600.000 |
| | **TOTAL** | **Rp 314.850.000** |

---

## 8. Tahapan kerja (8 minggu, tingkat menengah)

DIY = dikerjakan sendiri. Tukang = perlu tukang/teknisi.

| Minggu | Pekerjaan | Siapa |
|---|---|---|
| 0 | Ukur 7 ukuran kunci. Saat hujan, catat titik tetes di ruang belakang dan ruang tengah. Minta 2 penawaran tukang atap dan tukang listrik. | DIY |
| 0 | **Kerja remote:** beli UPS, mesh, lengan monitor, light bar, dan langsung pakai di meja lama. Ajukan tambah daya meter token ke 2.200 VA lewat PLN Mobile. Tempel aturan beban di dapur dan matikan saklar panas dispenser. | DIY |
| 0 | Pilah barang tahap 1: tiga tumpukan (simpan, donasi/jual, buang). Mulai dari kamar depan, atas lemari, dapur, ruang belakang. Kasur cadangan, lemari pajangan kaca, meja bundar, lemari kaca dapur, kardus, koran keluar. | DIY |
| 1 | **Listrik (zona kerja dulu):** sirkuit zona kerja dan meja rias ditarik dari meter token, RCBO, stopkontak meja, kabel LAN + trunking, titik pra-kabel fase 2 di ruang tamu, label semua sirkuit; lalu titik stopkontak ruang lain di meter 900 VA. Harus selesai sebelum plester dan cat. | Tukang listrik |
| 1 | Atap ruang belakang: ganti penutup, flashing, talang. Uji siram. Bongkar plafon lama. Cek sumber rembesan plafon ruang tengah dan teras. | Tukang |
| 2 | Dinding lembap, **kamar depan paling dulu**, lalu ruang lain: kerok cat dan plester lapuk sampai ±1,2 m, waterproofing semen 2 lapis, plester + acian ulang. Bersihkan saluran air di sekeliling rumah. Selama kamar depan dikerjakan, bekerja dari ruang tamu atau ruang belakang. | Tukang |
| 2 | Pasang plafon baru ruang belakang. Pasang exhaust kamar belakang, cooker hood, exhaust ruang belakang dan kamar mandi. | Tukang |
| 3 | Masa kering plester (minimal 14 hari, jendela dan kipas dibuka). Sementara itu: cuci jamur, tambal retak, amplas, cat semua plafon. | DIY + tukang |
| 3 | Dapur: lapis ulang top (tinggi 86 cm), backsplash, pintu kolong, kabinet atas, LED strip, rak bumbu, rel alat, meja lipat, detektor gas. | Tukang |
| 4 | **Kamar depan selesai:** sealer + cat, tutup roster, SPC, meja sit-stand, lengan monitor, UPS di kolong, cable tray, panel akustik, gorden, tirai pembatas, seal pintu; lalu tempat tidur, meja rias + cermin berlampu, lemari. Zona kerja dan kamar siap pakai. | Tukang + DIY |
| 5 | Cat ruang lain: sealer 1 lapis + cat 2 lapis. Cat kusen, pintu, lis. Urutan: kamar belakang → dapur → ruang tengah → ruang tamu → ruang belakang. Pasang lampu baru. | Tukang (hemat: DIY) |
| 6 | Masuk furnitur besar: tempat tidur, lemari, sofa, lemari serbaguna, banquette, lemari sepatu. Pindah kulkas ke dapur, dispenser ke ruang belakang, TV ke ruang tamu. Pasang mesh node 2 di ruang tengah dan stopkontak pojok kerja cadangan. | Tukang + DIY |
| 7 | Isi lemari dengan aturan satu barang satu tempat. Sistem sampah baru mulai jalan. | DIY |
| 8 | Galeri foto, gorden ruang lain, karpet, tanaman, bantalan. Periksa ulang: tidak ada barang di lantai selain furnitur. | DIY |

Aturan urutan tiap ruang: atap → listrik → plester → kering → cat → lantai → furnitur → dekor. Jangan dibalik. Kamar depan menjalani urutan itu lebih dulu daripada ruang lain.

---

## 9. Keputusan terbuka

| # | Pertanyaan | Jawaban bawaan (dipakai di Draft v3) |
|---|---|---|
| 1 | Tagihan meter 900 VA berkode tarif R1 (bersubsidi) atau R1M? AC berapa PK dan pompa berapa watt (lihat label)? | Meter 900 VA tidak disentuh. AC dianggap ½ PK, pompa 125–250 W. Jika AC ternyata ¾ PK, sisa daya meter token tinggal ±100 W dan naik daya menjadi sangat dianjurkan. |
| 2 | Setuju meja kerja istri (fase 2) di ruang tamu sisi kiri-depan? | Ya; kabelnya dipasang sekarang. Alternatif yang saya tolak: ruang belakang. |
| 3 | Berapa lebar bersih kamar depan dan lebar lorong dapur? | 2,15 m dan 1,65 m. Di bawah 2,10 m kamar depan memakai susunan cadangan; di bawah 1,50 m kulkas tetap di ruang tengah. |
| 4 | Komputer kerja laptop saja atau ada PC desktop? Kabel ISP/ONT masuk di mana? | Laptop + monitor, ONT di kamar depan, UPS 1.200 VA. Dengan PC desktop: UPS 1.500 VA. |
| 5 | Dinding kiri kamar depan dan kamar belakang itu dinding luar, atau menempel rumah tetangga? | Dianggap menempel tetangga: kamar belakang pakai exhaust plafon ber-ducting. Jika dinding luar, tambah jalusi 40×60 cm. |
| 6 | Mesin cuci ada di mana, dan jemur di mana? | Mesin cuci di pojok kanan-belakang ruang belakang (bersebelahan dinding kamar mandi); jemur di carport dengan jemuran lipat dinding. |
| 7 | Di kamar mandi, kloset, shower, dan bak ada di sebelah mana? | Shower di tengah dinding belakang, kloset di ujung kanan. Mohon satu foto dari dalam. |
| 8 | Ubin hijau dipertahankan, TV ke ruang tamu, kulkas ke dapur, anggaran menengah bertahap, rumah milik sendiri? | Ya untuk semuanya (belum dijawab di putaran sebelumnya). |

---

## 10. SCENE_SPEC

Catatan untuk pembuat model 3D:

- `x`, `y` furnitur = **titik tengah** tapak, koordinat absolut dalam meter.
- `w_cm` = ukuran searah sumbu x, `d_cm` = ukuran searah sumbu y, **sudah dalam posisi akhir**. Jangan diputar lagi dengan `rotation_deg`.
- `rotation_deg` hanya arah hadap muka benda: 0 = +y (belakang), 90 = +x (kanan), 180 = −y (jalan), 270 = −x (kiri).
- `kind` (hanya pada benda baru zona kerja) = jenis untuk renderer: `desk_standing`, `monitor_arm`, `light_bar`, `ups`, `mesh_node`, `acoustic_panel`, `pegboard`, `curtain`, `whiteboard`, `key_light`, `footrest`.
- `kind` baru di v3: `vanity_table` (meja rias berlaci; cermin berlampunya benda dinding terpisah).
- `phase: 2` = benda opsional fase 2 (meja kerja istri di ruang tamu). Benda tanpa `phase` adalah fase 1. Kursi fase 2 bertanda `movable`. Validasi dijalankan untuk fase 1 saja dan untuk fase 1 + 2.
- `under_furniture` = benda di kolong meja (footrest, UPS, stool rias yang disimpan); bukan penghalang lantai.
- `z_m` = tinggi sisi bawah dari lantai. Benda dengan `wall_mounted`, `rug`, atau `on_furniture` bukan penghalang lantai.
- Garis ruang = as dinding, tebal dinding 0,15 m (`wall_thickness_m`). Muka dalam dinding ada 0,075 m di dalam garis ruang; semua furnitur sudah ditempatkan terhadap muka dalam, jadi dinding harus digambar **berpusat di garis ruang**.
- Isi: 102 furnitur, 16 bukaan. Sudah divalidasi dengan skrip (ruang tidak tumpang, furnitur di dalam muka dalam dinding, bukaan di dinding bersama yang benar, pintu bebas 85 cm, rute ≥ 80 cm diukur dari muka dalam dinding).

### SCENE_SPEC

```json
{
 "name": "SCENE_SPEC",
 "version": "redesign draft v3 (kamar bersama, dapur untuk memasak, listrik dua meter, fase 2)",
 "units": "meter untuk x,y,w,d,offset,width,height; cm untuk w_cm,d_cm,h_cm",
 "conventions": {
  "origin": "sudut kiri-depan rumah pada dinding yang menghadap jalan",
  "x": "ke kanan sepanjang fasad",
  "y": "masuk ke dalam rumah (menjauhi jalan)",
  "rooms": "x,y = sudut kiri-depan ruang; w = lebar searah x; d = kedalaman searah y; garis ruang = AS dinding (tebal dinding 0.15 m, 0.075 m ke tiap sisi); teras dan carport tidak berdinding di sisi open_sides",
  "openings": "front = sisi y minimum (arah jalan), back = y maksimum, left = x minimum, right = x maksimum; offset_m dari sudut x-minimum (front/back) atau y-minimum (left/right) ruang ke tepi awal bukaan; sill_m = tinggi ambang dari lantai; tiap bukaan ditulis SATU kali, ruang seberangnya ada di connects_to",
  "furniture": "x,y = TITIK TENGAH tapak (absolut); w_cm = ukuran searah sumbu x, d_cm = ukuran searah sumbu y, SUDAH dalam posisi akhir (kotak sejajar sumbu - JANGAN diputar lagi); rotation_deg HANYA arah hadap muka benda: 0 = menghadap +y (ke belakang rumah), 90 = +x (kanan), 180 = -y (ke jalan), 270 = -x (kiri); z_m = tinggi sisi bawah dari lantai (default 0); wall_mounted/rug/on_furniture/under_furniture (di kolong meja) = bukan penghalang lantai; kind (opsional) = jenis benda untuk renderer; phase = 2 berarti benda opsional fase 2 (istri WFH) - render dengan dan tanpa; benda tanpa phase = fase 1",
  "wall_thickness_m": 0.15,
  "wall_note": "muka dalam dinding = 0.075 m di dalam garis ruang; semua furnitur sudah ditempatkan terhadap muka dalam (benda dinding menempel tepat di muka dalam)",
  "total_footprint_m": {
   "w": 8.15,
   "d": 11.8
  },
  "unknown_area": "sisa x 7.8-8.15, y 10.0-11.8 (0.35 m di kanan kamar mandi) tidak dimodelkan sebagai ruang"
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
    "wall": "right",
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
   "w": 3.1,
   "d": 1.8,
   "floor_material": "keramik_hijau_muda_kamar_mandi_existing",
   "wall_color_hex": "#FFFFFF",
   "ceiling_h_m": 2.6,
   "enclosed": true,
   "confidence": "sedang-rendah (panjang menurut keterangan pemilik: hampir sepanjang ruang belakang; tata letak dalam hanya terlihat dari pintu)"
  },
  {
   "id": "ruang_belakang",
   "name": "Ruang Belakang (makan + tempat sepatu + utilitas)",
   "x": 5.0,
   "y": 5.0,
   "w": 3.15,
   "d": 5.0,
   "floor_material": "keramik_coklat_40x40_existing",
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
   "connects_to": "kamar_mandi",
   "note": "3 glass block tinggi (digambar sebagai satu pita); dengan kamar mandi sepanjang ini, glass block menghadap kamar mandi (meminjam cahaya, bukan ventilasi)"
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
   "y": 4.2,
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
   "y": 4.2,
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
   "name": "Titik pra-kabel fase 2: outlet LAN + stopkontak ganda (sirkuit meter token)",
   "x": 2.39,
   "y": 2.75,
   "w_cm": 3,
   "d_cm": 25,
   "h_cm": 12,
   "rotation_deg": 90,
   "color_hex": "#F2F2F2",
   "z_m": 0.9,
   "wall_mounted": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "FASE 2 - Meja kerja istri 120x50 (sit-stand atau tetap)",
   "x": 2.625,
   "y": 2.75,
   "w_cm": 50,
   "d_cm": 120,
   "h_cm": 74,
   "rotation_deg": 90,
   "color_hex": "#D8B98A",
   "kind": "desk_standing",
   "phase": 2
  },
  {
   "room_id": "ruang_tamu",
   "name": "FASE 2 - Kursi kerja",
   "x": 3.14,
   "y": 2.75,
   "w_cm": 52,
   "d_cm": 55,
   "h_cm": 110,
   "rotation_deg": 270,
   "color_hex": "#8E9093",
   "phase": 2,
   "movable": true
  },
  {
   "room_id": "ruang_tamu",
   "name": "FASE 2 - Monitor di lengan monitor",
   "x": 2.5,
   "y": 2.75,
   "w_cm": 18,
   "d_cm": 60,
   "h_cm": 38,
   "rotation_deg": 90,
   "color_hex": "#1A1A1A",
   "z_m": 0.95,
   "on_furniture": true,
   "kind": "monitor_arm",
   "phase": 2
  },
  {
   "room_id": "ruang_tamu",
   "name": "FASE 2 - Lampu meja / key light",
   "x": 2.47,
   "y": 2.25,
   "w_cm": 8,
   "d_cm": 20,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#F2F2F2",
   "z_m": 0.74,
   "on_furniture": true,
   "kind": "key_light",
   "phase": 2
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
   "name": "Mesh node 2 di rak dinding (tengah rumah)",
   "x": 4.87,
   "y": 7.3,
   "w_cm": 10,
   "d_cm": 25,
   "h_cm": 20,
   "rotation_deg": 270,
   "color_hex": "#F2F2F2",
   "z_m": 2.0,
   "wall_mounted": true,
   "kind": "mesh_node"
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
   "name": "Tempat tidur 160x200 berlaci, sandaran kepala berambalan (kepala di dinding kiri)",
   "x": 1.15,
   "y": 0.9,
   "w_cm": 200,
   "d_cm": 160,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#D8B98A"
  },
  {
   "room_id": "kamar_depan",
   "name": "Lampu baca dinding sisi jendela",
   "x": 0.115,
   "y": 0.45,
   "w_cm": 8,
   "d_cm": 12,
   "h_cm": 15,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 1.1,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Lampu baca dinding sisi ruangan",
   "x": 0.115,
   "y": 1.35,
   "w_cm": 8,
   "d_cm": 12,
   "h_cm": 15,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 1.1,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Gorden blackout + vitrase jendela depan (rel ganda)",
   "x": 1.15,
   "y": 0.11,
   "w_cm": 150,
   "d_cm": 7,
   "h_cm": 220,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB",
   "z_m": 0.1,
   "wall_mounted": true,
   "kind": "curtain"
  },
  {
   "room_id": "kamar_depan",
   "name": "Gorden blackout + vitrase jendela ke teras (rel ganda)",
   "x": 2.185,
   "y": 0.9,
   "w_cm": 7,
   "d_cm": 120,
   "h_cm": 220,
   "rotation_deg": 270,
   "color_hex": "#E6DCCB",
   "z_m": 0.1,
   "wall_mounted": true,
   "kind": "curtain"
  },
  {
   "room_id": "kamar_depan",
   "name": "Meja rias 90 cm berlaci + organizer",
   "x": 2.0,
   "y": 2.2,
   "w_cm": 45,
   "d_cm": 90,
   "h_cm": 76,
   "rotation_deg": 270,
   "color_hex": "#D8B98A",
   "kind": "vanity_table"
  },
  {
   "room_id": "kamar_depan",
   "name": "Cermin rias berlampu depan 4000K CRI 90",
   "x": 2.205,
   "y": 2.2,
   "w_cm": 4,
   "d_cm": 70,
   "h_cm": 80,
   "rotation_deg": 270,
   "color_hex": "#DDE3E3",
   "z_m": 0.95,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Stool rias empuk D35 (digambar masuk kolong meja rias; saat dipakai di x 1.43-1.78)",
   "x": 1.85,
   "y": 2.2,
   "w_cm": 35,
   "d_cm": 35,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#D9B9A8",
   "under_furniture": true,
   "in_use_x": 1.6
  },
  {
   "room_id": "kamar_depan",
   "name": "Karpet lembut 125x85 (zona tidur + rias)",
   "x": 0.72,
   "y": 2.2,
   "w_cm": 125,
   "d_cm": 85,
   "h_cm": 2,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB",
   "rug": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Tirai pembatas zona tidur/rias (rel gantung, bagian atas terbuka 40 cm)",
   "x": 1.15,
   "y": 2.685,
   "w_cm": 215,
   "d_cm": 3,
   "h_cm": 210,
   "rotation_deg": 0,
   "color_hex": "#B9B2A6",
   "z_m": 0.1,
   "wall_mounted": true,
   "kind": "curtain"
  },
  {
   "room_id": "kamar_depan",
   "name": "Meja sit-stand elektrik 140x70",
   "x": 0.445,
   "y": 3.4,
   "w_cm": 70,
   "d_cm": 140,
   "h_cm": 74,
   "rotation_deg": 90,
   "color_hex": "#D8B98A",
   "kind": "desk_standing",
   "height_range_cm": [
    72,
    118
   ]
  },
  {
   "room_id": "kamar_depan",
   "name": "Kursi kerja ergonomis",
   "x": 1.075,
   "y": 3.65,
   "w_cm": 55,
   "d_cm": 55,
   "h_cm": 120,
   "rotation_deg": 270,
   "color_hex": "#8E9093",
   "existing": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Lengan monitor (gas spring, jepit meja)",
   "x": 0.17,
   "y": 3.65,
   "w_cm": 12,
   "d_cm": 12,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 0.74,
   "on_furniture": true,
   "kind": "monitor_arm"
  },
  {
   "room_id": "kamar_depan",
   "name": "Monitor ultrawide di lengan monitor",
   "x": 0.3,
   "y": 3.65,
   "w_cm": 20,
   "d_cm": 82,
   "h_cm": 38,
   "rotation_deg": 90,
   "color_hex": "#1A1A1A",
   "z_m": 0.95,
   "existing": true,
   "on_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Light bar monitor",
   "x": 0.32,
   "y": 3.65,
   "w_cm": 10,
   "d_cm": 50,
   "h_cm": 5,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 1.33,
   "on_furniture": true,
   "kind": "light_bar"
  },
  {
   "room_id": "kamar_depan",
   "name": "Laptop di laptop stand",
   "x": 0.48,
   "y": 2.9,
   "w_cm": 26,
   "d_cm": 34,
   "h_cm": 25,
   "rotation_deg": 90,
   "color_hex": "#B8BABD",
   "z_m": 0.74,
   "existing": true,
   "on_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Keyboard + mouse",
   "x": 0.62,
   "y": 3.65,
   "w_cm": 15,
   "d_cm": 60,
   "h_cm": 3,
   "rotation_deg": 90,
   "color_hex": "#2B2B2B",
   "z_m": 0.74,
   "on_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Key light panel LED lembut (jepit meja)",
   "x": 0.15,
   "y": 2.82,
   "w_cm": 8,
   "d_cm": 20,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#F2F2F2",
   "z_m": 0.74,
   "on_furniture": true,
   "kind": "key_light"
  },
  {
   "room_id": "kamar_depan",
   "name": "Lampu meja 4000K CRI 90",
   "x": 0.2,
   "y": 3.1,
   "w_cm": 15,
   "d_cm": 15,
   "h_cm": 45,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "z_m": 0.74,
   "on_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Footrest (di kolong meja)",
   "x": 0.55,
   "y": 3.65,
   "w_cm": 35,
   "d_cm": 45,
   "h_cm": 12,
   "rotation_deg": 90,
   "color_hex": "#3B3F3A",
   "kind": "footrest",
   "under_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "UPS line-interactive 1200 VA (di kolong meja)",
   "x": 0.25,
   "y": 3.0,
   "w_cm": 15,
   "d_cm": 40,
   "h_cm": 22,
   "rotation_deg": 90,
   "color_hex": "#1A1A1A",
   "kind": "ups",
   "under_furniture": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Pegboard perangkat (headset, kabel, charger)",
   "x": 0.09,
   "y": 2.92,
   "w_cm": 3,
   "d_cm": 40,
   "h_cm": 70,
   "rotation_deg": 90,
   "color_hex": "#F7F4EE",
   "z_m": 0.95,
   "wall_mounted": true,
   "kind": "pegboard"
  },
  {
   "room_id": "kamar_depan",
   "name": "Panel akustik dinding kiri 1 (di atas monitor)",
   "x": 0.09,
   "y": 3.25,
   "w_cm": 3,
   "d_cm": 55,
   "h_cm": 60,
   "rotation_deg": 90,
   "color_hex": "#E6DCCB",
   "z_m": 1.65,
   "wall_mounted": true,
   "kind": "acoustic_panel"
  },
  {
   "room_id": "kamar_depan",
   "name": "Panel akustik dinding kiri 2 (di atas monitor)",
   "x": 0.09,
   "y": 3.825,
   "w_cm": 3,
   "d_cm": 55,
   "h_cm": 60,
   "rotation_deg": 90,
   "color_hex": "#E6DCCB",
   "z_m": 1.65,
   "wall_mounted": true,
   "kind": "acoustic_panel"
  },
  {
   "room_id": "kamar_depan",
   "name": "Panel akustik dinding kanan 1 (latar video call)",
   "x": 2.21,
   "y": 3.35,
   "w_cm": 3,
   "d_cm": 60,
   "h_cm": 60,
   "rotation_deg": 270,
   "color_hex": "#E6DCCB",
   "z_m": 0.8,
   "wall_mounted": true,
   "kind": "acoustic_panel"
  },
  {
   "room_id": "kamar_depan",
   "name": "Panel akustik dinding kanan 2 (latar video call)",
   "x": 2.21,
   "y": 4.0,
   "w_cm": 3,
   "d_cm": 60,
   "h_cm": 60,
   "rotation_deg": 270,
   "color_hex": "#E6DCCB",
   "z_m": 0.8,
   "wall_mounted": true,
   "kind": "acoustic_panel"
  },
  {
   "room_id": "kamar_depan",
   "name": "2 ambalan tipis 10 cm: buku tampak muka + tanaman kecil (latar video call)",
   "x": 2.175,
   "y": 3.65,
   "w_cm": 10,
   "d_cm": 120,
   "h_cm": 4,
   "rotation_deg": 270,
   "color_hex": "#D8B98A",
   "z_m": 1.5,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Karpet bulu pendek 110x130 (peredam, roda kursi tetap jalan)",
   "x": 1.35,
   "y": 3.5,
   "w_cm": 110,
   "d_cm": 130,
   "h_cm": 1,
   "rotation_deg": 0,
   "color_hex": "#E6DCCB",
   "rug": true
  },
  {
   "room_id": "kamar_depan",
   "name": "Lemari pakaian pintu geser 180 cm sampai plafon (90 cm suami + 90 cm istri, satu pintu cermin)",
   "x": 0.395,
   "y": 5.025,
   "w_cm": 60,
   "d_cm": 180,
   "h_cm": 260,
   "rotation_deg": 90,
   "color_hex": "#F7F4EE"
  },
  {
   "room_id": "kamar_depan",
   "name": "Router utama / mesh node 1 di rak dinding",
   "x": 2.17,
   "y": 4.6,
   "w_cm": 10,
   "d_cm": 25,
   "h_cm": 20,
   "rotation_deg": 270,
   "color_hex": "#F2F2F2",
   "z_m": 1.9,
   "wall_mounted": true,
   "kind": "mesh_node"
  },
  {
   "room_id": "kamar_depan",
   "name": "Papan tulis rencana mingguan",
   "x": 1.07,
   "y": 5.91,
   "w_cm": 60,
   "d_cm": 3,
   "h_cm": 90,
   "rotation_deg": 180,
   "color_hex": "#F7F7F7",
   "z_m": 0.9,
   "existing": true,
   "wall_mounted": true,
   "kind": "whiteboard"
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
   "name": "Meja dapur sisi kiri (lama, dilapis ulang) - rice cooker + pendaratan belanja",
   "x": 0.375,
   "y": 10.6,
   "w_cm": 60,
   "d_cm": 105,
   "h_cm": 86,
   "rotation_deg": 90,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Meja sudut (landasan panci panas)",
   "x": 0.375,
   "y": 11.425,
   "w_cm": 60,
   "d_cm": 60,
   "h_cm": 86,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Dudukan rendah + kompor 2 tungku (tabung LPG di kolong, pintu berkisi)",
   "x": 1.125,
   "y": 11.425,
   "w_cm": 90,
   "d_cm": 60,
   "h_cm": 65,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Meja persiapan 100 cm (menerus antara kompor dan bak cuci)",
   "x": 2.075,
   "y": 11.425,
   "w_cm": 100,
   "d_cm": 60,
   "h_cm": 86,
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
   "h_cm": 86,
   "rotation_deg": 180,
   "color_hex": "#EDEAE3",
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Kulkas 2 pintu (dipindah dari ruang tengah, engsel kanan)",
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
   "x": 1.125,
   "y": 11.5,
   "w_cm": 60,
   "d_cm": 45,
   "h_cm": 15,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.45,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Rak bumbu + minyak (rel dinding, di samping kompor)",
   "x": 1.83,
   "y": 11.66,
   "w_cm": 45,
   "d_cm": 12,
   "h_cm": 30,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.1,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Rel magnet pisau + gantungan alat masak",
   "x": 2.35,
   "y": 11.69,
   "w_cm": 45,
   "d_cm": 6,
   "h_cm": 8,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.2,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Kabinet atas 100 cm (bawah 1,42 m)",
   "x": 2.075,
   "y": 11.555,
   "w_cm": 100,
   "d_cm": 34,
   "h_cm": 65,
   "rotation_deg": 180,
   "color_hex": "#F7F4EE",
   "z_m": 1.42,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "LED strip 4000K di bawah kabinet atas dan rak piring",
   "x": 2.55,
   "y": 11.42,
   "w_cm": 190,
   "d_cm": 3,
   "h_cm": 2,
   "rotation_deg": 180,
   "color_hex": "#FFF4D6",
   "z_m": 1.4,
   "wall_mounted": true
  },
  {
   "room_id": "dapur",
   "name": "Rak piring gantung stainless 90 cm (menetes ke bak)",
   "x": 3.025,
   "y": 11.585,
   "w_cm": 90,
   "d_cm": 28,
   "h_cm": 55,
   "rotation_deg": 180,
   "color_hex": "#B8BABD",
   "z_m": 1.42,
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
   "z_m": 1.45,
   "wall_mounted": true,
   "existing": true
  },
  {
   "room_id": "dapur",
   "name": "Rel gantung panci + ambalan 15 cm (dinding depan)",
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
   "room_id": "dapur",
   "name": "Meja lipat dinding 60x35 (terlipat; dibuka saat menata piring)",
   "x": 1.2,
   "y": 10.1,
   "w_cm": 60,
   "d_cm": 5,
   "h_cm": 35,
   "rotation_deg": 0,
   "color_hex": "#D8B98A",
   "z_m": 0.5,
   "wall_mounted": true,
   "unfolded_d_cm": 35
  },
  {
   "room_id": "dapur",
   "name": "Keset anti-lelah 120x45 di depan meja persiapan dan bak cuci",
   "x": 2.5,
   "y": 10.88,
   "w_cm": 120,
   "d_cm": 45,
   "h_cm": 2,
   "rotation_deg": 0,
   "color_hex": "#5E5E5E",
   "rug": true
  },
  {
   "room_id": "dapur",
   "name": "Detektor gas + APAR 1 kg (dinding dekat pintu)",
   "x": 2.33,
   "y": 10.09,
   "w_cm": 6,
   "d_cm": 3,
   "h_cm": 35,
   "rotation_deg": 0,
   "color_hex": "#B0302A",
   "z_m": 1.2,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_mandi",
   "name": "Kloset",
   "x": 7.35,
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
   "x": 6.0,
   "y": 11.25,
   "w_cm": 90,
   "d_cm": 90,
   "h_cm": 2,
   "rotation_deg": 180,
   "color_hex": "#DDE3E3",
   "rug": true,
   "existing": true,
   "low_confidence": true
  },
  {
   "room_id": "kamar_mandi",
   "name": "Exhaust fan plafon",
   "x": 6.6,
   "y": 10.9,
   "w_cm": 25,
   "d_cm": 25,
   "h_cm": 10,
   "rotation_deg": 0,
   "color_hex": "#FFFFFF",
   "z_m": 2.45,
   "wall_mounted": true
  },
  {
   "room_id": "kamar_mandi",
   "name": "Rak sudut + gantungan handuk",
   "x": 4.86,
   "y": 11.55,
   "w_cm": 15,
   "d_cm": 30,
   "h_cm": 60,
   "rotation_deg": 90,
   "color_hex": "#B8BABD",
   "z_m": 1.0,
   "wall_mounted": true
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
   "name": "Stopkontak + lampu dinding pojok kerja cadangan",
   "x": 8.04,
   "y": 7.7,
   "w_cm": 6,
   "d_cm": 20,
   "h_cm": 25,
   "rotation_deg": 270,
   "color_hex": "#3B3F3A",
   "z_m": 1.1,
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
