/* Science Quest offline helper: keeps the whole site and all recorded voices on the laptop. */
const VER='210d8c4989';
const APP='sq-app-'+VER;
const SHELL=["index.html", "./", "hub.js", "icon-192.png", "icon-512.png", "insects/art.js", "insects/data.js", "insects/gfx.js", "insects/ilib.js", "insects/index.html", "insects/labs.js", "light/acts.js", "light/art.js", "light/data.js", "light/index.html", "light/labs2.js", "manifest.webmanifest", "plants/art.js", "plants/data.js", "plants/gfx.js", "plants/index.html", "plants/labs.js", "shared/core.css", "shared/core.js", "shared/time.js", "sound/index.html", "sound/world.js", "insects/", "light/", "plants/", "sound/"];
const WORLDS=['hub','sound','light','plants','insects'];
const root=new URL('./',self.location).href;

/* voice packs have a content hash in their address (?h=…), so a saved pack never needs to be downloaded again */
async function saveVoices(){const vc=await caches.open('sq-voices');for(const w of WORLDS){try{const base=root+'audio/'+w+'/';const r=await fetch(base+'v_index.json',{cache:'no-cache'});if(!r.ok)continue;const app=await caches.open(APP);await app.put(base+'v_index.json',r.clone());const idx=await r.json();for(const f of idx){const u=new URL(base+f).href;if(await vc.match(u))continue;try{const p=await fetch(u);if(p.ok)await vc.put(u,p)}catch(e){}}}catch(e){}}}

self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil((async()=>{const c=await caches.open(APP);await Promise.all(SHELL.map(async f=>{try{const r=await fetch(root+f,{cache:'no-cache'});if(r.ok)await c.put(root+f,r)}catch(err){}}));saveVoices()})())});

self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys()){if(k.startsWith('sq-app-')&&k!==APP)await caches.delete(k)}await self.clients.claim();saveVoices()})())});

self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
 /* Google fonts: keep a copy for offline use */
 if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){e.respondWith((async()=>{const c=await caches.open('sq-fonts');const hit=await c.match(req);const net=fetch(req).then(r=>{c.put(req,r.clone());return r}).catch(()=>hit);return hit||net})());return}
 if(url.origin!==location.origin||!req.url.startsWith(root))return;
 /* recorded voices: saved copy first */
 if(url.pathname.includes('/audio/')&&url.searchParams.has('h')){e.respondWith((async()=>{const vc=await caches.open('sq-voices');const hit=await vc.match(req.url);if(hit)return hit;const r=await fetch(req);if(r.ok)vc.put(req.url,r.clone());return r})());return}
 /* everything else: the newest version when online, the saved copy when offline */
 e.respondWith((async()=>{const c=await caches.open(APP);try{const r=await fetch(req,{cache:'no-cache'});if(r.ok)c.put(req.url.split('#')[0],r.clone());return r}catch(err){const hit=await c.match(req,{ignoreSearch:true})||await caches.match(req,{ignoreSearch:true});if(hit)return hit;if(req.mode==='navigate'){const home=await c.match(root+'index.html');if(home)return home}return new Response('Offline',{status:503})}})())});
