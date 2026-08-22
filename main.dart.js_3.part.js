((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,E,F,C={afL:function afL(){},
b3c(){return new C.pd(null)},
pd:function pd(d){this.a=d},
Jf:function Jf(d,e,f){var _=this
_.d=d
_.r=_.f=_.e=!1
_.w=e
_.x=f
_.c=_.a=_.y=null},
aAA:function aAA(d){this.a=d},
aAv:function aAv(d){this.a=d},
aAw:function aAw(d,e){this.a=d
this.b=e},
aAx:function aAx(d){this.a=d},
aAy:function aAy(d,e){this.a=d
this.b=e},
aAz:function aAz(d){this.a=d},
aAB:function aAB(){},
aAs:function aAs(d){this.a=d},
aAt:function aAt(d,e){this.a=d
this.b=e},
aAu:function aAu(d){this.a=d},
aAr:function aAr(){},
aAI:function aAI(d,e,f){this.a=d
this.b=e
this.c=f},
aAL:function aAL(d,e){this.a=d
this.b=e},
aAJ:function aAJ(d){this.a=d},
aAK:function aAK(d){this.a=d},
aAM:function aAM(d){this.a=d},
aAN:function aAN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAD:function aAD(){},
aAE:function aAE(d,e){this.a=d
this.b=e},
aAG:function aAG(){},
aAF:function aAF(d,e,f){this.a=d
this.b=e
this.c=f},
aAH:function aAH(d,e,f){this.a=d
this.b=e
this.c=f},
aAC:function aAC(d){this.a=d},
Rd(){var w=0,v=A.r(x.a),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$Rd=A.t(function(c5,c6){if(c5===1){s.push(c6)
w=t}for(;;)switch(w){case 0:c3=$.DD
if(c3!=null){u=c3
w=1
break}w=$.afX?3:4
break
case 3:c3=x.z
case 5:if(!$.afX){w=6
break}w=7
return A.j(A.hO(B.tI,null,c3),$async$Rd)
case 7:w=5
break
case 6:c3=$.DD
u=c3==null?A.b([],x.s):c3
w=1
break
case 4:$.afX=!0
t=9
w=12
return A.j($.qH().Nc("assets/mugefci_2026.csv"),$async$Rd)
case 12:q=c6
A.bA().$1("LocalDictService: loaded CSV, length="+J.b8(q))
c3=x.z
p=D.R8.wA(q,c3)
b6=J.b8(p)
b7=J.b8(p)!==0?J.iX(p).length:0
A.bA().$1("LocalDictService: parsed rows="+b6+", firstRowCols="+b7)
if(J.b8(p)!==0&&J.iX(p).length===1&&J.vm(q,";")){p=D.R9.wA(q,c3)
A.bA().$1("LocalDictService: fallback semicolon parsed rows="+J.b8(p))}if(J.b8(p)===0){c3=A.b([],x.s)
$.DD=c3
u=c3
r=[1]
w=10
break}o=1
n=J.iX(p)
if(J.b8(n)!==0){c3=n
b6=A.a_(c3).i("a8<1,m>")
b8=A.a3(new A.a8(c3,new C.afY(),b6),b6.i("aE.E"))
m=b8
l=A.b(["nom_commercial","d\xe9nomination","denomination","d\xe9nomination_commerciale","denomination_commerciale","nom","name"],x.s)
for(c3=l,b6=c3.length,b9=0;b9<c3.length;c3.length===b6||(0,A.E)(c3),++b9){k=c3[b9]
j=J.aOK(m,k)
if(!J.d(j,-1)){o=j
break}}A.bA().$1("LocalDictService: headers="+A.k(m)+", denomIndex="+A.k(o))}c3=x.N
i=A.aW(c3)
for(h=0;h<J.b8(p);++h){g=J.U(p,h)
if(J.b8(g)<=o)continue
f=B.c.bD(J.aV(J.U(g,o)))
if(J.b8(f)===0)continue
if(J.d(h,0)){e=f.toLowerCase()
if(J.d(e,"nom_commercial")||J.d(e,"d\xe9nomination")||J.d(e,"denomination")||J.d(e,"d\xe9nomination_commerciale")||J.d(e,"denomination_commerciale")||J.d(e,"nom")||J.d(e,"name")){A.bA().$1('LocalDictService: skipping header row value="'+A.k(f)+'"')
continue}}J.d1(i,f)}A.bA().$1("LocalDictService: extracted set size="+i.a)
b6=i
c0=A.a3(b6,A.n(b6).c)
d=c0
if(J.b8(d)===0){a0=A.aW(c3)
a1=D.rz.bt(q)
a2=!1
a3=A.b4('^\\s*"[^"]*",\\s*"([^"]*)"',!0,!1,!1)
for(b6=a1,b7=b6.length,b9=0;b9<b6.length;b6.length===b7||(0,A.E)(b6),++b9){a4=b6[b9]
if(!a2){a2=!0
continue}a5=a3.jz(a4)
if(a5!=null){c1=a5.b[1]
c1.toString
a6=B.c.bD(c1)
if(J.b8(a6)!==0)J.d1(a0,a6)}}A.bA().$1("LocalDictService: fallback regex extracted="+a0.a)
if(a0.a!==0){b6=a0
c0=A.a3(b6,A.n(b6).c)
d=c0}}if(J.b8(d)===0){a7=A.aW(c3)
a8=D.rz.bt(q)
for(a9=0;a9<J.b8(a8);++a9){b0=B.c.bD(J.U(a8,a9))
if(J.b8(b0)===0)continue
if(J.d(a9,0)){c3=b0.toLowerCase()
c3=A.Ak(c3,"nom_commercial",0)}else c3=!1
if(c3)continue
b1=J.aOK(b0,",")
b2=J.b_b(b0,",",b1+1)
if(J.d(b1,-1)||J.d(b2,-1))continue
b3=B.c.bD(J.b_l(b0,b1+1,b2))
c3=A.b4('^"|"$',!0,!1,!1)
b4=B.c.bD(A.bs(b3,c3,""))
if(J.b8(b4)!==0)J.d1(a7,b4)}A.bA().$1("LocalDictService: fallback comma split extracted="+a7.a)
if(a7.a!==0){c3=a7
c0=A.a3(c3,A.n(c3).c)
d=c0}}J.vn(d,new C.afZ())
c3=d
$.DD=c3
$.aLk=null
c3.toString
u=c3
r=[1]
w=10
break
r.push(11)
w=10
break
case 9:t=8
c4=s.pop()
b5=A.Z(c4)
$.aLk=J.aV(b5)
c3=A.b([],x.s)
$.DD=c3
u=c3
r=[1]
w=10
break
r.push(11)
w=10
break
case 8:r=[2]
case 10:t=2
$.afX=!1
w=r.pop()
break
case 11:case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$Rd,v)},
Re(){var w=0,v=A.r(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Re=A.t(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.j($.qH().lm(0,"assets/mugefci_2026.csv"),$async$Re)
case 7:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
t=9
w=12
return A.j($.qH().Nc("AssetManifest.json"),$async$Re)
case 12:r=e
q=B.an.l6(0,r,null)
o=J.h8(q,"assets/mugefci_2026.csv")||J.h8(q,"assets/mugefci_2026.csv")
u=o
w=1
break
t=3
w=11
break
case 9:t=8
m=s.pop()
u=!1
w=1
break
w=11
break
case 8:w=3
break
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$Re,v)},
b2Z(d){var w,v,u
if(d.length===0)return A.b([],x.s)
w=C.aRb(d)
v=$.DD
if(v==null)v=A.b([],x.s)
u=A.a_(v).i("aL<1>")
u=A.a3(new A.aL(v,new C.ag_(w),u),u.i("w.E"))
return u},
aRb(d){var w=A.b4("[\xe0\xe1\xe2\xe4]",!0,!1,!1),v=A.bs(d.toLowerCase(),w,"a")
w=A.b4("[\xe7]",!0,!1,!1)
v=A.bs(v,w,"c")
w=A.b4("[\xe9\xe8\xea\xeb]",!0,!1,!1)
v=A.bs(v,w,"e")
w=A.b4("[\xee\xef\xec\xed]",!0,!1,!1)
v=A.bs(v,w,"i")
w=A.b4("[\xf4\xf6\xf2\xf3]",!0,!1,!1)
v=A.bs(v,w,"o")
w=A.b4("[\xf9\xfb\xfc\xfa]",!0,!1,!1)
v=A.bs(v,w,"u")
v=A.bs(v,"\xff","y")
return A.bs(v,"\u0153","oe")},
afY:function afY(){},
afZ:function afZ(){},
ag_:function ag_(d){this.a=d},
N5(d,e){var w=0,v=A.r(x.H),u
var $async$N5=A.t(function(f,g){if(f===1)return A.o(g,v)
for(;;)switch(w){case 0:u=$.aJB()
w=2
return A.j(u.tK("search_medication",A.a2(["medication_name",e,"commune",d.length!==0?d:"Inconnue"],x.N,x.K)),$async$N5)
case 2:return A.p(null,v)}})
return A.q($async$N5,v)},
S4(d){var w=0,v=A.r(x.H),u,t,s,r,q,p
var $async$S4=A.t(function(e,f){if(e===1)return A.o(f,v)
for(;;)switch(w){case 0:w=3
return A.j(A.ls(),$async$S4)
case 3:t=x.z
s=x.C.a($.oe().lX("ordonnance",!1,t))
r=$.Aq()
q=A.n0(r.a,x.N,x.S)
p=d.toUpperCase()
if(q.ah(0,p)){w=1
break}q.m(0,p,1)
r.sq(0,q)
w=4
return A.j(s.u_(A.a2(["items",q],t,s.$ti.c)),$async$S4)
case 4:case 1:return A.p(u,v)}})
return A.q($async$S4,v)},
S9(d){var w=0,v=A.r(x.H),u,t,s,r,q,p,o,n
var $async$S9=A.t(function(e,f){if(e===1)return A.o(f,v)
for(;;)switch(w){case 0:w=3
return A.j(A.ls(),$async$S9)
case 3:t=x.z
s=x.C.a($.oe().lX("ordonnance",!1,t))
r=$.Aq()
q=A.n0(r.a,x.N,x.S)
p=d.toUpperCase()
if(!q.ah(0,p)){w=1
break}o=q.h(0,p)
o.toString
n=o-1
if(n<=0)q.F(0,p)
else q.m(0,p,n)
r.sq(0,q)
w=4
return A.j(s.u_(A.a2(["items",q],t,s.$ti.c)),$async$S9)
case 4:case 1:return A.p(u,v)}})
return A.q($async$S9,v)}},D
J=c[1]
A=c[0]
B=c[2]
G=c[4]
E=c[5]
F=c[7]
C=a.updateHolder(c[3],C)
D=c[6]
C.afL.prototype={
bt(d){var w,v,u,t,s=A.b([],x.s),r=d.length
for(w=0,v=0,u=0;u<r;++u,v=t){t=d.charCodeAt(u)
if(t!==13){if(t!==10)continue
if(v===13){w=u+1
continue}}s.push(B.c.T(d,w,u))
w=u+1}if(w<r)s.push(B.c.T(d,w,r))
return s}}
C.pd.prototype={
aj(){var w=x.s
return new C.Jf(new A.pW(B.iL,$.aM()),A.b([],w),A.b([],w))}}
C.Jf.prototype={
au(){var w=this
w.aL()
A.bA().$1("[MedPriceSearchScreen] initState START")
w.vg()
w.d.a_(0,w.galC())
A.ls()
A.bA().$1("[MedPriceSearchScreen] initState END")},
alD(){var w=this.y
if(w!=null)w.aG(0)
this.y=A.ct(B.tF,new C.aAA(this))},
w2(d){return this.aop(d)},
aop(d){var w=0,v=A.r(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$w2=A.t(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=$.ex().b
g===$&&A.a()
q=g
p=null
t=4
w=7
return A.j(q.iV("dictionnaire_medicaments").qs(0).a2K("nom_commercial.ilike."+d+"%,dci.ilike."+d+"%").Na(20),$async$w2)
case 7:p=a1
t=2
w=6
break
case 4:t=3
f=s.pop()
t=9
w=12
return A.j(q.iV("medicaments").qs(0).a2K("denomination.ilike."+d+"%,nom_commercial.ilike."+d+"%").Na(20),$async$w2)
case 12:p=a1
t=3
w=11
break
case 9:t=8
e=s.pop()
g=A.b([],x.s)
u=g
w=1
break
w=11
break
case 8:w=3
break
case 11:w=6
break
case 3:w=2
break
case 6:n=A.b([],x.s)
for(g=J.aZ(p),m=x.f;g.v();){l=g.gJ(g)
if(!m.b(l))continue
k=J.al(l)
j=k.h(l,"nom_commercial")
if(j==null)j=k.h(l,"dci")
if(j==null)j=k.h(l,"denomination")
if(j==null)j=k.h(l,"D\xe9nomination")
if(j==null)j=k.h(l,"Denomination")
k=j==null?k.h(l,"D\xe9nomination_commerciale"):j
i=B.c.bD(J.aV(k==null?"":k))
if(i.length!==0)n.push(i)}if(n.length!==0){h=A.li(r.w,x.N)
h.M(0,n)
g=A.a3(h,A.n(h).c)
B.b.ef(g,new C.aAB())
r.w=g}u=n
w=1
break
case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$w2,v)},
vg(){var w=0,v=A.r(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$vg=A.t(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:A.bA().$1("[MedPriceSearchScreen] _fetchMedicines START")
r.O(new C.aAs(r))
t=4
A.bA().$1("[MedPriceSearchScreen] Calling LocalDictService.getAllMedicines()")
w=7
return A.j(C.Rd(),$async$vg)
case 7:q=e
A.bA().$1("[MedPriceSearchScreen] getAllMedicines returned "+J.b8(q)+" items")
r.O(new C.aAt(r,q))
A.bA().$1("[MedPriceSearchScreen] _fetchMedicines SUCCESS, _allMeds.length="+J.b8(r.w))
w=J.fM(q)&&r.c!=null?8:9
break
case 8:A.bA().$1("[MedPriceSearchScreen] Items empty, checking asset availability")
w=10
return A.j(C.Re(),$async$vg)
case 10:p=e
if(r.c==null){w=1
break}l=$.aLk
o=l==null?"":l
n=p?'CSV present mais aucune donnee trouvee. Verifiez la colonne "nom_commercial". '+A.k(o):"Asset CSV introuvable. Verifiez pubspec.yaml et redemarrez l'application. "+A.k(o)
A.bA().$1("[MedPriceSearchScreen] Asset check: present="+A.k(p)+", msg="+A.k(n))
r.c.a9(x.q).f.cX(A.ya(null,null,null,null,null,B.K,null,A.ag(n,null,null,null,null,null,null),null,B.ar,null,null,null,null,null,null,null,null,null,null))
case 9:t=2
w=6
break
case 4:t=3
i=s.pop()
m=A.Z(i)
A.bA().$1("[MedPriceSearchScreen] _fetchMedicines ERROR: "+A.k(m))
r.O(new C.aAu(r))
j=r.c
if(j!=null)j.a9(x.q).f.cX(A.ya(null,null,null,null,null,B.K,null,A.ag("Erreur de chargement des medicaments: "+A.k(m),null,null,null,null,null,null),null,B.ar,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:A.bA().$1("[MedPriceSearchScreen] _fetchMedicines END")
case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$vg,v)},
abL(d){return"Valider le panier ("+A.k(J.aOH(J.aK2(d),0,new C.aAr()))+")"},
l(){A.bA().$1("[MedPriceSearchScreen] dispose")
var w=this.y
if(w!=null)w.aG(0)
w=this.d
w.R$=$.aM()
w.S$=0
this.aH()},
L(d){var w,v,u,t,s,r,q,p,o=null
A.bA().$1("[MedPriceSearchScreen] build START")
try{w=A.V(d)
v=w.ax.a===B.W
u=new C.aAI(this,w,v)
r=v?w.fx:B.h
q=v?w.fx:B.h
r=A.pE(A.a6l(o,!1,q,!0,0,A.hQ(o,o,A.cv(B.i0,D.hJ,o,o),o,o,new C.aAM(d),o,o,o,o,o),o,A.ag("Prix des m\xe9dicaments",o,o,o,A.b0(o,o,D.hJ,o,o,o,o,o,o,o,o,A.d6(d,16,18,20),o,o,B.G,o,o,!0,o,o,o,o,o,o,o,o),o,o),o),r,A.h0(!0,new A.bC(new A.aa(A.dp(d,16,20,24),16,A.dp(d,16,20,24),16),new A.ku($.Aq(),new C.aAN(this,v,w,u),o,o,x.m),o),B.a9,!0),o)
return r}catch(p){t=A.Z(p)
s=A.aB(p)
A.bA().$1("[MedPriceSearchScreen] build ERROR: "+A.k(t))
A.bA().$1("[MedPriceSearchScreen] build STACK: "+A.k(s))
r=A.pE(o,B.h,A.eR(new A.bC(B.jI,A.bS(A.b([A.cv(D.TE,B.e_.b7(0.6),o,40),B.al,A.ag("Erreur d'affichage",o,o,o,D.aeO,B.ae,o),B.aY,A.ag(A.k(t),o,o,o,D.afJ,B.ae,o)],x.p),B.w,B.m,B.a6),o),o,o),o)
return r}}}
var z=a.updateTypes(["~()","pk(R)"])
C.aAA.prototype={
$0(){var w=0,v=A.r(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$$0=A.t(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=B.c.bD(m.d.a.a)
A.bA().$1("[MedPriceSearchScreen] _onQueryChanged: q='"+A.k(l)+"', _allMeds.length="+J.b8(m.w))
if(J.b8(l)===0){m.O(new C.aAv(m))
w=1
break}o=C.b2Z(l)
if(o.length!==0){m.O(new C.aAw(m,o))
A.bA().$1(y.b+J.b8(m.x)+" (local)")
w=1
break}m.O(new C.aAx(m))
t=4
w=7
return A.j(m.w2(l),$async$$0)
case 7:q=e
if(m.c==null){w=1
break}m.O(new C.aAy(m,q))
A.bA().$1(y.b+J.b8(m.x)+" (supabase)")
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.Z(k)
A.bA().$1("[MedPriceSearchScreen] Supabase search error: "+A.k(p))
if(m.c==null){w=1
break}m.O(new C.aAz(m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$$0,v)},
$S:6}
C.aAv.prototype={
$0(){var w=this.a
w.x=A.dZ(w.w,!0,x.N)
w.r=w.f=!1},
$S:0}
C.aAw.prototype={
$0(){var w=this.a
w.x=this.b
w.r=w.f=!1},
$S:0}
C.aAx.prototype={
$0(){var w=this.a
w.f=!0
w.r=!1
w.x=A.b([],x.s)},
$S:0}
C.aAy.prototype={
$0(){var w=this.a,v=this.b
w.x=v
w.f=!1
w.r=J.fM(v)},
$S:0}
C.aAz.prototype={
$0(){var w=this.a
w.x=A.b([],x.s)
w.f=!1
w.r=!0},
$S:0}
C.aAB.prototype={
$2(d,e){return B.c.aT(d.toLowerCase(),e.toLowerCase())},
$S:245}
C.aAs.prototype={
$0(){this.a.e=!0},
$S:0}
C.aAt.prototype={
$0(){var w=this.a,v=this.b
w.w=v
w.x=A.dZ(v,!0,x.N)
w.e=!1},
$S:0}
C.aAu.prototype={
$0(){this.a.e=!1},
$S:0}
C.aAr.prototype={
$2(d,e){return d+e},
$S:90}
C.aAI.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
A.bA().$1("[MedPriceSearchScreen] buildItemRow: "+e+", isSelected="+f)
u=this.b.ax
t=A.aI(16)
s=this.c
r=A.b([new A.d4(0,B.bl,s?B.p.b7(0.25):B.p.b7(0.05),B.pD,14)],x.V)
q=A.h9(s?B.bB:B.f5,1)
p=A.dp(d,10,12,14)
o=A.dp(d,10,12,14)
n=A.lC(d,36,40,44)
m=A.lC(d,36,40,44)
s=(f?B.cj:D.f3).b7(0.15)
l=f?D.TC:B.uH
k=f?B.cj:D.f3
n=A.bh(j,A.cv(l,k,j,A.lC(d,20,22,24)),B.l,j,j,new A.b2(s,j,j,j,j,j,B.bd),j,m,j,j,j,j,n)
m=u.k3
s=x.p
w=A.b([A.ag(e,j,j,j,A.b0(j,j,m,j,j,j,j,j,j,j,j,A.d6(d,14,15,16),j,j,B.G,j,j,!0,j,j,j,j,j,j,j,j),j,j)],s)
if(f)J.aJZ(w,A.b([D.acB,D.aiW],s))
v=A.b([n,B.eK,A.cI(A.bS(w,B.J,B.m,B.t),1)],s)
if(f)J.d1(v,A.hZ(D.ajF,new C.aAJ(e),A.arD(j,j,j,j,j,j,j,j,j,B.e_,j,j,D.tO,j,j,j,j,j,A.b0(j,j,j,j,j,j,j,j,j,j,j,A.d6(d,12,14,16),j,j,B.G,j,j,!0,j,j,j,j,j,j,j,j),j)))
if(!f)J.d1(v,A.hZ(D.aiC,new C.aAK(e),A.arD(j,j,j,j,j,j,j,j,j,B.cj,j,j,D.tO,j,j,j,j,j,A.b0(j,j,j,j,j,j,j,j,j,j,j,A.d6(d,12,14,16),j,j,B.G,j,j,!0,j,j,j,j,j,j,j,j),j)))
if(f)J.aJZ(v,A.b([B.lY,A.cv(B.ux,m.b7(0.6),j,j)],s))
return A.l8(j,A.bh(j,A.bP(v,B.w,B.m,B.t,0),B.l,j,j,new A.b2(u.k2,j,q,t,r,j,B.D),j,j,j,new A.aa(o,p,o,p),j,j,j),B.aG,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.aAL(this.a,e),j,j,j,j,j,j)},
$S:648}
C.aAL.prototype={
$0(){var w=0,v=A.r(x.H),u=this,t,s
var $async$$0=A.t(function(d,e){if(d===1)return A.o(e,v)
for(;;)switch(w){case 0:s=u.b
A.bA().$1("[MedPriceSearchScreen] Item tapped: "+s)
w=2
return A.j(E.lF(!0,!1,s,u.a.d.a.a),$async$$0)
case 2:t=$.tu
C.N5(t==null?"":t,s)
return A.p(null,v)}})
return A.q($async$$0,v)},
$S:6}
C.aAJ.prototype={
$0(){var w=0,v=A.r(x.H),u=this
var $async$$0=A.t(function(d,e){if(d===1)return A.o(e,v)
for(;;)switch(w){case 0:w=2
return A.j(C.S9(u.a.toUpperCase()),$async$$0)
case 2:return A.p(null,v)}})
return A.q($async$$0,v)},
$S:6}
C.aAK.prototype={
$0(){C.S4(this.a.toUpperCase())},
$S:0}
C.aAM.prototype={
$0(){return A.ck(this.a,!1).de()},
$S:0}
C.aAN.prototype={
$3(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=J.al(a0)
A.bA().$1("[MedPriceSearchScreen] ValueListenableBuilder rebuilt, selectedItems.length="+e.gA(a0))
u=x.p
w=A.b([],u)
if(e.gbO(a0))J.d1(w,A.hQ(f,f,D.Ui,f,f,new C.aAD(),f,f,f,f,f))
J.d1(w,B.h9)
w=A.bP(w,B.w,B.m,B.t,0)
t=A.ag("Besoin d'aide avec vos produits ?",f,f,f,A.b0(f,f,D.hJ,f,f,f,f,f,f,f,f,A.d6(d,18,20,22),f,f,B.G,f,f,!0,f,-0.3,f,f,f,f,f,f),B.ae,f)
s=A.d6(d,14,16,18)
s=A.ag("Cliquez juste en dessous",f,f,f,A.b0(f,f,A.V(d).ax.a===B.W?B.a2:B.f6,f,f,f,f,f,f,f,f,s,f,f,B.Z,f,f,!0,f,f,f,f,f,f,f,f),B.ae,f)
r=g.b
q=r?B.tq:B.t7
p=r?2:6
o=A.aI(22)
n=r?B.p.b7(0.25):D.f3.b7(0.08)
m=g.a
l=A.b0(f,f,r?B.no:B.f6,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
k=A.dp(d,14,16,18)
j=A.dp(d,14,16,18)
i=A.aI(22)
r=r?B.dM:B.y
l=A.aLa(f,f,f,new A.aa(k,j,k,j),f,f,f,f,!0,new A.fe(4,i,new A.aR(r,1,B.v,-1)),f,f,f,f,f,B.y,!0,f,f,f,f,new A.fe(4,A.aI(22),D.Ns),f,f,f,f,f,f,f,f,l,"Ex: Paracetamol 500mg (saisissez un nom)",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.Uu,f,f,f,f,f,f,f,f,f,f,f,f)
r=g.c
i=r.ok
j=i.z
k=j==null
h=k?f:j.c1(r.ax.k3)
n=A.fd(!1,B.Q,!0,o,A.arI(m.d,l,f,f,new C.aAE(m,d),h,B.M0),B.l,q,p,f,n,f,f,f,B.bH)
if(m.e)r=B.j7
else if(m.f)r=B.j7
else if(m.r){r=r.ax
q=A.aI(20)
p=r.ry
if(p==null){p=r.p
if(p==null)p=r.k3}p=A.h9(p.b7(0.15),1)
o=r.d
o=(o==null?r.b:o).b7(0.7)
o=A.bh(f,A.cv(D.TI,r.b,f,28),B.l,f,f,new A.b2(o,f,f,f,f,f,B.bd),f,f,f,F.nO,f,f,f)
i=i.w
l=A.ag("D\xe9sol\xe9, m\xe9dicament introuvable pour le moment.",f,f,f,i==null?f:i.Ci(r.k3,B.G),B.ae,f)
i=A.ag("Nous travaillons \xe0 vous fournir une liste compl\xe8te.",f,f,f,k?f:j.c1(r.k3.b7(0.75)),B.ae,f)
r=A.eR(A.bh(f,A.bS(A.b([o,B.lZ,l,B.aY,i,B.eL,A.ag("Merci pour votre compr\xe9hension.",f,f,f,k?f:j.atE(r.k3.b7(0.75),B.jU),B.ae,f)],u),B.w,B.m,B.a6),B.l,f,f,new A.b2(r.k2,f,p,q,f,f,B.D),f,f,f,B.tV,f,f,f),f,f)}else if(J.fM(m.x)){q=i.w
r=A.eR(A.ag("Aucun medicament",f,f,f,q==null?f:q.Ci(r.ax.k3.b7(0.7),B.aH),f,f),f,f)}else{r=A.dp(d,2,4,4)
q=A.dp(d,8,10,12)
q=A.afT(new C.aAF(m,a0,g.d),J.b8(m.x),new A.aa(0,r,0,q),new C.aAG(),!1)
r=q}v=A.b([w,t,B.eL,s,B.am,n,B.al,A.cI(r,1)],u)
if(e.gbO(a0)){w=A.aI(30)
e=A.b([new A.d4(0,B.bl,D.f3.b7(0.4),B.fT,12)],x.V)
J.d1(v,new A.bC(new A.aa(0,12,0,4),new A.fa(B.a7,f,f,A.bh(f,A.fd(!1,B.Q,!0,f,A.ld(!1,A.aI(30),!0,A.bh(f,A.bP(A.b([D.U3,B.cD,A.ag(m.abL(a0),f,f,f,D.af0,f,f)],u),B.w,B.m,B.a6,0),B.l,f,f,f,f,f,f,D.Sx,f,f,f),f,!0,f,f,f,f,f,f,f,f,f,new C.aAH(m,a0,d),f,f,f,f,f),B.l,B.y,0,f,f,f,f,f,B.bH),B.l,f,f,new A.b2(f,f,f,w,e,D.Vu,B.D),f,f,f,f,f,f,f),f),f))}return A.bS(v,B.d9,B.m,B.t)},
$S:649}
C.aAD.prototype={
$0(){},
$S:0}
C.aAE.prototype={
$1(d){return this.a4r(d)},
a4r(d){var w=0,v=A.r(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$$1=A.t(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:A.bA().$1("[MedPriceSearchScreen] Search submitted: '"+d+"'")
p=s.a
r=J.fN(p.x)
u=3
w=6
return A.j(E.lF(r,!1,null,d),$async$$1)
case 6:o=$.tu
C.N5(o==null?"":o,d)
u=1
w=5
break
case 3:u=2
m=t.pop()
q=A.Z(m)
A.bA().$1("[MedPriceSearchScreen] Analytics error: "+A.k(q))
w=5
break
case 2:w=1
break
case 5:if(!r&&p.c!=null)s.b.a9(x.q).f.cX(D.acX)
return A.p(null,v)
case 1:return A.o(t.at(-1),v)}})
return A.q($async$$1,v)},
$S:127}
C.aAG.prototype={
$2(d,e){return B.dn},
$S:95}
C.aAF.prototype={
$2(d,e){var w=J.U(this.a.x,e),v=w.toUpperCase(),u=J.h8(this.b,v)
return this.c.$3(d,w,u)},
$S:650}
C.aAH.prototype={
$0(){var w=0,v=A.r(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.t(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.b
A.bA().$1("[MedPriceSearchScreen] Cart tapped, selectedItems="+A.k(o))
t=4
A.bA().$1("[MedPriceSearchScreen] Loading panier_validation library...")
w=7
return A.j(A.aNn("panier_validation",""),$async$$0)
case 7:A.bA().$1("[MedPriceSearchScreen] Library loaded, pushing PanierValidationScreen")
if(r.a.c==null){w=1
break}A.ck(r.c,!1).im(A.x7(new C.aAC(o),null,x.z))
A.bA().$1("[MedPriceSearchScreen] PanierValidationScreen pushed")
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.Z(n)
A.bA().$1("[MedPriceSearchScreen] Cart error: "+A.k(q))
if(r.a.c!=null)r.c.a9(x.q).f.cX(A.ya(null,null,null,null,null,B.K,null,A.ag("Erreur: "+A.k(q),null,null,null,null,null,null),null,B.ar,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.p(u,v)
case 2:return A.o(s.at(-1),v)}})
return A.q($async$$0,v)},
$S:6}
C.aAC.prototype={
$1(d){A.aN4("panier_validation")
return G.b3O(A.n0(this.a,x.N,x.S))},
$S:z+1}
C.afY.prototype={
$1(d){return J.aV(d).toLowerCase()},
$S:40}
C.afZ.prototype={
$2(d,e){return B.c.aT(d.toLowerCase(),e.toLowerCase())},
$S:245}
C.ag_.prototype={
$1(d){return B.c.b2(C.aRb(d),this.a)},
$S:11};(function installTearOffs(){var w=a._instance_0u
w(C.Jf.prototype,"galC","alD",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.afL,A.Gq)
w(C.pd,A.a5)
w(C.Jf,A.ai)
v(A.w2,[C.aAA,C.aAv,C.aAw,C.aAx,C.aAy,C.aAz,C.aAs,C.aAt,C.aAu,C.aAL,C.aAJ,C.aAK,C.aAM,C.aAD,C.aAH])
v(A.w3,[C.aAB,C.aAr,C.aAG,C.aAF,C.afZ])
v(A.kT,[C.aAI,C.aAN,C.aAE,C.aAC,C.afY,C.ag_])})()
A.aGy(b.typeUniverse,JSON.parse('{"pd":{"a5":[],"f":[]},"Jf":{"ai":["pd"]}}'))
var y={b:"[MedPriceSearchScreen] _filteredMeds.length="}
var x=(function rtii(){var w=A.aj
return{C:w("ow<@>"),V:w("G<d4>"),s:w("G<m>"),p:w("G<f>"),a:w("J<m>"),f:w("an<@,@>"),K:w("M"),N:w("m"),m:w("ku<an<m,u>>"),q:w("uY"),y:w("N"),z:w("@"),S:w("u"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.f3=new A.x(1,0.1803921568627451,0.5450980392156862,0.3411764705882353,B.e)
D.Ns=new A.aR(D.f3,1.4,B.v,-1)
D.rz=new C.afL()
D.hJ=new A.x(1,0,0.39215686274509803,0,B.e)
D.R8=new A.BD(",","\r\n",!0)
D.R9=new A.BD(";","\r\n",!0)
D.tO=new A.aa(10,0,10,0)
D.Sx=new A.aa(28,14,28,14)
D.TC=new A.b6(63030,"MaterialIcons",!1)
D.TE=new A.b6(63250,"MaterialIcons",!1)
D.TI=new A.b6(63664,"MaterialIcons",!1)
D.U3=new A.cj(F.k_,22,B.h,null,null)
D.TB=new A.b6(62334,"MaterialIcons",!1)
D.Ui=new A.cj(D.TB,null,D.hJ,null,null)
D.Uu=new A.cj(B.k0,null,D.hJ,null,null)
D.Qc=new A.x(1,0.11764705882352941,0.47843137254901963,0.27058823529411763,B.e)
D.a_c=w([D.f3,D.Qc],A.aj("G<x>"))
D.Vu=new A.hj(B.dI,B.mR,B.bw,D.a_c,null,null)
D.acB=new A.cK(null,2,null,null)
D.aiU=new A.aU("Medicament non trouve dans la base de donnees",null,null,null,null,null,null,null,null)
D.acX=new A.e4(D.aiU,null,null,null,null,null,null,null,null,null,null,null,null,B.ar,!1,null,null,null,B.K,null)
D.aeO=new A.v(!0,B.a1,null,null,null,null,16,B.aH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af0=new A.v(!0,B.h,null,null,null,null,16,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.afJ=new A.v(!0,B.cY,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aiC=new A.aU("Ajouter",null,null,null,null,null,null,null,null)
D.ag_=new A.v(!0,B.cj,null,null,null,null,12,B.aH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aiW=new A.aU("Selectionne",null,D.ag_,null,null,null,null,null,null)
D.ajF=new A.aU("Retirer",null,null,null,null,null,null,null,null)})();(function staticFields(){$.DD=null
$.afX=!1
$.aLk=null})()};
(a=>{a["Fpmy9ObgRi2Rkv/yy46UAGsSU8c="]=a.current})($__dart_deferred_initializers__);