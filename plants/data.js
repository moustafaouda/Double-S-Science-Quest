/* ---------- world data: Chapter 3, How Plants Grow ---------- */
const W3={id:3,title:'How Plants Grow',ar:'كَيْفَ يَنْمُو النَّبَاتُ',em:'🌱',lessons:[
 {t:'1 · Sowing seeds',ar:'زِرَاعَةُ الْبُذُورِ',acts:[['l1','learn','Learn: seeds and planting','📖'],['seeds','seeds','Seed detective lab','🔍'],['sow','sow','Plant a seed lab','🪴'],['when','when','When do we plant?','📅'],['q1','quiz','Lesson 1 quiz','❓'],['w1','words','Word builder: lesson 1 words','🔤']]},
 {t:'2 · After sprouting',ar:'بَعْدَ الْإِنْبَاتِ',acts:[['l2','learn','Learn: seed leaves and true leaves','📖'],['grow','grow','Grow a sunflower lab','🌻'],['q2','quiz','Lesson 2 quiz','❓'],['w2','words','Word builder: lesson 2 words','🔤']]},
 {t:'3 · Flowers and fruits',ar:'الْأَزْهَارُ وَالثِّمَارُ',acts:[['l3','learn','Learn: from flower to fruit','📖'],['bloom','bloom','Flower to fruit lab','🌸'],['journey','journey','Plant life cycle game','🧩'],['q3','quiz','Lesson 3 quiz','❓'],['w3','words','Word builder: lesson 3 words','🔤']]},
 {t:'4 · The plant body',ar:'جِسْمُ النَّبَاتِ',acts:[['l4','learn','Learn: roots, stem and leaves','📖'],['parts','parts','Build a plant lab','🌿'],['q4','quiz','Lesson 4 quiz','❓'],['w4','words','Word builder: lesson 4 words','🔤']]},
 {t:'Final challenge',ar:'التَّحَدِّي النِّهَائِيُّ',acts:[['boss','boss','Boss battle: the Weed Monster','👾'],['gshow','gshow','Bonus: the garden time-lapse show','🎬']]}],
 free:[['flash','flash','Word cards','🃏']]};

const PLANT_ROUNDS=[
 {t:'How do we plant a seed?',ar:'كَيْفَ نَزْرَعُ الْبَذْرَةَ؟',s:['👆 Make a small hole in the soil with your finger','🌰 Put the seed in the hole','🤲 Cover it gently with soil','💧 Water the soil right away'],sa:['اصْنَعْ حُفْرَةً صَغِيرَةً فِي التُّرْبَةِ بِإِصْبَعِكَ','ضَعِ الْبَذْرَةَ فِي الْحُفْرَةِ','غَطِّهَا بِالتُّرْبَةِ بِرِفْقٍ','اسْقِ التُّرْبَةَ فَوْرًا']},
 {t:'The life cycle of a sunflower',ar:'دَوْرَةُ حَيَاةِ نَبَاتِ عَبَّادِ الشَّمْسِ',s:['🌰 We plant the seed','🌱 The seedling comes out with two seed leaves','🍃 True leaves appear','🌼 Buds form and flowers bloom','🌻 Fruits with new seeds form'],sa:['نَزْرَعُ الْبَذْرَةَ','تَخْرُجُ النَّبْتَةُ بِوَرَقَتَيْنِ بَذْرِيَّتَيْنِ','تَظْهَرُ الْأَوْرَاقُ الْحَقِيقِيَّةُ','تَتَكَوَّنُ الْبَرَاعِمُ وَتَتَفَتَّحُ الْأَزْهَارُ','تَتَكَوَّنُ ثِمَارٌ فِيهَا بُذُورٌ جَدِيدَةٌ']},
 {t:'How does a fruit form?',ar:'كَيْفَ تَتَكَوَّنُ الثَّمَرَةُ؟',s:['🌸 The flower blooms','🥀 The flower withers','🫛 The base of the flower swells into a fruit','🌰 The fruit ripens, and seeds form inside'],sa:['تَتَفَتَّحُ الزَّهْرَةُ','تَذْبُلُ الزَّهْرَةُ','تَنْتَفِخُ قَاعِدَةُ الزَّهْرَةِ وَتُصْبِحُ ثَمَرَةً','تَنْضَجُ الثَّمَرَةُ، وَتَتَكَوَّنُ الْبُذُورُ دَاخِلَهَا']},
 {t:'How does water travel in a plant?',ar:'كَيْفَ يَنْتَقِلُ الْمَاءُ فِي النَّبَاتِ؟',s:['💧 The roots absorb water from the soil','🌿 The stem carries the water up','🍃 The water reaches the leaves and flowers'],sa:['تَمْتَصُّ الْجُذُورُ الْمَاءَ مِنَ التُّرْبَةِ','تَنْقُلُ السَّاقُ الْمَاءَ إِلَى أَعْلَى','يَصِلُ الْمَاءُ إِلَى الْأَوْرَاقِ وَالْأَزْهَارِ']}];

const PLANT_GAMES=[
 {id:'fj',em:'🐸',name:'Froggy Plant Jumps',ar:'قَفَزَاتُ الضِّفْدَعِ النَّبَاتِيَّةُ',kind:'Froggy Jumps',how:'Help the frog jump onto the lily pad with the right answer!',howAr:'سَاعِدِ الضِّفْدَعَ لِيَقْفِزَ إِلَى الْإِجَابَةِ الصَّحِيحَةِ!',col:'#22b46e',url:'https://www.educaplay.com/learning-resources/31634468-plants_quest_1_froggy_plant_jumps.html'},
 {id:'lu',em:'🪜',name:'Plant Line Up',ar:'رَتِّبْ مَرَاحِلَ النَّبَاتِ',kind:'Line Up',how:'Put the stages of plant life in the right order!',howAr:'رَتِّبْ مَرَاحِلَ حَيَاةِ النَّبَاتِ بِالتَّرْتِيبِ الصَّحِيحِ!',col:'#4a8cff',url:'https://www.educaplay.com/learning-resources/31634998-plants_quest_2_plant_line_up.html'},
 {id:'mm',em:'🧠',name:'English–Arabic Memory',ar:'ذَاكِرَةُ الْكَلِمَاتِ',kind:'Memory',how:'Turn the cards and match each English word with its Arabic meaning!',howAr:'اقْلِبِ الْبِطَاقَاتِ، وَطَابِقْ كُلَّ كَلِمَةٍ بِمَعْنَاهَا!',col:'#8c5cff',url:'https://www.educaplay.com/learning-resources/31635642-plants_quest_3_english_arabic_memory.html'},
 {id:'yn',em:'👍',name:'True or False Plant Facts',ar:'صَحٌّ أَمْ خَطَأٌ؟',kind:'Yes or No',how:'Swipe each plant fact: true or false?',howAr:'اسْحَبْ كُلَّ جُمْلَةٍ: صَحٌّ أَمْ خَطَأٌ؟',col:'#ff7a45',url:'https://www.educaplay.com/learning-resources/31636291-plants_quest_4_true_or_false_plant_facts.html'},
 {id:'ms',em:'🗂️',name:'Plant Sorter',ar:'صَنِّفْ أَجْزَاءَ النَّبَاتِ',kind:'Matching',how:'Sort every item into the right group!',howAr:'ضَعْ كُلَّ شَيْءٍ فِي مَجْمُوعَتِهِ الصَّحِيحَةِ!',col:'#e0457b',url:'https://www.educaplay.com/learning-resources/31636935-plants_quest_5_plant_sorter.html'},
 {id:'wd',em:'🔤',name:'Plant Word Builder',ar:'رَتِّبْ حُرُوفَ الْكَلِمَاتِ',kind:'Unscramble Letters',how:'Read the Arabic meaning, then put the letters in order to spell the English word!',howAr:'اقْرَأِ الْمَعْنَى بِالْعَرَبِيَّةِ، ثُمَّ رَتِّبِ الْحُرُوفَ لِتَكْتُبَ الْكَلِمَةَ الْإِنْجِلِيزِيَّةَ!',col:'#00a6a6',url:''}];

W3.bg='plants';W3.games=PLANT_GAMES;W3.rounds=PLANT_ROUNDS;
W3.boss={name:'Weed Monster',ar:'وَحْشُ الْأَعْشَابِ الضَّارَّةِ',acc:'وَحْشَ الْأَعْشَابِ الضَّارَّةِ',em:'🌿',col:'#3f8f2f',eye:'#fef08a',snd:'zap',qs:['q1','q2','q3','q4']};
W3.grand={champ:'Plant Champion',champAr:'بَطَلُ النَّبَاتِ',title:'The Grand Plant Challenge',titleAr:'التَّحَدِّي الْكَبِيرُ لِلنَّبَاتِ'};
W3.breaks=[
 ['b-stretch','Grow like a seed! Curl up small on the floor, then slowly stand up and stretch tall like a sunflower.','انْمُ مِثْلَ الْبَذْرَةِ! تَكَوَّرْ صَغِيرًا عَلَى الْأَرْضِ، ثُمَّ قِفْ بِبُطْءٍ وَتَمَدَّدْ طَوِيلًا مِثْلَ عَبَّادِ الشَّمْسِ.','🌻'],
 ['bounce','Find something in the house that comes from a plant!','ابْحَثْ فِي الْبَيْتِ عَنْ شَيْءٍ يَأْتِي مِنَ النَّبَاتِ!','🌿'],
 ['b-spin','Be a sunflower: turn your face slowly from east to west, like it follows the Sun!','كُنْ زَهْرَةَ عَبَّادِ الشَّمْسِ: أَدِرْ وَجْهَكَ بِبُطْءٍ مِنَ الشَّرْقِ إِلَى الْغَرْبِ!','☀️']];
initWorld(W3);

/* ---------- lesson content ---------- */
const VOCAB={
 w1:[['seed','بَذْرَةٌ'],['life cycle','دَوْرَةُ الْحَيَاةِ'],['planting','زِرَاعَةٌ'],['sunflower','عَبَّادُ الشَّمْسِ'],['fava bean','الْفُولُ'],['bean','الْفَاصُولْيَا'],['chickpea','الْحِمَّصُ'],['shape','الشَّكْلُ'],['color','اللَّوْنُ'],['size','الْحَجْمُ'],['hole','حُفْرَةٌ'],['soil','التُّرْبَةُ'],['cover','يُغَطِّي'],['gently','بِرِفْقٍ'],['water the soil','يَرْوِي التُّرْبَةَ'],['germinate','يُنْبِتُ'],['sprout','بُرْعُمٌ نَابِتٌ'],['immediately','فَوْرًا'],['oval','بَيْضَاوِيٌّ'],['round','مُسْتَدِيرٌ'],['striped','مُخَطَّطٌ']],
 w2:[['germination','الْإِنْبَاتُ'],['seedling','نَبْتَةٌ'],['seed leaves','أَوْرَاقٌ بَذْرِيَّةٌ'],['cotyledons','فِلْقَتَانِ'],['true leaves','أَوْرَاقٌ حَقِيقِيَّةٌ'],['serrated','مُسَنَّنٌ'],['edges','حَوَافُّ'],['gradually','تَدْرِيجِيًّا'],['light green','أَخْضَرُ فَاتِحٌ'],['dark green','أَخْضَرُ دَاكِنٌ'],['Arabian jasmine','الْيَاسَمِينُ الْعَرَبِيُّ'],['balsam','الْبَلْسَمُ'],['plant height','ارْتِفَاعُ النَّبَاتِ'],['soil surface','سَطْحُ التُّرْبَةِ'],['measure','يَقِيسُ'],['ruler','مِسْطَرَةٌ'],['paper measuring strip','الشَّرِيطُ الْوَرَقِيُّ لِلْقِيَاسِ']],
 w3:[['stages','مَرَاحِلُ'],['bud','بُرْعُمٌ'],['flower','زَهْرَةٌ'],['blooming','تَفَتُّحٌ'],['fully grown','مُكْتَمِلُ النُّمُوِّ'],['wither','يَذْبُلُ'],['base','قَاعِدَةٌ'],['swell','يَنْتَفِخُ'],['fruit','ثَمَرَةٌ'],['ripen','يَنْضَجُ'],['new seeds','بُذُورٌ جَدِيدَةٌ'],['restart','يُعِيدُ الْبَدْءَ'],['generation','جِيلٌ'],['produce','يُنْتِجُ'],['examine','يَفْحَصُ'],['looks like','يُشْبِهُ'],['wings','أَجْنِحَةٌ'],['Sun\'s disk','قُرْصُ الشَّمْسِ']],
 w4:[['plant body','جِسْمُ النَّبَاتِ'],['roots','الْجُذُورُ'],['stem','السَّاقُ'],['leaves','الْأَوْرَاقُ'],['function','وَظِيفَةٌ'],['support','يُدَعِّمُ'],['pathway','مَمَرٌّ'],['transport','يَنْقُلُ'],['absorb','يَمْتَصُّ'],['firmly','بِإِحْكَامٍ'],['holding','تَثْبِيتٌ'],['capture sunlight','يَلْتَقِطُ ضَوْءَ الشَّمْسِ'],['wide and flat','عَرِيضٌ وَمُسَطَّحٌ'],['below the soil','تَحْتَ التُّرْبَةِ'],['above the soil','فَوْقَ التُّرْبَةِ'],['whole plant','النَّبَاتُ كَامِلًا'],['connected','مُتَّصِلٌ'],['deeper','أَعْمَقُ']]};

const LEARN={
 l1:[
  {en:'Plants have a life cycle too. It begins with a small part called a <b>seed</b>.',ar:'لِلنَّبَاتِ دَوْرَةُ حَيَاةٍ أَيْضًا، وَتَبْدَأُ بِجُزْءٍ صَغِيرٍ يُسَمَّى الْبَذْرَةَ.',art:'seed'},
  {en:'Most plants begin growing from seeds. Seeds differ in <b>shape</b>, <b>color</b> and <b>size</b>, depending on the type of plant.',ar:'تَبْدَأُ مُعْظَمُ النَّبَاتَاتِ نُمُوَّهَا مِنَ الْبُذُورِ. وَتَخْتَلِفُ الْبُذُورُ فِي الشَّكْلِ وَاللَّوْنِ وَالْحَجْمِ حَسَبَ نَوْعِ النَّبَاتِ.',art:'seeds'},
  {en:'<b>Sunflower</b> seeds are oval, striped black and white, and large. <b>Chickpea</b> seeds are round, light yellow and small. <b>Fava bean</b> seeds are wide, flat and light brown.',ar:'بُذُورُ عَبَّادِ الشَّمْسِ بَيْضَاوِيَّةٌ، مُخَطَّطَةٌ بِالْأَسْوَدِ وَالْأَبْيَضِ، وَكَبِيرَةٌ. وَبُذُورُ الْحِمَّصِ مُسْتَدِيرَةٌ، صَفْرَاءُ فَاتِحَةٌ، وَصَغِيرَةٌ. وَبُذُورُ الْفُولِ عَرِيضَةٌ، مُسَطَّحَةٌ، بُنِّيَّةٌ فَاتِحَةٌ.',art:'seedcards'},
  {en:'The best planting time depends on the plant. <b>Sunflower</b> is planted in <b>March and April</b>. <b>Fava bean</b> is planted in <b>October and November</b>.',ar:'أَفْضَلُ وَقْتٍ لِلزِّرَاعَةِ يَعْتَمِدُ عَلَى نَوْعِ النَّبَاتِ. يُزْرَعُ عَبَّادُ الشَّمْسِ فِي مَارِسَ وَأَبْرِيلَ، وَيُزْرَعُ الْفُولُ فِي أُكْتُوبَرَ وَنُوفَمْبِرَ.',art:'calendar'},
  {en:'How to plant: make a small hole with your finger → put the seed in → cover it gently with soil → water it right away, so the seed can <b>germinate</b>.',ar:'طَرِيقَةُ الزِّرَاعَةِ: اصْنَعْ حُفْرَةً صَغِيرَةً بِإِصْبَعِكَ، ثُمَّ ضَعِ الْبَذْرَةَ، ثُمَّ غَطِّهَا بِالتُّرْبَةِ بِرِفْقٍ، ثُمَّ اسْقِهَا فَوْرًا لِكَيْ تُنْبِتَ.',art:'sowsteps'}],
 l2:[
  {en:'<b>Germination</b> is the beginning of seed growth. After some days, a small <b>sprout</b> comes out of the soil.',ar:'الْإِنْبَاتُ هُوَ بِدَايَةُ نُمُوِّ الْبَذْرَةِ. وَبَعْدَ بِضْعَةِ أَيَّامٍ، يَخْرُجُ نَبْتٌ صَغِيرٌ مِنَ التُّرْبَةِ.',art:'germ'},
  {en:'The first leaves on the small plant (the <b>seedling</b>) are the <b>seed leaves</b>. They are light green with smooth edges, and there are <b>two</b> of them.',ar:'أَوَّلُ أَوْرَاقٍ عَلَى النَّبْتَةِ الصَّغِيرَةِ هِيَ الْأَوْرَاقُ الْبَذْرِيَّةُ. لَوْنُهَا أَخْضَرُ فَاتِحٌ، وَحَوَافُّهَا مَلْسَاءُ، وَعَدَدُهَا اثْنَتَانِ.',art:'seedleaves'},
  {en:'Then the <b>true leaves</b> appear. They are darker green with <b>serrated (jagged)</b> edges, and their number increases as the plant grows.',ar:'ثُمَّ تَظْهَرُ الْأَوْرَاقُ الْحَقِيقِيَّةُ. لَوْنُهَا أَخْضَرُ أَغْمَقُ، وَحَوَافُّهَا مُسَنَّنَةٌ، وَيَزْدَادُ عَدَدُهَا كُلَّمَا نَمَا النَّبَاتُ.',art:'trueleaves'},
  {en:'Sunflower, balsam and Arabian jasmine all have <b>two</b> seed leaves when their seeds germinate.',ar:'عَبَّادُ الشَّمْسِ وَالْبَلْسَمُ وَالْيَاسَمِينُ الْعَرَبِيُّ لِكُلٍّ مِنْهَا وَرَقَتَانِ بَذْرِيَّتَانِ عِنْدَ الْإِنْبَاتِ.',art:'twoleaves'},
  {en:'<b>Plant height</b> is the distance from the soil surface to the highest point of the plant. We measure it with a ruler or a paper measuring strip.',ar:'ارْتِفَاعُ النَّبَاتِ هُوَ الْمَسَافَةُ مِنْ سَطْحِ التُّرْبَةِ إِلَى أَعْلَى نُقْطَةٍ فِي النَّبَاتِ، وَنَقِيسُهُ بِالْمِسْطَرَةِ أَوْ بِالشَّرِيطِ الْوَرَقِيِّ لِلْقِيَاسِ.',art:'height'}],
 l3:[
  {en:'When the plant is fully grown, <b>flower buds</b> form. Then the buds <b>bloom</b> into flowers.',ar:'عِنْدَمَا يَكْتَمِلُ نُمُوُّ النَّبَاتِ، تَتَكَوَّنُ الْبَرَاعِمُ الزَّهْرِيَّةُ، ثُمَّ تَتَفَتَّحُ الْبَرَاعِمُ إِلَى أَزْهَارٍ.',art:'bud'},
  {en:'Later, the flower <b>withers</b> (dries up). Its lower part (the base) <b>swells</b> and becomes a <b>fruit</b>.',ar:'بَعْدَ ذٰلِكَ، تَذْبُلُ الزَّهْرَةُ، وَيَنْتَفِخُ جُزْؤُهَا السُّفْلِيُّ، أَيِ الْقَاعِدَةُ، وَيُصْبِحُ ثَمَرَةً.',art:'fruitform'},
  {en:'The fruit <b>ripens</b>, and new <b>seeds</b> form inside it.',ar:'تَنْضَجُ الثَّمَرَةُ، وَتَتَكَوَّنُ بُذُورٌ جَدِيدَةٌ دَاخِلَهَا.',art:'ripe'},
  {en:'New seeds fall onto the soil, germinate and grow into new plants. The life cycle continues from generation to generation!',ar:'تَسْقُطُ الْبُذُورُ الْجَدِيدَةُ عَلَى التُّرْبَةِ، فَتُنْبِتُ وَتَنْمُو نَبَاتَاتٍ جَدِيدَةً. وَهٰكَذَا تَسْتَمِرُّ دَوْرَةُ الْحَيَاةِ مِنْ جِيلٍ إِلَى جِيلٍ!',art:'cycle'},
  {en:'The fava bean flower is small, purple and white, and looks like a butterfly. The sunflower is big and yellow, and looks like the Sun\'s disk. One sunflower makes very many seeds!',ar:'زَهْرَةُ الْفُولِ صَغِيرَةٌ، بَنَفْسَجِيَّةٌ وَبَيْضَاءُ، وَتُشْبِهُ الْفَرَاشَةَ. أَمَّا زَهْرَةُ عَبَّادِ الشَّمْسِ فَكَبِيرَةٌ صَفْرَاءُ، وَتُشْبِهُ قُرْصَ الشَّمْسِ، وَتُنْتِجُ زَهْرَةٌ وَاحِدَةٌ بُذُورًا كَثِيرَةً جِدًّا!',art:'compare'}],
 l4:[
  {en:'A plant\'s body has <b>3 main parts</b>: the roots, the stem and the leaves.',ar:'يَتَكَوَّنُ جِسْمُ النَّبَاتِ مِنْ ثَلَاثَةِ أَجْزَاءٍ رَئِيسِيَّةٍ: الْجُذُورِ، وَالسَّاقِ، وَالْأَوْرَاقِ.',art:'body'},
  {en:'The <b>roots</b> grow below the soil. They hold the plant firmly in the soil, and they absorb water from it.',ar:'تَنْمُو الْجُذُورُ تَحْتَ سَطْحِ التُّرْبَةِ، وَهِيَ تُثَبِّتُ النَّبَاتَ بِإِحْكَامٍ فِي التُّرْبَةِ، وَتَمْتَصُّ الْمَاءَ مِنْهَا.',art:'roots'},
  {en:'The <b>stem</b> grows above the soil. It supports the plant, and it is a pathway that carries water from the roots to the leaves and flowers.',ar:'تَنْمُو السَّاقُ فَوْقَ سَطْحِ التُّرْبَةِ، وَهِيَ تُدَعِّمُ النَّبَاتَ، وَتَعْمَلُ مَمَرًّا يَنْقُلُ الْمَاءَ مِنَ الْجُذُورِ إِلَى الْأَوْرَاقِ وَالْأَزْهَارِ.',art:'stem'},
  {en:'Many <b>leaves</b> are wide and flat, like fava bean and sunflower leaves, to capture as much sunlight as possible.',ar:'كَثِيرٌ مِنَ الْأَوْرَاقِ عَرِيضَةٌ وَمُسَطَّحَةٌ، مِثْلَ أَوْرَاقِ الْفُولِ وَعَبَّادِ الشَّمْسِ، لِتَلْتَقِطَ أَكْبَرَ كَمِّيَّةٍ مِنْ ضَوْءِ الشَّمْسِ.',art:'leaves'},
  {en:'As a plant grows, it gets taller, and its leaves increase in size and number. Its roots can be longer and deeper than you expect!',ar:'كُلَّمَا نَمَا النَّبَاتُ، ازْدَادَ طُولُهُ، وَزَادَتْ أَوْرَاقُهُ فِي الْحَجْمِ وَالْعَدَدِ. وَقَدْ تَكُونُ جُذُورُهُ أَطْوَلَ وَأَعْمَقَ مِمَّا تَتَوَقَّعُ!',art:'grows'}]};

const WA={
 'A plant begins its life as a seed.':'يَبْدَأُ النَّبَاتُ حَيَاتَهُ بَذْرَةً.',
 'Seeds differ in shape, color and size.':'تَخْتَلِفُ الْبُذُورُ فِي الشَّكْلِ وَاللَّوْنِ وَالْحَجْمِ.',
 'Sunflower seeds are oval and striped black and white.':'بُذُورُ عَبَّادِ الشَّمْسِ بَيْضَاوِيَّةٌ وَمُخَطَّطَةٌ بِالْأَسْوَدِ وَالْأَبْيَضِ.',
 'Chickpea seeds are round and light yellow.':'بُذُورُ الْحِمَّصِ مُسْتَدِيرَةٌ وَصَفْرَاءُ فَاتِحَةٌ.',
 'Fava bean seeds are wide, flat and light brown.':'بُذُورُ الْفُولِ عَرِيضَةٌ وَمُسَطَّحَةٌ وَبُنِّيَّةٌ فَاتِحَةٌ.',
 'Sunflower is planted in March and April.':'يُزْرَعُ عَبَّادُ الشَّمْسِ فِي مَارِسَ وَأَبْرِيلَ.',
 'Fava bean is planted in October and November.':'يُزْرَعُ الْفُولُ فِي أُكْتُوبَرَ وَنُوفَمْبِرَ.',
 'We water the soil right after planting, so the seed can germinate.':'نَسْقِي التُّرْبَةَ بَعْدَ الزِّرَاعَةِ فَوْرًا، لِكَيْ تُنْبِتَ الْبَذْرَةُ.',
 'We cover the seed gently with soil.':'نُغَطِّي الْبَذْرَةَ بِالتُّرْبَةِ بِرِفْقٍ.',
 'Germination is the beginning of seed growth.':'الْإِنْبَاتُ هُوَ بِدَايَةُ نُمُوِّ الْبَذْرَةِ.',
 'The seed leaves are the first leaves of the seedling.':'الْأَوْرَاقُ الْبَذْرِيَّةُ هِيَ أَوَّلُ أَوْرَاقِ النَّبْتَةِ.',
 'Seed leaves are light green with smooth edges.':'الْأَوْرَاقُ الْبَذْرِيَّةُ خَضْرَاءُ فَاتِحَةٌ وَحَوَافُّهَا مَلْسَاءُ.',
 'True leaves have serrated (jagged) edges.':'حَوَافُّ الْأَوْرَاقِ الْحَقِيقِيَّةِ مُسَنَّنَةٌ.',
 'The number of true leaves increases as the plant grows.':'يَزْدَادُ عَدَدُ الْأَوْرَاقِ الْحَقِيقِيَّةِ كُلَّمَا نَمَا النَّبَاتُ.',
 'A sunflower seedling has two seed leaves.':'لِنَبْتَةِ عَبَّادِ الشَّمْسِ وَرَقَتَانِ بَذْرِيَّتَانِ.',
 'Plant height is measured from the soil surface to the highest point.':'يُقَاسُ ارْتِفَاعُ النَّبَاتِ مِنْ سَطْحِ التُّرْبَةِ إِلَى أَعْلَى نُقْطَةٍ.',
 'We measure plant height with a ruler or a paper measuring strip.':'نَقِيسُ ارْتِفَاعَ النَّبَاتِ بِالْمِسْطَرَةِ أَوْ بِالشَّرِيطِ الْوَرَقِيِّ لِلْقِيَاسِ.',
 'Flowers grow from flower buds.':'تَنْمُو الْأَزْهَارُ مِنَ الْبَرَاعِمِ الزَّهْرِيَّةِ.',
 'The base of the flower swells and becomes a fruit.':'تَنْتَفِخُ قَاعِدَةُ الزَّهْرَةِ وَتُصْبِحُ ثَمَرَةً.',
 'Seeds form inside the fruit as it ripens.':'تَتَكَوَّنُ الْبُذُورُ دَاخِلَ الثَّمَرَةِ عِنْدَمَا تَنْضَجُ.',
 'New seeds grow into new plants, so the life cycle continues.':'تَنْمُو الْبُذُورُ الْجَدِيدَةُ نَبَاتَاتٍ جَدِيدَةً، فَتَسْتَمِرُّ دَوْرَةُ الْحَيَاةِ.',
 'Blooming is important for making seeds for the next generation.':'تَفَتُّحُ الْأَزْهَارِ مُهِمٌّ لِإِنْتَاجِ بُذُورِ الْجِيلِ التَّالِي.',
 'The fava bean flower looks like a butterfly.':'زَهْرَةُ الْفُولِ تُشْبِهُ الْفَرَاشَةَ.',
 'One sunflower makes very many seeds.':'زَهْرَةُ عَبَّادِ شَمْسٍ وَاحِدَةٌ تُنْتِجُ بُذُورًا كَثِيرَةً جِدًّا.',
 'A plant has 3 main parts: roots, stem and leaves.':'لِلنَّبَاتِ ثَلَاثَةُ أَجْزَاءٍ رَئِيسِيَّةٍ: الْجُذُورُ وَالسَّاقُ وَالْأَوْرَاقُ.',
 'Roots hold the plant firmly and absorb water.':'الْجُذُورُ تُثَبِّتُ النَّبَاتَ بِإِحْكَامٍ وَتَمْتَصُّ الْمَاءَ.',
 'The stem supports the plant and carries water up.':'السَّاقُ تُدَعِّمُ النَّبَاتَ وَتَنْقُلُ الْمَاءَ إِلَى أَعْلَى.',
 'Wide, flat leaves capture lots of sunlight.':'الْأَوْرَاقُ الْعَرِيضَةُ الْمُسَطَّحَةُ تَلْتَقِطُ ضَوْءًا كَثِيرًا مِنَ الشَّمْسِ.',
 'Roots grow below the soil surface.':'تَنْمُو الْجُذُورُ تَحْتَ سَطْحِ التُّرْبَةِ.',
 'As a plant grows, its leaves increase in size and number.':'كُلَّمَا نَمَا النَّبَاتُ، زَادَتْ أَوْرَاقُهُ فِي الْحَجْمِ وَالْعَدَدِ.'};

const ACTAR={l1:'تَعَلَّمْ: الْبُذُورُ وَالزِّرَاعَةُ',seeds:'مُخْتَبَرُ مُحَقِّقِ الْبُذُورِ',sow:'مُخْتَبَرُ زِرَاعَةِ بَذْرَةٍ',when:'مَتَى نَزْرَعُ؟',q1:'اخْتِبَارُ الدَّرْسِ الْأَوَّلِ',w1:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الْأَوَّلُ',l2:'تَعَلَّمْ: الْأَوْرَاقُ الْبَذْرِيَّةُ وَالْحَقِيقِيَّةُ',grow:'مُخْتَبَرُ إِنْمَاءِ عَبَّادِ الشَّمْسِ',q2:'اخْتِبَارُ الدَّرْسِ الثَّانِي',w2:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّانِي',l3:'تَعَلَّمْ: مِنَ الزَّهْرَةِ إِلَى الثَّمَرَةِ',bloom:'مُخْتَبَرُ مِنَ الزَّهْرَةِ إِلَى الثَّمَرَةِ',journey:'لُعْبَةُ دَوْرَةِ حَيَاةِ النَّبَاتِ',q3:'اخْتِبَارُ الدَّرْسِ الثَّالِثِ',w3:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّالِثُ',l4:'تَعَلَّمْ: الْجُذُورُ وَالسَّاقُ وَالْأَوْرَاقُ',parts:'مُخْتَبَرُ بِنَاءِ نَبَاتٍ',q4:'اخْتِبَارُ الدَّرْسِ الرَّابِعِ',w4:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الرَّابِعُ',boss:'مَعْرَكَةُ وَحْشِ الْأَعْشَابِ الضَّارَّةِ',gshow:'عَرْضُ الْحَدِيقَةِ السَّرِيعُ',flash:'بِطَاقَاتُ الْكَلِمَاتِ',grand:'التَّحَدِّي الْكَبِيرُ لِلنَّبَاتِ'};

const tf=['True ✅','False ❌'],ft=['False ❌','True ✅'];
const QB={
 q1:[
  {q:'Most plants begin growing from a ___.',ar:'تَبْدَأُ مُعْظَمُ النَّبَاتَاتِ نُمُوَّهَا مِنْ ___.',o:['seed','flower','leaf'],why:'A plant begins its life as a seed.'},
  {q:'All seeds have the same shape, color and size.',ar:'جَمِيعُ الْبُذُورِ لَهَا نَفْسُ الشَّكْلِ وَاللَّوْنِ وَالْحَجْمِ.',o:ft,why:'Seeds differ in shape, color and size.'},
  {q:'Which seed is oval and striped black and white?',ar:'أَيُّ بَذْرَةٍ بَيْضَاوِيَّةٌ وَمُخَطَّطَةٌ بِالْأَسْوَدِ وَالْأَبْيَضِ؟',o:['Sunflower seed','Chickpea seed','Fava bean seed'],why:'Sunflower seeds are oval and striped black and white.'},
  {q:'Which seed is round and light yellow?',ar:'أَيُّ بَذْرَةٍ مُسْتَدِيرَةٌ وَصَفْرَاءُ فَاتِحَةٌ؟',o:['Chickpea seed','Sunflower seed','Fava bean seed'],why:'Chickpea seeds are round and light yellow.'},
  {q:'Which seed is wide, flat and light brown?',ar:'أَيُّ بَذْرَةٍ عَرِيضَةٌ وَمُسَطَّحَةٌ وَبُنِّيَّةٌ فَاتِحَةٌ؟',o:['Fava bean seed','Chickpea seed','Sunflower seed'],why:'Fava bean seeds are wide, flat and light brown.'},
  {q:'When do we plant sunflower?',ar:'مَتَى نَزْرَعُ عَبَّادَ الشَّمْسِ؟',o:['March and April','October and November','January'],why:'Sunflower is planted in March and April.'},
  {q:'When do we plant fava bean?',ar:'مَتَى نَزْرَعُ الْفُولَ؟',o:['October and November','March and April','July'],why:'Fava bean is planted in October and November.'},
  {q:'What do we do right after putting the seed in the soil and covering it?',ar:'مَاذَا نَفْعَلُ بَعْدَ وَضْعِ الْبَذْرَةِ فِي التُّرْبَةِ وَتَغْطِيَتِهَا مُبَاشَرَةً؟',o:['Water the soil','Dig it out','Put it in the fridge'],why:'We water the soil right after planting, so the seed can germinate.'},
  {q:'We press the soil very hard on the seed.',ar:'نَضْغَطُ التُّرْبَةَ بِقُوَّةٍ شَدِيدَةٍ عَلَى الْبَذْرَةِ.',o:ft,why:'We cover the seed gently with soil.'}],
 q2:[
  {q:'The beginning of seed growth is called ___.',ar:'بِدَايَةُ نُمُوِّ الْبَذْرَةِ تُسَمَّى ___.',o:['germination','blooming','withering'],why:'Germination is the beginning of seed growth.'},
  {q:'The first leaves of a seedling are the ___.',ar:'أَوَّلُ أَوْرَاقِ النَّبْتَةِ هِيَ ___.',o:['seed leaves','true leaves','flowers'],why:'The seed leaves are the first leaves of the seedling.'},
  {q:'Seed leaves are light green with smooth edges.',ar:'الْأَوْرَاقُ الْبَذْرِيَّةُ خَضْرَاءُ فَاتِحَةٌ وَحَوَافُّهَا مَلْسَاءُ.',o:tf,why:'Seed leaves are light green with smooth edges.'},
  {q:'Which leaves have serrated (jagged) edges?',ar:'أَيُّ أَوْرَاقٍ حَوَافُّهَا مُسَنَّنَةٌ؟',o:['True leaves','Seed leaves','No leaves'],why:'True leaves have serrated (jagged) edges.'},
  {q:'As the plant grows, the number of true leaves ___.',ar:'كُلَّمَا نَمَا النَّبَاتُ، فَإِنَّ عَدَدَ الْأَوْرَاقِ الْحَقِيقِيَّةِ ___.',o:['increases','decreases','stays the same'],why:'The number of true leaves increases as the plant grows.'},
  {q:'How many seed leaves does a sunflower seedling have?',ar:'كَمْ وَرَقَةً بَذْرِيَّةً لِنَبْتَةِ عَبَّادِ الشَّمْسِ؟',o:['Two','One','Ten'],why:'A sunflower seedling has two seed leaves.'},
  {q:'Plant height is measured from the ___ to the highest point of the plant.',ar:'يُقَاسُ ارْتِفَاعُ النَّبَاتِ مِنْ ___ إِلَى أَعْلَى نُقْطَةٍ فِيهِ.',o:['soil surface','bottom of the roots','pot'],why:'Plant height is measured from the soil surface to the highest point.'},
  {q:'What can we use to measure plant height?',ar:'بِمَاذَا نَقِيسُ ارْتِفَاعَ النَّبَاتِ؟',o:['A ruler','A thermometer','A compass'],why:'We measure plant height with a ruler or a paper measuring strip.'}],
 q3:[
  {q:'Flowers grow from ___.',ar:'تَنْمُو الْأَزْهَارُ مِنَ ___.',o:['flower buds','roots','seeds leaves'],why:'Flowers grow from flower buds.'},
  {q:'After the flower withers, its base swells and becomes a ___.',ar:'بَعْدَ أَنْ تَذْبُلَ الزَّهْرَةُ، تَنْتَفِخُ قَاعِدَتُهَا وَتُصْبِحُ ___.',o:['fruit','root','bud'],why:'The base of the flower swells and becomes a fruit.'},
  {q:'Seeds form inside the fruit when it ripens.',ar:'تَتَكَوَّنُ الْبُذُورُ دَاخِلَ الثَّمَرَةِ عِنْدَمَا تَنْضَجُ.',o:tf,why:'Seeds form inside the fruit as it ripens.'},
  {q:'What happens when new seeds fall onto the soil?',ar:'مَاذَا يَحْدُثُ عِنْدَمَا تَسْقُطُ الْبُذُورُ الْجَدِيدَةُ عَلَى التُّرْبَةِ؟',o:['They grow into new plants','They become stones','Nothing'],why:'New seeds grow into new plants, so the life cycle continues.'},
  {q:'Why is blooming an important stage?',ar:'لِمَاذَا يُعَدُّ تَفَتُّحُ الْأَزْهَارِ مَرْحَلَةً مُهِمَّةً؟',o:['It makes seeds for the next generation','It makes the roots longer','It makes the soil wet'],why:'Blooming is important for making seeds for the next generation.'},
  {q:'Which flower looks like a butterfly?',ar:'أَيُّ زَهْرَةٍ تُشْبِهُ الْفَرَاشَةَ؟',o:['Fava bean flower','Sunflower','Rose'],why:'The fava bean flower looks like a butterfly.'},
  {q:'One sunflower makes only one seed.',ar:'زَهْرَةُ عَبَّادِ الشَّمْسِ الْوَاحِدَةُ تُنْتِجُ بَذْرَةً وَاحِدَةً فَقَطْ.',o:ft,why:'One sunflower makes very many seeds.'}],
 q4:[
  {q:'A plant\'s body has ___ main parts.',ar:'يَتَكَوَّنُ جِسْمُ النَّبَاتِ مِنْ ___ أَجْزَاءٍ رَئِيسِيَّةٍ.',o:['3','2','5'],why:'A plant has 3 main parts: roots, stem and leaves.'},
  {q:'Which part holds the plant firmly in the soil?',ar:'أَيُّ جُزْءٍ يُثَبِّتُ النَّبَاتَ بِإِحْكَامٍ فِي التُّرْبَةِ؟',o:['The roots','The leaves','The flower'],why:'Roots hold the plant firmly and absorb water.'},
  {q:'Which part absorbs water from the soil?',ar:'أَيُّ جُزْءٍ يَمْتَصُّ الْمَاءَ مِنَ التُّرْبَةِ؟',o:['The roots','The stem','The leaves'],why:'Roots hold the plant firmly and absorb water.'},
  {q:'Which part carries water from the roots to the leaves?',ar:'أَيُّ جُزْءٍ يَنْقُلُ الْمَاءَ مِنَ الْجُذُورِ إِلَى الْأَوْرَاقِ؟',o:['The stem','The flower','The seed'],why:'The stem supports the plant and carries water up.'},
  {q:'Why are many leaves wide and flat?',ar:'لِمَاذَا تَكُونُ أَوْرَاقٌ كَثِيرَةٌ عَرِيضَةً وَمُسَطَّحَةً؟',o:['To capture lots of sunlight','To hold the soil','To make seeds'],why:'Wide, flat leaves capture lots of sunlight.'},
  {q:'Roots grow above the soil surface.',ar:'تَنْمُو الْجُذُورُ فَوْقَ سَطْحِ التُّرْبَةِ.',o:ft,why:'Roots grow below the soil surface.'},
  {q:'As a plant grows, its leaves increase in size and number.',ar:'كُلَّمَا نَمَا النَّبَاتُ، زَادَتْ أَوْرَاقُهُ فِي الْحَجْمِ وَالْعَدَدِ.',o:tf,why:'As a plant grows, its leaves increase in size and number.'}]};

const WORDS=[['🌰','seed','بَذْرَةٌ','where most plants begin'],['🔄','life cycle','دَوْرَةُ الْحَيَاةِ','the stages of a plant\'s life'],['🌻','sunflower','عَبَّادُ الشَّمْسِ','big yellow flower, planted in March and April'],['🫘','fava bean','الْفُولُ','planted in October and November'],['🟡','chickpea','الْحِمَّصُ','small, round, light yellow seed'],['🕳️','hole','حُفْرَةٌ','we make it in the soil with a finger'],['💧','water the soil','يَرْوِي التُّرْبَةَ','we do it right after planting'],['🌱','germinate','يُنْبِتُ','the seed begins to grow'],['🌿','seedling','نَبْتَةٌ','a small young plant'],['🍀','seed leaves','أَوْرَاقٌ بَذْرِيَّةٌ','the first two leaves, light green'],['🍃','true leaves','أَوْرَاقٌ حَقِيقِيَّةٌ','darker leaves with jagged edges'],['🪚','serrated','مُسَنَّنٌ','with jagged edges, like a saw'],['📏','plant height','ارْتِفَاعُ النَّبَاتِ','from the soil surface to the top'],['🌷','bud','بُرْعُمٌ','a flower grows from it'],['🌸','bloom','يَتَفَتَّحُ','when a bud opens into a flower'],['🥀','wither','يَذْبُلُ','when a flower dries up'],['🫛','fruit','ثَمَرَةٌ','grows from the base of the flower'],['🍑','ripen','يَنْضَجُ','when the fruit is ready'],['🪴','roots','الْجُذُورُ','hold the plant and absorb water'],['🎋','stem','السَّاقُ','supports the plant and carries water'],['🍂','leaves','الْأَوْرَاقُ','capture sunlight'],['💦','absorb','يَمْتَصُّ','to take in water']];
