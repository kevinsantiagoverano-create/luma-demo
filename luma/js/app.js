const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const cop=n=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
const FEE=7000;
// id,name,cat,price,desc,tag,color
const P=[
['burrata','Burrata & Pomodoro','Entradas',38000,'Burrata cremosa, tomates de temporada, albahaca y aceite de oliva.','Favorito','#C96D55'],
['bruschetta','Bruschetta de la Casa','Entradas',27000,'Pan artesanal, tomate, ajo y aceite de oliva.','','#C96D55'],
['carpaccio','Carpaccio de Res','Entradas',42000,'Láminas finas de res, rúcula, parmesano y limón.','','#B5523F'],
['calamares','Calamares Crocantes','Entradas',36000,'Calamares dorados con alioli de limón.','','#E3B97E'],
['limone','Pasta al Limone','Pastas',46000,'Tagliatelle artesanal, crema de limón, parmesano, pimienta fresca y albahaca.','Signature','#EFD98A'],
['ragu','Tagliatelle al Ragú','Pastas',52000,'Pasta fresca con ragú de res cocinado lentamente.','','#B5523F'],
['ravioli','Ravioli de Ricotta','Pastas',48000,'Ravioli rellenos de ricotta y espinaca, mantequilla de salvia.','','#EBDDB4'],
['linguine','Linguine de Mar','Pastas',62000,'Linguine con almejas, camarones y vino blanco.','','#E3B97E'],
['salmon','Salmón Mediterráneo','Principales',68000,'Salmón a la plancha, vegetales asados, limón y hierbas frescas.','Del chef','#E58F72'],
['risotto','Risotto de Setas','Principales',54000,'Arroz cremoso, setas de temporada, parmesano y aceite de oliva extra virgen.','Vegetariano','#C9B18A'],
['pollo','Pollo al Romero','Principales',49000,'Pollo asado con romero, papas y jugo de limón.','','#D8A46B'],
['lomo','Lomo a la Pimienta','Principales',72000,'Lomo fino, salsa de pimienta y puré rústico.','','#8A5A44'],
['luma','Ensalada LUMA','Ensaladas',34000,'Hojas verdes, aceitunas, feta, tomate cherry y vinagreta de limón.','','#A7B18A'],
['quinoa','Mediterránea de Quinoa','Ensaladas',36000,'Quinoa, pepino, garbanzos, menta y yogur.','Vegano','#C5CFA0'],
['tiramisu','Tiramisú','Postres',24000,'Clásico con café, mascarpone y cacao.','','#B79274'],
['panna','Panna Cotta','Postres',22000,'Crema de vainilla con coulis de frutos rojos.','','#E8A5A0'],
['tarta','Tarta de Limón','Postres',23000,'Base crocante, crema de limón y merengue ligero.','Cítrico','#F1DE7A'],
['limonada','Limonada de Albahaca','Bebidas',14000,'Limón fresco, albahaca y hielo.','','#C5CFA0'],
['te','Té frío de Durazno','Bebidas',13000,'Té negro infusionado con durazno.','','#F0B98A'],
['soda','Soda de frutos cítricos','Bebidas',15000,'Naranja, mandarina y limón con agua con gas.','','#F0C060'],
['tinto','Vino tinto (copa)','Vinos',32000,'Tempranillo, notas de cereza y especias.','','#7B2D3B'],
['blanco','Vino blanco (copa)','Vinos',30000,'Fresco y cítrico, ideal con pescados.','','#E8D98A'],
['rose','Rosé (copa)','Vinos',31000,'Ligero, floral, con frutos rojos.','','#E8A5A0']];
const PR=[
['p1','Almuerzo Mediterráneo','Promo',45000,'Entrada, plato fuerte y limonada. Lunes a viernes.','','#EFD98A'],
['p2','Cena para Dos','Promo',169000,'Entrada, dos pastas o principales y postre para compartir.','','#C96D55'],
['p3','Domingo en LUMA','Promo',99000,'Plato principal, postre y copa de vino.','','#A7B18A'],
['p4','Pasta & Wine','Promo',72000,'Cualquier pasta artesanal con copa de vino.','','#E3B97E']];
const ALL=[...P,...PR],by=id=>ALL.find(p=>p[0]===id);
// art generator
function h(s){let x=0;for(const c of s)x=(x*31+c.charCodeAt(0))>>>0;return x}
function rnd(seed){let s=seed||1;return()=>(s=(s*16807)%2147483647)/2147483647}
function art(id,color,wide){const r=rnd(h(id)),c=color||'#D8A46B';let f='';
for(let i=0;i<26;i++){const a=r()*6.28,d=r()*21;f+=`<circle cx="${50+Math.cos(a)*d}" cy="${50+Math.sin(a)*d}" r="${2+r()*3}" fill="${i%5?c:'#fff'}" opacity=".9"/>`}
for(let i=0;i<8;i++){const a=r()*6.28,d=r()*20;f+=`<ellipse cx="${50+Math.cos(a)*d}" cy="${50+Math.sin(a)*d}" rx="2" ry="1" fill="#5c7a3c" transform="rotate(${r()*180} ${50+Math.cos(a)*d} ${50+Math.sin(a)*d})"/>`}
const bg=['#EFE6D2','#DDE3C6','#F3E2CB','#E8DCC4'][h(id)%4];
return `<svg viewBox="0 0 100 100" role="img" aria-label="Ilustración de ${id}" preserveAspectRatio="xMidYMid slice"><rect width="100" height="100" fill="${bg}"/><circle cx="50" cy="52" r="40" fill="#000" opacity=".07"/><circle cx="50" cy="50" r="39" fill="#fff"/><circle cx="50" cy="50" r="31" fill="none" stroke="#e7e1d2" stroke-width="1"/><circle cx="50" cy="50" r="23" fill="${c}" opacity=".35"/>${f}</svg>`}
// hero plate (clams)
(function(){const r=rnd(7);let s='';for(let i=0;i<46;i++){const a=r()*6.28,d=16+r()*30;s+=`<circle cx="${100+Math.cos(a)*d*1.15}" cy="${100+Math.sin(a)*d*1.15}" r="${2.5+r()*2}" fill="#EBCB76" opacity=".9"/>`}
for(let i=0;i<22;i++){const a=i/22*6.28+r()*.3,d=24+r()*22,x=100+Math.cos(a)*d,y=100+Math.sin(a)*d;s+=`<ellipse cx="${x}" cy="${y}" rx="9" ry="6.5" fill="#F7F1E3" stroke="#d9cfb8" stroke-width=".6" transform="rotate(${a*57+r()*60} ${x} ${y})"/><ellipse cx="${x}" cy="${y}" rx="4.5" ry="3" fill="#E4B77E" transform="rotate(${a*57} ${x} ${y})"/>`}
for(let i=0;i<30;i++){const a=r()*6.28,d=r()*44;s+=`<ellipse cx="${100+Math.cos(a)*d}" cy="${100+Math.sin(a)*d}" rx="2.4" ry="1.2" fill="#4f7a2e" transform="rotate(${r()*180} ${100+Math.cos(a)*d} ${100+Math.sin(a)*d})"/>`}
$('#heroPlate').innerHTML=`<svg class="plate" viewBox="0 0 200 200" role="img" aria-label="Ilustración de pasta con almejas"><circle cx="104" cy="106" r="94" fill="#000" opacity=".06"/><circle cx="100" cy="100" r="94" fill="#F3EDE0"/><circle cx="100" cy="100" r="62" fill="#EFE3C4"/>${s}</svg>`})();
$('#introArt').innerHTML=art('ingredientes','#C96D55').replace('<svg','<svg style="width:100%;height:100%"');
$('#mapArt').style.background='linear-gradient(135deg,#A7B18A,#DDE3C6)';
// product cards
function card(p,i){return `<article class="card" style="animation-delay:${i*50}ms"><div class="im">${art(p[0],p[6])}</div><div class="b">${p[5]?`<span class="lab">${p[5]}</span>`:''}<h3>${p[1]}</h3><p>${p[4]}</p><div class="r"><span class="price">${cop(p[3])}</span><button class="btn sm cta" data-add="${p[0]}" aria-label="Agregar ${p[1]} al pedido">Agregar</button></div></div></article>`}
const render=(el,list)=>el.innerHTML=list.map(card).join('');
render($('#featGrid'),['limone','risotto','salmon','burrata'].map(by));
render($('#promoGrid'),PR);
render($('#wineGrid'),P.filter(p=>p[2]==='Vinos'||p[2]==='Bebidas'));
const cats=['Todo','Entradas','Pastas','Principales','Ensaladas','Postres','Bebidas','Vinos'];
$('#filters').innerHTML=cats.map((c,i)=>`<button role="tab" class="${i?'':'a'}" data-cat="${c}" aria-selected="${!i}">${c}</button>`).join('');
const menu=c=>render($('#menuGrid'),c==='Todo'?P:P.filter(p=>p[2]===c));menu('Todo');
$('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#filters button').forEach(x=>{x.classList.toggle('a',x===b);x.setAttribute('aria-selected',x===b)});menu(b.dataset.cat)};
// gallery
const G=[['pasta','Pasta fresca','#EFD98A'],['limones','Ingredientes','#F1DE7A'],['salmonG','Platos','#E58F72'],['vinoG','Vinos','#7B2D3B'],['mesa','Mesa','#A7B18A'],['sala','Restaurante','#D8A46B'],['cocinaG','Cocina','#C96D55'],['tiraG','Postres','#B79274']];
$('#gal').innerHTML=G.map((g,i)=>`<button data-g="${i}" aria-label="Ampliar: ${g[1]}">${art(g[0],g[2])}</button>`).join('');
$('#mos').innerHTML=[['Interior','#D8A46B'],['Mesa preparada','#A7B18A'],['Vino servido','#7B2D3B'],['Cena en pareja','#C96D55'],['Ambiente de tarde','#EFD98A'],['Vajilla','#E8DCC4']].map(m=>`<div>${art('x'+m[0],m[1])}</div>`).join('');
let gi=0;const lb=$('#lb');
function showG(i){gi=(i+G.length)%G.length;$('#lbImg').innerHTML=art(G[gi][0],G[gi][2]);$('#lbCap').textContent=G[gi][1]}
$('#gal').onclick=e=>{const b=e.target.closest('[data-g]');if(b){showG(+b.dataset.g);lb.classList.add('o');lb.querySelector('.x').focus()}};
lb.querySelector('.x').onclick=()=>lb.classList.remove('o');lb.querySelector('.p').onclick=()=>showG(gi-1);lb.querySelector('.n').onclick=()=>showG(gi+1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('o')};
// reviews
$('#rv').innerHTML=[['Camila R.','Mayo 2026','La pasta al limone es perfecta. Un lugar para quedarse horas conversando.'],['Andrés M.','Abril 2026','Ingredientes frescos y un ambiente sereno. El tiramisú, imperdible.'],['Laura & Diego','Marzo 2026','Celebramos nuestro aniversario y todo fue cálido y sin afán.'],['Sofía P.','Febrero 2026','El salmón y la copa de rosé, una combinación redonda.']].map(r=>`<figure><div class="st" aria-label="5 de 5 estrellas">★★★★★</div><blockquote>“${r[2]}”</blockquote><figcaption><strong>${r[0]}</strong> · ${r[1]}</figcaption></figure>`).join('');
// cart
let cart={};try{cart=JSON.parse(localStorage.getItem('luma-cart')||'{}')||{}}catch(e){cart={}}
const save=()=>{try{localStorage.setItem('luma-cart',JSON.stringify(cart))}catch(e){}};
const sub=()=>Object.entries(cart).reduce((s,[id,q])=>s+(by(id)?by(id)[3]*q:0),0),cnt=()=>Object.values(cart).reduce((a,b)=>a+b,0);
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('o');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('o'),2000)}
function drawCart(){const ids=Object.keys(cart).filter(id=>by(id));$('#badge').textContent=cnt();
if(!ids.length){$('#cartBody').innerHTML=`<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="#A7B18A" stroke-width="1.4"><path d="M5 8h14l-1 12H6zM9 8a3 3 0 016 0"/></svg><h3>Tu pedido está vacío</h3><p style="margin:8px 0 20px;color:var(--muted)">Descubre nuestra carta y elige algo rico.</p><button class="btn" data-go="#menu">Volver a la carta</button></div>`;$('#cartFoot').innerHTML='';return}
$('#cartBody').innerHTML=ids.map(id=>{const p=by(id);return `<div class="it"><div class="th">${art(id,p[6])}</div><div><strong>${p[1]}</strong><div style="font-size:.85rem;color:var(--muted)">${cop(p[3])}</div><div class="q"><button data-dec="${id}" aria-label="Disminuir">−</button><span aria-live="polite">${cart[id]}</span><button data-inc="${id}" aria-label="Aumentar">+</button> <button class="rm" data-del="${id}">Eliminar</button></div></div><strong>${cop(p[3]*cart[id])}</strong></div>`}).join('');
const s=sub();$('#cartFoot').innerHTML=`<div class="tot"><span>Subtotal</span><span>${cop(s)}</span></div><div class="tot"><span>Domicilio</span><span>${cop(FEE)}</span></div><div class="tot g"><span>Total</span><span>${cop(s+FEE)}</span></div><button class="btn cta" style="width:100%" data-checkout>Continuar al pedido</button>`}
function open(o){$('#dr').classList.toggle('o',o);$('#ov').classList.toggle('o',o);$('#dr').setAttribute('aria-hidden',!o);document.body.style.overflow=o?'hidden':''}
$('#cartBtn').onclick=()=>open(true);$('#closeCart').onclick=$('#ov').onclick=()=>open(false);
function setQ(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];save();drawCart()}
// checkout
function modal(html){$('#modIn').innerHTML=html;$('#mod').classList.add('o')}const closeMod=()=>$('#mod').classList.remove('o');
function checkout(){open(false);modal(`<span class="eyebrow" style="font-size:1.1rem">Paso 3 de 4</span><h3>Datos de entrega</h3><p style="color:var(--muted);margin-bottom:16px">Total a pagar: <strong>${cop(sub()+FEE)}</strong> · Simulación, sin cobros reales.</p><form id="coF" novalidate class="light">
<label>Nombre<input name="n"><span class="err"></span></label><div class="f2"><label>Teléfono<input name="t" type="tel"><span class="err"></span></label><label>Barrio<input name="b"><span class="err"></span></label></div><label>Dirección<input name="a"><span class="err"></span></label><div class="f2"><label>Apartamento<input name="ap"></label><label>Método de pago<select name="m"><option>Efectivo</option><option>Transferencia</option><option>Pago al recibir</option></select></label></div><label>Indicaciones<textarea name="i" rows="2"></textarea></label><div style="display:flex;gap:10px"><button class="btn ghost" type="button" data-closemod>Cancelar</button><button class="btn cta" type="submit" style="flex:1">Confirmar pedido</button></div></form>`)}
function checks(f,rules){let ok=true;rules.forEach(([n,fn,msg])=>{const el=f.elements[n],e=el.parentElement.querySelector('.err'),bad=!fn(el.value.trim());el.classList.toggle('bad',bad);e.textContent=bad?msg:'';if(bad){if(ok)el.focus();ok=false}});return ok}
document.addEventListener('submit',e=>{
if(e.target.id==='coF'){e.preventDefault();const f=e.target;if(!checks(f,[['n',v=>v.length>2,'Escribe tu nombre.'],['t',v=>/^[\d\s+]{7,15}$/.test(v),'Teléfono no válido.'],['b',v=>v,'Indica el barrio.'],['a',v=>v.length>4,'Escribe la dirección.']]))return;
const d=Object.fromEntries(new FormData(f)),s=sub(),no='LUMA-'+Math.floor(10000+Math.random()*89999);
const items=Object.keys(cart).map(id=>`<li>${cart[id]} × ${by(id)[1]}</li>`).join('');
modal(`<div class="ok"><span class="eyebrow">Paso 4 de 4</span><h3>Pedido recibido</h3><p>Número de pedido demo <strong>${no}</strong></p><ul style="padding-left:20px">${items}</ul><dl><dt>Subtotal</dt><dd>${cop(s)}</dd><dt>Domicilio</dt><dd>${cop(FEE)}</dd><dt>Total</dt><dd><strong>${cop(s+FEE)}</strong></dd><dt>Dirección</dt><dd>${d.a}${d.ap?', apto '+d.ap:''}, ${d.b}</dd><dt>Pago</dt><dd>${d.m}</dd><dt>Estado</dt><dd>Pedido recibido</dd></dl><p style="font-size:.85rem;color:var(--muted)">Esto es una simulación: ningún restaurante recibirá este pedido.</p><button class="btn" data-closemod style="margin-top:16px">Cerrar</button></div>`);cart={};save();drawCart()}
if(e.target.id==='resForm'){e.preventDefault();const f=e.target,today=new Date().toISOString().slice(0,10);
if(!checks(f,[['n',v=>v.length>2,'Escribe tu nombre.'],['e',v=>/^\S+@\S+\.\S+$/.test(v),'Correo no válido.'],['t',v=>/^[\d\s+]{7,15}$/.test(v),'Teléfono no válido.'],['d',v=>v&&v>=today,'Elige una fecha de hoy en adelante.'],['h',v=>v,'Elige una hora.'],['p',v=>v,'Indica personas.']]))return;
const d=Object.fromEntries(new FormData(f)),no='RES-'+Math.floor(1000+Math.random()*8999);
$('#resBox').innerHTML=`<div class="ok"><svg width="48" viewBox="0 0 24 24" fill="none" stroke="#C96D55" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M7 12.5l3.2 3.2L17 9"/></svg><h3>¡Mesa reservada!</h3><p>Reserva demo <strong>${no}</strong></p><dl><dt>A nombre de</dt><dd>${d.n}</dd><dt>Fecha</dt><dd>${d.d}</dd><dt>Hora</dt><dd>${d.h}</dd><dt>Personas</dt><dd>${d.p}</dd><dt>Ocasión</dt><dd>${d.o}</dd></dl><p style="font-size:.85rem">Simulación: no se envió ninguna reserva real.</p><button class="btn" data-again>Nueva reserva</button></div>`}});
// selects/date
const rf=$('#resForm');rf.elements.d.min=new Date().toISOString().slice(0,10);
['12:00 p. m.','1:00 p. m.','2:00 p. m.','3:00 p. m.','5:00 p. m.','6:00 p. m.','7:00 p. m.','8:00 p. m.','9:00 p. m.'].forEach(x=>rf.elements.h.add(new Option(x,x)));
['1','2','3','4','5','6','7 o más'].forEach(x=>rf.elements.p.add(new Option(x,x)));
const resHTML=$('#resBox').innerHTML;
// global clicks
document.addEventListener('click',e=>{const t=e.target.closest('button,a');if(!t)return;
if(t.dataset.add){setQ(t.dataset.add,1);toast('Agregado a tu pedido.');$('#cartBtn').animate([{transform:'scale(1.3)'},{transform:'scale(1)'}],300)}
else if(t.dataset.inc)setQ(t.dataset.inc,1);else if(t.dataset.dec)setQ(t.dataset.dec,-1);else if(t.dataset.del){delete cart[t.dataset.del];save();drawCart()}
else if(t.dataset.checkout!==undefined)checkout();else if(t.dataset.closemod!==undefined)closeMod();
else if(t.dataset.go){open(false);document.querySelector(t.dataset.go).scrollIntoView()}
else if(t.dataset.again!==undefined){location.reload()}
});
// nav
const nav=$('#nav'),links=$('#links'),bg=$('#burger');
const onS=()=>nav.classList.toggle('s',scrollY>40);addEventListener('scroll',onS,{passive:true});onS();
function menuT(o){links.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
bg.onclick=()=>menuT(!links.classList.contains('o'));links.onclick=e=>{if(e.target.closest('a'))menuT(false)};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.classList.remove('o');closeMod();open(false);menuT(false)}if(lb.classList.contains('o')){if(e.key==='ArrowLeft')showG(gi-1);if(e.key==='ArrowRight')showG(gi+1)}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}),{threshold:.12});$$('.rv-r').forEach(el=>io.observe(el));
drawCart();