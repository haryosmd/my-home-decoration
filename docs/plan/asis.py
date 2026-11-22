import json, io, contextlib, itertools, copy
with contextlib.redirect_stdout(io.StringIO()):
    import scene
from scene import inner, box, ov, span, rect
KINDS=set("bed_frame mattress_floor mattress_standing pillow_pile clothes_pile wardrobe_wood wardrobe_rose_print glass_cabinet dresser_mirror desk_glass office_chair monitor laptop tv stabilizer router whiteboard shelf_open wall_shelf_board upper_cabinet counter_masonry sink_counter stove_counter fridge dispenser gallon carved_bench teak_sofa teak_chair teak_table round_table_clutter plastic_chair chair_simple side_table drying_rack clothes_rail shoe_pile boxes bags trash_sack laundry_basket fan_standing fan_wall rug_zigzag rug_plain door_mat guitar_wall broom mirror frame calligraphy clock curtain pots_hanging dish_rack toilet shower car plant_pot generic_box".split())
GREEN="ubin_keramik_hijau_motif_40x40_existing"
TODAY={ # floor, wall colour today
 "kamar_depan":(GREEN,"#D9D6CC"),"teras":(GREEN,"#E6DC7A"),"ruang_tamu":(GREEN,"#EDE2B4"),"ruang_tengah":(GREEN,"#EDE2B4"),
 "kamar_belakang":(GREEN,"#1B6E99"),"dapur":(GREEN,"#62D45E"),"kamar_mandi":("keramik_hijau_muda_kamar_mandi_existing","#E8EEE8"),
 "ruang_belakang":("keramik_coklat_40x40_existing","#D8C753"),"carport":("keramik_batu_abu_existing","#E6DC7A")}
rooms=copy.deepcopy(scene.rooms)
for r in rooms:
    r["floor_material"],r["wall_color_hex"]=TODAY[r["id"]]; r.pop("accent_wall",None)
R={r["id"]:r for r in rooms}
openings=copy.deepcopy(scene.openings)
for o in openings:
    o["note"]=o["note"].split("; rekomendasi")[0]
F=[]
def f(room,kind,name,x,y,w,d,h,rot,col,**k):
    assert kind in KINDS, kind
    e=dict(room_id=room,kind=kind,name=name,x=x,y=y,w_cm=w,d_cm=d,h_cm=h,rotation_deg=rot,color_hex=col); e.update(k); F.append(e)
def wall(**k): return dict(wall_mounted=True,**k)
def on(z,**k): return dict(on_furniture=True,z_m=z,**k)
JATI="#B5783C"; DARK="#2A1F1A"; CARD="#B8956A"; ALU="#C9CCCE"
# ---------------- TERAS
T="teras"
f(T,"teak_sofa","Bangku jati 3 dudukan (membelakangi pagar)",3.8,0.40,150,60,85,0,JATI)
f(T,"teak_chair","Kursi jati kiri (di depan jendela kamar)",2.69,1.0,60,60,85,90,JATI)
f(T,"teak_chair","Kursi jati kanan",2.69,1.62,60,60,85,90,JATI)
f(T,"teak_table","Meja kopi jati (di depan jendela jungkit)",4.45,1.55,100,50,45,180,JATI)
f(T,"bags","Ransel di atas bangku",3.55,0.42,35,30,45,0,"#5A4632",**on(0.42,count=1))
f(T,"laptop","Laptop di atas meja kopi",4.3,1.55,33,23,3,180,"#2B2B2B",**on(0.45))
f(T,"generic_box","Meteran listrik (kWh) di dinding kamar",2.41,0.45,6,20,30,90,"#D9D9D9",**wall(z_m=1.5))
# ---------------- RUANG TAMU
T="ruang_tamu"
f(T,"teak_chair","Kursi kayu di pojok (dipakai menumpuk bantal)",4.5,5.55,65,60,85,180,JATI)
f(T,"pillow_pile","Tumpukan bantal di atas kursi",4.5,5.6,55,50,55,180,"#D9C9A8",**on(0.45,count=4))
f(T,"fan_standing","Kipas berdiri putih",4.62,4.95,35,35,110,180,"#F2F2F2")
f(T,"laundry_basket","Keranjang cucian biru",3.9,5.55,55,40,30,180,"#2F5FC4")
f(T,"door_mat","Keset motif daun di depan pintu kamar",2.72,5.45,45,70,3,90,"#2E4B45",rug=True)
f(T,"calligraphy","Kaligrafi Al-Quran berbingkai",4.0,5.91,100,3,70,180,"#6B4A2B",**wall(z_m=1.45))
f(T,"clock","Jam dinding hitam",3.2,5.91,28,3,28,180,"#2B2B2B",**wall(z_m=2.0))
f(T,"curtain","Tirai bukaan ke ruang tengah (diikat)",3.42,5.87,25,10,210,180,"#8A5A3A",**wall(z_m=0.05))
f(T,"curtain","Gorden kiri pintu utama",2.7,2.13,45,10,220,0,"#6B3A2A",**wall(z_m=0.05))
f(T,"curtain","Gorden kanan pintu utama",4.6,2.13,45,10,220,0,"#6B3A2A",**wall(z_m=0.05))
f(T,"frame","Foto bingkai 1 (dinding kanan)",4.91,5.55,3,35,50,270,"#6B4A2B",**wall(z_m=1.35))
f(T,"frame","Foto bingkai 4 (dinding kanan)",4.91,4.45,3,35,50,270,"#6B4A2B",**wall(z_m=1.8))
# ---------------- RUANG TENGAH
T="ruang_tengah"
f(T,"mattress_standing","Kasur cadangan berdiri di dinding kiri",2.5,8.25,25,200,150,90,"#2F5A45")
f(T,"fan_standing","Kipas berdiri hitam",2.9,7.45,45,45,125,90,"#1E1E1E")
f(T,"fridge","Kulkas 2 pintu (sarung kain)",3.62,9.6,60,65,160,180,"#B8BABD")
f(T,"boxes","Barang di atas kulkas",3.62,9.65,50,45,25,180,"#E8E2C8",**on(1.6,count=3))
f(T,"carved_bench","Bangku kayu ukir",4.65,8.5,55,150,85,270,"#8A5530")
f(T,"boxes","Kardus + tas + tikar lipat di atas bangku",4.6,8.6,45,110,35,270,CARD,**on(0.45,count=4))
f(T,"dispenser","Dispenser",4.74,7.42,36,34,100,270,"#F2F2F2")
f(T,"gallon","Galon di atas dispenser",4.74,7.42,27,27,40,270,"#BFD9EE",**on(1.0))
f(T,"trash_sack","Tempat sampah kecil (kantong merah)",3.95,6.3,35,35,45,0,"#8B2A2A")
f(T,"frame","Foto pasangan bingkai putih",3.7,6.09,70,3,90,0,"#FFFFFF",**wall(z_m=1.1))
f(T,"clock","Jam dinding putih",4.91,7.12,3,32,32,270,"#F2F2F2",**wall(z_m=1.7))
f(T,"frame","Foto Mekah berbingkai (di atas kasur)",2.39,8.1,3,60,80,90,"#8A6A3A",**wall(z_m=1.55))
f(T,"frame","Foto keluarga (dinding belakang)",3.75,9.91,35,3,30,180,"#8A6A3A",**wall(z_m=1.85))
f(T,"frame","Foto 1 (dinding kanan)",4.91,8.9,3,18,40,270,"#2B2B2B",**wall(z_m=1.55))
f(T,"frame","Foto 2 (dinding kanan)",4.91,8.3,3,22,45,270,"#2B2B2B",**wall(z_m=1.75))
# ---------------- KAMAR DEPAN
T="kamar_depan"
f(T,"mattress_floor","Kasur di lantai (sprei biru)",1.15,0.65,200,100,22,0,"#2B4DB3")
f(T,"pillow_pile","Bantal di ujung kasur",0.5,0.55,60,60,25,0,"#E8E6E0",**on(0.22,count=3))
f(T,"clothes_pile","Selimut + baju terlipat di kasur",1.35,0.6,70,50,20,0,"#B33A2B",**on(0.22))
f(T,"rug_zigzag","Karpet zig-zag hitam-putih",1.2,2.2,160,210,1,0,"#8C8C8C",rug=True)
f(T,"pillow_pile","Bantal di lantai depan kasur",1.0,1.45,70,45,20,0,"#C43A7A",count=2)
f(T,"mirror","Cermin dinding bingkai kayu",0.09,2.25,3,35,100,90,"#7A3B2A",**wall(z_m=0.9))
f(T,"frame","Foto besar bingkai putih (bersandar di lantai)",0.16,3.05,12,75,55,90,"#FFFFFF")
f(T,"bags","Tas belanja dan kantong di lantai",0.42,3.9,65,80,55,90,"#B56A8A",count=6)
f(T,"generic_box","Karpet gulung berdiri",0.9,3.85,25,25,95,0,"#D8D2C2")
f(T,"glass_cabinet","Lemari pajangan kaca (dipakai lemari baju)",0.33,5.0,50,110,175,90,ALU)
f(T,"boxes","Tumpukan kardus + tas di atas lemari kaca",0.33,5.0,50,100,45,90,CARD,**on(1.75,count=6))
f(T,"broom","Sapu lidi bersandar",0.68,4.4,12,12,100,0,"#B89A5A")
f(T,"tv","TV 32 inci di dinding belakang",1.25,5.895,73,6,43,180,"#1A1A1A",**wall(z_m=1.3))
f(T,"fan_wall","Kipas dinding ungu",1.45,5.86,40,13,45,180,"#B9A6D9",**wall(z_m=1.85))
f(T,"desk_glass","Meja kerja kaca",1.925,4.3,60,120,74,270,"#9FB3B8")
f(T,"office_chair","Kursi kerja ergonomis",1.3,4.3,60,60,120,90,"#8E9093")
f(T,"clothes_pile","Handuk + baju di kursi dan meja",1.4,4.3,45,45,25,90,"#F2F2F2",**on(0.5))
f(T,"monitor","Monitor ultrawide",2.08,4.4,20,82,45,270,"#1A1A1A",**on(0.74))
f(T,"laptop","Laptop di meja",1.8,4.15,24,34,3,270,"#B8BABD",**on(0.74))
f(T,"stabilizer","Stabilizer 1 kVA di meja",1.9,4.78,32,20,20,270,"#A8322A",**on(0.74))
f(T,"generic_box","Stopkontak panjang + adaptor bertumpuk",2.05,4.82,25,10,12,270,"#F2F2F2",**on(0.94))
f(T,"router","Router Wi-Fi di dinding",2.2,4.97,5,22,18,270,"#F2F2F2",**wall(z_m=1.55))
f(T,"bags","Tote bag menggantung di kursi",1.02,4.8,35,35,60,90,"#F1EBDD",count=2)
f(T,"side_table","Meja putih (skincare dan buku)",1.95,3.25,50,80,75,270,"#F2F2F2")
f(T,"generic_box","Botol skincare + buku di meja putih",1.95,3.25,45,70,22,270,"#D9B9A8",**on(0.75))
f(T,"whiteboard","Papan tulis jadwal",2.21,3.2,3,90,60,270,"#F7F7F7",**wall(z_m=1.15))
f(T,"frame","Foto wisuda (dinding kanan)",2.21,4.15,3,35,50,270,"#2B2B2B",**wall(z_m=1.7))
f(T,"frame","Foto pasangan (dinding kanan)",2.21,2.6,3,30,45,270,"#8A6A3A",**wall(z_m=1.55))
f(T,"curtain","Gorden jendela depan",0.65,0.125,25,10,150,0,"#C98A3A",**wall(z_m=0.6))
f(T,"curtain","Gorden jendela ke teras",2.175,1.4,10,25,180,270,"#C98A3A",**wall(z_m=0.3))
f(T,"generic_box","AC indoor",1.15,0.175,80,20,28,0,"#FFFFFF",**wall(z_m=2.3))
# ---------------- KAMAR BELAKANG
T="kamar_belakang"
f(T,"bed_frame","Tempat tidur rangka kayu (sprei merah)",1.15,9.15,200,150,50,270,"#B22A2A")
f(T,"pillow_pile","Bantal di kepala tempat tidur",1.85,9.3,50,90,35,270,"#E8E6E0",**on(0.5,count=4))
f(T,"clothes_pile","Baju terlipat di tempat tidur",1.3,9.0,60,45,15,270,"#D8D2C2",**on(0.5))
f(T,"boxes","Kardus terbuka di tempat tidur",0.5,8.95,50,40,30,270,CARD,**on(0.5,count=1))
f(T,"wardrobe_rose_print","Lemari aluminium motif mawar 3 pintu",2.0,7.7,45,125,170,270,"#F4F1EC",accent_hex="#B0242E")
f(T,"boxes","Tumpukan kardus sepatu di atas lemari mawar",2.0,7.4,45,60,60,270,"#3E6FB0",**on(1.7,count=12))
f(T,"bags","Tas + kantong di atas lemari mawar",2.0,8.0,45,55,45,270,"#5AA83A",**on(1.7,count=3))
f(T,"wardrobe_wood","Lemari kayu gelap 2 pintu",0.35,6.75,55,110,180,90,DARK)
f(T,"bags","Kantong plastik + barang di atas lemari kayu",0.35,6.75,55,100,45,90,"#3A3A3A",**on(1.8,count=5))
f(T,"dresser_mirror","Meja rias + cermin (penuh barang)",0.3,7.82,45,90,160,90,"#4A2A1E")
f(T,"generic_box","Skincare + organizer di meja rias",0.3,7.82,40,80,20,90,"#D9B9C8",**on(0.8))
f(T,"boxes","Buku + kotak di atas meja rias",0.3,7.82,40,85,35,90,"#A83A3A",**on(1.6,count=8))
f(T,"bags","Tas digantung di paku (dinding kiri)",0.16,8.75,16,60,70,90,"#6B4A3A",**wall(z_m=1.15,count=5))
# ---------------- DAPUR
T="dapur"
f(T,"counter_masonry","Meja cor keramik biru sisi kiri",0.375,10.75,60,75,85,90,"#3A55C4")
f(T,"counter_masonry","Meja cor keramik biru pojok",0.375,11.425,60,60,85,180,"#3A55C4")
f(T,"stove_counter","Dudukan rendah + kompor 2 tungku",1.05,11.425,75,60,60,180,"#2B3A8A")
f(T,"counter_masonry","Meja cor keramik biru tengah",1.95,11.425,105,60,85,180,"#3A55C4")
f(T,"sink_counter","Bak cuci berkeramik hijau",2.975,11.425,100,60,85,180,"#2F5A45")
f(T,"dish_rack","Rak piring 2 susun",2.75,11.45,45,35,40,180,"#F2F2F2",**on(0.85))
f(T,"generic_box","Rice cooker",0.35,10.75,28,28,25,90,"#3A3A3A",**on(0.85))
f(T,"upper_cabinet","Kabinet atas aluminium (dinding kiri)",0.245,10.85,34,110,55,90,"#EDEDED",**wall(z_m=1.45))
f(T,"upper_cabinet","Kabinet atas aluminium (pojok belakang)",1.0,11.555,120,34,55,180,"#EDEDED",**wall(z_m=1.45))
f(T,"boxes","Tumpukan kantong + kardus di atas kabinet",0.7,11.4,120,55,40,180,"#8A3A3A",**wall(z_m=2.0,count=10))
f(T,"wall_shelf_board","Papan rak hijau panjang",2.5,11.55,180,35,4,180,"#6FA86A",**wall(z_m=1.9))
f(T,"boxes","Kardus + karung di atas papan rak",2.5,11.55,170,35,35,180,CARD,**wall(z_m=1.94,count=8))
f(T,"pots_hanging","Panci dan wajan digantung di dinding",2.5,11.69,170,7,70,180,"#B8BABD",**wall(z_m=1.05,count=10))
f(T,"glass_cabinet","Lemari kaca rendah (koran di atasnya)",1.4,10.3,100,45,120,0,ALU)
f(T,"boxes","Tumpukan koran di atas lemari kaca",1.4,10.3,85,40,10,0,"#D8D2C2",**on(1.2))
f(T,"trash_sack","Karung sampah besar putih",2.15,10.35,45,45,100,0,"#EDEDED")
f(T,"trash_sack","Keranjang sampah kecil di depan kompor",1.3,10.9,30,30,35,0,"#2B2B2B")
f(T,"side_table","Meja kayu di samping pintu (koran, kardus, setrika)",3.75,10.4,90,50,75,0,"#7A4A2A")
f(T,"boxes","Kardus bertumpuk di atas meja kayu",3.95,10.4,45,40,45,0,CARD,**on(0.75,count=3))
f(T,"generic_box","Stopkontak panjang + koran di meja",3.5,10.4,35,35,8,0,"#F2F2F2",**on(0.75))
f(T,"broom","Pel + sapu menggantung di dinding belakang",3.75,11.66,25,10,130,180,"#C9C9C9",**wall(z_m=0.2))
f(T,"door_mat","Keset hijau di depan pintu",2.85,10.45,70,50,3,0,"#3A6B3A",rug=True)
# ---------------- KAMAR MANDI
T="kamar_mandi"
f(T,"toilet","Kloset (posisi perkiraan)",7.35,11.35,40,65,40,180,"#FFFFFF",low_confidence=True)
f(T,"shower","Shower dinding (terlihat dari pintu)",6.0,11.25,90,90,200,180,"#DDE3E3",rug=True,low_confidence=True)
f(T,"generic_box","Ember/bak air (posisi perkiraan)",6.85,11.45,45,45,45,180,"#3A8AC4",low_confidence=True)
# ---------------- RUANG BELAKANG
T="ruang_belakang"
f(T,"glass_cabinet","Lemari aluminium rendah di bawah jendela",6.95,5.3,120,45,85,0,"#E6E6E6")
f(T,"generic_box","Botol, tisu, raket nyamuk di atas lemari",6.95,5.3,105,38,25,0,"#F2F2F2",**on(0.85))
f(T,"generic_box","Papan kayu bersandar di pojok",7.88,5.2,30,22,180,0,"#7A5A3A")
f(T,"broom","Sapu ijuk digantung",8.04,5.85,6,30,130,270,"#3A3A3A",**wall(z_m=0.45))
f(T,"broom","Pel digantung",8.04,6.25,6,25,130,270,"#D94A9A",**wall(z_m=0.45))
f(T,"guitar_wall","Gitar dalam sarung di dinding",8.015,6.85,12,40,105,270,"#1E1E1E",**wall(z_m=1.15))
f(T,"gallon","Dua galon + kardus air mineral di lantai",7.9,6.4,30,80,45,270,"#BFD9EE",count=2)
f(T,"drying_rack","Jemuran handuk aluminium",7.75,7.35,45,85,95,270,"#D9D9D9")
f(T,"shoe_pile","Rak sepatu penuh + sepatu bertumpuk",7.78,8.1,50,60,60,270,"#3A3A3A",count=12)
f(T,"shoe_pile","Sepatu di lantai dekat lemari",6.9,5.95,35,30,12,0,"#6A7AB5",count=1)
f(T,"round_table_clutter","Meja makan bundar penuh barang",7.1,9.0,100,100,75,0,"#D8CDB0")
f(T,"generic_box","Keranjang bumbu + tudung saji + toples",7.1,9.0,85,85,25,0,"#5AB58A",**on(0.75))
f(T,"chair_simple","Kursi dengan handuk",6.95,8.2,45,45,85,0,"#2B2B2B")
f(T,"plastic_chair","Kursi plastik krem",7.84,9.25,45,50,80,270,"#E6DCC2")
f(T,"boxes","Tumpukan kardus, kontainer, payung di pojok",7.6,9.75,90,30,110,180,"#3A4A8A",count=8)
f(T,"clothes_rail","Batang gantungan baju di dinding belakang",6.4,9.82,150,18,10,180,"#B8BABD",**wall(z_m=1.4))
f(T,"clothes_pile","Baju tergantung di batang",6.2,9.82,90,18,70,180,"#6A6A6A",**wall(z_m=0.7))
f(T,"side_table","Meja hitam (bekas meja setrika)",5.35,8.0,50,100,75,90,"#1E1E1E")
f(T,"shelf_open","Lemari/rak cokelat merah",5.3,9.0,45,90,110,90,"#6B2A2A")
f(T,"boxes","Map, printer, kotak di atas rak cokelat",5.3,9.0,45,85,45,90,"#C43A7A",**on(1.1,count=6))
f(T,"generic_box","Kontainer plastik tutup pink",5.82,8.9,40,55,35,90,"#E8A6C4")
f(T,"bags","Kantong kertas + kontainer hijau di lantai",5.5,9.69,70,45,50,180,"#E6DCC2",count=4)
f(T,"generic_box","Kotak meter/panel listrik di dinding",5.105,7.15,6,35,45,90,"#E6E6E6",**wall(z_m=1.6))
f(T,"door_mat","Keset abu di pintu carport",5.72,5.5,50,80,3,0,"#3A3A3A",rug=True)
f(T,"broom","Sapu biru bersandar di samping pintu",6.25,5.2,15,20,120,0,"#2F5FC4")
# ---------------- CARPORT
T="carport"
f(T,"car","Mobil hitam",7.15,2.5,170,440,160,180,"#1A1A1A")
f(T,"shoe_pile","Sandal dan sepatu di depan pintu samping",5.5,4.55,60,45,10,0,"#3AA8A0",count=3)

issues=[]
def floor(e): return not e.get("wall_mounted") and not e.get("rug") and not e.get("on_furniture")
for e in F:
    r=inner(R[e["room_id"]]); b=box(e)
    if b[0]<r[0]-1e-6 or b[1]<r[1]-1e-6 or b[2]>r[2]+1e-6 or b[3]>r[3]+1e-6: issues.append(("OUTSIDE",e["name"],[round(v,3) for v in b],r))
for a,b in itertools.combinations([e for e in F if floor(e)],2):
    if ov(box(a),box(b)): issues.append(("OVERLAP",a["name"],b["name"]))
# on_furniture harus berada di atas suatu benda lantai/dinding yang tingginya cocok
for e in F:
    if e.get("on_furniture"):
        base=[g for g in F if g is not e and g["room_id"]==e["room_id"] and not g.get("rug") and ov(box(e),box(g)) and e["z_m"]<=g.get("z_m",0)+g["h_cm"]/100+0.06 and e["z_m"]>g.get("z_m",0)]
        if not base: issues.append(("NO BASE",e["name"],e["z_m"]))
for a,b in itertools.combinations(rooms,2):
    if ov(rect(a),rect(b)): issues.append(("ROOM OVERLAP",a["id"],b["id"]))
from collections import Counter
if __name__=="__main__":
    for i in issues: print(i)
    print("ALL OK" if not issues else "ISSUES",len(issues),"| items",len(F),"| per room",dict(Counter(e["room_id"] for e in F)))
conv=copy.deepcopy(scene.spec["conventions"])
conv["furniture"]+="; kind = jenis benda untuk renderer; count = jumlah benda dalam tumpukan; on_furniture = di atas benda lain (z_m = tinggi permukaan di bawahnya)"
conv["wall_note"]="muka dalam dinding = 0.075 m di dalam garis ruang; semua benda ditempatkan terhadap muka dalam (benda dinding menempel tepat di muka dalam)"
spec=dict(name="SCENE_SPEC_ASIS",state="as-is (kondisi sekarang, berantakan seperti foto)",units=scene.spec["units"],conventions=conv,rooms=rooms,openings=openings,furniture=F)
json.dump(spec,open("scene_spec_asis.json","w"),ensure_ascii=False,indent=1)
