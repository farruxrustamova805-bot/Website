
// ============ DATA ============
const PRODUCTS = [
  {id:1,name:'Samsung Galaxy A55',desc:'6.6" Super AMOLED ekran, 8GB RAM, 128GB xotira, 50MP kamera. Termezlik yoshlar sevgan telefon!',price:4290000,oldPrice:4890000,emoji:'📱',cat:'elektronika',rating:4.8,reviews:124,badge:'hot',brand:'Samsung',installment:'360 000 so\'mdan/oy'},
  {id:2,name:'iPhone 13 128GB',desc:'Apple A15 Bionic chip, Super Retina XDR ekran, 12MP kamera. Original, kafolat bilan.',price:8900000,oldPrice:9500000,emoji:'🍎',cat:'elektronika',rating:4.9,reviews:89,badge:'new',brand:'Apple',installment:'742 000 so\'mdan/oy'},
  {id:3,name:'Xiaomi Redmi Note 12',desc:'50MP kamera, 5000mAh batareya, MIUI 14. Arzon va sifatli smartfon.',price:2150000,emoji:'📲',cat:'elektronika',rating:4.5,reviews:203,badge:'',brand:'Xiaomi',installment:'179 000 so\'mdan/oy'},
  {id:4,name:'JBL Tune 760NC Naushnik',desc:'40 soat batareya, aktiv shovqin kamaytirish, Bluetooth 5.0.',price:890000,oldPrice:1100000,emoji:'🎧',cat:'elektronika',rating:4.7,reviews:67,badge:'hot',brand:'JBL',installment:''},
  {id:5,name:'Samsung 43" Smart TV',desc:'4K UHD ekran, Android TV, Netflix, YouTube. Termez uchun ideal televizor.',price:5200000,oldPrice:5800000,emoji:'📺',cat:'elektronika',rating:4.6,reviews:45,badge:'sale',brand:'Samsung',installment:'433 000 so\'mdan/oy'},
  {id:6,name:'MacBook Air M2',desc:'Apple M2 chip, 8GB RAM, 256GB SSD. Engil va kuchli noutbuk.',price:14500000,emoji:'💻',cat:'elektronika',rating:4.9,reviews:32,badge:'new',brand:'Apple',installment:'1 208 000 so\'mdan/oy'},
  {id:7,name:'Erkaklar Sport Kostyumi',desc:'Paxta-elastan aralash, nam o\'tkazmaydigan. Termez iqlimiga mos yengil material. S-3XL razmer.',price:320000,emoji:'👕',cat:'kiyim',rating:4.3,reviews:45,badge:'',brand:'Nike',installment:''},
  {id:8,name:'Ayollar Yozgi Ko\'ylak',desc:'Yengil shoyi material, gul naqsh. Yoz uchun ideal. 5 xil rangda: qizil, ko\'k, yashil, sariq, oq.',price:185000,emoji:'👗',cat:'kiyim',rating:4.6,reviews:78,badge:'new',brand:'Mahalliy',installment:''},
  {id:9,name:'Bolalar Krossovka',desc:'Nike Air Max uslubi. 30-36 razmer. Chidamli va yengil — maktab uchun ideal.',price:250000,emoji:'👟',cat:'kiyim',rating:4.4,reviews:112,badge:'',brand:'Nike',installment:''},
  {id:10,name:'Erkaklar Klassik Ko\'ylak',desc:'100% paxta, antiallergik. Biznes va kundalik kiyish uchun. M-XL razmer, 8 xil rang.',price:195000,emoji:'👔',cat:'kiyim',rating:4.5,reviews:67,badge:'',brand:'Mahalliy',installment:''},
  {id:11,name:'Termez Qo\'y Go\'shti (1kg)',desc:'Mahalliy fermerdan yangi so\'yilgan go\'sht. Bugun ertalab keltirilgan. Sifat 100% kafolati!',price:95000,emoji:'🥩',cat:'oziq',rating:4.9,reviews:340,badge:'hot',brand:'Mahalliy',installment:''},
  {id:12,name:'Uzum (1kg)',desc:'Termezning mashhur "Husayne" uzumi! O\'ta shirin, tabiiy. Bog\'dan to\'g\'ridan yetkazib beriladi.',price:18000,emoji:'🍇',cat:'oziq',rating:5.0,reviews:512,badge:'hot',brand:'Mahalliy',installment:''},
  {id:13,name:'Termez Qovuni (1 dona)',desc:'Surxondaryo qovuni! O\'rtacha 4-5 kg. Termezdan chiqqan dunyo mashhur qovun. Shirin va to\'q.',price:35000,emoji:'🍈',cat:'oziq',rating:4.8,reviews:287,badge:'new',brand:'Mahalliy',installment:''},
  {id:14,name:'Somsalar (10 dona)',desc:'Tandirda pishirilgan, qo\'y go\'shti bilan. Issiq holda yetkazib beriladi. Termez uslubida.',price:45000,emoji:'🥟',cat:'oziq',rating:4.7,reviews:190,badge:'',brand:'Mahalliy',installment:''},
  {id:15,name:'Non (1 dona)',desc:'Tandirda pishirilgan, issiq. Termezning an\'anaviy lochira noni. Kuniga 2 marta pishiriladi.',price:8000,emoji:'🫓',cat:'oziq',rating:4.9,reviews:625,badge:'hot',brand:'Mahalliy',installment:''},
  {id:16,name:'Split Konditsioner 12BTU',desc:'Midea inverter, A++ energiya sinf. Termez yoziga mos! Sovutish va isitish. O\'rnatish xizmati bepul!',price:3850000,oldPrice:4200000,emoji:'❄️',cat:'uy',rating:4.8,reviews:56,badge:'hot',brand:'Midea',installment:'321 000 so\'mdan/oy'},
  {id:17,name:'Elektr Choynak 1.8L',desc:'Samsung 2200W. 5 daqiqada qaynaydi. Ruxsiz po\'lat, 1 yil kafolat. 4 xil rangda.',price:185000,emoji:'☕',cat:'uy',rating:4.5,reviews:134,badge:'',brand:'Samsung',installment:''},
  {id:18,name:'Kir Yuvish Mashina 7kg',desc:'Samsung WW70 EcoFoam. 15 dastur, 1200 ayl/min, A+++ energiya. Suv tejovchi texnologiya.',price:5800000,oldPrice:6500000,emoji:'🫧',cat:'uy',rating:4.7,reviews:78,badge:'sale',brand:'Samsung',installment:'483 000 so\'mdan/oy'},
  {id:19,name:'Futbol To\'pi',desc:'Adidas uslubi, 5-razmer. FIFA sertifikati. Termez stadioni tuproqiga mos, chidamli material.',price:120000,emoji:'⚽',cat:'sport',rating:4.4,reviews:67,badge:'',brand:'Adidas',installment:''},
  {id:20,name:'Sport Velosiped 26"',desc:'21 tezlik, disk tormoz. Termez ko\'chalari uchun ideal. Kafolat: 2 yil.',price:1850000,oldPrice:2100000,emoji:'🚴',cat:'sport',rating:4.6,reviews:34,badge:'new',brand:'',installment:'154 000 so\'mdan/oy'},
  {id:21,name:'Yoga Mati',desc:'Non-slip, 6mm qalinlik, ekologik material. 183x61cm. Uy yoki zal uchun.',price:185000,emoji:'🧘',cat:'sport',rating:4.5,reviews:89,badge:'',brand:'',installment:''},
  {id:22,name:'Parfyum — Oud Al Termez',desc:'Mahalliy ishlab chiqarish, tabiiy oud. Termez shahrining o\'ziga xos hidi. 50ml, 8 soat turadi.',price:285000,emoji:'🧴',cat:'gozellik',rating:4.9,reviews:198,badge:'hot',brand:'Mahalliy',installment:''},
  {id:23,name:'Krem — Sun Protection SPF50',desc:'Termez quyoshi uchun maxsus ishlab chiqilgan. Terini UV-nurlardan 8 soat himoya qiladi.',price:85000,emoji:'🌞',cat:'gozellik',rating:4.5,reviews:145,badge:'',brand:'',installment:''},
  {id:24,name:'Soch Qilgich Nabori',desc:'Professional soch qilgich + ularni sozlash asboblari. Uydayoq sartarosh. 2 yil kafolat.',price:420000,emoji:'💈',cat:'gozellik',rating:4.7,reviews:67,badge:'new',brand:'Philips',installment:''},
];

const CATS = [
  {key:'all',icon:'🛍️',label:'Hammasi',count:PRODUCTS.length},
  {key:'elektronika',icon:'📱',label:'Elektronika',count:PRODUCTS.filter(p=>p.cat==='elektronika').length},
  {key:'kiyim',icon:'👕',label:'Kiyim',count:PRODUCTS.filter(p=>p.cat==='kiyim').length},
  {key:'oziq',icon:'🍎',label:'Oziq-ovqat',count:PRODUCTS.filter(p=>p.cat==='oziq').length},
  {key:'uy',icon:'🏠',label:'Uy jihozi',count:PRODUCTS.filter(p=>p.cat==='uy').length},
  {key:'sport',icon:'⚽',label:'Sport',count:PRODUCTS.filter(p=>p.cat==='sport').length},
  {key:'gozellik',icon:'💄',label:"Go'zallik",count:PRODUCTS.filter(p=>p.cat==='gozellik').length},
];

const FLASH_PRODUCTS = PRODUCTS.filter(p=>p.oldPrice).slice(0,6);
const CAT_BG = {elektronika:'#e8f0fe',kiyim:'#fce4ec',oziq:'#e8f5e9',uy:'#fff3e0',sport:'#e0f7fa',gozellik:'#f3e5f5'};

let cart = [];
let wishlist = [];
let users = JSON.parse(localStorage.getItem('ts_users')||'[]');
let currentUser = JSON.parse(localStorage.getItem('ts_user')||'null');
let orders = JSON.parse(localStorage.getItem('ts_orders_list')||'[]');
let orderCounter = parseInt(localStorage.getItem('ts_order_cnt')||'0');
let currentCat = 'all';
let currentSort = 'default';
let currentView = 'grid';
let detailQty = 1;
let currentCheckoutStep = 1;
let promoApplied = false;

// ============ INIT ============
function init(){
  renderCats();
  renderFlashItems();
  renderProducts(getFilteredProducts());
  updateAuthUI();
  updateCartUI();
  updateWishUI();
  startTimer();
  animatePromoStats();
  document.querySelectorAll('.pay-method').forEach(m=>{
    m.addEventListener('click',function(){document.querySelectorAll('.pay-method').forEach(x=>x.classList.remove('selected'));this.classList.add('selected')});
  });
}

// ============ CATS ============
function renderCats(){
  document.getElementById('catsGrid').innerHTML = CATS.map(c=>`
    <div class="cat-card ${c.key===currentCat?'active':''}" onclick="filterCat('${c.key}',this)">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-label">${c.label}</div>
      <div class="cat-count">${c.count} ta</div>
    </div>`).join('');
}

// ============ FLASH ITEMS ============
function renderFlashItems(){
  document.getElementById('flashItems').innerHTML = FLASH_PRODUCTS.map(p=>{
    const disc = Math.round((1-p.price/p.oldPrice)*100);
    return `<div class="flash-item" onclick="openDetail(${p.id})">
      <div class="flash-item-emoji">${p.emoji}</div>
      <div>
        <div class="flash-item-name">${p.name.slice(0,20)}...</div>
        <div class="flash-item-price">${fmt(p.price)} <span class="flash-item-disc">-${disc}%</span></div>
      </div>
    </div>`;
  }).join('');
}

// ============ PRODUCTS ============
function getFilteredProducts(){
  let prods = currentCat==='all' ? [...PRODUCTS] : PRODUCTS.filter(p=>p.cat===currentCat);
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const sc = document.getElementById('searchCat').value;
  if(sc!=='all') prods = PRODUCTS.filter(p=>p.cat===sc);
  if(q) prods = prods.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q));
  // price filter
  const minP = parseInt(document.getElementById('priceMin').value)||0;
  const maxP = parseInt(document.getElementById('priceMax').value)||Infinity;
  if(minP||maxP<Infinity) prods = prods.filter(p=>p.price>=minP&&p.price<=maxP);
  // rating filter
  const minR = parseFloat(document.querySelector('input[name=rating]:checked')?.value||0);
  if(minR>0) prods = prods.filter(p=>p.rating>=minR);
  // sort
  if(currentSort==='price_asc') prods.sort((a,b)=>a.price-b.price);
  else if(currentSort==='price_desc') prods.sort((a,b)=>b.price-a.price);
  else if(currentSort==='rating') prods.sort((a,b)=>b.rating-a.rating);
  else if(currentSort==='new') prods.sort((a,b)=>(b.badge==='new')-(a.badge==='new'));
  return prods;
}

function renderProducts(prods){
  document.getElementById('prodCount').textContent = prods.length;
  const grid = document.getElementById('productsGrid');
  if(!prods.length){grid.innerHTML='<div style="color:var(--muted);padding:3rem;font-size:1rem;font-weight:700;grid-column:1/-1;text-align:center">😔 Mahsulot topilmadi</div>';return}
  grid.innerHTML = prods.map(p=>{
    const disc = p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
    const wished = wishlist.find(w=>w.id===p.id);
    const badgeTpl = p.badge==='new'?'<span class="prod-badge badge-new">YANGI</span>':p.badge==='hot'?'<span class="prod-badge badge-hot">🔥 TOP</span>':p.badge==='sale'?`<span class="prod-badge badge-sale">-${disc}%</span>`:'';
    return `<div class="prod-card" onclick="openDetail(${p.id})">
      <div class="prod-img" style="background:${CAT_BG[p.cat]||'#f5f5f5'}">
        ${badgeTpl}
        <button class="prod-wish ${wished?'wished':''}" onclick="event.stopPropagation();toggleWish(${p.id})" id="wish${p.id}">${wished?'❤️':'🤍'}</button>
        ${p.emoji}
      </div>
      <div class="prod-body">
        <div class="prod-body-left">
          <div class="prod-name">${p.name}</div>
          <div class="prod-desc">${p.desc}</div>
          <div class="prod-rating">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
            <span class="rating-num">${p.rating} (${p.reviews})</span>
          </div>
          ${p.brand?`<div class="prod-seller">${p.brand} <span class="verified">✓</span></div>`:''}
          <div class="prod-price">
            <span class="price-main">${fmt(p.price)}</span>
            ${p.oldPrice?`<span class="price-old">${fmt(p.oldPrice)}</span><span class="price-disc">-${disc}%</span>`:''}
            ${p.installment?`<div class="installment">💳 ${p.installment}</div>`:''}
          </div>
        </div>
        <div class="prod-body-right">
          <button class="add-cart-btn" id="btn${p.id}" onclick="event.stopPropagation();addToCart(${p.id})">🛒 Savatga</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCat(cat, el){
  currentCat=cat;
  document.querySelectorAll('.cat-card').forEach(c=>c.classList.remove('active'));
  if(el) el.classList.add('active');
  renderProducts(getFilteredProducts());
}
function filterCatNav(cat){filterCat(cat,null);renderCats()}
function filterBadge(badge){
  currentCat='all';renderCats();
  renderProducts(PRODUCTS.filter(p=>p.badge===badge));
}
function filterProducts(){renderProducts(getFilteredProducts())}
function applyFilters(){renderProducts(getFilteredProducts())}
function sortProds(s,el){
  currentSort=s;
  document.querySelectorAll('.sort-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderProducts(getFilteredProducts());
}
function setView(v){
  currentView=v;
  const grid=document.getElementById('productsGrid');
  document.getElementById('gridViewBtn').classList.toggle('active',v==='grid');
  document.getElementById('listViewBtn').classList.toggle('active',v==='list');
  if(v==='list'){grid.classList.add('list-view');grid.querySelectorAll('.prod-desc').forEach(d=>d.style.display='block')}
  else{grid.classList.remove('list-view');grid.querySelectorAll('.prod-desc').forEach(d=>d.style.display='')}
}
function setNav(el){document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));el.classList.add('active')}

// ============ DETAIL ============
function openDetail(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  detailQty=1;
  const disc = p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;
  const wished = wishlist.find(w=>w.id===id);
  const reviews = [
    {name:'Alisher K.',text:'Juda zo\'r mahsulot! Sifati yuqori, tez yetkazib berishdi. Tavsiya qilaman!',stars:5,date:'12.05.2026'},
    {name:'Malika U.',text:'Narxi nisbatan arzon, sifati yaxshi. Yana buyurtma beraman.',stars:4,date:'08.05.2026'},
    {name:'Bobur T.',text:'A\'lo! Rasmda ko\'rsatilganday keldi. Rahmat TermezShop!',stars:5,date:'03.05.2026'},
  ];
  document.getElementById('detailContent').innerHTML = `
    <div class="pd-top">
      <div class="pd-gallery" style="background:${CAT_BG[p.cat]||'#f5f5f5'}">${p.emoji}
        ${p.badge==='new'?'<span class="prod-badge badge-new" style="position:absolute;top:12px;left:12px">YANGI</span>':p.badge==='hot'?'<span class="prod-badge badge-hot" style="position:absolute;top:12px;left:12px">🔥 TOP</span>':''}
      </div>
      <div class="pd-info">
        ${p.badge==='new'?'<span class="pd-badge badge-new">YANGI</span>':p.badge==='hot'?'<span class="pd-badge badge-hot">🔥 TOP</span>':''}
        <div class="pd-name">${p.name}</div>
        <div class="pd-rating-row">
          <span class="stars" style="font-size:1rem">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span style="font-size:0.82rem;color:var(--muted)">${p.rating} reyting • ${p.reviews} sharh</span>
          ${p.brand?`<span style="font-size:0.78rem;color:var(--green);font-weight:700">✓ ${p.brand}</span>`:''}
        </div>
        <div class="pd-price-row">
          <span class="pd-price-big">${fmt(p.price)}</span>
          ${p.oldPrice?`<span style="font-size:0.95rem;color:var(--muted);text-decoration:line-through">${fmt(p.oldPrice)}</span><span class="price-disc" style="font-size:0.82rem">-${disc}%</span>`:''}
        </div>
        ${p.installment?`<div class="installment" style="margin-bottom:0.75rem">💳 ${p.installment}</div>`:''}
        <div class="pd-desc">${p.desc}</div>
        <div class="pd-features">
          <div class="pd-feat"><span>🚚</span><span>Termez shahri — 1-2 kun ichida yetkazib berish</span></div>
          <div class="pd-feat"><span>🔒</span><span>Xavfsiz to'lov • Kafolat bilan</span></div>
          <div class="pd-feat"><span>↩️</span><span>30 kun ichida qaytarish mumkin</span></div>
          ${p.installment?`<div class="pd-feat"><span>💳</span><span>Muddatli to'lov mavjud</span></div>`:''}
        </div>
        <div class="pd-qty-row">
          <div class="qty-ctrl">
            <button class="qty-b" onclick="chDQty(-1)">−</button>
            <span class="qty-v" id="dQtyVal">1</span>
            <button class="qty-b" onclick="chDQty(1)">+</button>
          </div>
          <span style="font-size:0.82rem;color:var(--muted)">Mavjud: <strong style="color:var(--dark)">10+ dona</strong></span>
        </div>
        <div class="pd-actions">
          <button class="pd-buy-btn" onclick="addToCartFromDetail(${p.id})">🛒 Savatga qo'shish</button>
          <button class="pd-wish-btn" onclick="toggleWish(${p.id});this.textContent=wishlist.find(w=>w.id===${p.id})?'❤️':'🤍'">${wished?'❤️':'🤍'}</button>
        </div>
      </div>
    </div>
    <div class="pd-reviews">
      <div class="pd-review-title">Mijozlar sharhlari (${reviews.length})</div>
      ${reviews.map((r,i)=>`
        <div class="review-item">
          <div class="rev-av" style="background:hsl(${i*80+20},65%,55%)">${r.name.split(' ').map(w=>w[0]).join('')}</div>
          <div>
            <div style="display:flex;align-items:center;gap:0.75rem">
              <span class="rev-name">${r.name}</span>
              <span class="stars" style="font-size:0.8rem">${'★'.repeat(r.stars)}</span>
              <span class="rev-date" style="font-size:0.72rem;color:var(--muted)">${r.date}</span>
            </div>
            <div class="rev-text">${r.text}</div>
          </div>
        </div>`).join('')}
    </div>`;
  openModal('detail');
}
function chDQty(d){detailQty=Math.max(1,detailQty+d);document.getElementById('dQtyVal').textContent=detailQty}
function addToCartFromDetail(id){
  for(let i=0;i<detailQty;i++){
    const p=PRODUCTS.find(x=>x.id===id);const ex=cart.find(c=>c.id===id);
    if(ex)ex.qty++;else cart.push({...p,qty:1});
  }
  updateCartUI();closeModal('detail');
  showToast('✅ '+PRODUCTS.find(p=>p.id===id).name+' savatga qo\'shildi!','green');
}

// ============ CART ============
function addToCart(id){
  if(!currentUser){openModal('login');showToast('⚠️ Kiring yoki ro\'yxatdan o\'ting!','red');return}
  const p=PRODUCTS.find(x=>x.id===id);const ex=cart.find(c=>c.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  updateCartUI();
  const btn=document.getElementById('btn'+id);
  if(btn){btn.innerHTML='✓ Qo\'shildi';btn.classList.add('added');setTimeout(()=>{btn.innerHTML='🛒 Savatga';btn.classList.remove('added')},1500)}
  showToast('✅ '+p.name+' savatga qo\'shildi!','green');
}
function updateCartQty(id,d){
  const it=cart.find(c=>c.id===id);if(!it)return;
  it.qty+=d;if(it.qty<=0)cart=cart.filter(c=>c.id!==id);
  updateCartUI();
}
function removeFromCart(id){cart=cart.filter(c=>c.id!==id);updateCartUI()}
function updateCartUI(){
  const total=cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent=total;
  const list=document.getElementById('cartItems')||document.getElementById('cartItemsPanel');
  const panel=document.getElementById('cartPanel');
  const listEl=panel.querySelector('.cart-items-list');
  const footer=panel.querySelector('.cart-footer');
  if(!cart.length){
    listEl.innerHTML='';
    panel.querySelector('.cart-empty-state').style.display='flex';
    footer.style.display='none';return;
  }
  panel.querySelector('.cart-empty-state').style.display='none';
  const sum=cart.reduce((s,c)=>s+c.price*c.qty,0);
  listEl.innerHTML=cart.map(c=>`
    <div class="cart-item">
      <div class="ci-img">${c.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-price">${fmt(c.price)}</div>
        <div class="ci-qty">
          <button class="ci-qb" onclick="updateCartQty(${c.id},-1)">−</button>
          <span class="ci-qn">${c.qty}</span>
          <button class="ci-qb" onclick="updateCartQty(${c.id},1)">+</button>
          <button class="ci-del" onclick="removeFromCart(${c.id})">🗑️</button>
        </div>
      </div>
    </div>`).join('');
  footer.style.display='block';
  const disc=promoApplied?Math.floor(sum*0.1):0;
  footer.querySelector('.cart-summary').innerHTML=`
    <div class="sum-row"><span>Mahsulotlar (${total} ta)</span><span>${fmt(sum)}</span></div>
    <div class="sum-row"><span>Yetkazib berish</span><span style="color:var(--green)">Bepul</span></div>
    ${promoApplied?`<div class="sum-row"><span>Promo chegirma (-10%)</span><span style="color:var(--green)">-${fmt(disc)}</span></div>`:''}
    <div class="sum-row total"><span>Jami:</span><span>${fmt(sum-disc)}</span></div>`;
}
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open')}
function applyPromo(){
  const v=document.getElementById('promoCode').value.trim().toUpperCase();
  if(v==='TERMEZ10'||v==='SAVDO2026'){promoApplied=true;document.getElementById('promoSucc').style.display='block';updateCartUI();showToast('🎉 Promo kodi qo\'llanildi! -10%','green')}
  else showToast('❌ Promo kodi noto\'g\'ri','red');
}

// ============ WISHLIST ============
function toggleWish(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const idx=wishlist.findIndex(w=>w.id===id);
  if(idx>=0){wishlist.splice(idx,1);showToast('💔 Sevimlilardan o\'chirildi','red')}
  else{wishlist.push(p);showToast('❤️ Sevimlilarga qo\'shildi!','green')}
  updateWishUI();
  const btn=document.getElementById('wish'+id);
  if(btn){btn.textContent=wishlist.find(w=>w.id===id)?'❤️':'🤍';btn.classList.toggle('wished',!!wishlist.find(w=>w.id===id))}
}
function updateWishUI(){
  document.getElementById('wishCount').textContent=wishlist.length;
  const el=document.getElementById('wlItems');
  if(!wishlist.length){el.innerHTML='<div style="text-align:center;color:var(--muted);padding:3rem 1rem;font-weight:700">❤️<br>Sevimlilar bo\'sh</div>';return}
  el.innerHTML=wishlist.map(p=>`
    <div class="wl-item">
      <div class="wl-img">${p.emoji}</div>
      <div class="wl-info">
        <div class="wl-name">${p.name}</div>
        <div class="wl-price">${fmt(p.price)}</div>
      </div>
      <div class="wl-actions">
        <button class="wl-add" onclick="addToCart(${p.id})">Savat</button>
        <button class="wl-del" onclick="toggleWish(${p.id})">O'chir</button>
      </div>
    </div>`).join('');
  // also update profile wishlist
  const pw=document.getElementById('wishlistInProfile');
  if(pw) pw.innerHTML=wishlist.length?wishlist.map(p=>`<div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem;background:var(--bg);border-radius:10px;margin-bottom:0.5rem"><span style="font-size:1.5rem">${p.emoji}</span><span style="font-weight:700;font-size:0.88rem">${p.name}</span><span style="margin-left:auto;color:var(--red);font-weight:800;font-size:0.88rem">${fmt(p.price)}</span></div>`).join(''):'<div style="color:var(--muted);font-size:0.88rem">Sevimlilar bo\'sh</div>';
}
function toggleWishlist(){document.getElementById('wishlistPanel').classList.toggle('open')}

// ============ AUTH ============
function doRegister(){
  const first=document.getElementById('rFirst').value.trim();
  const last=document.getElementById('rLast').value.trim();
  const phone=document.getElementById('rPhone').value.trim();
  const email=document.getElementById('rEmail').value.trim();
  const pass=document.getElementById('rPass').value;
  const pass2=document.getElementById('rPass2').value;
  const agree=document.getElementById('rAgree').checked;
  const err=document.getElementById('rErr');err.style.display='none';
  if(!first||!last||!phone||!email||!pass){err.textContent='Barcha maydonlarni to\'ldiring!';err.style.display='block';return}
  if(!agree){err.textContent='Foydalanish shartlariga rozi bo\'lishingiz kerak!';err.style.display='block';return}
  if(pass.length<6){err.textContent='Parol kamida 6 ta belgi bo\'lsin!';err.style.display='block';return}
  if(pass!==pass2){err.textContent='Parollar mos kelmadi!';err.style.display='block';return}
  if(users.find(u=>u.email===email)){err.textContent='Bu email allaqachon ro\'yxatdan o\'tgan!';err.style.display='block';return}
  const user={id:Date.now(),first,last,phone,email,pass,points:500,joined:new Date().toLocaleDateString('uz-UZ')};
  users.push(user);localStorage.setItem('ts_users',JSON.stringify(users));
  loginUser(user);closeModal('register');showToast('🎉 Xush kelibsiz, '+first+'! +500 ball sovg\'a!','green');
}
function doLogin(){
  const email=document.getElementById('liEmail').value.trim();
  const pass=document.getElementById('liPass').value;
  const err=document.getElementById('liErr');err.style.display='none';
  const user=users.find(u=>(u.email===email||u.phone===email)&&u.pass===pass);
  if(!user){err.style.display='block';return}
  loginUser(user);closeModal('login');showToast('👋 Xush kelibsiz, '+user.first+'!','green');
}
function loginUser(u){currentUser=u;localStorage.setItem('ts_user',JSON.stringify(u));updateAuthUI()}
function logout(){currentUser=null;localStorage.removeItem('ts_user');cart=[];updateAuthUI();updateCartUI();showPage('shop');showToast('Hisobdan chiqdingiz','red')}
function updateAuthUI(){
  const a=document.getElementById('authArea');
  if(currentUser){
    const ini=(currentUser.first[0]+(currentUser.last?currentUser.last[0]:'')).toUpperCase();
    a.innerHTML=`<div class="user-badge"><div class="user-av" onclick="showProfilePage()" title="Profilim">${ini}</div><span style="font-size:0.82rem">${currentUser.first}</span></div>`;
    document.getElementById('profAv').textContent=ini;
    document.getElementById('profName').textContent=currentUser.first+' '+currentUser.last;
    document.getElementById('profPhone').textContent=currentUser.phone||currentUser.email;
    document.getElementById('profJoined').textContent='Ro\'yxatdan o\'tgan: '+currentUser.joined;
    document.getElementById('profPts').textContent=currentUser.points||500;
  }else{
    a.innerHTML=`<button class="hdr-btn" onclick="openModal('login')">Kirish / Ro'yxat</button>`;
  }
}

// ============ CHECKOUT ============
function startCheckout(){
  if(!currentUser){closeModal('checkout');toggleCart();openModal('login');return}
  if(!cart.length){showToast('Savat bo\'sh!','red');return}
  currentCheckoutStep=1;goStep(1);
  const sum=cart.reduce((s,c)=>s+c.price*c.qty,0);
  const disc=promoApplied?Math.floor(sum*0.1):0;
  document.getElementById('coItemsList').innerHTML=cart.map(c=>`<div class="co-item"><span>${c.emoji} ${c.name} × ${c.qty}</span><span>${fmt(c.price*c.qty)}</span></div>`).join('');
  document.getElementById('coSubtotal').textContent=fmt(sum);
  document.getElementById('coDiscount').textContent=disc?'-'+fmt(disc):'0 so\'m';
  document.getElementById('coTotal').textContent=fmt(sum-disc);
  if(currentUser){
    document.getElementById('coFirst').value=currentUser.first||'';
    document.getElementById('coLast').value=currentUser.last||'';
    document.getElementById('coPhone').value=currentUser.phone||'';
  }
  document.getElementById('cartPanel').classList.remove('open');
  openModal('checkout');
}
function goStep(n){
  if(n===3){
    const first=document.getElementById('coFirst').value.trim();
    const phone=document.getElementById('coPhone').value.trim();
    const addr=document.getElementById('coAddr').value.trim();
    const err=document.getElementById('coErr');err.style.display='none';
    if(!first||!phone||!addr){err.style.display='block';return}
  }
  currentCheckoutStep=n;
  for(let i=1;i<=3;i++){
    document.getElementById('step'+i).className='step'+(i<n?' done':i===n?' active':'');
    document.getElementById('cs'+i).className='checkout-step-content'+(i===n?' active':'');
  }
}
function placeOrder(){
  const sum=cart.reduce((s,c)=>s+c.price*c.qty,0);
  const disc=promoApplied?Math.floor(sum*0.1):0;
  const finalSum=sum-disc;
  const payMethod=document.querySelector('input[name=pay]:checked')?.value||'Naqd pul';
  const addr=document.getElementById('coAddr').value.trim()+', '+document.getElementById('coDistrict').value;
  orderCounter++;
  localStorage.setItem('ts_order_cnt',orderCounter);
  const oid='#TRM-'+String(orderCounter).padStart(5,'0');
  const order={id:oid,date:new Date().toLocaleDateString('uz-UZ'),items:[...cart],total:finalSum,payment:payMethod,addr,status:'new'};
  orders.unshift(order);localStorage.setItem('ts_orders_list',JSON.stringify(orders));
  // success page
  document.getElementById('sOrderId').textContent=oid;
  document.getElementById('sDate').textContent=order.date;
  document.getElementById('sPayment').textContent=payMethod;
  document.getElementById('sAddr').textContent='Termez, '+addr;
  document.getElementById('sTotal').textContent=fmt(finalSum);
  const name=((currentUser?.first||'')+' '+(currentUser?.last||'')).trim().toUpperCase()||'MEHMON';
  document.getElementById('lCardName').textContent=name;
  document.getElementById('lCardNum').textContent='•••• •••• •••• '+String(orderCounter).padStart(4,'0');
  document.getElementById('lCardPts').textContent='+'+(Math.floor(finalSum/1000));
  cart=[];promoApplied=false;updateCartUI();
  closeModal('checkout');showPage('success');
  renderOrdersList();
}
function renderOrdersList(){
  const el=document.getElementById('ordersList');
  if(!el)return;
  if(!orders.length){el.innerHTML='<div style="color:var(--muted);font-size:0.88rem;padding:1rem">Hali buyurtma yo\'q.</div>';return}
  el.innerHTML=orders.map(o=>`
    <div class="order-item">
      <div class="order-item-left">
        <div class="oi-id">${o.id}</div>
        <div class="oi-date">${o.date}</div>
        <div class="oi-items-preview">${o.items.slice(0,2).map(i=>i.emoji+' '+i.name.slice(0,15)).join(', ')}${o.items.length>2?'...':''}</div>
      </div>
      <span class="order-status ${o.status==='delivered'?'status-delivered':o.status==='on-way'?'status-on-way':'status-new'}">${o.status==='delivered'?'✅ Yetkazildi':o.status==='on-way'?'🚚 Yo\'lda':'🆕 Yangi'}</span>
      <div class="order-total-right">${fmt(o.total)}</div>
    </div>`).join('');
}

// ============ PAGES ============
function showPage(name){
  document.getElementById('shopPage').style.display=name==='shop'?'block':'none';
  document.getElementById('successPage').style.display=name==='success'?'block':'none';
  document.getElementById('profilePage').className='profile-page'+(name==='profile'?' active':'');
  window.scrollTo(0,0);
}
function showProfilePage(){
  if(!currentUser){openModal('login');return}
  renderOrdersList();updateWishUI();showPage('profile');
}
function switchProfileTab(tab,el){
  document.querySelectorAll('.pm-item').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.pc-section').forEach(s=>s.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
}

// ============ MODAL ============
function openModal(n){document.getElementById(n+'Modal').classList.remove('hidden')}
function closeModal(n){document.getElementById(n+'Modal').classList.add('hidden')}
function switchModal(f,t){closeModal(f);openModal(t)}

// ============ TIMER ============
function startTimer(){
  let h=5,m=59,s=47;
  setInterval(()=>{
    s--;if(s<0){s=59;m--}if(m<0){m=59;h--}if(h<0){h=5;m=59;s=59}
    document.getElementById('th').textContent=String(h).padStart(2,'0');
    document.getElementById('tm').textContent=String(m).padStart(2,'0');
    document.getElementById('ts').textContent=String(s).padStart(2,'0');
  },1000);
}

// ============ PROMO STATS ============
function animatePromoStats(){
  const targets=[{el:'ps1',v:500},{el:'ps2',v:12400},{el:'ps3',v:89}];
  targets.forEach(({el,v})=>{
    let cur=0;const step=Math.ceil(v/60);
    const t=setInterval(()=>{cur+=step;if(cur>=v){cur=v;clearInterval(t)}document.getElementById(el).textContent=cur.toLocaleString('uz-UZ');},25);
  });
}

// ============ TOAST ============
function showToast(msg,type='green'){
  const t=document.getElementById('toast');
  t.textContent=msg;t.className=`toast t-${type} show`;
  setTimeout(()=>t.className=`toast t-${type}`,2500);
}

// ============ FORMAT ============
function fmt(n){return n.toLocaleString('uz-UZ')+' so\'m'}

init();
