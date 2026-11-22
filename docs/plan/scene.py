import json, itertools, math
from collections import deque
W="#F3EDE1"
rooms=[
 dict(id="kamar_depan",name="Kamar Depan (tidur + kerja)",x=0,y=0,w=2.3,d=6.0,floor_material="spc_oak_terang_di_atas_ubin_lama",wall_color_hex=W,accent_wall={"wall":"left","color_hex":"#A9B59B"},ceiling_h_m=2.9,enclosed=True,confidence="sedang (lebar ±0.2 m, panjang ±0.5 m)"),
 dict(id="teras",name="Teras",x=2.3,y=0,w=2.7,d=2.0,floor_material="ubin_keramik_hijau_motif_40x40_existing",wall_color_hex="#EFE8DA",ceiling_h_m=2.9,enclosed=False,open_sides=["front","right"],confidence="sedang (±0.2 m)"),
 dict(id="ruang_tamu",name="Ruang Tamu",x=2.3,y=2.0,w=2.7,d=4.0,floor_material="ubin_keramik_hijau_motif_40x40_existing",wall_color_hex=W,accent_wall={"wall":"back","color_hex":"#8A9A7B"},ceiling_h_m=2.9,enclosed=True,confidence="sedang (lebar ±0.2 m, kedalaman ±0.4 m)"),
 dict(id="ruang_tengah",name="Ruang Tengah / Keluarga",x=2.3,y=6.0,w=2.7,d=4.0,floor_material="ubin_keramik_hijau_motif_40x40_existing",wall_color_hex=W,ceiling_h_m=2.9,enclosed=True,confidence="sedang (lebar ±0.2 m, kedalaman ±0.4 m)"),
 dict(id="kamar_belakang",name="Kamar Belakang",x=0,y=6.0,w=2.3,d=4.0,floor_material="ubin_keramik_hijau_motif_40x40_existing",wall_color_hex=W,accent_wall={"wall":"back","color_hex":"#9DB0A8"},ceiling_h_m=2.9,enclosed=True,confidence="sedang-rendah (±0.4 m)"),
 dict(id="dapur",name="Dapur (galley)",x=0,y=10.0,w=4.7,d=1.8,floor_material="ubin_keramik_hijau_motif_40x40_existing",wall_color_hex="#F5EFE4",ceiling_h_m=2.8,enclosed=True,confidence="sedang (lebar bersih lorong 1.5-1.8 m, panjang ±0.4 m)"),
 dict(id="kamar_mandi",name="Kamar Mandi",x=4.7,y=10.0,w=3.1,d=1.8,floor_material="keramik_hijau_muda_kamar_mandi_existing",wall_color_hex="#FFFFFF",ceiling_h_m=2.6,enclosed=True,confidence="sedang-rendah (panjang menurut keterangan pemilik: hampir sepanjang ruang belakang; tata letak dalam hanya terlihat dari pintu)"),
 dict(id="ruang_belakang",name="Ruang Belakang (makan + tempat sepatu + utilitas)",x=5.0,y=5.0,w=3.15,d=5.0,floor_material="keramik_coklat_40x40_existing",wall_color_hex="#F5EFE4",accent_wall={"wall":"all_lower_1m","color_hex":"#B7BFA9"},ceiling_h_m=2.7,enclosed=True,confidence="sedang (lebar ±0.15 m, kedalaman ±0.3 m)"),
 dict(id="carport",name="Carport",x=5.0,y=0,w=3.15,d=5.0,floor_material="keramik_batu_abu_existing",wall_color_hex="#EFE8DA",ceiling_h_m=3.0,enclosed=False,open_sides=["front","left_partial_ke_teras"],confidence="sedang (±0.3 m)"),
]
def op(room,wall,off,w,h,t,**k):
    d=dict(room_id=room,wall=wall,offset_m=off,width_m=w,height_m=h,type=t); d.update(k); return d
openings=[
 op("kamar_depan","front",0.75,0.8,1.2,"window",sill_m=0.9,connects_to_outside=True,note="jendela berteralis ke arah jalan; AC indoor di atasnya"),
 op("kamar_depan","right",0.5,0.8,1.8,"window",sill_m=0.3,connects_to="teras",note="jendela tinggi berteralis menghadap teras"),
 op("kamar_depan","right",5.05,0.85,2.05,"door",sill_m=0,connects_to="ruang_tamu",swing_into="kamar_depan",hinge="sisi belakang",note="pintu kamar depan"),
 op("kamar_depan","back",0.75,0.6,0.3,"window",sill_m=2.3,connects_to="kamar_belakang",note="roster/lubang angin dekat plafon, kemungkinan tembus ke kamar belakang (perlu dicek); rekomendasi: tutup akrilik bening yang bisa dibuka"),
 op("ruang_tamu","front",0.15,0.35,1.8,"window",sill_m=0.3,connects_to="teras",note="jendela mati sempit kiri pintu"),
 op("ruang_tamu","front",0.7,1.3,2.1,"door",sill_m=0,connects_to="teras",swing_into="ruang_tamu",note="pintu utama dua daun @65 cm"),
 op("ruang_tamu","front",2.1,0.5,1.8,"window",sill_m=0.3,connects_to="teras",note="jendela jungkit kanan pintu"),
 op("ruang_tamu","back",0.1,0.9,2.1,"door",sill_m=0,connects_to="ruang_tengah",leaf=False,note="bukaan tanpa daun pintu (sekarang bertirai), segaris dengan pintu utama dan pintu dapur"),
 op("ruang_tengah","left",0.15,0.85,2.05,"door",sill_m=0,connects_to="kamar_belakang",swing_into="kamar_belakang",hinge="sisi depan",note="pintu kamar belakang, berhadapan lurus dengan pintu ruang belakang"),
 op("ruang_tengah","right",0.1,0.85,2.05,"door",sill_m=0,connects_to="ruang_belakang",swing_into="ruang_tengah",hinge="sisi depan",note="pintu ke ruang belakang"),
 op("ruang_tengah","back",0.1,0.85,2.05,"door",sill_m=0,connects_to="dapur",swing_into="ruang_tengah",hinge="sisi kiri",note="pintu dapur"),
 op("ruang_belakang","front",0.3,0.85,2.05,"door",sill_m=0,connects_to="carport",swing_into="ruang_belakang",hinge="sisi kiri",note="pintu samping dari carport; 2 lubang angin di atasnya"),
 op("ruang_belakang","front",1.6,0.75,1.2,"window",sill_m=0.9,connects_to="carport",note="jendela berteralis ke carport; 2 lubang angin di atasnya"),
 op("ruang_belakang","back",0.7,1.7,0.25,"window",sill_m=2.3,connects_to="kamar_mandi",note="3 glass block tinggi (digambar sebagai satu pita); dengan kamar mandi sepanjang ini, glass block menghadap kamar mandi (meminjam cahaya, bukan ventilasi)"),
 op("dapur","back",2.3,1.2,0.25,"window",sill_m=2.3,connects_to_outside=True,note="3 glass block tinggi di atas bak cuci (digambar sebagai satu pita)"),
 op("kamar_mandi","left",0.1,0.7,2.0,"door",sill_m=0,connects_to="dapur",swing_into="kamar_mandi",note="pintu kamar mandi di ujung kanan dapur"),
]
F=[]
def f(room,name,x,y,w,d,h,rot,col,**k):
    e=dict(room_id=room,name=name,x=x,y=y,w_cm=w,d_cm=d,h_cm=h,rotation_deg=rot,color_hex=col); e.update(k); F.append(e)
JATI="#B5783C"; OAK="#D8B98A"; LIN="#E6DCCB"; PUT="#F7F4EE"; ROT="#C9A46B"; ARANG="#3B3F3A"; DAUN="#5E7A5A"; SS="#B8BABD"
# TERAS
f("teras","Bangku jati 3 dudukan",3.75,0.40,150,60,85,0,JATI,existing=True)
f("teras","Kursi jati A",2.69,1.02,60,60,85,90,JATI,existing=True)
f("teras","Kursi jati B",2.69,1.62,60,60,85,90,JATI,existing=True)
f("teras","Meja sudut kecil + lampu/tanaman",2.61,0.31,45,45,50,0,JATI)
f("teras","Pot tanaman tinggi",4.75,0.30,35,35,110,0,DAUN)
# RUANG TAMU
f("ruang_tamu","Sofa 3 dudukan kain linen",4.525,3.95,80,180,80,270,LIN)
f("ruang_tamu","Meja samping",4.72,2.78,40,40,50,0,OAK)
f("ruang_tamu","Tanaman lantai",4.74,2.27,35,35,120,0,DAUN)
f("ruang_tamu","Rak TV gantung 150 cm",2.525,3.7,30,150,35,90,OAK,z_m=0.3)
f("ruang_tamu","TV (dinding)",2.405,3.7,6,97,57,90,"#1A1A1A",z_m=1.0,wall_mounted=True)
f("ruang_tamu","Karpet jute polos 150x220",3.4,3.95,150,220,1,0,ROT,rug=True)
f("ruang_tamu","Bangku simpan 120 cm (sajadah/mukena)",4.2,5.75,120,35,45,180,OAK)
f("ruang_tamu","Kaligrafi Al-Quran (titik fokus)",4.2,5.91,100,3,70,180,"#6B4A2B",z_m=1.35,wall_mounted=True,existing=True)
f("ruang_tamu","Galeri foto keluarga 3x3 bingkai",4.91,3.95,3,180,90,270,"#2B2B2B",z_m=1.15,wall_mounted=True)
f("ruang_tamu","Lampu lantai 3000K",4.75,5.2,30,30,150,0,ARANG)
# RUANG TENGAH
f("ruang_tengah","Lemari serbaguna/pantry kering 150 cm pintu geser",4.175,9.725,150,40,220,180,PUT)
f("ruang_tengah","Bangku kayu ukir + bantalan",4.65,8.3,55,150,85,270,"#8A5530",existing=True)
f("ruang_tengah","Cermin dinding 60x150",2.39,8.2,3,60,150,90,"#DDE3E3",z_m=0.4,wall_mounted=True)
f("ruang_tengah","Foto pasangan bingkai putih (dinding depan)",3.7,6.09,70,3,90,0,"#FFFFFF",z_m=1.1,wall_mounted=True,existing=True)
# KAMAR DEPAN
f("kamar_depan","Tempat tidur 160x200 berlaci (kepala di dinding kiri)",1.15,0.92,200,160,45,90,OAK)
f("kamar_depan","Ambalan samping tempat tidur",0.175,1.92,20,35,4,90,OAK,z_m=0.55,wall_mounted=True)
f("kamar_depan","Meja rias slim + cermin",2.025,2.1,40,70,76,270,OAK)
f("kamar_depan","Stool rias",1.6,2.1,35,35,45,0,LIN)
f("kamar_depan","Meja kerja 120x60 + cable tray",1.925,3.1,60,120,74,270,OAK)
f("kamar_depan","Kursi kerja ergonomis",1.345,3.1,55,55,120,90,"#8E9093",existing=True)
f("kamar_depan","Monitor ultrawide",2.08,3.1,20,82,45,270,"#1A1A1A",z_m=0.74,existing=True,on_furniture=True)
f("kamar_depan","Kabinet teknis berventilasi (stabilizer, router)",2.05,4.05,35,60,70,270,OAK)
f("kamar_depan","Lemari pakaian pintu geser 180 cm",0.395,5.0,60,180,220,90,PUT)
f("kamar_depan","Cermin badan 50x160",1.0,5.91,50,3,160,180,"#DDE3E3",z_m=0.3,wall_mounted=True)
f("kamar_depan","Ambalan buku 120 cm x2",0.175,2.9,20,120,4,90,OAK,z_m=1.5,wall_mounted=True)
f("kamar_depan","AC indoor",1.15,0.175,80,20,28,0,"#FFFFFF",z_m=2.3,wall_mounted=True,existing=True)
# KAMAR BELAKANG
f("kamar_belakang","Tempat tidur 160x200 (rangka kayu lama, kepala di dinding kanan)",1.15,9.1,200,160,45,270,"#8A5530",existing=True)
f("kamar_belakang","Lemari pakaian pintu geser 180 cm",0.395,7.0,60,180,220,90,PUT)
f("kamar_belakang","Meja rias 80 cm + cermin + ambalan",2.025,7.55,40,80,76,270,OAK)
f("kamar_belakang","Stool rias",1.675,7.55,30,30,45,0,LIN)
f("kamar_belakang","Karpet polos 120x150",1.25,7.7,120,150,1,0,LIN,rug=True)
f("kamar_belakang","Rel gantungan tas (dinding kiri)",0.105,8.1,6,30,10,90,ARANG,z_m=1.5,wall_mounted=True)
f("kamar_belakang","Exhaust fan plafon + ducting",1.15,8.0,30,30,10,0,"#FFFFFF",z_m=2.75,wall_mounted=True)
# DAPUR
f("dapur","Meja dapur sisi kiri (lama, dilapis ulang) - rice cooker",0.375,10.6,60,105,85,90,"#EDEAE3",existing=True)
f("dapur","Meja sudut + kompor 2 tungku",0.825,11.425,150,60,85,180,"#EDEAE3",existing=True)
f("dapur","Meja persiapan",2.075,11.425,100,60,85,180,"#EDEAE3",existing=True)
f("dapur","Bak cuci + kabinet bawah",3.025,11.425,90,60,85,180,"#EDEAE3",existing=True)
f("dapur","Kulkas 2 pintu (dipindah dari ruang tengah)",3.8,11.4,60,65,170,180,SS,existing=True)
f("dapur","Tempat sampah pilah 2 x 25 L (injak, bertutup)",4.375,11.525,50,40,45,180,ARANG)
f("dapur","Cooker hood slim 60 cm",1.1,11.5,60,45,15,180,SS,z_m=1.6,wall_mounted=True)
f("dapur","Kabinet atas 100 cm",2.075,11.555,100,34,70,180,PUT,z_m=1.5,wall_mounted=True)
f("dapur","Rak piring gantung stainless 90 cm",3.025,11.585,90,28,60,180,SS,z_m=1.45,wall_mounted=True)
f("dapur","Kabinet atas aluminium sisi kiri",0.245,10.6,34,105,60,90,PUT,z_m=1.5,wall_mounted=True,existing=True)
f("dapur","Rel gantung + ambalan 15 cm (dinding depan)",1.55,10.15,160,15,60,0,SS,z_m=1.2,wall_mounted=True)
# KAMAR MANDI
f("kamar_mandi","Kloset",7.35,11.35,40,65,40,180,"#FFFFFF",existing=True,low_confidence=True)
f("kamar_mandi","Area shower",6.0,11.25,90,90,2,180,"#DDE3E3",rug=True,existing=True,low_confidence=True)
f("kamar_mandi","Exhaust fan plafon",6.6,10.9,25,25,10,0,"#FFFFFF",z_m=2.45,wall_mounted=True)
f("kamar_mandi","Rak sudut + gantungan handuk",4.86,11.55,15,30,60,90,SS,z_m=1.0,wall_mounted=True)
# RUANG BELAKANG
f("ruang_belakang","Lemari sepatu tertutup 120 cm",7.9,5.75,35,120,100,270,PUT)
f("ruang_belakang","Bangku sepatu (meja jati teras lama + bantalan)",6.95,5.325,100,50,45,0,JATI,existing=True)
f("ruang_belakang","Lemari utilitas tinggi (sapu, pel, setrika)",7.875,6.72,40,60,200,270,PUT)
f("ruang_belakang","Dispenser",5.255,8.0,36,34,130,90,"#FFFFFF",existing=True)
f("ruang_belakang","Rak galon 3 susun",5.265,8.42,38,38,110,90,ARANG)
f("ruang_belakang","Bangku banquette simpan 140 cm",7.85,8.2,45,140,45,270,OAK)
f("ruang_belakang","Meja makan 120x70",7.275,8.2,70,120,75,0,OAK)
f("ruang_belakang","Kursi makan 1",6.66,7.9,48,45,80,90,OAK)
f("ruang_belakang","Kursi makan 2",6.66,8.5,48,45,80,90,OAK)
f("ruang_belakang","Lemari serbaguna/laundry pintu geser 160 cm",5.9,9.7,160,45,200,180,PUT)
f("ruang_belakang","Keranjang laundry + jemuran lipat (parkir)",7.4,9.7,110,45,60,180,ROT)
f("ruang_belakang","Lampu gantung meja makan 3000K",7.275,8.2,35,35,30,0,ROT,z_m=1.55,wall_mounted=True)
f("ruang_belakang","Kotak meter/panel listrik (akses harus bebas)",5.105,7.35,6,50,50,90,"#DDDDDD",z_m=1.5,wall_mounted=True,existing=True)
# CARPORT
f("carport","Mobil",7.15,2.3,170,440,160,180,"#1A1A1A",existing=True)
f("carport","Tong sampah beroda 60-80 L bertutup (di bawah jendela ruang belakang)",6.55,4.72,50,40,95,180,"#3E5C4B")

WT=0.15; H=WT/2
INSET={r["id"]:(H,H,H,H) for r in rooms}   # kiri, depan, kanan, belakang
INSET["teras"]=(H,H,0,H); INSET["carport"]=(H,0,H,H)
def inner(r):
    l,fr,rt,bk=INSET[r["id"]]; return (r["x"]+l,r["y"]+fr,r["x"]+r["w"]-rt,r["y"]+r["d"]-bk)
R={r["id"]:r for r in rooms}
def rect(r): return (r["x"],r["y"],r["x"]+r["w"],r["y"]+r["d"])
def box(e): return (e["x"]-e["w_cm"]/200,e["y"]-e["d_cm"]/200,e["x"]+e["w_cm"]/200,e["y"]+e["d_cm"]/200)
def ov(A,B,eps=1e-6): return A[0]<B[2]-eps and B[0]<A[2]-eps and A[1]<B[3]-eps and B[1]<A[3]-eps
issues=[]
# 1 rooms don't overlap
for a,b in itertools.combinations(rooms,2):
    if ov(rect(a),rect(b)): issues.append(("ROOM OVERLAP",a["id"],b["id"]))
# 2 furniture inside room
for e in F:
    r=inner(R[e["room_id"]]); b=box(e)
    if b[0]<r[0]-1e-6 or b[1]<r[1]-1e-6 or b[2]>r[2]+1e-6 or b[3]>r[3]+1e-6: issues.append(("OUTSIDE",e["name"],b))
def floor(e): return not e.get("wall_mounted") and not e.get("rug") and not e.get("on_furniture")
# 3 furniture overlap
for a,b in itertools.combinations([e for e in F if floor(e)],2):
    if ov(box(a),box(b)): issues.append(("OVERLAP",a["name"],b["name"]))
# 4 openings within wall, door span within connects_to room
def span(o):
    r=R[o["room_id"]]; off=o["offset_m"]; w=o["width_m"]
    if o["wall"] in("front","back"):
        L=r["w"]; c=r["y"] if o["wall"]=="front" else r["y"]+r["d"]; return ("h",c,r["x"]+off,r["x"]+off+w,L)
    L=r["d"]; c=r["x"] if o["wall"]=="left" else r["x"]+r["w"]; return ("v",c,r["y"]+off,r["y"]+off+w,L)
for o in openings:
    k,c,a,b,L=span(o)
    if o["offset_m"]<0 or o["offset_m"]+o["width_m"]>L+1e-6: issues.append(("OPENING OUT OF WALL",o))
    ct=o.get("connects_to")
    if ct:
        q=rect(R[ct])
        if k=="h":
            okk = (abs(c-q[1])<1e-6 or abs(c-q[3])<1e-6) and a>=q[0]-1e-6 and b<=q[2]+1e-6
        else:
            okk = (abs(c-q[0])<1e-6 or abs(c-q[2])<1e-6) and a>=q[1]-1e-6 and b<=q[3]+1e-6
        if not okk: issues.append(("OPENING NOT ON SHARED WALL",o["room_id"],o["wall"],o["offset_m"],ct))
# 5 door clearance 0.85 both sides
for o in openings:
    if o["type"]!="door": continue
    k,c,a,b,L=span(o); dep=0.85
    Z=(a,c-dep,b,c+dep) if k=="h" else (c-dep,a,c+dep,b)
    for e in F:
        if floor(e) and ov(Z,box(e)): issues.append(("DOORBLOCK",o["room_id"],o["wall"],e["name"]))
# 6 routes with 0.8 m clear width (grid 5 cm)
RES=0.025; NX=int(8.15/RES)+1; NY=int(11.8/RES)+1
segs=[]
def add_seg(k,c,a,b): segs.append([k,c,a,b])
for r in rooms:
    x0,y0,x1,y1=rect(r)
    if r["enclosed"]:
        add_seg("h",y0,x0,x1); add_seg("h",y1,x0,x1); add_seg("v",x0,y0,y1); add_seg("v",x1,y0,y1)
add_seg("v",8.15,0,5.0)  # dinding kanan carport
add_seg("h",0.0,2.3,5.0)   # pagar depan teras
doors=[span(o) for o in openings if o["type"]=="door"]
def cut(segs,doors):
    out=[]
    for k,c,a,b in segs:
        parts=[(a,b)]
        for dk,dc,da,db,_ in doors:
            if dk==k and abs(dc-c)<1e-6:
                np=[]
                for pa,pb in parts:
                    if db<=pa or da>=pb: np.append((pa,pb)); continue
                    if da>pa: np.append((pa,da))
                    if db<pb: np.append((db,pb))
                parts=np
        out+= [(k,c,pa,pb) for pa,pb in parts if pb-pa>1e-6]
    return out
wsegs=cut(segs,doors)
def dbox(px,py,B):
    dx=max(B[0]-px,0,px-B[2]); dy=max(B[1]-py,0,py-B[3]); return math.hypot(dx,dy)
def dseg(px,py,s):
    k,c,a,b=s   # dinding tebal: persegi panjang as +- H
    B=(a,c-H,b,c+H) if k=="h" else (c-H,a,c+H,b)
    return dbox(px,py,B)
obst=[box(e) for e in F if floor(e)]
def free(px,py,rw,rf):
    if not any(r_[0]-1e-6<=px<=r_[2]+1e-6 and r_[1]-1e-6<=py<=r_[3]+1e-6 for r_ in map(rect,rooms)): return False
    if any(dseg(px,py,s)<rw for s in wsegs): return False
    if any(dbox(px,py,B)<rf for B in obst): return False
    return True
def route(p,q,rw,rf):
    def cell(pt): return (round(pt[0]/RES),round(pt[1]/RES))
    s,t=cell(p),cell(q); memo={}
    def fr(c):
        if c not in memo: memo[c]=free(c[0]*RES,c[1]*RES,rw,rf)
        return memo[c]
    if not fr(s) or not fr(t): return False
    dq=deque([s]); seen={s}
    while dq:
        c=dq.popleft()
        if c==t: return True
        for dx,dy in((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
            n=(c[0]+dx,c[1]+dy)
            if 0<=n[0]<NX and 0<=n[1]<NY and n not in seen and fr(n): seen.add(n); dq.append(n)
    return False
P=dict(gerbang=(5.7,0.3),teras=(3.6,1.4),tamu=(3.4,3.5),tengah=(3.0,8.0),dapur=(2.85,10.6),dapur_kiri=(1.2,10.6),km=(5.3,10.45),
 carport=(5.7,3.5),belakang=(5.9,7.0),makan=(5.94,9.0),kdepan=(1.3,5.3),kdepan_ranjang=(0.6,2.2),kbelakang=(1.3,6.6),kbelakang_ranjang=(1.1,7.875))
# clear width 0.80 m diukur dari muka dalam dinding (dinding tebal) dan dari furnitur; pintu KM 0.70 m dicek 0.68
routes=[("gerbang","teras",.40,.40),("teras","tamu",.40,.40),("tamu","tengah",.40,.40),("tengah","dapur",.40,.40),("dapur","dapur_kiri",.40,.40),
 ("dapur","km",.34,.40),("gerbang","carport",.40,.40),("carport","belakang",.40,.40),("belakang","tengah",.40,.40),("belakang","makan",.40,.40),
 ("tamu","kdepan",.40,.40),("kdepan","kdepan_ranjang",.40,.40),("tengah","kbelakang",.40,.40),("kbelakang","kbelakang_ranjang",.40,.40)]
rep=[]
for a,b,rw,rf in routes:
    okr=route(P[a],P[b],rw,rf); rep.append((a,b,okr))
    if not okr: issues.append(("ROUTE<0.8m",a,b))
# 7 kitchen aisle sensitivity: kedalaman dapur 1.5 m
aisle_nom=round((1.8-WT)-0.6,2); aisle_min=1.5-0.6; aisle_fridge_min=1.5-0.65
if __name__=="__main__":
    for i in issues: print(i)
    print("ALL OK" if not issues else "ISSUES",len(issues))
    for r_ in rep: print(r_)
    print("aisle nominal",aisle_nom,"min",aisle_min,"at fridge min",round(aisle_fridge_min,2))
spec=dict(name="SCENE_SPEC",units="meter untuk x,y,w,d,offset,width,height; cm untuk w_cm,d_cm,h_cm",
 conventions=dict(origin="sudut kiri-depan rumah pada dinding yang menghadap jalan",x="ke kanan sepanjang fasad",y="masuk ke dalam rumah (menjauhi jalan)",
  rooms="x,y = sudut kiri-depan ruang; w = lebar searah x; d = kedalaman searah y; garis ruang = AS dinding (tebal dinding 0.15 m, 0.075 m ke tiap sisi); teras dan carport tidak berdinding di sisi open_sides",
  openings="front = sisi y minimum (arah jalan), back = y maksimum, left = x minimum, right = x maksimum; offset_m dari sudut x-minimum (front/back) atau y-minimum (left/right) ruang ke tepi awal bukaan; sill_m = tinggi ambang dari lantai; tiap bukaan ditulis SATU kali, ruang seberangnya ada di connects_to",
  furniture="x,y = TITIK TENGAH tapak (absolut); w_cm = ukuran searah sumbu x, d_cm = ukuran searah sumbu y, SUDAH dalam posisi akhir (kotak sejajar sumbu - JANGAN diputar lagi); rotation_deg HANYA arah hadap muka benda: 0 = menghadap +y (ke belakang rumah), 90 = +x (kanan), 180 = -y (ke jalan), 270 = -x (kiri); z_m = tinggi sisi bawah dari lantai (default 0); wall_mounted/rug/on_furniture = bukan penghalang lantai",
  wall_thickness_m=0.15,
  wall_note="muka dalam dinding = 0.075 m di dalam garis ruang; semua furnitur sudah ditempatkan terhadap muka dalam (benda dinding menempel tepat di muka dalam)",
  total_footprint_m=dict(w=8.15,d=11.8),
  unknown_area="sisa x 7.8-8.15, y 10.0-11.8 (0.35 m di kanan kamar mandi) tidak dimodelkan sebagai ruang"),
 rooms=rooms,openings=openings,furniture=F)
json.dump(spec,open("scene_spec.json","w"),ensure_ascii=False,indent=1)
