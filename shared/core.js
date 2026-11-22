const K='scienceQuest_v1';
let S=null;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}
if(!S||!S.players)S={players:{},cur:null,showAr:true,voice:true};
if(S.rateEn==null)S.rateEn=.85;if(S.rateAr==null)S.rateAr=.8;if(S.sfx==null)S.sfx=true;
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}
const P=()=>S.players[S.cur];
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const NM=()=>P()?esc(P().name):'friend';
const PN=()=>P()?P().name:'friend';
const calm=()=>!P()||P().mode!=='challenge';
const AR=t=>`<span class="ar">${t}</span>`;
const PAGE=window.SQ_PAGE||'hub',HUB=window.SQ_HUB||'./';
let WORLD=null,ORDER=[],ACT={},GAMES=[],ROUNDS=[];
function initWorld(W){WORLD=W;ORDER=W.lessons.flatMap(l=>l.acts);ACT=Object.fromEntries([...ORDER,...W.free].map(a=>[a[0],a]));GAMES=W.games||[];ROUNDS=W.rounds||[];if(W.breaks)W.breaks.forEach(b=>BREAKS.push([...b,W.id]));breakBag=[];ACT.grand=['grand','grand',W.grandTitle||'The Grand Challenge','🏆']}
const wprog=wid=>{const p=(P()&&P().prog)||{};const v=p[wid];return v&&typeof v==='object'?v:{}};
const prog=id=>wprog(WORLD.id)[id]||0;
function unlocked(id){if(ACT[id][1]==='flash'||P().unlockAll)return true;const i=ORDER.findIndex(a=>a[0]===id);if(i<=0||prog(id)>0)return true;let j=i-1;while(j>0&&ORDER[j][1]==='words')j--;return prog(ORDER[j][0])>0}
const worldStars=wid=>Object.values(wprog(wid)).reduce((a,b)=>a+(+b||0),0);
const allStars=()=>Object.keys((P()&&P().prog)||{}).reduce((a,x)=>a+worldStars(x),0);
const totalStars=()=>WORLD?worldStars(WORLD.id):allStars();
function award(id,st){const p=P();p.prog=p.prog||{};if(typeof p.prog[WORLD.id]!=='object'||!p.prog[WORLD.id])p.prog[WORLD.id]={};const w=p.prog[WORLD.id];w[id]=Math.max(w[id]||0,st);save()}
const starStr=n=>'★'.repeat(n)+'☆'.repeat(3-n);
function goHub(){if(PAGE==='hub')go('map');else{hush();try{sessionStorage.setItem('sqBack','1')}catch(e){}location.href=HUB}}
function goHome(){if(PAGE==='hub')go('map');else go('world')}

/* ---------- game sounds: rendered to WAV and played with <audio> ---------- */
const SR=22050,TAU=Math.PI*2,SND={};
function wavURL(d){const n=d.length,b=new ArrayBuffer(44+n*2),v=new DataView(b),W=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};W(0,'RIFF');v.setUint32(4,36+n*2,true);W(8,'WAVE');W(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,SR,true);v.setUint32(28,SR*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);W(36,'data');v.setUint32(40,n*2,true);for(let i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,d[i]))*32767,true);return URL.createObjectURL(new Blob([b],{type:'audio/wav'}))}
function mk(name,dur,fn){try{const n=Math.floor(SR*dur),d=new Float32Array(n);let mx=0;for(let i=0;i<n;i++){d[i]=fn(i/SR);mx=Math.max(mx,Math.abs(d[i]))}if(mx>0)for(let i=0;i<n;i++)d[i]=d[i]/mx*.92;const fade=Math.min(n,400);for(let i=0;i<fade;i++)d[n-1-i]*=i/fade;SND[name]=wavURL(d)}catch(e){}}
function buildSounds(){
 mk('click',.07,t=>Math.sin(TAU*900*t)*Math.exp(-t*60));
 mk('good',.45,t=>{const s=t<.13?0:1,f=s?988:659,tt=s?t-.13:t;return (Math.sin(TAU*f*t)+.3*Math.sin(TAU*2*f*t))*Math.exp(-tt*9)});
 mk('bad',.4,t=>Math.sign(Math.sin(TAU*(190-80*t)*t))*.5*Math.exp(-t*5));
 mk('star',.8,t=>{const k=Math.min(3,Math.floor(t/.11)),f=[523,659,784,1047][k],tt=t-k*.11;return (Math.sin(TAU*f*t)+.4*Math.sin(TAU*2*f*t))*Math.exp(-tt*5)});
 mk('drum',.9,t=>{const ph=55*t+95/18*(1-Math.exp(-18*t));return Math.sin(TAU*ph)*Math.exp(-t*4.5)+(Math.random()*2-1)*.35*Math.exp(-t*45)});
 mk('tri',2.4,t=>(Math.sin(TAU*1250*t)+.55*Math.sin(TAU*2710*t)+.3*Math.sin(TAU*4180*t))*Math.exp(-t*1.5)*(1-Math.exp(-t*400)));
 let ph=0;mk('siren',1.3,t=>{ph+=TAU*(620+180*Math.sin(TAU*2.5*t))/SR;return Math.sign(Math.sin(ph))*.6+Math.sin(ph*2)*.3});
 let y=0;mk('boom',.7,t=>{y+=((Math.random()*2-1)-y)*.08;return y*2.5*Math.exp(-t*7)+Math.sin(TAU*58*t)*Math.exp(-t*5)});
 mk('zap',.5,t=>Math.sin(TAU*(900+2600*t)*t)*Math.exp(-t*5)*.6);
 mk('ruler',3.2,t=>(Math.sin(TAU*82*t)+.6*Math.sin(TAU*164*t)+.25*Math.sign(Math.sin(TAU*82*t)))*Math.exp(-t*1.3)*(1-Math.exp(-t*300)));
 mk('band',2.6,t=>(Math.sin(TAU*118*t)+.5*Math.sin(TAU*236*t)+.25*Math.sin(TAU*354*t))*Math.exp(-t*1.7)*(1-Math.exp(-t*300)));
 [147,196,247,294].forEach((f,i)=>{const N=Math.round(SR/f);let buf=new Float32Array(N).map(()=>Math.random()*2-1);for(let r=0;r<3;r++)for(let j=1;j<N;j++)buf[j]=(buf[j]+buf[j-1])/2;let k=0;mk('oud'+i,3,()=>{const x=buf[k%N],y=buf[(k+1)%N];buf[k%N]=(x+y)/2*.997;k++;return x})});
 let ph2=0;mk('whoosh',.9,t=>{ph2+=TAU*(300+500*t)/SR;return Math.sin(ph2)*Math.sin(Math.PI*t/.9)*.5});
}
buildSounds();
function play(name,vol=1){if(!S.sfx||!SND[name])return null;try{const a=new Audio(SND[name]);a.volume=Math.max(0,Math.min(1,vol));const p=a.play();if(p&&p.catch)p.catch(()=>{});return a}catch(e){return null}}
const SFX={good:()=>play('good',.55),bad:()=>play('bad',.3),star:()=>play('star',.6),click:()=>play('click',.25)};

/* ---------- voice ---------- */
const VO={en:null,ar:null};
function voicesFor(L){try{return speechSynthesis.getVoices().filter(v=>v.lang&&v.lang.toLowerCase().startsWith(L))}catch(e){return[]}}
function vScore(v){return(/natural|neural/i.test(v.name)?20:0)+(/online/i.test(v.name)?8:0)+(/google/i.test(v.name)?6:0)+(/jenny|aria|ana|sonia|libby|emma|ava|guy|andrew|hamed|zariyah|salma|shakir|fatima|amany/i.test(v.name)?4:0)+(v.localService?0:2)}
function pickVoices(){for(const L of['en','ar']){const c=voicesFor(L);VO[L]=c.find(v=>v.name===S['v_'+L])||c.sort((a,b)=>vScore(b)-vScore(a))[0]||null}}
const isNat=v=>!!v&&/natural|neural|online|google/i.test(v.name);
function voiceNote(){if(Object.keys(AUD).length>100)return `<div class="vnote ok">🎙️ Recorded natural voices are on (English and Arabic). ✅</div>`;if(!window.speechSynthesis)return '';const en=isNat(VO.en),ar=isNat(VO.ar);if(en&&ar)return `<div class="vnote ok">🗣️ Human-like voices are on. ✅</div>`;return `<div class="vnote">🗣️ <b>The voice may sound like a robot on this browser.</b> For a human-like voice in English and Arabic, open this game's link in <b>Microsoft Edge</b>, then in ⚙️ Settings choose voices with <b>"Natural"</b> in the name.${AR('لِصَوْتٍ طَبِيعِيٍّ، افْتَحِ الرَّابِطَ فِي مُتَصَفِّحِ مَايْكْرُوسُوفْت إِيدْج.')}</div>`}
if(window.speechSynthesis){pickVoices();speechSynthesis.onvoiceschanged=()=>{pickVoices();if(route&&route[0]==='welcome')render()}}
function clean(t,lang){t=String(t).replace(/<br\s*\/?>/gi,'. ').replace(/<[^>]+>/g,'').replace(/&[a-z#0-9]+;/gi,' ');t=t.replace(/\s*[→←]\s*/g,lang==='ar'?'، ثُمَّ ':', then ');t=t.replace(/_{2,}/g,lang==='ar'?' ... ':' blank ');t=t.replace(/[\p{Extended_Pictographic}←-⇿☀-➿️‍⭐⬜]/gu,'');t=t.replace(/["“”]/g,'').replace(/\s+/g,' ').trim();return t}
function utter(t,o={}){const lang=o.lang||'en',u=new SpeechSynthesisUtterance(clean(t,lang));u.lang=lang==='ar'?(VO.ar?VO.ar.lang:'ar-SA'):(VO.en?VO.en.lang:'en-US');if(VO[lang])u.voice=VO[lang];u.rate=o.rate||(lang==='ar'?S.rateAr:S.rateEn);u.pitch=1;u.volume=o.vol==null?1:o.vol;return u}
const AUD={};let curA=null;
const loadVoices=async()=>{const emb=document.querySelectorAll('script[type="application/x-voice"]');if(emb.length){for(const el of emb){await new Promise(r=>setTimeout(r,0));try{Object.assign(AUD,JSON.parse(el.textContent))}catch(e){}}return}const base=window.SQ_VOICE||'audio/';try{const idx=await(await fetch(base+'v_index.json')).json();idx.sort((a,b)=>a.includes('_en')?-1:1);for(const f of idx){try{const r=await fetch(base+f);if(r.ok)Object.assign(AUD,await r.json())}catch(e){}}}catch(e){}};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',loadVoices);else loadVoices();
const VSTAT={rec:0,live:0,miss:[]};
function stripName(t,n){t=String(t);if(!n)return t;const e=n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const re=/^[\x00-\x7f]+$/.test(n)?new RegExp('(,\\s*)?\\b'+e+'\\b(\\s*,)?','gi'):new RegExp('(,\\s*)?'+e+'(\\s*,)?','g');return t.replace(re,(m,a,b)=>a&&b?',':'').replace(/\s+([!?.,])/g,'$1').replace(/^\s*,\s*/,'').replace(/\s{2,}/g,' ').trim()}
function recFor(t,lang){let r=AUD[lang+'|'+clean(t,lang)];if(!r&&P())r=AUD[lang+'|'+clean(stripName(t,PN()),lang)];return r}
function stopA(){if(curA){try{curA.pause()}catch(e){}curA=null}}
const UQ=[];let spTok=0,warmed=false;
function speakP(t,o={}){return new Promise(res=>{if(!S.voice||(onBreak&&!o.brk)||!String(t).trim()){res();return}
 const lang=o.lang||'en',rec=o.live?null:recFor(t,lang);if(rec)VSTAT.rec++;else if(!o.live){VSTAT.live++;VSTAT.miss.push(clean(t,lang).slice(0,60));if(VSTAT.miss.length>8)VSTAT.miss.shift()}
 if(rec){const my=++spTok;stopA();try{if(window.speechSynthesis&&(speechSynthesis.speaking||speechSynthesis.pending))speechSynthesis.cancel()}catch(e){}const a=new Audio('data:audio/ogg;base64,'+rec);a.volume=o.vol==null?1:Math.max(.1,Math.min(1,o.vol));curA=a;let done=false;const fin=()=>{if(done)return;done=true;if(curA===a)curA=null;res()};a.onended=fin;a.onerror=fin;a.onpause=()=>{if(a.currentTime<a.duration-.05)fin()};const p=a.play();if(p&&p.catch)p.catch(fin);setTimeout(fin,30000);return}
 if(!window.speechSynthesis){res();return}stopA();
 const my=++spTok;
 const go=()=>{if(my!==spTok){res();return}let u;try{u=utter(t,o)}catch(e){res();return}UQ.push(u);if(UQ.length>30)UQ.shift();let done=false;const est=2500+clean(t,lang).length*(lang==='ar'?110:85)/(u.rate||1);const to=setTimeout(()=>fin(),est+3000);const fin=()=>{if(done)return;done=true;clearTimeout(to);res()};u.onend=fin;u.onerror=fin;try{speechSynthesis.resume();speechSynthesis.speak(u)}catch(e){fin()}};
 try{if(speechSynthesis.speaking||speechSynthesis.pending){speechSynthesis.cancel();setTimeout(go,150)}else go()}catch(e){res()}})}
function speak(t,o={}){speakP(t,o);return null}
function hush(){spTok++;stopA();try{speechSynthesis.cancel()}catch(e){}}
function warmVoice(){if(warmed||!window.speechSynthesis)return;warmed=true;try{const u=new SpeechSynthesisUtterance(' .');u.volume=0;if(VO.en)u.voice=VO.en;UQ.push(u);speechSynthesis.speak(u);if(VO.ar){const v=new SpeechSynthesisUtterance(' .');v.volume=0;v.voice=VO.ar;v.lang=VO.ar.lang;UQ.push(v);speechSynthesis.speak(v)}}catch(e){}}
document.addEventListener('pointerdown',warmVoice,{capture:true,once:true});
setInterval(()=>{try{if(window.speechSynthesis&&speechSynthesis.paused&&speechSynthesis.speaking)speechSynthesis.resume()}catch(e){}},2000);
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('.ar');if(a&&!a.closest('button,a,.gate,.flip')){e.stopPropagation();e.preventDefault();a.classList.remove('arplay');void a.offsetWidth;a.classList.add('arplay');speak(a.textContent,{lang:'ar'})}},true);
const sayAr=t=>speak(t,{lang:'ar'});const sayArP=t=>speakP(t,{lang:'ar'});

/* ---------- confetti ---------- */
function confetti(n=140){const cv=$('fx'),x=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;const cols=['#ff7a45','#ffc531','#22b46e','#4a8cff','#8c5cff','#ff63ad'];const ps=Array.from({length:n},()=>({x:innerWidth/2+(Math.random()-.5)*200,y:innerHeight*.45,vx:(Math.random()-.5)*16,vy:-Math.random()*16-6,r:Math.random()*7+4,c:cols[Math.random()*6|0],a:Math.random()*6}));let f=0;(function loop(){x.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.vy+=.45;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r,-p.r/2,p.r*2,p.r);x.restore()});if(++f<150)requestAnimationFrame(loop);else x.clearRect(0,0,cv.width,cv.height)})()}

/* ---------- backgrounds ---------- */
const BGS={sky:['☁️','⭐','🔬','🚀','☁️'],map:['☁️','⭐','🦋','☀️','☁️'],music:['🎵','🎶','🥁','🎸','🔔','🎺','🎵','🎶'],light:['☀️','🔦','🪞','🌤️','💡','🔍','☀️','🕯️'],plants:['🌱','🌻','🍃','🌷','🌼','🌿','🌱','🌸'],insects:['🦋','🐞','🐝','🌼','🐛','🦗','🦋','🍃']};
let curBg='';
function setBg(k){if(k===curBg)return;curBg=k;const b=$('bg');b.className='bg-'+k;b.innerHTML=BGS[k].map((e,i)=>`<span class="float" style="left:${(i*97+13)%95}%;animation-duration:${14+(i*7)%12}s;animation-delay:-${(i*5)%14}s">${e}</span>`).join('')}

/* ---------- avatar ---------- */
function shade(hex,p){const n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;const f=v=>Math.max(0,Math.min(255,Math.round(v+p*2.55)));return '#'+((1<<24)+(f(r)<<16)+(f(g)<<8)+f(b)).toString(16).slice(1)}
const PRESETS={
 selim:{skin:'#DCA683',hair:'swept',hairColor:'#1c1715',shirt:'#F6705F',over:true,face:'oval',glasses:false},
 sajid:{skin:'#D49C76',hair:'curly',hairColor:'#1c1715',shirt:'#FF8A2B',over:false,face:'round',glasses:false},
 def:{skin:'#E8B892',hair:'short',hairColor:'#3b2a20',shirt:'#4a8cff',over:false,face:'oval',glasses:false}};
function presetFor(n){const x=n.trim().toLowerCase();if(/^(selim|salim|سليم)/.test(x))return{a:{...PRESETS.selim},mode:'calm'};if(/^(sajid|sajed|ساجد)/.test(x))return{a:{...PRESETS.sajid},mode:'challenge'};return{a:{...PRESETS.def},mode:'calm'}}
function avatar(a,pose='idle',cls='av'){
 const s=a.skin,h=a.hairColor,sh=a.shirt,rx=a.face==='round'?50:45,ry=a.face==='round'?50:54,cy=95,top=cy-ry,L=100-rx,R=100+rx,dk=shade(s,-14);
 const leftDown=`<path d="M52 178 Q40 205 44 232" stroke="${sh}" stroke-width="24" stroke-linecap="round" fill="none"/>`;
 let arms;
 if(pose==='cheer')arms=`<path d="M52 178 Q26 140 30 100" stroke="${sh}" stroke-width="24" stroke-linecap="round" fill="none"/><circle cx="30" cy="94" r="13" fill="${s}"/><path d="M148 178 Q174 140 170 100" stroke="${sh}" stroke-width="24" stroke-linecap="round" fill="none"/><circle cx="170" cy="94" r="13" fill="${s}"/>`;
 else if(pose==='wave')arms=leftDown+`<path d="M148 178 Q178 150 172 108" stroke="${sh}" stroke-width="24" stroke-linecap="round" fill="none"/><circle cx="172" cy="100" r="13" fill="${s}"><animateTransform attributeName="transform" type="rotate" values="-12 160 140;12 160 140;-12 160 140" dur="1s" repeatCount="indefinite"/></circle>`;
 else if(pose==='left')arms=leftDown;
 else arms=leftDown+`<path d="M148 178 Q160 205 156 232" stroke="${sh}" stroke-width="24" stroke-linecap="round" fill="none"/>`;
 let hair='';
 if(a.hair==='short')hair=`<path d="M${L-3} 96 Q${L-4} ${top-6} 100 ${top-8} Q${R+4} ${top-6} ${R+3} 96 Q${R-4} ${top+20} 100 ${top+18} Q${L+4} ${top+20} ${L-3} 96Z" fill="${h}"/>`;
 else if(a.hair==='buzz')hair=`<path d="M${L} 92 Q${L-1} ${top-2} 100 ${top-3} Q${R+1} ${top-2} ${R} 92 Q${R-6} ${top+16} 100 ${top+14} Q${L+6} ${top+16} ${L} 92Z" fill="${shade(h,22)}" opacity=".9"/>`;
 else if(a.hair==='swept')hair=`<path d="M${L} 98 Q${L-2} ${top+4} 100 ${top+2} Q${R+2} ${top+4} ${R} 98 Q${R-4} ${top+22} 100 ${top+20} Q${L+4} ${top+22} ${L} 98Z" fill="${shade(h,18)}"/><path d="M${L+4} ${top+22} Q${L+2} ${top-22} 112 ${top-26} Q${R+12} ${top-20} ${R+2} ${top+20} Q${R-10} ${top+2} 104 ${top+6} Q${L+18} ${top+10} ${L+4} ${top+22}Z" fill="${h}"/>`;
 else if(a.hair==='curly'){let c='';for(let i=0;i<=10;i++){const ang=Math.PI*(1.03+i*.094),x=100+Math.cos(ang)*(rx+2),y=cy-6+Math.sin(ang)*(ry+2);c+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="15" fill="${h}"/>`}for(let i=0;i<5;i++)c+=`<circle cx="${70+i*15}" cy="${top+6}" r="14" fill="${h}"/>`;hair=c}
 let back='';const hj=a.hair==='hijab';
 if(a.hair==='long'){back=`<path d="M${L-8} 104 Q${L-12} ${top-10} 100 ${top-12} Q${R+12} ${top-10} ${R+8} 104 L${R+10} 176 Q${R-6} 186 ${R-14} 170 L${L+14} 170 Q${L+6} 186 ${L-10} 176Z" fill="${h}"/>`;hair=`<path d="M${L-4} 98 Q${L-6} ${top-8} 100 ${top-10} Q${R+6} ${top-8} ${R+4} 98 Q${R-6} ${top+18} 112 ${top+20} Q100 ${top+8} 88 ${top+22} Q${L+6} ${top+20} ${L-4} 98Z" fill="${h}"/>`}
 else if(a.hair==='ponytail'){back=`<ellipse cx="${R+16}" cy="${cy-4}" rx="15" ry="34" fill="${h}" transform="rotate(14 ${R+16} ${cy-4})"/><circle cx="${R+4}" cy="${cy-34}" r="7" fill="#ff63ad"/>`;hair=`<path d="M${L-3} 98 Q${L-4} ${top-6} 100 ${top-8} Q${R+4} ${top-6} ${R+3} 98 Q${R-4} ${top+18} 100 ${top+16} Q${L+4} ${top+18} ${L-3} 98Z" fill="${h}"/>`}
 else if(hj){back=`<path d="M${L-14} 112 Q${L-16} ${top-18} 100 ${top-20} Q${R+16} ${top-18} ${R+14} 112 L${R+24} 182 Q100 206 ${L-24} 182Z" fill="${h}"/>`;hair=`<path d="M${L-6} 104 Q${L-8} ${top-10} 100 ${top-12} Q${R+8} ${top-10} ${R+6} 104 Q${R-4} ${top+14} 100 ${top+12} Q${L+4} ${top+14} ${L-6} 104Z" fill="${h}"/><path d="M${L-6} 104 Q${L-8} ${top-10} 100 ${top-12} Q${R+8} ${top-10} ${R+6} 104" stroke="${shade(h,-18)}" stroke-width="3" fill="none"/>`}
 const over=a.over?`<path d="M70 168 L78 168 L82 240 L72 240Z" fill="#2d3442"/><path d="M130 168 L122 168 L118 240 L128 240Z" fill="#2d3442"/><rect x="66" y="210" width="68" height="32" rx="8" fill="#2d3442"/><circle cx="78" cy="214" r="4" fill="#c7ccd6"/><circle cx="122" cy="214" r="4" fill="#c7ccd6"/>`:'';
 const gl=a.glasses?`<g fill="none" stroke="#2a2a2a" stroke-width="3.5"><circle cx="82" cy="98" r="13"/><circle cx="118" cy="98" r="13"/><path d="M95 97 L105 97"/></g>`:'';
 return `<svg viewBox="0 0 200 240" class="${cls}" aria-hidden="true"><path d="M38 240 Q38 166 100 160 Q162 166 162 240Z" fill="${sh}"/>${arms}<path d="M80 162 L100 186 L120 162 L112 157 L100 172 L88 157Z" fill="${shade(sh,-28)}"/>${over}${back}<rect x="88" y="136" width="24" height="28" rx="9" fill="${dk}"/>${hj?'':`<circle cx="${L+1}" cy="100" r="11" fill="${dk}"/><circle cx="${R-1}" cy="100" r="11" fill="${dk}"/>`}<ellipse cx="100" cy="${cy}" rx="${rx}" ry="${ry}" fill="${s}"/>${hair}<path d="M72 84 Q82 78 92 84" stroke="${h}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M108 84 Q118 78 128 84" stroke="${h}" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="82" cy="98" rx="5.5" ry="7" fill="#2a1a12"/><ellipse cx="118" cy="98" rx="5.5" ry="7" fill="#2a1a12"/><circle cx="84" cy="95" r="2" fill="#fff"/><circle cx="120" cy="95" r="2" fill="#fff"/>${gl}<path d="M100 104 Q96 114 101 115" stroke="${shade(s,-25)}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="72" cy="114" r="8" fill="#ff8a8a" opacity=".35"/><circle cx="128" cy="114" r="8" fill="#ff8a8a" opacity=".35"/><path d="M80 121 Q100 144 120 121 Q100 129 80 121Z" fill="#7a2b2b"/><path d="M84 122 Q100 128 116 122 L114 126 Q100 131 86 126Z" fill="#fff"/></svg>`;
}
function buzzy(cls='av'){return `<svg viewBox="0 0 200 240" class="${cls}" aria-hidden="true"><rect x="40" y="60" width="120" height="150" rx="34" fill="#ffc531"/><rect x="40" y="60" width="120" height="150" rx="34" fill="none" stroke="#e09a00" stroke-width="6"/><circle cx="100" cy="160" r="34" fill="#5a3b00"/><circle cx="100" cy="160" r="20" fill="#2b1d00"><animate attributeName="r" values="18;23;18" dur=".8s" repeatCount="indefinite"/></circle><circle cx="78" cy="102" r="13" fill="#fff"/><circle cx="122" cy="102" r="13" fill="#fff"/><circle cx="80" cy="104" r="7" fill="#22304d"/><circle cx="124" cy="104" r="7" fill="#22304d"/><path d="M84 124 Q100 134 116 124" stroke="#5a3b00" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M100 60 L100 30" stroke="#5a3b00" stroke-width="6"/><text x="100" y="32" text-anchor="middle" font-size="40">🎵</text><rect x="60" y="208" width="20" height="22" rx="8" fill="#e09a00"/><rect x="120" y="208" width="20" height="22" rx="8" fill="#e09a00"/></svg>`}
const me=(pose='idle')=>avatar(P().avatar,pose);
const nest=(s,a)=>s.replace('<svg ','<svg '+a+' ');
const sayMe=(t,pose='idle',id='')=>`<div class="say">${me(pose)}<div class="bubble pop" ${id?`id="${id}"`:''}>${t}</div></div>`;
const sayBuzzy=(t,id='')=>`<div class="say">${buzzy()}<div class="bubble pop" ${id?`id="${id}"`:''}>${t}</div></div>`;

/* ---------- activity timers (cancelled when the activity changes) ---------- */
let actTok=0,focusSec=0,onBreak=false,inActivity=false,breakBag=[];
function later(fn,ms){const t=actTok;const run=()=>{if(t!==actTok)return;if(onBreak)return setTimeout(run,500);fn()};return setTimeout(run,ms)}
function every(fn,ms){const t=actTok;const iv=setInterval(()=>{if(t!==actTok)return clearInterval(iv);if(onBreak)return;fn()},ms);return iv}

/* ---------- focus timer and move breaks ---------- */
setInterval(()=>{if(!P()||!inActivity||onBreak||document.hidden||P().timerOff)return;focusSec++;const lim=calm()?600:1200;const c=$('tchip');if(c){const r=Math.max(0,lim-focusSec);c.textContent='⏱ '+(r/60|0)+':'+String(r%60).padStart(2,'0')}if(focusSec>=lim)takeBreak()},1000);
const BREAKS=[
 ['b-jump','Jump 10 times like a kangaroo!','اقْفِزْ عَشْرَ مَرَّاتٍ مِثْلَ الْكَنْغَرِ!','🦘'],
 ['b-jump','Jump like a frog 5 times!','اقْفِزْ مِثْلَ الضِّفْدَعِ خَمْسَ مَرَّاتٍ!','🐸'],
 ['b-stretch','Stretch up high like a tall palm tree!','تَمَدَّدْ لِلْأَعْلَى مِثْلَ نَخْلَةٍ طَوِيلَةٍ!','🌴'],
 ['b-stretch','Touch your toes, then reach for the sky. Do it 5 times!','الْمِسْ أَصَابِعَ قَدَمَيْكَ، ثُمَّ ارْفَعْ يَدَيْكَ إِلَى السَّمَاءِ، خَمْسَ مَرَّاتٍ!','🙆'],
 ['b-spin','Turn around slowly 3 times, like a spinning top!','دُرْ حَوْلَ نَفْسِكَ بِبُطْءٍ ثَلَاثَ مَرَّاتٍ!','🌀'],
 ['b-march','March in place like a soldier and count to 20!','امْشِ فِي مَكَانِكَ مِثْلَ الْجُنْدِيِّ، وَعُدَّ حَتَّى عِشْرِينَ!','💂'],
 ['b-shake','Sound break! Clap 5 times loudly, then 5 times softly.','اسْتِرَاحَةُ الصَّوْتِ! صَفِّقْ خَمْسَ مَرَّاتٍ بِقُوَّةٍ، ثُمَّ خَمْسَ مَرَّاتٍ بِرِفْقٍ.','👏',5],
 ['b-shake','Drum on the table: loud, soft, loud, soft!','اطْرُقْ عَلَى الطَّاوِلَةِ: قَوِيٌّ، خَفِيفٌ، قَوِيٌّ، خَفِيفٌ!','🥁',5],
 ['breathe','Balloon breathing: breathe in slowly, then breathe out slowly. 3 times.','تَنَفَّسْ مِثْلَ الْبَالُونِ: شَهِيقٌ بِبُطْءٍ، ثُمَّ زَفِيرٌ بِبُطْءٍ، ثَلَاثَ مَرَّاتٍ.','🎈'],
 ['breathe','Smell the flower, then blow out the candle. 3 times.','شُمَّ الْوَرْدَةَ، ثُمَّ انْفُخِ الشَّمْعَةَ، ثَلَاثَ مَرَّاتٍ.','🌸'],
 ['bounce','Find something blue in the room and touch it!','ابْحَثْ عَنْ شَيْءٍ أَزْرَقَ فِي الْغُرْفَةِ وَالْمِسْهُ!','🔵'],
 ['bounce','Find something that makes a sound, and make it!','ابْحَثْ عَنْ شَيْءٍ يُصْدِرُ صَوْتًا، وَجَرِّبْهُ!','🔔'],
 ['bounce','Walk to the window and name 3 things you can see!','اذْهَبْ إِلَى النَّافِذَةِ، وَسَمِّ ثَلَاثَةَ أَشْيَاءَ تَرَاهَا!','🪟'],
 ['bounce','Make your funniest face for 5 seconds!','اصْنَعْ أَضْحَكَ وَجْهٍ لِمُدَّةِ خَمْسِ ثَوَانٍ!','🤪'],
 ['b-march','Walk like a penguin to the door and back!','امْشِ مِثْلَ الْبِطْرِيقِ إِلَى الْبَابِ، ثُمَّ ارْجِعْ!','🐧'],
 ['statue','Be a statue! Freeze and don\'t move until you count to 10.','كُنْ تِمْثَالًا! لَا تَتَحَرَّكْ حَتَّى تَعُدَّ إِلَى عَشَرَةٍ.','🗿'],
 ['b-spin','Make 10 big arm circles, like a windmill!','حَرِّكْ ذِرَاعَيْكَ فِي دَوَائِرَ كَبِيرَةٍ عَشْرَ مَرَّاتٍ، مِثْلَ طَاحُونَةِ الْهَوَاءِ!','🌬️'],
 ['b-jump','Fly like a bird: flap your arms 10 times!','طِرْ مِثْلَ الْعُصْفُورِ: رَفْرِفْ بِذِرَاعَيْكَ عَشْرَ مَرَّاتٍ!','🐦'],
 ['bounce','Drink some water, then come back!','اشْرَبْ قَلِيلًا مِنَ الْمَاءِ، ثُمَّ ارْجِعْ!','💧'],
 ['b-shake','Shake your hands, then your feet, then your whole body!','هُزَّ يَدَيْكَ، ثُمَّ قَدَمَيْكَ، ثُمَّ جِسْمَكَ كُلَّهُ!','🫨']];
function takeBreak(){hush();onBreak=true;if(!breakBag.length)breakBag=shuffle(BREAKS.map((_,i)=>i).filter(i=>!BREAKS[i][4]||(WORLD&&BREAKS[i][4]===WORLD.id)));const m=BREAKS[breakBag.pop()];let t=calm()?60:45;const o=document.createElement('div');o.className='overlay';
 const body=m[0]==='breathe'?`<div class="balloon" id="bl"></div><h2 id="bt2">Breathe in...</h2>`:`<div class="${m[0]==='statue'?'':m[0]}" style="width:170px;margin:auto">${avatar(P().avatar,m[0]==='statue'?'idle':'cheer','" style="width:170px;height:204px')}</div>`;
 o.innerHTML=`<div class="card center pop"><h2>Break time, ${NM()}! You deserve it! ${m[3]}</h2>${AR('وَقْتُ الِاسْتِرَاحَةِ! أَنْتَ تَسْتَحِقُّهَا!')}<p style="margin:4px 0;color:#667">The game is paused. During your break you can:</p>${AR('اللُّعْبَةُ مُتَوَقِّفَةٌ. فِي اسْتِرَاحَتِكَ يُمْكِنُكَ أَنْ:')}${body}<h3>${m[1]}</h3>${AR(m[2])}<button class="btn sm w" id="bar">🔊 عربي</button><h1 id="bt">${t}</h1><button class="btn g big" id="bk" style="display:none">I'm back! 🚀</button></div>`;document.body.appendChild(o);
 speak(`Now take a break, ${PN()}. You deserve it! The game will wait for you. During your break, you can do this: ${m[1]}`,{brk:1});o.querySelector('#bar').onclick=()=>speak('وَقْتُ الِاسْتِرَاحَةِ، أَنْتَ تَسْتَحِقُّهَا! '+m[2],{lang:'ar',brk:1});
 let br=0;const iv=setInterval(()=>{if(!$('bt'))return clearInterval(iv);t--;$('bt').textContent=t;if($('bl')&&t%4===0){br=!br;$('bl').style.transform=br?'scale(1.9)':'scale(1)';$('bt2').textContent=br?'Breathe out...':'Breathe in...'}if(t<=0){clearInterval(iv);$('bt').textContent='✅';$('bk').style.display='inline-block';SFX.star()}},1000);
 if($('bl'))setTimeout(()=>{$('bl').style.transform='scale(1.9)'},50);
 o.querySelector('#bk').onclick=()=>{clearInterval(iv);o.remove();onBreak=false;focusSec=0;SFX.good();speak(`Welcome back, ${PN()}! Let's continue.`)}}

/* ---------- shell ---------- */
function topBar(){const p=P();return `<div class="top"><div class="who">${avatar(p.avatar,'idle','')}<span>${esc(p.name)}</span></div><span class="chip">⭐ ${totalStars()}</span>${p.timerOff?'':`<span class="chip" id="tchip">⏱</span>`}<span class="chip">${calm()?'🌿 Calm':'🔥 Challenge'}</span><span class="sp"></span><button class="btn sm w" onclick="goHub()">${PAGE==='hub'?'🗺️ Map':'🏠 Worlds'}</button><button class="btn sm w" onclick="toggleAr()">${S.showAr?'عربي ✓':'عربي'}</button><button class="btn sm w" onclick="toggleVoice()" title="Voice">${S.voice?'🗣️':'🤐'}</button><button class="btn sm w" onclick="toggleSfx()" title="Game sounds">${S.sfx?'🔊':'🔇'}</button><button class="btn sm w" onclick="settings()">⚙️</button></div>`}
function refreshTop(){const t=document.querySelector('.top');if(t&&P())t.outerHTML=topBar();else render()}
function toggleAr(){S.showAr=!S.showAr;save();document.body.classList.toggle('noar',!S.showAr);refreshTop()}
function toggleVoice(){S.voice=!S.voice;save();if(!S.voice)hush();refreshTop()}
function toggleSfx(){S.sfx=!S.sfx;save();refreshTop();SFX.click()}
let route=['welcome'];
function go(...r){actTok++;SFX.click();hush();route=r;render();scrollTo(0,0)}
function render(){document.body.classList.toggle('noar',!S.showAr);const [s,a]=route;inActivity=!['welcome','avatar','map'].includes(s);const A=$('app');
 if(s==='welcome'){setBg('sky');A.innerHTML=welcome()}
 else if(s==='avatar'){setBg('sky');A.innerHTML=avatarScreen()}
 else if(s==='map'){if(PAGE!=='hub'){goHub();return}setBg('map');A.innerHTML=topBar()+mapScreen()}
 else if(s==='world'){setBg(WORLD.bg);A.innerHTML=topBar()+worldScreen()}
 else if(s==='act'){setBg(WORLD.bg);A.innerHTML=topBar()+`<div id="act"></div>`;startAct(a)}}

/* ---------- welcome / players ---------- */
function welcome(){const ps=Object.values(S.players);return `<div class="center" style="padding-top:20px"><h1>🚀 Science Quest</h1>${AR('رِحْلَةُ الْعُلُومِ')}<div class="row" style="margin:14px 0">${buzzy('bounce" style="width:130px;height:156px')}</div>
${ps.length?`<div class="card" style="margin-bottom:18px"><h2>Who is playing?</h2>${AR('مَنْ سَيَلْعَبُ؟')}<div class="row" style="margin-top:10px">${ps.map(p=>`<button class="btn w" style="display:flex;flex-direction:column;align-items:center;padding:12px 18px" onclick="pick('${encodeURIComponent(p.name).replace(/'/g,'%27')}')">${avatar(p.avatar,'wave','" style="width:110px;height:132px')}<span style="font-size:26px">${esc(p.name)}</span></button>`).join('')}</div></div>`:''}
<div class="card"><h2>${ps.length?'New player':'What\'s your name?'}</h2><p style="margin:0;color:#667">Friends can play too! Type your name and make your own character. 🎨</p>${AR('يُمْكِنُ لِأَصْدِقَائِكَ اللَّعِبُ أَيْضًا! اكْتُبْ اسْمَكَ وَاصْنَعْ شَخْصِيَّتَكَ.')}${AR('مَا اسْمُكَ؟')}<form onsubmit="event.preventDefault();newPlayer()" style="margin-top:10px"><input class="name" id="nm" maxlength="16" placeholder="Type your name" oninput="$('nerr').textContent=''" autocomplete="off"><div class="err" id="nerr"></div><button class="btn big g" type="submit">Next ➜</button></form></div>
<div style="margin-top:16px"><button class="btn sm w" onclick="testSound()">🔈 Test sound</button></div>${voiceNote()}</div>`}
function testSound(){play('drum',1);setTimeout(()=>play('tri',.6),500);setTimeout(()=>speak('Hello! Can you hear me?'),1300)}
function pick(n){S.cur=decodeURIComponent(n);save();go('map');speak(`Welcome back, ${PN()}!`)}
function newPlayer(){const n=$('nm').value.trim();if(!n){$('nerr').textContent='Type your name first ✍️';return}if(S.players[n]){$('nerr').textContent='That name is already here. Tap it above!';return}const pr=presetFor(n);S.players[n]={name:n,avatar:pr.a,mode:pr.mode,prog:{}};S.cur=n;save();go('avatar');speak(`Hello ${n}! Let's make your character.`)}
const OPTS={skin:['#F6D2B0','#F3CBA5','#E8B892','#DCA683','#D49C76','#C48A62','#B9805A','#8D5A3B','#6B4128'],
 hair:[['swept','Swept up'],['curly','Curly'],['short','Short'],['buzz','Buzz cut'],['long','Long'],['ponytail','Ponytail'],['hijab','Hijab']],
 hairColor:['#1c1715','#3b2a20','#6b4428','#8a5a2b','#b07a3c','#d9a05b','#c0392b'],
 hijabColor:['#ff63ad','#8c5cff','#1f3a93','#22b46e','#e8d5b5','#ffffff','#2b2b2b','#c0392b'],
 shirt:['#F6705F','#FF8A2B','#ffc531','#22b46e','#1aa3a3','#4a8cff','#8c5cff','#ff63ad','#ffffff','#2d3442'],
 face:[['oval','Oval face'],['round','Round face']]};
const LOOKS=[['Selim look',PRESETS.selim],['Sajid look',PRESETS.sajid],['Explorer',{skin:'#E8B892',hair:'short',hairColor:'#3b2a20',shirt:'#4a8cff',over:false,face:'oval',glasses:true}],['Star',{skin:'#DCA683',hair:'ponytail',hairColor:'#1c1715',shirt:'#ff63ad',over:false,face:'round',glasses:false}],['Sky',{skin:'#C48A62',hair:'hijab',hairColor:'#8c5cff',shirt:'#1aa3a3',over:false,face:'oval',glasses:false}],['Rocket',{skin:'#8D5A3B',hair:'buzz',hairColor:'#1c1715',shirt:'#ffc531',over:true,face:'round',glasses:false}]];
const AVTABS=[['looks','⭐','Ready looks','أَشْكَالٌ جَاهِزَةٌ'],['skin','🎨','Skin','الْبَشَرَةُ'],['hair','💇','Hair','الشَّعْرُ'],['hairColor','🖌️','Colour','اللَّوْنُ'],['face','😊','Face','الْوَجْهُ'],['shirt','👕','Shirt','الْقَمِيصُ'],['extras','✨','Extras','إِضَافَاتٌ']];
let avTab='looks';
function avTile(cfg,label,on,act){return `<button class="avt ${on?'on':''}" onclick="${act}">${avatar(cfg,'idle','')}<span>${label}</span>${on?'<b class="tick">✓</b>':''}</button>`}
function avatarScreen(){const a=P().avatar,t=avTab,hj=a.hair==='hijab';let tiles='';
 if(t==='looks')tiles=LOOKS.map(([n,c],i)=>avTile(c,n,JSON.stringify(c)===JSON.stringify({...a}),`useLook(${i})`)).join('');
 else if(t==='skin')tiles=OPTS.skin.map(c=>avTile({...a,skin:c},'',a.skin===c,`setAv('skin','${c}')`)).join('');
 else if(t==='hair')tiles=OPTS.hair.map(([v,l])=>avTile({...a,hair:v,hairColor:v==='hijab'&&!hj?OPTS.hijabColor[0]:(v!=='hijab'&&hj?OPTS.hairColor[0]:a.hairColor)},l,a.hair===v,`setHair('${v}')`)).join('');
 else if(t==='hairColor')tiles=(hj?OPTS.hijabColor:OPTS.hairColor).map(c=>avTile({...a,hairColor:c},'',a.hairColor===c,`setAv('hairColor','${c}')`)).join('');
 else if(t==='face')tiles=OPTS.face.map(([v,l])=>avTile({...a,face:v},l,a.face===v,`setAv('face','${v}')`)).join('');
 else if(t==='shirt')tiles=OPTS.shirt.map(c=>avTile({...a,shirt:c},'',a.shirt===c,`setAv('shirt','${c}')`)).join('');
 else tiles=[['glasses','Glasses 👓'],['over','Overalls 👖']].map(([k,l])=>avTile({...a,[k]:!a[k]},(a[k]?'Remove ':'Add ')+l,false,`setAv('${k}',${!a[k]})`)).join('');
 return `<div class="center"><h2>Make your character, ${NM()}! 😎</h2>${AR('اصْنَعْ شَخْصِيَّتَكَ!')}</div>
 <div class="card avb"><div class="avprev center"><div class="avstage">${avatar(a,'wave','bounce" style="width:100%;max-width:240px;height:auto;margin:auto')}</div><h2 style="margin-top:6px">${NM()}</h2><div class="row"><button class="btn sm y" onclick="surprise()">🎲 Surprise me!</button><button class="btn sm w" onclick="resetLook()">↩ Start again</button></div></div>
 <div><div class="avtabs">${AVTABS.map(([k,e,l,ar])=>`<button class="avtab ${t===k?'on':''}" onclick="avTab='${k}';SFX.click();render()"><span class="e">${e}</span>${k==='hairColor'&&hj?'Hijab colour':l}<span class="ar" style="font-size:13px;line-height:1.4">${ar}</span></button>`).join('')}</div>
 <div class="avgrid">${tiles}</div></div></div>
 <div class="center" style="margin-top:18px"><button class="btn big g" onclick="goHome();speak('Awesome! Here we go!')">Let's go! 🚀</button></div>`}
function setAv(k,v){P().avatar[k]=v;save();SFX.click();render()}
function setHair(v){const a=P().avatar,was=a.hair==='hijab';a.hair=v;if(v==='hijab'&&!was)a.hairColor=OPTS.hijabColor[0];if(v!=='hijab'&&was)a.hairColor=OPTS.hairColor[0];save();SFX.click();render()}
function useLook(i){P().avatar={...LOOKS[i][1]};save();SFX.good();render()}
function surprise(){const r=x=>x[Math.random()*x.length|0],h=r(OPTS.hair)[0];P().avatar={skin:r(OPTS.skin),hair:h,hairColor:h==='hijab'?r(OPTS.hijabColor):r(OPTS.hairColor),shirt:r(OPTS.shirt),over:Math.random()<.3,face:r(OPTS.face)[0],glasses:Math.random()<.25};save();SFX.star();render()}
function resetLook(){P().avatar={...presetFor(P().name).a};save();SFX.click();render()}

/* ---------- settings ---------- */
function settings(){const p=P(),o=document.createElement('div');o.className='overlay';o.id='set';const row=(l,ar,on,fn)=>`<div class="toggle"><span>${l}${AR(ar)}</span><button class="btn sm ${on?'g':'w'}" onclick="${fn}">${on?'ON':'OFF'}</button></div>`;
 const vsel=L=>{const vs=voicesFor(L);return vs.length?`<select onchange="S['v_${L}']=this.value;save();pickVoices()">${vs.map(v=>`<option ${VO[L]&&VO[L].name===v.name?'selected':''}>${esc(v.name)}</option>`).join('')}</select>`:'<i>No voice found on this laptop</i>'};
 o.innerHTML=`<div class="card pop"><h2>⚙️ Settings for ${NM()}</h2><div class="toggle"><span>Mode${AR('الْوَضْعُ')}</span><span><button class="btn sm ${calm()?'g':'w'}" onclick="setP('mode','calm')">🌿 Calm</button> <button class="btn sm ${!calm()?'g':'w'}" onclick="setP('mode','challenge')">🔥 Challenge</button></span></div>
 <p style="font-size:16px;margin:4px 0;color:#667">Calm: shorter rounds, more lives, no speed timer, a move break every 10 minutes. Challenge: longer rounds, a speed timer, a move break every 20 minutes.</p>
 ${row('Focus timer and move breaks','مُؤَقِّتُ التَّرْكِيزِ وَاسْتِرَاحَةُ الْحَرَكَةِ',!p.timerOff,"setP('timerOff',"+!p.timerOff+")")}
 ${row('Unlock all activities (parent)','فَتْحُ كُلِّ الْأَنْشِطَةِ',!!p.unlockAll,"setP('unlockAll',"+!p.unlockAll+")")}
 <h3 style="margin-top:12px">🗣️ Voices (for all players on this laptop)</h3>
 <div class="toggle"><span>English voice</span>${vsel('en')}<button class="btn sm b" onclick="speak('Hello! I am your science helper. Let\\'s learn about sound.',{live:1})">▶ Test</button></div>
 <div class="toggle"><span>English speed <b id="re">${S.rateEn}</b></span><input type="range" min=".6" max="1.1" step=".05" value="${S.rateEn}" oninput="S.rateEn=+this.value;$('re').textContent=this.value;save()"></div>
 <div class="toggle"><span>Arabic voice</span>${vsel('ar')}<button class="btn sm b" onclick="speak('مَرْحَبًا! هَيَّا نَتَعَلَّمْ عَنِ الصَّوْتِ.',{lang:'ar',live:1})">▶ Test</button></div>
 <div class="toggle"><span>Arabic speed <b id="ra">${S.rateAr}</b></span><input type="range" min=".6" max="1.1" step=".05" value="${S.rateAr}" oninput="S.rateAr=+this.value;$('ra').textContent=this.value;save()"></div>
 ${voiceNote()}<div style="font-size:15px;color:#667;margin-top:6px">Voice check: 🎙️ ${Object.keys(AUD).length} recordings loaded · this session ${VSTAT.rec} recorded, ${VSTAT.live} live${VSTAT.miss.length?'<br>Last live lines: '+VSTAT.miss.map(esc).join(' | '):''}</div>
 <div class="row" style="margin-top:14px"><button class="btn sm y" onclick="testSound()">🔈 Test sound</button><button class="btn sm b" onclick="closeSet();go('avatar')">🎨 Edit character</button><button class="btn sm p" onclick="closeSet();if(PAGE==='hub')go('welcome');else location.href=HUB">👥 Switch player</button><button class="btn sm r" onclick="askReset()">🔄 Reset progress</button></div><div id="rs"></div>
 <div class="center" style="margin-top:14px"><button class="btn g" onclick="closeSet()">Done ✓</button></div></div>`;document.body.appendChild(o)}
function closeSet(){const o=$('set');if(o)o.remove();route[0]==='act'?refreshTop():render()}
function setP(k,v){P()[k]=v;save();const o=$('set');if(o)o.remove();settings()}
function askReset(){$('rs').innerHTML=`<div class="card" style="background:#fff3f3;margin-top:10px;box-shadow:none;border:3px solid #ef5b5b"><b>Erase all stars for ${NM()}?</b> ${AR('مَسْحُ كُلِّ النُّجُومِ؟')}<div class="row" style="margin-top:8px"><button class="btn sm r" onclick="P().prog={};save();closeSet()">Yes, erase</button><button class="btn sm w" onclick="$('rs').innerHTML=''">No</button></div></div>`}

/* ---------- map / world ---------- */
function worldScreen(){const nxt=ORDER.find(a=>unlocked(a[0])&&!prog(a[0]));const tile=a=>{const u=unlocked(a[0]),s=prog(a[0]);return `<button class="tile ${u?'':'lock'} ${nxt&&nxt[0]===a[0]?'next':''}" ${u?`onclick="go('act','${a[0]}')"`:''}><span class="e">${u?a[3]:'🔒'}</span><span>${a[2]}<span class="ar" style="font-size:14px;line-height:1.5">${ACTAR[a[0]]||''}</span></span><span class="st">${u?starStr(s):''}</span></button>`};
 return `<div class="card" style="margin-bottom:16px"><div class="row" style="justify-content:space-between"><div><h1>${WORLD.em} ${WORLD.title}</h1>${AR(WORLD.ar)}</div>${nxt?`<button class="btn big y" onclick="go('act','${nxt[0]}')">▶ Play next</button>`:'<h2>🏆 World complete!</h2>'}</div>${sayBuzzy(nxt?`${NM()}, your next mission is <b>${nxt[2]}</b>! ${AR('مُهِمَّتُكَ التَّالِيَةُ: '+(ACTAR[nxt[0]]||''))}`:`Amazing, ${NM()}! You finished the ${WORLD.title} world! 🏆 ${AR('رَائِعٌ! لَقَدْ أَنْهَيْتَ عَالَمَ '+WORLD.ar+'!')}`)}</div>
 ${arenaGate()}<div class="lessons">${WORLD.lessons.map(l=>`<div class="card"><h3>${l.t}</h3>${AR(l.ar)}${l.acts.map(tile).join('')}</div>`).join('')}<div class="card"><h3>Practice any time</h3>${AR('تَدَرَّبْ فِي أَيِّ وَقْتٍ')}${WORLD.free.map(tile).join('')}</div></div>`}

/* ---------- results ---------- */
function finish(id,st,msg='',msgAr=''){award(id,st);refreshTop();SFX.star();confetti();const i=ORDER.findIndex(a=>a[0]===id),nx=ORDER[i+1];const praise=st===3?'Superstar':st===2?'Great job':'Good try';speak(`${praise}, ${PN()}! You got ${st} ${st===1?'star':'stars'}!`);
 $('act').innerHTML=`<div class="card center pop"><h1>${praise}, ${NM()}! 🎉</h1>${AR(st===3?'أَنْتَ نَجْمٌ!':st===2?'عَمَلٌ رَائِعٌ!':'مُحَاوَلَةٌ جَيِّدَةٌ!')}<div style="font-size:70px;color:#f5a500;letter-spacing:6px">${starStr(st)}</div>${avatar(P().avatar,'cheer','bounce" style="width:170px;height:204px;margin:auto')}${msg?`<p style="font-size:22px;margin-bottom:0">${msg}</p>${AR(msgAr)}`:''}<div class="row" style="margin-top:14px"><button class="btn w" onclick="go('act','${id}')">🔁 Play again</button>${nx&&ACT[id][1]!=='flash'?`<button class="btn g big" onclick="go('act','${nx[0]}')">Next: ${nx[3]} ${nx[2]} ➜</button>`:''}<button class="btn b" onclick="go('world')">🔊 World</button></div></div>`}
const ratio=r=>r>=.9?3:r>=.6?2:1;
function head(id,ar){ar=ar||ACTAR[id]||'';return `<div class="row" style="justify-content:space-between;margin-bottom:8px"><h2 style="color:#fff">${ACT[id][3]} ${ACT[id][2]}</h2><button class="btn sm w" onclick="go('world')">✖ Exit</button></div>${ar?`<span class="ar" style="color:#fff;margin-top:-6px;margin-bottom:8px">${ar}</span>`:''}`}
function startAct(id){actTok++;const t=ACT[id][1];ACTS[t](id)}

/* ---------- learn ---------- */
function learn(id){const cards=LEARN[id];let i=0;const draw=()=>{const c=cards[i];$('act').innerHTML=head(id)+`<div class="card pop"><div style="max-width:640px;margin:0 auto">${art(c.art)}</div><p style="font-size:28px;font-weight:600;margin:12px 0 4px">${c.en}</p>${AR(c.ar)}<div class="row" style="margin-top:14px"><button class="btn sm w" id="sen">🔊 English</button><button class="btn sm w" id="sar">🔊 عربي</button></div><div class="row" style="margin-top:16px;justify-content:space-between"><button class="btn w" ${i?'':'style="visibility:hidden"'} id="pv">⬅ Back</button><span style="font-weight:800;font-size:22px">${'🟣'.repeat(i+1)}${'⚪'.repeat(cards.length-i-1)}</span><button class="btn g big" id="nx">${i<cards.length-1?'Next ➜':'Done ✓'}</button></div></div>`;
 speak(c.en);$('sen').onclick=()=>speak(c.en);$('sar').onclick=()=>sayAr(c.ar);$('pv').onclick=()=>{if(i<=0)return;SFX.click();i--;draw()};$('nx').onclick=()=>{SFX.click();if(++i<cards.length)draw();else finish(id,3,'You learned it! Now let\'s play. 🎮','لَقَدْ تَعَلَّمْتَ! هَيَّا نَلْعَبْ الْآنَ.')}};draw()}

/* ---------- quiz engine ---------- */
function runQuiz(id,qs,opt){let i=0,score=0,retry=[],firstPass=true,lives=opt.lives,hp=qs.length;
 const draw=()=>{if(i>=qs.length){if(retry.length&&!opt.boss){qs=retry;retry=[];i=0;firstPass=false;$('act').innerHTML=head(id)+`<div class="card center pop">${sayBuzzy(`Let's try the tricky ones again, ${NM()}! 💪 ${AR('هَيَّا نُحَاوِلُ الْأَسْئِلَةَ الصَّعْبَةَ مَرَّةً أُخْرَى!')}`)}<button class="btn g big" id="gq">Go ➜</button></div>`;speak(`Let's try the tricky ones again, ${PN()}!`);$('gq').onclick=draw;return}return opt.done(score)}
  const q=qs[i],ord=shuffle(q.o.map((t,k)=>({t,k})));
  $('act').innerHTML=head(id)+(opt.boss?bossBar(hp,qs.length,lives):'')+`<div class="card pop"><div style="font-weight:700;color:#8c5cff">${firstPass?`Question ${i+1} of ${qs.length}`:'Try again'}</div><p style="font-size:29px;font-weight:700;margin:6px 0">${q.q}</p>${AR(q.ar)}<div class="row" style="justify-content:flex-start"><button class="btn sm w" id="qen">🔊 English</button><button class="btn sm w" id="qar">🔊 عربي</button></div>${opt.timer?'<div class="timebar"><div id="tb" style="width:100%"></div></div>':''}<div id="opts">${ord.map(o=>`<button class="btn opt" data-k="${o.k}">${o.t}</button>`).join('')}</div><div id="fb"></div></div>`;
  speak(q.q);$('qen').onclick=()=>speak(q.q);$('qar').onclick=()=>sayAr(q.ar);
  let done=false,tmr;const answer=(k,el)=>{if(done)return;done=true;clearInterval(tmr);const ok=k===0;document.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(+b.dataset.k===0)b.classList.add('right')});
   if(ok){if(firstPass)score++;hp--;el&&el.classList.add('right');SFX.good();if(opt.boss){play('boom',.7);hitBoss()}const qi=i;speakP(`${shuffle(['Yes','Correct','Awesome','Brilliant','Well done'])[0]}, ${PN()}!`).then(()=>{if(i===qi&&$('fb'))speakP(q.why)})}
   else{el&&el.classList.add('wrong','shake');SFX.bad();if(firstPass&&!opt.boss)retry.push(q);if(opt.boss){lives--;bossAttack();play('boom',.4)}later(()=>speak(q.why),350)}
   $('fb').innerHTML=`<div class="say" style="margin-top:12px">${ok?me('cheer'):buzzy()}<div class="bubble pop">${ok?'✅ ':'💡 '}${q.why}${AR(WA[q.why]||'')}</div></div><div class="center"><button class="btn g big" id="nq">Next ➜</button></div>`;
   $('nq').onclick=()=>{SFX.click();i++;if(opt.boss&&lives<=0)return opt.lose(score);draw()}};
  document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.k,b));
  if(opt.timer){let t=0;tmr=every(()=>{t+=.1;const w=Math.max(0,100-t/opt.timer*100);if($('tb'))$('tb').style.width=w+'%';if(w<=0)answer(-1,null)},100)}};draw()}
function quiz(id){const n=calm()?5:7;const qs=shuffle(QB[id]).slice(0,n);runQuiz(id,qs,{done:s=>finish(id,ratio(s/qs.length),`You got ${s} of ${qs.length} right the first time!`,`أَجَبْتَ ${s} مِنْ ${qs.length} إِجَابَاتٍ صَحِيحَةٍ مِنَ الْمُحَاوَلَةِ الْأُولَى!`)})}

/* ---------- boss ---------- */
function monsterSVG(B){const c=B.col,d=shade(c,-28),l=shade(c,25),eye=B.eye||'#fff';return `<g class="mon-body"><ellipse cx="120" cy="244" rx="92" ry="12" fill="#000" opacity=".25"/><path d="M70 200 L60 240 L95 240 L98 205Z M170 200 L180 240 L145 240 L142 205Z" fill="${d}"/><path d="M50 238 h50 v8 h-50Z M140 238 h50 v8 h-50Z" fill="#1f1b2e"/><g class="mon-armL"><path d="M38 120 Q4 150 14 196 Q22 204 30 196 Q30 160 54 140Z" fill="${c}"/><path d="M10 196 l-6 12 M18 200 l-2 13 M26 198 l4 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g><g class="mon-armR"><path d="M202 120 Q236 150 226 196 Q218 204 210 196 Q210 160 186 140Z" fill="${c}"/><path d="M230 196 l6 12 M222 200 l2 13 M214 198 l-4 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g><path d="M120 40 C40 40 30 120 36 168 C42 214 80 222 120 222 C160 222 198 214 204 168 C210 120 200 40 120 40Z" fill="${c}"/><path d="M120 40 C60 44 46 100 46 140 C60 90 90 60 120 56Z" fill="${l}" opacity=".5"/><path d="M74 46 L56 6 L92 38Z M166 46 L184 6 L148 38Z" fill="${d}"/><ellipse cx="120" cy="170" rx="50" ry="40" fill="${l}" opacity=".55"/><text x="120" y="186" text-anchor="middle" font-size="40">${B.em}</text><circle cx="90" cy="98" r="22" fill="${eye}"/><circle cx="150" cy="98" r="22" fill="${eye}"/><circle class="pupil" cx="84" cy="100" r="10" fill="#111"/><circle class="pupil" cx="144" cy="100" r="10" fill="#111"/><path d="M64 70 L110 84 M176 70 L130 84" stroke="#111" stroke-width="7" stroke-linecap="round"/><path d="M76 132 Q120 158 164 132 Q120 146 76 132Z" fill="#3b0d0d"/><path d="M86 136 l6 10 l6 -8 l6 10 l6 -9 l6 10 l6 -9 l6 10 l6 -8 l6 9" stroke="#fff" stroke-width="3" fill="none"/></g>`}
function bossBar(hp,max,lives){const B=BS();return `<div class="card" style="margin-bottom:12px;padding:12px"><div class="row" style="justify-content:space-between;align-items:center"><div><b>${esc(P().name)}</b></div><div style="font-size:26px">${'❤️'.repeat(Math.max(0,lives))}${'🤍'.repeat(Math.max(0,(calm()?5:3)-lives))}</div><div style="flex:1;min-width:200px"><b>${B.name}</b> ${AR(B.ar)}<div class="hp"><div style="width:${hp/max*100}%"></div></div></div></div><svg viewBox="0 0 700 270" id="arena" style="display:block;max-height:320px;margin:0 auto"><defs><linearGradient id="gArena" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(B.col,55)}"/><stop offset="1" stop-color="${shade(B.col,15)}"/></linearGradient></defs><rect width="700" height="270" rx="18" fill="url(#gArena)"/><ellipse cx="350" cy="262" rx="330" ry="26" fill="#000" opacity=".15"/><g transform="translate(60,40)"><g id="hero" style="transition:transform .18s ease-out"><g id="heroS">${nest(avatar(P().avatar,'cheer'),'width="170" height="204"')}<text id="fist" x="160" y="120" font-size="54" opacity="0">👊</text></g></g></g><g transform="translate(430,10)"><g id="boss" style="transition:transform .2s ease-out"><g id="bossS">${monsterSVG(B)}</g></g></g><g id="pow" opacity="0" style="transition:opacity .15s"><path d="M470 60 l18 30 l34 -14 l-12 32 l34 12 l-34 12 l12 32 l-34 -14 l-18 30 l-18 -30 l-34 14 l12 -32 l-34 -12 l34 -12 l-12 -32 l34 14Z" fill="#ffd23f" stroke="#e85d04" stroke-width="4"/><text x="470" y="132" text-anchor="middle" font-size="30" font-weight="900" fill="#b91c1c">POW!</text></g></svg></div>`}
function hitBoss(){const h=$('hero'),b=$('boss'),bs=$('bossS'),f=$('fist'),pw=$('pow');if(!h||!b)return;h.style.transform='translate(210px,-10px)';if(f)f.setAttribute('opacity',1);setTimeout(()=>{if(pw)pw.setAttribute('opacity',1);b.style.transform='translate(40px,-4px) rotate(8deg)';if(bs){bs.classList.remove('shake');void bs.getBBox();bs.classList.add('shake')}},170);setTimeout(()=>{h.style.transform='';if(f)f.setAttribute('opacity',0)},420);setTimeout(()=>{if(pw)pw.setAttribute('opacity',0);b.style.transform=''},700)}
function bossAttack(){const h=$('hero'),hs=$('heroS'),b=$('boss');if(!h||!b)return;b.style.transform='translate(-130px,0)';setTimeout(()=>{if(hs){hs.classList.remove('shake');void hs.getBBox();hs.classList.add('shake')}h.style.transform='translate(-40px,6px)'},200);setTimeout(()=>{b.style.transform='';h.style.transform=''},650)}
function boss(id){const B=BS(),all=shuffle(B.qs.flatMap(k=>QB[k])).slice(0,calm()?8:12),lv=calm()?5:3;$('act').innerHTML=head(id,'التَّحَدِّي النِّهَائِيُّ')+`<div class="card center pop">${sayBuzzy(`Oh no, ${NM()}! The <b>${B.name}</b> is here! Answer correctly to beat it. You have ${lv} hearts. ${AR('أَجِبْ إِجَابَاتٍ صَحِيحَةً لِتَهْزِمَ الْوَحْشَ!')}`)}<button class="btn big" id="gb">⚔️ Fight!</button></div>`;play(B.snd,.35);speak(`Oh no, ${PN()}! The ${B.name} is here! Answer correctly to beat it!`);
 $('gb').onclick=()=>runQuiz(id,all,{boss:1,lives:lv,timer:calm()?0:20,done:s=>finish(id,ratio(s/all.length),`You beat the ${B.name}! 👾💥 The bonus show is unlocked!`,`هَزَمْتَ ${B.acc}! وَفُتِحَ الْعَرْضُ الْإِضَافِيُّ!`),lose:s=>{SFX.bad();$('act').innerHTML=head(id)+`<div class="card center pop">${sayBuzzy(`The monster got away this time, ${NM()}. You answered ${s} correctly. Let's try again! 💪`)}<div class="row"><button class="btn big g" onclick="go('act','boss')">🔁 Try again</button><button class="btn b" onclick="go('world')">Back to world</button></div></div>`;speak(`The monster got away this time. Let's try again!`)}})}

/* ---------- journey (ordering) ---------- */
function journey(id){let r=0,mist=0;const draw=()=>{const R=ROUNDS[r];let pos=0;const tiles=shuffle(R.s.map((t,k)=>({t,k})));
 $('act').innerHTML=head(id)+`<div class="card pop">${sayMe(`${NM()}, tap the steps in the right order! ${AR('اضْغَطْ عَلَى الْخُطُوَاتِ بِالتَّرْتِيبِ الصَّحِيحِ!')}`)}<h3>${R.t}</h3>${AR(R.ar)}<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:8px"><div>${R.s.map((_,k)=>`<div class="slot" id="sl${k}">${k+1}.</div>`).join('')}</div><div id="tl">${tiles.map(o=>`<button class="btn opt" data-k="${o.k}">${o.t}<span class="ar" style="font-size:17px;line-height:1.5">${R.sa[o.k]}</span></button>`).join('')}</div></div><div id="fb"></div></div>`;
 speak(`${PN()}, ${R.t} Tap the steps in the right order.`);
 document.querySelectorAll('#tl .opt').forEach(b=>b.onclick=()=>{if(+b.dataset.k===pos){SFX.good();const s=$('sl'+pos);s.innerHTML=(pos+1)+'. '+b.innerHTML;s.classList.add('full','pop');b.style.visibility='hidden';pos++;if(pos===R.s.length){speak(`Perfect, ${PN()}!`);$('fb').innerHTML=`<div class="center" style="margin-top:10px"><button class="btn g big" id="nr">${r<ROUNDS.length-1?'Next round ➜':'Finish ✓'}</button></div>`;$('nr').onclick=()=>{SFX.click();if(++r<ROUNDS.length)draw();else finish(id,mist<=1?3:mist<=4?2:1,'You put every step in the right order!','رَتَّبْتَ كُلَّ الْخُطُوَاتِ تَرْتِيبًا صَحِيحًا!')}}}else{mist++;SFX.bad();b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');speak('Hmm. What happens first?')}})};draw()}

/* ---------- word builder: lesson footer words (meaning, then spelling) ---------- */
function words(id){const list=VOCAB[id]||[],n=Math.min(list.length,calm()?6:8),deck=shuffle(list).slice(0,n);let i=0,pts=0;
 const hd=()=>head(id,ACTAR[id]||'بَانِي الْكَلِمَاتِ');
 const meaning=()=>{if(i>=n)return finish(id,ratio(pts/(n*2)),`You worked on ${n} new words! 🔤`,`تَدَرَّبْتَ عَلَى ${n} كَلِمَاتٍ جَدِيدَةٍ!`);const w=deck[i];const others=shuffle(list.filter(x=>x[1]!==w[1])).slice(0,2);let first=true;
  $('act').innerHTML=hd()+`<div class="card center pop"><div style="font-weight:700;color:#8c5cff">Word ${i+1} of ${n} · Step 1: the meaning ${AR('الْخُطْوَةُ الْأُولَى: الْمَعْنَى')}</div><div style="font-size:54px;font-weight:800;margin:10px 0" dir="ltr">${w[0]}</div><button class="btn sm w" id="wsay">🔊 Hear it</button><h3 style="margin-top:10px">What does it mean in Arabic?</h3>${AR('مَا مَعْنَاهَا بِالْعَرَبِيَّةِ؟')}<div>${shuffle([w,...others].map(x=>({x,ok:x===w}))).map(o=>`<button class="btn opt" data-ok="${o.ok?1:0}"><span class="ar" style="font-size:28px">${o.x[1]}</span></button>`).join('')}</div><div id="fb" style="min-height:60px"></div></div>`;
  const say=()=>speak(w[0]);$('wsay').onclick=say;speakP(`${w[0]}. What does it mean in Arabic?`);
  document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(+b.dataset.ok){b.classList.add('right');document.querySelectorAll('.opt').forEach(x=>x.disabled=true);SFX.good();if(first)pts++;hush();speakP(w[1],{lang:'ar'}).then(()=>later(spell,400))}else{first=false;b.classList.add('wrong','shake');b.disabled=true;SFX.bad();speak('Not that one. Try again!')}})};
 const spell=()=>{const w=deck[i],word=w[0],need=[...word].map((c,k)=>({c,k})).filter(o=>o.c!==' ');let pos=0,miss=0,missHere=0;
  if(need.length>14){pts++;i++;return meaning()}
  const tiles=shuffle(need.map((o,t)=>({c:o.c.toLowerCase(),t})));
  $('act').innerHTML=hd()+`<div class="card center pop"><div style="font-weight:700;color:#8c5cff">Word ${i+1} of ${n} · Step 2: spell it ${AR('الْخُطْوَةُ الثَّانِيَةُ: اكْتُبْهَا')}</div><h3>Build the English word for:</h3><div class="ar" style="font-size:40px;font-weight:800">${w[1]}</div><div class="row"><button class="btn sm w" id="wsay">🔊 Hear the word</button><button class="btn sm y" id="whint">💡 Hint</button></div><div id="slots" dir="ltr" style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:14px 0">${[...word].map((c,k)=>c===' '?'<span style="width:22px"></span>':`<span class="slot" data-k="${k}" style="width:46px;height:56px;display:inline-flex;align-items:center;justify-content:center;font-size:32px;font-weight:800;padding:0;margin:0"></span>`).join('')}</div><div id="tiles" dir="ltr" style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px">${tiles.map(o=>`<button class="btn w" data-c="${o.c}" style="width:58px;height:58px;font-size:30px;font-weight:800;padding:0">${o.c}</button>`).join('')}</div><div id="fb" style="min-height:60px"></div></div>`;
  speakP('Build the English word for:').then(()=>speakP(w[1],{lang:'ar'}));$('wsay').onclick=()=>speak(word);
  const place=b=>{const o=need[pos];const sl=document.querySelector(`#slots .slot[data-k="${o.k}"]`);sl.textContent=o.c;sl.classList.add('full','pop');b.style.visibility='hidden';pos++;missHere=0;document.querySelectorAll('#tiles .btn').forEach(x=>x.classList.remove('pulse'));
   if(pos===need.length){SFX.good();if(miss<=1)pts++;document.querySelectorAll('#tiles .btn').forEach(x=>x.disabled=true);$('fb').innerHTML=`<div class="say pop" style="margin-top:8px">${me('cheer')}<div class="bubble">✅ <b dir="ltr">${word}</b>${AR(w[1])}</div></div>`;hush();speakP(`${word}. Well done, ${PN()}!`).then(()=>later(()=>{i++;meaning()},500))}else play('click',.3)};
  const hint=()=>{const c=need[pos].c.toLowerCase();const b=[...document.querySelectorAll('#tiles .btn')].find(x=>x.style.visibility!=='hidden'&&x.dataset.c===c);if(b)b.classList.add('pulse')};
  $('whint').onclick=()=>{miss++;hint();speak(word)};
  document.querySelectorAll('#tiles .btn').forEach(b=>b.onclick=()=>{if(pos>=need.length)return;if(b.dataset.c===need[pos].c.toLowerCase())place(b);else{miss++;missHere++;SFX.bad();b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');if(missHere>=3)hint()}})};
 $('act').innerHTML=hd()+`<div class="card center pop">${sayMe(`${NM()}, these are the new words from this lesson! First choose the Arabic meaning, then build the English word. ${AR('هٰذِهِ هِيَ الْكَلِمَاتُ الْجَدِيدَةُ فِي هٰذَا الدَّرْسِ! اخْتَرِ الْمَعْنَى بِالْعَرَبِيَّةِ أَوَّلًا، ثُمَّ ابْنِ الْكَلِمَةَ الْإِنْجِلِيزِيَّةَ.')}`)}<button class="btn g big" id="wgo">🔤 Let us start</button></div>`;
 speak(`${PN()}, these are the new words from this lesson! First choose the Arabic meaning, then build the English word.`);$('wgo').onclick=()=>{SFX.click();meaning()}}

/* ---------- word cards ---------- */
function flash(id){let deck=shuffle(WORDS),known=0;const tot=deck.length;const draw=()=>{if(!deck.length)return finish(id,3,`You know all ${tot} words! 🧠`,`أَنْتَ تَعْرِفُ كُلَّ الْكَلِمَاتِ!`);const w=deck[0];const arF=!!S.flashAr,front=arF?`<div style="font-size:80px">${w[0]}</div><h1 style="direction:rtl;color:#7b3fc4">${w[2]}</h1><span style="color:#889">What is it in English? Tap to flip 🔄</span>`:`<div style="font-size:80px">${w[0]}</div><h1>${w[1]}</h1><span style="color:#889">What is it in Arabic? Tap to flip 🔄</span>`,back=arF?`<div style="font-size:50px">${w[0]}</div><h1>${w[1]}</h1><h3>${w[3]}</h3>`:`<div style="font-size:50px">${w[0]}</div><h1 style="direction:rtl;color:#7b3fc4">${w[2]}</h1><h3>${w[3]}</h3>`;
 $('act').innerHTML=head(id,'بِطَاقَاتُ الْكَلِمَاتِ')+`<div class="card center pop"><div style="font-weight:700;color:#8c5cff">✅ ${known} of ${tot} known</div><div class="row"><button class="optbtn ${arF?'':'on'}" id="mEn">English first</button><button class="optbtn ${arF?'on':''}" id="mAr">Arabic first (hide English)</button></div><div class="flip" id="fc"><div class="in"><div class="f">${front}</div><div class="bk">${back}</div></div></div><div class="row"><button class="btn sm w" id="fen">🔊 English</button><button class="btn sm w" id="far">🔊 عربي</button></div><div class="row" style="margin-top:14px"><button class="btn" id="ag">🔁 Again</button><button class="btn g" id="kn">✅ I knew it!</button></div></div>`;if(arF)sayAr(w[2]);else speak(w[1]);$('mEn').onclick=()=>{S.flashAr=false;save();SFX.click();draw()};$('mAr').onclick=()=>{S.flashAr=true;save();SFX.click();draw()};
 $('fen').onclick=()=>speak(`${w[1]}. ${w[3]}.`);$('far').onclick=()=>sayAr(w[2]);$('fc').onclick=()=>{$('fc').classList.toggle('on');SFX.click()};$('kn').onclick=()=>{SFX.good();known++;deck.shift();draw()};$('ag').onclick=()=>{SFX.click();deck.push(deck.shift());draw()}};draw()}

/* ---------- The Grand Sound Challenge (Educaplay series) ---------- */

const RANKS=[['🌱','Rookie','مُبْتَدِئٌ'],['🔍','Explorer','مُسْتَكْشِفٌ'],['🥉','Bronze','بُرُونْزِيٌّ'],['🥈','Silver','فِضِّيٌّ'],['🥇','Gold','ذَهَبِيٌّ'],['💎','Diamond','مَاسِيٌّ']];
const BS=()=>Object.assign({name:'Noise Monster',ar:'وَحْشُ الضَّجِيجِ',acc:'وَحْشَ الضَّجِيجِ',em:'📢',col:'#5b3cff',snd:'siren',qs:['q1','q2','q3']},WORLD&&WORLD.boss||{});
const CH=()=>Object.assign({champ:'Sound Champion',champAr:'بَطَلُ الصَّوْتِ',title:'The Grand Sound Challenge',titleAr:'التَّحَدِّي الْكَبِيرُ لِلصَّوْتِ'},WORLD&&WORLD.grand||{});
const NG=()=>GAMES.length,NW=()=>['zero','one','two','three','four','five','six','seven'][NG()];
const rank=d=>d===NG()?['👑',CH().champ,CH().champAr]:RANKS[d];
const G=()=>{const p=P();p.grand=p.grand||{};if(typeof p.grand[WORLD.id]!=='object'||!p.grand[WORLD.id])p.grand[WORLD.id]={};return p.grand[WORLD.id]};
const gDone=()=>GAMES.filter(g=>G()[g.id]!=null).length;
const gTotal=()=>GAMES.reduce((a,g)=>a+(G()[g.id]||0),0);
const gOpen=()=>P().unlockAll||prog('boss')>0;
const gStageOpen=i=>gOpen()&&(i===0||G()[GAMES[i-1].id]!=null);
function arenaGate(){const open=gOpen(),d=gDone();return `<div class="gate ${open?'':'locked'}" onclick="${open?"go('act','grand')":"gateLocked()"}" id="gate"><div class="rays"></div><div class="gate-in"><div class="trophy">🏆</div><div style="flex:1;min-width:240px"><div class="gate-kicker">${open?(d===NG()?'CHAMPION!':'THE ARENA IS OPEN!'):'🔒 LOCKED'}</div><h1 class="gate-title">${CH().title}</h1><span class="ar" style="color:#fff">${CH().titleAr}</span><div style="font-weight:700;margin:4px 0 8px">${open?`${NG()} epic games · every game covers the whole chapter · collect points and become the <b>${CH().champ}</b> 👑`:`Beat the 👾 ${BS().name} to open the gates!`}</div>${open?'':`<span class="ar" style="color:#fff">اهْزِمْ ${BS().acc} لِتَفْتَحَ الْبَوَّابَةَ!</span>`}<div class="medals">${GAMES.map((g,i)=>`<span class="medal ${G()[g.id]!=null?'won':''}" title="${g.name}">${G()[g.id]!=null?g.em:(gStageOpen(i)?g.em:'🔒')}</span>`).join('<span class="dash"></span>')}</div></div><div class="center">${open?`<div class="pts">${gTotal()}</div><div style="font-weight:800">points</div><button class="btn big y" style="margin-top:8px">⚔️ Enter!</button>`:''}</div></div></div>`}
function gateLocked(){const g=$('gate');g.classList.remove('shake');void g.offsetWidth;g.classList.add('shake');SFX.bad();speak(`The gates are locked, ${PN()}! Beat the ${BS().name} first.`)}
function grand(id){let sel=Math.min(gDone(),NG()-1);
 const draw=()=>{const d=gDone(),tot=gTotal(),rk=rank(d);
  $('act').innerHTML=head(id,CH().titleAr)+`<div class="arena"><div class="rays"></div><div style="position:relative">
  <div class="row" style="justify-content:space-between;align-items:center"><div class="row" style="justify-content:flex-start">${avatar(P().avatar,d===NG()?'cheer':'wave','bounce" style="width:110px;height:132px')}<div><div class="gate-kicker">${rk[0]} ${rk[1]}</div><span class="ar" style="color:#fff">${rk[2]}</span><div style="font-weight:700">${d} of ${NG()} games won</div></div></div><div class="center"><div class="pts" id="ptot">${tot}</div><div style="font-weight:800">total points</div></div></div>
  <div class="gbar"><div style="width:${d/NG()*100}%"></div></div>
  <div class="stages" style="--ng:${NG()}">${GAMES.map((g,i)=>{const op=gStageOpen(i),sc=G()[g.id];return `<button class="stage ${sel===i?'sel':''} ${op?'':'lock'} ${sc!=null?'won':''}" data-i="${i}" style="--c:${g.col}"><div class="snum">${i+1}</div><div class="sem">${op?g.em:'🔒'}</div><div class="sname">${g.name}</div><div class="sscore">${sc!=null?'⭐ '+sc:op?'▶ Ready!':'Locked'}</div>${d===i&&op?`<div class="here">${avatar(P().avatar,'idle','" style="width:46px;height:55px')}</div>`:''}</button>`}).join('')}</div></div></div>
  <div class="card pop" id="gpanel" style="margin-top:16px"></div>`;
  document.querySelectorAll('.stage').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(!gStageOpen(i)){b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');SFX.bad();speak('Win the game before it first!');return}SFX.click();sel=i;draw()});
  panel()};
 const panel=()=>{const g=GAMES[sel],sc=G()[g.id],box=$('gpanel');
  box.innerHTML=`<div class="row" style="justify-content:flex-start;align-items:center"><div style="font-size:80px" class="bounce">${g.em}</div><div style="flex:1"><div style="color:${g.col};font-weight:800">GAME ${sel+1} OF ${NG()} · ${g.kind}</div><h2>${g.name}</h2>${AR(g.ar)}<p style="margin:4px 0">${g.how}</p>${AR(g.howAr)}</div></div>
  ${g.url?`<div class="center" style="margin:12px 0"><a class="btn big g" href="${g.url}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" id="gplay" style="text-decoration:none;display:inline-block">▶ Play ${g.name}</a><div style="margin-top:8px"><button class="btn sm w" id="gcopy">📋 Copy game link</button> <span id="gcopied" style="font-weight:700;color:#22b46e"></span></div><div style="color:#667;font-size:16px;margin-top:6px">The game opens in a new tab. When you finish, come back here!</div>${AR('تُفْتَحُ اللُّعْبَةُ فِي صَفْحَةٍ جَدِيدَةٍ. عِنْدَمَا تَنْتَهِي، ارْجِعْ إِلَى هُنَا!')}</div>
  <div class="card" style="background:#fff8e1;box-shadow:none;border:3px solid #ffd76a"><b>🏁 Finished? Type the score the game gave you:</b>${AR('انْتَهَيْتَ؟ اكْتُبْ نَتِيجَتَكَ:')}<form id="gform" class="row" style="justify-content:flex-start;margin-top:8px"><input class="name" id="gsc" type="number" min="0" max="100000" inputmode="numeric" placeholder="Score" style="width:180px;font-size:26px"><button class="btn g" type="submit">Save my points ⭐</button></form><div class="err" id="gerr"></div>${sc!=null?`<div style="font-weight:700">Your best score: ⭐ ${sc}. Play again to beat it!</div>`:''}</div>`
  :`<div class="center" style="margin:14px 0"><div style="font-size:50px">🛠️</div><h3>This game is being built. Coming soon!</h3>${AR('هٰذِهِ اللُّعْبَةُ قَيْدَ الْبِنَاءِ، قَرِيبًا!')}</div>`}`;
  if(g.url){$('gcopy').onclick=async()=>{try{await navigator.clipboard.writeText(g.url);$('gcopied').textContent='Copied! Paste it in the browser address bar.'}catch(e){$('gcopied').textContent=g.url}};$('gplay').onclick=()=>{SFX.click();speak(`Good luck, ${PN()}! Come back and type your score when you finish.`)};$('gsc').oninput=()=>$('gerr').textContent='';
   $('gform').onsubmit=e=>{e.preventDefault();const v=$('gsc').value.trim(),n=Math.round(+v);if(v===''||!isFinite(n)||n<0){$('gerr').textContent='Type your score first ✍️';return}const first=G()[g.id]==null,best=Math.max(G()[g.id]||0,n);G()[g.id]=best;save();SFX.star();confetti();
    const d=gDone();if(d===NG()&&first){speak(`Incredible, ${PN()}! You won all ${NW()} games! You are the ${CH().champ}!`);sel=NG()-1}else{speak(`Amazing, ${PN()}! You got ${n} points. Your total is ${gTotal()} points!${first&&d<NG()?' The next game is open!':''}`);if(first&&d<NG())sel=d}draw()}}};
 draw();speak(gDone()===NG()?`Welcome back, ${CH().champ} ${PN()}!`:`Welcome to the ${CH().title.replace(/^The /,'the ')}, ${PN()}! Win all ${NW()} games to become the ${CH().champ}!`)}

const ACTS={learn,quiz,journey,boss,flash,grand,words};
