import json, io, contextlib
with contextlib.redirect_stdout(io.StringIO()):
    import scene
from scene import rooms, openings, F, R, box, span, issues, rep
assert not issues, issues

def rp(n): return "Rp " + f"{n:,.0f}".replace(",", ".")
HAD={0:"+y (belakang)",90:"+x (kanan)",180:"−y (jalan)",270:"−x (kiri)"}
def ftable(rid):
    out=["| Benda | Status | Tapak x × y × tinggi (cm) | Titik tengah (x ; y) m | Rentang x (m) | Rentang y (m) | Muka menghadap |","|---|---|---|---|---|---|---|"]
    for e in F:
        if e["room_id"]!=rid: continue
        b=box(e); st="lama" if e.get("existing") else "baru"
        nm=e["name"]+(f" — dipasang di dinding/plafon, bawah +{e['z_m']:.2f} m" if e.get("wall_mounted") else "")+(" — di atas meja" if e.get("on_furniture") else "")
        out.append(f"| {nm} | {st} | {e['w_cm']} × {e['d_cm']} × {e['h_cm']} | {e['x']:.2f} ; {e['y']:.2f} | {b[0]:.2f}–{b[2]:.2f} | {b[1]:.2f}–{b[3]:.2f} | {HAD[e['rotation_deg']]} |")
    return "\n".join(out)
def rtable():
    out=["| id | Ruang | x | y | lebar w | kedalaman d | Luas | Keyakinan |","|---|---|---|---|---|---|---|---|"]
    for r in rooms:
        out.append(f"| `{r['id']}` | {r['name']} | {r['x']:.1f} | {r['y']:.1f} | {r['w']:.1f} | {r['d']:.1f} | {r['w']*r['d']:.1f} m² | {r['confidence']} |")
    return "\n".join(out)
WN={"front":"depan","back":"belakang","left":"kiri","right":"kanan"}
def otable():
    out=["| Ruang | Dinding | Offset (m) | Lebar (m) | Tinggi (m) | Ambang (m) | Jenis | Posisi absolut | Menuju | Catatan |","|---|---|---|---|---|---|---|---|---|---|"]
    for o in openings:
        k,c,a,b,L=span(o)
        pos=f"y={c:.2f}, x {a:.2f}–{b:.2f}" if k=="h" else f"x={c:.2f}, y {a:.2f}–{b:.2f}"
        out.append(f"| `{o['room_id']}` | {WN[o['wall']]} | {o['offset_m']:.2f} | {o['width_m']:.2f} | {o['height_m']:.2f} | {o.get('sill_m',0):.1f} | {'pintu' if o['type']=='door' else 'jendela'} | {pos} | {o.get('connects_to') or ('luar' if o.get('connects_to_outside') else 'belum pasti')} | {o['note']} |")
    return "\n".join(out)

HEMAT=[
("A. Perbaikan bangunan & keselamatan","Tambal bocor atap ruang belakang + flashing pertemuan dinding (material + 2 tukang × 2 hari)",1500000),
("A. Perbaikan bangunan & keselamatan","Ganti plafon ruang belakang 15 m² (GRC/gipsum, rangka hollow) @ Rp 120 rb/m²",1800000),
("A. Perbaikan bangunan & keselamatan","Penanganan lembap dinding, area terparah ±25 m² (kerok, waterproofing semen, plamir) @ Rp 75 rb/m²",1875000),
("A. Perbaikan bangunan & keselamatan","Cairan anti-jamur, sealer alkali 2 × 5 kg, cat penutup noda plafon",550000),
("A. Perbaikan bangunan & keselamatan","Listrik: 6 titik stopkontak baru (kamar depan 3, dapur 2, ruang belakang 1) @ Rp 175 rb + duct/klem kabel",1300000),
("A. Perbaikan bangunan & keselamatan","Ventilasi: exhaust fan dapur 10\" + kamar belakang 8\" + ruang belakang 8\", termasuk pasang",1250000),
("B. Cat (dikerjakan sendiri)","Cat dinding interior ekonomis 3 pail 25 kg (kelas Catylac/Vinilex) @ Rp 700 rb",2100000),
("B. Cat (dikerjakan sendiri)","Cat plafon putih 1 pail 25 kg",700000),
("B. Cat (dikerjakan sendiri)","Alat cat, plamir, amplas, lakban, plastik penutup",500000),
("B. Cat (dikerjakan sendiri)","Cat kayu/besi untuk lis profil dan perapian kusen",250000),
("C. Lantai","Kamar depan: vinyl lembaran motif kayu 14 m² @ Rp 50 rb (pasang sendiri)",700000),
("C. Lantai","Ruang tamu: karpet/tikar polos 150×220",600000),
("D. Lampu","12 bohlam LED 3000K, 2 LED batten 4000K dapur, 3 fitting/kap, 1 lampu meja",1100000),
("E. Furnitur — kamar depan","Dipan 160×200 buatan lokal (kasur lama dipakai dulu)",1500000),
("E. Furnitur — kamar depan","Lemari pakaian 3 pintu lokal",1900000),
("E. Furnitur — kamar depan","Cable management: cable tray, kotak kabel, velcro, 2 stopkontak panjang SNI bersaklar",450000),
("E. Furnitur — kamar depan","3 ambalan dinding + pegboard",300000),
("E. Furnitur — ruang tamu","Ambalan/rak TV 120 cm + bracket (TV 32\" lama)",450000),
("E. Furnitur — ruang tamu","4 bantal lantai + meja lipat rendah (lesehan, ganti sofa)",600000),
("E. Furnitur — ruang tamu","9 bingkai foto seragam",400000),
("E. Furnitur — ruang tengah","Bantalan bangku ukir + lemari serbaguna sederhana tertutup",900000),
("E. Furnitur — kamar belakang","4 boks kolong ranjang, rel gantungan tas, organizer meja rias (lemari lama dipakai dulu)",550000),
("E. Furnitur — dapur","2 rak dinding stainless 90 cm + rel gantung panci (ganti papan rak lama)",500000),
("E. Furnitur — dapur","Tempat sampah injak 2 × 25 L + tong beroda 60 L bertutup di carport",500000),
("E. Furnitur — dapur","Selang + regulator LPG SNI baru, rak piring 2 susun, keset anti-slip",450000),
("E. Furnitur — dapur","Pintu kolong meja dapur 3 m (aluminium sederhana)",600000),
("E. Furnitur — ruang belakang","Rak sepatu tertutup",450000),
("E. Furnitur — ruang belakang","Gantungan sapu dinding, rak galon, 4 kontainer bertutup",640000),
("F. Dekor","Gorden polos 5 bukaan @ Rp 150 rb",750000),
("F. Dekor","4 tanaman + pot",300000),
]
MENENGAH=[
("A. Perbaikan bangunan & keselamatan","Ganti penutup atap ruang belakang 16 m² (spandek pasir + flashing + talang) @ Rp 230 rb/m²",3700000),
("A. Perbaikan bangunan & keselamatan","Plafon PVC ruang belakang 15 m² @ Rp 190 rb/m² terpasang",2850000),
("A. Perbaikan bangunan & keselamatan","Penanganan lembap dinding ±45 m² (kerok plester lapuk, waterproofing semen 2 lapis, plester + acian ulang) @ Rp 110 rb/m²",4950000),
("A. Perbaikan bangunan & keselamatan","Perbaikan plafon bernoda (ruang tengah, teras, dapur) + tambal retak",1000000),
("A. Perbaikan bangunan & keselamatan","Listrik: 10 titik stopkontak @ Rp 200 rb, grup MCB dapur & AC, RCBO, trunking kabel",3200000),
("A. Perbaikan bangunan & keselamatan","Ventilasi: cooker hood slim 60 cm + ducting, exhaust plafon kamar belakang + ducting ke atap, exhaust dinding ruang belakang",2950000),
("B. Cat (tukang)","Sealer alkali 20 L + 5 L",1230000),
("B. Cat (tukang)","Cat dinding washable anti-jamur 2 pail 20 L (kelas EasyClean/Spot-less) @ Rp 2,2 jt + 3 kaleng 2,5 L warna aksen",5300000),
("B. Cat (tukang)","Cat plafon putih 1 pail 25 kg",750000),
("B. Cat (tukang)","Cat kusen, pintu, lis profil",600000),
("B. Cat (tukang)","Upah cat borongan ±280 m² dinding + plafon @ Rp 22 rb/m²",6160000),
("C. Lantai","Kamar depan: SPC 4 mm klik 15,2 m² (termasuk 10% sisa potong) @ Rp 200 rb terpasang + plint",3540000),
("C. Lantai","Karpet jute 150×220 ruang tamu + karpet polos 120×150 kamar belakang",1900000),
("D. Lampu","14 titik lampu plafon/downlight 3000K, LED strip bawah kabinet dapur 4000K, lampu gantung meja makan, lampu lantai, lampu meja",3930000),
("E. Furnitur — kamar depan","Rangka tempat tidur 160×200 berlaci",3500000),
("E. Furnitur — kamar depan","Kasur 160×200",3500000),
("E. Furnitur — kamar depan","Lemari pintu geser 180 cm",4200000),
("E. Furnitur — kamar depan","Meja kerja 120×60 + cable management + kabinet teknis berventilasi",2550000),
("E. Furnitur — kamar depan","Meja rias slim + cermin + ambalan",1500000),
("E. Furnitur — ruang tamu","Sofa 3 dudukan kain (lebar 180 cm)",4500000),
("E. Furnitur — ruang tamu","Rak TV gantung 150 cm + meja samping + bangku simpan 120 cm (TV 32\" lama dipakai)",2500000),
("E. Furnitur — ruang tamu","12 bingkai galeri seragam + cetak ulang foto",900000),
("E. Furnitur — ruang tengah","Lemari serbaguna/pantry kering 150 cm pintu geser",3000000),
("E. Furnitur — ruang tengah","Bantalan bangku ukir + cermin dinding",850000),
("E. Furnitur — kamar belakang","Lemari pintu geser 180 cm (ganti 2 lemari lama)",4000000),
("E. Furnitur — kamar belakang","Meja rias 80 cm + cermin + stool",1300000),
("E. Furnitur — kamar belakang","Seprai/bed cover polos + rel gantungan tas",600000),
("E. Furnitur — dapur","Lapis ulang top meja dapur 4 m lari (granit tile 60×60) + backsplash keramik putih 6 m² + upah",3800000),
("E. Furnitur — dapur","Pintu kolong aluminium/ACP 4 m lari @ Rp 450 rb",1800000),
("E. Furnitur — dapur","Kabinet atas 1 m + rak piring gantung stainless 90 cm + rel panci + ambalan 15 cm",2300000),
("E. Furnitur — dapur","Sistem sampah: 2 tong injak 25 L + tong beroda 80 L di carport",650000),
("E. Furnitur — dapur","Pindah kulkas (stopkontak sudah di pos listrik) + selang/regulator LPG baru",250000),
("E. Furnitur — ruang belakang","Meja makan 120×70 + 2 kursi",2800000),
("E. Furnitur — ruang belakang","Bangku banquette simpan 140 cm (tukang kayu)",1800000),
("E. Furnitur — ruang belakang","Lemari sepatu 120 cm + lemari utilitas tinggi",2500000),
("E. Furnitur — ruang belakang","Lemari serbaguna/laundry 160 cm pintu geser",2800000),
("E. Furnitur — ruang belakang","Rak galon + bantalan bangku sepatu",400000),
("E. Furnitur — kamar mandi","Exhaust fan plafon, rak sudut + gantungan handuk, nat/silikon ulang (kamar mandi ±5,6 m²)",900000),
("F. Dekor","Gorden linen + vitrase 6 bukaan",2100000),
("F. Dekor","6 tanaman + pot",900000),
("F. Dekor","Bantal sofa, keranjang rotan, tong sampah kecil tiap ruang",900000),
]
PREMIUM=[
("A. Perbaikan bangunan & keselamatan","Atap ruang belakang baru: rangka baja ringan + spandek pasir + insulasi 16 m² @ Rp 450 rb/m²",7200000),
("A. Perbaikan bangunan & keselamatan","Plafon gipsum tahan lembap + drop ceiling lampu ruang belakang 15 m²",4000000),
("A. Perbaikan bangunan & keselamatan","Lembap: seluruh dinding bawah ±70 m² @ Rp 140 rb/m² + injeksi DPC kimia di titik terparah",12800000),
("A. Perbaikan bangunan & keselamatan","Plafon lain: perbaikan, skim, ganti panel rusak (ruang tengah, dapur, teras)",2500000),
("A. Perbaikan bangunan & keselamatan","Listrik: panel MCB baru + RCBO, grounding, 16 titik, jalur khusus AC & dapur, semua kabel dalam pipa/trunking",8500000),
("A. Perbaikan bangunan & keselamatan","Ventilasi: cooker hood ducted, exhaust kamar belakang ducted, exhaust ruang belakang & kamar mandi, jalusi baru kamar belakang bila dindingnya dinding luar",6000000),
("B. Cat (tukang)","Sealer alkali 2 pail",1900000),
("B. Cat (tukang)","Cat premium anti-jamur rendah VOC 3 pail @ Rp 3,2 jt",9600000),
("B. Cat (tukang)","Cat plafon",1200000),
("B. Cat (tukang)","Refinishing 9 daun pintu + kusen @ Rp 450 rb",4050000),
("B. Cat (tukang)","Upah cat ±300 m² @ Rp 28 rb/m²",8400000),
("B. Cat (tukang)","Cat eksterior fasad + carport (cat weatherproof 20 L + upah)",5000000),
("C. Lantai","SPC 5 mm kamar depan + kamar belakang 25 m² @ Rp 260 rb terpasang + plint",7500000),
("C. Lantai","2 karpet besar (ruang tamu 200×290, kamar)",4000000),
("D. Lampu","Downlight CRI 90, LED strip tersembunyi, lampu gantung, saklar pintar",8000000),
("E. Furnitur — kamar depan","Tempat tidur hidrolik 160×200",5500000),
("E. Furnitur — kamar depan","Kasur 160×200 kelas atas",7000000),
("E. Furnitur — kamar depan","Lemari custom HPL 1,8 m sampai plafon, pintu geser",6000000),
("E. Furnitur — kamar depan","Meja kerja custom + kabinet teknis + rak dinding",5500000),
("E. Furnitur — kamar depan","Meja rias custom",2500000),
("E. Furnitur — ruang tamu","Sofa 3 dudukan premium",9000000),
("E. Furnitur — ruang tamu","Panel TV custom + konsol gantung",6500000),
("E. Furnitur — ruang tamu","TV 43\" 4K baru",4500000),
("E. Furnitur — ruang tamu","Bangku simpan + meja samping kayu solid",2500000),
("E. Furnitur — ruang tamu","Bingkai galeri oleh jasa pigura",2000000),
("E. Furnitur — ruang tengah","Lemari built-in 1,5 m sampai plafon",4500000),
("E. Furnitur — ruang tengah","Refinishing bangku ukir + bantalan custom + cermin besar",2100000),
("E. Furnitur — kamar belakang","Lemari custom 1,8 m sampai plafon",5500000),
("E. Furnitur — kamar belakang","Meja rias custom + lampu cermin",2500000),
("E. Furnitur — kamar belakang","Kasur baru + headboard",5000000),
("E. Furnitur — dapur","Kitchen set baru: 4 m lari bawah + 3 m lari atas (aluminium/HPL tahan lembap) + top granit/solid surface",22000000),
("E. Furnitur — dapur","Bak cuci + kran baru, kompor tanam 2 tungku",4500000),
("E. Furnitur — dapur","Backsplash penuh + rak gantung dinding depan",3500000),
("E. Furnitur — dapur","Tempat sampah tarik (pull-out) + tong luar",1500000),
("E. Furnitur — ruang belakang","Meja makan kayu solid + 2 kursi + banquette berlapis",7500000),
("E. Furnitur — ruang belakang","Zona masuk built-in 3 m lari (lemari sepatu + bangku + lemari utilitas)",7800000),
("E. Furnitur — ruang belakang","Lemari laundry 1,6 m",4200000),
("E. Furnitur — ruang belakang","Dispenser galon bawah",2200000),
("E. Furnitur — kamar mandi","Waterproofing ulang lantai ±5,6 m² + kaki dinding, exhaust, aksesori",5500000),
("E. Furnitur — teras","Refinishing set jati + bantal outdoor + lampu dinding",2100000),
("F. Dekor","Gorden custom + vitrase",5500000),
("F. Dekor","Tanaman, pot, aksesori",3500000),
]
def btable(items):
    out=["| Kelompok | Pekerjaan / barang | Kisaran biaya |","|---|---|---:|"]; sub=0; cur=None; subs={}
    for g,n,a in items:
        subs[g]=subs.get(g,0)+a
    seen=set()
    for g,n,a in items:
        out.append(f"| {g if g not in seen else ''} | {n} | {rp(a)} |"); seen.add(g)
    tot=sum(a for _,_,a in items); cad=round(tot*0.10/50000)*50000
    out.append(f"| | **Subtotal** | **{rp(tot)}** |")
    out.append(f"| | Cadangan tak terduga 10% | {rp(cad)} |")
    out.append(f"| | **TOTAL** | **{rp(tot+cad)}** |")
    return "\n".join(out), tot, cad, subs
bh,th,ch,sh=btable(HEMAT); bm,tm,cm,sm=btable(MENENGAH); bp,tp,cp,sp=btable(PREMIUM)
def grp(s,key): return sum(v for k,v in s.items() if k.startswith(key))
A_m=grp(sm,"A."); B_m=grp(sm,"B.")
spec=json.dumps(scene.spec,ensure_ascii=False,indent=1)
assert all(ok for a,b,ok in rep)

T=open("template.md",encoding="utf-8").read()
subs_map={
"{{ROOMS}}":rtable(),"{{OPENINGS}}":otable(),
"{{F_TERAS}}":ftable("teras"),"{{F_TAMU}}":ftable("ruang_tamu"),"{{F_TENGAH}}":ftable("ruang_tengah"),"{{F_KDEPAN}}":ftable("kamar_depan"),
"{{F_KBELAKANG}}":ftable("kamar_belakang"),"{{F_DAPUR}}":ftable("dapur"),"{{F_KM}}":ftable("kamar_mandi"),"{{F_BELAKANG}}":ftable("ruang_belakang"),"{{F_CARPORT}}":ftable("carport"),
"{{B_HEMAT}}":bh,"{{B_MENENGAH}}":bm,"{{B_PREMIUM}}":bp,
"{{T_HEMAT}}":rp(th+ch),"{{T_MENENGAH}}":rp(tm+cm),"{{T_PREMIUM}}":rp(tp+cp),
"{{A_HEMAT}}":rp(grp(sh,"A.")),"{{A_MENENGAH}}":rp(A_m),"{{A_PREMIUM}}":rp(grp(sp,"A.")),
"{{AB_MENENGAH}}":rp(A_m+B_m),
"{{E_HEMAT}}":rp(grp(sh,"E.")),"{{E_MENENGAH}}":rp(grp(sm,"E.")),"{{E_PREMIUM}}":rp(grp(sp,"E.")),
"{{B_HEMAT_SUB}}":rp(grp(sh,"B.")),"{{B_MENENGAH_SUB}}":rp(B_m),"{{B_PREMIUM_SUB}}":rp(grp(sp,"B.")),
"{{CDF_HEMAT}}":rp(grp(sh,"C.")+grp(sh,"D.")+grp(sh,"F.")),"{{CDF_MENENGAH}}":rp(grp(sm,"C.")+grp(sm,"D.")+grp(sm,"F.")),"{{CDF_PREMIUM}}":rp(grp(sp,"C.")+grp(sp,"D.")+grp(sp,"F.")),
"{{CAD_HEMAT}}":rp(ch),"{{CAD_MENENGAH}}":rp(cm),"{{CAD_PREMIUM}}":rp(cp),
"{{NFURN}}":str(len(F)),"{{NOPEN}}":str(len(openings)),
"{{SCENE_SPEC}}":spec,
}
for k,v in subs_map.items():
    assert k in T, k
    T=T.replace(k,v)
assert "{{" not in T, T[T.index("{{"):T.index("{{")+40]
open("advisor-plan.md","w",encoding="utf-8").write(T)
print("written", len(T), "chars;", "totals", rp(th+ch), rp(tm+cm), rp(tp+cp))
