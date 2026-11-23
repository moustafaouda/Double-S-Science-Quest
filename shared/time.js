/* ---------- passing days: day/night sky + a press-and-hold clock (used by the Plants and Insects labs) ---------- */
const mixC=(a,b,t)=>{const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')};
/* ph = phase of the day: 0 sunrise · .25 noon · .5 sunset · .75 midnight */
function dnLight(ph){return Math.max(0,Math.min(1,Math.sin(ph*2*Math.PI)*1.6+.15))}
function dnSky(w,h,ph,id='dn'){const b=dnLight(ph),dusk=Math.max(0,1-Math.abs(Math.sin(ph*2*Math.PI))*3)*(b>0?1:.6);
 const top=mixC(mixC('#0b1440','#3b9cf0',b),'#7c3aed',dusk*.35),bot=mixC(mixC('#1e2a5a','#c7ecff',b),'#fb923c',dusk*.7);
 let s=`<defs><linearGradient id="gDN${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#gDN${id})"/>`;
 const st=1-b;if(st>.05)s+=`<g opacity="${st.toFixed(2)}">${Array.from({length:34},(_,i)=>`<circle cx="${(i*137)%w}" cy="${(i*71)%(h*.55)}" r="${i%5?1.3:2.2}" fill="#fff"/>`).join('')}</g>`;
 const arc=(q,r)=>[w*(.08+.84*q),h*.62-Math.sin(q*Math.PI)*h*.5];
 if(ph<.52){const [x,y]=arc(Math.min(1,ph/.5));s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="46" fill="#fde047" opacity=".3"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="26" fill="#fde047" stroke="#f59e0b" stroke-width="4"/>`}
 else{const [x,y]=arc((ph-.5)/.5);s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="34" fill="#e0e7ff" opacity=".25"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20" fill="#f1f5f9"/><circle cx="${(x+9).toFixed(1)}" cy="${(y-6).toFixed(1)}" r="17" fill="${top}"/>`}
 return s}
/* darken the land at night: draw it on top of the ground layer */
const dnShade=(w,h,ph)=>{const o=(1-dnLight(ph))*.5;return o>.02?`<rect width="${w}" height="${h}" fill="#0b1440" opacity="${o.toFixed(2)}" pointer-events="none"/>`:''};
/* clock button (HTML) */
function clockHTML(id,label='Hold the clock to let time pass',ar='اضْغَطْ مُطَوَّلًا عَلَى السَّاعَةِ لِيَمُرَّ الْوَقْتُ'){return `<div class="clockwrap"><button class="clockbtn" id="${id}" aria-label="clock"><svg viewBox="-60 -60 120 120"><circle r="56" fill="#fff" stroke="#7c3aed" stroke-width="7"/><circle r="49" fill="#faf5ff"/>${Array.from({length:12},(_,i)=>`<line x1="0" y1="-44" x2="0" y2="${i%3?-39:-35}" stroke="#4c1d95" stroke-width="${i%3?2:4}" transform="rotate(${i*30})"/>`).join('')}<line id="${id}h" x1="0" y1="4" x2="0" y2="-26" stroke="#1e1b4b" stroke-width="6" stroke-linecap="round"/><line id="${id}m" x1="0" y1="6" x2="0" y2="-40" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"/><circle r="5" fill="#1e1b4b"/></svg></button><div class="clocklbl"><b>${label}</b><span class="ar">${ar}</span><div class="daych" id="${id}d">☀️ Day 1</div></div></div>`}
/* hold logic: onTick(dt) is called while held (dt in seconds); returns a controller */
function holdClock(id,onTick,opt={}){const el=$(id);let held=false,days=opt.day0||0,last=0;const c={get days(){return days},set days(v){days=v;draw()},stop:false};
 const draw=()=>{const h=$(id+'h'),m=$(id+'m'),d=$(id+'d');if(h)h.setAttribute('transform',`rotate(${(days*720)%360})`);if(m)m.setAttribute('transform',`rotate(${(days*360*24)%360})`);if(d){const ph=days%1;d.textContent=`${ph<.5?'☀️':'🌙'} Day ${Math.floor(days)+1}`}};
 const down=e=>{e.preventDefault();if(c.stop||VB)return;held=true;last=performance.now();el.classList.add('on')};const up=()=>{held=false;el.classList.remove('on')};
 el.addEventListener('pointerdown',down);['pointerup','pointerleave','pointercancel'].forEach(t=>el.addEventListener(t,up));
 const tick=()=>{if(!el.isConnected)return;const n=performance.now();if(held&&!c.stop&&!VB){const dt=(n-last)/1000;last=n;days+=dt*(opt.speed||.5);draw();onTick(dt,days)}else last=n;requestAnimationFrame(tick)};requestAnimationFrame(tick);draw();return c}
