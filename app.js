var C = (typeof CONFIG !== "undefined") ? CONFIG : {};
var P = (typeof PEMBAYARAN !== "undefined") ? PEMBAYARAN : {};
var L = (typeof LOKASI !== "undefined") ? LOKASI : {};
var J = (typeof JADWAL !== "undefined") ? JADWAL : {};
var R = (typeof ULASAN !== "undefined") ? ULASAN : [];

/* Daftar cadangan: dipakai kalau config.js belum punya blok "gaya" */
var G = (C.gaya && C.gaya.length) ? C.gaya : [
  { nama: "Low Fade", kategori: "Fade" },
  { nama: "Side Part", kategori: "Klasik" },
  { nama: "Textured Crop", kategori: "Kekinian" },
  { nama: "Jenggot Rapi", kategori: "Jenggot" }
];

var $ = function(id){return document.getElementById(id)};
var rp = function(n){return "Rp " + n.toLocaleString("id-ID")};
function el(tag, text, cls){ var e=document.createElement(tag); if(text!==undefined) e.textContent=text; if(cls) e.className=cls; return e; }
function lines(target, arr){ arr.forEach(function(t,i){ if(i) target.appendChild(document.createElement("br")); target.appendChild(document.createTextNode(t)); }); }

/* ---- tiang barber: diam kalau pengunjung mengaktifkan "kurangi animasi" ---- */
if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) { $("pole").pauseAnimations(); }

/* ---- isi halaman dari config ---- */
document.title = C.nama + " Barbershop";
(function(){
  var w = C.nama.split(" "), last = w.pop();
  var logo = $("logo");
  if (w.length) logo.appendChild(document.createTextNode(w.join(" ") + " "));
  logo.appendChild(el("span", last));
})();
lines($("judul"), C.judul.split("|"));
function fitPole(){
  var h=$("judul"), p=document.querySelector(".pole"), w=h.parentNode;
  var H=h.offsetHeight*1.12, W=H/2, L=h.offsetLeft+h.offsetWidth+10;
  if (L+W > w.clientWidth) L = w.clientWidth - W;
  p.style.cssText="right:auto;left:"+L+"px;top:"+(h.offsetTop-H*0.06)+"px;height:"+H+"px;width:"+W+"px";
}
fitPole(); window.addEventListener("resize",fitPole); window.addEventListener("load",fitPole);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitPole);
$("deskripsi").textContent = C.deskripsi;
C.keunggulan.forEach(function(k){ var d=el("div"); d.appendChild(el("b",k[0])); d.appendChild(document.createTextNode(k[1])); $("facts").appendChild(d); });
function avatar(b){
  var av = el("div", b.nama.charAt(0), "av"), im = new Image();
  im.alt = b.nama;
  im.onload = function(){ av.textContent = ""; av.className = "av foto"; av.appendChild(im); };
  im.src = b.foto || ("foto/barber-" + slug(b.nama) + ".jpg");
  return av;
}
C.barber.forEach(function(b){ var d=el("div",undefined,"person"); d.appendChild(avatar(b)); d.appendChild(el("h3",b.nama)); d.appendChild(el("p",b.info)); $("team").appendChild(d); });
C.jamBuka.forEach(function(j){ var d=el("div"); d.appendChild(el("span",j[0])); d.appendChild(el("span",j[1])); $("hours").appendChild(d); });
lines($("alamat"), C.alamat);
lines($("kontakInfo"), ["WhatsApp " + C.nomorTampil, "Instagram " + C.instagram]);
$("foot").textContent = "\u00A9 " + new Date().getFullYear() + " " + C.nama + " Barbershop";

/* ---- galeri model rambut ---- */
var st = {svc:[], brb:"Siapa saja", date:0, time:null, model:null, kat:"Semua", q:"", lim:8};
var ADMIN = /[?&]admin/.test(location.search);   /* buka website dengan ?admin untuk melihat nama file foto */
var SCISSORS = '<svg viewBox="0 0 48 48" fill="none" stroke="#4d7cff" stroke-opacity=".8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13" cy="35" r="6"/><circle cx="35" cy="35" r="6"/><path d="M17 31L36 8M31 31L12 8"/></svg>';

function slug(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""); }
function fotoList(g){
  if (g.foto) return [g.foto];
  var s = slug(g.nama);
  return ["foto/" + s + ".jpg", s + ".jpg"];
}
function placeholder(im, g){
  var p = el("div",undefined,"ph");
  p.innerHTML = SCISSORS;
  p.appendChild(el("span","Foto segera hadir"));
  if (ADMIN) p.appendChild(el("small","Upload: " + fotoList(g)[0]));
  im.appendChild(p);
}

function drawFilter(){
  $("gf").innerHTML = "";
  var cats = ["Semua"];
  G.forEach(function(g){ if (cats.indexOf(g.kategori) < 0) cats.push(g.kategori); });
  cats.forEach(function(c){
    var b = el("button", c, "chip"+(st.kat===c?" on":"")); b.type="button";
    b.onclick = function(){ st.kat=c; st.lim=8; drawFilter(); drawGal(); };
    $("gf").appendChild(b);
  });
}
function drawGal(){
  $("gal").innerHTML = ""; $("more").innerHTML = "";
  var q = st.q.toLowerCase(), list = [];
  G.forEach(function(g,i){
    if (st.kat !== "Semua" && g.kategori !== st.kat) return;
    if (q && (g.nama + " " + g.kategori).toLowerCase().indexOf(q) < 0) return;
    list.push(i);
  });
  var shown = list.slice(0, st.lim);
  $("gc").textContent = list.length ? "Menampilkan " + shown.length + " dari " + list.length + " model" : "Model tidak ditemukan. Coba kata lain.";
  shown.forEach(function(i){
    var g = G[i];
    var b = el("button",undefined,"g"+(st.model===i?" on":"")); b.type="button";
    b.setAttribute("aria-pressed", st.model===i ? "true" : "false");
    var im = el("div",undefined,"im");
    var cs = fotoList(g), k = 0;
    var img = new Image(); img.alt = g.nama; img.loading = "lazy";
    img.onerror = function(){
      k++;
      if (k < cs.length) { img.src = cs[k]; }
      else { img.remove(); placeholder(im, g); }
    };
    img.src = cs[0];
    im.appendChild(img);
    var tx = el("div",undefined,"tx"); tx.appendChild(el("b",g.nama)); tx.appendChild(el("small",g.kategori));
    b.appendChild(im); b.appendChild(tx); b.appendChild(el("span","Dipilih","ck"));
    b.onclick = function(){ st.model = (st.model===i ? null : i); drawGal(); upd(); };
    $("gal").appendChild(b);
  });
  if (list.length > shown.length) {
    var m = el("button","Lihat lebih banyak (" + (list.length - shown.length) + " lagi)","btn ghost"); m.type="button"; m.style.margin="0";
    m.onclick = function(){ st.lim += 12; drawGal(); };
    $("more").appendChild(m);
  }
}
$("gq").addEventListener("input", function(){ st.q = this.value.trim(); st.lim = 8; drawGal(); });
$("pickClear").onclick = function(){ st.model=null; drawGal(); upd(); };

/* ---- fitur pemesanan ---- */
var BARBERS = ["Siapa saja"].concat(C.barber.map(function(b){return b.nama}));
var days = [], d0 = new Date();
for (var i=0;i<7;i++) days.push(new Date(d0.getFullYear(), d0.getMonth(), d0.getDate()+i));
function dayLabel(x){ return x.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long"}); }

function drawSvc(){
  $("svc").innerHTML = "";
  C.layanan.forEach(function(s,i){
    var b = el("button"); b.type="button"; b.className = "opt" + (st.svc.indexOf(i)>-1 ? " on":"");
    var l = el("span",undefined,"lb"); var t = el("span", s.nama); t.appendChild(el("small", s.info)); l.appendChild(el("i",undefined,"lamp")); l.appendChild(t);
    b.appendChild(l); b.appendChild(el("span", rp(s.harga), "pr"));
    b.onclick = function(){ var k=st.svc.indexOf(i); if(k>-1) st.svc.splice(k,1); else st.svc.push(i); drawSvc(); upd(); };
    $("svc").appendChild(b);
  });
}
function drawBrb(){
  $("brb").innerHTML = "";
  BARBERS.forEach(function(n){
    var b = el("button", n, "chip"+(st.brb===n?" on":"")); b.type="button";
    b.onclick = function(){ st.brb=n; drawBrb(); drawTimes(); upd(); };
    $("brb").appendChild(b);
  });
}
function drawDates(){
  $("dts").innerHTML = "";
  days.forEach(function(x,i){
    var b = el("button",undefined,"chip"+(st.date===i?" on":"")); b.type="button";
    b.appendChild(el("small", i===0 ? "Hari ini" : x.toLocaleDateString("id-ID",{weekday:"short"})));
    b.appendChild(el("b", x.getDate()));
    b.appendChild(el("small", x.toLocaleDateString("id-ID",{month:"short"})));
    b.onclick = function(){ st.date=i; st.time=null; drawDates(); drawTimes(); upd(); };
    $("dts").appendChild(b);
  });
}
function drawTimes(){
  $("tms").innerHTML = ""; if (st.time && penuh(st.time)) st.time = null;
  var now = new Date();
  C.jamPesan.forEach(function(t){
    var b = el("button", t, "chip"+(st.time===t?" on":"")); b.type="button";
    if (st.date===0 && parseInt(t,10) <= now.getHours()) b.disabled = true;
    if (penuh(t)) { b.disabled = true; b.title = "Sudah dipesan"; }
    b.onclick = function(){ st.time=t; drawTimes(); upd(); };
    $("tms").appendChild(b);
  });
}
function total(){ return st.svc.reduce(function(a,i){return a + C.layanan[i].harga},0); }
/* ---- jadwal penuh ---- */
var BOOK = (J.manual || []).slice();
function dkey(x){ return x.getFullYear() + "-" + ("0" + (x.getMonth()+1)).slice(-2) + "-" + ("0" + x.getDate()).slice(-2); }
function penuh(t){
  var k = dkey(days[st.date]);
  var rows = BOOK.filter(function(r){ return String(r.tanggal).trim() === k && ("0" + String(r.jam).trim()).slice(-5) === t; });
  if (!rows.length) return false;
  if (rows.length >= C.barber.length) return true;
  if (st.brb === "Siapa saja") return false;
  return rows.some(function(r){ return String(r.barber || "").trim().toLowerCase() === st.brb.toLowerCase(); });
}
if (J.csv) {
  fetch(J.csv + (J.csv.indexOf("?") > -1 ? "&" : "?") + "t=" + Date.now()).then(function(r){ return r.text(); }).then(function(txt){
    var rows = txt.split(/\r?\n/).map(function(l){ return l.replace(/"/g,"").split(","); });
    if (rows.length && /tanggal/i.test(rows[0][0])) rows.shift();
    BOOK = (J.manual || []).concat(rows.filter(function(r){ return r[0] && r[1]; }).map(function(r){ return {tanggal:r[0].trim(), jam:r[1].trim(), barber:(r[2]||"").trim()}; }));
    drawTimes(); upd();
  }).catch(function(){});
}

/* ---- bagikan lokasi (opsional) ---- */
var LOC = null;
if (L.bagikanLokasi === false) { $("locBtn").hidden = true; $("locInfo").hidden = true; }
$("locBtn").onclick = function(){
  if (!navigator.geolocation) { $("locInfo").textContent = "Browser kamu tidak mendukung lokasi."; return; }
  $("locInfo").textContent = "Meminta izin lokasi...";
  navigator.geolocation.getCurrentPosition(function(p){
    LOC = "https://www.google.com/maps?q=" + p.coords.latitude.toFixed(6) + "," + p.coords.longitude.toFixed(6);
    $("locInfo").textContent = "Lokasi ikut terkirim di pesananmu. Terima kasih!";
    $("locBtn").classList.add("ok");
  }, function(){
    LOC = null; $("locBtn").classList.remove("ok");
    $("locInfo").textContent = "Lokasi tidak dibagikan. Tidak masalah, kamu tetap bisa memesan.";
  }, {enableHighAccuracy:true, timeout:10000});
};

function hpNorm(){ var d=$("hp").value.replace(/\D/g,""); if(d.indexOf("0")===0) d="62"+d.slice(1); else if(d.indexOf("8")===0) d="62"+d; return (d.length>=10&&d.length<=15&&d.indexOf("62")===0) ? d : ""; }
function upd(){
  var name = $("nm").value.trim();
  var names = st.svc.map(function(i){return C.layanan[i].nama});
  $("sS").textContent = names.length ? names.join(", ") : "-";
  $("sM").textContent = st.model!==null ? G[st.model].nama : "-";
  $("sB").textContent = st.brb;
  $("sD").textContent = st.time ? dayLabel(days[st.date]) + ", " + st.time : "-";
  $("sN").textContent = name || "-"; var hp = hpNorm(); $("sW").textContent = hp ? "+" + hp : "-"; $("sP").textContent = P.dp ? rp(P.dp) : "-";
  $("sT").textContent = rp(total()); $("bT").textContent = rp(total());
  $("bC").textContent = names.length ? names.length + " layanan dipilih" : "Belum ada layanan";
  $("pick").hidden = st.model===null;
  if (st.model!==null) $("pickName").textContent = G[st.model].nama;
  var miss = !names.length ? "Pilih minimal satu layanan" : !st.time ? "Pilih jam kedatangan" : !name ? "Isi nama kamu" : !hp ? "Isi nomor WhatsApp yang aktif" : (P.dp && !$("ag").checked) ? "Centang persetujuan DP dulu" : "";
  $("go").disabled = !!miss;
  $("hint").textContent = miss || "Pesananmu akan dibuka di WhatsApp untuk dikirim.";
}
$("nm").addEventListener("input", upd); $("hp").addEventListener("input", upd); $("ag").addEventListener("change", upd);
(P.rekening || []).forEach(function(r){
  var d = el("div", undefined, "rk"); d.title = "Ketuk untuk menyalin nomor";
  d.appendChild(el("span", r.bank)); d.appendChild(el("b", r.nomor)); d.appendChild(el("small", "a.n. " + r.nama));
  d.onclick = function(){ try { navigator.clipboard.writeText(r.nomor); } catch(e){} };
  $("rek").appendChild(d);
});
var qi = $("qris");
if (P.qris) { qi.onload = function(){ qi.hidden = false; }; qi.onerror = function(){ qi.hidden = true; }; qi.src = P.qris; }
$("stDp").hidden = !P.dp; $("dpAmt").textContent = rp(P.dp||0); $("dpWay").textContent = P.bayar||""; $("dpNote").textContent = P.aturan||"";
$("go").onclick = function(){
  var kode = "KG-" + Math.floor(1000 + Math.random()*9000);
  var names = st.svc.map(function(i){return "- " + C.layanan[i].nama});
  var msg = "Halo " + C.nama + ", saya mau pesan jadwal.\n\n" +
    "Kode booking: " + kode + "\n" + "Nama: " + $("nm").value.trim() + "\n" + "WhatsApp: +" + hpNorm() + "\n" + (LOC ? "Lokasi: " + LOC + "\n" : "") +
    "Layanan:\n" + names.join("\n") + "\n" +
    (st.model!==null ? "Model rambut: " + G[st.model].nama + "\n" : "") +
    "Barber: " + st.brb + "\n" +
    "Jadwal: " + dayLabel(days[st.date]) + ", jam " + st.time + "\n" +
    "Total: " + rp(total()) + "\n" + (P.dp ? "DP: " + rp(P.dp) + " (" + P.bayar + ")\n" : "") + "\nSaya setuju dengan ketentuan DP dan batas telat 15 menit. Mohon konfirmasinya, terima kasih.";
  window.open("https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg), "_blank");
};

(function(){
  var d=new Date(), i=d.getDay()==0?2:d.getDay()==6?1:0, m=(C.jamBuka[i]||[0,""])[1].match(/(\d+)[.:](\d+)\D+(\d+)[.:](\d+)/);
  var h=d.getHours()+d.getMinutes()/60, on=m&&h>=(+m[1]+m[2]/60)&&h<(+m[3]+m[4]/60), o=$("open");
  o.textContent=on?"Buka sekarang":"Sedang tutup"; if(!on)o.className="open off";
})();
drawFilter(); drawGal(); drawSvc(); drawBrb(); drawDates(); drawTimes(); upd();

/* ---- lokasi, kontak, ulasan, SEO ---- */
(function(){
  var q = encodeURIComponent(L.query || C.alamat.join(" "));
  $("mapBtn").href = L.maps || ("https://www.google.com/maps/search/?api=1&query=" + q);
  if (L.peta !== false) {
    var f = document.createElement("iframe");
    f.src = L.embed || ("https://maps.google.com/maps?q=" + q + "&output=embed");
    f.title = "Peta lokasi " + C.nama; f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
    $("map").appendChild(f);
  } else { $("map").hidden = true; }
  var ig = (C.instagram || "").replace("@", "");
  if (ig) $("igBtn").href = "https://instagram.com/" + ig; else $("igBtn").hidden = true;
  $("wa").href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent("Halo " + C.nama + ", saya mau tanya dulu.");
  if (R.length) {
    $("ulasan").hidden = false;
    R.forEach(function(r){ var b = el("blockquote", r.teks); b.appendChild(el("cite", r.nama)); $("rev").appendChild(b); });
  }
  var jam = [];
  var hari = [["Monday","Tuesday","Wednesday","Thursday","Friday"],["Saturday"],["Sunday"]];
  C.jamBuka.forEach(function(j, i){
    var m = j[1].match(/(\d+)[.:](\d+)\D+(\d+)[.:](\d+)/);
    if (m && hari[i]) jam.push({"@type":"OpeningHoursSpecification", dayOfWeek:hari[i], opens:("0"+m[1]).slice(-2)+":"+m[2], closes:("0"+m[3]).slice(-2)+":"+m[4]});
  });
  var data = {"@context":"https://schema.org", "@type":"BarberShop", name:C.nama, telephone:"+" + C.whatsapp,
    address:{"@type":"PostalAddress", streetAddress:C.alamat.join(", "), addressLocality:L.kota || "Pontianak", addressCountry:"ID"},
    openingHoursSpecification:jam};
  if (ig) data.sameAs = ["https://instagram.com/" + ig];
  var s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
})();
