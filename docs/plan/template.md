# Rencana Penataan Rumah Blok DD-30 — Draft v3

Disusun dari 26 foto (16 foto awal + 10 foto tambahan dapur, kamar belakang, dan sisi rumah) dan koreksi pemilik (panjang kamar mandi, warna keramik tiap ruang). Semua ukuran adalah **perkiraan dari foto**, belum diukur dengan meteran. Semua harga adalah **kisaran** tahun 2026 dengan asumsi tarif kota di Jawa di luar Jakarta (asumsi saya; sesuaikan dengan kota Anda dan cek ulang di toko).

## Ringkasan

**Draft v3.** Perubahan dari v2: kamar depan dirancang sebagai kamar bersama suami-istri (zona tidur + rias untuknya, zona kerja untuknya), dapur ditata menurut alur memasak, ada strategi listrik untuk dua meter (bagian 6), dan ada tempat kerja fase 2 untuk istri yang sudah disiapkan kabelnya.

1. **Listrik adalah risiko terbesar bagi penghasilan.** Zona kerja sekarang menumpang di meter 900 VA bersama rice cooker, setrika, dan kulkas. Keputusan: pindahkan sirkuit zona kerja ke meter token, naikkan meter token dari 1.300 ke 2.200 VA (biaya PLN ±Rp 0,85 juta, tarif per kWh tetap), biarkan meter 900 apa adanya, dan pakai aturan beban sederhana. Kedua meter tidak digabung.
2. **Kamar depan dibalik susunannya:** tempat tidur 160×200 dan meja rias 90 cm berlampu ada di ujung depan dekat jendela, di balik tirai; meja sit-stand 140×70 pindah ke dinding kiri; dinding kanan menjadi latar video call; lemari 180 cm sampai plafon dibagi dua.
3. **Dapur enak untuk memasak:** satu sisi kerja dengan urutan kulkas → bak cuci → meja persiapan 100 cm → kompor, tinggi meja 86 cm, lampu di bawah kabinet, cooker hood, rak bumbu dan rel pisau di samping kompor, meja lipat dinding, tong sampah bertutup, detektor gas.
4. **Fase 2 (istri bekerja dari rumah):** mejanya di ruang tamu sisi kiri-depan, di balik dinding kamar depan. Outlet LAN dan stopkontak dari meter token dipasang sekarang, mejanya dibeli nanti.
5. **Perbaiki bangunan dulu, baru dekorasi:** atap ruang belakang bocor, dinding bawah lembap, kamar belakang dan dapur tanpa ventilasi. Konsep Tropis Hangat dan keputusan ubin hijau tidak berubah.
6. **Anggaran:** hemat {{T_HEMAT}}, menengah {{T_MENENGAH}}, premium {{T_PREMIUM}} (termasuk cadangan 10%). Rekomendasi: **menengah, bertahap** selama 6–12 bulan, dimulai dari paket kerja remote + listrik ({{R_MENENGAH}}), lalu perbaikan + cat ({{AB_MENENGAH}}), lalu furnitur ruang demi ruang.

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

{{ROOMS}}

Kamar mandi digambar x 4,7–7,8 mengikuti keterangan pemilik (memanjang di belakang, hampir sepanjang ruang belakang tetapi sedikit lebih pendek). Sisa 0,35 m di kanannya (x 7,8–8,15 ; y 10,0–11,8) tidak dimodelkan sebagai ruang.

Lantai menurut pemilik: semua ruang memakai ubin hijau motif yang sama, kecuali ruang belakang (keramik cokelat 40×40) dan kamar mandi (keramik hijau lebih muda). Carport memakai keramik batu abu.

### Pintu dan jendela

Offset diukur dari sudut x-terkecil (dinding depan/belakang) atau y-terkecil (dinding kiri/kanan) ruang tersebut. Tiap bukaan ditulis satu kali.

{{OPENINGS}}

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

{{F_TERAS}}

- **Dinding:** `#EFE8DA`; lis putih. Kotak kWh dan kabel AC dirapikan dalam duct putih.
- **Lampu:** 1 lampu plafon 3000K + 1 lampu dinding di samping pintu.
- **Simpan:** tidak ada sepatu di teras. Sepatu masuk lewat pintu carport ke ruang belakang.

### 4.2 Ruang tamu

Ruang terima tamu sekaligus ruang keluarga. Sisi kiri (x 2,7–3,5) adalah jalur lurus dari pintu utama ke ruang tengah, jadi semua furnitur menempel dinding kanan dan dinding belakang. Tengah ruang sengaja kosong: karpet 150×220 cukup untuk lesehan atau salat 2–3 orang (cek arah kiblat dengan kompas; karpet bisa diputar).

{{F_TAMU}}

- **Dinding:** `#F3EDE1`; dinding belakang `#8A9A7B` sebagai latar kaligrafi berbingkai emas.
- **Galeri foto:** semua foto keluarga dikumpulkan di dinding kanan di atas sofa, 9 bingkai seragam warna arang, susunan 3×3, jarak antar bingkai 5 cm, garis tengah di ketinggian 150 cm. Foto lama dicetak ulang seukuran. Kaligrafi tetap sendirian di dinding belakang.
- **TV:** TV 32" dari kamar depan dipindah ke sini (dinding kiri bagian belakang, tengah layar ±1,25 m dari lantai). Jarak tonton ±2 m cocok untuk 32–43".
- **Fase 2, meja kerja istri:** dinding kiri bagian depan (y 2,15–3,35) sengaja dikosongkan. Sekarang hanya dipasang outlet LAN + stopkontak ganda dari sirkuit meter token. Nanti masuk meja 120×50 dan kursi (ditandai `phase: 2` di SCENE_SPEC). Cahaya jendela datang dari sisi kiri badan, latarnya dinding galeri foto, dan dinding bata memisahkan suaranya dari panggilan suami. Saat ia bekerja, daun kiri pintu utama ditutup dan orang masuk lewat daun kanan; jalur ke ruang tengah tetap ≥ 80 cm.
- **Lampu:** 2 lampu plafon 3000K, lampu lantai di pojok kanan-belakang, LED strip di bawah rak TV.
- **Simpan:** rak TV gantung (remote, charger, dokumen), bangku simpan di bawah kaligrafi (sajadah, mukena, bantal lantai). Rak dan bangku digantung/berkaki agar dinding lembap tetap bisa bernapas.
- **Versi hemat:** tanpa sofa. Karpet + 4 bantal lantai + meja lipat rendah.

### 4.3 Ruang tengah

Ruang ini adalah persimpangan empat pintu. Tugasnya: tetap kosong. Sisi kiri (x 2,3–3,3) adalah jalur ruang tamu → dapur. Kasur cadangan dikeluarkan (jual, atau ganti kasur lipat yang masuk lemari). **Kulkas pindah ke dapur. Dispenser pindah ke ruang belakang.**

{{F_TENGAH}}

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

{{F_KDEPAN}}

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

{{F_KBELAKANG}}

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

{{F_DAPUR}}

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

{{F_KM}}

- Zona kering di dekat pintu, shower di tengah, kloset di ujung kanan.
- Pasang exhaust fan plafon (ruang ini tidak punya jendela ke luar; glass block ke ruang belakang hanya meneruskan cahaya), nat dan silikon ulang, rak sudut dan gantungan handuk.
- Cek apakah air merembes ke dinding ruang belakang atau dapur di sebelahnya. Jika ya, waterproofing lantai ulang masuk daftar perbaikan.

### 4.8 Ruang belakang (makan + tempat sepatu + utilitas)

Ruang 3,15 × 5,0 m (bersih ±3,0 × 4,85 m) ini adalah pintu masuk sehari-hari keluarga (dari carport). Dibagi tiga zona dari depan ke belakang dengan jalur jalan lurus selebar ±0,95 m di sisi kiri.

{{F_BELAKANG}}

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

{{F_CARPORT}}

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
| A. Perbaikan bangunan & keselamatan | {{A_HEMAT}} | {{A_MENENGAH}} | {{A_PREMIUM}} |
| B. Cat | {{B_HEMAT_SUB}} | {{B_MENENGAH_SUB}} | {{B_PREMIUM_SUB}} |
| C + D + F. Lantai, lampu, dekor | {{CDF_HEMAT}} | {{CDF_MENENGAH}} | {{CDF_PREMIUM}} |
| E. Furnitur & penyimpanan | {{E_HEMAT}} | {{E_MENENGAH}} | {{E_PREMIUM}} |
| R. Paket kerja remote | {{R_HEMAT}} | {{R_MENENGAH}} | {{R_PREMIUM}} |
| Cadangan 10% | {{CAD_HEMAT}} | {{CAD_MENENGAH}} | {{CAD_PREMIUM}} |
| **Total** | **{{T_HEMAT}}** | **{{T_MENENGAH}}** | **{{T_PREMIUM}}** |

Cara memilih:

- **Hemat:** bocor ditambal, lembap ditangani di titik terparah, cat sendiri, furnitur lama dipakai semaksimal mungkin, lesehan di ruang tamu.
- **Menengah (rekomendasi):** atap ruang belakang diganti, lembap ditangani tuntas, cat oleh tukang, lemari tertutup baru di semua ruang, sofa, SPC kamar depan, dapur dilapis ulang.
- **Premium:** semua custom sampai plafon, kitchen set baru, listrik ditata ulang, fasad dicat.

Jika dana terbatas, urutannya: (1) paket kerja remote, karena penghasilan bergantung padanya ({{R_MENENGAH}} di tingkat menengah; versi hemat {{R_HEMAT}}); (2) kelompok A dan B tingkat menengah ({{AB_MENENGAH}}); (3) furnitur ruang demi ruang: kamar depan → dapur → ruang belakang → kamar belakang → ruang tamu.

Paket kerja remote + listrik per tingkat: **hemat** = sirkuit zona kerja dipindah ke meter token (tanpa naik daya), meja kayu tetap 120×60, lengan monitor, UPS 1.200 VA merek lokal, 1 node mesh tambahan, panel akustik buatan sendiri; **menengah** = ditambah naik daya meter token ke 2.200 VA, meja sit-stand elektrik, UPS bermerek, mesh 2 node dengan kabel backhaul, modem 4G cadangan dengan failover, pra-kabel fase 2; **premium** = meja motor ganda, mesh 3 node, ISP kedua, kamera dan mikrofon, AC inverter baru. Langganan internet cadangan bulanan tidak dihitung.

**Fase 2 belum masuk total:** meja 120×50 + kursi + lengan monitor + lampu untuk istri ±Rp 4–7 juta; AC ½ PK ruang tamu ±Rp 4–5 juta bila diperlukan.

Opsi yang **tidak** saya masukkan ke total mana pun: mengganti ubin hijau ruang tamu + ruang tengah (±21 m², kisaran Rp 8–9 juta). Jangan dilakukan sebelum dinding terbukti kering selama satu musim hujan.

### Tingkat hemat

{{B_HEMAT}}

### Tingkat menengah

{{B_MENENGAH}}

### Tingkat premium

{{B_PREMIUM}}

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
- Isi: {{NFURN}} furnitur, {{NOPEN}} bukaan. Sudah divalidasi dengan skrip (ruang tidak tumpang, furnitur di dalam muka dalam dinding, bukaan di dinding bersama yang benar, pintu bebas 85 cm, rute ≥ 80 cm diukur dari muka dalam dinding).

### SCENE_SPEC

```json
{{SCENE_SPEC}}
```
