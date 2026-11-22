/* ---------- world data: Chapter 4, Properties of Light ---------- */
const W4={id:4,title:'Properties of Light',ar:'خَصَائِصُ الضَّوْءِ',em:'☀️',lessons:[
 {t:'1 · How sunlight travels',ar:'كَيْفَ يَنْتَقِلُ ضَوْءُ الشَّمْسِ',acts:[['l1','learn','Learn: light and mirrors','📖'],['src','src','Light source or not?','💡'],['mirror','mirror','Mirror maze lab','🪞'],['q1','quiz','Lesson 1 quiz','❓'],['w1','words','Word builder: lesson 1 words','🔤']]},
 {t:'2 · Gathering light',ar:'تَجْمِيعُ الضَّوْءِ',acts:[['l2','learn','Learn: the magnifying glass','📖'],['lens','lens','Magnifying glass lab','🔍'],['lsafe','lsafe','Safe or not safe?','⛑️'],['q2','quiz','Lesson 2 quiz','❓'],['w2','words','Word builder: lesson 2 words','🔤']]},
 {t:'3 · Shadows and the Sun (1)',ar:'الظِّلُّ وَالشَّمْسُ (١)',acts:[['l3','learn','Learn: what is a shadow?','📖'],['shadow','shadow','Shadow maker lab','👤'],['q3','quiz','Lesson 3 quiz','❓'],['w3','words','Word builder: lesson 3 words','🔤']]},
 {t:'4 · Shadows and the Sun (2)',ar:'الظِّلُّ وَالشَّمْسُ (٢)',acts:[['l4','learn','Learn: shadows during the day','📖'],['dial','dial','Sundial lab','🕰️'],['journey','journey','Light journey game','🧩'],['q4','quiz','Lesson 4 quiz','❓'],['w4','words','Word builder: lesson 4 words','🔤']]},
 {t:'5 · The Sun and shade',ar:'الشَّمْسُ وَالظِّلُّ',acts:[['l5','learn','Learn: sunny and shady places','📖'],['thermo','thermo','Thermometer lab','🌡️'],['compass','compass','Compass lab','🧭'],['q5','quiz','Lesson 5 quiz','❓'],['w5','words','Word builder: lesson 5 words','🔤']]},
 {t:'Final challenge',ar:'التَّحَدِّي النِّهَائِيُّ',acts:[['boss','boss','Boss battle: the Shadow Monster','👾'],['lshow','lshow','Bonus: a day in the desert show','🐪']]}],
 free:[['flash','flash','Word cards','🃏']]};

const LIGHT_ROUNDS=[
 {t:'How does a shadow form?',ar:'كَيْفَ يَتَكَوَّنُ الظِّلُّ؟',s:['☀️ Light travels in straight lines','🧍 An object blocks the light','🌑 A dark area forms behind the object','👀 We see a shadow!'],sa:['يَنْتَقِلُ الضَّوْءُ فِي خُطُوطٍ مُسْتَقِيمَةٍ','يَحْجُبُ جِسْمٌ الضَّوْءَ','تَتَكَوَّنُ مَنْطِقَةٌ مُظْلِمَةٌ خَلْفَ الْجِسْمِ','نَرَى الظِّلَّ!']},
 {t:'How does the magnifying glass burn the paper?',ar:'كَيْفَ تَحْرِقُ الْعَدَسَةُ الْمُكَبِّرَةُ الْوَرَقَةَ؟',s:['☀️ Sunlight falls on the magnifying glass','🔍 It gathers the light into a small spot','🔥 The spot gets brighter and hotter','💨 Smoke rises, and the paper burns'],sa:['يَسْقُطُ ضَوْءُ الشَّمْسِ عَلَى الْعَدَسَةِ الْمُكَبِّرَةِ','تُجَمِّعُ الضَّوْءَ فِي نُقْطَةٍ صَغِيرَةٍ','تُصْبِحُ النُّقْطَةُ أَكْثَرَ لَمَعَانًا وَأَعْلَى حَرَارَةً','يَتَصَاعَدُ الدُّخَانُ، وَتَحْتَرِقُ الْوَرَقَةُ']},
 {t:'A stick\'s shadow during the day',ar:'ظِلُّ الْعَصَا خِلَالَ النَّهَارِ',s:['🌅 Morning: long shadow toward the west','🕛 Noon: short shadow under the stick','🌇 Evening: long shadow toward the east'],sa:['الصَّبَاحُ: ظِلٌّ طَوِيلٌ نَحْوَ الْغَرْبِ','الظُّهْرُ: ظِلٌّ قَصِيرٌ تَحْتَ الْعَصَا','الْمَسَاءُ: ظِلٌّ طَوِيلٌ نَحْوَ الشَّرْقِ']}];

const LIGHT_GAMES=[
 {id:'fj',em:'🚀',name:'Light Aster Quiz',ar:'مُسَابَقَةُ الْفَضَاءِ لِلضَّوْءِ',kind:'AsterQuiz',how:'Fly your spaceship through the gate with the right answer!',howAr:'طِرْ بِسَفِينَتِكَ عَبْرَ الْبَوَّابَةِ الَّتِي فِيهَا الْإِجَابَةُ الصَّحِيحَةُ!',col:'#22b46e',url:'https://www.educaplay.com/learning-resources/31631397-light_quest_1_light_aster_quiz.html'},
 {id:'lu',em:'🪜',name:'Light Line Up',ar:'رَتِّبِ الضَّوْءَ',kind:'Line Up',how:'Put the steps of light and shadows in the right order!',howAr:'رَتِّبْ خُطُوَاتِ الضَّوْءِ وَالظِّلِّ بِالتَّرْتِيبِ الصَّحِيحِ!',col:'#4a8cff',url:'https://www.educaplay.com/learning-resources/31630359-light_quest_2_light_line_up.html'},
 {id:'mm',em:'🧠',name:'English–Arabic Memory',ar:'ذَاكِرَةُ الْكَلِمَاتِ',kind:'Memory',how:'Turn the cards and match each English word with its Arabic meaning!',howAr:'اقْلِبِ الْبِطَاقَاتِ، وَطَابِقْ كُلَّ كَلِمَةٍ بِمَعْنَاهَا!',col:'#8c5cff',url:'https://www.educaplay.com/learning-resources/31630839-light_quest_3_english_arabic_light_memory.html'},
 {id:'yn',em:'👍',name:'True or False Light Facts',ar:'صَحٌّ أَمْ خَطَأٌ؟',kind:'Yes or No',how:'Swipe each light fact: true or false?',howAr:'اسْحَبْ كُلَّ جُمْلَةٍ: صَحٌّ أَمْ خَطَأٌ؟',col:'#ff7a45',url:'https://www.educaplay.com/learning-resources/31632557-light_quest_4_true_or_false_light_facts.html'},
 {id:'ms',em:'🗂️',name:'Light Sorter',ar:'صَنِّفِ الضَّوْءَ',kind:'Matching',how:'Sort every item into the right group!',howAr:'ضَعْ كُلَّ شَيْءٍ فِي مَجْمُوعَتِهِ الصَّحِيحَةِ!',col:'#e0457b',url:''},
 {id:'wd',em:'🔤',name:'Light Word Builder',ar:'رَتِّبْ حُرُوفَ الْكَلِمَاتِ',kind:'Unscramble Letters',how:'Read the Arabic meaning, then put the letters in order to spell the English word!',howAr:'اقْرَأِ الْمَعْنَى بِالْعَرَبِيَّةِ، ثُمَّ رَتِّبِ الْحُرُوفَ لِتَكْتُبَ الْكَلِمَةَ الْإِنْجِلِيزِيَّةَ!',col:'#00a6a6',url:''}];

W4.bg='light';W4.games=LIGHT_GAMES;W4.rounds=LIGHT_ROUNDS;
W4.boss={name:'Shadow Monster',ar:'وَحْشُ الظِّلَالِ',acc:'وَحْشَ الظِّلَالِ',em:'🌑',col:'#3b2f6e',eye:'#fde047',snd:'zap',qs:['q1','q2','q3','q4','q5']};
W4.grand={champ:'Light Champion',champAr:'بَطَلُ الضَّوْءِ',title:'The Grand Light Challenge',titleAr:'التَّحَدِّي الْكَبِيرُ لِلضَّوْءِ'};
W4.breaks=[
 ['b-stretch','Shadow break! Make a tall shadow, then a tiny shadow with your body!','اسْتِرَاحَةُ الظِّلِّ! اصْنَعْ بِجِسْمِكَ ظِلًّا طَوِيلًا، ثُمَّ ظِلًّا صَغِيرًا!','👤'],
 ['bounce','Find something in the room that gives off its own light!','ابْحَثْ فِي الْغُرْفَةِ عَنْ شَيْءٍ يُعْطِي ضَوْءًا مِنْ نَفْسِهِ!','💡'],
 ['b-spin','Point to where the Sun rises, then to where it sets!','أَشِرْ إِلَى مَكَانِ شُرُوقِ الشَّمْسِ، ثُمَّ إِلَى مَكَانِ غُرُوبِهَا!','🌅']];
initWorld(W4);

/* ---------- lesson content ---------- */
const VOCAB={"w1": [["light", "الضَّوْءُ"], ["light source", "مَصْدَرُ ضَوْءٍ"], ["natural", "طَبِيعِيٌّ"], ["artificial", "صِنَاعِيٌّ"], ["Sun", "الشَّمْسُ"], ["star", "نَجْمٌ"], ["candle", "شَمْعَةٌ"], ["flashlight", "كَشَّافٌ"], ["lamp", "مِصْبَاحٌ"], ["emit", "يُشِعُّ"], ["straight line", "خَطٌّ مُسْتَقِيمٌ"], ["mirror", "مِرْآةٌ"], ["reflection", "انْعِكَاسٌ"], ["bounce back", "يَرْتَدُّ"], ["regular", "مُنْتَظِمٌ"], ["irregular", "غَيْرُ مُنْتَظِمٍ"], ["smooth surface", "سَطْحٌ أَمْلَسُ"], ["rough surface", "سَطْحٌ خَشِنٌ"], ["scatter", "يَتَشَتَّتُ"], ["incident light", "الضَّوْءُ السَّاقِطُ"], ["reflected light", "الضَّوْءُ الْمُنْعَكِسُ"], ["direct", "يُوَجِّهُ"], ["harm", "يَضُرُّ"]], "w2": [["magnifying glass", "عَدَسَةٌ مُكَبِّرَةٌ"], ["gathering", "تَجْمِيعٌ"], ["focus", "يُرَكِّزُ"], ["bright spot", "بُقْعَةٌ لَامِعَةٌ"], ["brighter", "أَكْثَرُ لَمَعَانًا"], ["hotter", "أَعْلَى حَرَارَةً"], ["burn", "يَحْتَرِقُ"], ["smoke", "دُخَانٌ"], ["black paper", "وَرَقَةٌ سَوْدَاءُ"], ["absorb", "يَمْتَصُّ"], ["safety precautions", "احْتِيَاطَاتُ الْأَمَانِ"], ["clothes", "مَلَابِسُ"], ["directly", "مُبَاشَرَةً"], ["hurt", "يُؤْذِي"], ["water", "الْمَاءُ"]], "w3": [["shadow", "ظِلٌّ"], ["object", "جِسْمٌ"], ["block", "يَحْجُبُ"], ["dark area", "مَنْطِقَةٌ مُظْلِمَةٌ"], ["behind", "خَلْفَ"], ["opposite side", "الْجِهَةُ الْمُقَابِلَةُ"], ["line up", "يَصْطَفُّ"], ["straight", "مُسْتَقِيمٌ"], ["left", "الْيَسَارُ"], ["right", "الْيَمِينُ"], ["extend", "يَمْتَدُّ"], ["prevent", "يَمْنَعُ"], ["glasses", "نَظَّارَةٌ"]], "w4": [["sunrise", "شُرُوقُ الشَّمْسِ"], ["sunset", "غُرُوبُ الشَّمْسِ"], ["east", "الشَّرْقُ"], ["west", "الْغَرْبُ"], ["morning", "الصَّبَاحُ"], ["noon", "الظُّهْرُ"], ["evening", "الْمَسَاءُ"], ["long", "طَوِيلٌ"], ["short", "قَصِيرٌ"], ["length", "طُولٌ"], ["direction", "اتِّجَاهٌ"], ["beneath", "أَسْفَلَ"], ["Earth", "الْأَرْضُ"], ["rotate", "يَدُورُ"], ["axis", "مِحْوَرٌ"], ["sundial", "السَّاعَةُ الشَّمْسِيَّةُ"], ["approximate time", "الْوَقْتُ التَّقْرِيبِيُّ"], ["wooden stick", "عَصًا خَشَبِيَّةٌ"], ["increase", "يَزْدَادُ"], ["decrease", "يَقِلُّ"]], "w5": [["sunny places", "الْأَمَاكِنُ الْمُشْمِسَةُ"], ["shady places", "الْأَمَاكِنُ الظَّلِيلَةُ"], ["ground temperature", "دَرَجَةُ حَرَارَةِ الْأَرْضِ"], ["warmer", "أَدْفَأُ"], ["cooler", "أَبْرَدُ"], ["dry", "جَافٌّ"], ["damp", "رَطْبٌ"], ["absorb", "يَمْتَصُّ"], ["thermometer", "التِّرْمُومِتْرُ"], ["radiation thermometer", "التِّرْمُومِتْرُ الْإِشْعَاعِيُّ"], ["measure", "يَقِيسُ"], ["bulb", "الْمُسْتَوْدَعُ"], ["scale", "التَّدْرِيجُ"], ["eye level", "مُسْتَوَى الْعَيْنِ"], ["well ventilated", "جَيِّدُ التَّهْوِيَةِ"], ["accuracy", "الدِّقَّةُ"], ["compass", "الْبُوصْلَةُ"], ["north", "الشَّمَالُ"], ["south", "الْجَنُوبُ"], ["main directions", "الِاتِّجَاهَاتُ الرَّئِيسِيَّةُ"], ["magnetic needle", "إِبْرَةٌ مُغْنَاطِيسِيَّةٌ"], ["magnet", "مَغْنَاطِيسٌ"], ["settle", "يَسْتَقِرُّ"]]};

const LEARN={
 l1:[
  {en:'Light helps us <b>see</b> the things around us.',ar:'يُسَاعِدُنَا الضَّوْءُ عَلَى رُؤْيَةِ الْأَشْيَاءِ مِنْ حَوْلِنَا.',art:'see'},
  {en:'A <b>light source</b> is an object that gives off its <b>own</b> light.',ar:'مَصْدَرُ الضَّوْءِ هُوَ جِسْمٌ يُعْطِي ضَوْءًا مِنْ نَفْسِهِ.',art:'sources'},
  {en:'<b>Natural</b> light sources: the Sun and the stars.<br><b>Artificial</b> light sources: a candle, a flashlight and an electric lamp.',ar:'مَصَادِرُ الضَّوْءِ الطَّبِيعِيَّةُ: الشَّمْسُ وَالنُّجُومُ. وَمَصَادِرُ الضَّوْءِ الصِّنَاعِيَّةُ: الشَّمْعَةُ، وَالْكَشَّافُ، وَالْمِصْبَاحُ الْكَهْرَبَائِيُّ.',art:'natart'},
  {en:'The <b>Sun</b> is the main natural light source.',ar:'الشَّمْسُ هِيَ الْمَصْدَرُ الطَّبِيعِيُّ الرَّئِيسِيُّ لِلضَّوْءِ.',art:'sun'},
  {en:'Light always travels in <b>straight lines</b>, unless an object blocks its path.',ar:'يَنْتَقِلُ الضَّوْءُ دَائِمًا فِي خُطُوطٍ مُسْتَقِيمَةٍ، إِلَّا إِذَا حَجَبَ جِسْمٌ طَرِيقَهُ.',art:'straight'},
  {en:'When light falls on a mirror, it bounces back. This is called <b>reflection of light</b>.',ar:'عِنْدَمَا يَسْقُطُ الضَّوْءُ عَلَى مِرْآةٍ، يَرْتَدُّ. وَهٰذَا يُسَمَّى انْعِكَاسَ الضَّوْءِ.',art:'reflect'},
  {en:'<b>Regular reflection</b>: on smooth, shiny surfaces like a mirror, light bounces back in <b>one</b> direction.<br><b>Irregular reflection</b>: on rough surfaces like a wall, light scatters in <b>different</b> directions.',ar:'الِانْعِكَاسُ الْمُنْتَظِمُ: عَلَى الْأَسْطُحِ الْمَلْسَاءِ اللَّامِعَةِ مِثْلَ الْمِرْآةِ، يَرْتَدُّ الضَّوْءُ فِي اتِّجَاهٍ وَاحِدٍ. الِانْعِكَاسُ غَيْرُ الْمُنْتَظِمِ: عَلَى الْأَسْطُحِ الْخَشِنَةِ مِثْلَ الْحَائِطِ، يَتَشَتَّتُ الضَّوْءُ فِي اتِّجَاهَاتٍ مُخْتَلِفَةٍ.',art:'regirr'},
  {en:'Light still travels in straight lines after it bounces off a mirror. We can use mirrors to send sunlight into dark places.',ar:'يَظَلُّ الضَّوْءُ يَنْتَقِلُ فِي خُطُوطٍ مُسْتَقِيمَةٍ بَعْدَ أَنْ يَرْتَدَّ عَنِ الْمِرْآةِ. وَيُمْكِنُنَا اسْتِخْدَامُ الْمَرَايَا لِتَوْجِيهِ ضَوْءِ الشَّمْسِ إِلَى الْأَمَاكِنِ الْمُظْلِمَةِ.',art:'mirrors'},
  {en:'<b>Caution!</b> Never point a mirror with sunlight at people\'s faces, especially their eyes. It can hurt their eyes.',ar:'تَحْذِيرٌ! لَا تُوَجِّهْ أَبَدًا ضَوْءَ الشَّمْسِ بِالْمِرْآةِ إِلَى وُجُوهِ النَّاسِ، خَاصَّةً عُيُونَهُمْ، فَقَدْ يُؤْذِي ذٰلِكَ عُيُونَهُمْ.',art:'mcaution'}],
 l2:[
  {en:'A <b>magnifying glass</b> can gather sunlight from a wide area into one small bright spot.',ar:'تَسْتَطِيعُ الْعَدَسَةُ الْمُكَبِّرَةُ أَنْ تُجَمِّعَ ضَوْءَ الشَّمْسِ مِنْ مِسَاحَةٍ وَاسِعَةٍ فِي نُقْطَةٍ صَغِيرَةٍ لَامِعَةٍ.',art:'lens'},
  {en:'The gathered spot becomes <b>brighter</b> and <b>hotter</b>.',ar:'تُصْبِحُ النُّقْطَةُ الْمُجَمَّعَةُ أَكْثَرَ لَمَعَانًا وَأَعْلَى حَرَارَةً.',art:'spot'},
  {en:'The <b>smaller</b> the spot, the <b>brighter</b> and <b>hotter</b> it is.',ar:'كُلَّمَا صَغُرَتِ النُّقْطَةُ، زَادَ لَمَعَانُهَا وَحَرَارَتُهَا.',art:'spotsize'},
  {en:'Experiment: keep the small spot on black paper for a few minutes. Smoke rises, and the paper starts to burn! When you finish, put the paper in water.',ar:'تَجْرِبَةٌ: اتْرُكِ النُّقْطَةَ الصَّغِيرَةَ عَلَى وَرَقَةٍ سَوْدَاءَ بِضْعَ دَقَائِقَ. يَتَصَاعَدُ الدُّخَانُ، وَتَبْدَأُ الْوَرَقَةُ فِي الِاحْتِرَاقِ! وَعِنْدَمَا تَنْتَهِي، ضَعِ الْوَرَقَةَ فِي الْمَاءِ.',art:'burn'},
  {en:'<b>Black</b> paper is better than white paper, because black paper absorbs more sunlight, so it gets hot faster.',ar:'الْوَرَقَةُ السَّوْدَاءُ أَفْضَلُ مِنَ الْوَرَقَةِ الْبَيْضَاءِ، لِأَنَّ الْوَرَقَةَ السَّوْدَاءَ تَمْتَصُّ كَمِّيَّةً أَكْبَرَ مِنْ ضَوْءِ الشَّمْسِ، فَتَسْخُنُ أَسْرَعَ.',art:'blackwhite'},
  {en:'<b>Safety!</b> Never look at the Sun through a magnifying glass. Don\'t stare at the bright spot. Never point it at clothes, people or animals.',ar:'السَّلَامَةُ! لَا تَنْظُرْ أَبَدًا إِلَى الشَّمْسِ مِنْ خِلَالِ الْعَدَسَةِ الْمُكَبِّرَةِ. لَا تُحَدِّقْ فِي النُّقْطَةِ اللَّامِعَةِ. وَلَا تُوَجِّهْهَا أَبَدًا إِلَى الْمَلَابِسِ أَوِ النَّاسِ أَوِ الْحَيَوَانَاتِ.',art:'lsafety'}],
 l3:[
  {en:'A <b>shadow</b> is a dark area where light does not reach. It forms behind an object that blocks the light.',ar:'الظِّلُّ مَنْطِقَةٌ مُظْلِمَةٌ لَا يَصِلُ إِلَيْهَا الضَّوْءُ، وَيَتَكَوَّنُ خَلْفَ الْجِسْمِ الَّذِي يَحْجُبُ الضَّوْءَ.',art:'shadow'},
  {en:'Why does a shadow form? Light travels in straight lines → the object blocks the light → a dark area forms behind it.',ar:'لِمَاذَا يَتَكَوَّنُ الظِّلُّ؟ يَنْتَقِلُ الضَّوْءُ فِي خُطُوطٍ مُسْتَقِيمَةٍ، ثُمَّ يَحْجُبُ الْجِسْمُ الضَّوْءَ، ثُمَّ تَتَكَوَّنُ مَنْطِقَةٌ مُظْلِمَةٌ خَلْفَهُ.',art:'why'},
  {en:'Rule 1: The light source, the object and the shadow are always on one <b>straight line</b>.',ar:'الْقَاعِدَةُ الْأُولَى: مَصْدَرُ الضَّوْءِ وَالْجِسْمُ وَالظِّلُّ يَكُونُونَ دَائِمًا عَلَى خَطٍّ مُسْتَقِيمٍ وَاحِدٍ.',art:'line'},
  {en:'Rule 2: The shadow always forms on the <b>opposite side</b> of the light source.',ar:'الْقَاعِدَةُ الثَّانِيَةُ: يَتَكَوَّنُ الظِّلُّ دَائِمًا فِي الْجِهَةِ الْمُقَابِلَةِ لِمَصْدَرِ الضَّوْءِ.',art:'opposite'},
  {en:'The Sun is on your <b>right</b> → your shadow is on your <b>left</b>.<br>The Sun is on your <b>left</b> → your shadow is on your <b>right</b>.',ar:'الشَّمْسُ عَلَى يَمِينِكَ، فَظِلُّكَ عَلَى يَسَارِكَ. الشَّمْسُ عَلَى يَسَارِكَ، فَظِلُّكَ عَلَى يَمِينِكَ.',art:'leftright'},
  {en:'<b>Caution!</b> Never look straight at the Sun. Use special glasses for watching the Sun.',ar:'تَحْذِيرٌ! لَا تَنْظُرْ مُبَاشَرَةً إِلَى الشَّمْسِ أَبَدًا. اسْتَخْدِمْ نَظَّارَاتٍ خَاصَّةً لِمُشَاهَدَةِ الشَّمْسِ.',art:'glasses'}],
 l4:[
  {en:'The Sun seems to move across the sky. It <b>rises in the east</b> and <b>sets in the west</b>.',ar:'تَبْدُو الشَّمْسُ كَأَنَّهَا تَتَحَرَّكُ فِي السَّمَاءِ؛ فَهِيَ تُشْرِقُ مِنَ الشَّرْقِ، وَتَغْرُبُ فِي الْغَرْبِ.',art:'path'},
  {en:'<b>Morning:</b> the Sun is low in the east. The shadow is <b>long</b> and points to the <b>west</b>.',ar:'فِي الصَّبَاحِ: تَكُونُ الشَّمْسُ مُنْخَفِضَةً فِي الشَّرْقِ، وَيَكُونُ الظِّلُّ طَوِيلًا نَحْوَ الْغَرْبِ.',art:'morning'},
  {en:'<b>Noon:</b> the Sun is high in the sky. The shadow is <b>short</b>, right under the object.',ar:'عِنْدَ الظُّهْرِ: تَكُونُ الشَّمْسُ مُرْتَفِعَةً فِي السَّمَاءِ، وَيَكُونُ الظِّلُّ قَصِيرًا تَحْتَ الْجِسْمِ.',art:'noon'},
  {en:'<b>Evening:</b> the Sun is low in the west. The shadow is <b>long</b> and points to the <b>east</b>.',ar:'فِي الْمَسَاءِ: تَكُونُ الشَّمْسُ مُنْخَفِضَةً فِي الْغَرْبِ، وَيَكُونُ الظِّلُّ طَوِيلًا نَحْوَ الشَّرْقِ.',art:'evening'},
  {en:'In fact, the Sun does not move around the Earth each day. The <b>Earth rotates</b> on its axis!',ar:'فِي الْحَقِيقَةِ، الشَّمْسُ لَا تَدُورُ حَوْلَ الْأَرْضِ كُلَّ يَوْمٍ، بَلِ الْأَرْضُ هِيَ الَّتِي تَدُورُ حَوْلَ مِحْوَرِهَا!',art:'earth'},
  {en:'Long ago, people used a <b>sundial</b>. It tells the approximate time from the position of a shadow.',ar:'قَدِيمًا، اسْتَخْدَمَ النَّاسُ السَّاعَةَ الشَّمْسِيَّةَ؛ فَهِيَ تُحَدِّدُ الْوَقْتَ التَّقْرِيبِيَّ مِنْ مَوْضِعِ الظِّلِّ.',art:'sundial'}],
 l5:[
  {en:'<b>Sunny</b> places get <b>more</b> sunlight. The ground absorbs more, so it becomes <b>warmer</b> and <b>drier</b>.',ar:'الْأَمَاكِنُ الْمُشْمِسَةُ تَصِلُهَا كَمِّيَّةٌ أَكْبَرُ مِنْ ضَوْءِ الشَّمْسِ، فَتَمْتَصُّ الْأَرْضُ أَكْثَرَ، وَتُصْبِحُ أَدْفَأَ وَأَقَلَّ رُطُوبَةً.',art:'sunny'},
  {en:'<b>Shady</b> places get <b>less</b> sunlight. The ground absorbs less, so it stays <b>cooler</b> and <b>damper</b>.',ar:'الْأَمَاكِنُ الظَّلِيلَةُ تَصِلُهَا كَمِّيَّةٌ أَقَلُّ مِنْ ضَوْءِ الشَّمْسِ، فَتَمْتَصُّ الْأَرْضُ أَقَلَّ، وَتَبْقَى أَبْرَدَ وَأَكْثَرَ رُطُوبَةً.',art:'shady'},
  {en:'We measure temperature with a <b>thermometer</b>. Read the top of the red liquid at <b>eye level</b>.',ar:'نَقِيسُ دَرَجَةَ الْحَرَارَةِ بِالتِّرْمُومِتْرِ، وَنَقْرَأُ قِمَّةَ السَّائِلِ الْأَحْمَرِ عِنْدَ مُسْتَوَى الْعَيْنِ.',art:'thermo'},
  {en:'Measuring the <b>air</b>: choose a well-ventilated place, 1.2 to 1.5 meters above the ground. Block direct sunlight, and hold the thermometer from its <b>top</b>, not the bulb.',ar:'قِيَاسُ حَرَارَةِ الْهَوَاءِ: اخْتَرْ مَكَانًا جَيِّدَ التَّهْوِيَةِ، عَلَى ارْتِفَاعِ مِتْرٍ وَعِشْرِينَ سَنْتِيمِتْرًا إِلَى مِتْرٍ وَنِصْفٍ فَوْقَ الْأَرْضِ. احْجُبْ ضَوْءَ الشَّمْسِ الْمُبَاشِرَ، وَأَمْسِكِ التِّرْمُومِتْرَ مِنْ أَعْلَاهُ، لَا مِنَ الْمُسْتَوْدَعِ.',art:'air'},
  {en:'Measuring the <b>ground</b>: make the bulb touch the ground, and shade it with your hand. A <b>radiation thermometer</b> is held above the ground without touching it.',ar:'قِيَاسُ حَرَارَةِ الْأَرْضِ: اجْعَلِ الْمُسْتَوْدَعَ يَلْمِسُ الْأَرْضَ، وَظَلِّلْهُ بِيَدِكَ. أَمَّا تِرْمُومِتْرُ الْإِشْعَاعِ فَنُمْسِكُهُ فَوْقَ الْأَرْضِ دُونَ أَنْ يَلْمِسَهَا.',art:'ground'},
  {en:'A <b>compass</b> shows the four main directions: north, south, east and west. The <b>red tip</b> of the needle points <b>north</b>. Keep metal and magnets away from it!',ar:'تُبَيِّنُ الْبُوصْلَةُ الِاتِّجَاهَاتِ الْأَرْبَعَةَ الرَّئِيسِيَّةَ: الشَّمَالَ وَالْجَنُوبَ وَالشَّرْقَ وَالْغَرْبَ. يُشِيرُ الطَّرَفُ الْأَحْمَرُ لِلْإِبْرَةِ إِلَى الشَّمَالِ. أَبْعِدْ عَنْهَا الْمَعَادِنَ وَالْمَغَانِطَ!',art:'compass'}]};

const WA={
 'Light helps us see things.':'يُسَاعِدُنَا الضَّوْءُ عَلَى رُؤْيَةِ الْأَشْيَاءِ.',
 'A light source gives off its own light.':'مَصْدَرُ الضَّوْءِ يُعْطِي ضَوْءًا مِنْ نَفْسِهِ.',
 'The Sun is the main natural light source.':'الشَّمْسُ هِيَ الْمَصْدَرُ الطَّبِيعِيُّ الرَّئِيسِيُّ لِلضَّوْءِ.',
 'People made the flashlight, so it is an artificial light source.':'صَنَعَ النَّاسُ الْكَشَّافَ، فَهُوَ مَصْدَرُ ضَوْءٍ صِنَاعِيٌّ.',
 'A mirror does not give off its own light. It only reflects light.':'الْمِرْآةُ لَا تُعْطِي ضَوْءًا مِنْ نَفْسِهَا، بَلْ تَعْكِسُ الضَّوْءَ فَقَطْ.',
 'Light travels in straight lines.':'يَنْتَقِلُ الضَّوْءُ فِي خُطُوطٍ مُسْتَقِيمَةٍ.',
 'Light bouncing back is called reflection.':'ارْتِدَادُ الضَّوْءِ يُسَمَّى الِانْعِكَاسَ.',
 'A smooth, shiny mirror gives regular reflection.':'الْمِرْآةُ الْمَلْسَاءُ اللَّامِعَةُ تُعْطِي انْعِكَاسًا مُنْتَظِمًا.',
 'A rough wall scatters light in different directions.':'الْحَائِطُ الْخَشِنُ يُشَتِّتُ الضَّوْءَ فِي اتِّجَاهَاتٍ مُخْتَلِفَةٍ.',
 'Mirrors can send sunlight into dark places.':'تَسْتَطِيعُ الْمَرَايَا تَوْجِيهَ ضَوْءِ الشَّمْسِ إِلَى الْأَمَاكِنِ الْمُظْلِمَةِ.',
 'Sunlight from a mirror can hurt the eyes.':'ضَوْءُ الشَّمْسِ الْمُنْعَكِسُ مِنَ الْمِرْآةِ قَدْ يُؤْذِي الْعُيُونَ.',
 'The magnifying glass gathers sunlight into a small spot.':'تُجَمِّعُ الْعَدَسَةُ الْمُكَبِّرَةُ ضَوْءَ الشَّمْسِ فِي نُقْطَةٍ صَغِيرَةٍ.',
 'The gathered spot is brighter and hotter.':'النُّقْطَةُ الْمُجَمَّعَةُ أَكْثَرُ لَمَعَانًا وَأَعْلَى حَرَارَةً.',
 'The smaller the spot, the hotter it is.':'كُلَّمَا صَغُرَتِ النُّقْطَةُ، زَادَتْ حَرَارَتُهَا.',
 'Black paper absorbs more sunlight, so it gets hot faster.':'الْوَرَقَةُ السَّوْدَاءُ تَمْتَصُّ ضَوْءًا أَكْثَرَ، فَتَسْخُنُ أَسْرَعَ.',
 'Looking at the Sun through a magnifying glass can hurt your eyes.':'النَّظَرُ إِلَى الشَّمْسِ مِنْ خِلَالِ الْعَدَسَةِ الْمُكَبِّرَةِ قَدْ يُؤْذِي عَيْنَيْكَ.',
 'It can burn clothes and living things.':'قَدْ تَحْرِقُ الْمَلَابِسَ وَالْكَائِنَاتِ الْحَيَّةَ.',
 'Put the paper in water when you finish.':'ضَعِ الْوَرَقَةَ فِي الْمَاءِ عِنْدَمَا تَنْتَهِي.',
 'A shadow is a dark area where light does not reach.':'الظِّلُّ مَنْطِقَةٌ مُظْلِمَةٌ لَا يَصِلُ إِلَيْهَا الضَّوْءُ.',
 'The object blocks the light.':'الْجِسْمُ يَحْجُبُ الضَّوْءَ.',
 'The light source, object and shadow are on one straight line.':'مَصْدَرُ الضَّوْءِ وَالْجِسْمُ وَالظِّلُّ عَلَى خَطٍّ مُسْتَقِيمٍ وَاحِدٍ.',
 'The shadow forms on the opposite side of the light.':'يَتَكَوَّنُ الظِّلُّ فِي الْجِهَةِ الْمُقَابِلَةِ لِلضَّوْءِ.',
 'Looking straight at the Sun can hurt your eyes.':'النَّظَرُ مُبَاشَرَةً إِلَى الشَّمْسِ قَدْ يُؤْذِي عَيْنَيْكَ.',
 'The Sun rises in the east and sets in the west.':'تُشْرِقُ الشَّمْسُ مِنَ الشَّرْقِ، وَتَغْرُبُ فِي الْغَرْبِ.',
 'At noon the Sun is high, so the shadow is short.':'عِنْدَ الظُّهْرِ تَكُونُ الشَّمْسُ مُرْتَفِعَةً، فَيَكُونُ الظِّلُّ قَصِيرًا.',
 'When the Sun is low, the shadow is long.':'عِنْدَمَا تَكُونُ الشَّمْسُ مُنْخَفِضَةً، يَكُونُ الظِّلُّ طَوِيلًا.',
 'In the morning the Sun is in the east, so the shadow points west.':'فِي الصَّبَاحِ تَكُونُ الشَّمْسُ فِي الشَّرْقِ، فَيَتَّجِهُ الظِّلُّ نَحْوَ الْغَرْبِ.',
 'In the evening the Sun is in the west, so the shadow points east.':'فِي الْمَسَاءِ تَكُونُ الشَّمْسُ فِي الْغَرْبِ، فَيَتَّجِهُ الظِّلُّ نَحْوَ الشَّرْقِ.',
 'The Earth rotates on its axis.':'الْأَرْضُ تَدُورُ حَوْلَ مِحْوَرِهَا.',
 'A sundial tells the approximate time from a shadow.':'السَّاعَةُ الشَّمْسِيَّةُ تُحَدِّدُ الْوَقْتَ التَّقْرِيبِيَّ مِنَ الظِّلِّ.',
 'The length and direction of a shadow change during the day.':'يَتَغَيَّرُ طُولُ الظِّلِّ وَاتِّجَاهُهُ خِلَالَ النَّهَارِ.',
 'Sunny ground gets more sunlight, so it is warmer.':'الْأَرْضُ الْمُشْمِسَةُ يَصِلُهَا ضَوْءٌ أَكْثَرُ، فَتَكُونُ أَدْفَأَ.',
 'Shady ground gets less sunlight, so it is cooler and damper.':'الْأَرْضُ الظَّلِيلَةُ يَصِلُهَا ضَوْءٌ أَقَلُّ، فَتَكُونُ أَبْرَدَ وَأَكْثَرَ رُطُوبَةً.',
 'We measure temperature with a thermometer.':'نَقِيسُ دَرَجَةَ الْحَرَارَةِ بِالتِّرْمُومِتْرِ.',
 'Read the top of the red liquid at eye level.':'اقْرَأْ قِمَّةَ السَّائِلِ الْأَحْمَرِ عِنْدَ مُسْتَوَى الْعَيْنِ.',
 'Air temperature is measured 1.2 to 1.5 meters above the ground.':'تُقَاسُ حَرَارَةُ الْهَوَاءِ عَلَى ارْتِفَاعِ مِتْرٍ وَعِشْرِينَ سَنْتِيمِتْرًا إِلَى مِتْرٍ وَنِصْفٍ فَوْقَ الْأَرْضِ.',
 'Your hand would warm the bulb.':'يَدُكَ تُدَفِّئُ الْمُسْتَوْدَعَ.',
 'Direct sunlight makes the reading wrong.':'ضَوْءُ الشَّمْسِ الْمُبَاشِرُ يَجْعَلُ الْقِرَاءَةَ خَاطِئَةً.',
 'A radiation thermometer does not touch the ground.':'تِرْمُومِتْرُ الْإِشْعَاعِ لَا يَلْمِسُ الْأَرْضَ.',
 'The red tip of the compass needle points north.':'يُشِيرُ الطَّرَفُ الْأَحْمَرُ لِإِبْرَةِ الْبُوصْلَةِ إِلَى الشَّمَالِ.',
 'Metal and magnets pull the needle the wrong way.':'الْمَعَادِنُ وَالْمَغَانِطُ تَجْذِبُ الْإِبْرَةَ فِي اتِّجَاهٍ خَاطِئٍ.'};

const ACTAR={w1:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الْأَوَّلُ',w2:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّانِي',w3:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّالِثُ',w4:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الرَّابِعُ',w5:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الْخَامِسُ',l1:'تَعَلَّمْ: الضَّوْءُ وَالْمَرَايَا',src:'مَصْدَرُ ضَوْءٍ أَمْ لَا؟',mirror:'مُخْتَبَرُ مَتَاهَةِ الْمَرَايَا',q1:'اخْتِبَارُ الدَّرْسِ الْأَوَّلِ',l2:'تَعَلَّمْ: الْعَدَسَةُ الْمُكَبِّرَةُ',lens:'مُخْتَبَرُ الْعَدَسَةِ الْمُكَبِّرَةِ',lsafe:'آمِنٌ أَمْ غَيْرُ آمِنٍ؟',q2:'اخْتِبَارُ الدَّرْسِ الثَّانِي',l3:'تَعَلَّمْ: مَا الظِّلُّ؟',shadow:'مُخْتَبَرُ صُنْعِ الظِّلِّ',q3:'اخْتِبَارُ الدَّرْسِ الثَّالِثِ',l4:'تَعَلَّمْ: الظِّلُّ خِلَالَ النَّهَارِ',dial:'مُخْتَبَرُ السَّاعَةِ الشَّمْسِيَّةِ',journey:'لُعْبَةُ رِحْلَةِ الضَّوْءِ',q4:'اخْتِبَارُ الدَّرْسِ الرَّابِعِ',l5:'تَعَلَّمْ: الْأَمَاكِنُ الْمُشْمِسَةُ وَالظَّلِيلَةُ',thermo:'مُخْتَبَرُ التِّرْمُومِتْرِ',compass:'مُخْتَبَرُ الْبُوصْلَةِ',q5:'اخْتِبَارُ الدَّرْسِ الْخَامِسِ',boss:'مَعْرَكَةُ وَحْشِ الظِّلَالِ',lshow:'عَرْضُ يَوْمٍ فِي الصَّحْرَاءِ',flash:'بِطَاقَاتُ الْكَلِمَاتِ',grand:'التَّحَدِّي الْكَبِيرُ لِلضَّوْءِ'};

const tf=['True ✅','False ❌'],ft=['False ❌','True ✅'];
const QB={
 q1:[
  {q:'An object that gives off its own light is called a ___.',ar:'الْجِسْمُ الَّذِي يُعْطِي ضَوْءًا مِنْ نَفْسِهِ يُسَمَّى ___.',o:['light source','mirror','shadow'],why:'A light source gives off its own light.'},
  {q:'What is the main natural source of light?',ar:'مَا الْمَصْدَرُ الطَّبِيعِيُّ الرَّئِيسِيُّ لِلضَّوْءِ؟',o:['The Sun','A lamp','A candle'],why:'The Sun is the main natural light source.'},
  {q:'A flashlight is a natural light source.',ar:'الْكَشَّافُ مَصْدَرُ ضَوْءٍ طَبِيعِيٌّ.',o:ft,why:'People made the flashlight, so it is an artificial light source.'},
  {q:'A mirror is a light source.',ar:'الْمِرْآةُ مَصْدَرٌ لِلضَّوْءِ.',o:ft,why:'A mirror does not give off its own light. It only reflects light.'},
  {q:'How does light travel?',ar:'كَيْفَ يَنْتَقِلُ الضَّوْءُ؟',o:['In straight lines','In circles','In zigzags'],why:'Light travels in straight lines.'},
  {q:'Light bouncing back off a mirror is called ___.',ar:'ارْتِدَادُ الضَّوْءِ عَنِ الْمِرْآةِ يُسَمَّى ___.',o:['reflection','shadow','vibration'],why:'Light bouncing back is called reflection.'},
  {q:'Which surface gives regular reflection?',ar:'أَيُّ سَطْحٍ يُعْطِي انْعِكَاسًا مُنْتَظِمًا؟',o:['A mirror','A brick wall','A rough rock'],why:'A smooth, shiny mirror gives regular reflection.'},
  {q:'On a rough wall, light scatters in different directions.',ar:'عَلَى الْحَائِطِ الْخَشِنِ، يَتَشَتَّتُ الضَّوْءُ فِي اتِّجَاهَاتٍ مُخْتَلِفَةٍ.',o:tf,why:'A rough wall scatters light in different directions.'},
  {q:'We can use mirrors to send sunlight into a dark place.',ar:'يُمْكِنُنَا اسْتِخْدَامُ الْمَرَايَا لِتَوْجِيهِ ضَوْءِ الشَّمْسِ إِلَى مَكَانٍ مُظْلِمٍ.',o:tf,why:'Mirrors can send sunlight into dark places.'},
  {q:'Why must we never shine a mirror at people\'s eyes?',ar:'لِمَاذَا يَجِبُ أَلَّا نُوَجِّهَ الْمِرْآةَ إِلَى عُيُونِ النَّاسِ؟',o:['It can hurt their eyes','It breaks the mirror','It makes a shadow'],why:'Sunlight from a mirror can hurt the eyes.'}],
 q2:[
  {q:'A magnifying glass gathers sunlight into a ___.',ar:'تُجَمِّعُ الْعَدَسَةُ الْمُكَبِّرَةُ ضَوْءَ الشَّمْسِ فِي ___.',o:['small bright spot','big dark area','straight shadow'],why:'The magnifying glass gathers sunlight into a small spot.'},
  {q:'The gathered spot of light becomes ___.',ar:'تُصْبِحُ النُّقْطَةُ الْمُجَمَّعَةُ ___.',o:['brighter and hotter','darker and colder','wet and soft'],why:'The gathered spot is brighter and hotter.'},
  {q:'The smaller the spot, the hotter it is.',ar:'كُلَّمَا صَغُرَتِ النُّقْطَةُ، زَادَتْ حَرَارَتُهَا.',o:tf,why:'The smaller the spot, the hotter it is.'},
  {q:'Which paper burns faster with a magnifying glass?',ar:'أَيُّ وَرَقَةٍ تَحْتَرِقُ أَسْرَعَ بِالْعَدَسَةِ الْمُكَبِّرَةِ؟',o:['Black paper','White paper','Shiny paper'],why:'Black paper absorbs more sunlight, so it gets hot faster.'},
  {q:'It is safe to look at the Sun through a magnifying glass.',ar:'النَّظَرُ إِلَى الشَّمْسِ مِنْ خِلَالِ الْعَدَسَةِ الْمُكَبِّرَةِ آمِنٌ.',o:ft,why:'Looking at the Sun through a magnifying glass can hurt your eyes.'},
  {q:'Why must we never focus sunlight on clothes or on a friend\'s hand?',ar:'لِمَاذَا يَجِبُ أَلَّا نُجَمِّعَ ضَوْءَ الشَّمْسِ عَلَى الْمَلَابِسِ أَوْ يَدِ صَدِيقٍ؟',o:['It can burn them','It makes them wet','It makes music'],why:'It can burn clothes and living things.'},
  {q:'What should you do with the paper when the activity is over?',ar:'مَاذَا تَفْعَلُ بِالْوَرَقَةِ عِنْدَمَا يَنْتَهِي النَّشَاطُ؟',o:['Put it in water','Put it in your pocket','Leave it in the Sun'],why:'Put the paper in water when you finish.'}],
 q3:[
  {q:'A dark area where light does not reach is called a ___.',ar:'الْمَنْطِقَةُ الْمُظْلِمَةُ الَّتِي لَا يَصِلُ إِلَيْهَا الضَّوْءُ تُسَمَّى ___.',o:['shadow','reflection','light source'],why:'A shadow is a dark area where light does not reach.'},
  {q:'A shadow forms because light travels in straight lines.',ar:'يَتَكَوَّنُ الظِّلُّ لِأَنَّ الضَّوْءَ يَنْتَقِلُ فِي خُطُوطٍ مُسْتَقِيمَةٍ.',o:tf,why:'Light travels in straight lines.'},
  {q:'Why is there a dark area behind a tree in the Sun?',ar:'لِمَاذَا تُوجَدُ مَنْطِقَةٌ مُظْلِمَةٌ خَلْفَ الشَّجَرَةِ فِي الشَّمْسِ؟',o:['The tree blocks the light','The tree gives off light','The ground is wet'],why:'The object blocks the light.'},
  {q:'The light source, the object and the shadow are on one ___.',ar:'مَصْدَرُ الضَّوْءِ وَالْجِسْمُ وَالظِّلُّ عَلَى ___ وَاحِدٍ.',o:['straight line','circle','zigzag'],why:'The light source, object and shadow are on one straight line.'},
  {q:'The Sun is on your right. Where is your shadow?',ar:'الشَّمْسُ عَلَى يَمِينِكَ. أَيْنَ ظِلُّكَ؟',o:['On my left','On my right','In front of the Sun'],why:'The shadow forms on the opposite side of the light.'},
  {q:'The shadow forms on the same side as the light source.',ar:'يَتَكَوَّنُ الظِّلُّ فِي نَفْسِ جِهَةِ مَصْدَرِ الضَّوْءِ.',o:ft,why:'The shadow forms on the opposite side of the light.'},
  {q:'It is safe to look straight at the Sun.',ar:'النَّظَرُ مُبَاشَرَةً إِلَى الشَّمْسِ آمِنٌ.',o:ft,why:'Looking straight at the Sun can hurt your eyes.'}],
 q4:[
  {q:'The Sun rises in the ___.',ar:'تُشْرِقُ الشَّمْسُ مِنَ ___.',o:['east','west','north'],why:'The Sun rises in the east and sets in the west.'},
  {q:'When is your shadow shortest?',ar:'مَتَى يَكُونُ ظِلُّكَ أَقْصَرَ مَا يُمْكِنُ؟',o:['Around noon','Early morning','At sunset'],why:'At noon the Sun is high, so the shadow is short.'},
  {q:'In the evening, the Sun is low and the shadow is long.',ar:'فِي الْمَسَاءِ، تَكُونُ الشَّمْسُ مُنْخَفِضَةً وَالظِّلُّ طَوِيلًا.',o:tf,why:'When the Sun is low, the shadow is long.'},
  {q:'In the morning, a stick\'s shadow points to the ___.',ar:'فِي الصَّبَاحِ، يَتَّجِهُ ظِلُّ الْعَصَا نَحْوَ ___.',o:['west','east','Sun'],why:'In the morning the Sun is in the east, so the shadow points west.'},
  {q:'In the evening, a stick\'s shadow points to the ___.',ar:'فِي الْمَسَاءِ، يَتَّجِهُ ظِلُّ الْعَصَا نَحْوَ ___.',o:['east','west','Sun'],why:'In the evening the Sun is in the west, so the shadow points east.'},
  {q:'In fact, the Sun moves around the Earth every day.',ar:'فِي الْحَقِيقَةِ، تَدُورُ الشَّمْسُ حَوْلَ الْأَرْضِ كُلَّ يَوْمٍ.',o:ft,why:'The Earth rotates on its axis.'},
  {q:'A sundial tells the approximate ___.',ar:'تُحَدِّدُ السَّاعَةُ الشَّمْسِيَّةُ ___ التَّقْرِيبِيَّ.',o:['time','temperature','weight'],why:'A sundial tells the approximate time from a shadow.'},
  {q:'A stick\'s shadow stays the same all day.',ar:'يَبْقَى ظِلُّ الْعَصَا كَمَا هُوَ طُولَ النَّهَارِ.',o:ft,why:'The length and direction of a shadow change during the day.'}],
 q5:[
  {q:'Where is the ground warmer?',ar:'أَيْنَ تَكُونُ الْأَرْضُ أَدْفَأَ؟',o:['In a sunny place','In a shady place','Under a tree'],why:'Sunny ground gets more sunlight, so it is warmer.'},
  {q:'The ground in the shade is cooler and damper.',ar:'الْأَرْضُ فِي الظِّلِّ أَبْرَدُ وَأَكْثَرُ رُطُوبَةً.',o:tf,why:'Shady ground gets less sunlight, so it is cooler and damper.'},
  {q:'What do we use to measure temperature?',ar:'بِمَاذَا نَقِيسُ دَرَجَةَ الْحَرَارَةِ؟',o:['A thermometer','A compass','A mirror'],why:'We measure temperature with a thermometer.'},
  {q:'How do we read a thermometer?',ar:'كَيْفَ نَقْرَأُ التِّرْمُومِتْرَ؟',o:['Top of the red liquid at eye level','From the bottom bulb','From far away'],why:'Read the top of the red liquid at eye level.'},
  {q:'To measure air temperature, the thermometer should be ___ above the ground.',ar:'لِقِيَاسِ حَرَارَةِ الْهَوَاءِ، يَكُونُ التِّرْمُومِتْرُ فَوْقَ الْأَرْضِ بِـ ___.',o:['1.2 to 1.5 meters','5 meters','0 meters'],why:'Air temperature is measured 1.2 to 1.5 meters above the ground.'},
  {q:'Why do we hold the thermometer from its top, not the bulb?',ar:'لِمَاذَا نُمْسِكُ التِّرْمُومِتْرَ مِنْ أَعْلَاهُ، لَا مِنَ الْمُسْتَوْدَعِ؟',o:['Our hand would warm the bulb','The bulb is sharp','It looks nicer'],why:'Your hand would warm the bulb.'},
  {q:'We block direct sunlight from the thermometer.',ar:'نَحْجُبُ ضَوْءَ الشَّمْسِ الْمُبَاشِرَ عَنِ التِّرْمُومِتْرِ.',o:tf,why:'Direct sunlight makes the reading wrong.'},
  {q:'A radiation thermometer must touch the ground.',ar:'يَجِبُ أَنْ يَلْمِسَ تِرْمُومِتْرُ الْإِشْعَاعِ الْأَرْضَ.',o:ft,why:'A radiation thermometer does not touch the ground.'},
  {q:'The red tip of a compass needle points ___.',ar:'يُشِيرُ الطَّرَفُ الْأَحْمَرُ لِإِبْرَةِ الْبُوصْلَةِ إِلَى ___.',o:['north','south','the Sun'],why:'The red tip of the compass needle points north.'},
  {q:'Why do we keep magnets away from a compass?',ar:'لِمَاذَا نُبْعِدُ الْمَغَانِطَ عَنِ الْبُوصْلَةِ؟',o:['They pull the needle the wrong way','They make it hot','They make it heavy'],why:'Metal and magnets pull the needle the wrong way.'}]};

const WORDS=[['💡','light source','مَصْدَرُ الضَّوْءِ','gives off its own light'],['☀️','Sun','الشَّمْسُ','the main natural light source'],['🌿','natural','طَبِيعِيٌّ','not made by people'],['🏭','artificial','صِنَاعِيٌّ','made by people'],['🕯️','candle','شَمْعَةٌ','an artificial light source'],['🔦','flashlight','كَشَّافٌ','an artificial light source'],['➖','straight line','خَطٌّ مُسْتَقِيمٌ','how light travels'],['🪞','mirror','مِرْآةٌ','a smooth, shiny surface'],['↩️','reflection','انْعِكَاسٌ','light bouncing back'],['🧱','rough','خَشِنٌ','not smooth, like a wall'],['🔍','magnifying glass','عَدَسَةٌ مُكَبِّرَةٌ','gathers light into a spot'],['🔥','burn','يَحْتَرِقُ','what the hot spot does to paper'],['⛑️','safety','السَّلَامَةُ','staying safe'],['👤','shadow','ظِلٌّ','a dark area where light does not reach'],['🚧','block','يَحْجُبُ','to stop the light'],['🌅','east','الشَّرْقُ','where the Sun rises'],['🌇','west','الْغَرْبُ','where the Sun sets'],['🕛','noon','الظُّهْرُ','the shortest shadow'],['🕰️','sundial','سَاعَةٌ شَمْسِيَّةٌ','tells the time by a shadow'],['🌍','rotate','تَدُورُ','what the Earth does on its axis'],['🌡️','thermometer','تِرْمُومِتْرٌ','measures temperature'],['🌳','shady','ظَلِيلٌ','cooler and damper'],['🏜️','sunny','مُشْمِسٌ','warmer and drier'],['🧭','compass','بُوصْلَةٌ','shows the directions'],['⬆️','north','الشَّمَالُ','where the red tip points']];
