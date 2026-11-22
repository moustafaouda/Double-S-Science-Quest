/* ---------- Science Quest hub: worlds map ---------- */
const WORLDS=[
 {id:5,url:'sound/',em:'🔊',ch:'Chapter 5',title:'Properties of Sound',ar:'خَصَائِصُ الصَّوْتِ',color:'#8c5cff',ready:true},
 {id:4,url:'light/',em:'☀️',ch:'Chapter 4',title:'Properties of Light',ar:'خَصَائِصُ الضَّوْءِ',color:'#ff9f1c',ready:true},
 {id:3,url:'plants/',em:'🌱',ch:'Chapter 3',title:'How Plants Grow',ar:'كَيْفَ يَنْمُو النَّبَاتُ',color:'#22b46e',ready:true},
 {id:2,url:'insects/',em:'🦋',ch:'Chapter 2',title:'How Insects Grow',ar:'كَيْفَ تَنْمُو الْحَشَرَاتُ',color:'#1aa3a3',ready:false}];
function worldBadges(id){const p=wprog(id),g=((P().grand||{})[id])||{};const won=Object.keys(g).length;return `${p.boss?'🏆':''}${won>=5?'👑':''}`}
function mapScreen(){const last=WORLDS.find(w=>w.id===S.lastWorld&&w.ready);
 return sayMe(`Hi ${NM()}! Pick a world to explore. ${AR('اخْتَرْ عَالَمًا لِتَسْتَكْشِفَهُ!')}`,'wave')
 +(last?`<div class="center" style="margin:-4px 0 16px"><a class="btn big y" href="${last.url}" style="text-decoration:none;display:inline-block" onclick="hush();SFX.click()">▶ Continue: ${last.em} ${last.title}</a></div>`:'')
 +`<div class="card" style="margin-bottom:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap"><div style="font-size:54px">🏅</div><div style="flex:1"><h2>Your trophy shelf</h2>${AR('رَفُّ جَوَائِزِكَ')}</div><div class="center"><div class="pts" style="color:#f5a500">⭐ ${allStars()}</div><div style="font-weight:800">stars in all worlds</div></div></div>`
 +`<div class="worlds">${WORLDS.map(w=>{const body=`<div class="em ${w.ready?'bounce':''}">${w.em}</div><div><div style="font-size:18px;opacity:.9">${w.ch}</div><h2 style="color:#fff">${w.title}</h2><span class="ar" style="color:#fff">${w.ar}</span><div style="margin-top:6px;font-weight:800">${w.ready?'⭐ '+worldStars(w.id)+' stars '+worldBadges(w.id):'🔒 Coming soon'}</div></div>`;
   return w.ready?`<a class="world" href="${w.url}" style="background:${w.color};text-decoration:none" onclick="hush();SFX.click()">${body}</a>`:`<div class="world lock" style="background:${w.color}">${body}</div>`}).join('')}</div>`}
