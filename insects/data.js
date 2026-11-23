/* ---------- world data: Chapter 2, How Insects Grow ---------- */
const W2={id:2,title:'How Insects Grow',ar:'كَيْفَ تَنْمُو الْحَشَرَاتُ',em:'🦋',lessons:[
 {t:'1 · Eggs and larvae',ar:'الْبَيْضُ وَالْيَرَقَاتُ',acts:[['l1','learn','Learn: eggs and larvae','📖'],['eggs','eggs','Egg hunt lab','🔍'],['molt','molt','Feed the caterpillar lab','🐛'],['q1','quiz','Lesson 1 quiz','❓'],['w1','words','Word builder: lesson 1 words','🔤']]},
 {t:'2 · Pupae and adults',ar:'الشَّرَانِقُ وَالْحَشَرَاتُ الْبَالِغَةُ',acts:[['l2','learn','Learn: pupae and adults','📖'],['pupa','pupa','From pupa to butterfly lab','🦋'],['care','care','Raise butterflies lab','🫙'],['journey','journey','Butterfly life cycle game','🧩'],['q2','quiz','Lesson 2 quiz','❓'],['w2','words','Word builder: lesson 2 words','🔤']]},
 {t:'3 · Body of adult insects',ar:'تَرْكِيبُ جِسْمِ الْحَشَرَاتِ الْبَالِغَةِ',acts:[['l3','learn','Learn: head, thorax and abdomen','📖'],['build','build','Build a butterfly lab','🧩'],['isin','isin','Insect or not?','🕷️'],['q3','quiz','Lesson 3 quiz','❓'],['w3','words','Word builder: lesson 3 words','🔤']]},
 {t:'Final challenge',ar:'التَّحَدِّي النِّهَائِيُّ',acts:[['boss','boss','Boss battle: the Spider Monster','👾'],['bshow','bshow','Bonus: the butterfly garden show','🎬']]}],
 free:[['flash','flash','Word cards','🃏']]};

const INSECT_ROUNDS=[
 {t:'The life cycle of a butterfly',ar:'دَوْرَةُ حَيَاةِ الْفَرَاشَةِ',s:['🥚 Egg on the underside of a leaf','🐛 Larva hatches and eats leaves','🫘 Pupa hangs still on a stem','🦋 Adult butterfly comes out'],sa:['بَيْضَةٌ عَلَى الْجَانِبِ السُّفْلِيِّ لِلْوَرَقَةِ','تَفْقِسُ الْيَرَقَةُ وَتَأْكُلُ الْأَوْرَاقَ','تَتَعَلَّقُ الشَّرْنَقَةُ سَاكِنَةً عَلَى سَاقٍ','تَخْرُجُ الْفَرَاشَةُ الْبَالِغَةُ']},
 {t:'How does a larva grow bigger?',ar:'كَيْفَ تَكْبُرُ الْيَرَقَةُ؟',s:['🥚 The larva hatches from the egg','🍃 It eats large amounts of leaves','🫧 Its skin gets too small','🐛 It molts: it sheds the old skin for a bigger one'],sa:['تَفْقِسُ الْيَرَقَةُ مِنَ الْبَيْضَةِ','تَأْكُلُ كَمِّيَّاتٍ كَبِيرَةً مِنَ الْأَوْرَاقِ','يُصْبِحُ جِلْدُهَا صَغِيرًا عَلَيْهَا','تَنْسَلِخُ: تَخْلَعُ الْجِلْدَ الْقَدِيمَ وَتَلْبَسُ جِلْدًا أَكْبَرَ']},
 {t:'How does the butterfly come out?',ar:'كَيْفَ تَخْرُجُ الْفَرَاشَةُ؟',s:['🫘 Changes happen inside the pupa','💥 The outer cover splits','🦋 The butterfly comes out with wrinkled wings','✨ The wings stretch and unfold'],sa:['تَحْدُثُ تَغَيُّرَاتٌ دَاخِلَ الشَّرْنَقَةِ','يَنْشَقُّ الْغِطَاءُ الْخَارِجِيُّ','تَخْرُجُ الْفَرَاشَةُ بِأَجْنِحَةٍ مُجَعَّدَةٍ','تَتَمَدَّدُ الْأَجْنِحَةُ وَتَنْفَرِدُ']}];

const INSECT_GAMES=[
 {id:'fj',em:'🐸',name:'Froggy Insect Jumps',ar:'قَفَزَاتُ الضِّفْدَعِ وَالْحَشَرَاتِ',kind:'Froggy Jumps',how:'Help the frog jump onto the lily pad with the right answer!',howAr:'سَاعِدِ الضِّفْدَعَ لِيَقْفِزَ إِلَى الْإِجَابَةِ الصَّحِيحَةِ!',col:'#22b46e',url:'https://www.educaplay.com/learning-resources/31638032-insects_quest_1_froggy_insect_jumps.html'},
 {id:'lu',em:'🪜',name:'Butterfly Line Up',ar:'رَتِّبْ دَوْرَةَ الْحَيَاةِ',kind:'Line Up',how:'Put the stages of insect growth in the right order!',howAr:'رَتِّبْ مَرَاحِلَ نُمُوِّ الْحَشَرَةِ بِالتَّرْتِيبِ الصَّحِيحِ!',col:'#4a8cff',url:'https://www.educaplay.com/learning-resources/31638526-insects_quest_2_insect_line_up.html'},
 {id:'mm',em:'🧠',name:'English–Arabic Memory',ar:'ذَاكِرَةُ الْكَلِمَاتِ',kind:'Memory',how:'Turn the cards and match each English word with its Arabic meaning!',howAr:'اقْلِبِ الْبِطَاقَاتِ، وَطَابِقْ كُلَّ كَلِمَةٍ بِمَعْنَاهَا!',col:'#8c5cff',url:'https://www.educaplay.com/learning-resources/31639620-insects_quest_3_english_arabic_memory.html'},
 {id:'yn',em:'👍',name:'True or False Insect Facts',ar:'صَحٌّ أَمْ خَطَأٌ؟',kind:'Yes or No',how:'Swipe each insect fact: true or false?',howAr:'اسْحَبْ كُلَّ جُمْلَةٍ: صَحٌّ أَمْ خَطَأٌ؟',col:'#ff7a45',url:'https://www.educaplay.com/learning-resources/31640053-insects_quest_4_true_or_false_insect_facts.html'},
 {id:'ms',em:'🗂️',name:'Insect Sorter',ar:'صَنِّفِ الْحَشَرَاتِ',kind:'Matching',how:'Sort every item into the right group!',howAr:'ضَعْ كُلَّ شَيْءٍ فِي مَجْمُوعَتِهِ الصَّحِيحَةِ!',col:'#e0457b',url:''},
 {id:'wd',em:'🔤',name:'Insect Word Builder',ar:'رَتِّبْ حُرُوفَ الْكَلِمَاتِ',kind:'Unscramble Letters',how:'Read the Arabic meaning, then put the letters in order to spell the English word!',howAr:'اقْرَأِ الْمَعْنَى بِالْعَرَبِيَّةِ، ثُمَّ رَتِّبِ الْحُرُوفَ لِتَكْتُبَ الْكَلِمَةَ الْإِنْجِلِيزِيَّةَ!',col:'#00a6a6',url:''}];

W2.bg='insects';W2.games=INSECT_GAMES;W2.rounds=INSECT_ROUNDS;
W2.boss={name:'Spider Monster',ar:'وَحْشُ الْعَنَاكِبِ',acc:'وَحْشَ الْعَنَاكِبِ',em:'🕷️',col:'#6d28d9',eye:'#f87171',snd:'zap',qs:['q1','q2','q3']};
W2.grand={champ:'Insect Champion',champAr:'بَطَلُ الْحَشَرَاتِ',title:'The Grand Insect Challenge',titleAr:'التَّحَدِّي الْكَبِيرُ لِلْحَشَرَاتِ'};
W2.breaks=[
 ['b-stretch','Caterpillar crawl! Crawl on the floor, then curl up like a pupa, then open your arms like butterfly wings!','زَحْفُ الْيَرَقَةِ! ازْحَفْ عَلَى الْأَرْضِ، ثُمَّ تَكَوَّرْ مِثْلَ الشَّرْنَقَةِ، ثُمَّ افْتَحْ ذِرَاعَيْكَ مِثْلَ أَجْنِحَةِ الْفَرَاشَةِ!','🦋'],
 ['b-jump','Jump like a grasshopper 5 times!','اقْفِزْ مِثْلَ الْجَرَادَةِ خَمْسَ مَرَّاتٍ!','🦗'],
 ['bounce','Touch your head, then your chest (thorax), then your tummy (abdomen). 3 times!','الْمِسْ رَأْسَكَ، ثُمَّ صَدْرَكَ، ثُمَّ بَطْنَكَ، ثَلَاثَ مَرَّاتٍ!','🐜']];
initWorld(W2);

/* ---------- lesson content ---------- */
const VOCAB={
 w1:[['insect','حَشَرَةٌ'],['stages','مَرَاحِلُ'],['egg','بَيْضَةٌ'],['larva','يَرَقَةٌ'],['larvae','يَرَقَاتٌ'],['pupa','شَرْنَقَةٌ'],['adult','بَالِغَةٌ'],['fully grown','مُكْتَمِلُ النُّمُوِّ'],['individuals','أَفْرَادٌ'],['underside','الْجَانِبُ السُّفْلِيُّ'],['location','مَوْقِعٌ'],['protect','يَحْمِي'],['enemies','أَعْدَاءٌ'],['adhesive','لَاصِقٌ'],['hatch','يَفْقِسُ'],['recognize','يَتَعَرَّفُ'],['molting process','عَمَلِيَّةُ الِانْسِلَاخِ'],['shedding skin','تَغْيِيرُ الْجِلْدِ'],['grow rapidly','يَنْمُو بِسُرْعَةٍ'],['leaves','أَوْرَاقٌ']],
 w2:[['pupae','شَرَانِقُ'],['attach','يَتَعَلَّقُ'],['inactive','غَيْرُ نَشِطٍ'],['remains still','يَبْقَى سَاكِنًا'],['outer cover','الْغِطَاءُ الْخَارِجِيُّ'],['split','يَنْشَقُّ'],['emerge','يَخْرُجُ'],['wrinkled','مُجَعَّدٌ'],['stretch','يَتَمَدَّدُ'],['unfold','يَنْفَرِدُ'],['wings','أَجْنِحَةٌ'],['nectar','رَحِيقٌ'],['suck','يَمْتَصُّ'],['feeding marks','عَلَامَاتُ التَّغْذِيَةِ'],['segments','قِطَعٌ دَائِرِيَّةٌ'],['plump','سَمِينٌ'],['transformation','تَحَوُّلٌ'],['life cycle','دَوْرَةُ الْحَيَاةِ'],['raise','يُرَبِّي'],['ventilation','التَّهْوِيَةُ'],['waste','فَضَلَاتٌ'],['disturbing','إِزْعَاجٌ']],
 w3:[['head','الرَّأْسُ'],['thorax','الصَّدْرُ'],['abdomen','الْبَطْنُ'],['antennae','قُرُونُ الِاسْتِشْعَارِ'],['rod-like','يُشْبِهُ الْقَضِيبَ'],['eyes','عُيُونٌ'],['mouth','فَمٌ'],['legs','أَرْجُلٌ'],['six legs','سِتُّ أَرْجُلٍ'],['pairs','أَزْوَاجٌ'],['butterfly','فَرَاشَةٌ'],['dragonfly','حَشَرَةُ الْيَعْسُوبِ'],['grasshopper','جَرَادَةٌ'],['dung beetle','خُنْفُسَاءُ الرَّوْثِ'],['ant','نَمْلَةٌ'],['spider','عَنْكَبُوتٌ'],['head-thorax','الرَّأْسُ-صَدْرٌ'],['fused','مُنْدَمِجٌ'],['region','مِنْطَقَةٌ'],['eight legs','ثَمَانِي أَرْجُلٍ']]};

const LEARN={
 l1:[
  {en:'Insects are all around us. They pass through different <b>stages</b> as they grow into adults.',ar:'الْحَشَرَاتُ مِنْ حَوْلِنَا فِي كُلِّ مَكَانٍ، وَهِيَ تَمُرُّ بِمَرَاحِلَ مُخْتَلِفَةٍ أَثْنَاءَ نُمُوِّهَا حَتَّى تُصْبِحَ بَالِغَةً.',art:'around'},
  {en:'Butterflies, dung beetles and bees grow through <b>4 stages</b>: egg → larva → pupa → adult.',ar:'تَنْمُو الْفَرَاشَاتُ وَخَنَافِسُ الرَّوْثِ وَالنَّحْلُ عَبْرَ أَرْبَعِ مَرَاحِلَ: بَيْضَةٌ، ثُمَّ يَرَقَةٌ، ثُمَّ شَرْنَقَةٌ، ثُمَّ حَشَرَةٌ بَالِغَةٌ.',art:'stages'},
  {en:'Many insects lay their <b>eggs</b> on the <b>underside</b> of leaves, on the plants their larvae will eat.',ar:'تَضَعُ حَشَرَاتٌ كَثِيرَةٌ بَيْضَهَا عَلَى الْجَانِبِ السُّفْلِيِّ لِلْأَوْرَاقِ، عَلَى النَّبَاتَاتِ الَّتِي سَتَأْكُلُهَا يَرَقَاتُهَا.',art:'eggs'},
  {en:'The butterfly sticks its eggs with an <b>adhesive</b> so they don\'t fall. The leaf protects them from enemies and sunlight.',ar:'تُلْصِقُ الْفَرَاشَةُ بَيْضَهَا بِمَادَّةٍ لَاصِقَةٍ حَتَّى لَا يَسْقُطَ، وَتَحْمِيهِ الْوَرَقَةُ مِنَ الْأَعْدَاءِ وَضَوْءِ الشَّمْسِ.',art:'glue'},
  {en:'The young insect that <b>hatches</b> from the egg is the <b>larva</b>. It grows very fast, because it eats lots of leaves!',ar:'الْحَشَرَةُ الصَّغِيرَةُ الَّتِي تَفْقِسُ مِنَ الْبَيْضَةِ هِيَ الْيَرَقَةُ، وَهِيَ تَنْمُو بِسُرْعَةٍ كَبِيرَةٍ لِأَنَّهَا تَأْكُلُ أَوْرَاقًا كَثِيرَةً!',art:'hatch'},
  {en:'As the larva grows, it <b>molts</b>: it sheds its old skin and gets a new, bigger one. It does this several times.',ar:'كُلَّمَا كَبُرَتِ الْيَرَقَةُ، فَإِنَّهَا تَنْسَلِخُ: تَخْلَعُ جِلْدَهَا الْقَدِيمَ، وَتَلْبَسُ جِلْدًا جَدِيدًا أَكْبَرَ، وَتُكَرِّرُ ذٰلِكَ عِدَّةَ مَرَّاتٍ.',art:'molt'}],
 l2:[
  {en:'When the larva stops eating and moving, it attaches itself to a plant stem and turns into a <b>pupa</b>.',ar:'عِنْدَمَا تَتَوَقَّفُ الْيَرَقَةُ عَنِ الْأَكْلِ وَالْحَرَكَةِ، تَتَعَلَّقُ بِسَاقِ نَبَاتٍ، وَتَتَحَوَّلُ إِلَى شَرْنَقَةٍ.',art:'topupa'},
  {en:'The pupa does not move. It looks like it is resting, but big changes happen inside: the body changes into an adult insect!',ar:'الشَّرْنَقَةُ لَا تَتَحَرَّكُ، وَتَبْدُو كَأَنَّهَا تَسْتَرِيحُ، لٰكِنْ تَحْدُثُ دَاخِلَهَا تَغَيُّرَاتٌ كَبِيرَةٌ، فَيَتَحَوَّلُ جِسْمُهَا إِلَى حَشَرَةٍ بَالِغَةٍ!',art:'inside'},
  {en:'The <b>outer cover</b> splits, and the <b>adult</b> butterfly comes out. At first its wings are <b>wrinkled</b>, then they stretch and unfold.',ar:'يَنْشَقُّ الْغِطَاءُ الْخَارِجِيُّ، وَتَخْرُجُ الْفَرَاشَةُ الْبَالِغَةُ. تَكُونُ أَجْنِحَتُهَا مُجَعَّدَةً أَوَّلًا، ثُمَّ تَتَمَدَّدُ وَتَنْفَرِدُ.',art:'emerge'},
  {en:'Adult butterflies have wings, unlike larvae. They suck <b>nectar</b> from flowers.',ar:'لِلْفَرَاشَاتِ الْبَالِغَةِ أَجْنِحَةٌ، عَلَى عَكْسِ الْيَرَقَاتِ، وَهِيَ تَمْتَصُّ الرَّحِيقَ مِنَ الْأَزْهَارِ.',art:'nectar'},
  {en:'The adult lays eggs again, to begin a new <b>life cycle</b>.',ar:'تَضَعُ الْحَشَرَةُ الْبَالِغَةُ الْبَيْضَ مِنْ جَدِيدٍ، لِتَبْدَأَ دَوْرَةَ حَيَاةٍ جَدِيدَةً.',art:'cycle'},
  {en:'To raise butterflies: use a clear box with good ventilation, give fresh moist leaves every day, clean the waste, and do not disturb the pupae.',ar:'لِتَرْبِيَةِ الْفَرَاشَاتِ: اسْتَخْدِمْ صُنْدُوقًا شَفَّافًا جَيِّدَ التَّهْوِيَةِ، وَضَعْ أَوْرَاقًا طَازَجَةً رَطْبَةً كُلَّ يَوْمٍ، وَنَظِّفِ الْفَضَلَاتِ، وَلَا تُزْعِجِ الشَّرَانِقَ.',art:'box'}],
 l3:[
  {en:'The body of an adult insect has <b>3 main parts</b>: the <b>head</b>, the <b>thorax</b> and the <b>abdomen</b>.',ar:'يَتَكَوَّنُ جِسْمُ الْحَشَرَةِ الْبَالِغَةِ مِنْ ثَلَاثَةِ أَجْزَاءٍ رَئِيسِيَّةٍ: الرَّأْسِ، وَالصَّدْرِ، وَالْبَطْنِ.',art:'three'},
  {en:'The <b>head</b> has two eyes, a mouth and two <b>antennae</b>: long, rod-like parts.',ar:'فِي الرَّأْسِ عَيْنَانِ، وَفَمٌ، وَقَرْنَا اسْتِشْعَارٍ طَوِيلَانِ يُشْبِهَانِ الْقَضِيبَ.',art:'headparts'},
  {en:'The <b>thorax</b> has <b>6 legs</b> (3 pairs) and <b>4 wings</b> (2 pairs) attached to it.',ar:'يَتَّصِلُ بِالصَّدْرِ سِتُّ أَرْجُلٍ، أَيْ ثَلَاثَةُ أَزْوَاجٍ، وَأَرْبَعَةُ أَجْنِحَةٍ، أَيْ زَوْجَانِ.',art:'thorax'},
  {en:'The dragonfly, grasshopper, dung beetle, ant and butterfly are all insects.',ar:'حَشَرَةُ الْيَعْسُوبِ، وَالْجَرَادَةُ، وَخُنْفُسَاءُ الرَّوْثِ، وَالنَّمْلَةُ، وَالْفَرَاشَةُ كُلُّهَا حَشَرَاتٌ.',art:'examples'},
  {en:'A <b>spider</b> is <b>not</b> an insect! Its body has only <b>2 parts</b> (head-thorax and abdomen), and it has <b>8 legs</b>.',ar:'الْعَنْكَبُوتُ لَيْسَ حَشَرَةً! يَتَكَوَّنُ جِسْمُهُ مِنْ جُزْأَيْنِ فَقَطْ، الرَّأْسِ-صَدْرٍ وَالْبَطْنِ، وَلَهُ ثَمَانِي أَرْجُلٍ.',art:'spider'}]};

const WA={
 'Insects grow through stages to become adults.':'تَنْمُو الْحَشَرَاتُ عَبْرَ مَرَاحِلَ حَتَّى تُصْبِحَ بَالِغَةً.',
 'The 4 stages are egg, larva, pupa and adult.':'الْمَرَاحِلُ الْأَرْبَعُ هِيَ: الْبَيْضَةُ، وَالْيَرَقَةُ، وَالشَّرْنَقَةُ، وَالْحَشَرَةُ الْبَالِغَةُ.',
 'Many insects lay eggs on the underside of leaves.':'تَضَعُ حَشَرَاتٌ كَثِيرَةٌ بَيْضَهَا عَلَى الْجَانِبِ السُّفْلِيِّ لِلْأَوْرَاقِ.',
 'They lay eggs on plants their larvae will eat.':'تَضَعُ الْبَيْضَ عَلَى النَّبَاتَاتِ الَّتِي سَتَأْكُلُهَا يَرَقَاتُهَا.',
 'Insect eggs differ in shape, color and location.':'يَخْتَلِفُ بَيْضُ الْحَشَرَاتِ فِي الشَّكْلِ وَاللَّوْنِ وَالْمَوْقِعِ.',
 'The larva hatches from the egg.':'تَفْقِسُ الْيَرَقَةُ مِنَ الْبَيْضَةِ.',
 'The larva grows fast because it eats a lot of leaves.':'تَنْمُو الْيَرَقَةُ بِسُرْعَةٍ لِأَنَّهَا تَأْكُلُ أَوْرَاقًا كَثِيرَةً.',
 'Molting means shedding the old skin for a bigger one.':'الِانْسِلَاخُ هُوَ خَلْعُ الْجِلْدِ الْقَدِيمِ وَلُبْسُ جِلْدٍ أَكْبَرَ.',
 'Molting again and again helps the larva grow bigger.':'تَكْرَارُ الِانْسِلَاخِ يُسَاعِدُ الْيَرَقَةَ عَلَى أَنْ تَكْبُرَ.',
 'The pupa attaches to a plant stem and does not move.':'تَتَعَلَّقُ الشَّرْنَقَةُ بِسَاقِ النَّبَاتِ وَلَا تَتَحَرَّكُ.',
 'Inside the pupa, the body changes into an adult insect.':'دَاخِلَ الشَّرْنَقَةِ، يَتَحَوَّلُ الْجِسْمُ إِلَى حَشَرَةٍ بَالِغَةٍ.',
 'The adult comes out when the outer cover splits.':'تَخْرُجُ الْحَشَرَةُ الْبَالِغَةُ عِنْدَمَا يَنْشَقُّ الْغِطَاءُ الْخَارِجِيُّ.',
 'The new wings are wrinkled, then they stretch and unfold.':'تَكُونُ الْأَجْنِحَةُ الْجَدِيدَةُ مُجَعَّدَةً، ثُمَّ تَتَمَدَّدُ وَتَنْفَرِدُ.',
 'Adult butterflies suck nectar from flowers.':'تَمْتَصُّ الْفَرَاشَاتُ الْبَالِغَةُ الرَّحِيقَ مِنَ الْأَزْهَارِ.',
 'The adult lays eggs to begin a new life cycle.':'تَضَعُ الْحَشَرَةُ الْبَالِغَةُ الْبَيْضَ لِتَبْدَأَ دَوْرَةَ حَيَاةٍ جَدِيدَةً.',
 'The larva moves, but the pupa remains still.':'الْيَرَقَةُ تَتَحَرَّكُ، أَمَّا الشَّرْنَقَةُ فَتَبْقَى سَاكِنَةً.',
 'Larvae need fresh, moist leaves every day.':'تَحْتَاجُ الْيَرَقَاتُ إِلَى أَوْرَاقٍ طَازَجَةٍ رَطْبَةٍ كُلَّ يَوْمٍ.',
 'We must not disturb the pupae.':'يَجِبُ أَلَّا نُزْعِجَ الشَّرَانِقَ.',
 'An insect body has 3 parts: head, thorax and abdomen.':'يَتَكَوَّنُ جِسْمُ الْحَشَرَةِ مِنْ ثَلَاثَةِ أَجْزَاءٍ: الرَّأْسِ، وَالصَّدْرِ، وَالْبَطْنِ.',
 'The head has the eyes, the mouth and the antennae.':'فِي الرَّأْسِ الْعُيُونُ وَالْفَمُ وَقَرْنَا الِاسْتِشْعَارِ.',
 'The legs and wings are attached to the thorax.':'تَتَّصِلُ الْأَرْجُلُ وَالْأَجْنِحَةُ بِالصَّدْرِ.',
 'An insect has 6 legs (3 pairs).':'لِلْحَشَرَةِ سِتُّ أَرْجُلٍ، أَيْ ثَلَاثَةُ أَزْوَاجٍ.',
 'A butterfly has 4 wings (2 pairs).':'لِلْفَرَاشَةِ أَرْبَعَةُ أَجْنِحَةٍ، أَيْ زَوْجَانِ.',
 'A spider has 2 body parts and 8 legs, so it is not an insect.':'لِلْعَنْكَبُوتِ جُزْآنِ فِي جِسْمِهِ وَثَمَانِي أَرْجُلٍ، فَهُوَ لَيْسَ حَشَرَةً.',
 'The grasshopper is an insect.':'الْجَرَادَةُ حَشَرَةٌ.'};

const ACTAR={l1:'تَعَلَّمْ: الْبَيْضُ وَالْيَرَقَاتُ',eggs:'مُخْتَبَرُ الْبَحْثِ عَنِ الْبَيْضِ',molt:'مُخْتَبَرُ إِطْعَامِ الْيَرَقَةِ',q1:'اخْتِبَارُ الدَّرْسِ الْأَوَّلِ',w1:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الْأَوَّلُ',l2:'تَعَلَّمْ: الشَّرَانِقُ وَالْحَشَرَاتُ الْبَالِغَةُ',pupa:'مُخْتَبَرُ مِنَ الشَّرْنَقَةِ إِلَى الْفَرَاشَةِ',care:'مُخْتَبَرُ تَرْبِيَةِ الْفَرَاشَاتِ',journey:'لُعْبَةُ دَوْرَةِ حَيَاةِ الْفَرَاشَةِ',q2:'اخْتِبَارُ الدَّرْسِ الثَّانِي',w2:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّانِي',l3:'تَعَلَّمْ: الرَّأْسُ وَالصَّدْرُ وَالْبَطْنُ',build:'مُخْتَبَرُ بِنَاءِ فَرَاشَةٍ',isin:'حَشَرَةٌ أَمْ لَا؟',q3:'اخْتِبَارُ الدَّرْسِ الثَّالِثِ',w3:'بَانِي الْكَلِمَاتِ: الدَّرْسُ الثَّالِثُ',boss:'مَعْرَكَةُ وَحْشِ الْعَنَاكِبِ',bshow:'عَرْضُ حَدِيقَةِ الْفَرَاشَاتِ',flash:'بِطَاقَاتُ الْكَلِمَاتِ',grand:'التَّحَدِّي الْكَبِيرُ لِلْحَشَرَاتِ'};

const tf=['True ✅','False ❌'],ft=['False ❌','True ✅'];
const QB={
 q1:[
  {q:'How many main growth stages does a butterfly have?',ar:'كَمْ مَرْحَلَةً رَئِيسِيَّةً لِنُمُوِّ الْفَرَاشَةِ؟',o:['4','2','6'],why:'The 4 stages are egg, larva, pupa and adult.'},
  {q:'What is the first stage in a butterfly\'s life?',ar:'مَا أُولَى مَرَاحِلِ حَيَاةِ الْفَرَاشَةِ؟',o:['The egg','The pupa','The adult'],why:'The 4 stages are egg, larva, pupa and adult.'},
  {q:'Where do many insects lay their eggs?',ar:'أَيْنَ تَضَعُ حَشَرَاتٌ كَثِيرَةٌ بَيْضَهَا؟',o:['On the underside of leaves','On dry sand','In the water'],why:'Many insects lay eggs on the underside of leaves.'},
  {q:'Why do insects lay eggs on certain plants?',ar:'لِمَاذَا تَضَعُ الْحَشَرَاتُ بَيْضَهَا عَلَى نَبَاتَاتٍ مُعَيَّنَةٍ؟',o:['Their larvae will eat those plants','The plants are pretty','The plants are tall'],why:'They lay eggs on plants their larvae will eat.'},
  {q:'All insect eggs have the same shape and color.',ar:'بَيْضُ جَمِيعِ الْحَشَرَاتِ لَهُ نَفْسُ الشَّكْلِ وَاللَّوْنِ.',o:ft,why:'Insect eggs differ in shape, color and location.'},
  {q:'The young insect that comes out of the egg is the ___.',ar:'الْحَشَرَةُ الصَّغِيرَةُ الَّتِي تَخْرُجُ مِنَ الْبَيْضَةِ هِيَ ___.',o:['larva','pupa','adult'],why:'The larva hatches from the egg.'},
  {q:'Why does a new larva grow very fast?',ar:'لِمَاذَا تَنْمُو الْيَرَقَةُ الْجَدِيدَةُ بِسُرْعَةٍ كَبِيرَةٍ؟',o:['It eats lots of leaves','It sleeps all day','It has wings'],why:'The larva grows fast because it eats a lot of leaves.'},
  {q:'Taking off the old skin and getting a bigger one is called ___.',ar:'خَلْعُ الْجِلْدِ الْقَدِيمِ وَلُبْسُ جِلْدٍ أَكْبَرَ يُسَمَّى ___.',o:['molting','hatching','blooming'],why:'Molting means shedding the old skin for a bigger one.'},
  {q:'Molting again and again helps the larva to ___.',ar:'تَكْرَارُ الِانْسِلَاخِ يُسَاعِدُ الْيَرَقَةَ عَلَى ___.',o:['grow bigger','stop growing','lay eggs'],why:'Molting again and again helps the larva grow bigger.'}],
 q2:[
  {q:'When the larva stops eating and moving, it turns into a ___.',ar:'عِنْدَمَا تَتَوَقَّفُ الْيَرَقَةُ عَنِ الْأَكْلِ وَالْحَرَكَةِ، تَتَحَوَّلُ إِلَى ___.',o:['pupa','egg','spider'],why:'The pupa attaches to a plant stem and does not move.'},
  {q:'The pupa moves around a lot.',ar:'الشَّرْنَقَةُ تَتَحَرَّكُ كَثِيرًا.',o:ft,why:'The larva moves, but the pupa remains still.'},
  {q:'What happens inside the pupa?',ar:'مَاذَا يَحْدُثُ دَاخِلَ الشَّرْنَقَةِ؟',o:['The body changes into an adult','It lays eggs','It eats leaves'],why:'Inside the pupa, the body changes into an adult insect.'},
  {q:'The adult butterfly comes out when the ___ splits.',ar:'تَخْرُجُ الْفَرَاشَةُ الْبَالِغَةُ عِنْدَمَا يَنْشَقُّ ___.',o:['outer cover','leaf','egg'],why:'The adult comes out when the outer cover splits.'},
  {q:'When a butterfly first comes out, its wings are ___.',ar:'عِنْدَمَا تَخْرُجُ الْفَرَاشَةُ أَوَّلَ مَرَّةٍ، تَكُونُ أَجْنِحَتُهَا ___.',o:['wrinkled','very big and dry','missing'],why:'The new wings are wrinkled, then they stretch and unfold.'},
  {q:'What do adult butterflies feed on?',ar:'عَلَامَ تَتَغَذَّى الْفَرَاشَاتُ الْبَالِغَةُ؟',o:['Nectar from flowers','Sand','Other butterflies'],why:'Adult butterflies suck nectar from flowers.'},
  {q:'Why does the adult butterfly lay eggs?',ar:'لِمَاذَا تَضَعُ الْفَرَاشَةُ الْبَالِغَةُ الْبَيْضَ؟',o:['To begin a new life cycle','To make honey','To build a web'],why:'The adult lays eggs to begin a new life cycle.'},
  {q:'When raising butterflies, we give the larvae fresh, moist leaves.',ar:'عِنْدَ تَرْبِيَةِ الْفَرَاشَاتِ، نُعْطِي الْيَرَقَاتِ أَوْرَاقًا طَازَجَةً رَطْبَةً.',o:tf,why:'Larvae need fresh, moist leaves every day.'},
  {q:'We should shake the box to wake up the pupae.',ar:'يَجِبُ أَنْ نَهُزَّ الصُّنْدُوقَ لِنُوقِظَ الشَّرَانِقَ.',o:ft,why:'We must not disturb the pupae.'}],
 q3:[
  {q:'An adult insect\'s body has ___ main parts.',ar:'يَتَكَوَّنُ جِسْمُ الْحَشَرَةِ الْبَالِغَةِ مِنْ ___ أَجْزَاءٍ رَئِيسِيَّةٍ.',o:['3','2','5'],why:'An insect body has 3 parts: head, thorax and abdomen.'},
  {q:'Which part has the eyes and the antennae?',ar:'أَيُّ جُزْءٍ فِيهِ الْعُيُونُ وَقَرْنَا الِاسْتِشْعَارِ؟',o:['The head','The thorax','The abdomen'],why:'The head has the eyes, the mouth and the antennae.'},
  {q:'The legs and wings are attached to the ___.',ar:'تَتَّصِلُ الْأَرْجُلُ وَالْأَجْنِحَةُ بِـ ___.',o:['thorax','head','abdomen'],why:'The legs and wings are attached to the thorax.'},
  {q:'How many legs does an insect have?',ar:'كَمْ رِجْلًا لِلْحَشَرَةِ؟',o:['6','8','4'],why:'An insect has 6 legs (3 pairs).'},
  {q:'How many wings does a butterfly have?',ar:'كَمْ جَنَاحًا لِلْفَرَاشَةِ؟',o:['4','2','6'],why:'A butterfly has 4 wings (2 pairs).'},
  {q:'A spider is an insect.',ar:'الْعَنْكَبُوتُ حَشَرَةٌ.',o:ft,why:'A spider has 2 body parts and 8 legs, so it is not an insect.'},
  {q:'Why is the spider NOT an insect?',ar:'لِمَاذَا لَا يُعَدُّ الْعَنْكَبُوتُ حَشَرَةً؟',o:['It has 2 body parts and 8 legs','It is too small','It cannot walk'],why:'A spider has 2 body parts and 8 legs, so it is not an insect.'},
  {q:'Which one is an insect?',ar:'أَيُّهَا حَشَرَةٌ؟',o:['Grasshopper','Spider','Cat'],why:'The grasshopper is an insect.'}]};

const WORDS=[['🥚','egg','بَيْضَةٌ','the first stage of an insect\'s life'],['🐛','larva','يَرَقَةٌ','hatches from the egg and eats leaves'],['🫘','pupa','شَرْنَقَةٌ','stays still while the body changes'],['🦋','adult','حَشَرَةٌ بَالِغَةٌ','the fully grown insect'],['🍃','underside','الْجَانِبُ السُّفْلِيُّ','where eggs are often laid'],['🐣','hatch','يَفْقِسُ','to come out of an egg'],['🧥','molting','الِانْسِلَاخُ','shedding the old skin'],['🌿','stem','سَاقٌ','the pupa hangs on it'],['💥','split','يَنْشَقُّ','the outer cover opens'],['🌀','wrinkled','مُجَعَّدٌ','how new wings look at first'],['🪽','unfold','يَنْفَرِدُ','what the wings do after a while'],['🌸','nectar','رَحِيقٌ','sweet juice the butterfly sucks'],['🔄','life cycle','دَوْرَةُ الْحَيَاةِ','egg, larva, pupa, adult, then again'],['🗣️','head','الرَّأْسُ','has eyes, mouth and antennae'],['🦺','thorax','الصَّدْرُ','legs and wings attach here'],['🫃','abdomen','الْبَطْنُ','the back part of the body'],['📡','antennae','قُرُونُ الِاسْتِشْعَارِ','long rod-like parts on the head'],['🦵','six legs','سِتُّ أَرْجُلٍ','every insect has them'],['🦗','grasshopper','جَرَادَةٌ','an insect that jumps'],['🕷️','spider','عَنْكَبُوتٌ','8 legs, so not an insect']];
