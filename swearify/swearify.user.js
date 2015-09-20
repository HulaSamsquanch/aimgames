// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*                     
// @version     3.0.00
// @grant       none
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==

//////////////////////////////VERSIONING: X.X.XX
//////////////////////////////DO NOT CHANGE
var swear_words = [
	"shockey", "kaff", "raga", "inhumanpwnage",
	"silver", "acv", "phy", "ben",
	"mdx", "evo", "rafa", "sano", 
	"ulti", "sin", "admin", "ten graves",
	"ragamuffin", "black dragon", "prayers", "mac", //"toa",
	
	"420", "rip", "god", "died", /// ... *tips fedora* //
	"skype", "crack", "sex", "porn",
	"matr0xx", "10th"
];
///////
///////SMILY CODE, OBJECT SHIT
var emoticon_1 = {
  dolan: [':dolan:', 'http://oi62.tinypic.com/2lsk7ra.jpg', 'Dolan'],
  lysf: [':lysf:', 'http://i.imgur.com/8eLDb0a.png', 'LYSF'],
  bed: [':bed:', 'http://i58.tinypic.com/14tlq4g.png', 'Bed'],
  buzz: [':buzz:', 'http://i61.tinypic.com/11hza0i.png', 'buzz'],
  waterc: [':waterc:', 'http://i61.tinypic.com/161dc7b.png', 'waterc'],
  cozy: [':cozy:', 'http://i57.tinypic.com/25tcbw9.png', 'cozy'],
  ween: [':ween:', 'http://i61.tinypic.com/24c9m2x.png', 'ween'],
  smoker: [':smoker:', 'http://i.imgur.com/oayZBiW.png', 'smoker'],
  hug: [':hug:', 'http://i.imgur.com/2rbLxWH.png', 'hug'],
  wp: [':wp:', 'http://i.imgur.com/3nGF3HF.png', 'wp'],
  hide: [':hide:', 'http://i58.tinypic.com/11gjf4p.png', 'hide'],
  kind: [':kind:', 'http://i.imgur.com/M2lLpSW.png', 'kind'],
  frog3: [':frog3:', 'http://i57.tinypic.com/r20u3l.png', 'frog3'],
  feels: [':feels:', 'http://i58.tinypic.com/a49d2h.png', 'feels'],
  fly: [':fly:', 'http://i.imgur.com/GnFj20L.png', 'fly'],
  frog4: [':frog4:', 'http://i58.tinypic.com/e6wsao.png', 'frog4'],
  wink: [':wink:', 'http://i58.tinypic.com/29qo3vc.png', 'wink'],
  dubs: [':dubs:', 'http://i62.tinypic.com/29y09br.png', 'dubs'],
  oceanb: [':oceanb:', 'http://i.imgur.com/biE5mVs.png', 'oceanb'],
  mollusk: [':mollusk:', 'http://i.imgur.com/EQ7H4r1.png', 'mollusk'],
  hah: [':hah:', 'http://i58.tinypic.com/dxd92w.png', 'hah'],
  hue: [':hue:', 'http://i57.tinypic.com/20tjpy1.png', 'hue'],
  wpony: [':wpony:', 'http://i.imgur.com/OBSRlXU.png', 'wpony'],
  bend: [':bend:', 'http://i.imgur.com/Rcf2aZn.png', 'bend'],
  yhf: [':yhf:', 'http://i60.tinypic.com/152ozl0.png', 'yhf'],
  smug: [':smug:', 'http://i61.tinypic.com/11trl93.png', 'smug'],
  am: [':am:', 'http://i.imgur.com/W6b3Ojy.png', 'am'],
  riot: [':riot:', 'http://i.imgur.com/exN4785.png', 'riot'],
  blaze: [':blaze:', 'http://i60.tinypic.com/14ul0nd.png', 'blaze'],
  afx: [':afx:', 'http://i.imgur.com/r5o9xXL.png', 'afx'],
  strokes1: [':strokes1:', 'http://i.imgur.com/IhuPM4O.png', 'strokes1'],
  wave: [':wave:', 'http://i61.tinypic.com/6rk6ds.gif', 'wave'],
  johnny: [':johnny:', 'http://i.imgur.com/vBzuuFZ.jpg', 'johnny'],
  sloth: [':sloth:', 'http://i59.tinypic.com/16idto7.gif', 'sloth'],
  autobahn: [':autobahn:', 'http://i.imgur.com/7HlKkKx.png', 'autobahn'],
  lmao: [':lmao:', 'http://i58.tinypic.com/jhec78.png', 'lmao'],
  yup: [':yup:', 'http://i61.tinypic.com/wqr6te.png', 'yup'],
  ayylmao: [':ayylmao:', 'http://i62.tinypic.com/16islyd.png', 'ayylmao'],
  sip: [':sip:', 'http://i60.tinypic.com/r22k5w.png', 'sip'],
  frog5: [':frog5:', 'http://i60.tinypic.com/dgkwef.png', 'frog5'],
  cool: [':cool:', 'http://i62.tinypic.com/22lxmw.png', 'cool'],
  whew: [':whew:', 'http://i60.tinypic.com/rsy4ck.png', 'whew'],
  err: [':err:', 'http://i58.tinypic.com/23k5hme.png', 'err'],
  sadfrog: [':sadfrog:', 'http://i59.tinypic.com/15yhwd0.png', 'sadfrog'],
  notimpr: [':notimpr:', 'http://i.imgur.com/UJ2Pcqf.png', 'notimpr'],
  murdoc: [':murdoc:', 'http://i.imgur.com/kzK8RfX.png', 'murdoc'],
  notsure: [':notsure:', 'http://i57.tinypic.com/156fhnt.png', 'notsure'],
  maddy: [':maddy:', 'http://i.imgur.com/FF8occF.png', 'maddy'],
  dead: [':dead:', 'http://i.imgur.com/9yw2sIe.png', 'dead'],
  snake: [':snake:', 'http://i59.tinypic.com/52hwf5.png', 'snake'],
  thom: [':thom:', 'http://i.imgur.com/Z5Oo4IU.png', 'thom'],
  snakepoo: [':snakepoo:', 'http://i59.tinypic.com/2462ln5.png', 'snakepoo'],
  squid: [':squid:', 'http://i.imgur.com/Xzqc4dL.png', 'squid'],
  madfrog: [':madfrog:', 'http://i60.tinypic.com/3097j1c.png', 'madfrog'],
  fatsnake: [':fatsnake:', 'http://i61.tinypic.com/i3gl03.jpg', 'fatsnake'],
  supa: [':supa:', 'http://i58.tinypic.com/2dsl0rb.gif', 'supa'],
  sadsmile: [':sadsmile:', 'http://i60.tinypic.com/90vlw1.jpg', 'sadsmile'],
  hmmfrog: [':hmmfrog:', 'http://i58.tinypic.com/351d381.png', 'hmmfrog'],
  lookingin: [':lookingin:', 'http://i60.tinypic.com/veuf4.png', 'lookingin'],
  froggy: [':froggy:', 'http://i57.tinypic.com/2ywy1ci.png', 'froggy'],
  spurdo: [':spurdo:', 'http://i62.tinypic.com/oaqf78.png', 'spurdo'],
  wat: [':wat:', 'http://i61.tinypic.com/34h7udk.png', 'wat'],
  tru: [':tru:', 'http://i61.tinypic.com/2ut6u6g.png', 'tru'],
  egg: [':egg:', 'http://i.imgur.com/Xro7lrY.png', 'egg'],
  isay: [':isay:', 'http://i57.tinypic.com/2mouzw4.gif', 'isay'],
  cute: [':cute:', 'http://i60.tinypic.com/4g3y88.png', 'cute'],
  pointy: [':pointy:', 'http://i57.tinypic.com/o547r8.gif', 'pointy'],
  beet: [':beet:', 'http://i59.tinypic.com/6fs300.png', 'beet'],
  bacon: [':bacon:', 'http://i58.tinypic.com/8xn711.png', 'bacon'],
  hangon: [':hangon:', 'http://i62.tinypic.com/2ihxrbp.png', 'hangon'],
  laul: [':laul:', 'http://i61.tinypic.com/mtt4zk.png', 'laul'],
  damon: [':damon:', 'http://i62.tinypic.com/343smxf.png', 'damon'],
  foff: [':foff:', 'http://i58.tinypic.com/25ks8c5.png', 'foff'],
  jazz: [':jazz:', 'http://i.imgur.com/YMKJdXo.png', 'jazz'],
  quebec: [':quebec:', 'http://i.imgur.com/gpxdYTQ.png', 'quebec'],
  gws: [':gws:', 'http://i.imgur.com/0D0VMkx.png', 'gws'],
  neckbeard: [':neckbeard:', 'http://i57.tinypic.com/iqamad.png', 'neckbeard'],
  troll: [':troll:', 'http://i58.tinypic.com/13zcxt1.png', 'troll'],
  bunny: [':bunny:', 'http://i58.tinypic.com/6ieiqb.png', 'bunny'],
  dew: [':dew:', 'http://i57.tinypic.com/sdn0ok.png', 'dew'],
  doritos: [':doritos:', 'http://i62.tinypic.com/1pxno3.png', 'doritos'],
  frogcry1: [':frogcry1:', 'http://i62.tinypic.com/2mniqlj.png', 'frogcry1'],
  frogcry2: [':frogcry2:', 'http://i57.tinypic.com/2585ees.png', 'frogcry2'],
  bshark: [':bshark:', 'http://i59.tinypic.com/2qu6qdu.png', 'bshark'],
  banana: [':banana:', 'http://i60.tinypic.com/25auiky.png', 'banana'],
  consider: [':consider:', 'http://i62.tinypic.com/1z20r39.png', 'consider'],
  hlaugh: [':hlaugh:', 'http://i59.tinypic.com/24vnq4y.png', 'hlaugh'],
  madman: [':madman:', 'http://i62.tinypic.com/2d1wbro.png', 'madman'],
  eating: [':eating:', 'http://i59.tinypic.com/2962fya.png', 'eating'],
  mpizza: [':mpizza:', 'http://i61.tinypic.com/w2h8p1.png', 'mpizza'],
  creepsmile: [':creepsmile:', 'http://i61.tinypic.com/a40i3b.png', 'creepsmile'],
  allyours: [':allyours:', 'http://i61.tinypic.com/2i1egzl.png', 'allyours'],
  heythere: [':heythere:', 'http://i60.tinypic.com/vxy9sh.png', 'heythere'],
  disgust: [':disgust:', 'http://i59.tinypic.com/nnjll1.png', 'disgust'],
  disgust2: [':disgust2:', 'http://i57.tinypic.com/qn92rr.png', 'disgust 2'],
  canteven: [':canteven:', 'http://i60.tinypic.com/abk7.png', 'canteven'],
  saddance: [':saddance:', 'http://i58.tinypic.com/70gzdf.png', 'saddance'],
  alienfrog: [':alienfrog:', 'http://i59.tinypic.com/2zzmcuq.png', 'alienfrog'],
  sadjello: [':sadjello:', 'http://i62.tinypic.com/2lnyel1.png', 'sadjello'],
  dogfrog: [':dogfrog:', 'http://i59.tinypic.com/19mg5y.png', 'dogfrog'],
  edd: [':edd:', 'http://i60.tinypic.com/28bf8gj.png', 'edd'],
  cfrog: [':cfrog:', 'http://i62.tinypic.com/rkq3bs.png', 'cfrog'],
  weed: [':weed:', 'http://i58.tinypic.com/2rzvse1.png', 'weed'],
  roku: [':roku:', 'http://i59.tinypic.com/9u8008.png', 'roku'],
  nokia: [':nokia:', 'http://i57.tinypic.com/33a43z8.jpg', 'nokia'],
  spidey: [':spidey:', 'http://i58.tinypic.com/2116k9s.png', 'spidey'],
  winner: [':winner:', 'http://i61.tinypic.com/2l9c8g.png', 'winner'],
  bird: [':bird:', 'http://i57.tinypic.com/e96iy8.png', 'bird'],
  bang: [':bang:', 'http://i59.tinypic.com/zlog1v.png', 'bang'],
  feelgood: [':feelgood:', 'http://i61.tinypic.com/2mx3861.png', 'feelgood'],
  annoyed: [':annoyed:', 'http://i61.tinypic.com/330crw8.png', 'annoyed'],
  vannoyed: [':vannoyed:', 'http://i57.tinypic.com/2psovb9.png', 'vannoyed'],
  fell: [':fell:', 'http://i58.tinypic.com/rvhgg6.png', 'fell'],
  usure: [':usure:', 'http://i58.tinypic.com/2z7okk5.png', 'usure'],
  pipe: [':pipe:', 'http://i57.tinypic.com/3165izb.png', 'pipe'],
  sip2: [':sip2:', 'http://i62.tinypic.com/2luqses.png', 'sip2'],
  butt: [':butt:', 'http://i62.tinypic.com/mjb9jd.png', 'butt'],
  notpleased: [':notpleased:', 'http://i61.tinypic.com/6tijao.png', 'notpleased'],
  disdain: [':disdain:', 'http://i58.tinypic.com/331oc4y.png', 'disdain'],
  bman: [':bman:', 'http://i61.tinypic.com/116m3i9.png', 'bman'],
  smugfeel: [':smugfeel:', 'http://i62.tinypic.com/157kux5.jpg', 'smugfeel'],
  head: [':head:', 'http://i59.tinypic.com/9sfekg.png', 'head'],
  fack: [':fack:', 'http://i59.tinypic.com/20u8qcz.png', 'fack'],
  cryin: [':cryin:', 'http://i58.tinypic.com/fdwn0o.png', 'cryin'],
  cwofl: [':cwofl:', 'http://i60.tinypic.com/2gwvmts.png', 'cwofl'],
  madwofl: [':madwofl:', 'http://i57.tinypic.com/insemu.png', 'madwofl'],
  guilty: [':guilty:', 'http://i58.tinypic.com/2jeogtd.png', 'guilty'],
  mellow: [':mellow:', 'http://i58.tinypic.com/2zqd92p.png', 'mellow'],
  dealw: [':dealw:', 'http://i62.tinypic.com/31314sg.png', 'dealw'],
  heman: [':heman:', 'http://i61.tinypic.com/35ivon7.png', 'heman'],
  bother: [':bother:', 'http://i58.tinypic.com/2e181ap.png', 'bother'],
  grin: [':grin:', 'http://i59.tinypic.com/14djdjl.png', 'grin'],
  muchwow: [':muchwow:', 'http://i62.tinypic.com/2rrt8p0.png', 'muchwow'],
  stepup: [':stepup:', 'http://i60.tinypic.com/x3acnn.png', 'stepup'],
  zerolol: [':zerolol:', 'http://i57.tinypic.com/2llzlnl.png', 'zerolol'],
  biggrin: [':biggrin:', 'http://i62.tinypic.com/sfgdqx.png', 'biggrin'],
  iamworry: [':iamworry:', 'http://i62.tinypic.com/r0dn4m.png', 'iamworry'],
  nope: [':nope:', 'http://i58.tinypic.com/2mg2mpk.png', 'nope'],
  krabs: [':krabs:', 'http://i61.tinypic.com/353b5ht.png', 'krabs'],
  feelsgood: [':feelsgood:', 'http://i61.tinypic.com/1z4v38p.png', 'feelsgood'],
  sanicpepe: [':sanicpepe:', 'http://i61.tinypic.com/2hdmr2f.png', 'sanicpepe'],
  normalsmug: [':normalsmug:', 'http://i58.tinypic.com/2s0k8hs.png', 'normalsmug'],
  nervous: [':nervous:', 'http://i60.tinypic.com/ae1n5y.png', 'nervous'],
  escalation: [':escalation:', 'http://i59.tinypic.com/148pzl2.png', 'escalation'],
  terror: [':terror:', 'http://i58.tinypic.com/2uqoo0k.png', 'terror'],
  rageon: [':rageon:', 'http://i57.tinypic.com/flj628.png', 'rageon'],
  noclothes: [':noclothes:', 'http://i61.tinypic.com/2hh2361.png', 'noclothes'],
  waifoos: [':waifoos:', 'http://i57.tinypic.com/2cehr0o.png', 'waifoos'],
  hypetrain: [':hypetrain:', 'http://i61.tinypic.com/3448old.png', 'hypetrain'],
  bigxd: [':bigxd:', 'http://i59.tinypic.com/154d8bd.png', 'bigxd'],
  fonz: [':fonz:', 'http://i61.tinypic.com/2mnhyld.png', 'fonz'],
  mrbean: [':mrbean:', 'http://i61.tinypic.com/1127csk.png', 'mr bean'],
  mlady: [':mlady:', 'http://i57.tinypic.com/1zf7vpv.gif', '\'mlady'],
  lick: [':lick:', 'http://i57.tinypic.com/208w9j9.png', 'lick'],
  nogf: [':nogf:', 'http://i58.tinypic.com/1191f7o.png', 'nogf'],
  mint: [':mint:', 'http://i60.tinypic.com/2hzkc5y.png', 'mint'],
  devious: [':devious:', 'http://i61.tinypic.com/ol00h3.png', 'devious'],
  babyfrogs: [':babyfrogs:', 'http://i58.tinypic.com/5zh7o7.png', 'baby frogs'],
  rlpepe: [':rlpepe:', 'http://i61.tinypic.com/25sszo5.png', 'rlpepe'],
  besrs: [':besrs:', 'http://i60.tinypic.com/2gtruyd.png', 'besrs'],
  cri: [':cri:', 'http://i59.tinypic.com/avj1bq.png', 'cri'],
  patrick: [':patrick:', 'http://i58.tinypic.com/ricfet.png', 'patrick'],
  standbuy: [':standbuy:', 'http://i61.tinypic.com/2ijt75c.png', 'stand buy'],
  notgood: [':notgood:', 'http://i62.tinypic.com/swtet1.jpg', 'not good'],
  confident: [':confident:', 'http://i59.tinypic.com/znwqjq.jpg', 'confident'],
  cripepe: [':cripepe:', 'http://i58.tinypic.com/2ldbla0.png', 'cri pepe'],
  ebinpepe: [':ebinpepe:', 'http://i57.tinypic.com/2mrxj05.png', 'ebin pepe'],
  greedypepe: [':greedypepe:', 'http://i59.tinypic.com/k3tcth.png', 'greedy pepe'],
  disgust3: [':disgust3:', 'http://i61.tinypic.com/fa90t0.png', 'disgust 3'],
  nou: [':nou:', 'http://i60.tinypic.com/n39miv.png', 'nou'],
  inspace: [':inspace:', 'http://i59.tinypic.com/25uo7wy.png', 'inspace'],
  disgust4: [':disgust4:', 'http://i59.tinypic.com/33aayxd.png', 'disgust 4'],
  spooky: [':spooky:', 'http://i59.tinypic.com/2nali87.jpg', 'spooky skelly'],
  left: [':left:', 'http://i60.tinypic.com/fjnxig.png', 'left beef'],
  dance: [':bdance:', 'http://i57.tinypic.com/ilwzm1.jpg', 'balloon dance'],
  froghue: [':fhue:', 'http://i58.tinypic.com/16awhog.png', 'frog hue'],
  spin: [':spin:', 'http://i57.tinypic.com/73fe44.jpg', 'spinning'],
  fam: [':fam:', 'http://i62.tinypic.com/343orvo.png', 'fam'],
  brilliant: [':brill:', 'http://i59.tinypic.com/28h3dc8.png', 'brilliant'],
  sharkfrog: [':sfrog:', 'http://i60.tinypic.com/zojamb.png', 'shark frog'],
  iduck: [':iduck:', 'http://i60.tinypic.com/zstwzt.png', 'inverted duck'],
  happen: [':happen:', 'http://i59.tinypic.com/2rzyzjm.jpg', 'happening'],
  winner2: [':winner2:', 'http://i.imgur.com/cFwUmzM.gif', 'content aware WINNER'],
  jew: [':jew:', 'http://i.imgur.com/jowqkg9.gif', 'jew'],
  muricaflag: [':muricaflag:', 'http://i.imgur.com/Sy9vZNX.gif', 'muricaflag'],
  virus: [':virus:', 'http://i.imgur.com/kZYR3oJ.gif', 'virus'],
  spaghetti: [':spaghetti:', 'http://i60.tinypic.com/9vicg9.png', 'mom\'s spaghetti'],
  spaghett: [':spaghett:', 'http://i60.tinypic.com/2rptelg.png', 'spaghett!'],
  joker: [':joker:', 'http://i57.tinypic.com/25ji1ww.png', "joker"],
  ghostpepe: [':gpepe:', 'http://i62.tinypic.com/fkqgr5.png', "ghost pepe"],
  sexypepe: [':spepe:', 'http://i60.tinypic.com/2r5qpkz.jpg', "sexy pepe"],
  straightd: [':sdubs:', 'http://i59.tinypic.com/6od98l.jpg', "straight outta doubles"],
  uglypepe: [':upepe:', 'http://i61.tinypic.com/2qiv800.jpg', "ugly pepe"],
  leetpepe: [':1337pepe:', 'http://i.imgur.com/TgrYBQP.gif', "1337 pepe"],
  seizurepepe: [':seizurepepe:', 'http://i.imgur.com/Xu5UZpk.gif', "seizure pepe"],
  pepeoveryou: [':pepe>you:', 'http://i.imgur.com/5fDk6Z1.gif', "rare pepe > you"],
  pepesi: [':pepesi:', 'http://i.imgur.com/bPKbLTq.gif', "PEPEsi"],
  pepicasso: [':pepicasso:', 'http://i.imgur.com/rFDnOk7.gif', "peekasso"],
  pepe007: [':pepe007:', 'http://i.imgur.com/vRgJvjh.gif', "pepe 007"],
  pepeflash: [':pepeflash:', 'http://i.imgur.com/bqGHiNG.gif', "pepe flash"],
  peperun: [':peperun:', 'http://i.imgur.com/3xLRJRC.gif', "pepe run"],
  pepenaked: [':pepenaked:', 'http://i.imgur.com/O9moFkn.gif', "pepe naked"],
  triforce: [':triforce:', 'http://i.imgur.com/fT5Ennp.gif', "newfags can\'t triforce"],
  smokofrodo: [':smokofrodo:', 'http://i.imgur.com/PMUWXEY.png', "SMOKO FRODO"],
  fabulous: [':fab:', 'http://orig12.deviantart.net/cca2/f/2015/254/6/3/animation_fabulous_1_by_la_stockemotes-d997eb1.gif', "FABULOUS"],
  sasqpepe: [':saspepe:', 'http://i57.tinypic.com/qzfx2t.png', 'SASQUANCH PEPE'],
  fieripepe: [':guypepe:', 'http://i60.tinypic.com/2qv5ruu.gif', 'GUY PEPE'],
  salty: [':salt:', 'https://static-cdn.jtvnw.net/emoticons/v1/36/1.0', 'PJSalt'],
  rip: [':rip:', 'https://static-cdn.jtvnw.net/emoticons/v1/59729/1.0', 'RIP'],
  triple: [':triple:', 'https://static-cdn.jtvnw.net/emoticons/v1/11535/1.0', 'TRIPLE KILL'],
  sombrero: [':sombrero:', 'https://static-cdn.jtvnw.net/emoticons/v1/18235/1.0', 'SOMBRERO'],
  illuminati: [':illuminati:', 'https://static-cdn.jtvnw.net/emoticons/v1/25927/1.0', 'THE JOOOOOOOOOOOOOOOOOOOOOS'],
  blazeskr: ['blaze', 'https://static-cdn.jtvnw.net/emoticons/v1/39567/1.0', 'B-B-B-B-B-BAKA SENPAIIII'],
  gnome: [':gnome:', 'https://static-cdn.jtvnw.net/emoticons/v1/44069/1.0', 'alohaGnome'],
  yeah: [':yeah:', 'https://static-cdn.jtvnw.net/emoticons/v1/40394/1.0', 'alohaYeah'],
  rng: [':rng:', 'https://static-cdn.jtvnw.net/emoticons/v1/39440/1.0', 'alohaRNG'],
  mvp: [':mvp:', 'https://static-cdn.jtvnw.net/emoticons/v1/53102/1.0', 'U DA REAL MVP'],
  saltyrage: [':rage:', 'https://static-cdn.jtvnw.net/emoticons/v1/18998/1.0', 'RAGEQUIT'],
  saltyfire: [':fire:', 'https://static-cdn.jtvnw.net/emoticons/v1/28748/1.0', 'BURNED'],
  saltyace: [':ace:', 'https://static-cdn.jtvnw.net/emoticons/v1/17968/1.0', 'ace of spades'],
  saltyburn: [':burn:', 'https://static-cdn.jtvnw.net/emoticons/v1/28418/1.0', 'WOULD YOU LIKE SOME WATER TO PUT OUT THAT SICK BURN'],
  ggnore: [':gg:', 'https://static-cdn.jtvnw.net/emoticons/v1/55571/1.0', 'GGnoRE'],
  kappahd: [':kappahd:', 'https://static-cdn.jtvnw.net/jtv_user_pictures/emoticon-2867-src-f02f9d40f66f0840-28x28.png', 'KappaHD'],
  hulk: [':hulk:', 'http://i.picresize.com/images/2015/09/13/cqRno.png', 'SEXY HULK COSPLAY'],
  hogan: [':hogan:', 'http://i.imgur.com/ONAoat2.png', 'RACIST MAN FROM WWE'],
  walkpepe: [':walkpepe:', 'http://i.imgur.com/KCHhUel.gif', 'SKELETON PEPE'],
  windpepe: [':windpepe:', 'http://i.imgur.com/As2JYQU.gif', 'WIND PEPE'],
  sadpepe: [':sadpepe:', 'http://i.imgur.com/Nhs5e5n.gif', 'ARTSY PEPE'],
  muricapepe: [':muricapepe:', 'http://i.imgur.com/XRxndTe.gif', 'MURICA ARTSY PEPE'],
  simpsonspepe: [':simpsonspepe:', 'http://i.imgur.com/dpBS7Yj.gif', 'SIMPSONS PEPE'],
  chatpepe: [':chatpepe:', 'http://i.imgur.com/mLyuao3.gif', 'CHAT PEPE'],
  einstein: [':einstein:', 'http://i.imgur.com/zfAPfpf.gif', 'EINSTEIN 420'],
  pepewtf: [':pepewtf:', 'http://i.imgur.com/sYuoK2u.gif', 'WTF PEPE'],
  cenasnap: [':cenasnap:', 'http://i.imgur.com/3OgWxPJ.gif', 'OH SNAP CENA'],
  cenaconfused: [':cenaconfused:', 'http://i.imgur.com/sxlGqjI.gif', 'CONFUSED CENA'],
  cenalaugh: [':cenalaugh:', 'http://i.imgur.com/uiW8eOZ.gif', 'CENA WHEN HE IS TOLD ABOUT DEAD KIDS'],
  cenashrink: [':cenashrink:', 'http://i.imgur.com/B1zcAL4.gif', 'SHRINKING CENA'],
  cenacantwrestle: [':cenacantwrestle:', 'http://i.imgur.com/lxRchNh.gif', 'CENA CAN\'T WRESTLE'],
  cenaconfused2: [':cenaconfused2:', 'http://i.imgur.com/cj4Ri1g.gif', 'CONFUSED CENA 2'],
  cenaepilepsy: [':cenaepilepsy:', 'http://i.imgur.com/UVQDNnV.gif', 'EPILEPSY CENA'],  
  lool: [':lool:', 'http://i.imgur.com/uNjx0VR.png', "lool"],
  badumtss: [':badumtss:', 'http://i.imgur.com/tzdK1B8.png', "ba dum tss"],
  confident: [':confident:', 'http://i.imgur.com/sFpY0hd.png', "confident"],
  genius: [':genius:', 'http://i.imgur.com/wOlp4gc.png', "genius"],
  foreverablack: [':foreverablack:', 'http://i.imgur.com/eYozsXA.png', "FOREVER A NIGGER"],
  ynot: [':ynot:', 'http://i.imgur.com/dfAkHaT.png', "ynot"],
  plspls: [':plspls:', 'http://i.imgur.com/jrcH7iN.png', "plspls"],
  megusta: [':megusta:', 'http://i.imgur.com/WBVqQah.png', "megusta"],
  o: [':o:', 'http://i.imgur.com/rVrqYxb.png', "ooooooooooooooooooooooooooooooooooo"],
  omgomg: [':omgomg:', 'http://i.imgur.com/UZ6oybV.png', "omgomg"],
  memercy: [':mercy:', 'http://i.imgur.com/gg86lM7.png', "DOES THIS LOOK LIKE THE FACE OF MERCY"],
  crymercy: [':crymercy:', 'http://i.imgur.com/oPf9qaH.png', "cry mercy"],
  holyfuckingshit: [':holyfuckingsh:', 'http://i.imgur.com/Z4420t0.png', "holy fucking shit"],
  revenge: [':revenge:', 'http://i.imgur.com/4SGUhMJ.png', "revenge"],
  nowai: [':nowai:', 'http://i.imgur.com/VSD68iA.png', "no wai"],
  disappoint: [':disappoint:', 'http://i.imgur.com/IuAhgG9.png', "disappoint"],
  disappointok: [':disappointok:', 'http://i.imgur.com/cUyHPqs.png', "disappoint ok"],
  actually: [':actually:', 'http://i.imgur.com/TEZaTei.png', "actually"],
  quilt: [':quilt:', 'http://i62.tinypic.com/w0jbxk.gif', "KAFFE QUILTS AGAIN"],
  quik: [':quik:', 'http://i61.tinypic.com/ot234o.gif', "QUICKSCOPE"],
  conan1: [':conan1:', 'http://i.imgur.com/ak3bFC1.jpg', "CONAN 1"],
  conan2: [':conan2:', 'http://i.imgur.com/owU25CX.png', "FRESH APPLE PIE"],
  jimjilbong: [':jimjilbong:', 'http://i.imgur.com/eO1KFC3.jpg', "JIMJILBONG"],
  steven: [':steven:', 'http://i.imgur.com/PBGQD5b.jpg', "STEFEN"],
  adamchk: [':adamchk:', 'http://i.imgur.com/iz64vO9.jpg', "ADAM CHK EM"],
  fried: [':fried:', 'http://i.imgur.com/D4k11CR.jpg', "FRIED"],
  penn: [':penn2:', 'http://i.imgur.com/RJV20Ql.jpg', "PENN"],
  deep: [':deepaw:', 'http://i.imgur.com/qrlZMoD.jpg', "DEEP AWWW"],
  pepelemon: [':lemonpepe:', 'http://i.imgur.com/O6sI7fZ.gif', "PEPE LEMON"],
  why: [':why:', 'http://i.imgur.com/USyVquO.gif', "WHY"],
  oopepe: [':oopepe:', 'http://i.imgur.com/14NwJLV.gif', "O.O PEPE"],
  kout: [':kout:', 'https://i.imgur.com/bEKMjLi.png', "KOUT"],
  bear: [':bearaim:', 'http://i.imgur.com/vCmrqpM.gif', "BEAR-LY AIM-ING"],
  cryriver: [':pepetears:', 'http://i.imgur.com/O5yu2Nq.gif', "PEAR RIVER OF TEARS"],
  blurpepe: [':blurpepe:', 'http://i.imgur.com/GFC1b2M.gif', "blur pepe"],
  loweffort: [':lowpepe:', 'http://i.imgur.com/99tRltW.gif', "LOW EFFORT PEPE"],
  faceswap: [':faceswap:', 'http://i.imgur.com/qyrYGlm.gif', "FACE SWAP"],
  sponge2: [':sponge2:', 'http://i.imgur.com/qnEwSaK.gif', "SPONGE TWO"],
  fignewton: [':fig:', 'http://i.imgur.com/NB3xqQY.gif', "FIG NEWTON"],
  okkid: [':okkid:', 'http://i.imgur.com/ynHTHkJ.jpg', "OK KID"],
  nvrfeels: [':nvrfeels:', 'http://i.imgur.com/slWp1L4.jpg', "NVRFEELS"],
  frogpepe: [':frogpepe:', 'http://i.imgur.com/CbbOaBz.jpg', "FROG PEPE"],
  neet: [':neet:', 'http://i.imgur.com/DwO2W3B.jpg', "NEET"],
  cooldog: [':cooldog:', 'http://i.imgur.com/Vi5O6TS.jpg', 'COOL DOG'],
  eatshit2: [':eatshit2', 'http://i.imgur.com/KA33r6p.jpg', "EAT SHIT"],
  scared3: [':scared3:', 'http://i.imgur.com/dYfejmB.jpg', "SCARED 3"],
  godwills: [':godwills:', 'http://i.imgur.com/1UWRYTX.jpg', "GOD WILLS IT"],
  cacti: [':cacti:', 'http://i.imgur.com/3vfSA0L.png', "CACTI"],
  anthony: [':anthony:', 'http://i.imgur.com/UAagnBt.png', "HEY, ANTHONY HERE"],
  reflect: [':reflect:', 'http://i.imgur.com/vPYpQN3.gif', "REFLECTING"],
  burning: [':burning:', 'http://i.imgur.com/Mk8PkoI.png', "BURNING"],
  kingpepe: [':kingpepe:', 'http://i.imgur.com/xBangFX.png', "KING PEPE"],
  scottip: [':scottip:', 'http://i.imgur.com/MNIXehT.png', "SCOTTISH TIP"],
  FBPEPE: [':fbpepe:', 'http://i.imgur.com/IFJctH7.png', "FACEBOOK PEPE"],
  ayylmaos: [':ayylmaos:', 'http://i.imgur.com/QLr8rvH.png', "AYY LMAO\'S :DD:D"],
  dinoman: [':dinoman:', 'http://i.imgur.com/KmoEbws.png', "DINO MAN"],
  thinkpepe: [':thinkpepe:', 'http://i.imgur.com/huzfTk2.png', "THINKING PEPE"],
  dontgeb: [':dontgeb:', 'http://i.imgur.com/XNxeYDS.png', "I DONT GEB ID :DD:D"],
  fuckbirb: [':fuckbirb:', 'http://i.imgur.com/uH0D0PR.png', "FUCK NICE THINGS"],
  osnap: [':osnap:', 'http://i.imgur.com/Zdl0xsV.png', "O SNAP"],
  wlaugh: [':wlaugh:', 'http://i.imgur.com/inUpCaV.png', "WORRIED LAUGHTER"],
  moonface: [':moonface:', 'http://i.imgur.com/9gJYVAk.png', "MOON FACE"],
  delsys32: [':delsys32:', 'http://i.imgur.com/FYB9CRt.gif', "DELETE SYSTEM32"],
  falco: [':falco:', 'http://i62.tinypic.com/357n98i.png', "THAT MOTHERFUCKER FROM STAR FOX"],
  kirby: [':kirby:', 'http://i57.tinypic.com/1589tgh.png', "FAT NIGGER WHO EATS PEOPLE"],
  cenastruggle: [':cenastruggle:', 'http://i.imgur.com/yi44U9z.png', "GO JOHN CENA CENA STRONG"],
  help: [':help:', 'http://i.imgur.com/xHjch8e.png', "PRESS F1 FOR HELP"],
  shots: [':shots:', 'https://static-cdn.jtvnw.net/emoticons/v1/26388/1.0', "SHOTS FIRED"],
  kappa: [':shots:', 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0', "KAPPAKAPPAKAPPAKAPPAKAPPAKAPPAKAPPA"]
  
};

var emoticon_2 = {
  memeimgxppLwr1: [':xppLwr1:', 'http://i.imgur.com/xppLwr1.png', "meme imgur xppLwr1"],
  memeimgQjY2Bpn: [':QjY2Bpn:', 'http://i.imgur.com/QjY2Bpn.png', "meme imgur QjY2Bpn"],
  memeimgoPrEEfa: [':oPrEEfa:', 'http://i.imgur.com/oPrEEfa.png', "meme imgur oPrEEfa"],
  memeimgjuRqPrv: [':juRqPrv:', 'http://i.imgur.com/juRqPrv.png', "meme imgur juRqPrv"],
  memeimg7w6FNiX: [':7w6FNiX:', 'http://i.imgur.com/7w6FNiX.png', "meme imgur 7w6FNiX"],
  memeimg2Susb2k: [':2Susb2k:', 'http://i.imgur.com/2Susb2k.png', "meme imgur 2Susb2k"],
  memeimgItonPfe: [':ItonPfe:', 'http://i.imgur.com/ItonPfe.png', "meme imgur ItonPfe"],
  memeimgGKFAB0b: [':GKFAB0b:', 'http://i.imgur.com/GKFAB0b.png', "meme imgur GKFAB0b"],
  memeimgbITb9uo: [':bITb9uo:', 'http://i.imgur.com/bITb9uo.png', "meme imgur bITb9uo"],
  memeimgii6pbtT: [':ii6pbtT:', 'http://i.imgur.com/ii6pbtT.png', "meme imgur ii6pbtT"],
  memeimguDDZazd: [':uDDZazd:', 'http://i.imgur.com/uDDZazd.png', "meme imgur uDDZazd"],
  memeimgpD6bnCB: [':pD6bnCB:', 'http://i.imgur.com/pD6bnCB.png', "meme imgur pD6bnCB"],
  memeimgTrQBlPb: [':TrQBlPb:', 'http://i.imgur.com/TrQBlPb.png', "meme imgur TrQBlPb"],
  memeimgWkgZHw5: [':WkgZHw5:', 'http://i.imgur.com/WkgZHw5.png', "meme imgur WkgZHw5"],
  memeimghnhooee: [':hnhooee:', 'http://i.imgur.com/hnhooee.png', "meme imgur hnhooee"],
  memeimg6jbD6sb: [':6jbD6sb:', 'http://i.imgur.com/6jbD6sb.png', "meme imgur 6jbD6sb"],
  memeimgg4lozrz: [':g4lozrz:', 'http://i.imgur.com/g4lozrz.png', "meme imgur g4lozrz"],
  memeimgiRu9fjS: [':iRu9fjS:', 'http://i.imgur.com/iRu9fjS.png', "meme imgur iRu9fjS"],
  memeimglY64ZMZ: [':lY64ZMZ:', 'http://i.imgur.com/lY64ZMZ.png', "meme imgur lY64ZMZ"],
  memeimgx30p68v: [':x30p68v:', 'http://i.imgur.com/x30p68v.png', "meme imgur x30p68v"],
  memeimgl0QIlWK: [':l0QIlWK:', 'http://i.imgur.com/l0QIlWK.png', "meme imgur l0QIlWK"],
  memeimgXn1YUJx: [':Xn1YUJx:', 'http://i.imgur.com/Xn1YUJx.png', "meme imgur Xn1YUJx"],
  memeimgIsHR31z: [':IsHR31z:', 'http://i.imgur.com/IsHR31z.png', "meme imgur IsHR31z"],
  memeimgegGrJ6m: [':egGrJ6m:', 'http://i.imgur.com/egGrJ6m.png', "meme imgur egGrJ6m"],
  memeimgA0fV5kW: [':A0fV5kW:', 'http://i.imgur.com/A0fV5kW.png', "meme imgur A0fV5kW"],
  memeimgN1DN7M4: [':N1DN7M4:', 'http://i.imgur.com/N1DN7M4.png', "meme imgur N1DN7M4"],
  memeimgRts212F: [':Rts212F:', 'http://i.imgur.com/Rts212F.png', "meme imgur Rts212F"],
  memeimgArdjo5y: [':Ardjo5y:', 'http://i.imgur.com/Ardjo5y.png', "meme imgur Ardjo5y"],
  memeimgNn6sJfG: [':Nn6sJfG:', 'http://i.imgur.com/Nn6sJfG.png', "meme imgur Nn6sJfG"],
  memeimgzuoHkyd: [':zuoHkyd:', 'http://i.imgur.com/zuoHkyd.png', "meme imgur zuoHkyd"],
  memeimgxJ8U6mG: [':xJ8U6mG:', 'http://i.imgur.com/xJ8U6mG.png', "meme imgur xJ8U6mG"],
  memeimgAka5lH9: [':Aka5lH9:', 'http://i.imgur.com/Aka5lH9.png', "meme imgur Aka5lH9"],
  memeimg1vn9dzK: [':1vn9dzK:', 'http://i.imgur.com/1vn9dzK.png', "meme imgur 1vn9dzK"],
  memeimgrkzqqV2: [':rkzqqV2:', 'http://i.imgur.com/rkzqqV2.png', "meme imgur rkzqqV2"],
  memeimgATaphPm: [':ATaphPm:', 'http://i.imgur.com/ATaphPm.png', "meme imgur ATaphPm"],
  memeimglPsGEfM: [':lPsGEfM:', 'http://i.imgur.com/lPsGEfM.png', "meme imgur lPsGEfM"],
  memeimgR3Og7To: [':R3Og7To:', 'http://i.imgur.com/R3Og7To.png', "meme imgur R3Og7To"],
  memeimgY7SgxjY: [':Y7SgxjY:', 'http://i.imgur.com/Y7SgxjY.png', "meme imgur Y7SgxjY"],
  memeimgUwwcgFe: [':UwwcgFe:', 'http://i.imgur.com/UwwcgFe.png', "meme imgur UwwcgFe"],
  memeimgyITYTtg: [':yITYTtg:', 'http://i.imgur.com/yITYTtg.png', "meme imgur yITYTtg"],
  memeimg1Y2snnS: [':1Y2snnS:', 'http://i.imgur.com/1Y2snnS.png', "meme imgur 1Y2snnS"],
  memeimgSz7Hn3R: [':Sz7Hn3R:', 'http://i.imgur.com/Sz7Hn3R.png', "meme imgur Sz7Hn3R"],
  memeimgOOkT7ZV: [':OOkT7ZV:', 'http://i.imgur.com/OOkT7ZV.png', "meme imgur OOkT7ZV"],
  memeimgt2saUty: [':t2saUty:', 'http://i.imgur.com/t2saUty.png', "meme imgur t2saUty"],
  memeimgQ1g8NH5: [':Q1g8NH5:', 'http://i.imgur.com/Q1g8NH5.png', "meme imgur Q1g8NH5"],
  memeimgSZC9l47: [':SZC9l47:', 'http://i.imgur.com/SZC9l47.png', "meme imgur SZC9l47"],
  memeimgwt1gmL6: [':wt1gmL6:', 'http://i.imgur.com/wt1gmL6.png', "meme imgur wt1gmL6"],
  memeimgFxzPZJY: [':FxzPZJY:', 'http://i.imgur.com/FxzPZJY.png', "meme imgur FxzPZJY"],
  memeimgG9l1PRP: [':G9l1PRP:', 'http://i.imgur.com/G9l1PRP.png', "meme imgur G9l1PRP"],
  memeimg2L8Rdmu: [':2L8Rdmu:', 'http://i.imgur.com/2L8Rdmu.png', "meme imgur 2L8Rdmu"],
  memeimgrnPX2xe: [':rnPX2xe:', 'http://i.imgur.com/rnPX2xe.png', "meme imgur rnPX2xe"],
  memeimgVBSuZld: [':VBSuZld:', 'http://i.imgur.com/VBSuZld.png', "meme imgur VBSuZld"],
  memeimgIWxszQf: [':IWxszQf:', 'http://i.imgur.com/IWxszQf.png', "meme imgur IWxszQf"],
  memeimgSg0Saij: [':Sg0Saij:', 'http://i.imgur.com/Sg0Saij.png', "meme imgur Sg0Saij"],
  memeimgbrRG3YD: [':brRG3YD:', 'http://i.imgur.com/brRG3YD.png', "meme imgur brRG3YD"],
  memeimgQunbdUi: [':QunbdUi:', 'http://i.imgur.com/QunbdUi.png', "meme imgur QunbdUi"],
  memeimgFOKgseg: [':FOKgseg:', 'http://i.imgur.com/FOKgseg.png', "meme imgur FOKgseg"],
  memeimgWKgtbOa: [':WKgtbOa:', 'http://i.imgur.com/WKgtbOa.png', "meme imgur WKgtbOa"],
  memeimgSBBGizf: [':SBBGizf:', 'http://i.imgur.com/SBBGizf.png', "meme imgur SBBGizf"],
  memeimgl0byEXM: [':l0byEXM:', 'http://i.imgur.com/l0byEXM.png', "meme imgur l0byEXM"],
  memeimgwLHrhQv: [':wLHrhQv:', 'http://i.imgur.com/wLHrhQv.png', "meme imgur wLHrhQv"],
  memeimgE2GX6mP: [':E2GX6mP:', 'http://i.imgur.com/E2GX6mP.png', "meme imgur E2GX6mP"],
  memeimg3KqDIyq: [':3KqDIyq:', 'http://i.imgur.com/3KqDIyq.png', "meme imgur 3KqDIyq"],
  memeimg11nxWUZ: [':11nxWUZ:', 'http://i.imgur.com/11nxWUZ.png', "meme imgur 11nxWUZ"],
  memeimgZizp049: [':Zizp049:', 'http://i.imgur.com/Zizp049.png', "meme imgur Zizp049"],
  memeimgEy24uFx: [':Ey24uFx:', 'http://i.imgur.com/Ey24uFx.png', "meme imgur Ey24uFx"],
  memeimgBOkcCM0: [':BOkcCM0:', 'http://i.imgur.com/BOkcCM0.png', "meme imgur BOkcCM0"],
  memeimghvB4G7F: [':hvB4G7F:', 'http://i.imgur.com/hvB4G7F.png', "meme imgur hvB4G7F"],
  memeimgjliRy0B: [':jliRy0B:', 'http://i.imgur.com/jliRy0B.png', "meme imgur jliRy0B"],
  memeimgl3wNVVI: [':l3wNVVI:', 'http://i.imgur.com/l3wNVVI.png', "meme imgur l3wNVVI"],
  memeimgy7sC7r3: [':y7sC7r3:', 'http://i.imgur.com/y7sC7r3.png', "meme imgur y7sC7r3"],
  memeimgKDhNKqP: [':KDhNKqP:', 'http://i.imgur.com/KDhNKqP.png', "meme imgur KDhNKqP"],
  memeimg8xByCzL: [':8xByCzL:', 'http://i.imgur.com/8xByCzL.png', "meme imgur 8xByCzL"],
  memeimgcfQazxC: [':cfQazxC:', 'http://i.imgur.com/cfQazxC.png', "meme imgur cfQazxC"],
  memeimgJqEU7rK: [':JqEU7rK:', 'http://i.imgur.com/JqEU7rK.png', "meme imgur JqEU7rK"],
  memeimgEXdFIdi: [':EXdFIdi:', 'http://i.imgur.com/EXdFIdi.png', "meme imgur EXdFIdi"],
  memeimgl9tmxrL: [':l9tmxrL:', 'http://i.imgur.com/l9tmxrL.png', "meme imgur l9tmxrL"],
  memeimgCrpPLaC: [':CrpPLaC:', 'http://i.imgur.com/CrpPLaC.png', "meme imgur CrpPLaC"],
  memeimgI7w01ye: [':I7w01ye:', 'http://i.imgur.com/I7w01ye.png', "meme imgur I7w01ye"],
  memeimgDFv0ubf: [':DFv0ubf:', 'http://i.imgur.com/DFv0ubf.png', "meme imgur DFv0ubf"],
  memeimg3tgdZGM: [':3tgdZGM:', 'http://i.imgur.com/3tgdZGM.png', "meme imgur 3tgdZGM"],
  memeimgGciqbCm: [':GciqbCm:', 'http://i.imgur.com/GciqbCm.png', "meme imgur GciqbCm"],
  memeimguv36LpH: [':uv36LpH:', 'http://i.imgur.com/uv36LpH.png', "meme imgur uv36LpH"],
  memeimgTSxMpZd: [':TSxMpZd:', 'http://i.imgur.com/TSxMpZd.png', "meme imgur TSxMpZd"],
  memeimgs2C2Ws9: [':s2C2Ws9:', 'http://i.imgur.com/s2C2Ws9.png', "meme imgur s2C2Ws9"],
  memeimgS7cup6f: [':S7cup6f:', 'http://i.imgur.com/S7cup6f.png', "meme imgur S7cup6f"],
  memeimg3PbuCPo: [':3PbuCPo:', 'http://i.imgur.com/3PbuCPo.png', "meme imgur 3PbuCPo"],
  memeimg3Z0wQ5A: [':3Z0wQ5A:', 'http://i.imgur.com/3Z0wQ5A.png', "meme imgur 3Z0wQ5A"],
  memeimggywqYs7: [':gywqYs7:', 'http://i.imgur.com/gywqYs7.png', "meme imgur gywqYs7"],
  memeimgqodcBza: [':qodcBza:', 'http://i.imgur.com/qodcBza.png', "meme imgur qodcBza"],
  memeimgW6UbmDR: [':W6UbmDR:', 'http://i.imgur.com/W6UbmDR.png', "meme imgur W6UbmDR"],
  memeimg0afUP1e: [':0afUP1e:', 'http://i.imgur.com/0afUP1e.png', "meme imgur 0afUP1e"],
  memeimgjGQwD4d: [':jGQwD4d:', 'http://i.imgur.com/jGQwD4d.png', "meme imgur jGQwD4d"],
  memeimgiy8UR5G: [':iy8UR5G:', 'http://i.imgur.com/iy8UR5G.png', "meme imgur iy8UR5G"],
  memeimgvYdD8HM: [':vYdD8HM:', 'http://i.imgur.com/vYdD8HM.png', "meme imgur vYdD8HM"],
  memeimgFkymxet: [':Fkymxet:', 'http://i.imgur.com/Fkymxet.png', "meme imgur Fkymxet"],
  memeimg5nmSTPS: [':5nmSTPS:', 'http://i.imgur.com/5nmSTPS.png', "meme imgur 5nmSTPS"],
  memeimgtr24sdA: [':tr24sdA:', 'http://i.imgur.com/tr24sdA.png', "meme imgur tr24sdA"],
  memeimgYovZi9M: [':YovZi9M:', 'http://i.imgur.com/YovZi9M.png', "meme imgur YovZi9M"],
  memeimg75PVeuB: [':75PVeuB:', 'http://i.imgur.com/75PVeuB.png', "meme imgur 75PVeuB"],
  memeimg9WOKMNC: [':9WOKMNC:', 'http://i.imgur.com/9WOKMNC.png', "meme imgur 9WOKMNC"],
  memeimgCopRowU: [':CopRowU:', 'http://i.imgur.com/CopRowU.png', "meme imgur CopRowU"],
  memeimgVPHlPr9: [':VPHlPr9:', 'http://i.imgur.com/VPHlPr9.png', "meme imgur VPHlPr9"],
  memeimgb2tAWnC: [':b2tAWnC:', 'http://i.imgur.com/b2tAWnC.png', "meme imgur b2tAWnC"],
  memeimgNn5PrIE: [':Nn5PrIE:', 'http://i.imgur.com/Nn5PrIE.png', "meme imgur Nn5PrIE"],
  memeimgbhfZhcE: [':bhfZhcE:', 'http://i.imgur.com/bhfZhcE.png', "meme imgur bhfZhcE"],
  memeimgIYu5D2H: [':IYu5D2H:', 'http://i.imgur.com/IYu5D2H.png', "meme imgur IYu5D2H"],
  memeimgB5kIIma: [':B5kIIma:', 'http://i.imgur.com/B5kIIma.png', "meme imgur B5kIIma"],
  memeimgmv2Ze9J: [':mv2Ze9J:', 'http://i.imgur.com/mv2Ze9J.png', "meme imgur mv2Ze9J"],
  memeimg6RO0ZFt: [':6RO0ZFt:', 'http://i.imgur.com/6RO0ZFt.png', "meme imgur 6RO0ZFt"],
  memeimglAHzcPh: [':lAHzcPh:', 'http://i.imgur.com/lAHzcPh.png', "meme imgur lAHzcPh"],
  memeimgq44on0T: [':q44on0T:', 'http://i.imgur.com/q44on0T.png', "meme imgur q44on0T"],
  memeimgaQtov40: [':aQtov40:', 'http://i.imgur.com/aQtov40.png', "meme imgur aQtov40"],
  memeimg8nKMfWT: [':8nKMfWT:', 'http://i.imgur.com/8nKMfWT.png', "meme imgur 8nKMfWT"],
  memeimgGLxKPVn: [':GLxKPVn:', 'http://i.imgur.com/GLxKPVn.png', "meme imgur GLxKPVn"],
  memeimg0rimDEX: [':0rimDEX:', 'http://i.imgur.com/0rimDEX.png', "meme imgur 0rimDEX"],
  memeimg5Fcw6xe: [':5Fcw6xe:', 'http://i.imgur.com/5Fcw6xe.png', "meme imgur 5Fcw6xe"],
  memeimgzLZI7KE: [':zLZI7KE:', 'http://i.imgur.com/zLZI7KE.png', "meme imgur zLZI7KE"],
  memeimgvAUQeIt: [':vAUQeIt:', 'http://i.imgur.com/vAUQeIt.png', "meme imgur vAUQeIt"],
  memeimgun9rY9L: [':un9rY9L:', 'http://i.imgur.com/un9rY9L.png', "meme imgur un9rY9L"],
  memeimgsyXO9Z9: [':syXO9Z9:', 'http://i.imgur.com/syXO9Z9.png', "meme imgur syXO9Z9"],
  memeimg2bcVj3J: [':2bcVj3J:', 'http://i.imgur.com/2bcVj3J.png', "meme imgur 2bcVj3J"],
  memeimggKnXpeX: [':gKnXpeX:', 'http://i.imgur.com/gKnXpeX.png', "meme imgur gKnXpeX"],
  memeimgmyyYs1e: [':myyYs1e:', 'http://i.imgur.com/myyYs1e.png', "meme imgur myyYs1e"],
  memeimg8umBKBn: [':8umBKBn:', 'http://i.imgur.com/8umBKBn.png', "meme imgur 8umBKBn"],
  memeimg0uLNqmp: [':0uLNqmp:', 'http://i.imgur.com/0uLNqmp.png', "meme imgur 0uLNqmp"],
  memeimgrx7ncNt: [':rx7ncNt:', 'http://i.imgur.com/rx7ncNt.png', "meme imgur rx7ncNt"],
  memeimgDJQlc7V: [':DJQlc7V:', 'http://i.imgur.com/DJQlc7V.png', "meme imgur DJQlc7V"],
  memeimgbPbXGcK: [':bPbXGcK:', 'http://i.imgur.com/bPbXGcK.png', "meme imgur bPbXGcK"],
  memeimgWqoiZru: [':WqoiZru:', 'http://i.imgur.com/WqoiZru.png', "meme imgur WqoiZru"],
  memeimguGEbfPl: [':uGEbfPl:', 'http://i.imgur.com/uGEbfPl.png', "meme imgur uGEbfPl"],
  memeimgjjQdPWI: [':jjQdPWI:', 'http://i.imgur.com/jjQdPWI.png', "meme imgur jjQdPWI"],
  memeimgsUoz68B: [':sUoz68B:', 'http://i.imgur.com/sUoz68B.png', "meme imgur sUoz68B"],
  memeimgYc3qLIz: [':Yc3qLIz:', 'http://i.imgur.com/Yc3qLIz.png', "meme imgur Yc3qLIz"],
  memeimgu2pXXm2: [':u2pXXm2:', 'http://i.imgur.com/u2pXXm2.png', "meme imgur u2pXXm2"],
  memeimgTNPlQkY: [':TNPlQkY:', 'http://i.imgur.com/TNPlQkY.png', "meme imgur TNPlQkY"],
  memeimgODVOjNd: [':ODVOjNd:', 'http://i.imgur.com/ODVOjNd.png', "meme imgur ODVOjNd"],
  memeimgCKeyNfw: [':CKeyNfw:', 'http://i.imgur.com/CKeyNfw.png', "meme imgur CKeyNfw"],
  memeimgoPodmhx: [':oPodmhx:', 'http://i.imgur.com/oPodmhx.png', "meme imgur oPodmhx"],
  memeimg42r8cGu: [':42r8cGu:', 'http://i.imgur.com/42r8cGu.png', "meme imgur 42r8cGu"],
  memeimgfgV7UtW: [':fgV7UtW:', 'http://i.imgur.com/fgV7UtW.png', "meme imgur fgV7UtW"],
  memeimgnYZNmTU: [':nYZNmTU:', 'http://i.imgur.com/nYZNmTU.png', "meme imgur nYZNmTU"],
  memeimgTHe7PwP: [':THe7PwP:', 'http://i.imgur.com/THe7PwP.png', "meme imgur THe7PwP"],
  memeimgdVbAnHD: [':dVbAnHD:', 'http://i.imgur.com/dVbAnHD.png', "meme imgur dVbAnHD"],
  memeimgGD7ddfJ: [':GD7ddfJ:', 'http://i.imgur.com/GD7ddfJ.png', "meme imgur GD7ddfJ"],
  memeimgu8kVP3V: [':u8kVP3V:', 'http://i.imgur.com/u8kVP3V.png', "meme imgur u8kVP3V"],
  memeimg92MSzyK: [':92MSzyK:', 'http://i.imgur.com/92MSzyK.png', "meme imgur 92MSzyK"],
  memeimgE8r3hI0: [':E8r3hI0:', 'http://i.imgur.com/E8r3hI0.png', "meme imgur E8r3hI0"],
  memeimgabAkUGy: [':abAkUGy:', 'http://i.imgur.com/abAkUGy.png', "meme imgur abAkUGy"],
  memeimghXhgdcj: [':hXhgdcj:', 'http://i.imgur.com/hXhgdcj.png', "meme imgur hXhgdcj"],
  memeimgn8w8ow7: [':n8w8ow7:', 'http://i.imgur.com/n8w8ow7.png', "meme imgur n8w8ow7"],
  memeimgKx6Zv1G: [':Kx6Zv1G:', 'http://i.imgur.com/Kx6Zv1G.png', "meme imgur Kx6Zv1G"],
  memeimgonpH48h: [':onpH48h:', 'http://i.imgur.com/onpH48h.png', "meme imgur onpH48h"],
  memeimgqTesWtP: [':qTesWtP:', 'http://i.imgur.com/qTesWtP.png', "meme imgur qTesWtP"],
  memeimgD7dM2Z6: [':D7dM2Z6:', 'http://i.imgur.com/D7dM2Z6.png', "meme imgur D7dM2Z6"],
  memeimgx4ne7Ag: [':x4ne7Ag:', 'http://i.imgur.com/x4ne7Ag.png', "meme imgur x4ne7Ag"],
  memeimg3SPmqM8: [':3SPmqM8:', 'http://i.imgur.com/3SPmqM8.png', "meme imgur 3SPmqM8"],
  memeimg5SfvJvW: [':5SfvJvW:', 'http://i.imgur.com/5SfvJvW.png', "meme imgur 5SfvJvW"],
  memeimgIUgm06X: [':IUgm06X:', 'http://i.imgur.com/IUgm06X.png', "meme imgur IUgm06X"],
  memeimg1soYosP: [':1soYosP:', 'http://i.imgur.com/1soYosP.png', "meme imgur 1soYosP"],
  memeimgw1XDwg0: [':w1XDwg0:', 'http://i.imgur.com/w1XDwg0.png', "meme imgur w1XDwg0"],
  memeimgXjKswRT: [':XjKswRT:', 'http://i.imgur.com/XjKswRT.png', "meme imgur XjKswRT"],
  memeimgjEVc70l: [':jEVc70l:', 'http://i.imgur.com/jEVc70l.png', "meme imgur jEVc70l"],
  memeimg1ZIsf0Q: [':1ZIsf0Q:', 'http://i.imgur.com/1ZIsf0Q.png', "meme imgur 1ZIsf0Q"],
  memeimgPGF3l3w: [':PGF3l3w:', 'http://i.imgur.com/PGF3l3w.png', "meme imgur PGF3l3w"],
  memeimgkTTV5jx: [':kTTV5jx:', 'http://i.imgur.com/kTTV5jx.png', "meme imgur kTTV5jx"],
  memeimgdP0NrkD: [':dP0NrkD:', 'http://i.imgur.com/dP0NrkD.png', "meme imgur dP0NrkD"],
  memeimgROJ0SCa: [':ROJ0SCa:', 'http://i.imgur.com/ROJ0SCa.png', "meme imgur ROJ0SCa"],
  memeimg1Egm9Xj: [':1Egm9Xj:', 'http://i.imgur.com/1Egm9Xj.png', "meme imgur 1Egm9Xj"],
  memeimga6nU1qg: [':a6nU1qg:', 'http://i.imgur.com/a6nU1qg.png', "meme imgur a6nU1qg"],
  memeimgSsQT04Q: [':SsQT04Q:', 'http://i.imgur.com/SsQT04Q.png', "meme imgur SsQT04Q"],
  memeimgg7lP95C: [':g7lP95C:', 'http://i.imgur.com/g7lP95C.png', "meme imgur g7lP95C"],
  memeimgJYnm9VW: [':JYnm9VW:', 'http://i.imgur.com/JYnm9VW.png', "meme imgur JYnm9VW"],
  memeimgWP6zUVT: [':WP6zUVT:', 'http://i.imgur.com/WP6zUVT.png', "meme imgur WP6zUVT"],
  memeimglLqHBq7: [':lLqHBq7:', 'http://i.imgur.com/lLqHBq7.png', "meme imgur lLqHBq7"],
  memeimgvML6uK5: [':vML6uK5:', 'http://i.imgur.com/vML6uK5.png', "meme imgur vML6uK5"],
  memeimgw3WKzsd: [':w3WKzsd:', 'http://i.imgur.com/w3WKzsd.png', "meme imgur w3WKzsd"],
  memeimg6lyPJXt: [':6lyPJXt:', 'http://i.imgur.com/6lyPJXt.png', "meme imgur 6lyPJXt"],
  memeimgJ9OwGFW: [':J9OwGFW:', 'http://i.imgur.com/J9OwGFW.png', "meme imgur J9OwGFW"],
  memeimggUO0EFw: [':gUO0EFw:', 'http://i.imgur.com/gUO0EFw.png', "meme imgur gUO0EFw"],
  memeimglUobTLW: [':lUobTLW:', 'http://i.imgur.com/lUobTLW.png', "meme imgur lUobTLW"],
  memeimgPR2etkb: [':PR2etkb:', 'http://i.imgur.com/PR2etkb.png', "meme imgur PR2etkb"],
  memeimgrDjdcUQ: [':rDjdcUQ:', 'http://i.imgur.com/rDjdcUQ.png', "meme imgur rDjdcUQ"],
  memeimgumie84p: [':umie84p:', 'http://i.imgur.com/umie84p.png', "meme imgur umie84p"],
  memeimgN4kIXm6: [':N4kIXm6:', 'http://i.imgur.com/N4kIXm6.png', "meme imgur N4kIXm6"],
  memeimg7OREabM: [':7OREabM:', 'http://i.imgur.com/7OREabM.png', "meme imgur 7OREabM"],
  memeimgAMAxJyB: [':AMAxJyB:', 'http://i.imgur.com/AMAxJyB.png', "meme imgur AMAxJyB"],
  memeimgPPnOfRX: [':PPnOfRX:', 'http://i.imgur.com/PPnOfRX.png', "meme imgur PPnOfRX"],
  memeimgPYtY1lB: [':PYtY1lB:', 'http://i.imgur.com/PYtY1lB.png', "meme imgur PYtY1lB"],
  memeimgDQa5Hqp: [':DQa5Hqp:', 'http://i.imgur.com/DQa5Hqp.png', "meme imgur DQa5Hqp"],
  memeimg9p0ejrZ: [':9p0ejrZ:', 'http://i.imgur.com/9p0ejrZ.png', "meme imgur 9p0ejrZ"],
  memeimgkhJK3GM: [':khJK3GM:', 'http://i.imgur.com/khJK3GM.png', "meme imgur khJK3GM"]
};

var emoticon_3 = {
	imgurdongY21xRGc: [':dongintensifies:', 'http://i.imgur.com/Y21xRGc.jpg', "dong intensifies"],
	imgurdongfqgiO3C: [':my3dpenis:', 'http://i.imgur.com/fqgiO3C.jpg', "my 3d penis"],
	imgurdongArbkDMd: [':expand:', 'http://i.imgur.com/ArbkDMd.jpg', "expand"],
	imgurdongoeNPAcI: [':expand2:', 'http://i.imgur.com/oeNPAcI.jpg', "expand 2"],
	imgurdongtYAbOEK: [':expand3:', 'http://i.imgur.com/tYAbOEK.jpg', "expand 3"],
	imgurdongflLSGR0: [':expand4:', 'http://i.imgur.com/flLSGR0.jpg', "expand 4"],
	imgurdongvuaw4uj: [':donkeysdongcockreturns:', 'http://i.imgur.com/vuaw4uj.jpg', "donkey\'s dong cock returns"],
	imgurdongWsJjI1E: [':poopscoop:', 'http://i.imgur.com/WsJjI1E.jpg', "poop scoop"],
	imgurdong7y1PZ44: [':hugetropicalorgy:', 'http://i.imgur.com/7y1PZ44.jpg', "huge tropical orgy"],
	imgurdongihzpHyH: [':analassault:', 'http://i.imgur.com/ihzpHyH.jpg', "anal assault"],
	imgurdongfjo5nmC: [':kirbystripledeluxedong:', 'http://i.imgur.com/fjo5nmC.jpg', "kirby\'s triple deluxe dong"],
	imgurdongxIbjyrV: [':erectpenis:', 'http://i.imgur.com/xIbjyrV.jpg', "erect penis"],
	imgurdongmRYvJI4: [':analmassacre:', 'http://i.imgur.com/mRYvJI4.jpg', "anal massacre"],
	imgurdongLQTSFfn: [':mariopoopsoutsand:', 'http://i.imgur.com/LQTSFfn.jpg', "mario poops out sand"],
	imgurdongme4YY9e: [':rectalrampage:', 'http://i.imgur.com/me4YY9e.jpg', "rectal rampage"],
	imgurdong0pv0vet: [':featurelength:', 'http://i.imgur.com/0pv0vet.jpg', "feature length"],
	imgurdongazKA6IF: [':dickfreeze:', 'http://i.imgur.com/azKA6IF.jpg', "dick freeze"],
	imgurdongOIghJUa: [':kirbydong:', 'http://i.imgur.com/OIghJUa.jpg', "kirby dong"],
	imgurdongiYMW6J2: [':ratchetdong:', 'http://i.imgur.com/iYMW6J2.jpg', "ratchet dong"],
	imgurdongtHHKYVp: [':ratchetdong2:', 'http://i.imgur.com/tHHKYVp.jpg', "ratchet dong 2"],
	//imgurdongI2dzif0: [':I2dzif0:', 'http://i.imgur.com/I2dzif0.jpg', "I2dzif0"],
	//imgurdongs1yPzBV: [':s1yPzBV:', 'http://i.imgur.com/s1yPzBV.jpg', "s1yPzBV"],
	imgurdongtTQ4gPh: [':giantfurrycockblast:', 'http://i.imgur.com/tTQ4gPh.jpg', "giant furry cock blast"],
	imgurdongqzquWaX: [':legendarynuts:', 'http://i.imgur.com/qzquWaX.jpg', "legendary nuts"],
	imgurdongEpFtLXq: [':dongstrong:', 'http://i.imgur.com/EpFtLXq.jpg', "dong strong"],
	imgurdongLLG1h6k: [':uwutm8:', 'http://i.imgur.com/LLG1h6k.jpg', "u wut m8"],
	imgurdongBbshOLd: [':idiotsheroes:', 'http://i.imgur.com/BbshOLd.jpg', "idiots heroes"],
	imgurdonggZO4oUl: [':penntrash:', 'http://i.imgur.com/gZO4oUl.jpg', "penn jilette trash"],
	imgurdonglRIdSx8: [':fuckingcasuals:', 'http://i.imgur.com/lRIdSx8.jpg', "fucking casuals"],
	imgurdong0z3SmD2: [':cancerdong:', 'http://i.imgur.com/0z3SmD2.jpg', "cancer dong"],
	imgurdongz0ii3nI: [':minionsdong:', 'http://i.imgur.com/z0ii3nI.jpg', "minions dong"],
	//imgurdongha5rqDd: [':ha5rqDd:', 'http://i.imgur.com/ha5rqDd.jpg', "ha5rqDd"],
	//imgurdongRWom78Q: [':RWom78Q:', 'http://i.imgur.com/RWom78Q.jpg', "RWom78Q"],
	imgurdongkv965M0: [':expansionpak:', 'http://i.imgur.com/kv965M0.jpg', "expansion pak"],
	imgurdongll5mzvy: [':dongnews:', 'http://i.imgur.com/ll5mzvy.jpg', "dong news"],
	imgurdonggXeBqOI: [':batdong:', 'http://i.imgur.com/gXeBqOI.jpg', "bat dong"],
	imgurdongoXxMcF0: [':captainunderdong:', 'http://i.imgur.com/oXxMcF0.jpg', "captain underdong"],
	imgurdongPkC0sSx: [':batmanrobindong:', 'http://i.imgur.com/PkC0sSx.jpg', "batman robin dong"],
	imgurdongd9o2Idt: [':fnaf:', 'http://i.imgur.com/d9o2Idt.jpg', "fnaf rape"],
	imgurdong6SXNd6T: [':wheresthedong:', 'http://i.imgur.com/6SXNd6T.jpg', "where\'s the dong"],
	imgurdongNg8P2Vv: [':erection:', 'http://i.imgur.com/Ng8P2Vv.jpg', "erection"],
	imgurdongAScga26: [':erectionrising:', 'http://i.imgur.com/AScga26.jpg', "erection rising"],
	imgurdongRtnXPSc: [':expand5:', 'http://i.imgur.com/RtnXPSc.jpg', "expand 5"],
	imgurdonguFNPVMN: [':expand6:', 'http://i.imgur.com/uFNPVMN.jpg', "expand 6"],
	//imgurdongagtHxDU: [':agtHxDU:', 'http://i.imgur.com/agtHxDU.jpg', "agtHxDU"],
	imgurdongITi1XAI: [':freedankcuntclotcrunch:', 'http://i.imgur.com/ITi1XAI.jpg', "free dank cunt clot crunch"],
	imgurdong2aSBhVZ: [':ponydong:', 'http://i.imgur.com/2aSBhVZ.jpg', "pony dong"],
	imgurdongak7Is71: [':dongsquidward:', 'http://i.imgur.com/ak7Is71.jpg', "dong squidward"],
	imgurdongkXYUEc4: [':suffermore:', 'http://i.imgur.com/kXYUEc4.jpg', "suffer more"],
	imgurdongE1HYLvI: [':packingabigschlong:', 'http://i.imgur.com/E1HYLvI.jpg', "packing a big schlong"]
};
///////
///////SPECIAL TEXT THAT NEEDS TO BE FORMATTED
var maymay = {
  sombre: ['sombre',
    '[font=monospace][size=14][b][color=red]S[/color] [color=orange]O[/color] [color=yellow]M[/color] [color=blue]B[/color] [color=indigo]R[/color] [color=violet]E[/color][/b][/size][/font]'
  ],
  doors: ['the doors', '[i]the doors[/i]'],
  hawk: ['cantstopthehawk',
    '[size=15] [i] [b] [blur] [color=#fbca33] C A N T S T O P T H E H A W K [/size] [/color] [/i] [/b] [/blur]'
  ],
  donger: ['donger', '[size=29][b][font=impact]DONGER[/font][/b][/size]'],
  esca: ['that escalated', '[size=20][font=impact]THAT ESCALATED[/font][/size]'],
  fast: ['gottagofast', '[color=green][font=comic sans ms][size=18][i]Gotta Go Fast !!![/i][/size][/font][/color]'],
  minty: ['minty', '[img]http://i60.tinypic.com/2hzkc5y.png[/img][blur][b][color=#98FF98] MINTY[/color][/b][/blur]'],
  lenny: [':lenny:', '( ͡° ͜ʖ ͡°)'], // cancer during browser edit
  // (firefox)
  dongers: [':raise:', 'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ'], // cancer
  hamster: [':hamster:', '(•ω•)'],
  greeneggs: [':geggs:',
    '[b][color=green]GREEN EGGS[/color][/b] [size=10][i]And[/i][/size] [size=16][b][i][color=black][u]THOUGHTS OF SUICIDE[/u][/color][/i][/b][/size] [size=14]( ͡° ʖ̯ ͡°)[/size]'
  ], // cancer
  rekt: [':rekt:', '[size=19][font=impact][blur][b][color=red]☐ Not REKT ☑ REKT ☑ REKTangle ☑ SHREKT ☑ REKT-it Ralph ☑ Total REKTall ☑ The Lord of the REKT ☑ The Usual SusREKTs ☑ North by NorthREKT ☑ REKT to the Future ☑ Once Upon a Time in the REKT ☑ The Good, the Bad, and the REKT ☑ LawREKT of Arabia ☑ Tyrannosaurus REKT ☑ eREKTile dysfunction [/color][/b][/blur][/font][/size]'],
  danked: [':danked:', '[color=red][b](USER WAS BANNED FOR THIS DANK)[/b][/color]'],
  blazed420: ['420 blaze it',
    '[b][font=Comic Sans MS][color=#FF0000]4[/color][color=#FD2A00]2[/color][color=#FC5500]0[/color] [color=#F9AA00]B[/color][color=#F8D400]L[/color][color=#F6FF00]A[/color][color=#CDFF00]Z[/color][color=#A4FF00]E[/color] [color=#52FF00]I[/color][color=#29FF00]T[/color][/font][/b]'
  ],
  checkem: [':checkem:',
    '[size=15][font=impact]C[/font][/size][size=20][font=impact]H[/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]C[/font][/size][size=15][font=impact]K[/font][/size][size=20][font=impact] [/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]M[/font][/size]'
  ],
  ohshit: [':ohshi:',
    '[b][font=Comic Sans MS][color=#665203]O[/color][color=#6B5304]O[/color][color=#715405]O[/color][color=#765506]O[/color][color=#7C5708]H[/color] [color=#87590B]S[/color][color=#765109]H[/color][color=#664808]I[/color][color=#563F06]I[/color][color=#463605]I[/color][color=#362D03]T[/color][/font][/b]'
  ],
  ieatass: [':ieat:', '[i]ケツを食ベる[/i]'],
  olaf: [':olaf:',
    '[b][font=Courier New][size=16][color=#3BED44]h[/color][color=#1137CE]e[/color][color=#6D2645]l[/color][color=#4B20D2]o[/color] [color=#BEF7E8]m[/color][color=#66D74E]y[/color] [color=#950C47]n[/color][color=#9F65A4]a[/color][color=#196650]m[/color][color=#88DA22]e[/color] [color=#BD7B33]i[/color][color=#ED8A9F]s[/color] [color=#4BD338]o[/color][color=#6B6743]l[/color][color=#47D647]a[/color][color=#5D1908]f[/color][/size][/font][/b]'
  ],
  yes: [':yes:', '[size=6]yes,[/size] yes YES [size=26]YES[/size]'],
  hitler: [':hitler:',
    '[IMG]http://i.imgur.com/jowqkg9.gif[/IMG] [size=26][b]ADOLF NITLER CONFIRMED FOR JEW[/b][/size] [IMG]http://i.imgur.com/jowqkg9.gif[/IMG]'
  ],
  anonymoose: [':anonymoose:',
    '[b][font=Comic Sans MS][color=#3BED44]A[/color][color=#1137CE]N[/color][color=#6D2645]O[/color][color=#4B20D2]N[/color][color=#C9EE35]Y[/color][color=#BEF7E8]M[/color][color=#66D74E]O[/color][color=#702B82]O[/color][color=#950C47]S[/color][color=#9F65A4]E[/color] [color=#88DA22]W[/color][color=#332E39]E[/color] [color=#ED8A9F]O[/color][color=#86306E]N[/color][color=#4BD338]L[/color][color=#6B6743]Y[/color] [color=#5D1908]S[/color][color=#3764FE]W[/color][color=#19A9D8]A[/color][color=#346143]L[/color][color=#E3A6B6]L[/color][color=#5447A3]O[/color][color=#21032A]W[/color] [color=#6183A4]N[/color][color=#0E4A2B]E[/color][color=#06790B]V[/color][color=#19B543]E[/color][color=#08930B]R[/color] [color=#B5AE1A]S[/color][color=#406842]P[/color][color=#C3F745]I[/color][color=#DC2D64]T[/color][/font][/b]'
  ],
  ripped: [':rip:',
    '[b][font=Impact][size=20][color=#3BED44]r[/color][color=#1137CE]i[/color][color=#6D2645]p[/color] [color=#C9EE35]i[/color][color=#BEF7E8]n[/color] [color=#702B82]p[/color][color=#950C47]i[/color][color=#9F65A4]e[/color][color=#196650]c[/color][color=#88DA22]e[/color][color=#332E39]s[/color][/size][/font][/b]'
  ],
  toa: ['toa', '[img]http://i61.tinypic.com/cmjk6.png[/img]'],
  murica: ['murica',
    '[b][font=Comic Sans MS][color=#FF0000]M[/color][color=#FF5555]U[/color][color=#FFAAAA]R[/color][color=#FFFFFF]I[/color][color=#AAAAFF]C[/color][color=#5555FF]A[/color][/font][/b]'
  ],
  lenny2: [':lenny2:', '( ͡ຈ╭͜ʖ╮͡ຈ )'], // cancer during browser edit
  // (firefox)
  lenny3: [':lenny3:', '( ͡ಠ ʖ̯ ͡ಠ)'], // cancer during browser edit
  // (firefox)
  lenny4: [':lenny4:', '( ͡~ ͜ʖ ͡~)'], // cancer during browser edit
  // (firefox)
  lenny5: [':lenny5:', '( ͡~ ͜ʖ ͡°)'], // cancer during browser edit
  // (firefox)
  lenny6: [':lenny6:', '( ͠° ͟ʖ ͡°)'], // cancer during browser edit
  // (firefox)
  lenny7: [':lenny7:', '( ͡ʘ╭͜ʖ╮͡ʘ)'], // cancer during browser edit
  // (firefox)
  lenny8: [':lenny8:', '( ͝סּ ͜ʖ͡סּ)'], // cancer during browser edit
  // (firefox)
  lenny9: [':lenny9:', '( ͡ᵔ ͜ʖ ͡ᵔ )'], // cancer during browser edit
  // (firefox)
  lenny10: [':lenny10:', '( ͡^ ͜ʖ ͡^ )'], // cancer during browser edit
  // (firefox)
  lenny11: [':lenny11:', '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]'], // cancer during
  // browser edit
  // (firefox)
  lenny12: [':lenny12:', '( ͡ຈ ͜ʖ ͡ຈ)'], // cancer during browser edit
  // (firefox)
  lenny13: [':lenny13:', '( ͡° ʖ̯ ͡°)'], // cancer during browser edit
  // (firefox)
  lenny14: [':lenny14:', '( ͡ ͜ʖ ͡ )'], // cancer during browser edit
  // (firefox)
  lenny15: [':lenny15:', '(☞ ͡° ͜ʖ ͡°)☞'], // cancer during browser edit
  // (firefox)
  lenny16: [':lenny16:', 'ᕕ( ͡° ͜ʖ ͡° )ᕗ'], // cancer during browser
  // edit (firefox)
  lenny17: [':lenny17:', '( ͡°╭͜ʖ╮͡° )'], // cancer during browser edit
  // (firefox)
  lenny18: [':lenny18:', '( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'], // cancer
  // during
  // browser
  // edit
  // (firefox)
  lenny19: [':lenny19:', '(つ ͡° ͜ʖ ͡°)つ'], // cancer during browser edit
  // (firefox)
  lenny20: [':lenny20:', '( ͡⚆ ͜ʖ ͡⚆)'], // cancer during browser edit
  // (firefox)
  lenny21: [':lenny21:', '¯\_( ͠° ͟ʖ °͠ )_/¯'], // cancer during browser
  // edit (firefox)
  lenny22: [':lenny22:', '(▀ ͜ʖ ͡°)'], // cancer during browser edit
  // (firefox)
  raise2: [':raise2:', 'ヽ༼ຈل͜ຈ༽ﾉ гคเรє ๏г ๔เє ヽ༼ຈل͜ຈ༽ﾉ'], // cancer during
  // browser edit
  // (firefox)
  nyan: [':nyan:', '~=[,,_,,]:3'],
  woop: [':woop:',
    "[ \\[size=10]\\[/size][size=9]\\[/size][size=8]\\[/size][size=7]\\[/size][size=6]\\[/size][size=7]\\[/size][size=8]\\[/size][size=9]\\[/size][size=10]\\[/size]\\ ]"
  ], // dupe
  // the
  // backslashes
  seed: [':seed:', "[color=red][b]EVEN NOW... THE EVIL SEED OF WHAT YOU'VE DONE GERMINATES WITHIN YOU[/b][/color]"], 
  sniper: [':sniper:', '▄︻̷̿┻̿═━一'],
  notgivinashit: [':notgivinash:', '¯\_(ツ)_/¯'],
  ameno: [':ameno:', '༼ つ ◕_◕ ༽つ'],
  brickwall: [':brickwall:', '┬┴┬┴┤(･_├┬┴┬┴'],
  mac10: [':mac10:', '⌐╦╦═─'],
  faceroll: [':faceroll:', '(._.) ( l: ) ( .-. ) ( :l ) (._.)'],
  tablefix: [':tablefix:', '┬──┬ ノ( ゜-゜ノ)'],
  wellmemed: [':memed', '[IMG]http://i58.tinypic.com/2s8o4g8.png[/IMG]'],
  gottago: [':gofast:', '[scroll][font=Comic Sans MS][size=26][blur][color=green][i]GOTTA GO FAST[/i][/color][/blur][/size][/font][list][*][/list][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][/scroll]'],
  destroy: [':destroy:', '[size=26]DESTROY[/size][size=23]DESTROY[/size][size=20]DESTROY[/size][size=17]DESTROY[/size][size=14]DESTROY[/size][size=11]DESTROY[/size][size=9]DESTROY[/size][size=6]DESTROY[/size][size=3]DESTROY[/size]'],
  logout: [':logout:', "[url=https://i.imgur.com/7XClKSN.png?1]http://superlogout.com/[/url]"]
};
///////

var endings = [
  ' and cant no hood fuck with death rizzow\[dot\]',
  ' and my money on my mind\[dot\]',
  ' and yo momma\[dot\]',
  ' aww nah\[dot\]',
  ' bitch ass nigga\[dot\]',
  ' but real niggaz don\'t give a fuck\[dot\]',
  ' cuz I put gangsta rap on tha map\[dot\]',
  ' cuz Im tha Double O G\[dot\]',
  ' cuz I\'m fresh out the pen\[dot\]',
  ' cuz its a doggy dog world\[dot\]',
  ' cuz its a G thang\[dot\]',
  ' cuz its a pimp thang\[dot\]',
  ' cuz this is how we do it\[dot\]',
  ' dogg\[dot\]',
  ' doggystyle\[dot\]',
  ' droppin hits\[dot\]',
  ' fo all my homies in the pen\[dot\]',
  ' fo gettin yo pimp on\[dot\]',
  ' fo my bling bling\[dot\]',
  ' fo\' real\[dot\]',
  ' fo\' sheezy\[dot\]',
  ' fo\' sho\'\[dot\]',
  ' fo yo bitch ass\[dot\]',
  ' from tha streets of tha L-B-C\[dot\]',
  ' gangsta style\[dot\]',
  ' hittin that booty\[dot\]',
  ' in all flavas\[dot\]',
  ' if you gots a paper stack\[dot\]',
  ' in tha dogg pound\[dot\]',
  ' in tha hood\[dot\]',
  ' in tha mutha fuckin club\[dot\]',
  ' keep\'n it real yo\[dot\]',
  ' like a motha fucka\[dot\]',
  ' like a tru playa\'\[dot\]',
  ' like old skool shit\[dot\]',
  ' like this and like that and like this and uh\[dot\]',
  ' mah nizzle\[dot\]',
  ' n shit\[dot\]',
  ' n we out!',
  ' now motherfuckers lemme here ya say hoe\[dot\]',
  ' now pass the glock\[dot\]',
  ' paper\'d up\[dot\]',
  ' puttin tha smack down\[dot\]',
  ' ridin\' in mah double R\[dot\]',
  ' sho nuff\[dot\]',
  ' so bow down to the bow wow!',
  ' so i can get mah pimp on\[dot\]',
  ' so jus\' chill\[dot\]',
  ' so show some love, niggaz!',
  ' so sit back relax new jacks get smacked\[dot\]',
  ' so you betta run and grab yo glock\[dot\]',
  ' spittin\' that real shit\[dot\]',
  ' straight from long beach nigga\[dot\]',
  ' ta help you tap dat ass\[dot\]',
  ' to increase tha peace\[dot\]',
  ' thats off tha hook yo\[dot\]',
  ' upside yo head\[dot\]',
  ' where the sun be shinin and I be rhymin\'\[dot\]',
  ' wit da big Bo\$\$\$ Dogg\[dot\]',
  ' with my forty-fo\' mag\[dot\]',
  ' with my hoes on my side, and my strap on my back',
  ' with the gangsta shit that keeps ya hangin\[dot\]',
  ' with the S-N-double-O-P\[dot\]',
  ' ya dig?',
  ' ya feelin\' me?',
  ' yaba daba dizzle\[dot\]',
  ' yeah yeah baby\[dot\]',

  ', betta check yo self\[dot\]',
  ', chill yo\[dot\]',
  ', know what im sayin?',
  ', niggaz, better recognize\[dot\]',
  ', ya feel me?',

  '\[dot\] Aint no killin\' everybodys chillin\'\[dot\]',
  '\[dot\] Aint no L-I-M-I-to-tha-T\[dot\]',
  '\[dot\] Aint no stoppin\' this shit nigga\[dot\]',
  '\[dot\] Anotha dogg house production\[dot\]',
  '\[dot\] Boo-Yaa!',
  '\[dot\] Boom bam as I step in the jam, God damn\[dot\]',
  '\[dot\] Bounce wit me\[dot\]',
  '\[dot\] Bow wow wow yippee yo yipee yay\[dot\]',
  '\[dot\] Chill as I take you on a trip\[dot\]',
  '\[dot\] Death row 187 4 life\[dot\]',
  '\[dot\] Dogg House Records in the motha fuckin house\[dot\]',
  '\[dot\] Drop it like its hot\[dot\]',
  '\[dot\] Fo\'-fo\' desert eagle to your motherfuckin\' dome\[dot\]',
  '\[dot\] Freak y\'all, into the beat y\'all\[dot\]',
  '\[dot\] Holla!',
  '\[dot\] Hollaz to the East Side\[dot\]',
  '\[dot\] I started yo shit and i\'ll end yo\' shit\[dot\]',
  '\[dot\] I thought i told ya, nigga I\'m a soldier\[dot\]',
  '\[dot\] Ill slap tha taste out yo mouf\[dot\]',
  '\[dot\] Im a bad boy wit a lotta hos\[dot\]',
  '\[dot\] Im crazy, you can\'t phase me\[dot\]',
  '\[dot\] I\'m a mutha fuckin 2-time felon\[dot\]',
  '\[dot\] It dont stop till the wheels fall off\[dot\]',
  '\[dot\] Its just anotha homocide\[dot\]',
  '\[dot\] It\'s your homie snoop dogg from the dpg\[dot\]',
  '\[dot\] Keep the party crackin while I\'m steady rappin\[dot\]',
  '\[dot\] Keep\'n it gangsta dogg\[dot\]',
  '\[dot\] Listen to how a motherfucker flow shit\[dot\]',
  '\[dot\] Nigga get shut up or get wet up\[dot\]',
  '\[dot\] One, two three and to tha four\[dot\]',
  '\[dot\] Put ya mutha fuckin choppers up if ya feel this\[dot\]',
  '\[dot\] Real niggas recognize the realness\[dot\]',
  '\[dot\] Relax, cus I\'m bout to take my respect\[dot\]',
  '\[dot\] Slap your mutha fuckin self\[dot\]',
  '\[dot\] Snoop dogg is in this bitch\[dot\]',
  '\[dot\] Snoop heffner mixed with a little bit of doggy flint\[dot\]',
  '\[dot\] Subscribe nigga, get yo issue\[dot\]',
  '\[dot\] They call me tha black folks president\[dot\]',
  '\[dot\] Throw yo guns in the motherfuckin air\[dot\]',
  '\[dot\] Tru niggaz do niggaz\[dot\]',
  '\[dot\] Wussup to all my niggaz in the house\[dot\]',
  '\[dot\] Ya fuck with us, we gots to fuck you up\[dot\]',
  '\[dot\] Yippie yo, you can\'t see my flow\[dot\]',
  '\[dot\] You gotta check dis shit out yo\[dot\]',
  '\[dot\] You\'se a flea and I\'m the big dogg\[dot\]',
  
  ' because doggs make tha world a better place!',
  ' let me holla at u\[dot\]',
  ' #YaDigg !',

  '\[dot\] Living young n wild n free !',
  '\[dot\] Put your feet up n take a breath !',
  '\[dot\] Smells like tha good shit\[dot\]',
  '\[dot\] Snoop du jour !',
  '\[dot\] wat it do ??'
];

var replacements = {
  "\\babout\\b": "'bout",
  "\\bam\\b": "be",
  "\\band\\b": "n",
  "\\bare\\b": "is",
  "\\bawesome\\b": "off tha hook",
  "\\bbecause\\b": "coz",
  "\\bbeing\\b": "bein",
  "\\bboy\\b": "boi",
  "\\bcar\\b": "ride",
  "\\bcars\\b": "ridez",
  "\\bchurch\\b": "chuch",
  "\\bcities\\b": "hoodz",
  "\\bcomrades\\b": "posse",
  "\\bcute\\b": "skanky",
  "\\bdog\\b": "dogg",
  "\\bdriving\\b": "rollin'",
  "\\eed\\b": "ee'",
  "\\bfor\\b": "fo`",
  "\\bfriend\\b": "nigga",
  "\\bfriends\\b": "niggaz",
  "\\ged\\b": "ge'",
  "\\bget\\b": "git",
  "\\bgot\\b": "gots",
  "\\bgreat\\b": "bootylicious",
  "\\bgun\\b": "gat",
  "\\bguns\\b": "gats",
  "\\bguy\\b": "homey",
  "\\bhappy\\b": "stoked",
  "\\head": "heezee",
  "\\bhouse\\b": "hizouse",
  "\\ied\\b": "y",
  "\\bin\\b": "'n",
  "\\binformation\\b": "411",
  "\\bis\\b": "be",
  "\\bkilled\\b": "iced",
  "\\bkilling\\b": "cappin'",
  "\\blil\\b": "shawty",
  "\\blil'\\b": "shawty",
  "\\blittle\\b": "shawty",
  "\\bmad\\b": "buggin'",
  "\\bman\\b": "dawg",
  "\\bmy\\b": "mah",
  "\\bnice\\b": "funky ass",
  "\\bnothing\\b": "nuttin",
  "\\ool\\b": "oo'",
  "\\bpeculiar\\b": "perculiar",
  "\\bpeople\\b": "thugz",
  "\\bplayers\\b": "playas",
  "\\bplease\\b": "pleaze",
  "\\bpolice\\b": "po-po",
  "\\bsays\\b": "sez",
  "se\\b": "ze",
  "sed\\b": "zed",
  "ses\\b": "zes",
  "\\bsomething\\b": "sum-m sum-m",
  "\\bsuper\\b": "snoopa",
  "\\btake\\b": "takes",
  "\\btalk\\b": "rap",
  "\\btelevision": "televizzle",
  "\\bthe\\b": "tha",
  "\\btheir\\b": "they",
  "\\bthis\\b": "dis",
  "\\bto\\b": "ta",
  "\\btown\\b": "ghetto",
  "\\btv\\b": "t-vizzle",
  "\\bTV\\b": "T-Vizzle",
  "\\bwith": "wit",
  "\\bwomen\\b": "bitchez",
  "\\byour\\b": "yo'",
  "\\byourself\\b": "yoself",
  "\\byou're\\b": "yoe",
  "\\byou've\\b": "you",
  "\\zed\\b": "ze'",
  
  "\\'s\\b": "",
  "\\ers\\b": "a",
  "\\er\\b": "a",
  "\\ings\\b": "'n",
  "\\ing\\b": "'n",
  
  "\\bdo you\\b": "d-ya",
  "\\bor anything\\b": "or nothin' trippin'",
  "\\bwith a\\b": "witta",
  "\\byou all\\b": "y-aw",
  "\\byou're all\\b": "y-aw",
  
  "friend": "feminist",
  "geometry dash": "john cena",
  "car": "cat",
  "guy": "lad",
  "girl": "lady",
  "yanis": "dickbutt",
  "kaff": "mouth farts",
  "sex": "shemale porn addiction",
  "fnaf": "i'm a faggot mods please ban me",
  "shockey": "shockey's big black cock",
  "matr0xx": "NANANANANANANANA PROXYMAN",
  "witness": "these dudes i know",
  "shiz": "shizzle",
  " www\\.": " here's a nice porn site www.",
  //"\\. ": "izzle. ",
  "phone": "pokedex",
  "mortal kombat": "moral kombat",
  "nfm": "super columbine massacre rpg",
  "dong": "dong cena",
  "study": "tumblr post",
  "security": "suicide",
  "donald trump": "obama",
  "jv": "my dick",
  "aim": "gizoogle",
  "rafa": "olaf",
  "raga": "rafa",
  "big jilm": "big brazilian cock",
  "dark meat": "the jews",
  "shit": "shizznit",
  "meme": "weed",
  "doge": "drugs",
  "cake": "cocaine",
  "cloud": "butt",
  "fuck": "fuck a doodle doo",
  "dick": "good man",
  "11": "the holocaust",
  "adolf hitler": "osama bin laden",
  "meeting": "school shooting",
  "raped": "visited 4chan",
  "rape": "4chan visit",
  "raping": "wanking to ponies",
  "mlp": "cum in my butt",
  "america": "brazil",
  "ireland": "africa",
  "britain": "sorry, i'm afraid john cena is not a planet",
  "stage maker": "men's rights activist",
  "nigger": "kike",
  "venomalix": "niger",
  "sano": "insano",
  "mcroger": "dildo",
  "prayers": "highlander",
  "avalanche": "avalanche of dicks",
  "sinfulbliss": "pissing fetish",
  "sin": "pissing fetish",
  "dad": "darth vader",
  "mom": "rammstein",
  "isis": "allahu akbar",
  "backflipbadger": "big boobed",
  "reddit": "porn site",
  "legnak": "drunk fat trucker",
  "rad1": "dick.rad",
  "black dragon": "guy that pretends to be a book writer",
  "wb ": "i wanna fuck ",
  "brown": "ugly",
  "black": "zebra",
  " joined the chat on ": "DISREGARD THAT I SUCK COCKS",
  " has been kicked by ": "DISREGARD THAT I SUCK COCKS",
  "whore": "little girl that i rape every night",
  "is home": "is locked up in my basement",
  "'s home": "'s locked up in my basement",
  "idiot": "nun",
  "faggot": "crackhead",
  "lmao": "lemons",
  "ayy": "yo wtf bbq",
  "ban": "blan",
  "up in this": "right up in ye'",
  "don't know": "are guilty and everyone knows it",
  "doesn't know": "is guilty and everyone knows it",
  "spoiler": "crankshaft",
  "chat mod": "ip's sex slave",
  "motherfucker": "foot fetishist",
  "aureus": "aureus fucking aisling",
  "spam": ":DD:D::DD:D:D:D:DDDDD",
  "fire": "burn",
  "trying": "failing",
  "fuel": "gimme fuel, gimme fire, gimme that which i desire",
  "they": "those faggots",
  "swearify": "virus",
  "rip": "dick ripped",
  "minecraft": "gay fag",
  "he ": "this asshole ",
  "him ": "this asshole ",
  "girlfriend": "tumblr user",
  "username": "schlong's size",
  "fucking": "foot fucking",
  "awake": "drunk",
  "games": "violence",
  "going to": "going to kill and",
  "pls": "pls fuck me, also",
  "chatbox": "porn home",
  "autist": "fat autist slob",
  "best": "worst",
  "my crush": "jack thompson",
  "head shot": "dick punch",
  "headshot": "dick punch",
  "ham": "hemp",
  "meat": "vegan food",
  "failing": "sucking dick",
  "New York": "West Ham",
  "subscribe": "eat shit",
  "read the bible": "molest little boys",
  "tragedy": "doom map",
  "kids": "dead bodies",
  "hiding": "burying the bodies",
  "god": "lie *tips fedora*",
  "gone": "dead",
  "a party": "9/11",
  "party": "9/11",
  "wwe": "rape case",
  "hulk hogan": "[REDACTED]",
  "chris benoit": "[REDACTED]",
  "horrible": "fucking amazing",
  "nuts": "balls deep insane",
  "nut": "nut cracker",
  "mario": "cannibal",
  "sarcasm": "cannibal corpse",
  "beck": "anal cunt",
  "ween": "afroman",
  "wee": "willy",
  "omar waly": "omartian willy",
  "kinetico": "cinema",
  "animal": "pikachu",
  "agility": "kill bill",
  "agil": "kill bill",
  "youtube": "you lube",
  "lol": "gazorpazorp",
  "number": "numberwang",
  "vizual": "we got a visual on the suspect",
  "viz": "we got a visual on the suspect",
  "pie": "pi",
  "damn": "darn",
  "wee": "willy",
  "ing ": "in' ",
  "er ": "a' ",
  "ers ": "as' ",
  "yes": "ya yes yis",
  "your": "yur",
  "main": "mayy",
  "etc": "ayyytc",
  "russia": "glory to arstotzka",
  "http": "here's a nice porn site http",
  "habbo": "online dating sim",
  "roblox": "cockblox",
  "java": "ass",
  "ear rape": "good music",
  "doxx": "tumblr fetish",
  "var": "yarr",
  "the ": "ye ol' ",
  "idiot": "doofus",
  "offended": "raped",
  "transexual": "transformer",
  "pissed": "filled with cum",
  "video game": "crack cocaine",
  "eat": "shit",
  "bad": "[url=https://www.youtube.com/watch?v=S7FsAgPuVwU]greasy[/url]",
  "pornstar": "my parents",
  "chemical": "cummical",
  "10 graves": "10 tits",
  "ten graves": "ten tits",
  "10th": "ten tits",
  "99": "95 + 4 pennies, add that shit up",
  "war": "wat",
  "what": "what fuuck",
  "football": "rugby",
  "still": "still dre",
  "2": "ms-dos",
  "6": "half",
  "13": "baker's dozen",
  "tornado shark": "stiff gaucho",
  "lead": "karsh",
  "my country": "kazakhstan",
  "banned": "[size=29]B&[/size]",
  "food": "juicy steak",
  "died": "deidhs",
  "lol": "not funny at all",
  "bye": "help i'm trapped in a universe factory",
  "kappa": "makenzy",
  "art": "fart",
  "weed": "tree",
  "bitch": "muthafucka'",
  "ha": "ja",
  "graduated": "raped my way up to",
  "know": "forget",
  "have": "rape",
  "Navy Seals": "Anal Beads",
  "music": "pussy pussy pussy marijuana",
  "marijuana": "macarena",
  "involved": "not involved",
  "secret": "s3kr1t",
  "raid": "twitch raid",
  "Al-Quaeda": "ireland",
  "confirmed": "fake as fuck",
  "invented": "copied",
  "invent": "copy"
};

///////EXTRA FILTERING CODE
var spec_code = ['/exit', '/away', '/abs', '[code]', ":"];
var swear_code = ['[b][/b]', '.'];
var link_code = ['http://', 'www.', 'https://'];
///////
///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = ["[color=#789922]", "[/color]", "[b][color=#AA0000]", "[/color][/b]"];
///////
///////FORTICONS
var img_tag = ["[img]", "[/img]"];
///////
///////CSS STYLE STRINGS
var cssChkbox = "font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;";
var cssButton = "font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;";
var cssMsg = "color:white; margin-right:8px; margin-left:5px;";
var cssLine = "color:black;";
var cssChat = "overflow-x: hidden; left:141px;"; // / white-space: nowrap;
///////
///////CODE FOR EXTRA SMILIE INJECT
var smilie_header_html =
  "<option value=''>View more Emoticons</option><option value='0'>Smilies 1</option><option value='1'>Swearify 1</option><option value='2'>Swearify Rage Faces</option><option value='3'>Swearify Dongs</option>";
var td_base =
  "<td><a href='javascript:insert_chatboxsmilie(_smilie)'><img title='_title' src='_link' alt='_title' border='0'></a></td>";
var td_array = "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
var quote = '"';
if (document.getElementsByName("categ").length == 1) document.getElementsByName("categ")[0].innerHTML =
  smilie_header_html; // /
// add
// the
// Swearify
// selection
///////VAR FOR FIXING THE POST PAGE
var post_button_num = 0;
///////
///////CHARCOUNT MERGE
var cssLabel = "color: grey;font-size: 12px;";
var loc = "";
var refined_loc = "";
var cssTd = "";
///////
///
//UTILS
///
//SWEAR
///
//EMOTICON
///
//MAYMAY
///
//GREENTEXT
///
//REDTEXT
///
//LEET
///
//RAINBOW
///
//RANDOM
///
//GRADIENT
///
//JS
///
//JAVA
///
//VBS
///
//CSS
///////UTILS
function setCookie(name, value, days) {
	var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

function values(o) {
  return Object.keys(o).map(function (k) {
    return o[k];
  });
} // ////////http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key
String.prototype.regexIndexOf = function(regex, startpos) {
	var indexOf = this.substring(startpos || 0).search(regex);
	return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
}
String.prototype.regexLastIndexOf = function(regex, startpos) {
	regex = regex.global ? regex : new RegExp(regex.source, "g"
			+ (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
	if (typeof startpos == "undefined")
		startpos = this.length;
	else if (startpos < 0)
		startpos = 0;
	var stringToWorkWith = this.substring(0, startpos + 1);
	var lastIndexOf = -1;
	var nextStop = 0;
	while ((result = regex.exec(stringToWorkWith)) != null) {
		lastIndexOf = result.index;
		regex.lastIndex = ++nextStop;
	}
	return lastIndexOf;
}

///////////////////// MANAGES THE SWEAR FILTERING
function filter_swears() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = document.getElementById("message").value;
    var old_msg_low = document.getElementById("message").value.toLowerCase();
    var new_msg = '';
    // http://stackoverflow.com/a/500459
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    var exit_code = old_msg.indexOf(spec_code[0]);
    var away_code = old_msg.indexOf(spec_code[1]);
    var abs_code = old_msg.indexOf(spec_code[2]);
    var code_code = old_msg.indexOf(spec_code[3]);
    var semi_code = old_msg.indexOf(spec_code[3]);
    var spec_switch = 0;
    // special switches switch
    if (exit_code != -1 || away_code != -1 || abs_code != -1 || code_code != -1 || semi_code != -1) spec_switch = 1;
    
    if(http_link > 0 || www_link > 0 || https_link > 0) {
      var which = 0;
      if(http_link != -1){
        which = http_link;        
      }else if(www_link != -1){
        which = www_link;  
      }else{
        which = https_link;  
      }
      var before_link = old_msg_low.substr(0, which);
      var link = old_msg_low.substr(which, old_msg_low.length);
      if(before_link.indexOf(swear_words[i]) >= 0)   {
        var edi_msg = old_msg.substr(before_link.indexOf(swear_words[i]), swear_words[i].length);
        var par_msg = edi_msg.split("").join(swear_code[spec_switch]);
        new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);
        document.getElementById("message").value = new_msg;
      }      
    }    
    
    if (http_link == -1 && https_link == -1 && www_link == -1) {
        if(old_msg_low.indexOf(swear_words[i]) >= 0)   {
            var edi_msg = old_msg.substr(old_msg_low.indexOf(swear_words[i]), swear_words[i].length);
            var par_msg = edi_msg.split("").join(swear_code[spec_switch]);
            new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);     
            document.getElementById("message").value = new_msg;
        }    	
    }    	   
  }
}

function filter_swears_post() {
  for (var i = 0; i < swear_words.length; i++) {
    var old_msg = ""; // this may not be necessary i'm not 100% sure
    var old_msg_low = "";
    if (document.getElementsByTagName("textarea")[1] === undefined){
    	old_msg = document.getElementsByTagName("textarea")[0].value;
    	old_msg_low = document.getElementsByTagName("textarea")[0].value.toLowerCase();
    }else{
    	old_msg = document.getElementsByTagName("textarea")[1].value;
    	old_msg_low = document.getElementsByTagName("textarea")[1].value.toLowerCase();
    }
    var http_link = old_msg.indexOf(link_code[0]);
    var www_link = old_msg.indexOf(link_code[1]);
    var https_link = old_msg.indexOf(link_code[2]);
    if (http_link == -1 && https_link == -1 && www_link == -1){
    	if(old_msg_low.indexOf(swear_words[i]) >= 0)   {
            var edi_msg = old_msg.substr(old_msg_low.indexOf(swear_words[i]), swear_words[i].length);
            var par_msg = edi_msg.split("").join(swear_code[0]);
            new_msg = old_msg.replace(new RegExp(swear_words[i], "gi"), par_msg);     
            if (document.getElementsByTagName("textarea")[1] === undefined){
            	document.getElementsByTagName("textarea")[0].value = new_msg;
            }else{
            	document.getElementsByTagName("textarea")[1].value = new_msg;
            }
        }  
    }   
  }
}
/////////////////////
/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM
function emoticon_() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], "gi"), img_tag[0] + values(emoticon_1)[i][1] +
        img_tag[1]);
      document.getElementById("message").value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], "gi"), img_tag[0] + values(emoticon_2)[i][1] +
                                               img_tag[1]);
      document.getElementById("message").value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], "gi"), img_tag[0] + values(emoticon_3)[i][1] +
                                               img_tag[1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function emoticon_post() {
  for (var i = 0; i < Object.keys(emoticon_1).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
      0].value;
    else old_msg = document.getElementsByTagName("textarea")[1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], "gi"), img_tag[0] + values(emoticon_1)[i][1] +
        img_tag[1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        new_msg;
      else document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
  for (var i = 0; i < Object.keys(emoticon_2).length; i++) {
	    var old_msg = "";
	    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
	      0].value;
	    else old_msg = document.getElementsByTagName("textarea")[1].value;
	    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], "gi"));
	    if (index_num >= 0) {
	      var new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], "gi"), img_tag[0] + values(emoticon_2)[i][1] +
	        img_tag[1]);
	      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
	        new_msg;
	      else document.getElementsByTagName("textarea")[1].value = new_msg;
	    }
  }
  for (var i = 0; i < Object.keys(emoticon_3).length; i++) {
	    var old_msg = "";
	    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
	      0].value;
	    else old_msg = document.getElementsByTagName("textarea")[1].value;
	    var index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], "gi"));
	    if (index_num >= 0) {
	      var new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], "gi"), img_tag[0] + values(emoticon_3)[i][1] +
	        img_tag[1]);
	      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
	        new_msg;
	      else document.getElementsByTagName("textarea")[1].value = new_msg;
	    }
  }
}
/////////////////////
/////////////////////MANAGES THE MAY MAY SYSTEM
function maymay_() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById("message").value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      document.getElementById("message").value = new_msg;
    }
  }
}

function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = "";
    if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[
      0].value;
    else old_msg = document.getElementsByTagName("textarea")[1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], "gi"));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], "gi"), values(maymay)[i][1]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        new_msg;
      else document.getElementsByTagName("textarea")[1].value = new_msg;
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF GREENTEXT
function greentext_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf(">");
  if (index_num === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById("message").value = new_msg;
  }
}

function greentext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf(">");
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF REDTEXT
function redtext_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.indexOf("<");
  if (old_msg.length >= 1)
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById("message").value = new_msg;
    }
}

function redtext_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf("<");
    if (msg_ray[i].length >= 1)
      if (index_num === old_msg.length - 1) {
        msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
        if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
          msg_ray.join('<br />');
        else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
      }
  }
}
/////////////////////
/////////////////////LEET TEXT
function leet_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/leet /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/leet /i, '');
    new_msg = new_msg.replace(/a/gi, '4');
    new_msg = new_msg.replace(/b/gi, '|3');
    new_msg = new_msg.replace(/c/gi, '(');
    new_msg = new_msg.replace(/d/gi, '|)');
    new_msg = new_msg.replace(/e/gi, '3');
    new_msg = new_msg.replace(/f/gi, '|=');
    new_msg = new_msg.replace(/g/gi, '9');
    new_msg = new_msg.replace(/h/gi, '|-|');
    new_msg = new_msg.replace(/i/gi, '1');
    new_msg = new_msg.replace(/j/gi, '_|');
    new_msg = new_msg.replace(/k/gi, '|<');
    new_msg = new_msg.replace(/l/gi, '1');
    new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
    new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
    new_msg = new_msg.replace(/o/gi, '0');
    new_msg = new_msg.replace(/p/gi, '|>');
    new_msg = new_msg.replace(/q/gi, '().');
    new_msg = new_msg.replace(/r/gi, '|2');
    new_msg = new_msg.replace(/s/gi, '5');
    new_msg = new_msg.replace(/t/gi, '7');
    new_msg = new_msg.replace(/u/gi, '|_|');
    new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
    new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
    new_msg = new_msg.replace(/x/gi, '><');
    new_msg = new_msg.replace(/y/gi, '`/');
    new_msg = new_msg.replace(/z/gi, '2');
    document.getElementById("message").value = new_msg;
  }
}

function leet_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      new_msg = new_msg.replace(/b/gi, '|3');
      new_msg = new_msg.replace(/c/gi, '(');
      new_msg = new_msg.replace(/d/gi, '|)');
      new_msg = new_msg.replace(/e/gi, '3');
      new_msg = new_msg.replace(/f/gi, '|=');
      new_msg = new_msg.replace(/g/gi, '9');
      new_msg = new_msg.replace(/h/gi, '|-|');
      new_msg = new_msg.replace(/i/gi, '1');
      new_msg = new_msg.replace(/j/gi, '_|');
      new_msg = new_msg.replace(/k/gi, '|<');
      new_msg = new_msg.replace(/l/gi, '1');
      new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
      new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
      new_msg = new_msg.replace(/o/gi, '0');
      new_msg = new_msg.replace(/p/gi, '|>');
      new_msg = new_msg.replace(/q/gi, '().');
      new_msg = new_msg.replace(/r/gi, '|2');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      new_msg = new_msg.replace(/u/gi, '|_|');
      new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
      new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
      new_msg = new_msg.replace(/x/gi, '><');
      new_msg = new_msg.replace(/y/gi, '`/');
      new_msg = new_msg.replace(/z/gi, '2');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BALLOON TEXT
function balloon_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/balloon /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/balloon /i, '');
    new_msg = new_msg.replace(/a/gi, 'ⓐ');
    new_msg = new_msg.replace(/b/gi, 'ⓑ');
    new_msg = new_msg.replace(/c/gi, 'ⓒ');
    new_msg = new_msg.replace(/d/gi, 'ⓓ');
    new_msg = new_msg.replace(/e/gi, 'ⓔ');
    new_msg = new_msg.replace(/f/gi, 'ⓕ');
    new_msg = new_msg.replace(/g/gi, 'ⓖ');
    new_msg = new_msg.replace(/h/gi, 'ⓗ');
    new_msg = new_msg.replace(/i/gi, 'ⓘ');
    new_msg = new_msg.replace(/j/gi, 'ⓙ');
    new_msg = new_msg.replace(/k/gi, 'ⓚ');
    new_msg = new_msg.replace(/l/gi, 'ⓛ');
    new_msg = new_msg.replace(/m/gi, 'ⓜ');
    new_msg = new_msg.replace(/n/gi, 'ⓝ');
    new_msg = new_msg.replace(/o/gi, 'ⓞ');
    new_msg = new_msg.replace(/p/gi, 'ⓟ');
    new_msg = new_msg.replace(/q/gi, 'ⓠ');
    new_msg = new_msg.replace(/r/gi, 'ⓡ');
    new_msg = new_msg.replace(/s/gi, 'ⓢ');
    new_msg = new_msg.replace(/t/gi, 'ⓣ');
    new_msg = new_msg.replace(/u/gi, 'ⓤ');
    new_msg = new_msg.replace(/v/gi, 'ⓥ');
    new_msg = new_msg.replace(/w/gi, 'ⓦ');
    new_msg = new_msg.replace(/x/gi, 'ⓧ');
    new_msg = new_msg.replace(/y/gi, 'ⓨ');
    new_msg = new_msg.replace(/z/gi, 'ⓩ');
    new_msg = new_msg.replace(/1/gi, '⓵');
    new_msg = new_msg.replace(/2/gi, '⓶');
    new_msg = new_msg.replace(/3/gi, '⓷');
    new_msg = new_msg.replace(/4/gi, '⓸');
    new_msg = new_msg.replace(/5/gi, '⓹');
    new_msg = new_msg.replace(/6/gi, '⓺');
    new_msg = new_msg.replace(/7/gi, '⓻');
    new_msg = new_msg.replace(/8/gi, '⓼');
    new_msg = new_msg.replace(/9/gi, '⓽');
    new_msg = new_msg.replace(/0/gi, '⓪');
    document.getElementById("message").value = new_msg;
  }
}

function balloon_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/balloon /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/balloon /i, '');
      new_msg = new_msg.replace(/a/gi, 'ⓐ');
      new_msg = new_msg.replace(/b/gi, 'ⓑ');
      new_msg = new_msg.replace(/c/gi, 'ⓒ');
      new_msg = new_msg.replace(/d/gi, 'ⓓ');
      new_msg = new_msg.replace(/e/gi, 'ⓔ');
      new_msg = new_msg.replace(/f/gi, 'ⓕ');
      new_msg = new_msg.replace(/g/gi, 'ⓖ');
      new_msg = new_msg.replace(/h/gi, 'ⓗ');
      new_msg = new_msg.replace(/i/gi, 'ⓘ');
      new_msg = new_msg.replace(/j/gi, 'ⓙ');
      new_msg = new_msg.replace(/k/gi, 'ⓚ');
      new_msg = new_msg.replace(/l/gi, 'ⓛ');
      new_msg = new_msg.replace(/m/gi, 'ⓜ');
      new_msg = new_msg.replace(/n/gi, 'ⓝ');
      new_msg = new_msg.replace(/o/gi, 'ⓞ');
      new_msg = new_msg.replace(/p/gi, 'ⓟ');
      new_msg = new_msg.replace(/q/gi, 'ⓠ');
      new_msg = new_msg.replace(/r/gi, 'ⓡ');
      new_msg = new_msg.replace(/s/gi, 'ⓢ');
      new_msg = new_msg.replace(/t/gi, 'ⓣ');
      new_msg = new_msg.replace(/u/gi, 'ⓤ');
      new_msg = new_msg.replace(/v/gi, 'ⓥ');
      new_msg = new_msg.replace(/w/gi, 'ⓦ');
      new_msg = new_msg.replace(/x/gi, 'ⓧ');
      new_msg = new_msg.replace(/y/gi, 'ⓨ');
      new_msg = new_msg.replace(/z/gi, 'ⓩ');
      new_msg = new_msg.replace(/1/gi, '⓵');
      new_msg = new_msg.replace(/2/gi, '⓶');
      new_msg = new_msg.replace(/3/gi, '⓷');
      new_msg = new_msg.replace(/4/gi, '⓸');
      new_msg = new_msg.replace(/5/gi, '⓹');
      new_msg = new_msg.replace(/6/gi, '⓺');
      new_msg = new_msg.replace(/7/gi, '⓻');
      new_msg = new_msg.replace(/8/gi, '⓼');
      new_msg = new_msg.replace(/9/gi, '⓽');
      new_msg = new_msg.replace(/0/gi, '⓪');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BRAILLE TEXT
function braille_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/braille /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/braille /i, '');
    new_msg = new_msg.replace(/a/gi, '⠁');
    new_msg = new_msg.replace(/b/gi, '⠃');
    new_msg = new_msg.replace(/c/gi, '⠉');
    new_msg = new_msg.replace(/d/gi, '⠙');
    new_msg = new_msg.replace(/e/gi, '⠑');
    new_msg = new_msg.replace(/f/gi, '⠋');
    new_msg = new_msg.replace(/g/gi, '⠛');
    new_msg = new_msg.replace(/h/gi, '⠓');
    new_msg = new_msg.replace(/i/gi, '⠊');
    new_msg = new_msg.replace(/j/gi, '⠚');
    new_msg = new_msg.replace(/k/gi, '⠅');
    new_msg = new_msg.replace(/l/gi, '⠇');
    new_msg = new_msg.replace(/m/gi, '⠍');
    new_msg = new_msg.replace(/n/gi, '⠝');
    new_msg = new_msg.replace(/o/gi, '⠕');
    new_msg = new_msg.replace(/p/gi, '⠏');
    new_msg = new_msg.replace(/q/gi, '⠟');
    new_msg = new_msg.replace(/r/gi, '⠗');
    new_msg = new_msg.replace(/s/gi, '⠎');
    new_msg = new_msg.replace(/t/gi, '⠞');
    new_msg = new_msg.replace(/u/gi, '⠥');
    new_msg = new_msg.replace(/v/gi, '⠧');
    new_msg = new_msg.replace(/w/gi, '⠺');
    new_msg = new_msg.replace(/x/gi, '⠭');
    new_msg = new_msg.replace(/y/gi, '⠽');
    new_msg = new_msg.replace(/z/gi, '⠵');
    new_msg = new_msg.replace(/1/gi, '⠼⠁');
    new_msg = new_msg.replace(/2/gi, '⠼⠃');
    new_msg = new_msg.replace(/3/gi, '⠼⠉');
    new_msg = new_msg.replace(/4/gi, '⠼⠙');
    new_msg = new_msg.replace(/5/gi, '⠼⠑');
    new_msg = new_msg.replace(/6/gi, '⠼⠋');
    new_msg = new_msg.replace(/7/gi, '⠼⠛');
    new_msg = new_msg.replace(/8/gi, '⠼⠓');
    new_msg = new_msg.replace(/9/gi, '⠼⠊');
    new_msg = new_msg.replace(/0/gi, '⠼⠚');
    document.getElementById("message").value = new_msg;
  }
}

function braille_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/braille /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/braille /i, '');
      new_msg = new_msg.replace(/a/gi, '⠁');
      new_msg = new_msg.replace(/b/gi, '⠃');
      new_msg = new_msg.replace(/c/gi, '⠉');
      new_msg = new_msg.replace(/d/gi, '⠙');
      new_msg = new_msg.replace(/e/gi, '⠑');
      new_msg = new_msg.replace(/f/gi, '⠋');
      new_msg = new_msg.replace(/g/gi, '⠛');
      new_msg = new_msg.replace(/h/gi, '⠓');
      new_msg = new_msg.replace(/i/gi, '⠊');
      new_msg = new_msg.replace(/j/gi, '⠚');
      new_msg = new_msg.replace(/k/gi, '⠅');
      new_msg = new_msg.replace(/l/gi, '⠇');
      new_msg = new_msg.replace(/m/gi, '⠍');
      new_msg = new_msg.replace(/n/gi, '⠝');
      new_msg = new_msg.replace(/o/gi, '⠕');
      new_msg = new_msg.replace(/p/gi, '⠏');
      new_msg = new_msg.replace(/q/gi, '⠟');
      new_msg = new_msg.replace(/r/gi, '⠗');
      new_msg = new_msg.replace(/s/gi, '⠎');
      new_msg = new_msg.replace(/t/gi, '⠞');
      new_msg = new_msg.replace(/u/gi, '⠥');
      new_msg = new_msg.replace(/v/gi, '⠧');
      new_msg = new_msg.replace(/w/gi, '⠺');
      new_msg = new_msg.replace(/x/gi, '⠭');
      new_msg = new_msg.replace(/y/gi, '⠽');
      new_msg = new_msg.replace(/z/gi, '⠵');
      new_msg = new_msg.replace(/1/gi, '⠼⠁');
      new_msg = new_msg.replace(/2/gi, '⠼⠃');
      new_msg = new_msg.replace(/3/gi, '⠼⠉');
      new_msg = new_msg.replace(/4/gi, '⠼⠙');
      new_msg = new_msg.replace(/5/gi, '⠼⠑');
      new_msg = new_msg.replace(/6/gi, '⠼⠋');
      new_msg = new_msg.replace(/7/gi, '⠼⠛');
      new_msg = new_msg.replace(/8/gi, '⠼⠓');
      new_msg = new_msg.replace(/9/gi, '⠼⠊');
      new_msg = new_msg.replace(/0/gi, '⠼⠚');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////GREEKIFIED TEXT
function greek_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/greek /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/greek /i, '');
    new_msg = new_msg.replace(/a/gi, 'α');
    new_msg = new_msg.replace(/b/gi, 'β');
    new_msg = new_msg.replace(/c/gi, 'ς');
    new_msg = new_msg.replace(/d/gi, 'δ');
    new_msg = new_msg.replace(/e/gi, 'ε');
    new_msg = new_msg.replace(/f/gi, 'ƒ');
    new_msg = new_msg.replace(/g/gi, 'g');
    new_msg = new_msg.replace(/h/gi, 'н');
    new_msg = new_msg.replace(/i/gi, 'ι');
    new_msg = new_msg.replace(/j/gi, 'j');
    new_msg = new_msg.replace(/k/gi, 'κ');
    new_msg = new_msg.replace(/l/gi, 'ℓ');
    new_msg = new_msg.replace(/m/gi, 'м');
    new_msg = new_msg.replace(/n/gi, 'η');
    new_msg = new_msg.replace(/o/gi, 'ο');
    new_msg = new_msg.replace(/p/gi, 'ρ');
    new_msg = new_msg.replace(/q/gi, 'φ');
    new_msg = new_msg.replace(/r/gi, 'я');
    new_msg = new_msg.replace(/s/gi, 's');
    new_msg = new_msg.replace(/t/gi, 'τ');
    new_msg = new_msg.replace(/u/gi, 'μ');
    new_msg = new_msg.replace(/v/gi, 'v');
    new_msg = new_msg.replace(/w/gi, 'ω');
    new_msg = new_msg.replace(/x/gi, 'χ');
    new_msg = new_msg.replace(/y/gi, 'λ');
    new_msg = new_msg.replace(/z/gi, 'ζ');
    document.getElementById("message").value = new_msg;
  }
}

function greek_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/greek /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/greek /i, '');
      new_msg = new_msg.replace(/a/gi, 'α');
      new_msg = new_msg.replace(/b/gi, 'β');
      new_msg = new_msg.replace(/c/gi, 'ς');
      new_msg = new_msg.replace(/d/gi, 'δ');
      new_msg = new_msg.replace(/e/gi, 'ε');
      new_msg = new_msg.replace(/f/gi, 'ƒ');
      new_msg = new_msg.replace(/g/gi, 'g');
      new_msg = new_msg.replace(/h/gi, 'н');
      new_msg = new_msg.replace(/i/gi, 'ι');
      new_msg = new_msg.replace(/j/gi, 'j');
      new_msg = new_msg.replace(/k/gi, 'κ');
      new_msg = new_msg.replace(/l/gi, 'ℓ');
      new_msg = new_msg.replace(/m/gi, 'м');
      new_msg = new_msg.replace(/n/gi, 'η');
      new_msg = new_msg.replace(/o/gi, 'ο');
      new_msg = new_msg.replace(/p/gi, 'ρ');
      new_msg = new_msg.replace(/q/gi, 'φ');
      new_msg = new_msg.replace(/r/gi, 'я');
      new_msg = new_msg.replace(/s/gi, 's');
      new_msg = new_msg.replace(/t/gi, 'τ');
      new_msg = new_msg.replace(/u/gi, 'μ');
      new_msg = new_msg.replace(/v/gi, 'v');
      new_msg = new_msg.replace(/w/gi, 'ω');
      new_msg = new_msg.replace(/x/gi, 'χ');
      new_msg = new_msg.replace(/y/gi, 'λ');
      new_msg = new_msg.replace(/z/gi, 'ζ');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////MORSE CODE
function morse_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/mc /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/mc /i, '');
    new_msg = new_msg.replace(/a/gi, '.-//');
    new_msg = new_msg.replace(/b/gi, '-...//');
    new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//');
    new_msg = new_msg.replace(/d/gi, '-..//');
    new_msg = new_msg.replace(/e/gi, './/');
    new_msg = new_msg.replace(/f/gi, '..-.//');
    new_msg = new_msg.replace(/g/gi, '--.//');
    new_msg = new_msg.replace(/h/gi, '....//');
    new_msg = new_msg.replace(/i/gi, '..//');
    new_msg = new_msg.replace(/j/gi, '.---//');
    new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//');
    new_msg = new_msg.replace(/l/gi, '.-..//');
    new_msg = new_msg.replace(/m/gi, '--//');
    new_msg = new_msg.replace(/n/gi, '-.//');
    new_msg = new_msg.replace(/o/gi, '---//');
    new_msg = new_msg.replace(/p/gi, '.--.//');
    new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//');
    new_msg = new_msg.replace(/r/gi, '.-.//');
    new_msg = new_msg.replace(/s/gi, '...//');
    new_msg = new_msg.replace(/t/gi, '-//');
    new_msg = new_msg.replace(/u/gi, '..-//');
    new_msg = new_msg.replace(/v/gi, '...-//');
    new_msg = new_msg.replace(/w/gi, '.--//');
    new_msg = new_msg.replace(/x/gi, '-..-//');
    new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//');
    new_msg = new_msg.replace(/z/gi, '--..////');
    document.getElementById("message").value = new_msg;
  }
}

function morse_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/mc /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/mc /i, '');
      new_msg = new_msg.replace(/a/gi, '.-//');
      new_msg = new_msg.replace(/b/gi, '-...//');
      new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/d/gi, '-..//');
      new_msg = new_msg.replace(/e/gi, './/');
      new_msg = new_msg.replace(/f/gi, '..-.//');
      new_msg = new_msg.replace(/g/gi, '--.//');
      new_msg = new_msg.replace(/h/gi, '....//');
      new_msg = new_msg.replace(/i/gi, '..//');
      new_msg = new_msg.replace(/j/gi, '.---//');
      new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/l/gi, '.-..//');
      new_msg = new_msg.replace(/m/gi, '--//');
      new_msg = new_msg.replace(/n/gi, '-.//');
      new_msg = new_msg.replace(/o/gi, '---//');
      new_msg = new_msg.replace(/p/gi, '.--.//');
      new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/r/gi, '.-.//');
      new_msg = new_msg.replace(/s/gi, '...//');
      new_msg = new_msg.replace(/t/gi, '-//');
      new_msg = new_msg.replace(/u/gi, '..-//');
      new_msg = new_msg.replace(/v/gi, '...-//');
      new_msg = new_msg.replace(/w/gi, '.--//');
      new_msg = new_msg.replace(/x/gi, '-..-//');
      new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/z/gi, '--..////');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////

////////////////////// SEKRIT CHAT M0D3

Math.irandom = new Function('min', 'max', 'return Math.floor(Math.random() * (max - min + 1)) + min;')

function sekrit_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/s /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/s /i, '');
    try {
      for (i = 0; i < new_msg.match(/\./gi).length; i++)
        if (Math.random() > 0.9)
          new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
      new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
    } catch(e) { /* there are no dots in our message */ }
    for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], "gi"), values(replacements)[i]);
    document.getElementById("message").value = new_msg;
  }
}

function sekrit_post() {
  var old_msg = ""; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/s /i);
    if (index_num === 0) {
      try {
        for (i = 0; i < new_msg.match(/\./gi).length; i++)
          if (Math.random() > 0.9)
            new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
        new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
      } catch(e) { /* there are no dots in our message */ }
      for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], "gi"), values(replacements)[i]);
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}

///////////////////// MANAGES THE RAINBOW TEXT SYSTEM
function rainbow_() {
  var old_msg = document.getElementById("message").value;
  new_msg = rainbowText(old_msg);
  document.getElementById("message").value = new_msg;
}

function inject_rainbow() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "rainbow_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area" title="Rainbow" class="fontbutton" style="font-size: 14px;">Rb</label>';
  var what = document.getElementById("click_area");
  var whot = document.getElementById("format-rainbow");
  if (getCookie('CB_rainbow') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_rainbow', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_rainbow', '0', 1);
    }
  });
}

function rainbow_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
/////////////////////RANDOM CHARACTER COLOR
function random_() {
  var old_msg = document.getElementById("message").value;
  new_msg = randomText(old_msg);
  document.getElementById("message").value = new_msg;
}

function inject_random() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "random_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" class="fontbutton" style="font-size: 14px;">Rn</label>';
  var what = document.getElementById("click_area_random");
  var whot = document.getElementById("format-random");
  if (getCookie('CB_random') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_random', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_random', '0', 1);
    }
  });
}

function random_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
////////////////////GRADIENT MSG COLOR
function gradient_() {
  var old_msg = document.getElementById("message").value;
  var new_msg = gradientText(old_msg);
  document.getElementById("message").value = new_msg;
}

function inject_gradient() {
  var where = document.getElementById("chatbox_messenger_form").getElementsByTagName("table")[1].getElementsByTagName(
    "tr")[0];
  var chil_where = where.children;
  var the_body = document.createElement("td");
  the_body.setAttribute("id", "gradient_button");
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName("td")[0].innerHTML =
    '<input name="gradient" id="format-gradient" class="format-message" type="checkbox"><label id="click_area_gradient" title="Gradient" class="fontbutton" style="font-size: 14px;">Gd</label>';
  var what = document.getElementById("click_area_gradient");
  var whot = document.getElementById("format-gradient");
  if (getCookie('CB_gradient') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener("click", function () {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_gradient', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_gradient', '0', 1);
    }
  });
}

function gradient_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVASCRIPT SYNTAX
function js_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function js_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/js /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/js /i, '');
      msg_ray[i] = jsText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVA SYNTAX
function java_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function java_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/java /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/java /i, '');
      msg_ray[i] = javaText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////VBSCRIPT SYNTAX
function vbs_() {
  var old_msg = document.getElementById("message").value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById("message").value = new_msg;
  }
}

function vbs_post() {
  var old_msg = "";
  if (document.getElementsByTagName("textarea")[1] === undefined) old_msg = document.getElementsByTagName("textarea")[0]
    .value;
  else old_msg = document.getElementsByTagName("textarea")[1].value;
  var msg_ray = old_msg.split("\n");
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/vbs /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/vbs /i, '');
      msg_ray[i] = vbsText(msg_ray[i]);
      if (document.getElementsByTagName("textarea")[1] === undefined) document.getElementsByTagName("textarea")[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName("textarea")[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
/////////////////////MANAGES THE EDITING OF CSS
function edit_css() {
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[7].style.cssText = cssMsg;
  // / CSS for label that says "Message:" .. +1 for every new button
  document.getElementById("chatbox_messenger_form").getElementsByTagName("label")[7].innerHTML = "Message:";
  // / Edits innerHTML so theres no space between Message and the colon .. +1
  // for every new button
  document.getElementById("submit_button").style.cssText = cssButton;
  document.getElementById("submit_button").value = "SEND";
  // / CSS for Send button
  document.getElementById("chatbox_members").style.cssText = cssLine;
  // / CSS for the line along the members and chatbox
  document.getElementById("chatbox").style.cssText = cssChat;
  // / CSS to eliminate chat glitching and shift over the chat messages a bit
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[11].innerHTML = "";
  document.getElementById("chatbox_messenger_form").getElementsByTagName("td")[11].style.width = "0px";
  // / CSS for removing a spacer; removing node diddnt work well so im just
  // making it nonvisible. +1 for every new button
  document.getElementsByClassName("cattitle")[0].style.paddingLeft = "4px";
  // // Move over the title "Chatbox" a bit
}
/////////////////////
/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW
function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp("_smilie", "gi"), smilie_code);
  change_this = change_this.replace(new RegExp("_title", "gi"), smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
  change_this = change_this.replace(new RegExp("_link", "gi"), smilie_url);
  return change_this;
}

function inject_smilie(i) {
  var get_place = document.getElementsByTagName("table")[2];
  if (get_place.innerHTML == "") {
    var the_body = document.createElement("tbody");
    get_place.appendChild(the_body);
    get_place.getElementsByTagName("tbody")[0].innerHTML = td_array;
    var counter = 0;
    var coconut = 0;
    if(i == 1){
    	for (var x = 0; x < Object.keys(emoticon_1).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_1)[x][0] + quote, values(emoticon_1)[x][1], values(emoticon_1)[x][2]);
    	      counter++;
    	    }
    }else if(i == 2){
    	for (var x = 0; x < Object.keys(emoticon_2).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_2)[x][0] + quote, values(emoticon_2)[x][1], values(emoticon_2)[x][2]);
    	      counter++;
    	    }
    }else if(i == 3){
    	for (var x = 0; x < Object.keys(emoticon_3).length; x++) {
    	      // console.log(counter + " " + coconut + " " + x);
    	      if (counter == 8) {
    	        counter = 0;
    	        coconut++;
    	        var the_tr = document.createElement("tr");
    	        get_place.getElementsByTagName("tbody")[0].appendChild(the_tr);
    	        get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].innerHTML = td_array;
    	      }
    	      get_place.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[coconut].getElementsByTagName("td")[counter]
    	        .innerHTML = the_base(quote + values(emoticon_3)[x][0] + quote, values(emoticon_3)[x][1], values(emoticon_3)[x][2]);
    	      counter++;
    	    }
    }
  }
}
/////////////////////
/////////////////////FIX POST PAGE CSS
function post_page_editor() {
  var clear = "";
  var hide = "display:none;";
  if (getCookie('post_condition') == '1') {
    post_button_num = 1;
    document.getElementById("text_edit").style.cssText = hide;
    document.getElementById("html_edit").style.cssText = clear;
  } else {
    post_button_num = 0;
    document.getElementById("text_edit").style.cssText = clear;
    document.getElementById("html_edit").style.cssText = hide;
  }
  document.getElementById("text_editor_cmd_switchmode").addEventListener("click", function () {
    // console.log("it changed" + post_button_num);
    if (post_button_num == 0) {
      setCookie('post_condition', '1', 1);
      post_button_num = 1;
      document.getElementById("text_edit").style.cssText = hide;
      document.getElementById("html_edit").style.cssText = clear;
    } else if (post_button_num == 1) {
      setCookie('post_condition', '0', 1);
      post_button_num = 0;
      document.getElementById("text_edit").style.cssText = clear;
      document.getElementById("html_edit").style.cssText = hide;
    }
  });
}
/////////////////////
/////////////////////RUNS SCRIPT
window.addEventListener('load', function () { /* shit goes down in here */
  if (is.ie() || is.safari() || is.opera()) alert("This browser is unsupported by Swearify.");
  else {
    avacwebChat();
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=1&mode=smilies") inject_smilie(1);
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=2&mode=smilies") inject_smilie(2);
    if (window.location.href === "http://aimgames.forummotion.com/post?categ=3&mode=smilies") inject_smilie(3);
    if (window.location.href === "http://aimgames.forummotion.com/chatbox/index.forum?page=front&" || window.location
      .href === "http://aimgames.forummotion.com/chatbox/index.forum" || window.location.href ===
      "http://aimgames.forummotion.com/chatbox/index.forum?archives=1" || window.location.href ===
      "http://aimgames.forummotion.com/chatbox/index.forum?archives") {
      inject_rainbow();
      inject_random();
      inject_gradient();
      edit_css();
      $(document).on("keydown", function (e) {
        if (e.which === 13 || e.which === 45) run_();
      });
    } else {
      if (window.location.href === "http://aimgames.forummotion.com/post") post_page_editor();
      if (typeof document.getElementsByTagName("textarea")[1] === 'undefined') { // //PREVIEW
        // PAGE
        loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
        refined_loc = document.getElementById("parent_editor_simple").getElementsByClassName("row2")[0];
      } else {
        loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1];
        cssTd = "padding-top:5px;";
        var new_td = document.createElement("td");
        loc.appendChild(new_td).style.cssText = cssTd;
        refined_loc = document.getElementById("quick_reply").getElementsByClassName("row2")[1].getElementsByTagName(
          "td")[0];
      }
      var element = document.createElement("label");
      refined_loc.appendChild(element).style.cssText = cssLabel;
      setInterval(function () {
        var area = document.getElementsByTagName("textarea")[0]; // //this
        // is
        // preview
        // window
        // shit
        if (typeof document.getElementsByTagName("textarea")[1] === 'object') area.value = document.getElementsByTagName(
          "textarea")[1].value;
        if (typeof area !== 'undefined') Countable.once(area, function (counter) {
          if (loc.getElementsByTagName("label")[0].innerHTML != values(counter)[4] + " characters") loc.getElementsByTagName(
            "label")[0].innerHTML = values(counter)[4] + " characters";
          if (values(counter)[4] > 63500) element.style.cssText += "color:red;";
          else if (values(counter)[4] < 63500) element.style.cssText = cssLabel;
        });
      }, 3000);
      // ////////
      $(document).on("keydown", function (e) {
        if (e.which === 13) run_post();
      });
    }
  }
}, false);

function inject_css(css) {
    var head;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    var gstyle = document.createElement('style');
    gstyle.type = 'text/css';
    gstyle.innerHTML = css;
    head.appendChild(gstyle);
}

function injectJs(megastring) {
	var scr = document.createElement('script');
	scr.type="text/javascript";
	scr.id="achat_script";
	scr.innerHTML="avacweb_chat_config = {};\r\n" + megastring;
	document.getElementsByTagName('head')[0].appendChild(scr);
	//document.body.appendChild(scr);
}

//  Copyright © 2015 Avacweb. All Rights Reserved.
function avacwebChat() {
	//var version = '2-0';
	var megastring = "\/*!\r\n * jQuery JavaScript Library v2.1.4\r\n * http:\/\/jquery.com\/\r\n *\r\n * Includes Sizzle.js\r\n * http:\/\/sizzlejs.com\/\r\n *\r\n * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors\r\n * Released under the MIT license\r\n * http:\/\/jquery.org\/license\r\n *\r\n * Date: 2015-04-28T16:01Z\r\n *\/\r\n\r\n(function( global, factory ) {\r\n\r\n\tif ( typeof module === \"object\" && typeof module.exports === \"object\" ) {\r\n\t\t\/\/ For CommonJS and CommonJS-like environments where a proper `window`\r\n\t\t\/\/ is present, execute the factory and get jQuery.\r\n\t\t\/\/ For environments that do not have a `window` with a `document`\r\n\t\t\/\/ (such as Node.js), expose a factory as module.exports.\r\n\t\t\/\/ This accentuates the need for the creation of a real `window`.\r\n\t\t\/\/ e.g. var jQuery = require(\"jquery\")(window);\r\n\t\t\/\/ See ticket #14549 for more info.\r\n\t\tmodule.exports = global.document ?\r\n\t\t\tfactory( global, true ) :\r\n\t\t\tfunction( w ) {\r\n\t\t\t\tif ( !w.document ) {\r\n\t\t\t\t\tthrow new Error( \"jQuery requires a window with a document\" );\r\n\t\t\t\t}\r\n\t\t\t\treturn factory( w );\r\n\t\t\t};\r\n\t} else {\r\n\t\tfactory( global );\r\n\t}\r\n\r\n\/\/ Pass this if window is not defined yet\r\n}(typeof window !== \"undefined\" ? window : this, function( window, noGlobal ) {\r\n\r\n\/\/ Support: Firefox 18+\r\n\/\/ Can\'t be in strict mode, several libs including ASP.NET trace\r\n\/\/ the stack via arguments.caller.callee and Firefox dies if\r\n\/\/ you try to trace through \"use strict\" call chains. (#13335)\r\n\/\/\r\n\r\nvar arr = [];\r\n\r\nvar slice = arr.slice;\r\n\r\nvar concat = arr.concat;\r\n\r\nvar push = arr.push;\r\n\r\nvar indexOf = arr.indexOf;\r\n\r\nvar class2type = {};\r\n\r\nvar toString = class2type.toString;\r\n\r\nvar hasOwn = class2type.hasOwnProperty;\r\n\r\nvar support = {};\r\n\r\n\r\n\r\nvar\r\n\t\/\/ Use the correct document accordingly with window argument (sandbox)\r\n\tdocument = window.document,\r\n\r\n\tversion = \"2.1.4\",\r\n\r\n\t\/\/ Define a local copy of jQuery\r\n\tjQuery = function( selector, context ) {\r\n\t\t\/\/ The jQuery object is actually just the init constructor \'enhanced\'\r\n\t\t\/\/ Need init if jQuery is called (just allow error to be thrown if not included)\r\n\t\treturn new jQuery.fn.init( selector, context );\r\n\t},\r\n\r\n\t\/\/ Support: Android<4.1\r\n\t\/\/ Make sure we trim BOM and NBSP\r\n\trtrim = \/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$\/g,\r\n\r\n\t\/\/ Matches dashed string for camelizing\r\n\trmsPrefix = \/^-ms-\/,\r\n\trdashAlpha = \/-([\\da-z])\/gi,\r\n\r\n\t\/\/ Used by jQuery.camelCase as callback to replace()\r\n\tfcamelCase = function( all, letter ) {\r\n\t\treturn letter.toUpperCase();\r\n\t};\r\n\r\njQuery.fn = jQuery.prototype = {\r\n\t\/\/ The current version of jQuery being used\r\n\tjquery: version,\r\n\r\n\tconstructor: jQuery,\r\n\r\n\t\/\/ Start with an empty selector\r\n\tselector: \"\",\r\n\r\n\t\/\/ The default length of a jQuery object is 0\r\n\tlength: 0,\r\n\r\n\ttoArray: function() {\r\n\t\treturn slice.call( this );\r\n\t},\r\n\r\n\t\/\/ Get the Nth element in the matched element set OR\r\n\t\/\/ Get the whole matched element set as a clean array\r\n\tget: function( num ) {\r\n\t\treturn num != null ?\r\n\r\n\t\t\t\/\/ Return just the one element from the set\r\n\t\t\t( num < 0 ? this[ num + this.length ] : this[ num ] ) :\r\n\r\n\t\t\t\/\/ Return all the elements in a clean array\r\n\t\t\tslice.call( this );\r\n\t},\r\n\r\n\t\/\/ Take an array of elements and push it onto the stack\r\n\t\/\/ (returning the new matched element set)\r\n\tpushStack: function( elems ) {\r\n\r\n\t\t\/\/ Build a new jQuery matched element set\r\n\t\tvar ret = jQuery.merge( this.constructor(), elems );\r\n\r\n\t\t\/\/ Add the old object onto the stack (as a reference)\r\n\t\tret.prevObject = this;\r\n\t\tret.context = this.context;\r\n\r\n\t\t\/\/ Return the newly-formed element set\r\n\t\treturn ret;\r\n\t},\r\n\r\n\t\/\/ Execute a callback for every element in the matched set.\r\n\t\/\/ (You can seed the arguments with an array of args, but this is\r\n\t\/\/ only used internally.)\r\n\teach: function( callback, args ) {\r\n\t\treturn jQuery.each( this, callback, args );\r\n\t},\r\n\r\n\tmap: function( callback ) {\r\n\t\treturn this.pushStack( jQuery.map(this, function( elem, i ) {\r\n\t\t\treturn callback.call( elem, i, elem );\r\n\t\t}));\r\n\t},\r\n\r\n\tslice: function() {\r\n\t\treturn this.pushStack( slice.apply( this, arguments ) );\r\n\t},\r\n\r\n\tfirst: function() {\r\n\t\treturn this.eq( 0 );\r\n\t},\r\n\r\n\tlast: function() {\r\n\t\treturn this.eq( -1 );\r\n\t},\r\n\r\n\teq: function( i ) {\r\n\t\tvar len = this.length,\r\n\t\t\tj = +i + ( i < 0 ? len : 0 );\r\n\t\treturn this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );\r\n\t},\r\n\r\n\tend: function() {\r\n\t\treturn this.prevObject || this.constructor(null);\r\n\t},\r\n\r\n\t\/\/ For internal use only.\r\n\t\/\/ Behaves like an Array\'s method, not like a jQuery method.\r\n\tpush: push,\r\n\tsort: arr.sort,\r\n\tsplice: arr.splice\r\n};\r\n\r\njQuery.extend = jQuery.fn.extend = function() {\r\n\tvar options, name, src, copy, copyIsArray, clone,\r\n\t\ttarget = arguments[0] || {},\r\n\t\ti = 1,\r\n\t\tlength = arguments.length,\r\n\t\tdeep = false;\r\n\r\n\t\/\/ Handle a deep copy situation\r\n\tif ( typeof target === \"boolean\" ) {\r\n\t\tdeep = target;\r\n\r\n\t\t\/\/ Skip the boolean and the target\r\n\t\ttarget = arguments[ i ] || {};\r\n\t\ti++;\r\n\t}\r\n\r\n\t\/\/ Handle case when target is a string or something (possible in deep copy)\r\n\tif ( typeof target !== \"object\" && !jQuery.isFunction(target) ) {\r\n\t\ttarget = {};\r\n\t}\r\n\r\n\t\/\/ Extend jQuery itself if only one argument is passed\r\n\tif ( i === length ) {\r\n\t\ttarget = this;\r\n\t\ti--;\r\n\t}\r\n\r\n\tfor ( ; i < length; i++ ) {\r\n\t\t\/\/ Only deal with non-null\/undefined values\r\n\t\tif ( (options = arguments[ i ]) != null ) {\r\n\t\t\t\/\/ Extend the base object\r\n\t\t\tfor ( name in options ) {\r\n\t\t\t\tsrc = target[ name ];\r\n\t\t\t\tcopy = options[ name ];\r\n\r\n\t\t\t\t\/\/ Prevent never-ending loop\r\n\t\t\t\tif ( target === copy ) {\r\n\t\t\t\t\tcontinue;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Recurse if we\'re merging plain objects or arrays\r\n\t\t\t\tif ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {\r\n\t\t\t\t\tif ( copyIsArray ) {\r\n\t\t\t\t\t\tcopyIsArray = false;\r\n\t\t\t\t\t\tclone = src && jQuery.isArray(src) ? src : [];\r\n\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tclone = src && jQuery.isPlainObject(src) ? src : {};\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Never move original objects, clone them\r\n\t\t\t\t\ttarget[ name ] = jQuery.extend( deep, clone, copy );\r\n\r\n\t\t\t\t\/\/ Don\'t bring in undefined values\r\n\t\t\t\t} else if ( copy !== undefined ) {\r\n\t\t\t\t\ttarget[ name ] = copy;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Return the modified object\r\n\treturn target;\r\n};\r\n\r\njQuery.extend({\r\n\t\/\/ Unique for each copy of jQuery on the page\r\n\texpando: \"jQuery\" + ( version + Math.random() ).replace( \/\\D\/g, \"\" ),\r\n\r\n\t\/\/ Assume jQuery is ready without the ready module\r\n\tisReady: true,\r\n\r\n\terror: function( msg ) {\r\n\t\tthrow new Error( msg );\r\n\t},\r\n\r\n\tnoop: function() {},\r\n\r\n\tisFunction: function( obj ) {\r\n\t\treturn jQuery.type(obj) === \"function\";\r\n\t},\r\n\r\n\tisArray: Array.isArray,\r\n\r\n\tisWindow: function( obj ) {\r\n\t\treturn obj != null && obj === obj.window;\r\n\t},\r\n\r\n\tisNumeric: function( obj ) {\r\n\t\t\/\/ parseFloat NaNs numeric-cast false positives (null|true|false|\"\")\r\n\t\t\/\/ ...but misinterprets leading-number strings, particularly hex literals (\"0x...\")\r\n\t\t\/\/ subtraction forces infinities to NaN\r\n\t\t\/\/ adding 1 corrects loss of precision from parseFloat (#15100)\r\n\t\treturn !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;\r\n\t},\r\n\r\n\tisPlainObject: function( obj ) {\r\n\t\t\/\/ Not plain objects:\r\n\t\t\/\/ - Any object or value whose internal [[Class]] property is not \"[object Object]\"\r\n\t\t\/\/ - DOM nodes\r\n\t\t\/\/ - window\r\n\t\tif ( jQuery.type( obj ) !== \"object\" || obj.nodeType || jQuery.isWindow( obj ) ) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\tif ( obj.constructor &&\r\n\t\t\t\t!hasOwn.call( obj.constructor.prototype, \"isPrototypeOf\" ) ) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\r\n\t\t\/\/ If the function hasn\'t returned already, we\'re confident that\r\n\t\t\/\/ |obj| is a plain object, created by {} or constructed with new Object\r\n\t\treturn true;\r\n\t},\r\n\r\n\tisEmptyObject: function( obj ) {\r\n\t\tvar name;\r\n\t\tfor ( name in obj ) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t\treturn true;\r\n\t},\r\n\r\n\ttype: function( obj ) {\r\n\t\tif ( obj == null ) {\r\n\t\t\treturn obj + \"\";\r\n\t\t}\r\n\t\t\/\/ Support: Android<4.0, iOS<6 (functionish RegExp)\r\n\t\treturn typeof obj === \"object\" || typeof obj === \"function\" ?\r\n\t\t\tclass2type[ toString.call(obj) ] || \"object\" :\r\n\t\t\ttypeof obj;\r\n\t},\r\n\r\n\t\/\/ Evaluates a script in a global context\r\n\tglobalEval: function( code ) {\r\n\t\tvar script,\r\n\t\t\tindirect = eval;\r\n\r\n\t\tcode = jQuery.trim( code );\r\n\r\n\t\tif ( code ) {\r\n\t\t\t\/\/ If the code includes a valid, prologue position\r\n\t\t\t\/\/ strict mode pragma, execute code by injecting a\r\n\t\t\t\/\/ script tag into the document.\r\n\t\t\tif ( code.indexOf(\"use strict\") === 1 ) {\r\n\t\t\t\tscript = document.createElement(\"script\");\r\n\t\t\t\tscript.text = code;\r\n\t\t\t\tdocument.head.appendChild( script ).parentNode.removeChild( script );\r\n\t\t\t} else {\r\n\t\t\t\/\/ Otherwise, avoid the DOM node creation, insertion\r\n\t\t\t\/\/ and removal by using an indirect global eval\r\n\t\t\t\tindirect( code );\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t\/\/ Convert dashed to camelCase; used by the css and data modules\r\n\t\/\/ Support: IE9-11+\r\n\t\/\/ Microsoft forgot to hump their vendor prefix (#9572)\r\n\tcamelCase: function( string ) {\r\n\t\treturn string.replace( rmsPrefix, \"ms-\" ).replace( rdashAlpha, fcamelCase );\r\n\t},\r\n\r\n\tnodeName: function( elem, name ) {\r\n\t\treturn elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();\r\n\t},\r\n\r\n\t\/\/ args is for internal usage only\r\n\teach: function( obj, callback, args ) {\r\n\t\tvar value,\r\n\t\t\ti = 0,\r\n\t\t\tlength = obj.length,\r\n\t\t\tisArray = isArraylike( obj );\r\n\r\n\t\tif ( args ) {\r\n\t\t\tif ( isArray ) {\r\n\t\t\t\tfor ( ; i < length; i++ ) {\r\n\t\t\t\t\tvalue = callback.apply( obj[ i ], args );\r\n\r\n\t\t\t\t\tif ( value === false ) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor ( i in obj ) {\r\n\t\t\t\t\tvalue = callback.apply( obj[ i ], args );\r\n\r\n\t\t\t\t\tif ( value === false ) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\/\/ A special, fast, case for the most common use of each\r\n\t\t} else {\r\n\t\t\tif ( isArray ) {\r\n\t\t\t\tfor ( ; i < length; i++ ) {\r\n\t\t\t\t\tvalue = callback.call( obj[ i ], i, obj[ i ] );\r\n\r\n\t\t\t\t\tif ( value === false ) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor ( i in obj ) {\r\n\t\t\t\t\tvalue = callback.call( obj[ i ], i, obj[ i ] );\r\n\r\n\t\t\t\t\tif ( value === false ) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn obj;\r\n\t},\r\n\r\n\t\/\/ Support: Android<4.1\r\n\ttrim: function( text ) {\r\n\t\treturn text == null ?\r\n\t\t\t\"\" :\r\n\t\t\t( text + \"\" ).replace( rtrim, \"\" );\r\n\t},\r\n\r\n\t\/\/ results is for internal usage only\r\n\tmakeArray: function( arr, results ) {\r\n\t\tvar ret = results || [];\r\n\r\n\t\tif ( arr != null ) {\r\n\t\t\tif ( isArraylike( Object(arr) ) ) {\r\n\t\t\t\tjQuery.merge( ret,\r\n\t\t\t\t\ttypeof arr === \"string\" ?\r\n\t\t\t\t\t[ arr ] : arr\r\n\t\t\t\t);\r\n\t\t\t} else {\r\n\t\t\t\tpush.call( ret, arr );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn ret;\r\n\t},\r\n\r\n\tinArray: function( elem, arr, i ) {\r\n\t\treturn arr == null ? -1 : indexOf.call( arr, elem, i );\r\n\t},\r\n\r\n\tmerge: function( first, second ) {\r\n\t\tvar len = +second.length,\r\n\t\t\tj = 0,\r\n\t\t\ti = first.length;\r\n\r\n\t\tfor ( ; j < len; j++ ) {\r\n\t\t\tfirst[ i++ ] = second[ j ];\r\n\t\t}\r\n\r\n\t\tfirst.length = i;\r\n\r\n\t\treturn first;\r\n\t},\r\n\r\n\tgrep: function( elems, callback, invert ) {\r\n\t\tvar callbackInverse,\r\n\t\t\tmatches = [],\r\n\t\t\ti = 0,\r\n\t\t\tlength = elems.length,\r\n\t\t\tcallbackExpect = !invert;\r\n\r\n\t\t\/\/ Go through the array, only saving the items\r\n\t\t\/\/ that pass the validator function\r\n\t\tfor ( ; i < length; i++ ) {\r\n\t\t\tcallbackInverse = !callback( elems[ i ], i );\r\n\t\t\tif ( callbackInverse !== callbackExpect ) {\r\n\t\t\t\tmatches.push( elems[ i ] );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn matches;\r\n\t},\r\n\r\n\t\/\/ arg is for internal usage only\r\n\tmap: function( elems, callback, arg ) {\r\n\t\tvar value,\r\n\t\t\ti = 0,\r\n\t\t\tlength = elems.length,\r\n\t\t\tisArray = isArraylike( elems ),\r\n\t\t\tret = [];\r\n\r\n\t\t\/\/ Go through the array, translating each of the items to their new values\r\n\t\tif ( isArray ) {\r\n\t\t\tfor ( ; i < length; i++ ) {\r\n\t\t\t\tvalue = callback( elems[ i ], i, arg );\r\n\r\n\t\t\t\tif ( value != null ) {\r\n\t\t\t\t\tret.push( value );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\/\/ Go through every key on the object,\r\n\t\t} else {\r\n\t\t\tfor ( i in elems ) {\r\n\t\t\t\tvalue = callback( elems[ i ], i, arg );\r\n\r\n\t\t\t\tif ( value != null ) {\r\n\t\t\t\t\tret.push( value );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Flatten any nested arrays\r\n\t\treturn concat.apply( [], ret );\r\n\t},\r\n\r\n\t\/\/ A global GUID counter for objects\r\n\tguid: 1,\r\n\r\n\t\/\/ Bind a function to a context, optionally partially applying any\r\n\t\/\/ arguments.\r\n\tproxy: function( fn, context ) {\r\n\t\tvar tmp, args, proxy;\r\n\r\n\t\tif ( typeof context === \"string\" ) {\r\n\t\t\ttmp = fn[ context ];\r\n\t\t\tcontext = fn;\r\n\t\t\tfn = tmp;\r\n\t\t}\r\n\r\n\t\t\/\/ Quick check to determine if target is callable, in the spec\r\n\t\t\/\/ this throws a TypeError, but we will just return undefined.\r\n\t\tif ( !jQuery.isFunction( fn ) ) {\r\n\t\t\treturn undefined;\r\n\t\t}\r\n\r\n\t\t\/\/ Simulated bind\r\n\t\targs = slice.call( arguments, 2 );\r\n\t\tproxy = function() {\r\n\t\t\treturn fn.apply( context || this, args.concat( slice.call( arguments ) ) );\r\n\t\t};\r\n\r\n\t\t\/\/ Set the guid of unique handler to the same of original handler, so it can be removed\r\n\t\tproxy.guid = fn.guid = fn.guid || jQuery.guid++;\r\n\r\n\t\treturn proxy;\r\n\t},\r\n\r\n\tnow: Date.now,\r\n\r\n\t\/\/ jQuery.support is not used in Core but other projects attach their\r\n\t\/\/ properties to it so it needs to exist.\r\n\tsupport: support\r\n});\r\n\r\n\/\/ Populate the class2type map\r\njQuery.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\r\n\tclass2type[ \"[object \" + name + \"]\" ] = name.toLowerCase();\r\n});\r\n\r\nfunction isArraylike( obj ) {\r\n\r\n\t\/\/ Support: iOS 8.2 (not reproducible in simulator)\r\n\t\/\/ `in` check used to prevent JIT error (gh-2145)\r\n\t\/\/ hasOwn isn\'t used here due to false negatives\r\n\t\/\/ regarding Nodelist length in IE\r\n\tvar length = \"length\" in obj && obj.length,\r\n\t\ttype = jQuery.type( obj );\r\n\r\n\tif ( type === \"function\" || jQuery.isWindow( obj ) ) {\r\n\t\treturn false;\r\n\t}\r\n\r\n\tif ( obj.nodeType === 1 && length ) {\r\n\t\treturn true;\r\n\t}\r\n\r\n\treturn type === \"array\" || length === 0 ||\r\n\t\ttypeof length === \"number\" && length > 0 && ( length - 1 ) in obj;\r\n}\r\nvar Sizzle =\r\n\/*!\r\n * Sizzle CSS Selector Engine v2.2.0-pre\r\n * http:\/\/sizzlejs.com\/\r\n *\r\n * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors\r\n * Released under the MIT license\r\n * http:\/\/jquery.org\/license\r\n *\r\n * Date: 2014-12-16\r\n *\/\r\n(function( window ) {\r\n\r\nvar i,\r\n\tsupport,\r\n\tExpr,\r\n\tgetText,\r\n\tisXML,\r\n\ttokenize,\r\n\tcompile,\r\n\tselect,\r\n\toutermostContext,\r\n\tsortInput,\r\n\thasDuplicate,\r\n\r\n\t\/\/ Local document vars\r\n\tsetDocument,\r\n\tdocument,\r\n\tdocElem,\r\n\tdocumentIsHTML,\r\n\trbuggyQSA,\r\n\trbuggyMatches,\r\n\tmatches,\r\n\tcontains,\r\n\r\n\t\/\/ Instance-specific data\r\n\texpando = \"sizzle\" + 1 * new Date(),\r\n\tpreferredDoc = window.document,\r\n\tdirruns = 0,\r\n\tdone = 0,\r\n\tclassCache = createCache(),\r\n\ttokenCache = createCache(),\r\n\tcompilerCache = createCache(),\r\n\tsortOrder = function( a, b ) {\r\n\t\tif ( a === b ) {\r\n\t\t\thasDuplicate = true;\r\n\t\t}\r\n\t\treturn 0;\r\n\t},\r\n\r\n\t\/\/ General-purpose constants\r\n\tMAX_NEGATIVE = 1 << 31,\r\n\r\n\t\/\/ Instance methods\r\n\thasOwn = ({}).hasOwnProperty,\r\n\tarr = [],\r\n\tpop = arr.pop,\r\n\tpush_native = arr.push,\r\n\tpush = arr.push,\r\n\tslice = arr.slice,\r\n\t\/\/ Use a stripped-down indexOf as it\'s faster than native\r\n\t\/\/ http:\/\/jsperf.com\/thor-indexof-vs-for\/5\r\n\tindexOf = function( list, elem ) {\r\n\t\tvar i = 0,\r\n\t\t\tlen = list.length;\r\n\t\tfor ( ; i < len; i++ ) {\r\n\t\t\tif ( list[i] === elem ) {\r\n\t\t\t\treturn i;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn -1;\r\n\t},\r\n\r\n\tbooleans = \"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",\r\n\r\n\t\/\/ Regular expressions\r\n\r\n\t\/\/ Whitespace characters http:\/\/www.w3.org\/TR\/css3-selectors\/#whitespace\r\n\twhitespace = \"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",\r\n\t\/\/ http:\/\/www.w3.org\/TR\/css3-syntax\/#characters\r\n\tcharacterEncoding = \"(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+\",\r\n\r\n\t\/\/ Loosely modeled on CSS identifier characters\r\n\t\/\/ An unquoted value should be a CSS identifier http:\/\/www.w3.org\/TR\/css3-selectors\/#attribute-selectors\r\n\t\/\/ Proper syntax: http:\/\/www.w3.org\/TR\/CSS21\/syndata.html#value-def-identifier\r\n\tidentifier = characterEncoding.replace( \"w\", \"w#\" ),\r\n\r\n\t\/\/ Attribute selectors: http:\/\/www.w3.org\/TR\/selectors\/#attribute-selectors\r\n\tattributes = \"\\\\[\" + whitespace + \"*(\" + characterEncoding + \")(?:\" + whitespace +\r\n\t\t\/\/ Operator (capture 2)\r\n\t\t\"*([*^$|!~]?=)\" + whitespace +\r\n\t\t\/\/ \"Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]\"\r\n\t\t\"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\" + identifier + \"))|)\" + whitespace +\r\n\t\t\"*\\\\]\",\r\n\r\n\tpseudos = \":(\" + characterEncoding + \")(?:\\\\((\" +\r\n\t\t\/\/ To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:\r\n\t\t\/\/ 1. quoted (capture 3; capture 4 or capture 5)\r\n\t\t\"(\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|\" +\r\n\t\t\/\/ 2. simple (capture 6)\r\n\t\t\"((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\" + attributes + \")*)|\" +\r\n\t\t\/\/ 3. anything else (capture 2)\r\n\t\t\".*\" +\r\n\t\t\")\\\\)|)\",\r\n\r\n\t\/\/ Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter\r\n\trwhitespace = new RegExp( whitespace + \"+\", \"g\" ),\r\n\trtrim = new RegExp( \"^\" + whitespace + \"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\" + whitespace + \"+$\", \"g\" ),\r\n\r\n\trcomma = new RegExp( \"^\" + whitespace + \"*,\" + whitespace + \"*\" ),\r\n\trcombinators = new RegExp( \"^\" + whitespace + \"*([>+~]|\" + whitespace + \")\" + whitespace + \"*\" ),\r\n\r\n\trattributeQuotes = new RegExp( \"=\" + whitespace + \"*([^\\\\]\'\\\"]*?)\" + whitespace + \"*\\\\]\", \"g\" ),\r\n\r\n\trpseudo = new RegExp( pseudos ),\r\n\tridentifier = new RegExp( \"^\" + identifier + \"$\" ),\r\n\r\n\tmatchExpr = {\r\n\t\t\"ID\": new RegExp( \"^#(\" + characterEncoding + \")\" ),\r\n\t\t\"CLASS\": new RegExp( \"^\\\\.(\" + characterEncoding + \")\" ),\r\n\t\t\"TAG\": new RegExp( \"^(\" + characterEncoding.replace( \"w\", \"w*\" ) + \")\" ),\r\n\t\t\"ATTR\": new RegExp( \"^\" + attributes ),\r\n\t\t\"PSEUDO\": new RegExp( \"^\" + pseudos ),\r\n\t\t\"CHILD\": new RegExp( \"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\" + whitespace +\r\n\t\t\t\"*(even|odd|(([+-]|)(\\\\d*)n|)\" + whitespace + \"*(?:([+-]|)\" + whitespace +\r\n\t\t\t\"*(\\\\d+)|))\" + whitespace + \"*\\\\)|)\", \"i\" ),\r\n\t\t\"bool\": new RegExp( \"^(?:\" + booleans + \")$\", \"i\" ),\r\n\t\t\/\/ For use in libraries implementing .is()\r\n\t\t\/\/ We use this for POS matching in `select`\r\n\t\t\"needsContext\": new RegExp( \"^\" + whitespace + \"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\" +\r\n\t\t\twhitespace + \"*((?:-\\\\d)?\\\\d*)\" + whitespace + \"*\\\\)|)(?=[^-]|$)\", \"i\" )\r\n\t},\r\n\r\n\trinputs = \/^(?:input|select|textarea|button)$\/i,\r\n\trheader = \/^h\\d$\/i,\r\n\r\n\trnative = \/^[^{]+\\{\\s*\\[native \\w\/,\r\n\r\n\t\/\/ Easily-parseable\/retrievable ID or TAG or CLASS selectors\r\n\trquickExpr = \/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$\/,\r\n\r\n\trsibling = \/[+~]\/,\r\n\trescape = \/\'|\\\\\/g,\r\n\r\n\t\/\/ CSS escapes http:\/\/www.w3.org\/TR\/CSS21\/syndata.html#escaped-characters\r\n\trunescape = new RegExp( \"\\\\\\\\([\\\\da-f]{1,6}\" + whitespace + \"?|(\" + whitespace + \")|.)\", \"ig\" ),\r\n\tfunescape = function( _, escaped, escapedWhitespace ) {\r\n\t\tvar high = \"0x\" + escaped - 0x10000;\r\n\t\t\/\/ NaN means non-codepoint\r\n\t\t\/\/ Support: Firefox<24\r\n\t\t\/\/ Workaround erroneous numeric interpretation of +\"0x\"\r\n\t\treturn high !== high || escapedWhitespace ?\r\n\t\t\tescaped :\r\n\t\t\thigh < 0 ?\r\n\t\t\t\t\/\/ BMP codepoint\r\n\t\t\t\tString.fromCharCode( high + 0x10000 ) :\r\n\t\t\t\t\/\/ Supplemental Plane codepoint (surrogate pair)\r\n\t\t\t\tString.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );\r\n\t},\r\n\r\n\t\/\/ Used for iframes\r\n\t\/\/ See setDocument()\r\n\t\/\/ Removing the function wrapper causes a \"Permission Denied\"\r\n\t\/\/ error in IE\r\n\tunloadHandler = function() {\r\n\t\tsetDocument();\r\n\t};\r\n\r\n\/\/ Optimize for push.apply( _, NodeList )\r\ntry {\r\n\tpush.apply(\r\n\t\t(arr = slice.call( preferredDoc.childNodes )),\r\n\t\tpreferredDoc.childNodes\r\n\t);\r\n\t\/\/ Support: Android<4.0\r\n\t\/\/ Detect silently failing push.apply\r\n\tarr[ preferredDoc.childNodes.length ].nodeType;\r\n} catch ( e ) {\r\n\tpush = { apply: arr.length ?\r\n\r\n\t\t\/\/ Leverage slice if possible\r\n\t\tfunction( target, els ) {\r\n\t\t\tpush_native.apply( target, slice.call(els) );\r\n\t\t} :\r\n\r\n\t\t\/\/ Support: IE<9\r\n\t\t\/\/ Otherwise append directly\r\n\t\tfunction( target, els ) {\r\n\t\t\tvar j = target.length,\r\n\t\t\t\ti = 0;\r\n\t\t\t\/\/ Can\'t trust NodeList.length\r\n\t\t\twhile ( (target[j++] = els[i++]) ) {}\r\n\t\t\ttarget.length = j - 1;\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction Sizzle( selector, context, results, seed ) {\r\n\tvar match, elem, m, nodeType,\r\n\t\t\/\/ QSA vars\r\n\t\ti, groups, old, nid, newContext, newSelector;\r\n\r\n\tif ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {\r\n\t\tsetDocument( context );\r\n\t}\r\n\r\n\tcontext = context || document;\r\n\tresults = results || [];\r\n\tnodeType = context.nodeType;\r\n\r\n\tif ( typeof selector !== \"string\" || !selector ||\r\n\t\tnodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {\r\n\r\n\t\treturn results;\r\n\t}\r\n\r\n\tif ( !seed && documentIsHTML ) {\r\n\r\n\t\t\/\/ Try to shortcut find operations when possible (e.g., not under DocumentFragment)\r\n\t\tif ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {\r\n\t\t\t\/\/ Speed-up: Sizzle(\"#ID\")\r\n\t\t\tif ( (m = match[1]) ) {\r\n\t\t\t\tif ( nodeType === 9 ) {\r\n\t\t\t\t\telem = context.getElementById( m );\r\n\t\t\t\t\t\/\/ Check parentNode to catch when Blackberry 4.6 returns\r\n\t\t\t\t\t\/\/ nodes that are no longer in the document (jQuery #6963)\r\n\t\t\t\t\tif ( elem && elem.parentNode ) {\r\n\t\t\t\t\t\t\/\/ Handle the case where IE, Opera, and Webkit return items\r\n\t\t\t\t\t\t\/\/ by name instead of ID\r\n\t\t\t\t\t\tif ( elem.id === m ) {\r\n\t\t\t\t\t\t\tresults.push( elem );\r\n\t\t\t\t\t\t\treturn results;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treturn results;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\t\/\/ Context is not a document\r\n\t\t\t\t\tif ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&\r\n\t\t\t\t\t\tcontains( context, elem ) && elem.id === m ) {\r\n\t\t\t\t\t\tresults.push( elem );\r\n\t\t\t\t\t\treturn results;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\/\/ Speed-up: Sizzle(\"TAG\")\r\n\t\t\t} else if ( match[2] ) {\r\n\t\t\t\tpush.apply( results, context.getElementsByTagName( selector ) );\r\n\t\t\t\treturn results;\r\n\r\n\t\t\t\/\/ Speed-up: Sizzle(\".CLASS\")\r\n\t\t\t} else if ( (m = match[3]) && support.getElementsByClassName ) {\r\n\t\t\t\tpush.apply( results, context.getElementsByClassName( m ) );\r\n\t\t\t\treturn results;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ QSA path\r\n\t\tif ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {\r\n\t\t\tnid = old = expando;\r\n\t\t\tnewContext = context;\r\n\t\t\tnewSelector = nodeType !== 1 && selector;\r\n\r\n\t\t\t\/\/ qSA works strangely on Element-rooted queries\r\n\t\t\t\/\/ We can work around this by specifying an extra ID on the root\r\n\t\t\t\/\/ and working up from there (Thanks to Andrew Dupont for the technique)\r\n\t\t\t\/\/ IE 8 doesn\'t work on object elements\r\n\t\t\tif ( nodeType === 1 && context.nodeName.toLowerCase() !== \"object\" ) {\r\n\t\t\t\tgroups = tokenize( selector );\r\n\r\n\t\t\t\tif ( (old = context.getAttribute(\"id\")) ) {\r\n\t\t\t\t\tnid = old.replace( rescape, \"\\\\$&\" );\r\n\t\t\t\t} else {\r\n\t\t\t\t\tcontext.setAttribute( \"id\", nid );\r\n\t\t\t\t}\r\n\t\t\t\tnid = \"[id=\'\" + nid + \"\'] \";\r\n\r\n\t\t\t\ti = groups.length;\r\n\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\tgroups[i] = nid + toSelector( groups[i] );\r\n\t\t\t\t}\r\n\t\t\t\tnewContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;\r\n\t\t\t\tnewSelector = groups.join(\",\");\r\n\t\t\t}\r\n\r\n\t\t\tif ( newSelector ) {\r\n\t\t\t\ttry {\r\n\t\t\t\t\tpush.apply( results,\r\n\t\t\t\t\t\tnewContext.querySelectorAll( newSelector )\r\n\t\t\t\t\t);\r\n\t\t\t\t\treturn results;\r\n\t\t\t\t} catch(qsaError) {\r\n\t\t\t\t} finally {\r\n\t\t\t\t\tif ( !old ) {\r\n\t\t\t\t\t\tcontext.removeAttribute(\"id\");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ All others\r\n\treturn select( selector.replace( rtrim, \"$1\" ), context, results, seed );\r\n}\r\n\r\n\/**\r\n * Create key-value caches of limited size\r\n * @returns {Function(string, Object)} Returns the Object data after storing it on itself with\r\n *\tproperty name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)\r\n *\tdeleting the oldest entry\r\n *\/\r\nfunction createCache() {\r\n\tvar keys = [];\r\n\r\n\tfunction cache( key, value ) {\r\n\t\t\/\/ Use (key + \" \") to avoid collision with native prototype properties (see Issue #157)\r\n\t\tif ( keys.push( key + \" \" ) > Expr.cacheLength ) {\r\n\t\t\t\/\/ Only keep the most recent entries\r\n\t\t\tdelete cache[ keys.shift() ];\r\n\t\t}\r\n\t\treturn (cache[ key + \" \" ] = value);\r\n\t}\r\n\treturn cache;\r\n}\r\n\r\n\/**\r\n * Mark a function for special use by Sizzle\r\n * @param {Function} fn The function to mark\r\n *\/\r\nfunction markFunction( fn ) {\r\n\tfn[ expando ] = true;\r\n\treturn fn;\r\n}\r\n\r\n\/**\r\n * Support testing using an element\r\n * @param {Function} fn Passed the created div and expects a boolean result\r\n *\/\r\nfunction assert( fn ) {\r\n\tvar div = document.createElement(\"div\");\r\n\r\n\ttry {\r\n\t\treturn !!fn( div );\r\n\t} catch (e) {\r\n\t\treturn false;\r\n\t} finally {\r\n\t\t\/\/ Remove from its parent by default\r\n\t\tif ( div.parentNode ) {\r\n\t\t\tdiv.parentNode.removeChild( div );\r\n\t\t}\r\n\t\t\/\/ release memory in IE\r\n\t\tdiv = null;\r\n\t}\r\n}\r\n\r\n\/**\r\n * Adds the same handler for all of the specified attrs\r\n * @param {String} attrs Pipe-separated list of attributes\r\n * @param {Function} handler The method that will be applied\r\n *\/\r\nfunction addHandle( attrs, handler ) {\r\n\tvar arr = attrs.split(\"|\"),\r\n\t\ti = attrs.length;\r\n\r\n\twhile ( i-- ) {\r\n\t\tExpr.attrHandle[ arr[i] ] = handler;\r\n\t}\r\n}\r\n\r\n\/**\r\n * Checks document order of two siblings\r\n * @param {Element} a\r\n * @param {Element} b\r\n * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b\r\n *\/\r\nfunction siblingCheck( a, b ) {\r\n\tvar cur = b && a,\r\n\t\tdiff = cur && a.nodeType === 1 && b.nodeType === 1 &&\r\n\t\t\t( ~b.sourceIndex || MAX_NEGATIVE ) -\r\n\t\t\t( ~a.sourceIndex || MAX_NEGATIVE );\r\n\r\n\t\/\/ Use IE sourceIndex if available on both nodes\r\n\tif ( diff ) {\r\n\t\treturn diff;\r\n\t}\r\n\r\n\t\/\/ Check if b follows a\r\n\tif ( cur ) {\r\n\t\twhile ( (cur = cur.nextSibling) ) {\r\n\t\t\tif ( cur === b ) {\r\n\t\t\t\treturn -1;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn a ? 1 : -1;\r\n}\r\n\r\n\/**\r\n * Returns a function to use in pseudos for input types\r\n * @param {String} type\r\n *\/\r\nfunction createInputPseudo( type ) {\r\n\treturn function( elem ) {\r\n\t\tvar name = elem.nodeName.toLowerCase();\r\n\t\treturn name === \"input\" && elem.type === type;\r\n\t};\r\n}\r\n\r\n\/**\r\n * Returns a function to use in pseudos for buttons\r\n * @param {String} type\r\n *\/\r\nfunction createButtonPseudo( type ) {\r\n\treturn function( elem ) {\r\n\t\tvar name = elem.nodeName.toLowerCase();\r\n\t\treturn (name === \"input\" || name === \"button\") && elem.type === type;\r\n\t};\r\n}\r\n\r\n\/**\r\n * Returns a function to use in pseudos for positionals\r\n * @param {Function} fn\r\n *\/\r\nfunction createPositionalPseudo( fn ) {\r\n\treturn markFunction(function( argument ) {\r\n\t\targument = +argument;\r\n\t\treturn markFunction(function( seed, matches ) {\r\n\t\t\tvar j,\r\n\t\t\t\tmatchIndexes = fn( [], seed.length, argument ),\r\n\t\t\t\ti = matchIndexes.length;\r\n\r\n\t\t\t\/\/ Match elements found at the specified indexes\r\n\t\t\twhile ( i-- ) {\r\n\t\t\t\tif ( seed[ (j = matchIndexes[i]) ] ) {\r\n\t\t\t\t\tseed[j] = !(matches[j] = seed[j]);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\/**\r\n * Checks a node for validity as a Sizzle context\r\n * @param {Element|Object=} context\r\n * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value\r\n *\/\r\nfunction testContext( context ) {\r\n\treturn context && typeof context.getElementsByTagName !== \"undefined\" && context;\r\n}\r\n\r\n\/\/ Expose support vars for convenience\r\nsupport = Sizzle.support = {};\r\n\r\n\/**\r\n * Detects XML nodes\r\n * @param {Element|Object} elem An element or a document\r\n * @returns {Boolean} True iff elem is a non-HTML XML node\r\n *\/\r\nisXML = Sizzle.isXML = function( elem ) {\r\n\t\/\/ documentElement is verified for cases where it doesn\'t yet exist\r\n\t\/\/ (such as loading iframes in IE - #4833)\r\n\tvar documentElement = elem && (elem.ownerDocument || elem).documentElement;\r\n\treturn documentElement ? documentElement.nodeName !== \"HTML\" : false;\r\n};\r\n\r\n\/**\r\n * Sets document-related variables once based on the current document\r\n * @param {Element|Object} [doc] An element or document object to use to set the document\r\n * @returns {Object} Returns the current document\r\n *\/\r\nsetDocument = Sizzle.setDocument = function( node ) {\r\n\tvar hasCompare, parent,\r\n\t\tdoc = node ? node.ownerDocument || node : preferredDoc;\r\n\r\n\t\/\/ If no document and documentElement is available, return\r\n\tif ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {\r\n\t\treturn document;\r\n\t}\r\n\r\n\t\/\/ Set our document\r\n\tdocument = doc;\r\n\tdocElem = doc.documentElement;\r\n\tparent = doc.defaultView;\r\n\r\n\t\/\/ Support: IE>8\r\n\t\/\/ If iframe document is assigned to \"document\" variable and if iframe has been reloaded,\r\n\t\/\/ IE will throw \"permission denied\" error when accessing \"document\" variable, see jQuery #13936\r\n\t\/\/ IE6-8 do not support the defaultView property so parent will be undefined\r\n\tif ( parent && parent !== parent.top ) {\r\n\t\t\/\/ IE11 does not have attachEvent, so all must suffer\r\n\t\tif ( parent.addEventListener ) {\r\n\t\t\tparent.addEventListener( \"unload\", unloadHandler, false );\r\n\t\t} else if ( parent.attachEvent ) {\r\n\t\t\tparent.attachEvent( \"onunload\", unloadHandler );\r\n\t\t}\r\n\t}\r\n\r\n\t\/* Support tests\r\n\t---------------------------------------------------------------------- *\/\r\n\tdocumentIsHTML = !isXML( doc );\r\n\r\n\t\/* Attributes\r\n\t---------------------------------------------------------------------- *\/\r\n\r\n\t\/\/ Support: IE<8\r\n\t\/\/ Verify that getAttribute really returns attributes and not properties\r\n\t\/\/ (excepting IE8 booleans)\r\n\tsupport.attributes = assert(function( div ) {\r\n\t\tdiv.className = \"i\";\r\n\t\treturn !div.getAttribute(\"className\");\r\n\t});\r\n\r\n\t\/* getElement(s)By*\r\n\t---------------------------------------------------------------------- *\/\r\n\r\n\t\/\/ Check if getElementsByTagName(\"*\") returns only elements\r\n\tsupport.getElementsByTagName = assert(function( div ) {\r\n\t\tdiv.appendChild( doc.createComment(\"\") );\r\n\t\treturn !div.getElementsByTagName(\"*\").length;\r\n\t});\r\n\r\n\t\/\/ Support: IE<9\r\n\tsupport.getElementsByClassName = rnative.test( doc.getElementsByClassName );\r\n\r\n\t\/\/ Support: IE<10\r\n\t\/\/ Check if getElementById returns elements by name\r\n\t\/\/ The broken getElementById methods don\'t pick up programatically-set names,\r\n\t\/\/ so use a roundabout getElementsByName test\r\n\tsupport.getById = assert(function( div ) {\r\n\t\tdocElem.appendChild( div ).id = expando;\r\n\t\treturn !doc.getElementsByName || !doc.getElementsByName( expando ).length;\r\n\t});\r\n\r\n\t\/\/ ID find and filter\r\n\tif ( support.getById ) {\r\n\t\tExpr.find[\"ID\"] = function( id, context ) {\r\n\t\t\tif ( typeof context.getElementById !== \"undefined\" && documentIsHTML ) {\r\n\t\t\t\tvar m = context.getElementById( id );\r\n\t\t\t\t\/\/ Check parentNode to catch when Blackberry 4.6 returns\r\n\t\t\t\t\/\/ nodes that are no longer in the document #6963\r\n\t\t\t\treturn m && m.parentNode ? [ m ] : [];\r\n\t\t\t}\r\n\t\t};\r\n\t\tExpr.filter[\"ID\"] = function( id ) {\r\n\t\t\tvar attrId = id.replace( runescape, funescape );\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\treturn elem.getAttribute(\"id\") === attrId;\r\n\t\t\t};\r\n\t\t};\r\n\t} else {\r\n\t\t\/\/ Support: IE6\/7\r\n\t\t\/\/ getElementById is not reliable as a find shortcut\r\n\t\tdelete Expr.find[\"ID\"];\r\n\r\n\t\tExpr.filter[\"ID\"] =  function( id ) {\r\n\t\t\tvar attrId = id.replace( runescape, funescape );\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\tvar node = typeof elem.getAttributeNode !== \"undefined\" && elem.getAttributeNode(\"id\");\r\n\t\t\t\treturn node && node.value === attrId;\r\n\t\t\t};\r\n\t\t};\r\n\t}\r\n\r\n\t\/\/ Tag\r\n\tExpr.find[\"TAG\"] = support.getElementsByTagName ?\r\n\t\tfunction( tag, context ) {\r\n\t\t\tif ( typeof context.getElementsByTagName !== \"undefined\" ) {\r\n\t\t\t\treturn context.getElementsByTagName( tag );\r\n\r\n\t\t\t\/\/ DocumentFragment nodes don\'t have gEBTN\r\n\t\t\t} else if ( support.qsa ) {\r\n\t\t\t\treturn context.querySelectorAll( tag );\r\n\t\t\t}\r\n\t\t} :\r\n\r\n\t\tfunction( tag, context ) {\r\n\t\t\tvar elem,\r\n\t\t\t\ttmp = [],\r\n\t\t\t\ti = 0,\r\n\t\t\t\t\/\/ By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too\r\n\t\t\t\tresults = context.getElementsByTagName( tag );\r\n\r\n\t\t\t\/\/ Filter out possible comments\r\n\t\t\tif ( tag === \"*\" ) {\r\n\t\t\t\twhile ( (elem = results[i++]) ) {\r\n\t\t\t\t\tif ( elem.nodeType === 1 ) {\r\n\t\t\t\t\t\ttmp.push( elem );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn tmp;\r\n\t\t\t}\r\n\t\t\treturn results;\r\n\t\t};\r\n\r\n\t\/\/ Class\r\n\tExpr.find[\"CLASS\"] = support.getElementsByClassName && function( className, context ) {\r\n\t\tif ( documentIsHTML ) {\r\n\t\t\treturn context.getElementsByClassName( className );\r\n\t\t}\r\n\t};\r\n\r\n\t\/* QSA\/matchesSelector\r\n\t---------------------------------------------------------------------- *\/\r\n\r\n\t\/\/ QSA and matchesSelector support\r\n\r\n\t\/\/ matchesSelector(:active) reports false when true (IE9\/Opera 11.5)\r\n\trbuggyMatches = [];\r\n\r\n\t\/\/ qSa(:focus) reports false when true (Chrome 21)\r\n\t\/\/ We allow this because of a bug in IE8\/9 that throws an error\r\n\t\/\/ whenever `document.activeElement` is accessed on an iframe\r\n\t\/\/ So, we allow :focus to pass through QSA all the time to avoid the IE error\r\n\t\/\/ See http:\/\/bugs.jquery.com\/ticket\/13378\r\n\trbuggyQSA = [];\r\n\r\n\tif ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {\r\n\t\t\/\/ Build QSA regex\r\n\t\t\/\/ Regex strategy adopted from Diego Perini\r\n\t\tassert(function( div ) {\r\n\t\t\t\/\/ Select is set to empty string on purpose\r\n\t\t\t\/\/ This is to test IE\'s treatment of not explicitly\r\n\t\t\t\/\/ setting a boolean content attribute,\r\n\t\t\t\/\/ since its presence should be enough\r\n\t\t\t\/\/ http:\/\/bugs.jquery.com\/ticket\/12359\r\n\t\t\tdocElem.appendChild( div ).innerHTML = \"<a id=\'\" + expando + \"\'><\/a>\" +\r\n\t\t\t\t\"<select id=\'\" + expando + \"-\\f]\' msallowcapture=\'\'>\" +\r\n\t\t\t\t\"<option selected=\'\'><\/option><\/select>\";\r\n\r\n\t\t\t\/\/ Support: IE8, Opera 11-12.16\r\n\t\t\t\/\/ Nothing should be selected when empty strings follow ^= or $= or *=\r\n\t\t\t\/\/ The test attribute must be unknown in Opera but \"safe\" for WinRT\r\n\t\t\t\/\/ http:\/\/msdn.microsoft.com\/en-us\/library\/ie\/hh465388.aspx#attribute_section\r\n\t\t\tif ( div.querySelectorAll(\"[msallowcapture^=\'\']\").length ) {\r\n\t\t\t\trbuggyQSA.push( \"[*^$]=\" + whitespace + \"*(?:\'\'|\\\"\\\")\" );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Support: IE8\r\n\t\t\t\/\/ Boolean attributes and \"value\" are not treated correctly\r\n\t\t\tif ( !div.querySelectorAll(\"[selected]\").length ) {\r\n\t\t\t\trbuggyQSA.push( \"\\\\[\" + whitespace + \"*(?:value|\" + booleans + \")\" );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+\r\n\t\t\tif ( !div.querySelectorAll( \"[id~=\" + expando + \"-]\" ).length ) {\r\n\t\t\t\trbuggyQSA.push(\"~=\");\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Webkit\/Opera - :checked should return selected option elements\r\n\t\t\t\/\/ http:\/\/www.w3.org\/TR\/2011\/REC-css3-selectors-20110929\/#checked\r\n\t\t\t\/\/ IE8 throws error here and will not see later tests\r\n\t\t\tif ( !div.querySelectorAll(\":checked\").length ) {\r\n\t\t\t\trbuggyQSA.push(\":checked\");\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Support: Safari 8+, iOS 8+\r\n\t\t\t\/\/ https:\/\/bugs.webkit.org\/show_bug.cgi?id=136851\r\n\t\t\t\/\/ In-page `selector#id sibing-combinator selector` fails\r\n\t\t\tif ( !div.querySelectorAll( \"a#\" + expando + \"+*\" ).length ) {\r\n\t\t\t\trbuggyQSA.push(\".#.+[+~]\");\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tassert(function( div ) {\r\n\t\t\t\/\/ Support: Windows 8 Native Apps\r\n\t\t\t\/\/ The type and name attributes are restricted during .innerHTML assignment\r\n\t\t\tvar input = doc.createElement(\"input\");\r\n\t\t\tinput.setAttribute( \"type\", \"hidden\" );\r\n\t\t\tdiv.appendChild( input ).setAttribute( \"name\", \"D\" );\r\n\r\n\t\t\t\/\/ Support: IE8\r\n\t\t\t\/\/ Enforce case-sensitivity of name attribute\r\n\t\t\tif ( div.querySelectorAll(\"[name=d]\").length ) {\r\n\t\t\t\trbuggyQSA.push( \"name\" + whitespace + \"*[*^$|!~]?=\" );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ FF 3.5 - :enabled\/:disabled and hidden elements (hidden elements are still enabled)\r\n\t\t\t\/\/ IE8 throws error here and will not see later tests\r\n\t\t\tif ( !div.querySelectorAll(\":enabled\").length ) {\r\n\t\t\t\trbuggyQSA.push( \":enabled\", \":disabled\" );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Opera 10-11 does not throw on post-comma invalid pseudos\r\n\t\t\tdiv.querySelectorAll(\"*,:x\");\r\n\t\t\trbuggyQSA.push(\",.*:\");\r\n\t\t});\r\n\t}\r\n\r\n\tif ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||\r\n\t\tdocElem.webkitMatchesSelector ||\r\n\t\tdocElem.mozMatchesSelector ||\r\n\t\tdocElem.oMatchesSelector ||\r\n\t\tdocElem.msMatchesSelector) )) ) {\r\n\r\n\t\tassert(function( div ) {\r\n\t\t\t\/\/ Check to see if it\'s possible to do matchesSelector\r\n\t\t\t\/\/ on a disconnected node (IE 9)\r\n\t\t\tsupport.disconnectedMatch = matches.call( div, \"div\" );\r\n\r\n\t\t\t\/\/ This should fail with an exception\r\n\t\t\t\/\/ Gecko does not error, returns false instead\r\n\t\t\tmatches.call( div, \"[s!=\'\']:x\" );\r\n\t\t\trbuggyMatches.push( \"!=\", pseudos );\r\n\t\t});\r\n\t}\r\n\r\n\trbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join(\"|\") );\r\n\trbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join(\"|\") );\r\n\r\n\t\/* Contains\r\n\t---------------------------------------------------------------------- *\/\r\n\thasCompare = rnative.test( docElem.compareDocumentPosition );\r\n\r\n\t\/\/ Element contains another\r\n\t\/\/ Purposefully does not implement inclusive descendent\r\n\t\/\/ As in, an element does not contain itself\r\n\tcontains = hasCompare || rnative.test( docElem.contains ) ?\r\n\t\tfunction( a, b ) {\r\n\t\t\tvar adown = a.nodeType === 9 ? a.documentElement : a,\r\n\t\t\t\tbup = b && b.parentNode;\r\n\t\t\treturn a === bup || !!( bup && bup.nodeType === 1 && (\r\n\t\t\t\tadown.contains ?\r\n\t\t\t\t\tadown.contains( bup ) :\r\n\t\t\t\t\ta.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16\r\n\t\t\t));\r\n\t\t} :\r\n\t\tfunction( a, b ) {\r\n\t\t\tif ( b ) {\r\n\t\t\t\twhile ( (b = b.parentNode) ) {\r\n\t\t\t\t\tif ( b === a ) {\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn false;\r\n\t\t};\r\n\r\n\t\/* Sorting\r\n\t---------------------------------------------------------------------- *\/\r\n\r\n\t\/\/ Document order sorting\r\n\tsortOrder = hasCompare ?\r\n\tfunction( a, b ) {\r\n\r\n\t\t\/\/ Flag for duplicate removal\r\n\t\tif ( a === b ) {\r\n\t\t\thasDuplicate = true;\r\n\t\t\treturn 0;\r\n\t\t}\r\n\r\n\t\t\/\/ Sort on method existence if only one input has compareDocumentPosition\r\n\t\tvar compare = !a.compareDocumentPosition - !b.compareDocumentPosition;\r\n\t\tif ( compare ) {\r\n\t\t\treturn compare;\r\n\t\t}\r\n\r\n\t\t\/\/ Calculate position if both inputs belong to the same document\r\n\t\tcompare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?\r\n\t\t\ta.compareDocumentPosition( b ) :\r\n\r\n\t\t\t\/\/ Otherwise we know they are disconnected\r\n\t\t\t1;\r\n\r\n\t\t\/\/ Disconnected nodes\r\n\t\tif ( compare & 1 ||\r\n\t\t\t(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {\r\n\r\n\t\t\t\/\/ Choose the first element that is related to our preferred document\r\n\t\t\tif ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {\r\n\t\t\t\treturn -1;\r\n\t\t\t}\r\n\t\t\tif ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {\r\n\t\t\t\treturn 1;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Maintain original order\r\n\t\t\treturn sortInput ?\r\n\t\t\t\t( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\r\n\t\t\t\t0;\r\n\t\t}\r\n\r\n\t\treturn compare & 4 ? -1 : 1;\r\n\t} :\r\n\tfunction( a, b ) {\r\n\t\t\/\/ Exit early if the nodes are identical\r\n\t\tif ( a === b ) {\r\n\t\t\thasDuplicate = true;\r\n\t\t\treturn 0;\r\n\t\t}\r\n\r\n\t\tvar cur,\r\n\t\t\ti = 0,\r\n\t\t\taup = a.parentNode,\r\n\t\t\tbup = b.parentNode,\r\n\t\t\tap = [ a ],\r\n\t\t\tbp = [ b ];\r\n\r\n\t\t\/\/ Parentless nodes are either documents or disconnected\r\n\t\tif ( !aup || !bup ) {\r\n\t\t\treturn a === doc ? -1 :\r\n\t\t\t\tb === doc ? 1 :\r\n\t\t\t\taup ? -1 :\r\n\t\t\t\tbup ? 1 :\r\n\t\t\t\tsortInput ?\r\n\t\t\t\t( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\r\n\t\t\t\t0;\r\n\r\n\t\t\/\/ If the nodes are siblings, we can do a quick check\r\n\t\t} else if ( aup === bup ) {\r\n\t\t\treturn siblingCheck( a, b );\r\n\t\t}\r\n\r\n\t\t\/\/ Otherwise we need full lists of their ancestors for comparison\r\n\t\tcur = a;\r\n\t\twhile ( (cur = cur.parentNode) ) {\r\n\t\t\tap.unshift( cur );\r\n\t\t}\r\n\t\tcur = b;\r\n\t\twhile ( (cur = cur.parentNode) ) {\r\n\t\t\tbp.unshift( cur );\r\n\t\t}\r\n\r\n\t\t\/\/ Walk down the tree looking for a discrepancy\r\n\t\twhile ( ap[i] === bp[i] ) {\r\n\t\t\ti++;\r\n\t\t}\r\n\r\n\t\treturn i ?\r\n\t\t\t\/\/ Do a sibling check if the nodes have a common ancestor\r\n\t\t\tsiblingCheck( ap[i], bp[i] ) :\r\n\r\n\t\t\t\/\/ Otherwise nodes in our document sort first\r\n\t\t\tap[i] === preferredDoc ? -1 :\r\n\t\t\tbp[i] === preferredDoc ? 1 :\r\n\t\t\t0;\r\n\t};\r\n\r\n\treturn doc;\r\n};\r\n\r\nSizzle.matches = function( expr, elements ) {\r\n\treturn Sizzle( expr, null, null, elements );\r\n};\r\n\r\nSizzle.matchesSelector = function( elem, expr ) {\r\n\t\/\/ Set document vars if needed\r\n\tif ( ( elem.ownerDocument || elem ) !== document ) {\r\n\t\tsetDocument( elem );\r\n\t}\r\n\r\n\t\/\/ Make sure that attribute selectors are quoted\r\n\texpr = expr.replace( rattributeQuotes, \"=\'$1\']\" );\r\n\r\n\tif ( support.matchesSelector && documentIsHTML &&\r\n\t\t( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&\r\n\t\t( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {\r\n\r\n\t\ttry {\r\n\t\t\tvar ret = matches.call( elem, expr );\r\n\r\n\t\t\t\/\/ IE 9\'s matchesSelector returns false on disconnected nodes\r\n\t\t\tif ( ret || support.disconnectedMatch ||\r\n\t\t\t\t\t\/\/ As well, disconnected nodes are said to be in a document\r\n\t\t\t\t\t\/\/ fragment in IE 9\r\n\t\t\t\t\telem.document && elem.document.nodeType !== 11 ) {\r\n\t\t\t\treturn ret;\r\n\t\t\t}\r\n\t\t} catch (e) {}\r\n\t}\r\n\r\n\treturn Sizzle( expr, document, null, [ elem ] ).length > 0;\r\n};\r\n\r\nSizzle.contains = function( context, elem ) {\r\n\t\/\/ Set document vars if needed\r\n\tif ( ( context.ownerDocument || context ) !== document ) {\r\n\t\tsetDocument( context );\r\n\t}\r\n\treturn contains( context, elem );\r\n};\r\n\r\nSizzle.attr = function( elem, name ) {\r\n\t\/\/ Set document vars if needed\r\n\tif ( ( elem.ownerDocument || elem ) !== document ) {\r\n\t\tsetDocument( elem );\r\n\t}\r\n\r\n\tvar fn = Expr.attrHandle[ name.toLowerCase() ],\r\n\t\t\/\/ Don\'t get fooled by Object.prototype properties (jQuery #13807)\r\n\t\tval = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?\r\n\t\t\tfn( elem, name, !documentIsHTML ) :\r\n\t\t\tundefined;\r\n\r\n\treturn val !== undefined ?\r\n\t\tval :\r\n\t\tsupport.attributes || !documentIsHTML ?\r\n\t\t\telem.getAttribute( name ) :\r\n\t\t\t(val = elem.getAttributeNode(name)) && val.specified ?\r\n\t\t\t\tval.value :\r\n\t\t\t\tnull;\r\n};\r\n\r\nSizzle.error = function( msg ) {\r\n\tthrow new Error( \"Syntax error, unrecognized expression: \" + msg );\r\n};\r\n\r\n\/**\r\n * Document sorting and removing duplicates\r\n * @param {ArrayLike} results\r\n *\/\r\nSizzle.uniqueSort = function( results ) {\r\n\tvar elem,\r\n\t\tduplicates = [],\r\n\t\tj = 0,\r\n\t\ti = 0;\r\n\r\n\t\/\/ Unless we *know* we can detect duplicates, assume their presence\r\n\thasDuplicate = !support.detectDuplicates;\r\n\tsortInput = !support.sortStable && results.slice( 0 );\r\n\tresults.sort( sortOrder );\r\n\r\n\tif ( hasDuplicate ) {\r\n\t\twhile ( (elem = results[i++]) ) {\r\n\t\t\tif ( elem === results[ i ] ) {\r\n\t\t\t\tj = duplicates.push( i );\r\n\t\t\t}\r\n\t\t}\r\n\t\twhile ( j-- ) {\r\n\t\t\tresults.splice( duplicates[ j ], 1 );\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Clear input after sorting to release objects\r\n\t\/\/ See https:\/\/github.com\/jquery\/sizzle\/pull\/225\r\n\tsortInput = null;\r\n\r\n\treturn results;\r\n};\r\n\r\n\/**\r\n * Utility function for retrieving the text value of an array of DOM nodes\r\n * @param {Array|Element} elem\r\n *\/\r\ngetText = Sizzle.getText = function( elem ) {\r\n\tvar node,\r\n\t\tret = \"\",\r\n\t\ti = 0,\r\n\t\tnodeType = elem.nodeType;\r\n\r\n\tif ( !nodeType ) {\r\n\t\t\/\/ If no nodeType, this is expected to be an array\r\n\t\twhile ( (node = elem[i++]) ) {\r\n\t\t\t\/\/ Do not traverse comment nodes\r\n\t\t\tret += getText( node );\r\n\t\t}\r\n\t} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {\r\n\t\t\/\/ Use textContent for elements\r\n\t\t\/\/ innerText usage removed for consistency of new lines (jQuery #11153)\r\n\t\tif ( typeof elem.textContent === \"string\" ) {\r\n\t\t\treturn elem.textContent;\r\n\t\t} else {\r\n\t\t\t\/\/ Traverse its children\r\n\t\t\tfor ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\r\n\t\t\t\tret += getText( elem );\r\n\t\t\t}\r\n\t\t}\r\n\t} else if ( nodeType === 3 || nodeType === 4 ) {\r\n\t\treturn elem.nodeValue;\r\n\t}\r\n\t\/\/ Do not include comment or processing instruction nodes\r\n\r\n\treturn ret;\r\n};\r\n\r\nExpr = Sizzle.selectors = {\r\n\r\n\t\/\/ Can be adjusted by the user\r\n\tcacheLength: 50,\r\n\r\n\tcreatePseudo: markFunction,\r\n\r\n\tmatch: matchExpr,\r\n\r\n\tattrHandle: {},\r\n\r\n\tfind: {},\r\n\r\n\trelative: {\r\n\t\t\">\": { dir: \"parentNode\", first: true },\r\n\t\t\" \": { dir: \"parentNode\" },\r\n\t\t\"+\": { dir: \"previousSibling\", first: true },\r\n\t\t\"~\": { dir: \"previousSibling\" }\r\n\t},\r\n\r\n\tpreFilter: {\r\n\t\t\"ATTR\": function( match ) {\r\n\t\t\tmatch[1] = match[1].replace( runescape, funescape );\r\n\r\n\t\t\t\/\/ Move the given value to match[3] whether quoted or unquoted\r\n\t\t\tmatch[3] = ( match[3] || match[4] || match[5] || \"\" ).replace( runescape, funescape );\r\n\r\n\t\t\tif ( match[2] === \"~=\" ) {\r\n\t\t\t\tmatch[3] = \" \" + match[3] + \" \";\r\n\t\t\t}\r\n\r\n\t\t\treturn match.slice( 0, 4 );\r\n\t\t},\r\n\r\n\t\t\"CHILD\": function( match ) {\r\n\t\t\t\/* matches from matchExpr[\"CHILD\"]\r\n\t\t\t\t1 type (only|nth|...)\r\n\t\t\t\t2 what (child|of-type)\r\n\t\t\t\t3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)\r\n\t\t\t\t4 xn-component of xn+y argument ([+-]?\\d*n|)\r\n\t\t\t\t5 sign of xn-component\r\n\t\t\t\t6 x of xn-component\r\n\t\t\t\t7 sign of y-component\r\n\t\t\t\t8 y of y-component\r\n\t\t\t*\/\r\n\t\t\tmatch[1] = match[1].toLowerCase();\r\n\r\n\t\t\tif ( match[1].slice( 0, 3 ) === \"nth\" ) {\r\n\t\t\t\t\/\/ nth-* requires argument\r\n\t\t\t\tif ( !match[3] ) {\r\n\t\t\t\t\tSizzle.error( match[0] );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ numeric x and y parameters for Expr.filter.CHILD\r\n\t\t\t\t\/\/ remember that false\/true cast respectively to 0\/1\r\n\t\t\t\tmatch[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === \"even\" || match[3] === \"odd\" ) );\r\n\t\t\t\tmatch[5] = +( ( match[7] + match[8] ) || match[3] === \"odd\" );\r\n\r\n\t\t\t\/\/ other types prohibit arguments\r\n\t\t\t} else if ( match[3] ) {\r\n\t\t\t\tSizzle.error( match[0] );\r\n\t\t\t}\r\n\r\n\t\t\treturn match;\r\n\t\t},\r\n\r\n\t\t\"PSEUDO\": function( match ) {\r\n\t\t\tvar excess,\r\n\t\t\t\tunquoted = !match[6] && match[2];\r\n\r\n\t\t\tif ( matchExpr[\"CHILD\"].test( match[0] ) ) {\r\n\t\t\t\treturn null;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Accept quoted arguments as-is\r\n\t\t\tif ( match[3] ) {\r\n\t\t\t\tmatch[2] = match[4] || match[5] || \"\";\r\n\r\n\t\t\t\/\/ Strip excess characters from unquoted arguments\r\n\t\t\t} else if ( unquoted && rpseudo.test( unquoted ) &&\r\n\t\t\t\t\/\/ Get excess from tokenize (recursively)\r\n\t\t\t\t(excess = tokenize( unquoted, true )) &&\r\n\t\t\t\t\/\/ advance to the next closing parenthesis\r\n\t\t\t\t(excess = unquoted.indexOf( \")\", unquoted.length - excess ) - unquoted.length) ) {\r\n\r\n\t\t\t\t\/\/ excess is a negative index\r\n\t\t\t\tmatch[0] = match[0].slice( 0, excess );\r\n\t\t\t\tmatch[2] = unquoted.slice( 0, excess );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Return only captures needed by the pseudo filter method (type and argument)\r\n\t\t\treturn match.slice( 0, 3 );\r\n\t\t}\r\n\t},\r\n\r\n\tfilter: {\r\n\r\n\t\t\"TAG\": function( nodeNameSelector ) {\r\n\t\t\tvar nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();\r\n\t\t\treturn nodeNameSelector === \"*\" ?\r\n\t\t\t\tfunction() { return true; } :\r\n\t\t\t\tfunction( elem ) {\r\n\t\t\t\t\treturn elem.nodeName && elem.nodeName.toLowerCase() === nodeName;\r\n\t\t\t\t};\r\n\t\t},\r\n\r\n\t\t\"CLASS\": function( className ) {\r\n\t\t\tvar pattern = classCache[ className + \" \" ];\r\n\r\n\t\t\treturn pattern ||\r\n\t\t\t\t(pattern = new RegExp( \"(^|\" + whitespace + \")\" + className + \"(\" + whitespace + \"|$)\" )) &&\r\n\t\t\t\tclassCache( className, function( elem ) {\r\n\t\t\t\t\treturn pattern.test( typeof elem.className === \"string\" && elem.className || typeof elem.getAttribute !== \"undefined\" && elem.getAttribute(\"class\") || \"\" );\r\n\t\t\t\t});\r\n\t\t},\r\n\r\n\t\t\"ATTR\": function( name, operator, check ) {\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\tvar result = Sizzle.attr( elem, name );\r\n\r\n\t\t\t\tif ( result == null ) {\r\n\t\t\t\t\treturn operator === \"!=\";\r\n\t\t\t\t}\r\n\t\t\t\tif ( !operator ) {\r\n\t\t\t\t\treturn true;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tresult += \"\";\r\n\r\n\t\t\t\treturn operator === \"=\" ? result === check :\r\n\t\t\t\t\toperator === \"!=\" ? result !== check :\r\n\t\t\t\t\toperator === \"^=\" ? check && result.indexOf( check ) === 0 :\r\n\t\t\t\t\toperator === \"*=\" ? check && result.indexOf( check ) > -1 :\r\n\t\t\t\t\toperator === \"$=\" ? check && result.slice( -check.length ) === check :\r\n\t\t\t\t\toperator === \"~=\" ? ( \" \" + result.replace( rwhitespace, \" \" ) + \" \" ).indexOf( check ) > -1 :\r\n\t\t\t\t\toperator === \"|=\" ? result === check || result.slice( 0, check.length + 1 ) === check + \"-\" :\r\n\t\t\t\t\tfalse;\r\n\t\t\t};\r\n\t\t},\r\n\r\n\t\t\"CHILD\": function( type, what, argument, first, last ) {\r\n\t\t\tvar simple = type.slice( 0, 3 ) !== \"nth\",\r\n\t\t\t\tforward = type.slice( -4 ) !== \"last\",\r\n\t\t\t\tofType = what === \"of-type\";\r\n\r\n\t\t\treturn first === 1 && last === 0 ?\r\n\r\n\t\t\t\t\/\/ Shortcut for :nth-*(n)\r\n\t\t\t\tfunction( elem ) {\r\n\t\t\t\t\treturn !!elem.parentNode;\r\n\t\t\t\t} :\r\n\r\n\t\t\t\tfunction( elem, context, xml ) {\r\n\t\t\t\t\tvar cache, outerCache, node, diff, nodeIndex, start,\r\n\t\t\t\t\t\tdir = simple !== forward ? \"nextSibling\" : \"previousSibling\",\r\n\t\t\t\t\t\tparent = elem.parentNode,\r\n\t\t\t\t\t\tname = ofType && elem.nodeName.toLowerCase(),\r\n\t\t\t\t\t\tuseCache = !xml && !ofType;\r\n\r\n\t\t\t\t\tif ( parent ) {\r\n\r\n\t\t\t\t\t\t\/\/ :(first|last|only)-(child|of-type)\r\n\t\t\t\t\t\tif ( simple ) {\r\n\t\t\t\t\t\t\twhile ( dir ) {\r\n\t\t\t\t\t\t\t\tnode = elem;\r\n\t\t\t\t\t\t\t\twhile ( (node = node[ dir ]) ) {\r\n\t\t\t\t\t\t\t\t\tif ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {\r\n\t\t\t\t\t\t\t\t\t\treturn false;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\/\/ Reverse direction for :only-* (if we haven\'t yet done so)\r\n\t\t\t\t\t\t\t\tstart = dir = type === \"only\" && !start && \"nextSibling\";\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tstart = [ forward ? parent.firstChild : parent.lastChild ];\r\n\r\n\t\t\t\t\t\t\/\/ non-xml :nth-child(...) stores cache data on `parent`\r\n\t\t\t\t\t\tif ( forward && useCache ) {\r\n\t\t\t\t\t\t\t\/\/ Seek `elem` from a previously-cached index\r\n\t\t\t\t\t\t\touterCache = parent[ expando ] || (parent[ expando ] = {});\r\n\t\t\t\t\t\t\tcache = outerCache[ type ] || [];\r\n\t\t\t\t\t\t\tnodeIndex = cache[0] === dirruns && cache[1];\r\n\t\t\t\t\t\t\tdiff = cache[0] === dirruns && cache[2];\r\n\t\t\t\t\t\t\tnode = nodeIndex && parent.childNodes[ nodeIndex ];\r\n\r\n\t\t\t\t\t\t\twhile ( (node = ++nodeIndex && node && node[ dir ] ||\r\n\r\n\t\t\t\t\t\t\t\t\/\/ Fallback to seeking `elem` from the start\r\n\t\t\t\t\t\t\t\t(diff = nodeIndex = 0) || start.pop()) ) {\r\n\r\n\t\t\t\t\t\t\t\t\/\/ When found, cache indexes on `parent` and break\r\n\t\t\t\t\t\t\t\tif ( node.nodeType === 1 && ++diff && node === elem ) {\r\n\t\t\t\t\t\t\t\t\touterCache[ type ] = [ dirruns, nodeIndex, diff ];\r\n\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\/\/ Use previously-cached element index if available\r\n\t\t\t\t\t\t} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {\r\n\t\t\t\t\t\t\tdiff = cache[1];\r\n\r\n\t\t\t\t\t\t\/\/ xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\/\/ Use the same loop as above to seek `elem` from the start\r\n\t\t\t\t\t\t\twhile ( (node = ++nodeIndex && node && node[ dir ] ||\r\n\t\t\t\t\t\t\t\t(diff = nodeIndex = 0) || start.pop()) ) {\r\n\r\n\t\t\t\t\t\t\t\tif ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {\r\n\t\t\t\t\t\t\t\t\t\/\/ Cache the index of each encountered element\r\n\t\t\t\t\t\t\t\t\tif ( useCache ) {\r\n\t\t\t\t\t\t\t\t\t\t(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\tif ( node === elem ) {\r\n\t\t\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\/\/ Incorporate the offset, then check against cycle size\r\n\t\t\t\t\t\tdiff -= last;\r\n\t\t\t\t\t\treturn diff === first || ( diff % first === 0 && diff \/ first >= 0 );\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\t\t},\r\n\r\n\t\t\"PSEUDO\": function( pseudo, argument ) {\r\n\t\t\t\/\/ pseudo-class names are case-insensitive\r\n\t\t\t\/\/ http:\/\/www.w3.org\/TR\/selectors\/#pseudo-classes\r\n\t\t\t\/\/ Prioritize by case sensitivity in case custom pseudos are added with uppercase letters\r\n\t\t\t\/\/ Remember that setFilters inherits from pseudos\r\n\t\t\tvar args,\r\n\t\t\t\tfn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||\r\n\t\t\t\t\tSizzle.error( \"unsupported pseudo: \" + pseudo );\r\n\r\n\t\t\t\/\/ The user may use createPseudo to indicate that\r\n\t\t\t\/\/ arguments are needed to create the filter function\r\n\t\t\t\/\/ just as Sizzle does\r\n\t\t\tif ( fn[ expando ] ) {\r\n\t\t\t\treturn fn( argument );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ But maintain support for old signatures\r\n\t\t\tif ( fn.length > 1 ) {\r\n\t\t\t\targs = [ pseudo, pseudo, \"\", argument ];\r\n\t\t\t\treturn Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?\r\n\t\t\t\t\tmarkFunction(function( seed, matches ) {\r\n\t\t\t\t\t\tvar idx,\r\n\t\t\t\t\t\t\tmatched = fn( seed, argument ),\r\n\t\t\t\t\t\t\ti = matched.length;\r\n\t\t\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\t\t\tidx = indexOf( seed, matched[i] );\r\n\t\t\t\t\t\t\tseed[ idx ] = !( matches[ idx ] = matched[i] );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}) :\r\n\t\t\t\t\tfunction( elem ) {\r\n\t\t\t\t\t\treturn fn( elem, 0, args );\r\n\t\t\t\t\t};\r\n\t\t\t}\r\n\r\n\t\t\treturn fn;\r\n\t\t}\r\n\t},\r\n\r\n\tpseudos: {\r\n\t\t\/\/ Potentially complex pseudos\r\n\t\t\"not\": markFunction(function( selector ) {\r\n\t\t\t\/\/ Trim the selector passed to compile\r\n\t\t\t\/\/ to avoid treating leading and trailing\r\n\t\t\t\/\/ spaces as combinators\r\n\t\t\tvar input = [],\r\n\t\t\t\tresults = [],\r\n\t\t\t\tmatcher = compile( selector.replace( rtrim, \"$1\" ) );\r\n\r\n\t\t\treturn matcher[ expando ] ?\r\n\t\t\t\tmarkFunction(function( seed, matches, context, xml ) {\r\n\t\t\t\t\tvar elem,\r\n\t\t\t\t\t\tunmatched = matcher( seed, null, xml, [] ),\r\n\t\t\t\t\t\ti = seed.length;\r\n\r\n\t\t\t\t\t\/\/ Match elements unmatched by `matcher`\r\n\t\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\t\tif ( (elem = unmatched[i]) ) {\r\n\t\t\t\t\t\t\tseed[i] = !(matches[i] = elem);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}) :\r\n\t\t\t\tfunction( elem, context, xml ) {\r\n\t\t\t\t\tinput[0] = elem;\r\n\t\t\t\t\tmatcher( input, null, xml, results );\r\n\t\t\t\t\t\/\/ Don\'t keep the element (issue #299)\r\n\t\t\t\t\tinput[0] = null;\r\n\t\t\t\t\treturn !results.pop();\r\n\t\t\t\t};\r\n\t\t}),\r\n\r\n\t\t\"has\": markFunction(function( selector ) {\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\treturn Sizzle( selector, elem ).length > 0;\r\n\t\t\t};\r\n\t\t}),\r\n\r\n\t\t\"contains\": markFunction(function( text ) {\r\n\t\t\ttext = text.replace( runescape, funescape );\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\treturn ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;\r\n\t\t\t};\r\n\t\t}),\r\n\r\n\t\t\/\/ \"Whether an element is represented by a :lang() selector\r\n\t\t\/\/ is based solely on the element\'s language value\r\n\t\t\/\/ being equal to the identifier C,\r\n\t\t\/\/ or beginning with the identifier C immediately followed by \"-\".\r\n\t\t\/\/ The matching of C against the element\'s language value is performed case-insensitively.\r\n\t\t\/\/ The identifier C does not have to be a valid language name.\"\r\n\t\t\/\/ http:\/\/www.w3.org\/TR\/selectors\/#lang-pseudo\r\n\t\t\"lang\": markFunction( function( lang ) {\r\n\t\t\t\/\/ lang value must be a valid identifier\r\n\t\t\tif ( !ridentifier.test(lang || \"\") ) {\r\n\t\t\t\tSizzle.error( \"unsupported lang: \" + lang );\r\n\t\t\t}\r\n\t\t\tlang = lang.replace( runescape, funescape ).toLowerCase();\r\n\t\t\treturn function( elem ) {\r\n\t\t\t\tvar elemLang;\r\n\t\t\t\tdo {\r\n\t\t\t\t\tif ( (elemLang = documentIsHTML ?\r\n\t\t\t\t\t\telem.lang :\r\n\t\t\t\t\t\telem.getAttribute(\"xml:lang\") || elem.getAttribute(\"lang\")) ) {\r\n\r\n\t\t\t\t\t\telemLang = elemLang.toLowerCase();\r\n\t\t\t\t\t\treturn elemLang === lang || elemLang.indexOf( lang + \"-\" ) === 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t} while ( (elem = elem.parentNode) && elem.nodeType === 1 );\r\n\t\t\t\treturn false;\r\n\t\t\t};\r\n\t\t}),\r\n\r\n\t\t\/\/ Miscellaneous\r\n\t\t\"target\": function( elem ) {\r\n\t\t\tvar hash = window.location && window.location.hash;\r\n\t\t\treturn hash && hash.slice( 1 ) === elem.id;\r\n\t\t},\r\n\r\n\t\t\"root\": function( elem ) {\r\n\t\t\treturn elem === docElem;\r\n\t\t},\r\n\r\n\t\t\"focus\": function( elem ) {\r\n\t\t\treturn elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);\r\n\t\t},\r\n\r\n\t\t\/\/ Boolean properties\r\n\t\t\"enabled\": function( elem ) {\r\n\t\t\treturn elem.disabled === false;\r\n\t\t},\r\n\r\n\t\t\"disabled\": function( elem ) {\r\n\t\t\treturn elem.disabled === true;\r\n\t\t},\r\n\r\n\t\t\"checked\": function( elem ) {\r\n\t\t\t\/\/ In CSS3, :checked should return both checked and selected elements\r\n\t\t\t\/\/ http:\/\/www.w3.org\/TR\/2011\/REC-css3-selectors-20110929\/#checked\r\n\t\t\tvar nodeName = elem.nodeName.toLowerCase();\r\n\t\t\treturn (nodeName === \"input\" && !!elem.checked) || (nodeName === \"option\" && !!elem.selected);\r\n\t\t},\r\n\r\n\t\t\"selected\": function( elem ) {\r\n\t\t\t\/\/ Accessing this property makes selected-by-default\r\n\t\t\t\/\/ options in Safari work properly\r\n\t\t\tif ( elem.parentNode ) {\r\n\t\t\t\telem.parentNode.selectedIndex;\r\n\t\t\t}\r\n\r\n\t\t\treturn elem.selected === true;\r\n\t\t},\r\n\r\n\t\t\/\/ Contents\r\n\t\t\"empty\": function( elem ) {\r\n\t\t\t\/\/ http:\/\/www.w3.org\/TR\/selectors\/#empty-pseudo\r\n\t\t\t\/\/ :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),\r\n\t\t\t\/\/   but not by others (comment: 8; processing instruction: 7; etc.)\r\n\t\t\t\/\/ nodeType < 6 works because attributes (2) do not appear as children\r\n\t\t\tfor ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {\r\n\t\t\t\tif ( elem.nodeType < 6 ) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t},\r\n\r\n\t\t\"parent\": function( elem ) {\r\n\t\t\treturn !Expr.pseudos[\"empty\"]( elem );\r\n\t\t},\r\n\r\n\t\t\/\/ Element\/input types\r\n\t\t\"header\": function( elem ) {\r\n\t\t\treturn rheader.test( elem.nodeName );\r\n\t\t},\r\n\r\n\t\t\"input\": function( elem ) {\r\n\t\t\treturn rinputs.test( elem.nodeName );\r\n\t\t},\r\n\r\n\t\t\"button\": function( elem ) {\r\n\t\t\tvar name = elem.nodeName.toLowerCase();\r\n\t\t\treturn name === \"input\" && elem.type === \"button\" || name === \"button\";\r\n\t\t},\r\n\r\n\t\t\"text\": function( elem ) {\r\n\t\t\tvar attr;\r\n\t\t\treturn elem.nodeName.toLowerCase() === \"input\" &&\r\n\t\t\t\telem.type === \"text\" &&\r\n\r\n\t\t\t\t\/\/ Support: IE<8\r\n\t\t\t\t\/\/ New HTML5 attribute values (e.g., \"search\") appear with elem.type === \"text\"\r\n\t\t\t\t( (attr = elem.getAttribute(\"type\")) == null || attr.toLowerCase() === \"text\" );\r\n\t\t},\r\n\r\n\t\t\/\/ Position-in-collection\r\n\t\t\"first\": createPositionalPseudo(function() {\r\n\t\t\treturn [ 0 ];\r\n\t\t}),\r\n\r\n\t\t\"last\": createPositionalPseudo(function( matchIndexes, length ) {\r\n\t\t\treturn [ length - 1 ];\r\n\t\t}),\r\n\r\n\t\t\"eq\": createPositionalPseudo(function( matchIndexes, length, argument ) {\r\n\t\t\treturn [ argument < 0 ? argument + length : argument ];\r\n\t\t}),\r\n\r\n\t\t\"even\": createPositionalPseudo(function( matchIndexes, length ) {\r\n\t\t\tvar i = 0;\r\n\t\t\tfor ( ; i < length; i += 2 ) {\r\n\t\t\t\tmatchIndexes.push( i );\r\n\t\t\t}\r\n\t\t\treturn matchIndexes;\r\n\t\t}),\r\n\r\n\t\t\"odd\": createPositionalPseudo(function( matchIndexes, length ) {\r\n\t\t\tvar i = 1;\r\n\t\t\tfor ( ; i < length; i += 2 ) {\r\n\t\t\t\tmatchIndexes.push( i );\r\n\t\t\t}\r\n\t\t\treturn matchIndexes;\r\n\t\t}),\r\n\r\n\t\t\"lt\": createPositionalPseudo(function( matchIndexes, length, argument ) {\r\n\t\t\tvar i = argument < 0 ? argument + length : argument;\r\n\t\t\tfor ( ; --i >= 0; ) {\r\n\t\t\t\tmatchIndexes.push( i );\r\n\t\t\t}\r\n\t\t\treturn matchIndexes;\r\n\t\t}),\r\n\r\n\t\t\"gt\": createPositionalPseudo(function( matchIndexes, length, argument ) {\r\n\t\t\tvar i = argument < 0 ? argument + length : argument;\r\n\t\t\tfor ( ; ++i < length; ) {\r\n\t\t\t\tmatchIndexes.push( i );\r\n\t\t\t}\r\n\t\t\treturn matchIndexes;\r\n\t\t})\r\n\t}\r\n};\r\n\r\nExpr.pseudos[\"nth\"] = Expr.pseudos[\"eq\"];\r\n\r\n\/\/ Add button\/input type pseudos\r\nfor ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {\r\n\tExpr.pseudos[ i ] = createInputPseudo( i );\r\n}\r\nfor ( i in { submit: true, reset: true } ) {\r\n\tExpr.pseudos[ i ] = createButtonPseudo( i );\r\n}\r\n\r\n\/\/ Easy API for creating new setFilters\r\nfunction setFilters() {}\r\nsetFilters.prototype = Expr.filters = Expr.pseudos;\r\nExpr.setFilters = new setFilters();\r\n\r\ntokenize = Sizzle.tokenize = function( selector, parseOnly ) {\r\n\tvar matched, match, tokens, type,\r\n\t\tsoFar, groups, preFilters,\r\n\t\tcached = tokenCache[ selector + \" \" ];\r\n\r\n\tif ( cached ) {\r\n\t\treturn parseOnly ? 0 : cached.slice( 0 );\r\n\t}\r\n\r\n\tsoFar = selector;\r\n\tgroups = [];\r\n\tpreFilters = Expr.preFilter;\r\n\r\n\twhile ( soFar ) {\r\n\r\n\t\t\/\/ Comma and first run\r\n\t\tif ( !matched || (match = rcomma.exec( soFar )) ) {\r\n\t\t\tif ( match ) {\r\n\t\t\t\t\/\/ Don\'t consume trailing commas as valid\r\n\t\t\t\tsoFar = soFar.slice( match[0].length ) || soFar;\r\n\t\t\t}\r\n\t\t\tgroups.push( (tokens = []) );\r\n\t\t}\r\n\r\n\t\tmatched = false;\r\n\r\n\t\t\/\/ Combinators\r\n\t\tif ( (match = rcombinators.exec( soFar )) ) {\r\n\t\t\tmatched = match.shift();\r\n\t\t\ttokens.push({\r\n\t\t\t\tvalue: matched,\r\n\t\t\t\t\/\/ Cast descendant combinators to space\r\n\t\t\t\ttype: match[0].replace( rtrim, \" \" )\r\n\t\t\t});\r\n\t\t\tsoFar = soFar.slice( matched.length );\r\n\t\t}\r\n\r\n\t\t\/\/ Filters\r\n\t\tfor ( type in Expr.filter ) {\r\n\t\t\tif ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||\r\n\t\t\t\t(match = preFilters[ type ]( match ))) ) {\r\n\t\t\t\tmatched = match.shift();\r\n\t\t\t\ttokens.push({\r\n\t\t\t\t\tvalue: matched,\r\n\t\t\t\t\ttype: type,\r\n\t\t\t\t\tmatches: match\r\n\t\t\t\t});\r\n\t\t\t\tsoFar = soFar.slice( matched.length );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif ( !matched ) {\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Return the length of the invalid excess\r\n\t\/\/ if we\'re just parsing\r\n\t\/\/ Otherwise, throw an error or return tokens\r\n\treturn parseOnly ?\r\n\t\tsoFar.length :\r\n\t\tsoFar ?\r\n\t\t\tSizzle.error( selector ) :\r\n\t\t\t\/\/ Cache the tokens\r\n\t\t\ttokenCache( selector, groups ).slice( 0 );\r\n};\r\n\r\nfunction toSelector( tokens ) {\r\n\tvar i = 0,\r\n\t\tlen = tokens.length,\r\n\t\tselector = \"\";\r\n\tfor ( ; i < len; i++ ) {\r\n\t\tselector += tokens[i].value;\r\n\t}\r\n\treturn selector;\r\n}\r\n\r\nfunction addCombinator( matcher, combinator, base ) {\r\n\tvar dir = combinator.dir,\r\n\t\tcheckNonElements = base && dir === \"parentNode\",\r\n\t\tdoneName = done++;\r\n\r\n\treturn combinator.first ?\r\n\t\t\/\/ Check against closest ancestor\/preceding element\r\n\t\tfunction( elem, context, xml ) {\r\n\t\t\twhile ( (elem = elem[ dir ]) ) {\r\n\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\r\n\t\t\t\t\treturn matcher( elem, context, xml );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} :\r\n\r\n\t\t\/\/ Check against all ancestor\/preceding elements\r\n\t\tfunction( elem, context, xml ) {\r\n\t\t\tvar oldCache, outerCache,\r\n\t\t\t\tnewCache = [ dirruns, doneName ];\r\n\r\n\t\t\t\/\/ We can\'t set arbitrary data on XML nodes, so they don\'t benefit from dir caching\r\n\t\t\tif ( xml ) {\r\n\t\t\t\twhile ( (elem = elem[ dir ]) ) {\r\n\t\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\r\n\t\t\t\t\t\tif ( matcher( elem, context, xml ) ) {\r\n\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\twhile ( (elem = elem[ dir ]) ) {\r\n\t\t\t\t\tif ( elem.nodeType === 1 || checkNonElements ) {\r\n\t\t\t\t\t\touterCache = elem[ expando ] || (elem[ expando ] = {});\r\n\t\t\t\t\t\tif ( (oldCache = outerCache[ dir ]) &&\r\n\t\t\t\t\t\t\toldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {\r\n\r\n\t\t\t\t\t\t\t\/\/ Assign to newCache so results back-propagate to previous elements\r\n\t\t\t\t\t\t\treturn (newCache[ 2 ] = oldCache[ 2 ]);\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\/\/ Reuse newcache so results back-propagate to previous elements\r\n\t\t\t\t\t\t\touterCache[ dir ] = newCache;\r\n\r\n\t\t\t\t\t\t\t\/\/ A match means we\'re done; a fail means we have to keep checking\r\n\t\t\t\t\t\t\tif ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {\r\n\t\t\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n}\r\n\r\nfunction elementMatcher( matchers ) {\r\n\treturn matchers.length > 1 ?\r\n\t\tfunction( elem, context, xml ) {\r\n\t\t\tvar i = matchers.length;\r\n\t\t\twhile ( i-- ) {\r\n\t\t\t\tif ( !matchers[i]( elem, context, xml ) ) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t} :\r\n\t\tmatchers[0];\r\n}\r\n\r\nfunction multipleContexts( selector, contexts, results ) {\r\n\tvar i = 0,\r\n\t\tlen = contexts.length;\r\n\tfor ( ; i < len; i++ ) {\r\n\t\tSizzle( selector, contexts[i], results );\r\n\t}\r\n\treturn results;\r\n}\r\n\r\nfunction condense( unmatched, map, filter, context, xml ) {\r\n\tvar elem,\r\n\t\tnewUnmatched = [],\r\n\t\ti = 0,\r\n\t\tlen = unmatched.length,\r\n\t\tmapped = map != null;\r\n\r\n\tfor ( ; i < len; i++ ) {\r\n\t\tif ( (elem = unmatched[i]) ) {\r\n\t\t\tif ( !filter || filter( elem, context, xml ) ) {\r\n\t\t\t\tnewUnmatched.push( elem );\r\n\t\t\t\tif ( mapped ) {\r\n\t\t\t\t\tmap.push( i );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn newUnmatched;\r\n}\r\n\r\nfunction setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {\r\n\tif ( postFilter && !postFilter[ expando ] ) {\r\n\t\tpostFilter = setMatcher( postFilter );\r\n\t}\r\n\tif ( postFinder && !postFinder[ expando ] ) {\r\n\t\tpostFinder = setMatcher( postFinder, postSelector );\r\n\t}\r\n\treturn markFunction(function( seed, results, context, xml ) {\r\n\t\tvar temp, i, elem,\r\n\t\t\tpreMap = [],\r\n\t\t\tpostMap = [],\r\n\t\t\tpreexisting = results.length,\r\n\r\n\t\t\t\/\/ Get initial elements from seed or context\r\n\t\t\telems = seed || multipleContexts( selector || \"*\", context.nodeType ? [ context ] : context, [] ),\r\n\r\n\t\t\t\/\/ Prefilter to get matcher input, preserving a map for seed-results synchronization\r\n\t\t\tmatcherIn = preFilter && ( seed || !selector ) ?\r\n\t\t\t\tcondense( elems, preMap, preFilter, context, xml ) :\r\n\t\t\t\telems,\r\n\r\n\t\t\tmatcherOut = matcher ?\r\n\t\t\t\t\/\/ If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,\r\n\t\t\t\tpostFinder || ( seed ? preFilter : preexisting || postFilter ) ?\r\n\r\n\t\t\t\t\t\/\/ ...intermediate processing is necessary\r\n\t\t\t\t\t[] :\r\n\r\n\t\t\t\t\t\/\/ ...otherwise use results directly\r\n\t\t\t\t\tresults :\r\n\t\t\t\tmatcherIn;\r\n\r\n\t\t\/\/ Find primary matches\r\n\t\tif ( matcher ) {\r\n\t\t\tmatcher( matcherIn, matcherOut, context, xml );\r\n\t\t}\r\n\r\n\t\t\/\/ Apply postFilter\r\n\t\tif ( postFilter ) {\r\n\t\t\ttemp = condense( matcherOut, postMap );\r\n\t\t\tpostFilter( temp, [], context, xml );\r\n\r\n\t\t\t\/\/ Un-match failing elements by moving them back to matcherIn\r\n\t\t\ti = temp.length;\r\n\t\t\twhile ( i-- ) {\r\n\t\t\t\tif ( (elem = temp[i]) ) {\r\n\t\t\t\t\tmatcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif ( seed ) {\r\n\t\t\tif ( postFinder || preFilter ) {\r\n\t\t\t\tif ( postFinder ) {\r\n\t\t\t\t\t\/\/ Get the final matcherOut by condensing this intermediate into postFinder contexts\r\n\t\t\t\t\ttemp = [];\r\n\t\t\t\t\ti = matcherOut.length;\r\n\t\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\t\tif ( (elem = matcherOut[i]) ) {\r\n\t\t\t\t\t\t\t\/\/ Restore matcherIn since elem is not yet a final match\r\n\t\t\t\t\t\t\ttemp.push( (matcherIn[i] = elem) );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tpostFinder( null, (matcherOut = []), temp, xml );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Move matched elements from seed to results to keep them synchronized\r\n\t\t\t\ti = matcherOut.length;\r\n\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\tif ( (elem = matcherOut[i]) &&\r\n\t\t\t\t\t\t(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {\r\n\r\n\t\t\t\t\t\tseed[temp] = !(results[temp] = elem);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\/\/ Add elements to results, through postFinder if defined\r\n\t\t} else {\r\n\t\t\tmatcherOut = condense(\r\n\t\t\t\tmatcherOut === results ?\r\n\t\t\t\t\tmatcherOut.splice( preexisting, matcherOut.length ) :\r\n\t\t\t\t\tmatcherOut\r\n\t\t\t);\r\n\t\t\tif ( postFinder ) {\r\n\t\t\t\tpostFinder( null, results, matcherOut, xml );\r\n\t\t\t} else {\r\n\t\t\t\tpush.apply( results, matcherOut );\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction matcherFromTokens( tokens ) {\r\n\tvar checkContext, matcher, j,\r\n\t\tlen = tokens.length,\r\n\t\tleadingRelative = Expr.relative[ tokens[0].type ],\r\n\t\timplicitRelative = leadingRelative || Expr.relative[\" \"],\r\n\t\ti = leadingRelative ? 1 : 0,\r\n\r\n\t\t\/\/ The foundational matcher ensures that elements are reachable from top-level context(s)\r\n\t\tmatchContext = addCombinator( function( elem ) {\r\n\t\t\treturn elem === checkContext;\r\n\t\t}, implicitRelative, true ),\r\n\t\tmatchAnyContext = addCombinator( function( elem ) {\r\n\t\t\treturn indexOf( checkContext, elem ) > -1;\r\n\t\t}, implicitRelative, true ),\r\n\t\tmatchers = [ function( elem, context, xml ) {\r\n\t\t\tvar ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (\r\n\t\t\t\t(checkContext = context).nodeType ?\r\n\t\t\t\t\tmatchContext( elem, context, xml ) :\r\n\t\t\t\t\tmatchAnyContext( elem, context, xml ) );\r\n\t\t\t\/\/ Avoid hanging onto element (issue #299)\r\n\t\t\tcheckContext = null;\r\n\t\t\treturn ret;\r\n\t\t} ];\r\n\r\n\tfor ( ; i < len; i++ ) {\r\n\t\tif ( (matcher = Expr.relative[ tokens[i].type ]) ) {\r\n\t\t\tmatchers = [ addCombinator(elementMatcher( matchers ), matcher) ];\r\n\t\t} else {\r\n\t\t\tmatcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );\r\n\r\n\t\t\t\/\/ Return special upon seeing a positional matcher\r\n\t\t\tif ( matcher[ expando ] ) {\r\n\t\t\t\t\/\/ Find the next relative operator (if any) for proper handling\r\n\t\t\t\tj = ++i;\r\n\t\t\t\tfor ( ; j < len; j++ ) {\r\n\t\t\t\t\tif ( Expr.relative[ tokens[j].type ] ) {\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn setMatcher(\r\n\t\t\t\t\ti > 1 && elementMatcher( matchers ),\r\n\t\t\t\t\ti > 1 && toSelector(\r\n\t\t\t\t\t\t\/\/ If the preceding token was a descendant combinator, insert an implicit any-element `*`\r\n\t\t\t\t\t\ttokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === \" \" ? \"*\" : \"\" })\r\n\t\t\t\t\t).replace( rtrim, \"$1\" ),\r\n\t\t\t\t\tmatcher,\r\n\t\t\t\t\ti < j && matcherFromTokens( tokens.slice( i, j ) ),\r\n\t\t\t\t\tj < len && matcherFromTokens( (tokens = tokens.slice( j )) ),\r\n\t\t\t\t\tj < len && toSelector( tokens )\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t\tmatchers.push( matcher );\r\n\t\t}\r\n\t}\r\n\r\n\treturn elementMatcher( matchers );\r\n}\r\n\r\nfunction matcherFromGroupMatchers( elementMatchers, setMatchers ) {\r\n\tvar bySet = setMatchers.length > 0,\r\n\t\tbyElement = elementMatchers.length > 0,\r\n\t\tsuperMatcher = function( seed, context, xml, results, outermost ) {\r\n\t\t\tvar elem, j, matcher,\r\n\t\t\t\tmatchedCount = 0,\r\n\t\t\t\ti = \"0\",\r\n\t\t\t\tunmatched = seed && [],\r\n\t\t\t\tsetMatched = [],\r\n\t\t\t\tcontextBackup = outermostContext,\r\n\t\t\t\t\/\/ We must always have either seed elements or outermost context\r\n\t\t\t\telems = seed || byElement && Expr.find[\"TAG\"]( \"*\", outermost ),\r\n\t\t\t\t\/\/ Use integer dirruns iff this is the outermost matcher\r\n\t\t\t\tdirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),\r\n\t\t\t\tlen = elems.length;\r\n\r\n\t\t\tif ( outermost ) {\r\n\t\t\t\toutermostContext = context !== document && context;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Add elements passing elementMatchers directly to results\r\n\t\t\t\/\/ Keep `i` a string if there are no elements so `matchedCount` will be \"00\" below\r\n\t\t\t\/\/ Support: IE<9, Safari\r\n\t\t\t\/\/ Tolerate NodeList properties (IE: \"length\"; Safari: <number>) matching elements by id\r\n\t\t\tfor ( ; i !== len && (elem = elems[i]) != null; i++ ) {\r\n\t\t\t\tif ( byElement && elem ) {\r\n\t\t\t\t\tj = 0;\r\n\t\t\t\t\twhile ( (matcher = elementMatchers[j++]) ) {\r\n\t\t\t\t\t\tif ( matcher( elem, context, xml ) ) {\r\n\t\t\t\t\t\t\tresults.push( elem );\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif ( outermost ) {\r\n\t\t\t\t\t\tdirruns = dirrunsUnique;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Track unmatched elements for set filters\r\n\t\t\t\tif ( bySet ) {\r\n\t\t\t\t\t\/\/ They will have gone through all possible matchers\r\n\t\t\t\t\tif ( (elem = !matcher && elem) ) {\r\n\t\t\t\t\t\tmatchedCount--;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Lengthen the array for every element, matched or not\r\n\t\t\t\t\tif ( seed ) {\r\n\t\t\t\t\t\tunmatched.push( elem );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Apply set filters to unmatched elements\r\n\t\t\tmatchedCount += i;\r\n\t\t\tif ( bySet && i !== matchedCount ) {\r\n\t\t\t\tj = 0;\r\n\t\t\t\twhile ( (matcher = setMatchers[j++]) ) {\r\n\t\t\t\t\tmatcher( unmatched, setMatched, context, xml );\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ( seed ) {\r\n\t\t\t\t\t\/\/ Reintegrate element matches to eliminate the need for sorting\r\n\t\t\t\t\tif ( matchedCount > 0 ) {\r\n\t\t\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\t\t\tif ( !(unmatched[i] || setMatched[i]) ) {\r\n\t\t\t\t\t\t\t\tsetMatched[i] = pop.call( results );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Discard index placeholder values to get only actual matches\r\n\t\t\t\t\tsetMatched = condense( setMatched );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Add matches to results\r\n\t\t\t\tpush.apply( results, setMatched );\r\n\r\n\t\t\t\t\/\/ Seedless set matches succeeding multiple successful matchers stipulate sorting\r\n\t\t\t\tif ( outermost && !seed && setMatched.length > 0 &&\r\n\t\t\t\t\t( matchedCount + setMatchers.length ) > 1 ) {\r\n\r\n\t\t\t\t\tSizzle.uniqueSort( results );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Override manipulation of globals by nested matchers\r\n\t\t\tif ( outermost ) {\r\n\t\t\t\tdirruns = dirrunsUnique;\r\n\t\t\t\toutermostContext = contextBackup;\r\n\t\t\t}\r\n\r\n\t\t\treturn unmatched;\r\n\t\t};\r\n\r\n\treturn bySet ?\r\n\t\tmarkFunction( superMatcher ) :\r\n\t\tsuperMatcher;\r\n}\r\n\r\ncompile = Sizzle.compile = function( selector, match \/* Internal Use Only *\/ ) {\r\n\tvar i,\r\n\t\tsetMatchers = [],\r\n\t\telementMatchers = [],\r\n\t\tcached = compilerCache[ selector + \" \" ];\r\n\r\n\tif ( !cached ) {\r\n\t\t\/\/ Generate a function of recursive functions that can be used to check each element\r\n\t\tif ( !match ) {\r\n\t\t\tmatch = tokenize( selector );\r\n\t\t}\r\n\t\ti = match.length;\r\n\t\twhile ( i-- ) {\r\n\t\t\tcached = matcherFromTokens( match[i] );\r\n\t\t\tif ( cached[ expando ] ) {\r\n\t\t\t\tsetMatchers.push( cached );\r\n\t\t\t} else {\r\n\t\t\t\telementMatchers.push( cached );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Cache the compiled function\r\n\t\tcached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );\r\n\r\n\t\t\/\/ Save selector and tokenization\r\n\t\tcached.selector = selector;\r\n\t}\r\n\treturn cached;\r\n};\r\n\r\n\/**\r\n * A low-level selection function that works with Sizzle\'s compiled\r\n *  selector functions\r\n * @param {String|Function} selector A selector or a pre-compiled\r\n *  selector function built with Sizzle.compile\r\n * @param {Element} context\r\n * @param {Array} [results]\r\n * @param {Array} [seed] A set of elements to match against\r\n *\/\r\nselect = Sizzle.select = function( selector, context, results, seed ) {\r\n\tvar i, tokens, token, type, find,\r\n\t\tcompiled = typeof selector === \"function\" && selector,\r\n\t\tmatch = !seed && tokenize( (selector = compiled.selector || selector) );\r\n\r\n\tresults = results || [];\r\n\r\n\t\/\/ Try to minimize operations if there is no seed and only one group\r\n\tif ( match.length === 1 ) {\r\n\r\n\t\t\/\/ Take a shortcut and set the context if the root selector is an ID\r\n\t\ttokens = match[0] = match[0].slice( 0 );\r\n\t\tif ( tokens.length > 2 && (token = tokens[0]).type === \"ID\" &&\r\n\t\t\t\tsupport.getById && context.nodeType === 9 && documentIsHTML &&\r\n\t\t\t\tExpr.relative[ tokens[1].type ] ) {\r\n\r\n\t\t\tcontext = ( Expr.find[\"ID\"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];\r\n\t\t\tif ( !context ) {\r\n\t\t\t\treturn results;\r\n\r\n\t\t\t\/\/ Precompiled matchers will still verify ancestry, so step up a level\r\n\t\t\t} else if ( compiled ) {\r\n\t\t\t\tcontext = context.parentNode;\r\n\t\t\t}\r\n\r\n\t\t\tselector = selector.slice( tokens.shift().value.length );\r\n\t\t}\r\n\r\n\t\t\/\/ Fetch a seed set for right-to-left matching\r\n\t\ti = matchExpr[\"needsContext\"].test( selector ) ? 0 : tokens.length;\r\n\t\twhile ( i-- ) {\r\n\t\t\ttoken = tokens[i];\r\n\r\n\t\t\t\/\/ Abort if we hit a combinator\r\n\t\t\tif ( Expr.relative[ (type = token.type) ] ) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tif ( (find = Expr.find[ type ]) ) {\r\n\t\t\t\t\/\/ Search, expanding context for leading sibling combinators\r\n\t\t\t\tif ( (seed = find(\r\n\t\t\t\t\ttoken.matches[0].replace( runescape, funescape ),\r\n\t\t\t\t\trsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context\r\n\t\t\t\t)) ) {\r\n\r\n\t\t\t\t\t\/\/ If seed is empty or no tokens remain, we can return early\r\n\t\t\t\t\ttokens.splice( i, 1 );\r\n\t\t\t\t\tselector = seed.length && toSelector( tokens );\r\n\t\t\t\t\tif ( !selector ) {\r\n\t\t\t\t\t\tpush.apply( results, seed );\r\n\t\t\t\t\t\treturn results;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Compile and execute a filtering function if one is not provided\r\n\t\/\/ Provide `match` to avoid retokenization if we modified the selector above\r\n\t( compiled || compile( selector, match ) )(\r\n\t\tseed,\r\n\t\tcontext,\r\n\t\t!documentIsHTML,\r\n\t\tresults,\r\n\t\trsibling.test( selector ) && testContext( context.parentNode ) || context\r\n\t);\r\n\treturn results;\r\n};\r\n\r\n\/\/ One-time assignments\r\n\r\n\/\/ Sort stability\r\nsupport.sortStable = expando.split(\"\").sort( sortOrder ).join(\"\") === expando;\r\n\r\n\/\/ Support: Chrome 14-35+\r\n\/\/ Always assume duplicates if they aren\'t passed to the comparison function\r\nsupport.detectDuplicates = !!hasDuplicate;\r\n\r\n\/\/ Initialize against the default document\r\nsetDocument();\r\n\r\n\/\/ Support: Webkit<537.32 - Safari 6.0.3\/Chrome 25 (fixed in Chrome 27)\r\n\/\/ Detached nodes confoundingly follow *each other*\r\nsupport.sortDetached = assert(function( div1 ) {\r\n\t\/\/ Should return 1, but returns 4 (following)\r\n\treturn div1.compareDocumentPosition( document.createElement(\"div\") ) & 1;\r\n});\r\n\r\n\/\/ Support: IE<8\r\n\/\/ Prevent attribute\/property \"interpolation\"\r\n\/\/ http:\/\/msdn.microsoft.com\/en-us\/library\/ms536429%28VS.85%29.aspx\r\nif ( !assert(function( div ) {\r\n\tdiv.innerHTML = \"<a href=\'#\'><\/a>\";\r\n\treturn div.firstChild.getAttribute(\"href\") === \"#\" ;\r\n}) ) {\r\n\taddHandle( \"type|href|height|width\", function( elem, name, isXML ) {\r\n\t\tif ( !isXML ) {\r\n\t\t\treturn elem.getAttribute( name, name.toLowerCase() === \"type\" ? 1 : 2 );\r\n\t\t}\r\n\t});\r\n}\r\n\r\n\/\/ Support: IE<9\r\n\/\/ Use defaultValue in place of getAttribute(\"value\")\r\nif ( !support.attributes || !assert(function( div ) {\r\n\tdiv.innerHTML = \"<input\/>\";\r\n\tdiv.firstChild.setAttribute( \"value\", \"\" );\r\n\treturn div.firstChild.getAttribute( \"value\" ) === \"\";\r\n}) ) {\r\n\taddHandle( \"value\", function( elem, name, isXML ) {\r\n\t\tif ( !isXML && elem.nodeName.toLowerCase() === \"input\" ) {\r\n\t\t\treturn elem.defaultValue;\r\n\t\t}\r\n\t});\r\n}\r\n\r\n\/\/ Support: IE<9\r\n\/\/ Use getAttributeNode to fetch booleans when getAttribute lies\r\nif ( !assert(function( div ) {\r\n\treturn div.getAttribute(\"disabled\") == null;\r\n}) ) {\r\n\taddHandle( booleans, function( elem, name, isXML ) {\r\n\t\tvar val;\r\n\t\tif ( !isXML ) {\r\n\t\t\treturn elem[ name ] === true ? name.toLowerCase() :\r\n\t\t\t\t\t(val = elem.getAttributeNode( name )) && val.specified ?\r\n\t\t\t\t\tval.value :\r\n\t\t\t\tnull;\r\n\t\t}\r\n\t});\r\n}\r\n\r\nreturn Sizzle;\r\n\r\n})( window );\r\n\r\n\r\n\r\njQuery.find = Sizzle;\r\njQuery.expr = Sizzle.selectors;\r\njQuery.expr[\":\"] = jQuery.expr.pseudos;\r\njQuery.unique = Sizzle.uniqueSort;\r\njQuery.text = Sizzle.getText;\r\njQuery.isXMLDoc = Sizzle.isXML;\r\njQuery.contains = Sizzle.contains;\r\n\r\n\r\n\r\nvar rneedsContext = jQuery.expr.match.needsContext;\r\n\r\nvar rsingleTag = (\/^<(\\w+)\\s*\\\/?>(?:<\\\/\\1>|)$\/);\r\n\r\n\r\n\r\nvar risSimple = \/^.[^:#\\[\\.,]*$\/;\r\n\r\n\/\/ Implement the identical functionality for filter and not\r\nfunction winnow( elements, qualifier, not ) {\r\n\tif ( jQuery.isFunction( qualifier ) ) {\r\n\t\treturn jQuery.grep( elements, function( elem, i ) {\r\n\t\t\t\/* jshint -W018 *\/\r\n\t\t\treturn !!qualifier.call( elem, i, elem ) !== not;\r\n\t\t});\r\n\r\n\t}\r\n\r\n\tif ( qualifier.nodeType ) {\r\n\t\treturn jQuery.grep( elements, function( elem ) {\r\n\t\t\treturn ( elem === qualifier ) !== not;\r\n\t\t});\r\n\r\n\t}\r\n\r\n\tif ( typeof qualifier === \"string\" ) {\r\n\t\tif ( risSimple.test( qualifier ) ) {\r\n\t\t\treturn jQuery.filter( qualifier, elements, not );\r\n\t\t}\r\n\r\n\t\tqualifier = jQuery.filter( qualifier, elements );\r\n\t}\r\n\r\n\treturn jQuery.grep( elements, function( elem ) {\r\n\t\treturn ( indexOf.call( qualifier, elem ) >= 0 ) !== not;\r\n\t});\r\n}\r\n\r\njQuery.filter = function( expr, elems, not ) {\r\n\tvar elem = elems[ 0 ];\r\n\r\n\tif ( not ) {\r\n\t\texpr = \":not(\" + expr + \")\";\r\n\t}\r\n\r\n\treturn elems.length === 1 && elem.nodeType === 1 ?\r\n\t\tjQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :\r\n\t\tjQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {\r\n\t\t\treturn elem.nodeType === 1;\r\n\t\t}));\r\n};\r\n\r\njQuery.fn.extend({\r\n\tfind: function( selector ) {\r\n\t\tvar i,\r\n\t\t\tlen = this.length,\r\n\t\t\tret = [],\r\n\t\t\tself = this;\r\n\r\n\t\tif ( typeof selector !== \"string\" ) {\r\n\t\t\treturn this.pushStack( jQuery( selector ).filter(function() {\r\n\t\t\t\tfor ( i = 0; i < len; i++ ) {\r\n\t\t\t\t\tif ( jQuery.contains( self[ i ], this ) ) {\r\n\t\t\t\t\t\treturn true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}) );\r\n\t\t}\r\n\r\n\t\tfor ( i = 0; i < len; i++ ) {\r\n\t\t\tjQuery.find( selector, self[ i ], ret );\r\n\t\t}\r\n\r\n\t\t\/\/ Needed because $( selector, context ) becomes $( context ).find( selector )\r\n\t\tret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );\r\n\t\tret.selector = this.selector ? this.selector + \" \" + selector : selector;\r\n\t\treturn ret;\r\n\t},\r\n\tfilter: function( selector ) {\r\n\t\treturn this.pushStack( winnow(this, selector || [], false) );\r\n\t},\r\n\tnot: function( selector ) {\r\n\t\treturn this.pushStack( winnow(this, selector || [], true) );\r\n\t},\r\n\tis: function( selector ) {\r\n\t\treturn !!winnow(\r\n\t\t\tthis,\r\n\r\n\t\t\t\/\/ If this is a positional\/relative selector, check membership in the returned set\r\n\t\t\t\/\/ so $(\"p:first\").is(\"p:last\") won\'t return true for a doc with two \"p\".\r\n\t\t\ttypeof selector === \"string\" && rneedsContext.test( selector ) ?\r\n\t\t\t\tjQuery( selector ) :\r\n\t\t\t\tselector || [],\r\n\t\t\tfalse\r\n\t\t).length;\r\n\t}\r\n});\r\n\r\n\r\n\/\/ Initialize a jQuery object\r\n\r\n\r\n\/\/ A central reference to the root jQuery(document)\r\nvar rootjQuery,\r\n\r\n\t\/\/ A simple way to check for HTML strings\r\n\t\/\/ Prioritize #id over <tag> to avoid XSS via location.hash (#9521)\r\n\t\/\/ Strict HTML recognition (#11290: must start with <)\r\n\trquickExpr = \/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$\/,\r\n\r\n\tinit = jQuery.fn.init = function( selector, context ) {\r\n\t\tvar match, elem;\r\n\r\n\t\t\/\/ HANDLE: $(\"\"), $(null), $(undefined), $(false)\r\n\t\tif ( !selector ) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\t\/\/ Handle HTML strings\r\n\t\tif ( typeof selector === \"string\" ) {\r\n\t\t\tif ( selector[0] === \"<\" && selector[ selector.length - 1 ] === \">\" && selector.length >= 3 ) {\r\n\t\t\t\t\/\/ Assume that strings that start and end with <> are HTML and skip the regex check\r\n\t\t\t\tmatch = [ null, selector, null ];\r\n\r\n\t\t\t} else {\r\n\t\t\t\tmatch = rquickExpr.exec( selector );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Match html or make sure no context is specified for #id\r\n\t\t\tif ( match && (match[1] || !context) ) {\r\n\r\n\t\t\t\t\/\/ HANDLE: $(html) -> $(array)\r\n\t\t\t\tif ( match[1] ) {\r\n\t\t\t\t\tcontext = context instanceof jQuery ? context[0] : context;\r\n\r\n\t\t\t\t\t\/\/ Option to run scripts is true for back-compat\r\n\t\t\t\t\t\/\/ Intentionally let the error be thrown if parseHTML is not present\r\n\t\t\t\t\tjQuery.merge( this, jQuery.parseHTML(\r\n\t\t\t\t\t\tmatch[1],\r\n\t\t\t\t\t\tcontext && context.nodeType ? context.ownerDocument || context : document,\r\n\t\t\t\t\t\ttrue\r\n\t\t\t\t\t) );\r\n\r\n\t\t\t\t\t\/\/ HANDLE: $(html, props)\r\n\t\t\t\t\tif ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {\r\n\t\t\t\t\t\tfor ( match in context ) {\r\n\t\t\t\t\t\t\t\/\/ Properties of context are called as methods if possible\r\n\t\t\t\t\t\t\tif ( jQuery.isFunction( this[ match ] ) ) {\r\n\t\t\t\t\t\t\t\tthis[ match ]( context[ match ] );\r\n\r\n\t\t\t\t\t\t\t\/\/ ...and otherwise set as attributes\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tthis.attr( match, context[ match ] );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn this;\r\n\r\n\t\t\t\t\/\/ HANDLE: $(#id)\r\n\t\t\t\t} else {\r\n\t\t\t\t\telem = document.getElementById( match[2] );\r\n\r\n\t\t\t\t\t\/\/ Support: Blackberry 4.6\r\n\t\t\t\t\t\/\/ gEBID returns nodes no longer in the document (#6963)\r\n\t\t\t\t\tif ( elem && elem.parentNode ) {\r\n\t\t\t\t\t\t\/\/ Inject the element directly into the jQuery object\r\n\t\t\t\t\t\tthis.length = 1;\r\n\t\t\t\t\t\tthis[0] = elem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tthis.context = document;\r\n\t\t\t\t\tthis.selector = selector;\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t}\r\n\r\n\t\t\t\/\/ HANDLE: $(expr, $(...))\r\n\t\t\t} else if ( !context || context.jquery ) {\r\n\t\t\t\treturn ( context || rootjQuery ).find( selector );\r\n\r\n\t\t\t\/\/ HANDLE: $(expr, context)\r\n\t\t\t\/\/ (which is just equivalent to: $(context).find(expr)\r\n\t\t\t} else {\r\n\t\t\t\treturn this.constructor( context ).find( selector );\r\n\t\t\t}\r\n\r\n\t\t\/\/ HANDLE: $(DOMElement)\r\n\t\t} else if ( selector.nodeType ) {\r\n\t\t\tthis.context = this[0] = selector;\r\n\t\t\tthis.length = 1;\r\n\t\t\treturn this;\r\n\r\n\t\t\/\/ HANDLE: $(function)\r\n\t\t\/\/ Shortcut for document ready\r\n\t\t} else if ( jQuery.isFunction( selector ) ) {\r\n\t\t\treturn typeof rootjQuery.ready !== \"undefined\" ?\r\n\t\t\t\trootjQuery.ready( selector ) :\r\n\t\t\t\t\/\/ Execute immediately if ready is not present\r\n\t\t\t\tselector( jQuery );\r\n\t\t}\r\n\r\n\t\tif ( selector.selector !== undefined ) {\r\n\t\t\tthis.selector = selector.selector;\r\n\t\t\tthis.context = selector.context;\r\n\t\t}\r\n\r\n\t\treturn jQuery.makeArray( selector, this );\r\n\t};\r\n\r\n\/\/ Give the init function the jQuery prototype for later instantiation\r\ninit.prototype = jQuery.fn;\r\n\r\n\/\/ Initialize central reference\r\nrootjQuery = jQuery( document );\r\n\r\n\r\nvar rparentsprev = \/^(?:parents|prev(?:Until|All))\/,\r\n\t\/\/ Methods guaranteed to produce a unique set when starting from a unique set\r\n\tguaranteedUnique = {\r\n\t\tchildren: true,\r\n\t\tcontents: true,\r\n\t\tnext: true,\r\n\t\tprev: true\r\n\t};\r\n\r\njQuery.extend({\r\n\tdir: function( elem, dir, until ) {\r\n\t\tvar matched = [],\r\n\t\t\ttruncate = until !== undefined;\r\n\r\n\t\twhile ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {\r\n\t\t\tif ( elem.nodeType === 1 ) {\r\n\t\t\t\tif ( truncate && jQuery( elem ).is( until ) ) {\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t\tmatched.push( elem );\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn matched;\r\n\t},\r\n\r\n\tsibling: function( n, elem ) {\r\n\t\tvar matched = [];\r\n\r\n\t\tfor ( ; n; n = n.nextSibling ) {\r\n\t\t\tif ( n.nodeType === 1 && n !== elem ) {\r\n\t\t\t\tmatched.push( n );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn matched;\r\n\t}\r\n});\r\n\r\njQuery.fn.extend({\r\n\thas: function( target ) {\r\n\t\tvar targets = jQuery( target, this ),\r\n\t\t\tl = targets.length;\r\n\r\n\t\treturn this.filter(function() {\r\n\t\t\tvar i = 0;\r\n\t\t\tfor ( ; i < l; i++ ) {\r\n\t\t\t\tif ( jQuery.contains( this, targets[i] ) ) {\r\n\t\t\t\t\treturn true;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\tclosest: function( selectors, context ) {\r\n\t\tvar cur,\r\n\t\t\ti = 0,\r\n\t\t\tl = this.length,\r\n\t\t\tmatched = [],\r\n\t\t\tpos = rneedsContext.test( selectors ) || typeof selectors !== \"string\" ?\r\n\t\t\t\tjQuery( selectors, context || this.context ) :\r\n\t\t\t\t0;\r\n\r\n\t\tfor ( ; i < l; i++ ) {\r\n\t\t\tfor ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {\r\n\t\t\t\t\/\/ Always skip document fragments\r\n\t\t\t\tif ( cur.nodeType < 11 && (pos ?\r\n\t\t\t\t\tpos.index(cur) > -1 :\r\n\r\n\t\t\t\t\t\/\/ Don\'t pass non-elements to Sizzle\r\n\t\t\t\t\tcur.nodeType === 1 &&\r\n\t\t\t\t\t\tjQuery.find.matchesSelector(cur, selectors)) ) {\r\n\r\n\t\t\t\t\tmatched.push( cur );\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );\r\n\t},\r\n\r\n\t\/\/ Determine the position of an element within the set\r\n\tindex: function( elem ) {\r\n\r\n\t\t\/\/ No argument, return index in parent\r\n\t\tif ( !elem ) {\r\n\t\t\treturn ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;\r\n\t\t}\r\n\r\n\t\t\/\/ Index in selector\r\n\t\tif ( typeof elem === \"string\" ) {\r\n\t\t\treturn indexOf.call( jQuery( elem ), this[ 0 ] );\r\n\t\t}\r\n\r\n\t\t\/\/ Locate the position of the desired element\r\n\t\treturn indexOf.call( this,\r\n\r\n\t\t\t\/\/ If it receives a jQuery object, the first element is used\r\n\t\t\telem.jquery ? elem[ 0 ] : elem\r\n\t\t);\r\n\t},\r\n\r\n\tadd: function( selector, context ) {\r\n\t\treturn this.pushStack(\r\n\t\t\tjQuery.unique(\r\n\t\t\t\tjQuery.merge( this.get(), jQuery( selector, context ) )\r\n\t\t\t)\r\n\t\t);\r\n\t},\r\n\r\n\taddBack: function( selector ) {\r\n\t\treturn this.add( selector == null ?\r\n\t\t\tthis.prevObject : this.prevObject.filter(selector)\r\n\t\t);\r\n\t}\r\n});\r\n\r\nfunction sibling( cur, dir ) {\r\n\twhile ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}\r\n\treturn cur;\r\n}\r\n\r\njQuery.each({\r\n\tparent: function( elem ) {\r\n\t\tvar parent = elem.parentNode;\r\n\t\treturn parent && parent.nodeType !== 11 ? parent : null;\r\n\t},\r\n\tparents: function( elem ) {\r\n\t\treturn jQuery.dir( elem, \"parentNode\" );\r\n\t},\r\n\tparentsUntil: function( elem, i, until ) {\r\n\t\treturn jQuery.dir( elem, \"parentNode\", until );\r\n\t},\r\n\tnext: function( elem ) {\r\n\t\treturn sibling( elem, \"nextSibling\" );\r\n\t},\r\n\tprev: function( elem ) {\r\n\t\treturn sibling( elem, \"previousSibling\" );\r\n\t},\r\n\tnextAll: function( elem ) {\r\n\t\treturn jQuery.dir( elem, \"nextSibling\" );\r\n\t},\r\n\tprevAll: function( elem ) {\r\n\t\treturn jQuery.dir( elem, \"previousSibling\" );\r\n\t},\r\n\tnextUntil: function( elem, i, until ) {\r\n\t\treturn jQuery.dir( elem, \"nextSibling\", until );\r\n\t},\r\n\tprevUntil: function( elem, i, until ) {\r\n\t\treturn jQuery.dir( elem, \"previousSibling\", until );\r\n\t},\r\n\tsiblings: function( elem ) {\r\n\t\treturn jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );\r\n\t},\r\n\tchildren: function( elem ) {\r\n\t\treturn jQuery.sibling( elem.firstChild );\r\n\t},\r\n\tcontents: function( elem ) {\r\n\t\treturn elem.contentDocument || jQuery.merge( [], elem.childNodes );\r\n\t}\r\n}, function( name, fn ) {\r\n\tjQuery.fn[ name ] = function( until, selector ) {\r\n\t\tvar matched = jQuery.map( this, fn, until );\r\n\r\n\t\tif ( name.slice( -5 ) !== \"Until\" ) {\r\n\t\t\tselector = until;\r\n\t\t}\r\n\r\n\t\tif ( selector && typeof selector === \"string\" ) {\r\n\t\t\tmatched = jQuery.filter( selector, matched );\r\n\t\t}\r\n\r\n\t\tif ( this.length > 1 ) {\r\n\t\t\t\/\/ Remove duplicates\r\n\t\t\tif ( !guaranteedUnique[ name ] ) {\r\n\t\t\t\tjQuery.unique( matched );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Reverse order for parents* and prev-derivatives\r\n\t\t\tif ( rparentsprev.test( name ) ) {\r\n\t\t\t\tmatched.reverse();\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this.pushStack( matched );\r\n\t};\r\n});\r\nvar rnotwhite = (\/\\S+\/g);\r\n\r\n\r\n\r\n\/\/ String to Object options format cache\r\nvar optionsCache = {};\r\n\r\n\/\/ Convert String-formatted options into Object-formatted ones and store in cache\r\nfunction createOptions( options ) {\r\n\tvar object = optionsCache[ options ] = {};\r\n\tjQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {\r\n\t\tobject[ flag ] = true;\r\n\t});\r\n\treturn object;\r\n}\r\n\r\n\/*\r\n * Create a callback list using the following parameters:\r\n *\r\n *\toptions: an optional list of space-separated options that will change how\r\n *\t\t\tthe callback list behaves or a more traditional option object\r\n *\r\n * By default a callback list will act like an event callback list and can be\r\n * \"fired\" multiple times.\r\n *\r\n * Possible options:\r\n *\r\n *\tonce:\t\t\twill ensure the callback list can only be fired once (like a Deferred)\r\n *\r\n *\tmemory:\t\t\twill keep track of previous values and will call any callback added\r\n *\t\t\t\t\tafter the list has been fired right away with the latest \"memorized\"\r\n *\t\t\t\t\tvalues (like a Deferred)\r\n *\r\n *\tunique:\t\t\twill ensure a callback can only be added once (no duplicate in the list)\r\n *\r\n *\tstopOnFalse:\tinterrupt callings when a callback returns false\r\n *\r\n *\/\r\njQuery.Callbacks = function( options ) {\r\n\r\n\t\/\/ Convert options from String-formatted to Object-formatted if needed\r\n\t\/\/ (we check in cache first)\r\n\toptions = typeof options === \"string\" ?\r\n\t\t( optionsCache[ options ] || createOptions( options ) ) :\r\n\t\tjQuery.extend( {}, options );\r\n\r\n\tvar \/\/ Last fire value (for non-forgettable lists)\r\n\t\tmemory,\r\n\t\t\/\/ Flag to know if list was already fired\r\n\t\tfired,\r\n\t\t\/\/ Flag to know if list is currently firing\r\n\t\tfiring,\r\n\t\t\/\/ First callback to fire (used internally by add and fireWith)\r\n\t\tfiringStart,\r\n\t\t\/\/ End of the loop when firing\r\n\t\tfiringLength,\r\n\t\t\/\/ Index of currently firing callback (modified by remove if needed)\r\n\t\tfiringIndex,\r\n\t\t\/\/ Actual callback list\r\n\t\tlist = [],\r\n\t\t\/\/ Stack of fire calls for repeatable lists\r\n\t\tstack = !options.once && [],\r\n\t\t\/\/ Fire callbacks\r\n\t\tfire = function( data ) {\r\n\t\t\tmemory = options.memory && data;\r\n\t\t\tfired = true;\r\n\t\t\tfiringIndex = firingStart || 0;\r\n\t\t\tfiringStart = 0;\r\n\t\t\tfiringLength = list.length;\r\n\t\t\tfiring = true;\r\n\t\t\tfor ( ; list && firingIndex < firingLength; firingIndex++ ) {\r\n\t\t\t\tif ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {\r\n\t\t\t\t\tmemory = false; \/\/ To prevent further calls using add\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tfiring = false;\r\n\t\t\tif ( list ) {\r\n\t\t\t\tif ( stack ) {\r\n\t\t\t\t\tif ( stack.length ) {\r\n\t\t\t\t\t\tfire( stack.shift() );\r\n\t\t\t\t\t}\r\n\t\t\t\t} else if ( memory ) {\r\n\t\t\t\t\tlist = [];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tself.disable();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t},\r\n\t\t\/\/ Actual Callbacks object\r\n\t\tself = {\r\n\t\t\t\/\/ Add a callback or a collection of callbacks to the list\r\n\t\t\tadd: function() {\r\n\t\t\t\tif ( list ) {\r\n\t\t\t\t\t\/\/ First, we save the current length\r\n\t\t\t\t\tvar start = list.length;\r\n\t\t\t\t\t(function add( args ) {\r\n\t\t\t\t\t\tjQuery.each( args, function( _, arg ) {\r\n\t\t\t\t\t\t\tvar type = jQuery.type( arg );\r\n\t\t\t\t\t\t\tif ( type === \"function\" ) {\r\n\t\t\t\t\t\t\t\tif ( !options.unique || !self.has( arg ) ) {\r\n\t\t\t\t\t\t\t\t\tlist.push( arg );\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t} else if ( arg && arg.length && type !== \"string\" ) {\r\n\t\t\t\t\t\t\t\t\/\/ Inspect recursively\r\n\t\t\t\t\t\t\t\tadd( arg );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t})( arguments );\r\n\t\t\t\t\t\/\/ Do we need to add the callbacks to the\r\n\t\t\t\t\t\/\/ current firing batch?\r\n\t\t\t\t\tif ( firing ) {\r\n\t\t\t\t\t\tfiringLength = list.length;\r\n\t\t\t\t\t\/\/ With memory, if we\'re not firing then\r\n\t\t\t\t\t\/\/ we should call right away\r\n\t\t\t\t\t} else if ( memory ) {\r\n\t\t\t\t\t\tfiringStart = start;\r\n\t\t\t\t\t\tfire( memory );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Remove a callback from the list\r\n\t\t\tremove: function() {\r\n\t\t\t\tif ( list ) {\r\n\t\t\t\t\tjQuery.each( arguments, function( _, arg ) {\r\n\t\t\t\t\t\tvar index;\r\n\t\t\t\t\t\twhile ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {\r\n\t\t\t\t\t\t\tlist.splice( index, 1 );\r\n\t\t\t\t\t\t\t\/\/ Handle firing indexes\r\n\t\t\t\t\t\t\tif ( firing ) {\r\n\t\t\t\t\t\t\t\tif ( index <= firingLength ) {\r\n\t\t\t\t\t\t\t\t\tfiringLength--;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tif ( index <= firingIndex ) {\r\n\t\t\t\t\t\t\t\t\tfiringIndex--;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t}\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Check if a given callback is in the list.\r\n\t\t\t\/\/ If no argument is given, return whether or not list has callbacks attached.\r\n\t\t\thas: function( fn ) {\r\n\t\t\t\treturn fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );\r\n\t\t\t},\r\n\t\t\t\/\/ Remove all callbacks from the list\r\n\t\t\tempty: function() {\r\n\t\t\t\tlist = [];\r\n\t\t\t\tfiringLength = 0;\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Have the list do nothing anymore\r\n\t\t\tdisable: function() {\r\n\t\t\t\tlist = stack = memory = undefined;\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Is it disabled?\r\n\t\t\tdisabled: function() {\r\n\t\t\t\treturn !list;\r\n\t\t\t},\r\n\t\t\t\/\/ Lock the list in its current state\r\n\t\t\tlock: function() {\r\n\t\t\t\tstack = undefined;\r\n\t\t\t\tif ( !memory ) {\r\n\t\t\t\t\tself.disable();\r\n\t\t\t\t}\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Is it locked?\r\n\t\t\tlocked: function() {\r\n\t\t\t\treturn !stack;\r\n\t\t\t},\r\n\t\t\t\/\/ Call all callbacks with the given context and arguments\r\n\t\t\tfireWith: function( context, args ) {\r\n\t\t\t\tif ( list && ( !fired || stack ) ) {\r\n\t\t\t\t\targs = args || [];\r\n\t\t\t\t\targs = [ context, args.slice ? args.slice() : args ];\r\n\t\t\t\t\tif ( firing ) {\r\n\t\t\t\t\t\tstack.push( args );\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tfire( args );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ Call all the callbacks with the given arguments\r\n\t\t\tfire: function() {\r\n\t\t\t\tself.fireWith( this, arguments );\r\n\t\t\t\treturn this;\r\n\t\t\t},\r\n\t\t\t\/\/ To know if the callbacks have already been called at least once\r\n\t\t\tfired: function() {\r\n\t\t\t\treturn !!fired;\r\n\t\t\t}\r\n\t\t};\r\n\r\n\treturn self;\r\n};\r\n\r\n\r\njQuery.extend({\r\n\r\n\tDeferred: function( func ) {\r\n\t\tvar tuples = [\r\n\t\t\t\t\/\/ action, add listener, listener list, final state\r\n\t\t\t\t[ \"resolve\", \"done\", jQuery.Callbacks(\"once memory\"), \"resolved\" ],\r\n\t\t\t\t[ \"reject\", \"fail\", jQuery.Callbacks(\"once memory\"), \"rejected\" ],\r\n\t\t\t\t[ \"notify\", \"progress\", jQuery.Callbacks(\"memory\") ]\r\n\t\t\t],\r\n\t\t\tstate = \"pending\",\r\n\t\t\tpromise = {\r\n\t\t\t\tstate: function() {\r\n\t\t\t\t\treturn state;\r\n\t\t\t\t},\r\n\t\t\t\talways: function() {\r\n\t\t\t\t\tdeferred.done( arguments ).fail( arguments );\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t},\r\n\t\t\t\tthen: function( \/* fnDone, fnFail, fnProgress *\/ ) {\r\n\t\t\t\t\tvar fns = arguments;\r\n\t\t\t\t\treturn jQuery.Deferred(function( newDefer ) {\r\n\t\t\t\t\t\tjQuery.each( tuples, function( i, tuple ) {\r\n\t\t\t\t\t\t\tvar fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];\r\n\t\t\t\t\t\t\t\/\/ deferred[ done | fail | progress ] for forwarding actions to newDefer\r\n\t\t\t\t\t\t\tdeferred[ tuple[1] ](function() {\r\n\t\t\t\t\t\t\t\tvar returned = fn && fn.apply( this, arguments );\r\n\t\t\t\t\t\t\t\tif ( returned && jQuery.isFunction( returned.promise ) ) {\r\n\t\t\t\t\t\t\t\t\treturned.promise()\r\n\t\t\t\t\t\t\t\t\t\t.done( newDefer.resolve )\r\n\t\t\t\t\t\t\t\t\t\t.fail( newDefer.reject )\r\n\t\t\t\t\t\t\t\t\t\t.progress( newDefer.notify );\r\n\t\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\t\tnewDefer[ tuple[ 0 ] + \"With\" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\tfns = null;\r\n\t\t\t\t\t}).promise();\r\n\t\t\t\t},\r\n\t\t\t\t\/\/ Get a promise for this deferred\r\n\t\t\t\t\/\/ If obj is provided, the promise aspect is added to the object\r\n\t\t\t\tpromise: function( obj ) {\r\n\t\t\t\t\treturn obj != null ? jQuery.extend( obj, promise ) : promise;\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tdeferred = {};\r\n\r\n\t\t\/\/ Keep pipe for back-compat\r\n\t\tpromise.pipe = promise.then;\r\n\r\n\t\t\/\/ Add list-specific methods\r\n\t\tjQuery.each( tuples, function( i, tuple ) {\r\n\t\t\tvar list = tuple[ 2 ],\r\n\t\t\t\tstateString = tuple[ 3 ];\r\n\r\n\t\t\t\/\/ promise[ done | fail | progress ] = list.add\r\n\t\t\tpromise[ tuple[1] ] = list.add;\r\n\r\n\t\t\t\/\/ Handle state\r\n\t\t\tif ( stateString ) {\r\n\t\t\t\tlist.add(function() {\r\n\t\t\t\t\t\/\/ state = [ resolved | rejected ]\r\n\t\t\t\t\tstate = stateString;\r\n\r\n\t\t\t\t\/\/ [ reject_list | resolve_list ].disable; progress_list.lock\r\n\t\t\t\t}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ deferred[ resolve | reject | notify ]\r\n\t\t\tdeferred[ tuple[0] ] = function() {\r\n\t\t\t\tdeferred[ tuple[0] + \"With\" ]( this === deferred ? promise : this, arguments );\r\n\t\t\t\treturn this;\r\n\t\t\t};\r\n\t\t\tdeferred[ tuple[0] + \"With\" ] = list.fireWith;\r\n\t\t});\r\n\r\n\t\t\/\/ Make the deferred a promise\r\n\t\tpromise.promise( deferred );\r\n\r\n\t\t\/\/ Call given func if any\r\n\t\tif ( func ) {\r\n\t\t\tfunc.call( deferred, deferred );\r\n\t\t}\r\n\r\n\t\t\/\/ All done!\r\n\t\treturn deferred;\r\n\t},\r\n\r\n\t\/\/ Deferred helper\r\n\twhen: function( subordinate \/* , ..., subordinateN *\/ ) {\r\n\t\tvar i = 0,\r\n\t\t\tresolveValues = slice.call( arguments ),\r\n\t\t\tlength = resolveValues.length,\r\n\r\n\t\t\t\/\/ the count of uncompleted subordinates\r\n\t\t\tremaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,\r\n\r\n\t\t\t\/\/ the master Deferred. If resolveValues consist of only a single Deferred, just use that.\r\n\t\t\tdeferred = remaining === 1 ? subordinate : jQuery.Deferred(),\r\n\r\n\t\t\t\/\/ Update function for both resolve and progress values\r\n\t\t\tupdateFunc = function( i, contexts, values ) {\r\n\t\t\t\treturn function( value ) {\r\n\t\t\t\t\tcontexts[ i ] = this;\r\n\t\t\t\t\tvalues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;\r\n\t\t\t\t\tif ( values === progressValues ) {\r\n\t\t\t\t\t\tdeferred.notifyWith( contexts, values );\r\n\t\t\t\t\t} else if ( !( --remaining ) ) {\r\n\t\t\t\t\t\tdeferred.resolveWith( contexts, values );\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\t\t\t},\r\n\r\n\t\t\tprogressValues, progressContexts, resolveContexts;\r\n\r\n\t\t\/\/ Add listeners to Deferred subordinates; treat others as resolved\r\n\t\tif ( length > 1 ) {\r\n\t\t\tprogressValues = new Array( length );\r\n\t\t\tprogressContexts = new Array( length );\r\n\t\t\tresolveContexts = new Array( length );\r\n\t\t\tfor ( ; i < length; i++ ) {\r\n\t\t\t\tif ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {\r\n\t\t\t\t\tresolveValues[ i ].promise()\r\n\t\t\t\t\t\t.done( updateFunc( i, resolveContexts, resolveValues ) )\r\n\t\t\t\t\t\t.fail( deferred.reject )\r\n\t\t\t\t\t\t.progress( updateFunc( i, progressContexts, progressValues ) );\r\n\t\t\t\t} else {\r\n\t\t\t\t\t--remaining;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ If we\'re not waiting on anything, resolve the master\r\n\t\tif ( !remaining ) {\r\n\t\t\tdeferred.resolveWith( resolveContexts, resolveValues );\r\n\t\t}\r\n\r\n\t\treturn deferred.promise();\r\n\t}\r\n});\r\n\r\n\r\n\/\/ The deferred used on DOM ready\r\nvar readyList;\r\n\r\njQuery.fn.ready = function( fn ) {\r\n\t\/\/ Add the callback\r\n\tjQuery.ready.promise().done( fn );\r\n\r\n\treturn this;\r\n};\r\n\r\njQuery.extend({\r\n\t\/\/ Is the DOM ready to be used? Set to true once it occurs.\r\n\tisReady: false,\r\n\r\n\t\/\/ A counter to track how many items to wait for before\r\n\t\/\/ the ready event fires. See #6781\r\n\treadyWait: 1,\r\n\r\n\t\/\/ Hold (or release) the ready event\r\n\tholdReady: function( hold ) {\r\n\t\tif ( hold ) {\r\n\t\t\tjQuery.readyWait++;\r\n\t\t} else {\r\n\t\t\tjQuery.ready( true );\r\n\t\t}\r\n\t},\r\n\r\n\t\/\/ Handle when the DOM is ready\r\n\tready: function( wait ) {\r\n\r\n\t\t\/\/ Abort if there are pending holds or we\'re already ready\r\n\t\tif ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Remember that the DOM is ready\r\n\t\tjQuery.isReady = true;\r\n\r\n\t\t\/\/ If a normal DOM Ready event fired, decrement, and wait if need be\r\n\t\tif ( wait !== true && --jQuery.readyWait > 0 ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ If there are functions bound, to execute\r\n\t\treadyList.resolveWith( document, [ jQuery ] );\r\n\r\n\t\t\/\/ Trigger any bound ready events\r\n\t\tif ( jQuery.fn.triggerHandler ) {\r\n\t\t\tjQuery( document ).triggerHandler( \"ready\" );\r\n\t\t\tjQuery( document ).off( \"ready\" );\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\/**\r\n * The ready event handler and self cleanup method\r\n *\/\r\nfunction completed() {\r\n\tdocument.removeEventListener( \"DOMContentLoaded\", completed, false );\r\n\twindow.removeEventListener( \"load\", completed, false );\r\n\tjQuery.ready();\r\n}\r\n\r\njQuery.ready.promise = function( obj ) {\r\n\tif ( !readyList ) {\r\n\r\n\t\treadyList = jQuery.Deferred();\r\n\r\n\t\t\/\/ Catch cases where $(document).ready() is called after the browser event has already occurred.\r\n\t\t\/\/ We once tried to use readyState \"interactive\" here, but it caused issues like the one\r\n\t\t\/\/ discovered by ChrisS here: http:\/\/bugs.jquery.com\/ticket\/12282#comment:15\r\n\t\tif ( document.readyState === \"complete\" ) {\r\n\t\t\t\/\/ Handle it asynchronously to allow scripts the opportunity to delay ready\r\n\t\t\tsetTimeout( jQuery.ready );\r\n\r\n\t\t} else {\r\n\r\n\t\t\t\/\/ Use the handy event callback\r\n\t\t\tdocument.addEventListener( \"DOMContentLoaded\", completed, false );\r\n\r\n\t\t\t\/\/ A fallback to window.onload, that will always work\r\n\t\t\twindow.addEventListener( \"load\", completed, false );\r\n\t\t}\r\n\t}\r\n\treturn readyList.promise( obj );\r\n};\r\n\r\n\/\/ Kick off the DOM ready check even if the user does not\r\njQuery.ready.promise();\r\n\r\n\r\n\r\n\r\n\/\/ Multifunctional method to get and set values of a collection\r\n\/\/ The value\/s can optionally be executed if it\'s a function\r\nvar access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {\r\n\tvar i = 0,\r\n\t\tlen = elems.length,\r\n\t\tbulk = key == null;\r\n\r\n\t\/\/ Sets many values\r\n\tif ( jQuery.type( key ) === \"object\" ) {\r\n\t\tchainable = true;\r\n\t\tfor ( i in key ) {\r\n\t\t\tjQuery.access( elems, fn, i, key[i], true, emptyGet, raw );\r\n\t\t}\r\n\r\n\t\/\/ Sets one value\r\n\t} else if ( value !== undefined ) {\r\n\t\tchainable = true;\r\n\r\n\t\tif ( !jQuery.isFunction( value ) ) {\r\n\t\t\traw = true;\r\n\t\t}\r\n\r\n\t\tif ( bulk ) {\r\n\t\t\t\/\/ Bulk operations run against the entire set\r\n\t\t\tif ( raw ) {\r\n\t\t\t\tfn.call( elems, value );\r\n\t\t\t\tfn = null;\r\n\r\n\t\t\t\/\/ ...except when executing function values\r\n\t\t\t} else {\r\n\t\t\t\tbulk = fn;\r\n\t\t\t\tfn = function( elem, key, value ) {\r\n\t\t\t\t\treturn bulk.call( jQuery( elem ), value );\r\n\t\t\t\t};\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif ( fn ) {\r\n\t\t\tfor ( ; i < len; i++ ) {\r\n\t\t\t\tfn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn chainable ?\r\n\t\telems :\r\n\r\n\t\t\/\/ Gets\r\n\t\tbulk ?\r\n\t\t\tfn.call( elems ) :\r\n\t\t\tlen ? fn( elems[0], key ) : emptyGet;\r\n};\r\n\r\n\r\n\/**\r\n * Determines whether an object can have data\r\n *\/\r\njQuery.acceptData = function( owner ) {\r\n\t\/\/ Accepts only:\r\n\t\/\/  - Node\r\n\t\/\/    - Node.ELEMENT_NODE\r\n\t\/\/    - Node.DOCUMENT_NODE\r\n\t\/\/  - Object\r\n\t\/\/    - Any\r\n\t\/* jshint -W018 *\/\r\n\treturn owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );\r\n};\r\n\r\n\r\nfunction Data() {\r\n\t\/\/ Support: Android<4,\r\n\t\/\/ Old WebKit does not have Object.preventExtensions\/freeze method,\r\n\t\/\/ return new empty object instead with no [[set]] accessor\r\n\tObject.defineProperty( this.cache = {}, 0, {\r\n\t\tget: function() {\r\n\t\t\treturn {};\r\n\t\t}\r\n\t});\r\n\r\n\tthis.expando = jQuery.expando + Data.uid++;\r\n}\r\n\r\nData.uid = 1;\r\nData.accepts = jQuery.acceptData;\r\n\r\nData.prototype = {\r\n\tkey: function( owner ) {\r\n\t\t\/\/ We can accept data for non-element nodes in modern browsers,\r\n\t\t\/\/ but we should not, see #8335.\r\n\t\t\/\/ Always return the key for a frozen object.\r\n\t\tif ( !Data.accepts( owner ) ) {\r\n\t\t\treturn 0;\r\n\t\t}\r\n\r\n\t\tvar descriptor = {},\r\n\t\t\t\/\/ Check if the owner object already has a cache key\r\n\t\t\tunlock = owner[ this.expando ];\r\n\r\n\t\t\/\/ If not, create one\r\n\t\tif ( !unlock ) {\r\n\t\t\tunlock = Data.uid++;\r\n\r\n\t\t\t\/\/ Secure it in a non-enumerable, non-writable property\r\n\t\t\ttry {\r\n\t\t\t\tdescriptor[ this.expando ] = { value: unlock };\r\n\t\t\t\tObject.defineProperties( owner, descriptor );\r\n\r\n\t\t\t\/\/ Support: Android<4\r\n\t\t\t\/\/ Fallback to a less secure definition\r\n\t\t\t} catch ( e ) {\r\n\t\t\t\tdescriptor[ this.expando ] = unlock;\r\n\t\t\t\tjQuery.extend( owner, descriptor );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Ensure the cache object\r\n\t\tif ( !this.cache[ unlock ] ) {\r\n\t\t\tthis.cache[ unlock ] = {};\r\n\t\t}\r\n\r\n\t\treturn unlock;\r\n\t},\r\n\tset: function( owner, data, value ) {\r\n\t\tvar prop,\r\n\t\t\t\/\/ There may be an unlock assigned to this node,\r\n\t\t\t\/\/ if there is no entry for this \"owner\", create one inline\r\n\t\t\t\/\/ and set the unlock as though an owner entry had always existed\r\n\t\t\tunlock = this.key( owner ),\r\n\t\t\tcache = this.cache[ unlock ];\r\n\r\n\t\t\/\/ Handle: [ owner, key, value ] args\r\n\t\tif ( typeof data === \"string\" ) {\r\n\t\t\tcache[ data ] = value;\r\n\r\n\t\t\/\/ Handle: [ owner, { properties } ] args\r\n\t\t} else {\r\n\t\t\t\/\/ Fresh assignments by object are shallow copied\r\n\t\t\tif ( jQuery.isEmptyObject( cache ) ) {\r\n\t\t\t\tjQuery.extend( this.cache[ unlock ], data );\r\n\t\t\t\/\/ Otherwise, copy the properties one-by-one to the cache object\r\n\t\t\t} else {\r\n\t\t\t\tfor ( prop in data ) {\r\n\t\t\t\t\tcache[ prop ] = data[ prop ];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn cache;\r\n\t},\r\n\tget: function( owner, key ) {\r\n\t\t\/\/ Either a valid cache is found, or will be created.\r\n\t\t\/\/ New caches will be created and the unlock returned,\r\n\t\t\/\/ allowing direct access to the newly created\r\n\t\t\/\/ empty data object. A valid owner object must be provided.\r\n\t\tvar cache = this.cache[ this.key( owner ) ];\r\n\r\n\t\treturn key === undefined ?\r\n\t\t\tcache : cache[ key ];\r\n\t},\r\n\taccess: function( owner, key, value ) {\r\n\t\tvar stored;\r\n\t\t\/\/ In cases where either:\r\n\t\t\/\/\r\n\t\t\/\/   1. No key was specified\r\n\t\t\/\/   2. A string key was specified, but no value provided\r\n\t\t\/\/\r\n\t\t\/\/ Take the \"read\" path and allow the get method to determine\r\n\t\t\/\/ which value to return, respectively either:\r\n\t\t\/\/\r\n\t\t\/\/   1. The entire cache object\r\n\t\t\/\/   2. The data stored at the key\r\n\t\t\/\/\r\n\t\tif ( key === undefined ||\r\n\t\t\t\t((key && typeof key === \"string\") && value === undefined) ) {\r\n\r\n\t\t\tstored = this.get( owner, key );\r\n\r\n\t\t\treturn stored !== undefined ?\r\n\t\t\t\tstored : this.get( owner, jQuery.camelCase(key) );\r\n\t\t}\r\n\r\n\t\t\/\/ [*]When the key is not a string, or both a key and value\r\n\t\t\/\/ are specified, set or extend (existing objects) with either:\r\n\t\t\/\/\r\n\t\t\/\/   1. An object of properties\r\n\t\t\/\/   2. A key and value\r\n\t\t\/\/\r\n\t\tthis.set( owner, key, value );\r\n\r\n\t\t\/\/ Since the \"set\" path can have two possible entry points\r\n\t\t\/\/ return the expected data based on which path was taken[*]\r\n\t\treturn value !== undefined ? value : key;\r\n\t},\r\n\tremove: function( owner, key ) {\r\n\t\tvar i, name, camel,\r\n\t\t\tunlock = this.key( owner ),\r\n\t\t\tcache = this.cache[ unlock ];\r\n\r\n\t\tif ( key === undefined ) {\r\n\t\t\tthis.cache[ unlock ] = {};\r\n\r\n\t\t} else {\r\n\t\t\t\/\/ Support array or space separated string of keys\r\n\t\t\tif ( jQuery.isArray( key ) ) {\r\n\t\t\t\t\/\/ If \"name\" is an array of keys...\r\n\t\t\t\t\/\/ When data is initially created, via (\"key\", \"val\") signature,\r\n\t\t\t\t\/\/ keys will be converted to camelCase.\r\n\t\t\t\t\/\/ Since there is no way to tell _how_ a key was added, remove\r\n\t\t\t\t\/\/ both plain key and camelCase key. #12786\r\n\t\t\t\t\/\/ This will only penalize the array argument path.\r\n\t\t\t\tname = key.concat( key.map( jQuery.camelCase ) );\r\n\t\t\t} else {\r\n\t\t\t\tcamel = jQuery.camelCase( key );\r\n\t\t\t\t\/\/ Try the string as a key before any manipulation\r\n\t\t\t\tif ( key in cache ) {\r\n\t\t\t\t\tname = [ key, camel ];\r\n\t\t\t\t} else {\r\n\t\t\t\t\t\/\/ If a key with the spaces exists, use it.\r\n\t\t\t\t\t\/\/ Otherwise, create an array by matching non-whitespace\r\n\t\t\t\t\tname = camel;\r\n\t\t\t\t\tname = name in cache ?\r\n\t\t\t\t\t\t[ name ] : ( name.match( rnotwhite ) || [] );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\ti = name.length;\r\n\t\t\twhile ( i-- ) {\r\n\t\t\t\tdelete cache[ name[ i ] ];\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\thasData: function( owner ) {\r\n\t\treturn !jQuery.isEmptyObject(\r\n\t\t\tthis.cache[ owner[ this.expando ] ] || {}\r\n\t\t);\r\n\t},\r\n\tdiscard: function( owner ) {\r\n\t\tif ( owner[ this.expando ] ) {\r\n\t\t\tdelete this.cache[ owner[ this.expando ] ];\r\n\t\t}\r\n\t}\r\n};\r\nvar data_priv = new Data();\r\n\r\nvar data_user = new Data();\r\n\r\n\r\n\r\n\/\/\tImplementation Summary\r\n\/\/\r\n\/\/\t1. Enforce API surface and semantic compatibility with 1.9.x branch\r\n\/\/\t2. Improve the module\'s maintainability by reducing the storage\r\n\/\/\t\tpaths to a single mechanism.\r\n\/\/\t3. Use the same single mechanism to support \"private\" and \"user\" data.\r\n\/\/\t4. _Never_ expose \"private\" data to user code (TODO: Drop _data, _removeData)\r\n\/\/\t5. Avoid exposing implementation details on user objects (eg. expando properties)\r\n\/\/\t6. Provide a clear path for implementation upgrade to WeakMap in 2014\r\n\r\nvar rbrace = \/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$\/,\r\n\trmultiDash = \/([A-Z])\/g;\r\n\r\nfunction dataAttr( elem, key, data ) {\r\n\tvar name;\r\n\r\n\t\/\/ If nothing was found internally, try to fetch any\r\n\t\/\/ data from the HTML5 data-* attribute\r\n\tif ( data === undefined && elem.nodeType === 1 ) {\r\n\t\tname = \"data-\" + key.replace( rmultiDash, \"-$1\" ).toLowerCase();\r\n\t\tdata = elem.getAttribute( name );\r\n\r\n\t\tif ( typeof data === \"string\" ) {\r\n\t\t\ttry {\r\n\t\t\t\tdata = data === \"true\" ? true :\r\n\t\t\t\t\tdata === \"false\" ? false :\r\n\t\t\t\t\tdata === \"null\" ? null :\r\n\t\t\t\t\t\/\/ Only convert to a number if it doesn\'t change the string\r\n\t\t\t\t\t+data + \"\" === data ? +data :\r\n\t\t\t\t\trbrace.test( data ) ? jQuery.parseJSON( data ) :\r\n\t\t\t\t\tdata;\r\n\t\t\t} catch( e ) {}\r\n\r\n\t\t\t\/\/ Make sure we set the data so it isn\'t changed later\r\n\t\t\tdata_user.set( elem, key, data );\r\n\t\t} else {\r\n\t\t\tdata = undefined;\r\n\t\t}\r\n\t}\r\n\treturn data;\r\n}\r\n\r\njQuery.extend({\r\n\thasData: function( elem ) {\r\n\t\treturn data_user.hasData( elem ) || data_priv.hasData( elem );\r\n\t},\r\n\r\n\tdata: function( elem, name, data ) {\r\n\t\treturn data_user.access( elem, name, data );\r\n\t},\r\n\r\n\tremoveData: function( elem, name ) {\r\n\t\tdata_user.remove( elem, name );\r\n\t},\r\n\r\n\t\/\/ TODO: Now that all calls to _data and _removeData have been replaced\r\n\t\/\/ with direct calls to data_priv methods, these can be deprecated.\r\n\t_data: function( elem, name, data ) {\r\n\t\treturn data_priv.access( elem, name, data );\r\n\t},\r\n\r\n\t_removeData: function( elem, name ) {\r\n\t\tdata_priv.remove( elem, name );\r\n\t}\r\n});\r\n\r\njQuery.fn.extend({\r\n\tdata: function( key, value ) {\r\n\t\tvar i, name, data,\r\n\t\t\telem = this[ 0 ],\r\n\t\t\tattrs = elem && elem.attributes;\r\n\r\n\t\t\/\/ Gets all values\r\n\t\tif ( key === undefined ) {\r\n\t\t\tif ( this.length ) {\r\n\t\t\t\tdata = data_user.get( elem );\r\n\r\n\t\t\t\tif ( elem.nodeType === 1 && !data_priv.get( elem, \"hasDataAttrs\" ) ) {\r\n\t\t\t\t\ti = attrs.length;\r\n\t\t\t\t\twhile ( i-- ) {\r\n\r\n\t\t\t\t\t\t\/\/ Support: IE11+\r\n\t\t\t\t\t\t\/\/ The attrs elements can be null (#14894)\r\n\t\t\t\t\t\tif ( attrs[ i ] ) {\r\n\t\t\t\t\t\t\tname = attrs[ i ].name;\r\n\t\t\t\t\t\t\tif ( name.indexOf( \"data-\" ) === 0 ) {\r\n\t\t\t\t\t\t\t\tname = jQuery.camelCase( name.slice(5) );\r\n\t\t\t\t\t\t\t\tdataAttr( elem, name, data[ name ] );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdata_priv.set( elem, \"hasDataAttrs\", true );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn data;\r\n\t\t}\r\n\r\n\t\t\/\/ Sets multiple values\r\n\t\tif ( typeof key === \"object\" ) {\r\n\t\t\treturn this.each(function() {\r\n\t\t\t\tdata_user.set( this, key );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\treturn access( this, function( value ) {\r\n\t\t\tvar data,\r\n\t\t\t\tcamelKey = jQuery.camelCase( key );\r\n\r\n\t\t\t\/\/ The calling jQuery object (element matches) is not empty\r\n\t\t\t\/\/ (and therefore has an element appears at this[ 0 ]) and the\r\n\t\t\t\/\/ `value` parameter was not undefined. An empty jQuery object\r\n\t\t\t\/\/ will result in `undefined` for elem = this[ 0 ] which will\r\n\t\t\t\/\/ throw an exception if an attempt to read a data cache is made.\r\n\t\t\tif ( elem && value === undefined ) {\r\n\t\t\t\t\/\/ Attempt to get data from the cache\r\n\t\t\t\t\/\/ with the key as-is\r\n\t\t\t\tdata = data_user.get( elem, key );\r\n\t\t\t\tif ( data !== undefined ) {\r\n\t\t\t\t\treturn data;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Attempt to get data from the cache\r\n\t\t\t\t\/\/ with the key camelized\r\n\t\t\t\tdata = data_user.get( elem, camelKey );\r\n\t\t\t\tif ( data !== undefined ) {\r\n\t\t\t\t\treturn data;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Attempt to \"discover\" the data in\r\n\t\t\t\t\/\/ HTML5 custom data-* attrs\r\n\t\t\t\tdata = dataAttr( elem, camelKey, undefined );\r\n\t\t\t\tif ( data !== undefined ) {\r\n\t\t\t\t\treturn data;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ We tried really hard, but the data doesn\'t exist.\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Set the data...\r\n\t\t\tthis.each(function() {\r\n\t\t\t\t\/\/ First, attempt to store a copy or reference of any\r\n\t\t\t\t\/\/ data that might\'ve been store with a camelCased key.\r\n\t\t\t\tvar data = data_user.get( this, camelKey );\r\n\r\n\t\t\t\t\/\/ For HTML5 data-* attribute interop, we have to\r\n\t\t\t\t\/\/ store property names with dashes in a camelCase form.\r\n\t\t\t\t\/\/ This might not apply to all properties...*\r\n\t\t\t\tdata_user.set( this, camelKey, value );\r\n\r\n\t\t\t\t\/\/ *... In the case of properties that might _actually_\r\n\t\t\t\t\/\/ have dashes, we need to also store a copy of that\r\n\t\t\t\t\/\/ unchanged property.\r\n\t\t\t\tif ( key.indexOf(\"-\") !== -1 && data !== undefined ) {\r\n\t\t\t\t\tdata_user.set( this, key, value );\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}, null, value, arguments.length > 1, null, true );\r\n\t},\r\n\r\n\tremoveData: function( key ) {\r\n\t\treturn this.each(function() {\r\n\t\t\tdata_user.remove( this, key );\r\n\t\t});\r\n\t}\r\n});\r\n\r\n\r\njQuery.extend({\r\n\tqueue: function( elem, type, data ) {\r\n\t\tvar queue;\r\n\r\n\t\tif ( elem ) {\r\n\t\t\ttype = ( type || \"fx\" ) + \"queue\";\r\n\t\t\tqueue = data_priv.get( elem, type );\r\n\r\n\t\t\t\/\/ Speed up dequeue by getting out quickly if this is just a lookup\r\n\t\t\tif ( data ) {\r\n\t\t\t\tif ( !queue || jQuery.isArray( data ) ) {\r\n\t\t\t\t\tqueue = data_priv.access( elem, type, jQuery.makeArray(data) );\r\n\t\t\t\t} else {\r\n\t\t\t\t\tqueue.push( data );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\treturn queue || [];\r\n\t\t}\r\n\t},\r\n\r\n\tdequeue: function( elem, type ) {\r\n\t\ttype = type || \"fx\";\r\n\r\n\t\tvar queue = jQuery.queue( elem, type ),\r\n\t\t\tstartLength = queue.length,\r\n\t\t\tfn = queue.shift(),\r\n\t\t\thooks = jQuery._queueHooks( elem, type ),\r\n\t\t\tnext = function() {\r\n\t\t\t\tjQuery.dequeue( elem, type );\r\n\t\t\t};\r\n\r\n\t\t\/\/ If the fx queue is dequeued, always remove the progress sentinel\r\n\t\tif ( fn === \"inprogress\" ) {\r\n\t\t\tfn = queue.shift();\r\n\t\t\tstartLength--;\r\n\t\t}\r\n\r\n\t\tif ( fn ) {\r\n\r\n\t\t\t\/\/ Add a progress sentinel to prevent the fx queue from being\r\n\t\t\t\/\/ automatically dequeued\r\n\t\t\tif ( type === \"fx\" ) {\r\n\t\t\t\tqueue.unshift( \"inprogress\" );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Clear up the last queue stop function\r\n\t\t\tdelete hooks.stop;\r\n\t\t\tfn.call( elem, next, hooks );\r\n\t\t}\r\n\r\n\t\tif ( !startLength && hooks ) {\r\n\t\t\thooks.empty.fire();\r\n\t\t}\r\n\t},\r\n\r\n\t\/\/ Not public - generate a queueHooks object, or return the current one\r\n\t_queueHooks: function( elem, type ) {\r\n\t\tvar key = type + \"queueHooks\";\r\n\t\treturn data_priv.get( elem, key ) || data_priv.access( elem, key, {\r\n\t\t\tempty: jQuery.Callbacks(\"once memory\").add(function() {\r\n\t\t\t\tdata_priv.remove( elem, [ type + \"queue\", key ] );\r\n\t\t\t})\r\n\t\t});\r\n\t}\r\n});\r\n\r\njQuery.fn.extend({\r\n\tqueue: function( type, data ) {\r\n\t\tvar setter = 2;\r\n\r\n\t\tif ( typeof type !== \"string\" ) {\r\n\t\t\tdata = type;\r\n\t\t\ttype = \"fx\";\r\n\t\t\tsetter--;\r\n\t\t}\r\n\r\n\t\tif ( arguments.length < setter ) {\r\n\t\t\treturn jQuery.queue( this[0], type );\r\n\t\t}\r\n\r\n\t\treturn data === undefined ?\r\n\t\t\tthis :\r\n\t\t\tthis.each(function() {\r\n\t\t\t\tvar queue = jQuery.queue( this, type, data );\r\n\r\n\t\t\t\t\/\/ Ensure a hooks for this queue\r\n\t\t\t\tjQuery._queueHooks( this, type );\r\n\r\n\t\t\t\tif ( type === \"fx\" && queue[0] !== \"inprogress\" ) {\r\n\t\t\t\t\tjQuery.dequeue( this, type );\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t},\r\n\tdequeue: function( type ) {\r\n\t\treturn this.each(function() {\r\n\t\t\tjQuery.dequeue( this, type );\r\n\t\t});\r\n\t},\r\n\tclearQueue: function( type ) {\r\n\t\treturn this.queue( type || \"fx\", [] );\r\n\t},\r\n\t\/\/ Get a promise resolved when queues of a certain type\r\n\t\/\/ are emptied (fx is the type by default)\r\n\tpromise: function( type, obj ) {\r\n\t\tvar tmp,\r\n\t\t\tcount = 1,\r\n\t\t\tdefer = jQuery.Deferred(),\r\n\t\t\telements = this,\r\n\t\t\ti = this.length,\r\n\t\t\tresolve = function() {\r\n\t\t\t\tif ( !( --count ) ) {\r\n\t\t\t\t\tdefer.resolveWith( elements, [ elements ] );\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\tif ( typeof type !== \"string\" ) {\r\n\t\t\tobj = type;\r\n\t\t\ttype = undefined;\r\n\t\t}\r\n\t\ttype = type || \"fx\";\r\n\r\n\t\twhile ( i-- ) {\r\n\t\t\ttmp = data_priv.get( elements[ i ], type + \"queueHooks\" );\r\n\t\t\tif ( tmp && tmp.empty ) {\r\n\t\t\t\tcount++;\r\n\t\t\t\ttmp.empty.add( resolve );\r\n\t\t\t}\r\n\t\t}\r\n\t\tresolve();\r\n\t\treturn defer.promise( obj );\r\n\t}\r\n});\r\nvar pnum = (\/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)\/).source;\r\n\r\nvar cssExpand = [ \"Top\", \"Right\", \"Bottom\", \"Left\" ];\r\n\r\nvar isHidden = function( elem, el ) {\r\n\t\t\/\/ isHidden might be called from jQuery#filter function;\r\n\t\t\/\/ in that case, element will be second argument\r\n\t\telem = el || elem;\r\n\t\treturn jQuery.css( elem, \"display\" ) === \"none\" || !jQuery.contains( elem.ownerDocument, elem );\r\n\t};\r\n\r\nvar rcheckableType = (\/^(?:checkbox|radio)$\/i);\r\n\r\n\r\n\r\n(function() {\r\n\tvar fragment = document.createDocumentFragment(),\r\n\t\tdiv = fragment.appendChild( document.createElement( \"div\" ) ),\r\n\t\tinput = document.createElement( \"input\" );\r\n\r\n\t\/\/ Support: Safari<=5.1\r\n\t\/\/ Check state lost if the name is set (#11217)\r\n\t\/\/ Support: Windows Web Apps (WWA)\r\n\t\/\/ `name` and `type` must use .setAttribute for WWA (#14901)\r\n\tinput.setAttribute( \"type\", \"radio\" );\r\n\tinput.setAttribute( \"checked\", \"checked\" );\r\n\tinput.setAttribute( \"name\", \"t\" );\r\n\r\n\tdiv.appendChild( input );\r\n\r\n\t\/\/ Support: Safari<=5.1, Android<4.2\r\n\t\/\/ Older WebKit doesn\'t clone checked state correctly in fragments\r\n\tsupport.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;\r\n\r\n\t\/\/ Support: IE<=11+\r\n\t\/\/ Make sure textarea (and checkbox) defaultValue is properly cloned\r\n\tdiv.innerHTML = \"<textarea>x<\/textarea>\";\r\n\tsupport.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;\r\n})();\r\nvar strundefined = typeof undefined;\r\n\r\n\r\n\r\nsupport.focusinBubbles = \"onfocusin\" in window;\r\n\r\n\r\nvar\r\n\trkeyEvent = \/^key\/,\r\n\trmouseEvent = \/^(?:mouse|pointer|contextmenu)|click\/,\r\n\trfocusMorph = \/^(?:focusinfocus|focusoutblur)$\/,\r\n\trtypenamespace = \/^([^.]*)(?:\\.(.+)|)$\/;\r\n\r\nfunction returnTrue() {\r\n\treturn true;\r\n}\r\n\r\nfunction returnFalse() {\r\n\treturn false;\r\n}\r\n\r\nfunction safeActiveElement() {\r\n\ttry {\r\n\t\treturn document.activeElement;\r\n\t} catch ( err ) { }\r\n}\r\n\r\n\/*\r\n * Helper functions for managing events -- not part of the public interface.\r\n * Props to Dean Edwards\' addEvent library for many of the ideas.\r\n *\/\r\njQuery.event = {\r\n\r\n\tglobal: {},\r\n\r\n\tadd: function( elem, types, handler, data, selector ) {\r\n\r\n\t\tvar handleObjIn, eventHandle, tmp,\r\n\t\t\tevents, t, handleObj,\r\n\t\t\tspecial, handlers, type, namespaces, origType,\r\n\t\t\telemData = data_priv.get( elem );\r\n\r\n\t\t\/\/ Don\'t attach events to noData or text\/comment nodes (but allow plain objects)\r\n\t\tif ( !elemData ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Caller can pass in an object of custom data in lieu of the handler\r\n\t\tif ( handler.handler ) {\r\n\t\t\thandleObjIn = handler;\r\n\t\t\thandler = handleObjIn.handler;\r\n\t\t\tselector = handleObjIn.selector;\r\n\t\t}\r\n\r\n\t\t\/\/ Make sure that the handler has a unique ID, used to find\/remove it later\r\n\t\tif ( !handler.guid ) {\r\n\t\t\thandler.guid = jQuery.guid++;\r\n\t\t}\r\n\r\n\t\t\/\/ Init the element\'s event structure and main handler, if this is the first\r\n\t\tif ( !(events = elemData.events) ) {\r\n\t\t\tevents = elemData.events = {};\r\n\t\t}\r\n\t\tif ( !(eventHandle = elemData.handle) ) {\r\n\t\t\teventHandle = elemData.handle = function( e ) {\r\n\t\t\t\t\/\/ Discard the second event of a jQuery.event.trigger() and\r\n\t\t\t\t\/\/ when an event is called after a page has unloaded\r\n\t\t\t\treturn typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?\r\n\t\t\t\t\tjQuery.event.dispatch.apply( elem, arguments ) : undefined;\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t\/\/ Handle multiple events separated by a space\r\n\t\ttypes = ( types || \"\" ).match( rnotwhite ) || [ \"\" ];\r\n\t\tt = types.length;\r\n\t\twhile ( t-- ) {\r\n\t\t\ttmp = rtypenamespace.exec( types[t] ) || [];\r\n\t\t\ttype = origType = tmp[1];\r\n\t\t\tnamespaces = ( tmp[2] || \"\" ).split( \".\" ).sort();\r\n\r\n\t\t\t\/\/ There *must* be a type, no attaching namespace-only handlers\r\n\t\t\tif ( !type ) {\r\n\t\t\t\tcontinue;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ If event changes its type, use the special event handlers for the changed type\r\n\t\t\tspecial = jQuery.event.special[ type ] || {};\r\n\r\n\t\t\t\/\/ If selector defined, determine special event api type, otherwise given type\r\n\t\t\ttype = ( selector ? special.delegateType : special.bindType ) || type;\r\n\r\n\t\t\t\/\/ Update special based on newly reset type\r\n\t\t\tspecial = jQuery.event.special[ type ] || {};\r\n\r\n\t\t\t\/\/ handleObj is passed to all event handlers\r\n\t\t\thandleObj = jQuery.extend({\r\n\t\t\t\ttype: type,\r\n\t\t\t\torigType: origType,\r\n\t\t\t\tdata: data,\r\n\t\t\t\thandler: handler,\r\n\t\t\t\tguid: handler.guid,\r\n\t\t\t\tselector: selector,\r\n\t\t\t\tneedsContext: selector && jQuery.expr.match.needsContext.test( selector ),\r\n\t\t\t\tnamespace: namespaces.join(\".\")\r\n\t\t\t}, handleObjIn );\r\n\r\n\t\t\t\/\/ Init the event handler queue if we\'re the first\r\n\t\t\tif ( !(handlers = events[ type ]) ) {\r\n\t\t\t\thandlers = events[ type ] = [];\r\n\t\t\t\thandlers.delegateCount = 0;\r\n\r\n\t\t\t\t\/\/ Only use addEventListener if the special events handler returns false\r\n\t\t\t\tif ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {\r\n\t\t\t\t\tif ( elem.addEventListener ) {\r\n\t\t\t\t\t\telem.addEventListener( type, eventHandle, false );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif ( special.add ) {\r\n\t\t\t\tspecial.add.call( elem, handleObj );\r\n\r\n\t\t\t\tif ( !handleObj.handler.guid ) {\r\n\t\t\t\t\thandleObj.handler.guid = handler.guid;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Add to the element\'s handler list, delegates in front\r\n\t\t\tif ( selector ) {\r\n\t\t\t\thandlers.splice( handlers.delegateCount++, 0, handleObj );\r\n\t\t\t} else {\r\n\t\t\t\thandlers.push( handleObj );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Keep track of which events have ever been used, for event optimization\r\n\t\t\tjQuery.event.global[ type ] = true;\r\n\t\t}\r\n\r\n\t},\r\n\r\n\t\/\/ Detach an event or set of events from an element\r\n\tremove: function( elem, types, handler, selector, mappedTypes ) {\r\n\r\n\t\tvar j, origCount, tmp,\r\n\t\t\tevents, t, handleObj,\r\n\t\t\tspecial, handlers, type, namespaces, origType,\r\n\t\t\telemData = data_priv.hasData( elem ) && data_priv.get( elem );\r\n\r\n\t\tif ( !elemData || !(events = elemData.events) ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Once for each type.namespace in types; type may be omitted\r\n\t\ttypes = ( types || \"\" ).match( rnotwhite ) || [ \"\" ];\r\n\t\tt = types.length;\r\n\t\twhile ( t-- ) {\r\n\t\t\ttmp = rtypenamespace.exec( types[t] ) || [];\r\n\t\t\ttype = origType = tmp[1];\r\n\t\t\tnamespaces = ( tmp[2] || \"\" ).split( \".\" ).sort();\r\n\r\n\t\t\t\/\/ Unbind all events (on this namespace, if provided) for the element\r\n\t\t\tif ( !type ) {\r\n\t\t\t\tfor ( type in events ) {\r\n\t\t\t\t\tjQuery.event.remove( elem, type + types[ t ], handler, selector, true );\r\n\t\t\t\t}\r\n\t\t\t\tcontinue;\r\n\t\t\t}\r\n\r\n\t\t\tspecial = jQuery.event.special[ type ] || {};\r\n\t\t\ttype = ( selector ? special.delegateType : special.bindType ) || type;\r\n\t\t\thandlers = events[ type ] || [];\r\n\t\t\ttmp = tmp[2] && new RegExp( \"(^|\\\\.)\" + namespaces.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\" );\r\n\r\n\t\t\t\/\/ Remove matching events\r\n\t\t\torigCount = j = handlers.length;\r\n\t\t\twhile ( j-- ) {\r\n\t\t\t\thandleObj = handlers[ j ];\r\n\r\n\t\t\t\tif ( ( mappedTypes || origType === handleObj.origType ) &&\r\n\t\t\t\t\t( !handler || handler.guid === handleObj.guid ) &&\r\n\t\t\t\t\t( !tmp || tmp.test( handleObj.namespace ) ) &&\r\n\t\t\t\t\t( !selector || selector === handleObj.selector || selector === \"**\" && handleObj.selector ) ) {\r\n\t\t\t\t\thandlers.splice( j, 1 );\r\n\r\n\t\t\t\t\tif ( handleObj.selector ) {\r\n\t\t\t\t\t\thandlers.delegateCount--;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif ( special.remove ) {\r\n\t\t\t\t\t\tspecial.remove.call( elem, handleObj );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Remove generic event handler if we removed something and no more handlers exist\r\n\t\t\t\/\/ (avoids potential for endless recursion during removal of special event handlers)\r\n\t\t\tif ( origCount && !handlers.length ) {\r\n\t\t\t\tif ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {\r\n\t\t\t\t\tjQuery.removeEvent( elem, type, elemData.handle );\r\n\t\t\t\t}\r\n\r\n\t\t\t\tdelete events[ type ];\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Remove the expando if it\'s no longer used\r\n\t\tif ( jQuery.isEmptyObject( events ) ) {\r\n\t\t\tdelete elemData.handle;\r\n\t\t\tdata_priv.remove( elem, \"events\" );\r\n\t\t}\r\n\t},\r\n\r\n\ttrigger: function( event, data, elem, onlyHandlers ) {\r\n\r\n\t\tvar i, cur, tmp, bubbleType, ontype, handle, special,\r\n\t\t\teventPath = [ elem || document ],\r\n\t\t\ttype = hasOwn.call( event, \"type\" ) ? event.type : event,\r\n\t\t\tnamespaces = hasOwn.call( event, \"namespace\" ) ? event.namespace.split(\".\") : [];\r\n\r\n\t\tcur = tmp = elem = elem || document;\r\n\r\n\t\t\/\/ Don\'t do events on text and comment nodes\r\n\t\tif ( elem.nodeType === 3 || elem.nodeType === 8 ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ focus\/blur morphs to focusin\/out; ensure we\'re not firing them right now\r\n\t\tif ( rfocusMorph.test( type + jQuery.event.triggered ) ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif ( type.indexOf(\".\") >= 0 ) {\r\n\t\t\t\/\/ Namespaced trigger; create a regexp to match event type in handle()\r\n\t\t\tnamespaces = type.split(\".\");\r\n\t\t\ttype = namespaces.shift();\r\n\t\t\tnamespaces.sort();\r\n\t\t}\r\n\t\tontype = type.indexOf(\":\") < 0 && \"on\" + type;\r\n\r\n\t\t\/\/ Caller can pass in a jQuery.Event object, Object, or just an event type string\r\n\t\tevent = event[ jQuery.expando ] ?\r\n\t\t\tevent :\r\n\t\t\tnew jQuery.Event( type, typeof event === \"object\" && event );\r\n\r\n\t\t\/\/ Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)\r\n\t\tevent.isTrigger = onlyHandlers ? 2 : 3;\r\n\t\tevent.namespace = namespaces.join(\".\");\r\n\t\tevent.namespace_re = event.namespace ?\r\n\t\t\tnew RegExp( \"(^|\\\\.)\" + namespaces.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\" ) :\r\n\t\t\tnull;\r\n\r\n\t\t\/\/ Clean up the event in case it is being reused\r\n\t\tevent.result = undefined;\r\n\t\tif ( !event.target ) {\r\n\t\t\tevent.target = elem;\r\n\t\t}\r\n\r\n\t\t\/\/ Clone any incoming data and prepend the event, creating the handler arg list\r\n\t\tdata = data == null ?\r\n\t\t\t[ event ] :\r\n\t\t\tjQuery.makeArray( data, [ event ] );\r\n\r\n\t\t\/\/ Allow special events to draw outside the lines\r\n\t\tspecial = jQuery.event.special[ type ] || {};\r\n\t\tif ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Determine event propagation path in advance, per W3C events spec (#9951)\r\n\t\t\/\/ Bubble up to document, then to window; watch for a global ownerDocument var (#9724)\r\n\t\tif ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {\r\n\r\n\t\t\tbubbleType = special.delegateType || type;\r\n\t\t\tif ( !rfocusMorph.test( bubbleType + type ) ) {\r\n\t\t\t\tcur = cur.parentNode;\r\n\t\t\t}\r\n\t\t\tfor ( ; cur; cur = cur.parentNode ) {\r\n\t\t\t\teventPath.push( cur );\r\n\t\t\t\ttmp = cur;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Only add window if we got to document (e.g., not plain obj or detached DOM)\r\n\t\t\tif ( tmp === (elem.ownerDocument || document) ) {\r\n\t\t\t\teventPath.push( tmp.defaultView || tmp.parentWindow || window );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Fire handlers on the event path\r\n\t\ti = 0;\r\n\t\twhile ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {\r\n\r\n\t\t\tevent.type = i > 1 ?\r\n\t\t\t\tbubbleType :\r\n\t\t\t\tspecial.bindType || type;\r\n\r\n\t\t\t\/\/ jQuery handler\r\n\t\t\thandle = ( data_priv.get( cur, \"events\" ) || {} )[ event.type ] && data_priv.get( cur, \"handle\" );\r\n\t\t\tif ( handle ) {\r\n\t\t\t\thandle.apply( cur, data );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Native handler\r\n\t\t\thandle = ontype && cur[ ontype ];\r\n\t\t\tif ( handle && handle.apply && jQuery.acceptData( cur ) ) {\r\n\t\t\t\tevent.result = handle.apply( cur, data );\r\n\t\t\t\tif ( event.result === false ) {\r\n\t\t\t\t\tevent.preventDefault();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\tevent.type = type;\r\n\r\n\t\t\/\/ If nobody prevented the default action, do it now\r\n\t\tif ( !onlyHandlers && !event.isDefaultPrevented() ) {\r\n\r\n\t\t\tif ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&\r\n\t\t\t\tjQuery.acceptData( elem ) ) {\r\n\r\n\t\t\t\t\/\/ Call a native DOM method on the target with the same name name as the event.\r\n\t\t\t\t\/\/ Don\'t do default actions on window, that\'s where global variables be (#6170)\r\n\t\t\t\tif ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {\r\n\r\n\t\t\t\t\t\/\/ Don\'t re-trigger an onFOO event when we call its FOO() method\r\n\t\t\t\t\ttmp = elem[ ontype ];\r\n\r\n\t\t\t\t\tif ( tmp ) {\r\n\t\t\t\t\t\telem[ ontype ] = null;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Prevent re-triggering of the same event, since we already bubbled it above\r\n\t\t\t\t\tjQuery.event.triggered = type;\r\n\t\t\t\t\telem[ type ]();\r\n\t\t\t\t\tjQuery.event.triggered = undefined;\r\n\r\n\t\t\t\t\tif ( tmp ) {\r\n\t\t\t\t\t\telem[ ontype ] = tmp;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn event.result;\r\n\t},\r\n\r\n\tdispatch: function( event ) {\r\n\r\n\t\t\/\/ Make a writable jQuery.Event from the native event object\r\n\t\tevent = jQuery.event.fix( event );\r\n\r\n\t\tvar i, j, ret, matched, handleObj,\r\n\t\t\thandlerQueue = [],\r\n\t\t\targs = slice.call( arguments ),\r\n\t\t\thandlers = ( data_priv.get( this, \"events\" ) || {} )[ event.type ] || [],\r\n\t\t\tspecial = jQuery.event.special[ event.type ] || {};\r\n\r\n\t\t\/\/ Use the fix-ed jQuery.Event rather than the (read-only) native event\r\n\t\targs[0] = event;\r\n\t\tevent.delegateTarget = this;\r\n\r\n\t\t\/\/ Call the preDispatch hook for the mapped type, and let it bail if desired\r\n\t\tif ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Determine handlers\r\n\t\thandlerQueue = jQuery.event.handlers.call( this, event, handlers );\r\n\r\n\t\t\/\/ Run delegates first; they may want to stop propagation beneath us\r\n\t\ti = 0;\r\n\t\twhile ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {\r\n\t\t\tevent.currentTarget = matched.elem;\r\n\r\n\t\t\tj = 0;\r\n\t\t\twhile ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {\r\n\r\n\t\t\t\t\/\/ Triggered event must either 1) have no namespace, or 2) have namespace(s)\r\n\t\t\t\t\/\/ a subset or equal to those in the bound event (both can have no namespace).\r\n\t\t\t\tif ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {\r\n\r\n\t\t\t\t\tevent.handleObj = handleObj;\r\n\t\t\t\t\tevent.data = handleObj.data;\r\n\r\n\t\t\t\t\tret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )\r\n\t\t\t\t\t\t\t.apply( matched.elem, args );\r\n\r\n\t\t\t\t\tif ( ret !== undefined ) {\r\n\t\t\t\t\t\tif ( (event.result = ret) === false ) {\r\n\t\t\t\t\t\t\tevent.preventDefault();\r\n\t\t\t\t\t\t\tevent.stopPropagation();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Call the postDispatch hook for the mapped type\r\n\t\tif ( special.postDispatch ) {\r\n\t\t\tspecial.postDispatch.call( this, event );\r\n\t\t}\r\n\r\n\t\treturn event.result;\r\n\t},\r\n\r\n\thandlers: function( event, handlers ) {\r\n\t\tvar i, matches, sel, handleObj,\r\n\t\t\thandlerQueue = [],\r\n\t\t\tdelegateCount = handlers.delegateCount,\r\n\t\t\tcur = event.target;\r\n\r\n\t\t\/\/ Find delegate handlers\r\n\t\t\/\/ Black-hole SVG <use> instance trees (#13180)\r\n\t\t\/\/ Avoid non-left-click bubbling in Firefox (#3861)\r\n\t\tif ( delegateCount && cur.nodeType && (!event.button || event.type !== \"click\") ) {\r\n\r\n\t\t\tfor ( ; cur !== this; cur = cur.parentNode || this ) {\r\n\r\n\t\t\t\t\/\/ Don\'t process clicks on disabled elements (#6911, #8165, #11382, #11764)\r\n\t\t\t\tif ( cur.disabled !== true || event.type !== \"click\" ) {\r\n\t\t\t\t\tmatches = [];\r\n\t\t\t\t\tfor ( i = 0; i < delegateCount; i++ ) {\r\n\t\t\t\t\t\thandleObj = handlers[ i ];\r\n\r\n\t\t\t\t\t\t\/\/ Don\'t conflict with Object.prototype properties (#13203)\r\n\t\t\t\t\t\tsel = handleObj.selector + \" \";\r\n\r\n\t\t\t\t\t\tif ( matches[ sel ] === undefined ) {\r\n\t\t\t\t\t\t\tmatches[ sel ] = handleObj.needsContext ?\r\n\t\t\t\t\t\t\t\tjQuery( sel, this ).index( cur ) >= 0 :\r\n\t\t\t\t\t\t\t\tjQuery.find( sel, this, null, [ cur ] ).length;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif ( matches[ sel ] ) {\r\n\t\t\t\t\t\t\tmatches.push( handleObj );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif ( matches.length ) {\r\n\t\t\t\t\t\thandlerQueue.push({ elem: cur, handlers: matches });\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Add the remaining (directly-bound) handlers\r\n\t\tif ( delegateCount < handlers.length ) {\r\n\t\t\thandlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });\r\n\t\t}\r\n\r\n\t\treturn handlerQueue;\r\n\t},\r\n\r\n\t\/\/ Includes some event props shared by KeyEvent and MouseEvent\r\n\tprops: \"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which\".split(\" \"),\r\n\r\n\tfixHooks: {},\r\n\r\n\tkeyHooks: {\r\n\t\tprops: \"char charCode key keyCode\".split(\" \"),\r\n\t\tfilter: function( event, original ) {\r\n\r\n\t\t\t\/\/ Add which for key events\r\n\t\t\tif ( event.which == null ) {\r\n\t\t\t\tevent.which = original.charCode != null ? original.charCode : original.keyCode;\r\n\t\t\t}\r\n\r\n\t\t\treturn event;\r\n\t\t}\r\n\t},\r\n\r\n\tmouseHooks: {\r\n\t\tprops: \"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement\".split(\" \"),\r\n\t\tfilter: function( event, original ) {\r\n\t\t\tvar eventDoc, doc, body,\r\n\t\t\t\tbutton = original.button;\r\n\r\n\t\t\t\/\/ Calculate pageX\/Y if missing and clientX\/Y available\r\n\t\t\tif ( event.pageX == null && original.clientX != null ) {\r\n\t\t\t\teventDoc = event.target.ownerDocument || document;\r\n\t\t\t\tdoc = eventDoc.documentElement;\r\n\t\t\t\tbody = eventDoc.body;\r\n\r\n\t\t\t\tevent.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );\r\n\t\t\t\tevent.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Add which for click: 1 === left; 2 === middle; 3 === right\r\n\t\t\t\/\/ Note: button is not normalized, so don\'t use it\r\n\t\t\tif ( !event.which && button !== undefined ) {\r\n\t\t\t\tevent.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );\r\n\t\t\t}\r\n\r\n\t\t\treturn event;\r\n\t\t}\r\n\t},\r\n\r\n\tfix: function( event ) {\r\n\t\tif ( event[ jQuery.expando ] ) {\r\n\t\t\treturn event;\r\n\t\t}\r\n\r\n\t\t\/\/ Create a writable copy of the event object and normalize some properties\r\n\t\tvar i, prop, copy,\r\n\t\t\ttype = event.type,\r\n\t\t\toriginalEvent = event,\r\n\t\t\tfixHook = this.fixHooks[ type ];\r\n\r\n\t\tif ( !fixHook ) {\r\n\t\t\tthis.fixHooks[ type ] = fixHook =\r\n\t\t\t\trmouseEvent.test( type ) ? this.mouseHooks :\r\n\t\t\t\trkeyEvent.test( type ) ? this.keyHooks :\r\n\t\t\t\t{};\r\n\t\t}\r\n\t\tcopy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;\r\n\r\n\t\tevent = new jQuery.Event( originalEvent );\r\n\r\n\t\ti = copy.length;\r\n\t\twhile ( i-- ) {\r\n\t\t\tprop = copy[ i ];\r\n\t\t\tevent[ prop ] = originalEvent[ prop ];\r\n\t\t}\r\n\r\n\t\t\/\/ Support: Cordova 2.5 (WebKit) (#13255)\r\n\t\t\/\/ All events should have a target; Cordova deviceready doesn\'t\r\n\t\tif ( !event.target ) {\r\n\t\t\tevent.target = document;\r\n\t\t}\r\n\r\n\t\t\/\/ Support: Safari 6.0+, Chrome<28\r\n\t\t\/\/ Target should not be a text node (#504, #13143)\r\n\t\tif ( event.target.nodeType === 3 ) {\r\n\t\t\tevent.target = event.target.parentNode;\r\n\t\t}\r\n\r\n\t\treturn fixHook.filter ? fixHook.filter( event, originalEvent ) : event;\r\n\t},\r\n\r\n\tspecial: {\r\n\t\tload: {\r\n\t\t\t\/\/ Prevent triggered image.load events from bubbling to window.load\r\n\t\t\tnoBubble: true\r\n\t\t},\r\n\t\tfocus: {\r\n\t\t\t\/\/ Fire native event if possible so blur\/focus sequence is correct\r\n\t\t\ttrigger: function() {\r\n\t\t\t\tif ( this !== safeActiveElement() && this.focus ) {\r\n\t\t\t\t\tthis.focus();\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tdelegateType: \"focusin\"\r\n\t\t},\r\n\t\tblur: {\r\n\t\t\ttrigger: function() {\r\n\t\t\t\tif ( this === safeActiveElement() && this.blur ) {\r\n\t\t\t\t\tthis.blur();\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\tdelegateType: \"focusout\"\r\n\t\t},\r\n\t\tclick: {\r\n\t\t\t\/\/ For checkbox, fire native event so checked state will be right\r\n\t\t\ttrigger: function() {\r\n\t\t\t\tif ( this.type === \"checkbox\" && this.click && jQuery.nodeName( this, \"input\" ) ) {\r\n\t\t\t\t\tthis.click();\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t},\r\n\r\n\t\t\t\/\/ For cross-browser consistency, don\'t fire native .click() on links\r\n\t\t\t_default: function( event ) {\r\n\t\t\t\treturn jQuery.nodeName( event.target, \"a\" );\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tbeforeunload: {\r\n\t\t\tpostDispatch: function( event ) {\r\n\r\n\t\t\t\t\/\/ Support: Firefox 20+\r\n\t\t\t\t\/\/ Firefox doesn\'t alert if the returnValue field is not set.\r\n\t\t\t\tif ( event.result !== undefined && event.originalEvent ) {\r\n\t\t\t\t\tevent.originalEvent.returnValue = event.result;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\tsimulate: function( type, elem, event, bubble ) {\r\n\t\t\/\/ Piggyback on a donor event to simulate a different one.\r\n\t\t\/\/ Fake originalEvent to avoid donor\'s stopPropagation, but if the\r\n\t\t\/\/ simulated event prevents default then we do the same on the donor.\r\n\t\tvar e = jQuery.extend(\r\n\t\t\tnew jQuery.Event(),\r\n\t\t\tevent,\r\n\t\t\t{\r\n\t\t\t\ttype: type,\r\n\t\t\t\tisSimulated: true,\r\n\t\t\t\toriginalEvent: {}\r\n\t\t\t}\r\n\t\t);\r\n\t\tif ( bubble ) {\r\n\t\t\tjQuery.event.trigger( e, null, elem );\r\n\t\t} else {\r\n\t\t\tjQuery.event.dispatch.call( elem, e );\r\n\t\t}\r\n\t\tif ( e.isDefaultPrevented() ) {\r\n\t\t\tevent.preventDefault();\r\n\t\t}\r\n\t}\r\n};\r\n\r\njQuery.removeEvent = function( elem, type, handle ) {\r\n\tif ( elem.removeEventListener ) {\r\n\t\telem.removeEventListener( type, handle, false );\r\n\t}\r\n};\r\n\r\njQuery.Event = function( src, props ) {\r\n\t\/\/ Allow instantiation without the \'new\' keyword\r\n\tif ( !(this instanceof jQuery.Event) ) {\r\n\t\treturn new jQuery.Event( src, props );\r\n\t}\r\n\r\n\t\/\/ Event object\r\n\tif ( src && src.type ) {\r\n\t\tthis.originalEvent = src;\r\n\t\tthis.type = src.type;\r\n\r\n\t\t\/\/ Events bubbling up the document may have been marked as prevented\r\n\t\t\/\/ by a handler lower down the tree; reflect the correct value.\r\n\t\tthis.isDefaultPrevented = src.defaultPrevented ||\r\n\t\t\t\tsrc.defaultPrevented === undefined &&\r\n\t\t\t\t\/\/ Support: Android<4.0\r\n\t\t\t\tsrc.returnValue === false ?\r\n\t\t\treturnTrue :\r\n\t\t\treturnFalse;\r\n\r\n\t\/\/ Event type\r\n\t} else {\r\n\t\tthis.type = src;\r\n\t}\r\n\r\n\t\/\/ Put explicitly provided properties onto the event object\r\n\tif ( props ) {\r\n\t\tjQuery.extend( this, props );\r\n\t}\r\n\r\n\t\/\/ Create a timestamp if incoming event doesn\'t have one\r\n\tthis.timeStamp = src && src.timeStamp || jQuery.now();\r\n\r\n\t\/\/ Mark it as fixed\r\n\tthis[ jQuery.expando ] = true;\r\n};\r\n\r\n\/\/ jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding\r\n\/\/ http:\/\/www.w3.org\/TR\/2003\/WD-DOM-Level-3-Events-20030331\/ecma-script-binding.html\r\njQuery.Event.prototype = {\r\n\tisDefaultPrevented: returnFalse,\r\n\tisPropagationStopped: returnFalse,\r\n\tisImmediatePropagationStopped: returnFalse,\r\n\r\n\tpreventDefault: function() {\r\n\t\tvar e = this.originalEvent;\r\n\r\n\t\tthis.isDefaultPrevented = returnTrue;\r\n\r\n\t\tif ( e && e.preventDefault ) {\r\n\t\t\te.preventDefault();\r\n\t\t}\r\n\t},\r\n\tstopPropagation: function() {\r\n\t\tvar e = this.originalEvent;\r\n\r\n\t\tthis.isPropagationStopped = returnTrue;\r\n\r\n\t\tif ( e && e.stopPropagation ) {\r\n\t\t\te.stopPropagation();\r\n\t\t}\r\n\t},\r\n\tstopImmediatePropagation: function() {\r\n\t\tvar e = this.originalEvent;\r\n\r\n\t\tthis.isImmediatePropagationStopped = returnTrue;\r\n\r\n\t\tif ( e && e.stopImmediatePropagation ) {\r\n\t\t\te.stopImmediatePropagation();\r\n\t\t}\r\n\r\n\t\tthis.stopPropagation();\r\n\t}\r\n};\r\n\r\n\/\/ Create mouseenter\/leave events using mouseover\/out and event-time checks\r\n\/\/ Support: Chrome 15+\r\njQuery.each({\r\n\tmouseenter: \"mouseover\",\r\n\tmouseleave: \"mouseout\",\r\n\tpointerenter: \"pointerover\",\r\n\tpointerleave: \"pointerout\"\r\n}, function( orig, fix ) {\r\n\tjQuery.event.special[ orig ] = {\r\n\t\tdelegateType: fix,\r\n\t\tbindType: fix,\r\n\r\n\t\thandle: function( event ) {\r\n\t\t\tvar ret,\r\n\t\t\t\ttarget = this,\r\n\t\t\t\trelated = event.relatedTarget,\r\n\t\t\t\thandleObj = event.handleObj;\r\n\r\n\t\t\t\/\/ For mousenter\/leave call the handler if related is outside the target.\r\n\t\t\t\/\/ NB: No relatedTarget if the mouse left\/entered the browser window\r\n\t\t\tif ( !related || (related !== target && !jQuery.contains( target, related )) ) {\r\n\t\t\t\tevent.type = handleObj.origType;\r\n\t\t\t\tret = handleObj.handler.apply( this, arguments );\r\n\t\t\t\tevent.type = fix;\r\n\t\t\t}\r\n\t\t\treturn ret;\r\n\t\t}\r\n\t};\r\n});\r\n\r\n\/\/ Support: Firefox, Chrome, Safari\r\n\/\/ Create \"bubbling\" focus and blur events\r\nif ( !support.focusinBubbles ) {\r\n\tjQuery.each({ focus: \"focusin\", blur: \"focusout\" }, function( orig, fix ) {\r\n\r\n\t\t\/\/ Attach a single capturing handler on the document while someone wants focusin\/focusout\r\n\t\tvar handler = function( event ) {\r\n\t\t\t\tjQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );\r\n\t\t\t};\r\n\r\n\t\tjQuery.event.special[ fix ] = {\r\n\t\t\tsetup: function() {\r\n\t\t\t\tvar doc = this.ownerDocument || this,\r\n\t\t\t\t\tattaches = data_priv.access( doc, fix );\r\n\r\n\t\t\t\tif ( !attaches ) {\r\n\t\t\t\t\tdoc.addEventListener( orig, handler, true );\r\n\t\t\t\t}\r\n\t\t\t\tdata_priv.access( doc, fix, ( attaches || 0 ) + 1 );\r\n\t\t\t},\r\n\t\t\tteardown: function() {\r\n\t\t\t\tvar doc = this.ownerDocument || this,\r\n\t\t\t\t\tattaches = data_priv.access( doc, fix ) - 1;\r\n\r\n\t\t\t\tif ( !attaches ) {\r\n\t\t\t\t\tdoc.removeEventListener( orig, handler, true );\r\n\t\t\t\t\tdata_priv.remove( doc, fix );\r\n\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdata_priv.access( doc, fix, attaches );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\t});\r\n}\r\n\r\njQuery.fn.extend({\r\n\r\n\ton: function( types, selector, data, fn, \/*INTERNAL*\/ one ) {\r\n\t\tvar origFn, type;\r\n\r\n\t\t\/\/ Types can be a map of types\/handlers\r\n\t\tif ( typeof types === \"object\" ) {\r\n\t\t\t\/\/ ( types-Object, selector, data )\r\n\t\t\tif ( typeof selector !== \"string\" ) {\r\n\t\t\t\t\/\/ ( types-Object, data )\r\n\t\t\t\tdata = data || selector;\r\n\t\t\t\tselector = undefined;\r\n\t\t\t}\r\n\t\t\tfor ( type in types ) {\r\n\t\t\t\tthis.on( type, selector, data, types[ type ], one );\r\n\t\t\t}\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tif ( data == null && fn == null ) {\r\n\t\t\t\/\/ ( types, fn )\r\n\t\t\tfn = selector;\r\n\t\t\tdata = selector = undefined;\r\n\t\t} else if ( fn == null ) {\r\n\t\t\tif ( typeof selector === \"string\" ) {\r\n\t\t\t\t\/\/ ( types, selector, fn )\r\n\t\t\t\tfn = data;\r\n\t\t\t\tdata = undefined;\r\n\t\t\t} else {\r\n\t\t\t\t\/\/ ( types, data, fn )\r\n\t\t\t\tfn = data;\r\n\t\t\t\tdata = selector;\r\n\t\t\t\tselector = undefined;\r\n\t\t\t}\r\n\t\t}\r\n\t\tif ( fn === false ) {\r\n\t\t\tfn = returnFalse;\r\n\t\t} else if ( !fn ) {\r\n\t\t\treturn this;\r\n\t\t}\r\n\r\n\t\tif ( one === 1 ) {\r\n\t\t\torigFn = fn;\r\n\t\t\tfn = function( event ) {\r\n\t\t\t\t\/\/ Can use an empty set, since event contains the info\r\n\t\t\t\tjQuery().off( event );\r\n\t\t\t\treturn origFn.apply( this, arguments );\r\n\t\t\t};\r\n\t\t\t\/\/ Use same guid so caller can remove using origFn\r\n\t\t\tfn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );\r\n\t\t}\r\n\t\treturn this.each( function() {\r\n\t\t\tjQuery.event.add( this, types, fn, data, selector );\r\n\t\t});\r\n\t},\r\n\tone: function( types, selector, data, fn ) {\r\n\t\treturn this.on( types, selector, data, fn, 1 );\r\n\t},\r\n\toff: function( types, selector, fn ) {\r\n\t\tvar handleObj, type;\r\n\t\tif ( types && types.preventDefault && types.handleObj ) {\r\n\t\t\t\/\/ ( event )  dispatched jQuery.Event\r\n\t\t\thandleObj = types.handleObj;\r\n\t\t\tjQuery( types.delegateTarget ).off(\r\n\t\t\t\thandleObj.namespace ? handleObj.origType + \".\" + handleObj.namespace : handleObj.origType,\r\n\t\t\t\thandleObj.selector,\r\n\t\t\t\thandleObj.handler\r\n\t\t\t);\r\n\t\t\treturn this;\r\n\t\t}\r\n\t\tif ( typeof types === \"object\" ) {\r\n\t\t\t\/\/ ( types-object [, selector] )\r\n\t\t\tfor ( type in types ) {\r\n\t\t\t\tthis.off( type, selector, types[ type ] );\r\n\t\t\t}\r\n\t\t\treturn this;\r\n\t\t}\r\n\t\tif ( selector === false || typeof selector === \"function\" ) {\r\n\t\t\t\/\/ ( types [, fn] )\r\n\t\t\tfn = selector;\r\n\t\t\tselector = undefined;\r\n\t\t}\r\n\t\tif ( fn === false ) {\r\n\t\t\tfn = returnFalse;\r\n\t\t}\r\n\t\treturn this.each(function() {\r\n\t\t\tjQuery.event.remove( this, types, fn, selector );\r\n\t\t});\r\n\t},\r\n\r\n\ttrigger: function( type, data ) {\r\n\t\treturn this.each(function() {\r\n\t\t\tjQuery.event.trigger( type, data, this );\r\n\t\t});\r\n\t},\r\n\ttriggerHandler: function( type, data ) {\r\n\t\tvar elem = this[0];\r\n\t\tif ( elem ) {\r\n\t\t\treturn jQuery.event.trigger( type, data, elem, true );\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\r\nvar\r\n\trxhtmlTag = \/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\\/>\/gi,\r\n\trtagName = \/<([\\w:]+)\/,\r\n\trhtml = \/<|&#?\\w+;\/,\r\n\trnoInnerhtml = \/<(?:script|style|link)\/i,\r\n\t\/\/ checked=\"checked\" or checked\r\n\trchecked = \/checked\\s*(?:[^=]|=\\s*.checked.)\/i,\r\n\trscriptType = \/^$|\\\/(?:java|ecma)script\/i,\r\n\trscriptTypeMasked = \/^true\\\/(.*)\/,\r\n\trcleanScript = \/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$\/g,\r\n\r\n\t\/\/ We have to close these tags to support XHTML (#13200)\r\n\twrapMap = {\r\n\r\n\t\t\/\/ Support: IE9\r\n\t\toption: [ 1, \"<select multiple=\'multiple\'>\", \"<\/select>\" ],\r\n\r\n\t\tthead: [ 1, \"<table>\", \"<\/table>\" ],\r\n\t\tcol: [ 2, \"<table><colgroup>\", \"<\/colgroup><\/table>\" ],\r\n\t\ttr: [ 2, \"<table><tbody>\", \"<\/tbody><\/table>\" ],\r\n\t\ttd: [ 3, \"<table><tbody><tr>\", \"<\/tr><\/tbody><\/table>\" ],\r\n\r\n\t\t_default: [ 0, \"\", \"\" ]\r\n\t};\r\n\r\n\/\/ Support: IE9\r\nwrapMap.optgroup = wrapMap.option;\r\n\r\nwrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\r\nwrapMap.th = wrapMap.td;\r\n\r\n\/\/ Support: 1.x compatibility\r\n\/\/ Manipulating tables requires a tbody\r\nfunction manipulationTarget( elem, content ) {\r\n\treturn jQuery.nodeName( elem, \"table\" ) &&\r\n\t\tjQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, \"tr\" ) ?\r\n\r\n\t\telem.getElementsByTagName(\"tbody\")[0] ||\r\n\t\t\telem.appendChild( elem.ownerDocument.createElement(\"tbody\") ) :\r\n\t\telem;\r\n}\r\n\r\n\/\/ Replace\/restore the type attribute of script elements for safe DOM manipulation\r\nfunction disableScript( elem ) {\r\n\telem.type = (elem.getAttribute(\"type\") !== null) + \"\/\" + elem.type;\r\n\treturn elem;\r\n}\r\nfunction restoreScript( elem ) {\r\n\tvar match = rscriptTypeMasked.exec( elem.type );\r\n\r\n\tif ( match ) {\r\n\t\telem.type = match[ 1 ];\r\n\t} else {\r\n\t\telem.removeAttribute(\"type\");\r\n\t}\r\n\r\n\treturn elem;\r\n}\r\n\r\n\/\/ Mark scripts as having already been evaluated\r\nfunction setGlobalEval( elems, refElements ) {\r\n\tvar i = 0,\r\n\t\tl = elems.length;\r\n\r\n\tfor ( ; i < l; i++ ) {\r\n\t\tdata_priv.set(\r\n\t\t\telems[ i ], \"globalEval\", !refElements || data_priv.get( refElements[ i ], \"globalEval\" )\r\n\t\t);\r\n\t}\r\n}\r\n\r\nfunction cloneCopyEvent( src, dest ) {\r\n\tvar i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;\r\n\r\n\tif ( dest.nodeType !== 1 ) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t\/\/ 1. Copy private data: events, handlers, etc.\r\n\tif ( data_priv.hasData( src ) ) {\r\n\t\tpdataOld = data_priv.access( src );\r\n\t\tpdataCur = data_priv.set( dest, pdataOld );\r\n\t\tevents = pdataOld.events;\r\n\r\n\t\tif ( events ) {\r\n\t\t\tdelete pdataCur.handle;\r\n\t\t\tpdataCur.events = {};\r\n\r\n\t\t\tfor ( type in events ) {\r\n\t\t\t\tfor ( i = 0, l = events[ type ].length; i < l; i++ ) {\r\n\t\t\t\t\tjQuery.event.add( dest, type, events[ type ][ i ] );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ 2. Copy user data\r\n\tif ( data_user.hasData( src ) ) {\r\n\t\tudataOld = data_user.access( src );\r\n\t\tudataCur = jQuery.extend( {}, udataOld );\r\n\r\n\t\tdata_user.set( dest, udataCur );\r\n\t}\r\n}\r\n\r\nfunction getAll( context, tag ) {\r\n\tvar ret = context.getElementsByTagName ? context.getElementsByTagName( tag || \"*\" ) :\r\n\t\t\tcontext.querySelectorAll ? context.querySelectorAll( tag || \"*\" ) :\r\n\t\t\t[];\r\n\r\n\treturn tag === undefined || tag && jQuery.nodeName( context, tag ) ?\r\n\t\tjQuery.merge( [ context ], ret ) :\r\n\t\tret;\r\n}\r\n\r\n\/\/ Fix IE bugs, see support tests\r\nfunction fixInput( src, dest ) {\r\n\tvar nodeName = dest.nodeName.toLowerCase();\r\n\r\n\t\/\/ Fails to persist the checked state of a cloned checkbox or radio button.\r\n\tif ( nodeName === \"input\" && rcheckableType.test( src.type ) ) {\r\n\t\tdest.checked = src.checked;\r\n\r\n\t\/\/ Fails to return the selected option to the default selected state when cloning options\r\n\t} else if ( nodeName === \"input\" || nodeName === \"textarea\" ) {\r\n\t\tdest.defaultValue = src.defaultValue;\r\n\t}\r\n}\r\n\r\njQuery.extend({\r\n\tclone: function( elem, dataAndEvents, deepDataAndEvents ) {\r\n\t\tvar i, l, srcElements, destElements,\r\n\t\t\tclone = elem.cloneNode( true ),\r\n\t\t\tinPage = jQuery.contains( elem.ownerDocument, elem );\r\n\r\n\t\t\/\/ Fix IE cloning issues\r\n\t\tif ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&\r\n\t\t\t\t!jQuery.isXMLDoc( elem ) ) {\r\n\r\n\t\t\t\/\/ We eschew Sizzle here for performance reasons: http:\/\/jsperf.com\/getall-vs-sizzle\/2\r\n\t\t\tdestElements = getAll( clone );\r\n\t\t\tsrcElements = getAll( elem );\r\n\r\n\t\t\tfor ( i = 0, l = srcElements.length; i < l; i++ ) {\r\n\t\t\t\tfixInput( srcElements[ i ], destElements[ i ] );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Copy the events from the original to the clone\r\n\t\tif ( dataAndEvents ) {\r\n\t\t\tif ( deepDataAndEvents ) {\r\n\t\t\t\tsrcElements = srcElements || getAll( elem );\r\n\t\t\t\tdestElements = destElements || getAll( clone );\r\n\r\n\t\t\t\tfor ( i = 0, l = srcElements.length; i < l; i++ ) {\r\n\t\t\t\t\tcloneCopyEvent( srcElements[ i ], destElements[ i ] );\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tcloneCopyEvent( elem, clone );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Preserve script evaluation history\r\n\t\tdestElements = getAll( clone, \"script\" );\r\n\t\tif ( destElements.length > 0 ) {\r\n\t\t\tsetGlobalEval( destElements, !inPage && getAll( elem, \"script\" ) );\r\n\t\t}\r\n\r\n\t\t\/\/ Return the cloned set\r\n\t\treturn clone;\r\n\t},\r\n\r\n\tbuildFragment: function( elems, context, scripts, selection ) {\r\n\t\tvar elem, tmp, tag, wrap, contains, j,\r\n\t\t\tfragment = context.createDocumentFragment(),\r\n\t\t\tnodes = [],\r\n\t\t\ti = 0,\r\n\t\t\tl = elems.length;\r\n\r\n\t\tfor ( ; i < l; i++ ) {\r\n\t\t\telem = elems[ i ];\r\n\r\n\t\t\tif ( elem || elem === 0 ) {\r\n\r\n\t\t\t\t\/\/ Add nodes directly\r\n\t\t\t\tif ( jQuery.type( elem ) === \"object\" ) {\r\n\t\t\t\t\t\/\/ Support: QtWebKit, PhantomJS\r\n\t\t\t\t\t\/\/ push.apply(_, arraylike) throws on ancient WebKit\r\n\t\t\t\t\tjQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );\r\n\r\n\t\t\t\t\/\/ Convert non-html into a text node\r\n\t\t\t\t} else if ( !rhtml.test( elem ) ) {\r\n\t\t\t\t\tnodes.push( context.createTextNode( elem ) );\r\n\r\n\t\t\t\t\/\/ Convert html into DOM nodes\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttmp = tmp || fragment.appendChild( context.createElement(\"div\") );\r\n\r\n\t\t\t\t\t\/\/ Deserialize a standard representation\r\n\t\t\t\t\ttag = ( rtagName.exec( elem ) || [ \"\", \"\" ] )[ 1 ].toLowerCase();\r\n\t\t\t\t\twrap = wrapMap[ tag ] || wrapMap._default;\r\n\t\t\t\t\ttmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, \"<$1><\/$2>\" ) + wrap[ 2 ];\r\n\r\n\t\t\t\t\t\/\/ Descend through wrappers to the right content\r\n\t\t\t\t\tj = wrap[ 0 ];\r\n\t\t\t\t\twhile ( j-- ) {\r\n\t\t\t\t\t\ttmp = tmp.lastChild;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Support: QtWebKit, PhantomJS\r\n\t\t\t\t\t\/\/ push.apply(_, arraylike) throws on ancient WebKit\r\n\t\t\t\t\tjQuery.merge( nodes, tmp.childNodes );\r\n\r\n\t\t\t\t\t\/\/ Remember the top-level container\r\n\t\t\t\t\ttmp = fragment.firstChild;\r\n\r\n\t\t\t\t\t\/\/ Ensure the created nodes are orphaned (#12392)\r\n\t\t\t\t\ttmp.textContent = \"\";\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Remove wrapper from fragment\r\n\t\tfragment.textContent = \"\";\r\n\r\n\t\ti = 0;\r\n\t\twhile ( (elem = nodes[ i++ ]) ) {\r\n\r\n\t\t\t\/\/ #4087 - If origin and destination elements are the same, and this is\r\n\t\t\t\/\/ that element, do not do anything\r\n\t\t\tif ( selection && jQuery.inArray( elem, selection ) !== -1 ) {\r\n\t\t\t\tcontinue;\r\n\t\t\t}\r\n\r\n\t\t\tcontains = jQuery.contains( elem.ownerDocument, elem );\r\n\r\n\t\t\t\/\/ Append to fragment\r\n\t\t\ttmp = getAll( fragment.appendChild( elem ), \"script\" );\r\n\r\n\t\t\t\/\/ Preserve script evaluation history\r\n\t\t\tif ( contains ) {\r\n\t\t\t\tsetGlobalEval( tmp );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Capture executables\r\n\t\t\tif ( scripts ) {\r\n\t\t\t\tj = 0;\r\n\t\t\t\twhile ( (elem = tmp[ j++ ]) ) {\r\n\t\t\t\t\tif ( rscriptType.test( elem.type || \"\" ) ) {\r\n\t\t\t\t\t\tscripts.push( elem );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn fragment;\r\n\t},\r\n\r\n\tcleanData: function( elems ) {\r\n\t\tvar data, elem, type, key,\r\n\t\t\tspecial = jQuery.event.special,\r\n\t\t\ti = 0;\r\n\r\n\t\tfor ( ; (elem = elems[ i ]) !== undefined; i++ ) {\r\n\t\t\tif ( jQuery.acceptData( elem ) ) {\r\n\t\t\t\tkey = elem[ data_priv.expando ];\r\n\r\n\t\t\t\tif ( key && (data = data_priv.cache[ key ]) ) {\r\n\t\t\t\t\tif ( data.events ) {\r\n\t\t\t\t\t\tfor ( type in data.events ) {\r\n\t\t\t\t\t\t\tif ( special[ type ] ) {\r\n\t\t\t\t\t\t\t\tjQuery.event.remove( elem, type );\r\n\r\n\t\t\t\t\t\t\t\/\/ This is a shortcut to avoid jQuery.event.remove\'s overhead\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tjQuery.removeEvent( elem, type, data.handle );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif ( data_priv.cache[ key ] ) {\r\n\t\t\t\t\t\t\/\/ Discard any remaining `private` data\r\n\t\t\t\t\t\tdelete data_priv.cache[ key ];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\/\/ Discard any remaining `user` data\r\n\t\t\tdelete data_user.cache[ elem[ data_user.expando ] ];\r\n\t\t}\r\n\t}\r\n});\r\n\r\njQuery.fn.extend({\r\n\ttext: function( value ) {\r\n\t\treturn access( this, function( value ) {\r\n\t\t\treturn value === undefined ?\r\n\t\t\t\tjQuery.text( this ) :\r\n\t\t\t\tthis.empty().each(function() {\r\n\t\t\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\r\n\t\t\t\t\t\tthis.textContent = value;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t}, null, value, arguments.length );\r\n\t},\r\n\r\n\tappend: function() {\r\n\t\treturn this.domManip( arguments, function( elem ) {\r\n\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\r\n\t\t\t\tvar target = manipulationTarget( this, elem );\r\n\t\t\t\ttarget.appendChild( elem );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\tprepend: function() {\r\n\t\treturn this.domManip( arguments, function( elem ) {\r\n\t\t\tif ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {\r\n\t\t\t\tvar target = manipulationTarget( this, elem );\r\n\t\t\t\ttarget.insertBefore( elem, target.firstChild );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\tbefore: function() {\r\n\t\treturn this.domManip( arguments, function( elem ) {\r\n\t\t\tif ( this.parentNode ) {\r\n\t\t\t\tthis.parentNode.insertBefore( elem, this );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\tafter: function() {\r\n\t\treturn this.domManip( arguments, function( elem ) {\r\n\t\t\tif ( this.parentNode ) {\r\n\t\t\t\tthis.parentNode.insertBefore( elem, this.nextSibling );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\tremove: function( selector, keepData \/* Internal Use Only *\/ ) {\r\n\t\tvar elem,\r\n\t\t\telems = selector ? jQuery.filter( selector, this ) : this,\r\n\t\t\ti = 0;\r\n\r\n\t\tfor ( ; (elem = elems[i]) != null; i++ ) {\r\n\t\t\tif ( !keepData && elem.nodeType === 1 ) {\r\n\t\t\t\tjQuery.cleanData( getAll( elem ) );\r\n\t\t\t}\r\n\r\n\t\t\tif ( elem.parentNode ) {\r\n\t\t\t\tif ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {\r\n\t\t\t\t\tsetGlobalEval( getAll( elem, \"script\" ) );\r\n\t\t\t\t}\r\n\t\t\t\telem.parentNode.removeChild( elem );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tempty: function() {\r\n\t\tvar elem,\r\n\t\t\ti = 0;\r\n\r\n\t\tfor ( ; (elem = this[i]) != null; i++ ) {\r\n\t\t\tif ( elem.nodeType === 1 ) {\r\n\r\n\t\t\t\t\/\/ Prevent memory leaks\r\n\t\t\t\tjQuery.cleanData( getAll( elem, false ) );\r\n\r\n\t\t\t\t\/\/ Remove any remaining nodes\r\n\t\t\t\telem.textContent = \"\";\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tclone: function( dataAndEvents, deepDataAndEvents ) {\r\n\t\tdataAndEvents = dataAndEvents == null ? false : dataAndEvents;\r\n\t\tdeepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;\r\n\r\n\t\treturn this.map(function() {\r\n\t\t\treturn jQuery.clone( this, dataAndEvents, deepDataAndEvents );\r\n\t\t});\r\n\t},\r\n\r\n\thtml: function( value ) {\r\n\t\treturn access( this, function( value ) {\r\n\t\t\tvar elem = this[ 0 ] || {},\r\n\t\t\t\ti = 0,\r\n\t\t\t\tl = this.length;\r\n\r\n\t\t\tif ( value === undefined && elem.nodeType === 1 ) {\r\n\t\t\t\treturn elem.innerHTML;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ See if we can take a shortcut and just use innerHTML\r\n\t\t\tif ( typeof value === \"string\" && !rnoInnerhtml.test( value ) &&\r\n\t\t\t\t!wrapMap[ ( rtagName.exec( value ) || [ \"\", \"\" ] )[ 1 ].toLowerCase() ] ) {\r\n\r\n\t\t\t\tvalue = value.replace( rxhtmlTag, \"<$1><\/$2>\" );\r\n\r\n\t\t\t\ttry {\r\n\t\t\t\t\tfor ( ; i < l; i++ ) {\r\n\t\t\t\t\t\telem = this[ i ] || {};\r\n\r\n\t\t\t\t\t\t\/\/ Remove element nodes and prevent memory leaks\r\n\t\t\t\t\t\tif ( elem.nodeType === 1 ) {\r\n\t\t\t\t\t\t\tjQuery.cleanData( getAll( elem, false ) );\r\n\t\t\t\t\t\t\telem.innerHTML = value;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\telem = 0;\r\n\r\n\t\t\t\t\/\/ If using innerHTML throws an exception, use the fallback method\r\n\t\t\t\t} catch( e ) {}\r\n\t\t\t}\r\n\r\n\t\t\tif ( elem ) {\r\n\t\t\t\tthis.empty().append( value );\r\n\t\t\t}\r\n\t\t}, null, value, arguments.length );\r\n\t},\r\n\r\n\treplaceWith: function() {\r\n\t\tvar arg = arguments[ 0 ];\r\n\r\n\t\t\/\/ Make the changes, replacing each context element with the new content\r\n\t\tthis.domManip( arguments, function( elem ) {\r\n\t\t\targ = this.parentNode;\r\n\r\n\t\t\tjQuery.cleanData( getAll( this ) );\r\n\r\n\t\t\tif ( arg ) {\r\n\t\t\t\targ.replaceChild( elem, this );\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t\/\/ Force removal if there was no new content (e.g., from empty arguments)\r\n\t\treturn arg && (arg.length || arg.nodeType) ? this : this.remove();\r\n\t},\r\n\r\n\tdetach: function( selector ) {\r\n\t\treturn this.remove( selector, true );\r\n\t},\r\n\r\n\tdomManip: function( args, callback ) {\r\n\r\n\t\t\/\/ Flatten any nested arrays\r\n\t\targs = concat.apply( [], args );\r\n\r\n\t\tvar fragment, first, scripts, hasScripts, node, doc,\r\n\t\t\ti = 0,\r\n\t\t\tl = this.length,\r\n\t\t\tset = this,\r\n\t\t\tiNoClone = l - 1,\r\n\t\t\tvalue = args[ 0 ],\r\n\t\t\tisFunction = jQuery.isFunction( value );\r\n\r\n\t\t\/\/ We can\'t cloneNode fragments that contain checked, in WebKit\r\n\t\tif ( isFunction ||\r\n\t\t\t\t( l > 1 && typeof value === \"string\" &&\r\n\t\t\t\t\t!support.checkClone && rchecked.test( value ) ) ) {\r\n\t\t\treturn this.each(function( index ) {\r\n\t\t\t\tvar self = set.eq( index );\r\n\t\t\t\tif ( isFunction ) {\r\n\t\t\t\t\targs[ 0 ] = value.call( this, index, self.html() );\r\n\t\t\t\t}\r\n\t\t\t\tself.domManip( args, callback );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif ( l ) {\r\n\t\t\tfragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );\r\n\t\t\tfirst = fragment.firstChild;\r\n\r\n\t\t\tif ( fragment.childNodes.length === 1 ) {\r\n\t\t\t\tfragment = first;\r\n\t\t\t}\r\n\r\n\t\t\tif ( first ) {\r\n\t\t\t\tscripts = jQuery.map( getAll( fragment, \"script\" ), disableScript );\r\n\t\t\t\thasScripts = scripts.length;\r\n\r\n\t\t\t\t\/\/ Use the original fragment for the last item instead of the first because it can end up\r\n\t\t\t\t\/\/ being emptied incorrectly in certain situations (#8070).\r\n\t\t\t\tfor ( ; i < l; i++ ) {\r\n\t\t\t\t\tnode = fragment;\r\n\r\n\t\t\t\t\tif ( i !== iNoClone ) {\r\n\t\t\t\t\t\tnode = jQuery.clone( node, true, true );\r\n\r\n\t\t\t\t\t\t\/\/ Keep references to cloned scripts for later restoration\r\n\t\t\t\t\t\tif ( hasScripts ) {\r\n\t\t\t\t\t\t\t\/\/ Support: QtWebKit\r\n\t\t\t\t\t\t\t\/\/ jQuery.merge because push.apply(_, arraylike) throws\r\n\t\t\t\t\t\t\tjQuery.merge( scripts, getAll( node, \"script\" ) );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tcallback.call( this[ i ], node, i );\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif ( hasScripts ) {\r\n\t\t\t\t\tdoc = scripts[ scripts.length - 1 ].ownerDocument;\r\n\r\n\t\t\t\t\t\/\/ Reenable scripts\r\n\t\t\t\t\tjQuery.map( scripts, restoreScript );\r\n\r\n\t\t\t\t\t\/\/ Evaluate executable scripts on first document insertion\r\n\t\t\t\t\tfor ( i = 0; i < hasScripts; i++ ) {\r\n\t\t\t\t\t\tnode = scripts[ i ];\r\n\t\t\t\t\t\tif ( rscriptType.test( node.type || \"\" ) &&\r\n\t\t\t\t\t\t\t!data_priv.access( node, \"globalEval\" ) && jQuery.contains( doc, node ) ) {\r\n\r\n\t\t\t\t\t\t\tif ( node.src ) {\r\n\t\t\t\t\t\t\t\t\/\/ Optional AJAX dependency, but won\'t run scripts if not present\r\n\t\t\t\t\t\t\t\tif ( jQuery._evalUrl ) {\r\n\t\t\t\t\t\t\t\t\tjQuery._evalUrl( node.src );\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tjQuery.globalEval( node.textContent.replace( rcleanScript, \"\" ) );\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t}\r\n});\r\n\r\njQuery.each({\r\n\tappendTo: \"append\",\r\n\tprependTo: \"prepend\",\r\n\tinsertBefore: \"before\",\r\n\tinsertAfter: \"after\",\r\n\treplaceAll: \"replaceWith\"\r\n}, function( name, original ) {\r\n\tjQuery.fn[ name ] = function( selector ) {\r\n\t\tvar elems,\r\n\t\t\tret = [],\r\n\t\t\tinsert = jQuery( selector ),\r\n\t\t\tlast = insert.length - 1,\r\n\t\t\ti = 0;\r\n\r\n\t\tfor ( ; i <= last; i++ ) {\r\n\t\t\telems = i === last ? this : this.clone( true );\r\n\t\t\tjQuery( insert[ i ] )[ original ]( elems );\r\n\r\n\t\t\t\/\/ Support: QtWebKit\r\n\t\t\t\/\/ .get() because push.apply(_, arraylike) throws\r\n\t\t\tpush.apply( ret, elems.get() );\r\n\t\t}\r\n\r\n\t\treturn this.pushStack( ret );\r\n\t};\r\n});\r\n\r\n\r\nvar iframe,\r\n\telemdisplay = {};\r\n\r\n\/**\r\n * Retrieve the actual display of a element\r\n * @param {String} name nodeName of the element\r\n * @param {Object} doc Document object\r\n *\/\r\n\/\/ Called only from within defaultDisplay\r\nfunction actualDisplay( name, doc ) {\r\n\tvar style,\r\n\t\telem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),\r\n\r\n\t\t\/\/ getDefaultComputedStyle might be reliably used only on attached element\r\n\t\tdisplay = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?\r\n\r\n\t\t\t\/\/ Use of this method is a temporary fix (more like optimization) until something better comes along,\r\n\t\t\t\/\/ since it was removed from specification and supported only in FF\r\n\t\t\tstyle.display : jQuery.css( elem[ 0 ], \"display\" );\r\n\r\n\t\/\/ We don\'t have any data stored on the element,\r\n\t\/\/ so use \"detach\" method as fast way to get rid of the element\r\n\telem.detach();\r\n\r\n\treturn display;\r\n}\r\n\r\n\/**\r\n * Try to determine the default display value of an element\r\n * @param {String} nodeName\r\n *\/\r\nfunction defaultDisplay( nodeName ) {\r\n\tvar doc = document,\r\n\t\tdisplay = elemdisplay[ nodeName ];\r\n\r\n\tif ( !display ) {\r\n\t\tdisplay = actualDisplay( nodeName, doc );\r\n\r\n\t\t\/\/ If the simple way fails, read from inside an iframe\r\n\t\tif ( display === \"none\" || !display ) {\r\n\r\n\t\t\t\/\/ Use the already-created iframe if possible\r\n\t\t\tiframe = (iframe || jQuery( \"<iframe frameborder=\'0\' width=\'0\' height=\'0\'\/>\" )).appendTo( doc.documentElement );\r\n\r\n\t\t\t\/\/ Always write a new HTML skeleton so Webkit and Firefox don\'t choke on reuse\r\n\t\t\tdoc = iframe[ 0 ].contentDocument;\r\n\r\n\t\t\t\/\/ Support: IE\r\n\t\t\tdoc.write();\r\n\t\t\tdoc.close();\r\n\r\n\t\t\tdisplay = actualDisplay( nodeName, doc );\r\n\t\t\tiframe.detach();\r\n\t\t}\r\n\r\n\t\t\/\/ Store the correct default display\r\n\t\telemdisplay[ nodeName ] = display;\r\n\t}\r\n\r\n\treturn display;\r\n}\r\nvar rmargin = (\/^margin\/);\r\n\r\nvar rnumnonpx = new RegExp( \"^(\" + pnum + \")(?!px)[a-z%]+$\", \"i\" );\r\n\r\nvar getStyles = function( elem ) {\r\n\t\t\/\/ Support: IE<=11+, Firefox<=30+ (#15098, #14150)\r\n\t\t\/\/ IE throws on elements created in popups\r\n\t\t\/\/ FF meanwhile throws on frame elements through \"defaultView.getComputedStyle\"\r\n\t\tif ( elem.ownerDocument.defaultView.opener ) {\r\n\t\t\treturn elem.ownerDocument.defaultView.getComputedStyle( elem, null );\r\n\t\t}\r\n\r\n\t\treturn window.getComputedStyle( elem, null );\r\n\t};\r\n\r\n\r\n\r\nfunction curCSS( elem, name, computed ) {\r\n\tvar width, minWidth, maxWidth, ret,\r\n\t\tstyle = elem.style;\r\n\r\n\tcomputed = computed || getStyles( elem );\r\n\r\n\t\/\/ Support: IE9\r\n\t\/\/ getPropertyValue is only needed for .css(\'filter\') (#12537)\r\n\tif ( computed ) {\r\n\t\tret = computed.getPropertyValue( name ) || computed[ name ];\r\n\t}\r\n\r\n\tif ( computed ) {\r\n\r\n\t\tif ( ret === \"\" && !jQuery.contains( elem.ownerDocument, elem ) ) {\r\n\t\t\tret = jQuery.style( elem, name );\r\n\t\t}\r\n\r\n\t\t\/\/ Support: iOS < 6\r\n\t\t\/\/ A tribute to the \"awesome hack by Dean Edwards\"\r\n\t\t\/\/ iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels\r\n\t\t\/\/ this is against the CSSOM draft spec: http:\/\/dev.w3.org\/csswg\/cssom\/#resolved-values\r\n\t\tif ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {\r\n\r\n\t\t\t\/\/ Remember the original values\r\n\t\t\twidth = style.width;\r\n\t\t\tminWidth = style.minWidth;\r\n\t\t\tmaxWidth = style.maxWidth;\r\n\r\n\t\t\t\/\/ Put in the new values to get a computed value out\r\n\t\t\tstyle.minWidth = style.maxWidth = style.width = ret;\r\n\t\t\tret = computed.width;\r\n\r\n\t\t\t\/\/ Revert the changed values\r\n\t\t\tstyle.width = width;\r\n\t\t\tstyle.minWidth = minWidth;\r\n\t\t\tstyle.maxWidth = maxWidth;\r\n\t\t}\r\n\t}\r\n\r\n\treturn ret !== undefined ?\r\n\t\t\/\/ Support: IE\r\n\t\t\/\/ IE returns zIndex value as an integer.\r\n\t\tret + \"\" :\r\n\t\tret;\r\n}\r\n\r\n\r\nfunction addGetHookIf( conditionFn, hookFn ) {\r\n\t\/\/ Define the hook, we\'ll check on the first run if it\'s really needed.\r\n\treturn {\r\n\t\tget: function() {\r\n\t\t\tif ( conditionFn() ) {\r\n\t\t\t\t\/\/ Hook not needed (or it\'s not possible to use it due\r\n\t\t\t\t\/\/ to missing dependency), remove it.\r\n\t\t\t\tdelete this.get;\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Hook needed; redefine it so that the support test is not executed again.\r\n\t\t\treturn (this.get = hookFn).apply( this, arguments );\r\n\t\t}\r\n\t};\r\n}\r\n\r\n\r\n(function() {\r\n\tvar pixelPositionVal, boxSizingReliableVal,\r\n\t\tdocElem = document.documentElement,\r\n\t\tcontainer = document.createElement( \"div\" ),\r\n\t\tdiv = document.createElement( \"div\" );\r\n\r\n\tif ( !div.style ) {\r\n\t\treturn;\r\n\t}\r\n\r\n\t\/\/ Support: IE9-11+\r\n\t\/\/ Style of cloned element affects source element cloned (#8908)\r\n\tdiv.style.backgroundClip = \"content-box\";\r\n\tdiv.cloneNode( true ).style.backgroundClip = \"\";\r\n\tsupport.clearCloneStyle = div.style.backgroundClip === \"content-box\";\r\n\r\n\tcontainer.style.cssText = \"border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;\" +\r\n\t\t\"position:absolute\";\r\n\tcontainer.appendChild( div );\r\n\r\n\t\/\/ Executing both pixelPosition & boxSizingReliable tests require only one layout\r\n\t\/\/ so they\'re executed at the same time to save the second computation.\r\n\tfunction computePixelPositionAndBoxSizingReliable() {\r\n\t\tdiv.style.cssText =\r\n\t\t\t\/\/ Support: Firefox<29, Android 2.3\r\n\t\t\t\/\/ Vendor-prefix box-sizing\r\n\t\t\t\"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;\" +\r\n\t\t\t\"box-sizing:border-box;display:block;margin-top:1%;top:1%;\" +\r\n\t\t\t\"border:1px;padding:1px;width:4px;position:absolute\";\r\n\t\tdiv.innerHTML = \"\";\r\n\t\tdocElem.appendChild( container );\r\n\r\n\t\tvar divStyle = window.getComputedStyle( div, null );\r\n\t\tpixelPositionVal = divStyle.top !== \"1%\";\r\n\t\tboxSizingReliableVal = divStyle.width === \"4px\";\r\n\r\n\t\tdocElem.removeChild( container );\r\n\t}\r\n\r\n\t\/\/ Support: node.js jsdom\r\n\t\/\/ Don\'t assume that getComputedStyle is a property of the global object\r\n\tif ( window.getComputedStyle ) {\r\n\t\tjQuery.extend( support, {\r\n\t\t\tpixelPosition: function() {\r\n\r\n\t\t\t\t\/\/ This test is executed only once but we still do memoizing\r\n\t\t\t\t\/\/ since we can use the boxSizingReliable pre-computing.\r\n\t\t\t\t\/\/ No need to check if the test was already performed, though.\r\n\t\t\t\tcomputePixelPositionAndBoxSizingReliable();\r\n\t\t\t\treturn pixelPositionVal;\r\n\t\t\t},\r\n\t\t\tboxSizingReliable: function() {\r\n\t\t\t\tif ( boxSizingReliableVal == null ) {\r\n\t\t\t\t\tcomputePixelPositionAndBoxSizingReliable();\r\n\t\t\t\t}\r\n\t\t\t\treturn boxSizingReliableVal;\r\n\t\t\t},\r\n\t\t\treliableMarginRight: function() {\r\n\r\n\t\t\t\t\/\/ Support: Android 2.3\r\n\t\t\t\t\/\/ Check if div with explicit width and no margin-right incorrectly\r\n\t\t\t\t\/\/ gets computed margin-right based on width of container. (#3333)\r\n\t\t\t\t\/\/ WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right\r\n\t\t\t\t\/\/ This support function is only executed once so no memoizing is needed.\r\n\t\t\t\tvar ret,\r\n\t\t\t\t\tmarginDiv = div.appendChild( document.createElement( \"div\" ) );\r\n\r\n\t\t\t\t\/\/ Reset CSS: box-sizing; display; margin; border; padding\r\n\t\t\t\tmarginDiv.style.cssText = div.style.cssText =\r\n\t\t\t\t\t\/\/ Support: Firefox<29, Android 2.3\r\n\t\t\t\t\t\/\/ Vendor-prefix box-sizing\r\n\t\t\t\t\t\"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;\" +\r\n\t\t\t\t\t\"box-sizing:content-box;display:block;margin:0;border:0;padding:0\";\r\n\t\t\t\tmarginDiv.style.marginRight = marginDiv.style.width = \"0\";\r\n\t\t\t\tdiv.style.width = \"1px\";\r\n\t\t\t\tdocElem.appendChild( container );\r\n\r\n\t\t\t\tret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );\r\n\r\n\t\t\t\tdocElem.removeChild( container );\r\n\t\t\t\tdiv.removeChild( marginDiv );\r\n\r\n\t\t\t\treturn ret;\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n})();\r\n\r\n\r\n\/\/ A method for quickly swapping in\/out CSS properties to get correct calculations.\r\njQuery.swap = function( elem, options, callback, args ) {\r\n\tvar ret, name,\r\n\t\told = {};\r\n\r\n\t\/\/ Remember the old values, and insert the new ones\r\n\tfor ( name in options ) {\r\n\t\told[ name ] = elem.style[ name ];\r\n\t\telem.style[ name ] = options[ name ];\r\n\t}\r\n\r\n\tret = callback.apply( elem, args || [] );\r\n\r\n\t\/\/ Revert the old values\r\n\tfor ( name in options ) {\r\n\t\telem.style[ name ] = old[ name ];\r\n\t}\r\n\r\n\treturn ret;\r\n};\r\n\r\n\r\nvar\r\n\t\/\/ Swappable if display is none or starts with table except \"table\", \"table-cell\", or \"table-caption\"\r\n\t\/\/ See here for display values: https:\/\/developer.mozilla.org\/en-US\/docs\/CSS\/display\r\n\trdisplayswap = \/^(none|table(?!-c[ea]).+)\/,\r\n\trnumsplit = new RegExp( \"^(\" + pnum + \")(.*)$\", \"i\" ),\r\n\trrelNum = new RegExp( \"^([+-])=(\" + pnum + \")\", \"i\" ),\r\n\r\n\tcssShow = { position: \"absolute\", visibility: \"hidden\", display: \"block\" },\r\n\tcssNormalTransform = {\r\n\t\tletterSpacing: \"0\",\r\n\t\tfontWeight: \"400\"\r\n\t},\r\n\r\n\tcssPrefixes = [ \"Webkit\", \"O\", \"Moz\", \"ms\" ];\r\n\r\n\/\/ Return a css property mapped to a potentially vendor prefixed property\r\nfunction vendorPropName( style, name ) {\r\n\r\n\t\/\/ Shortcut for names that are not vendor prefixed\r\n\tif ( name in style ) {\r\n\t\treturn name;\r\n\t}\r\n\r\n\t\/\/ Check for vendor prefixed names\r\n\tvar capName = name[0].toUpperCase() + name.slice(1),\r\n\t\torigName = name,\r\n\t\ti = cssPrefixes.length;\r\n\r\n\twhile ( i-- ) {\r\n\t\tname = cssPrefixes[ i ] + capName;\r\n\t\tif ( name in style ) {\r\n\t\t\treturn name;\r\n\t\t}\r\n\t}\r\n\r\n\treturn origName;\r\n}\r\n\r\nfunction setPositiveNumber( elem, value, subtract ) {\r\n\tvar matches = rnumsplit.exec( value );\r\n\treturn matches ?\r\n\t\t\/\/ Guard against undefined \"subtract\", e.g., when used as in cssHooks\r\n\t\tMath.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || \"px\" ) :\r\n\t\tvalue;\r\n}\r\n\r\nfunction augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {\r\n\tvar i = extra === ( isBorderBox ? \"border\" : \"content\" ) ?\r\n\t\t\/\/ If we already have the right measurement, avoid augmentation\r\n\t\t4 :\r\n\t\t\/\/ Otherwise initialize for horizontal or vertical properties\r\n\t\tname === \"width\" ? 1 : 0,\r\n\r\n\t\tval = 0;\r\n\r\n\tfor ( ; i < 4; i += 2 ) {\r\n\t\t\/\/ Both box models exclude margin, so add it if we want it\r\n\t\tif ( extra === \"margin\" ) {\r\n\t\t\tval += jQuery.css( elem, extra + cssExpand[ i ], true, styles );\r\n\t\t}\r\n\r\n\t\tif ( isBorderBox ) {\r\n\t\t\t\/\/ border-box includes padding, so remove it if we want content\r\n\t\t\tif ( extra === \"content\" ) {\r\n\t\t\t\tval -= jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ At this point, extra isn\'t border nor margin, so remove border\r\n\t\t\tif ( extra !== \"margin\" ) {\r\n\t\t\t\tval -= jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\t\/\/ At this point, extra isn\'t content, so add padding\r\n\t\t\tval += jQuery.css( elem, \"padding\" + cssExpand[ i ], true, styles );\r\n\r\n\t\t\t\/\/ At this point, extra isn\'t content nor padding, so add border\r\n\t\t\tif ( extra !== \"padding\" ) {\r\n\t\t\t\tval += jQuery.css( elem, \"border\" + cssExpand[ i ] + \"Width\", true, styles );\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn val;\r\n}\r\n\r\nfunction getWidthOrHeight( elem, name, extra ) {\r\n\r\n\t\/\/ Start with offset property, which is equivalent to the border-box value\r\n\tvar valueIsBorderBox = true,\r\n\t\tval = name === \"width\" ? elem.offsetWidth : elem.offsetHeight,\r\n\t\tstyles = getStyles( elem ),\r\n\t\tisBorderBox = jQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\";\r\n\r\n\t\/\/ Some non-html elements return undefined for offsetWidth, so check for null\/undefined\r\n\t\/\/ svg - https:\/\/bugzilla.mozilla.org\/show_bug.cgi?id=649285\r\n\t\/\/ MathML - https:\/\/bugzilla.mozilla.org\/show_bug.cgi?id=491668\r\n\tif ( val <= 0 || val == null ) {\r\n\t\t\/\/ Fall back to computed then uncomputed css if necessary\r\n\t\tval = curCSS( elem, name, styles );\r\n\t\tif ( val < 0 || val == null ) {\r\n\t\t\tval = elem.style[ name ];\r\n\t\t}\r\n\r\n\t\t\/\/ Computed unit is not pixels. Stop here and return.\r\n\t\tif ( rnumnonpx.test(val) ) {\r\n\t\t\treturn val;\r\n\t\t}\r\n\r\n\t\t\/\/ Check for style in case a browser which returns unreliable values\r\n\t\t\/\/ for getComputedStyle silently falls back to the reliable elem.style\r\n\t\tvalueIsBorderBox = isBorderBox &&\r\n\t\t\t( support.boxSizingReliable() || val === elem.style[ name ] );\r\n\r\n\t\t\/\/ Normalize \"\", auto, and prepare for extra\r\n\t\tval = parseFloat( val ) || 0;\r\n\t}\r\n\r\n\t\/\/ Use the active box-sizing model to add\/subtract irrelevant styles\r\n\treturn ( val +\r\n\t\taugmentWidthOrHeight(\r\n\t\t\telem,\r\n\t\t\tname,\r\n\t\t\textra || ( isBorderBox ? \"border\" : \"content\" ),\r\n\t\t\tvalueIsBorderBox,\r\n\t\t\tstyles\r\n\t\t)\r\n\t) + \"px\";\r\n}\r\n\r\nfunction showHide( elements, show ) {\r\n\tvar display, elem, hidden,\r\n\t\tvalues = [],\r\n\t\tindex = 0,\r\n\t\tlength = elements.length;\r\n\r\n\tfor ( ; index < length; index++ ) {\r\n\t\telem = elements[ index ];\r\n\t\tif ( !elem.style ) {\r\n\t\t\tcontinue;\r\n\t\t}\r\n\r\n\t\tvalues[ index ] = data_priv.get( elem, \"olddisplay\" );\r\n\t\tdisplay = elem.style.display;\r\n\t\tif ( show ) {\r\n\t\t\t\/\/ Reset the inline display of this element to learn if it is\r\n\t\t\t\/\/ being hidden by cascaded rules or not\r\n\t\t\tif ( !values[ index ] && display === \"none\" ) {\r\n\t\t\t\telem.style.display = \"\";\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Set elements which have been overridden with display: none\r\n\t\t\t\/\/ in a stylesheet to whatever the default browser style is\r\n\t\t\t\/\/ for such an element\r\n\t\t\tif ( elem.style.display === \"\" && isHidden( elem ) ) {\r\n\t\t\t\tvalues[ index ] = data_priv.access( elem, \"olddisplay\", defaultDisplay(elem.nodeName) );\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\thidden = isHidden( elem );\r\n\r\n\t\t\tif ( display !== \"none\" || !hidden ) {\r\n\t\t\t\tdata_priv.set( elem, \"olddisplay\", hidden ? display : jQuery.css( elem, \"display\" ) );\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Set the display of most of the elements in a second loop\r\n\t\/\/ to avoid the constant reflow\r\n\tfor ( index = 0; index < length; index++ ) {\r\n\t\telem = elements[ index ];\r\n\t\tif ( !elem.style ) {\r\n\t\t\tcontinue;\r\n\t\t}\r\n\t\tif ( !show || elem.style.display === \"none\" || elem.style.display === \"\" ) {\r\n\t\t\telem.style.display = show ? values[ index ] || \"\" : \"none\";\r\n\t\t}\r\n\t}\r\n\r\n\treturn elements;\r\n}\r\n\r\njQuery.extend({\r\n\r\n\t\/\/ Add in style property hooks for overriding the default\r\n\t\/\/ behavior of getting and setting a style property\r\n\tcssHooks: {\r\n\t\topacity: {\r\n\t\t\tget: function( elem, computed ) {\r\n\t\t\t\tif ( computed ) {\r\n\r\n\t\t\t\t\t\/\/ We should always get a number back from opacity\r\n\t\t\t\t\tvar ret = curCSS( elem, \"opacity\" );\r\n\t\t\t\t\treturn ret === \"\" ? \"1\" : ret;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t\/\/ Don\'t automatically add \"px\" to these possibly-unitless properties\r\n\tcssNumber: {\r\n\t\t\"columnCount\": true,\r\n\t\t\"fillOpacity\": true,\r\n\t\t\"flexGrow\": true,\r\n\t\t\"flexShrink\": true,\r\n\t\t\"fontWeight\": true,\r\n\t\t\"lineHeight\": true,\r\n\t\t\"opacity\": true,\r\n\t\t\"order\": true,\r\n\t\t\"orphans\": true,\r\n\t\t\"widows\": true,\r\n\t\t\"zIndex\": true,\r\n\t\t\"zoom\": true\r\n\t},\r\n\r\n\t\/\/ Add in properties whose names you wish to fix before\r\n\t\/\/ setting or getting the value\r\n\tcssProps: {\r\n\t\t\"float\": \"cssFloat\"\r\n\t},\r\n\r\n\t\/\/ Get and set the style property on a DOM Node\r\n\tstyle: function( elem, name, value, extra ) {\r\n\r\n\t\t\/\/ Don\'t set styles on text and comment nodes\r\n\t\tif ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Make sure that we\'re working with the right name\r\n\t\tvar ret, type, hooks,\r\n\t\t\torigName = jQuery.camelCase( name ),\r\n\t\t\tstyle = elem.style;\r\n\r\n\t\tname = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );\r\n\r\n\t\t\/\/ Gets hook for the prefixed version, then unprefixed version\r\n\t\thooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\r\n\r\n\t\t\/\/ Check if we\'re setting a value\r\n\t\tif ( value !== undefined ) {\r\n\t\t\ttype = typeof value;\r\n\r\n\t\t\t\/\/ Convert \"+=\" or \"-=\" to relative numbers (#7345)\r\n\t\t\tif ( type === \"string\" && (ret = rrelNum.exec( value )) ) {\r\n\t\t\t\tvalue = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );\r\n\t\t\t\t\/\/ Fixes bug #9237\r\n\t\t\t\ttype = \"number\";\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Make sure that null and NaN values aren\'t set (#7116)\r\n\t\t\tif ( value == null || value !== value ) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ If a number, add \'px\' to the (except for certain CSS properties)\r\n\t\t\tif ( type === \"number\" && !jQuery.cssNumber[ origName ] ) {\r\n\t\t\t\tvalue += \"px\";\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Support: IE9-11+\r\n\t\t\t\/\/ background-* props affect original clone\'s values\r\n\t\t\tif ( !support.clearCloneStyle && value === \"\" && name.indexOf( \"background\" ) === 0 ) {\r\n\t\t\t\tstyle[ name ] = \"inherit\";\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ If a hook was provided, use that value, otherwise just set the specified value\r\n\t\t\tif ( !hooks || !(\"set\" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {\r\n\t\t\t\tstyle[ name ] = value;\r\n\t\t\t}\r\n\r\n\t\t} else {\r\n\t\t\t\/\/ If a hook was provided get the non-computed value from there\r\n\t\t\tif ( hooks && \"get\" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {\r\n\t\t\t\treturn ret;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Otherwise just get the value from the style object\r\n\t\t\treturn style[ name ];\r\n\t\t}\r\n\t},\r\n\r\n\tcss: function( elem, name, extra, styles ) {\r\n\t\tvar val, num, hooks,\r\n\t\t\torigName = jQuery.camelCase( name );\r\n\r\n\t\t\/\/ Make sure that we\'re working with the right name\r\n\t\tname = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );\r\n\r\n\t\t\/\/ Try prefixed name followed by the unprefixed name\r\n\t\thooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\r\n\r\n\t\t\/\/ If a hook was provided get the computed value from there\r\n\t\tif ( hooks && \"get\" in hooks ) {\r\n\t\t\tval = hooks.get( elem, true, extra );\r\n\t\t}\r\n\r\n\t\t\/\/ Otherwise, if a way to get the computed value exists, use that\r\n\t\tif ( val === undefined ) {\r\n\t\t\tval = curCSS( elem, name, styles );\r\n\t\t}\r\n\r\n\t\t\/\/ Convert \"normal\" to computed value\r\n\t\tif ( val === \"normal\" && name in cssNormalTransform ) {\r\n\t\t\tval = cssNormalTransform[ name ];\r\n\t\t}\r\n\r\n\t\t\/\/ Make numeric if forced or a qualifier was provided and val looks numeric\r\n\t\tif ( extra === \"\" || extra ) {\r\n\t\t\tnum = parseFloat( val );\r\n\t\t\treturn extra === true || jQuery.isNumeric( num ) ? num || 0 : val;\r\n\t\t}\r\n\t\treturn val;\r\n\t}\r\n});\r\n\r\njQuery.each([ \"height\", \"width\" ], function( i, name ) {\r\n\tjQuery.cssHooks[ name ] = {\r\n\t\tget: function( elem, computed, extra ) {\r\n\t\t\tif ( computed ) {\r\n\r\n\t\t\t\t\/\/ Certain elements can have dimension info if we invisibly show them\r\n\t\t\t\t\/\/ but it must have a current display style that would benefit\r\n\t\t\t\treturn rdisplayswap.test( jQuery.css( elem, \"display\" ) ) && elem.offsetWidth === 0 ?\r\n\t\t\t\t\tjQuery.swap( elem, cssShow, function() {\r\n\t\t\t\t\t\treturn getWidthOrHeight( elem, name, extra );\r\n\t\t\t\t\t}) :\r\n\t\t\t\t\tgetWidthOrHeight( elem, name, extra );\r\n\t\t\t}\r\n\t\t},\r\n\r\n\t\tset: function( elem, value, extra ) {\r\n\t\t\tvar styles = extra && getStyles( elem );\r\n\t\t\treturn setPositiveNumber( elem, value, extra ?\r\n\t\t\t\taugmentWidthOrHeight(\r\n\t\t\t\t\telem,\r\n\t\t\t\t\tname,\r\n\t\t\t\t\textra,\r\n\t\t\t\t\tjQuery.css( elem, \"boxSizing\", false, styles ) === \"border-box\",\r\n\t\t\t\t\tstyles\r\n\t\t\t\t) : 0\r\n\t\t\t);\r\n\t\t}\r\n\t};\r\n});\r\n\r\n\/\/ Support: Android 2.3\r\njQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,\r\n\tfunction( elem, computed ) {\r\n\t\tif ( computed ) {\r\n\t\t\treturn jQuery.swap( elem, { \"display\": \"inline-block\" },\r\n\t\t\t\tcurCSS, [ elem, \"marginRight\" ] );\r\n\t\t}\r\n\t}\r\n);\r\n\r\n\/\/ These hooks are used by animate to expand properties\r\njQuery.each({\r\n\tmargin: \"\",\r\n\tpadding: \"\",\r\n\tborder: \"Width\"\r\n}, function( prefix, suffix ) {\r\n\tjQuery.cssHooks[ prefix + suffix ] = {\r\n\t\texpand: function( value ) {\r\n\t\t\tvar i = 0,\r\n\t\t\t\texpanded = {},\r\n\r\n\t\t\t\t\/\/ Assumes a single number if not a string\r\n\t\t\t\tparts = typeof value === \"string\" ? value.split(\" \") : [ value ];\r\n\r\n\t\t\tfor ( ; i < 4; i++ ) {\r\n\t\t\t\texpanded[ prefix + cssExpand[ i ] + suffix ] =\r\n\t\t\t\t\tparts[ i ] || parts[ i - 2 ] || parts[ 0 ];\r\n\t\t\t}\r\n\r\n\t\t\treturn expanded;\r\n\t\t}\r\n\t};\r\n\r\n\tif ( !rmargin.test( prefix ) ) {\r\n\t\tjQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;\r\n\t}\r\n});\r\n\r\njQuery.fn.extend({\r\n\tcss: function( name, value ) {\r\n\t\treturn access( this, function( elem, name, value ) {\r\n\t\t\tvar styles, len,\r\n\t\t\t\tmap = {},\r\n\t\t\t\ti = 0;\r\n\r\n\t\t\tif ( jQuery.isArray( name ) ) {\r\n\t\t\t\tstyles = getStyles( elem );\r\n\t\t\t\tlen = name.length;\r\n\r\n\t\t\t\tfor ( ; i < len; i++ ) {\r\n\t\t\t\t\tmap[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn map;\r\n\t\t\t}\r\n\r\n\t\t\treturn value !== undefined ?\r\n\t\t\t\tjQuery.style( elem, name, value ) :\r\n\t\t\t\tjQuery.css( elem, name );\r\n\t\t}, name, value, arguments.length > 1 );\r\n\t},\r\n\tshow: function() {\r\n\t\treturn showHide( this, true );\r\n\t},\r\n\thide: function() {\r\n\t\treturn showHide( this );\r\n\t},\r\n\ttoggle: function( state ) {\r\n\t\tif ( typeof state === \"boolean\" ) {\r\n\t\t\treturn state ? this.show() : this.hide();\r\n\t\t}\r\n\r\n\t\treturn this.each(function() {\r\n\t\t\tif ( isHidden( this ) ) {\r\n\t\t\t\tjQuery( this ).show();\r\n\t\t\t} else {\r\n\t\t\t\tjQuery( this ).hide();\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n});\r\n\r\n\r\nfunction Tween( elem, options, prop, end, easing ) {\r\n\treturn new Tween.prototype.init( elem, options, prop, end, easing );\r\n}\r\njQuery.Tween = Tween;\r\n\r\nTween.prototype = {\r\n\tconstructor: Tween,\r\n\tinit: function( elem, options, prop, end, easing, unit ) {\r\n\t\tthis.elem = elem;\r\n\t\tthis.prop = prop;\r\n\t\tthis.easing = easing || \"swing\";\r\n\t\tthis.options = options;\r\n\t\tthis.start = this.now = this.cur();\r\n\t\tthis.end = end;\r\n\t\tthis.unit = unit || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" );\r\n\t},\r\n\tcur: function() {\r\n\t\tvar hooks = Tween.propHooks[ this.prop ];\r\n\r\n\t\treturn hooks && hooks.get ?\r\n\t\t\thooks.get( this ) :\r\n\t\t\tTween.propHooks._default.get( this );\r\n\t},\r\n\trun: function( percent ) {\r\n\t\tvar eased,\r\n\t\t\thooks = Tween.propHooks[ this.prop ];\r\n\r\n\t\tif ( this.options.duration ) {\r\n\t\t\tthis.pos = eased = jQuery.easing[ this.easing ](\r\n\t\t\t\tpercent, this.options.duration * percent, 0, 1, this.options.duration\r\n\t\t\t);\r\n\t\t} else {\r\n\t\t\tthis.pos = eased = percent;\r\n\t\t}\r\n\t\tthis.now = ( this.end - this.start ) * eased + this.start;\r\n\r\n\t\tif ( this.options.step ) {\r\n\t\t\tthis.options.step.call( this.elem, this.now, this );\r\n\t\t}\r\n\r\n\t\tif ( hooks && hooks.set ) {\r\n\t\t\thooks.set( this );\r\n\t\t} else {\r\n\t\t\tTween.propHooks._default.set( this );\r\n\t\t}\r\n\t\treturn this;\r\n\t}\r\n};\r\n\r\nTween.prototype.init.prototype = Tween.prototype;\r\n\r\nTween.propHooks = {\r\n\t_default: {\r\n\t\tget: function( tween ) {\r\n\t\t\tvar result;\r\n\r\n\t\t\tif ( tween.elem[ tween.prop ] != null &&\r\n\t\t\t\t(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {\r\n\t\t\t\treturn tween.elem[ tween.prop ];\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Passing an empty string as a 3rd parameter to .css will automatically\r\n\t\t\t\/\/ attempt a parseFloat and fallback to a string if the parse fails.\r\n\t\t\t\/\/ Simple values such as \"10px\" are parsed to Float;\r\n\t\t\t\/\/ complex values such as \"rotate(1rad)\" are returned as-is.\r\n\t\t\tresult = jQuery.css( tween.elem, tween.prop, \"\" );\r\n\t\t\t\/\/ Empty strings, null, undefined and \"auto\" are converted to 0.\r\n\t\t\treturn !result || result === \"auto\" ? 0 : result;\r\n\t\t},\r\n\t\tset: function( tween ) {\r\n\t\t\t\/\/ Use step hook for back compat.\r\n\t\t\t\/\/ Use cssHook if its there.\r\n\t\t\t\/\/ Use .style if available and use plain properties where available.\r\n\t\t\tif ( jQuery.fx.step[ tween.prop ] ) {\r\n\t\t\t\tjQuery.fx.step[ tween.prop ]( tween );\r\n\t\t\t} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {\r\n\t\t\t\tjQuery.style( tween.elem, tween.prop, tween.now + tween.unit );\r\n\t\t\t} else {\r\n\t\t\t\ttween.elem[ tween.prop ] = tween.now;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n};\r\n\r\n\/\/ Support: IE9\r\n\/\/ Panic based approach to setting things on disconnected nodes\r\nTween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {\r\n\tset: function( tween ) {\r\n\t\tif ( tween.elem.nodeType && tween.elem.parentNode ) {\r\n\t\t\ttween.elem[ tween.prop ] = tween.now;\r\n\t\t}\r\n\t}\r\n};\r\n\r\njQuery.easing = {\r\n\tlinear: function( p ) {\r\n\t\treturn p;\r\n\t},\r\n\tswing: function( p ) {\r\n\t\treturn 0.5 - Math.cos( p * Math.PI ) \/ 2;\r\n\t}\r\n};\r\n\r\njQuery.fx = Tween.prototype.init;\r\n\r\n\/\/ Back Compat <1.8 extension point\r\njQuery.fx.step = {};\r\n\r\n\r\n\r\n\r\nvar\r\n\tfxNow, timerId,\r\n\trfxtypes = \/^(?:toggle|show|hide)$\/,\r\n\trfxnum = new RegExp( \"^(?:([+-])=|)(\" + pnum + \")([a-z%]*)$\", \"i\" ),\r\n\trrun = \/queueHooks$\/,\r\n\tanimationPrefilters = [ defaultPrefilter ],\r\n\ttweeners = {\r\n\t\t\"*\": [ function( prop, value ) {\r\n\t\t\tvar tween = this.createTween( prop, value ),\r\n\t\t\t\ttarget = tween.cur(),\r\n\t\t\t\tparts = rfxnum.exec( value ),\r\n\t\t\t\tunit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? \"\" : \"px\" ),\r\n\r\n\t\t\t\t\/\/ Starting value computation is required for potential unit mismatches\r\n\t\t\t\tstart = ( jQuery.cssNumber[ prop ] || unit !== \"px\" && +target ) &&\r\n\t\t\t\t\trfxnum.exec( jQuery.css( tween.elem, prop ) ),\r\n\t\t\t\tscale = 1,\r\n\t\t\t\tmaxIterations = 20;\r\n\r\n\t\t\tif ( start && start[ 3 ] !== unit ) {\r\n\t\t\t\t\/\/ Trust units reported by jQuery.css\r\n\t\t\t\tunit = unit || start[ 3 ];\r\n\r\n\t\t\t\t\/\/ Make sure we update the tween properties later on\r\n\t\t\t\tparts = parts || [];\r\n\r\n\t\t\t\t\/\/ Iteratively approximate from a nonzero starting point\r\n\t\t\t\tstart = +target || 1;\r\n\r\n\t\t\t\tdo {\r\n\t\t\t\t\t\/\/ If previous iteration zeroed out, double until we get *something*.\r\n\t\t\t\t\t\/\/ Use string for doubling so we don\'t accidentally see scale as unchanged below\r\n\t\t\t\t\tscale = scale || \".5\";\r\n\r\n\t\t\t\t\t\/\/ Adjust and apply\r\n\t\t\t\t\tstart = start \/ scale;\r\n\t\t\t\t\tjQuery.style( tween.elem, prop, start + unit );\r\n\r\n\t\t\t\t\/\/ Update scale, tolerating zero or NaN from tween.cur(),\r\n\t\t\t\t\/\/ break the loop if scale is unchanged or perfect, or if we\'ve just had enough\r\n\t\t\t\t} while ( scale !== (scale = tween.cur() \/ target) && scale !== 1 && --maxIterations );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Update tween properties\r\n\t\t\tif ( parts ) {\r\n\t\t\t\tstart = tween.start = +start || +target || 0;\r\n\t\t\t\ttween.unit = unit;\r\n\t\t\t\t\/\/ If a +=\/-= token was provided, we\'re doing a relative animation\r\n\t\t\t\ttween.end = parts[ 1 ] ?\r\n\t\t\t\t\tstart + ( parts[ 1 ] + 1 ) * parts[ 2 ] :\r\n\t\t\t\t\t+parts[ 2 ];\r\n\t\t\t}\r\n\r\n\t\t\treturn tween;\r\n\t\t} ]\r\n\t};\r\n\r\n\/\/ Animations created synchronously will run synchronously\r\nfunction createFxNow() {\r\n\tsetTimeout(function() {\r\n\t\tfxNow = undefined;\r\n\t});\r\n\treturn ( fxNow = jQuery.now() );\r\n}\r\n\r\n\/\/ Generate parameters to create a standard animation\r\nfunction genFx( type, includeWidth ) {\r\n\tvar which,\r\n\t\ti = 0,\r\n\t\tattrs = { height: type };\r\n\r\n\t\/\/ If we include width, step value is 1 to do all cssExpand values,\r\n\t\/\/ otherwise step value is 2 to skip over Left and Right\r\n\tincludeWidth = includeWidth ? 1 : 0;\r\n\tfor ( ; i < 4 ; i += 2 - includeWidth ) {\r\n\t\twhich = cssExpand[ i ];\r\n\t\tattrs[ \"margin\" + which ] = attrs[ \"padding\" + which ] = type;\r\n\t}\r\n\r\n\tif ( includeWidth ) {\r\n\t\tattrs.opacity = attrs.width = type;\r\n\t}\r\n\r\n\treturn attrs;\r\n}\r\n\r\nfunction createTween( value, prop, animation ) {\r\n\tvar tween,\r\n\t\tcollection = ( tweeners[ prop ] || [] ).concat( tweeners[ \"*\" ] ),\r\n\t\tindex = 0,\r\n\t\tlength = collection.length;\r\n\tfor ( ; index < length; index++ ) {\r\n\t\tif ( (tween = collection[ index ].call( animation, prop, value )) ) {\r\n\r\n\t\t\t\/\/ We\'re done with this property\r\n\t\t\treturn tween;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction defaultPrefilter( elem, props, opts ) {\r\n\t\/* jshint validthis: true *\/\r\n\tvar prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,\r\n\t\tanim = this,\r\n\t\torig = {},\r\n\t\tstyle = elem.style,\r\n\t\thidden = elem.nodeType && isHidden( elem ),\r\n\t\tdataShow = data_priv.get( elem, \"fxshow\" );\r\n\r\n\t\/\/ Handle queue: false promises\r\n\tif ( !opts.queue ) {\r\n\t\thooks = jQuery._queueHooks( elem, \"fx\" );\r\n\t\tif ( hooks.unqueued == null ) {\r\n\t\t\thooks.unqueued = 0;\r\n\t\t\toldfire = hooks.empty.fire;\r\n\t\t\thooks.empty.fire = function() {\r\n\t\t\t\tif ( !hooks.unqueued ) {\r\n\t\t\t\t\toldfire();\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t}\r\n\t\thooks.unqueued++;\r\n\r\n\t\tanim.always(function() {\r\n\t\t\t\/\/ Ensure the complete handler is called before this completes\r\n\t\t\tanim.always(function() {\r\n\t\t\t\thooks.unqueued--;\r\n\t\t\t\tif ( !jQuery.queue( elem, \"fx\" ).length ) {\r\n\t\t\t\t\thooks.empty.fire();\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\t\/\/ Height\/width overflow pass\r\n\tif ( elem.nodeType === 1 && ( \"height\" in props || \"width\" in props ) ) {\r\n\t\t\/\/ Make sure that nothing sneaks out\r\n\t\t\/\/ Record all 3 overflow attributes because IE9-10 do not\r\n\t\t\/\/ change the overflow attribute when overflowX and\r\n\t\t\/\/ overflowY are set to the same value\r\n\t\topts.overflow = [ style.overflow, style.overflowX, style.overflowY ];\r\n\r\n\t\t\/\/ Set display property to inline-block for height\/width\r\n\t\t\/\/ animations on inline elements that are having width\/height animated\r\n\t\tdisplay = jQuery.css( elem, \"display\" );\r\n\r\n\t\t\/\/ Test default display if display is currently \"none\"\r\n\t\tcheckDisplay = display === \"none\" ?\r\n\t\t\tdata_priv.get( elem, \"olddisplay\" ) || defaultDisplay( elem.nodeName ) : display;\r\n\r\n\t\tif ( checkDisplay === \"inline\" && jQuery.css( elem, \"float\" ) === \"none\" ) {\r\n\t\t\tstyle.display = \"inline-block\";\r\n\t\t}\r\n\t}\r\n\r\n\tif ( opts.overflow ) {\r\n\t\tstyle.overflow = \"hidden\";\r\n\t\tanim.always(function() {\r\n\t\t\tstyle.overflow = opts.overflow[ 0 ];\r\n\t\t\tstyle.overflowX = opts.overflow[ 1 ];\r\n\t\t\tstyle.overflowY = opts.overflow[ 2 ];\r\n\t\t});\r\n\t}\r\n\r\n\t\/\/ show\/hide pass\r\n\tfor ( prop in props ) {\r\n\t\tvalue = props[ prop ];\r\n\t\tif ( rfxtypes.exec( value ) ) {\r\n\t\t\tdelete props[ prop ];\r\n\t\t\ttoggle = toggle || value === \"toggle\";\r\n\t\t\tif ( value === ( hidden ? \"hide\" : \"show\" ) ) {\r\n\r\n\t\t\t\t\/\/ If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden\r\n\t\t\t\tif ( value === \"show\" && dataShow && dataShow[ prop ] !== undefined ) {\r\n\t\t\t\t\thidden = true;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tcontinue;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\torig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );\r\n\r\n\t\t\/\/ Any non-fx value stops us from restoring the original display value\r\n\t\t} else {\r\n\t\t\tdisplay = undefined;\r\n\t\t}\r\n\t}\r\n\r\n\tif ( !jQuery.isEmptyObject( orig ) ) {\r\n\t\tif ( dataShow ) {\r\n\t\t\tif ( \"hidden\" in dataShow ) {\r\n\t\t\t\thidden = dataShow.hidden;\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tdataShow = data_priv.access( elem, \"fxshow\", {} );\r\n\t\t}\r\n\r\n\t\t\/\/ Store state if its toggle - enables .stop().toggle() to \"reverse\"\r\n\t\tif ( toggle ) {\r\n\t\t\tdataShow.hidden = !hidden;\r\n\t\t}\r\n\t\tif ( hidden ) {\r\n\t\t\tjQuery( elem ).show();\r\n\t\t} else {\r\n\t\t\tanim.done(function() {\r\n\t\t\t\tjQuery( elem ).hide();\r\n\t\t\t});\r\n\t\t}\r\n\t\tanim.done(function() {\r\n\t\t\tvar prop;\r\n\r\n\t\t\tdata_priv.remove( elem, \"fxshow\" );\r\n\t\t\tfor ( prop in orig ) {\r\n\t\t\t\tjQuery.style( elem, prop, orig[ prop ] );\r\n\t\t\t}\r\n\t\t});\r\n\t\tfor ( prop in orig ) {\r\n\t\t\ttween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );\r\n\r\n\t\t\tif ( !( prop in dataShow ) ) {\r\n\t\t\t\tdataShow[ prop ] = tween.start;\r\n\t\t\t\tif ( hidden ) {\r\n\t\t\t\t\ttween.end = tween.start;\r\n\t\t\t\t\ttween.start = prop === \"width\" || prop === \"height\" ? 1 : 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\/\/ If this is a noop like .hide().hide(), restore an overwritten display value\r\n\t} else if ( (display === \"none\" ? defaultDisplay( elem.nodeName ) : display) === \"inline\" ) {\r\n\t\tstyle.display = display;\r\n\t}\r\n}\r\n\r\nfunction propFilter( props, specialEasing ) {\r\n\tvar index, name, easing, value, hooks;\r\n\r\n\t\/\/ camelCase, specialEasing and expand cssHook pass\r\n\tfor ( index in props ) {\r\n\t\tname = jQuery.camelCase( index );\r\n\t\teasing = specialEasing[ name ];\r\n\t\tvalue = props[ index ];\r\n\t\tif ( jQuery.isArray( value ) ) {\r\n\t\t\teasing = value[ 1 ];\r\n\t\t\tvalue = props[ index ] = value[ 0 ];\r\n\t\t}\r\n\r\n\t\tif ( index !== name ) {\r\n\t\t\tprops[ name ] = value;\r\n\t\t\tdelete props[ index ];\r\n\t\t}\r\n\r\n\t\thooks = jQuery.cssHooks[ name ];\r\n\t\tif ( hooks && \"expand\" in hooks ) {\r\n\t\t\tvalue = hooks.expand( value );\r\n\t\t\tdelete props[ name ];\r\n\r\n\t\t\t\/\/ Not quite $.extend, this won\'t overwrite existing keys.\r\n\t\t\t\/\/ Reusing \'index\' because we have the correct \"name\"\r\n\t\t\tfor ( index in value ) {\r\n\t\t\t\tif ( !( index in props ) ) {\r\n\t\t\t\t\tprops[ index ] = value[ index ];\r\n\t\t\t\t\tspecialEasing[ index ] = easing;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tspecialEasing[ name ] = easing;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction Animation( elem, properties, options ) {\r\n\tvar result,\r\n\t\tstopped,\r\n\t\tindex = 0,\r\n\t\tlength = animationPrefilters.length,\r\n\t\tdeferred = jQuery.Deferred().always( function() {\r\n\t\t\t\/\/ Don\'t match elem in the :animated selector\r\n\t\t\tdelete tick.elem;\r\n\t\t}),\r\n\t\ttick = function() {\r\n\t\t\tif ( stopped ) {\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t\tvar currentTime = fxNow || createFxNow(),\r\n\t\t\t\tremaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),\r\n\t\t\t\t\/\/ Support: Android 2.3\r\n\t\t\t\t\/\/ Archaic crash bug won\'t allow us to use `1 - ( 0.5 || 0 )` (#12497)\r\n\t\t\t\ttemp = remaining \/ animation.duration || 0,\r\n\t\t\t\tpercent = 1 - temp,\r\n\t\t\t\tindex = 0,\r\n\t\t\t\tlength = animation.tweens.length;\r\n\r\n\t\t\tfor ( ; index < length ; index++ ) {\r\n\t\t\t\tanimation.tweens[ index ].run( percent );\r\n\t\t\t}\r\n\r\n\t\t\tdeferred.notifyWith( elem, [ animation, percent, remaining ]);\r\n\r\n\t\t\tif ( percent < 1 && length ) {\r\n\t\t\t\treturn remaining;\r\n\t\t\t} else {\r\n\t\t\t\tdeferred.resolveWith( elem, [ animation ] );\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t},\r\n\t\tanimation = deferred.promise({\r\n\t\t\telem: elem,\r\n\t\t\tprops: jQuery.extend( {}, properties ),\r\n\t\t\topts: jQuery.extend( true, { specialEasing: {} }, options ),\r\n\t\t\toriginalProperties: properties,\r\n\t\t\toriginalOptions: options,\r\n\t\t\tstartTime: fxNow || createFxNow(),\r\n\t\t\tduration: options.duration,\r\n\t\t\ttweens: [],\r\n\t\t\tcreateTween: function( prop, end ) {\r\n\t\t\t\tvar tween = jQuery.Tween( elem, animation.opts, prop, end,\r\n\t\t\t\t\t\tanimation.opts.specialEasing[ prop ] || animation.opts.easing );\r\n\t\t\t\tanimation.tweens.push( tween );\r\n\t\t\t\treturn tween;\r\n\t\t\t},\r\n\t\t\tstop: function( gotoEnd ) {\r\n\t\t\t\tvar index = 0,\r\n\t\t\t\t\t\/\/ If we are going to the end, we want to run all the tweens\r\n\t\t\t\t\t\/\/ otherwise we skip this part\r\n\t\t\t\t\tlength = gotoEnd ? animation.tweens.length : 0;\r\n\t\t\t\tif ( stopped ) {\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t}\r\n\t\t\t\tstopped = true;\r\n\t\t\t\tfor ( ; index < length ; index++ ) {\r\n\t\t\t\t\tanimation.tweens[ index ].run( 1 );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Resolve when we played the last frame; otherwise, reject\r\n\t\t\t\tif ( gotoEnd ) {\r\n\t\t\t\t\tdeferred.resolveWith( elem, [ animation, gotoEnd ] );\r\n\t\t\t\t} else {\r\n\t\t\t\t\tdeferred.rejectWith( elem, [ animation, gotoEnd ] );\r\n\t\t\t\t}\r\n\t\t\t\treturn this;\r\n\t\t\t}\r\n\t\t}),\r\n\t\tprops = animation.props;\r\n\r\n\tpropFilter( props, animation.opts.specialEasing );\r\n\r\n\tfor ( ; index < length ; index++ ) {\r\n\t\tresult = animationPrefilters[ index ].call( animation, elem, props, animation.opts );\r\n\t\tif ( result ) {\r\n\t\t\treturn result;\r\n\t\t}\r\n\t}\r\n\r\n\tjQuery.map( props, createTween, animation );\r\n\r\n\tif ( jQuery.isFunction( animation.opts.start ) ) {\r\n\t\tanimation.opts.start.call( elem, animation );\r\n\t}\r\n\r\n\tjQuery.fx.timer(\r\n\t\tjQuery.extend( tick, {\r\n\t\t\telem: elem,\r\n\t\t\tanim: animation,\r\n\t\t\tqueue: animation.opts.queue\r\n\t\t})\r\n\t);\r\n\r\n\t\/\/ attach callbacks from options\r\n\treturn animation.progress( animation.opts.progress )\r\n\t\t.done( animation.opts.done, animation.opts.complete )\r\n\t\t.fail( animation.opts.fail )\r\n\t\t.always( animation.opts.always );\r\n}\r\n\r\njQuery.Animation = jQuery.extend( Animation, {\r\n\r\n\ttweener: function( props, callback ) {\r\n\t\tif ( jQuery.isFunction( props ) ) {\r\n\t\t\tcallback = props;\r\n\t\t\tprops = [ \"*\" ];\r\n\t\t} else {\r\n\t\t\tprops = props.split(\" \");\r\n\t\t}\r\n\r\n\t\tvar prop,\r\n\t\t\tindex = 0,\r\n\t\t\tlength = props.length;\r\n\r\n\t\tfor ( ; index < length ; index++ ) {\r\n\t\t\tprop = props[ index ];\r\n\t\t\ttweeners[ prop ] = tweeners[ prop ] || [];\r\n\t\t\ttweeners[ prop ].unshift( callback );\r\n\t\t}\r\n\t},\r\n\r\n\tprefilter: function( callback, prepend ) {\r\n\t\tif ( prepend ) {\r\n\t\t\tanimationPrefilters.unshift( callback );\r\n\t\t} else {\r\n\t\t\tanimationPrefilters.push( callback );\r\n\t\t}\r\n\t}\r\n});\r\n\r\njQuery.speed = function( speed, easing, fn ) {\r\n\tvar opt = speed && typeof speed === \"object\" ? jQuery.extend( {}, speed ) : {\r\n\t\tcomplete: fn || !fn && easing ||\r\n\t\t\tjQuery.isFunction( speed ) && speed,\r\n\t\tduration: speed,\r\n\t\teasing: fn && easing || easing && !jQuery.isFunction( easing ) && easing\r\n\t};\r\n\r\n\topt.duration = jQuery.fx.off ? 0 : typeof opt.duration === \"number\" ? opt.duration :\r\n\t\topt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;\r\n\r\n\t\/\/ Normalize opt.queue - true\/undefined\/null -> \"fx\"\r\n\tif ( opt.queue == null || opt.queue === true ) {\r\n\t\topt.queue = \"fx\";\r\n\t}\r\n\r\n\t\/\/ Queueing\r\n\topt.old = opt.complete;\r\n\r\n\topt.complete = function() {\r\n\t\tif ( jQuery.isFunction( opt.old ) ) {\r\n\t\t\topt.old.call( this );\r\n\t\t}\r\n\r\n\t\tif ( opt.queue ) {\r\n\t\t\tjQuery.dequeue( this, opt.queue );\r\n\t\t}\r\n\t};\r\n\r\n\treturn opt;\r\n};\r\n\r\njQuery.fn.extend({\r\n\tfadeTo: function( speed, to, easing, callback ) {\r\n\r\n\t\t\/\/ Show any hidden elements after setting opacity to 0\r\n\t\treturn this.filter( isHidden ).css( \"opacity\", 0 ).show()\r\n\r\n\t\t\t\/\/ Animate to the value specified\r\n\t\t\t.end().animate({ opacity: to }, speed, easing, callback );\r\n\t},\r\n\tanimate: function( prop, speed, easing, callback ) {\r\n\t\tvar empty = jQuery.isEmptyObject( prop ),\r\n\t\t\toptall = jQuery.speed( speed, easing, callback ),\r\n\t\t\tdoAnimation = function() {\r\n\t\t\t\t\/\/ Operate on a copy of prop so per-property easing won\'t be lost\r\n\t\t\t\tvar anim = Animation( this, jQuery.extend( {}, prop ), optall );\r\n\r\n\t\t\t\t\/\/ Empty animations, or finishing resolves immediately\r\n\t\t\t\tif ( empty || data_priv.get( this, \"finish\" ) ) {\r\n\t\t\t\t\tanim.stop( true );\r\n\t\t\t\t}\r\n\t\t\t};\r\n\t\t\tdoAnimation.finish = doAnimation;\r\n\r\n\t\treturn empty || optall.queue === false ?\r\n\t\t\tthis.each( doAnimation ) :\r\n\t\t\tthis.queue( optall.queue, doAnimation );\r\n\t},\r\n\tstop: function( type, clearQueue, gotoEnd ) {\r\n\t\tvar stopQueue = function( hooks ) {\r\n\t\t\tvar stop = hooks.stop;\r\n\t\t\tdelete hooks.stop;\r\n\t\t\tstop( gotoEnd );\r\n\t\t};\r\n\r\n\t\tif ( typeof type !== \"string\" ) {\r\n\t\t\tgotoEnd = clearQueue;\r\n\t\t\tclearQueue = type;\r\n\t\t\ttype = undefined;\r\n\t\t}\r\n\t\tif ( clearQueue && type !== false ) {\r\n\t\t\tthis.queue( type || \"fx\", [] );\r\n\t\t}\r\n\r\n\t\treturn this.each(function() {\r\n\t\t\tvar dequeue = true,\r\n\t\t\t\tindex = type != null && type + \"queueHooks\",\r\n\t\t\t\ttimers = jQuery.timers,\r\n\t\t\t\tdata = data_priv.get( this );\r\n\r\n\t\t\tif ( index ) {\r\n\t\t\t\tif ( data[ index ] && data[ index ].stop ) {\r\n\t\t\t\t\tstopQueue( data[ index ] );\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor ( index in data ) {\r\n\t\t\t\t\tif ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {\r\n\t\t\t\t\t\tstopQueue( data[ index ] );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tfor ( index = timers.length; index--; ) {\r\n\t\t\t\tif ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {\r\n\t\t\t\t\ttimers[ index ].anim.stop( gotoEnd );\r\n\t\t\t\t\tdequeue = false;\r\n\t\t\t\t\ttimers.splice( index, 1 );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Start the next in the queue if the last step wasn\'t forced.\r\n\t\t\t\/\/ Timers currently will call their complete callbacks, which\r\n\t\t\t\/\/ will dequeue but only if they were gotoEnd.\r\n\t\t\tif ( dequeue || !gotoEnd ) {\r\n\t\t\t\tjQuery.dequeue( this, type );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\tfinish: function( type ) {\r\n\t\tif ( type !== false ) {\r\n\t\t\ttype = type || \"fx\";\r\n\t\t}\r\n\t\treturn this.each(function() {\r\n\t\t\tvar index,\r\n\t\t\t\tdata = data_priv.get( this ),\r\n\t\t\t\tqueue = data[ type + \"queue\" ],\r\n\t\t\t\thooks = data[ type + \"queueHooks\" ],\r\n\t\t\t\ttimers = jQuery.timers,\r\n\t\t\t\tlength = queue ? queue.length : 0;\r\n\r\n\t\t\t\/\/ Enable finishing flag on private data\r\n\t\t\tdata.finish = true;\r\n\r\n\t\t\t\/\/ Empty the queue first\r\n\t\t\tjQuery.queue( this, type, [] );\r\n\r\n\t\t\tif ( hooks && hooks.stop ) {\r\n\t\t\t\thooks.stop.call( this, true );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Look for any active animations, and finish them\r\n\t\t\tfor ( index = timers.length; index--; ) {\r\n\t\t\t\tif ( timers[ index ].elem === this && timers[ index ].queue === type ) {\r\n\t\t\t\t\ttimers[ index ].anim.stop( true );\r\n\t\t\t\t\ttimers.splice( index, 1 );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Look for any animations in the old queue and finish them\r\n\t\t\tfor ( index = 0; index < length; index++ ) {\r\n\t\t\t\tif ( queue[ index ] && queue[ index ].finish ) {\r\n\t\t\t\t\tqueue[ index ].finish.call( this );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Turn off finishing flag\r\n\t\t\tdelete data.finish;\r\n\t\t});\r\n\t}\r\n});\r\n\r\njQuery.each([ \"toggle\", \"show\", \"hide\" ], function( i, name ) {\r\n\tvar cssFn = jQuery.fn[ name ];\r\n\tjQuery.fn[ name ] = function( speed, easing, callback ) {\r\n\t\treturn speed == null || typeof speed === \"boolean\" ?\r\n\t\t\tcssFn.apply( this, arguments ) :\r\n\t\t\tthis.animate( genFx( name, true ), speed, easing, callback );\r\n\t};\r\n});\r\n\r\n\/\/ Generate shortcuts for custom animations\r\njQuery.each({\r\n\tslideDown: genFx(\"show\"),\r\n\tslideUp: genFx(\"hide\"),\r\n\tslideToggle: genFx(\"toggle\"),\r\n\tfadeIn: { opacity: \"show\" },\r\n\tfadeOut: { opacity: \"hide\" },\r\n\tfadeToggle: { opacity: \"toggle\" }\r\n}, function( name, props ) {\r\n\tjQuery.fn[ name ] = function( speed, easing, callback ) {\r\n\t\treturn this.animate( props, speed, easing, callback );\r\n\t};\r\n});\r\n\r\njQuery.timers = [];\r\njQuery.fx.tick = function() {\r\n\tvar timer,\r\n\t\ti = 0,\r\n\t\ttimers = jQuery.timers;\r\n\r\n\tfxNow = jQuery.now();\r\n\r\n\tfor ( ; i < timers.length; i++ ) {\r\n\t\ttimer = timers[ i ];\r\n\t\t\/\/ Checks the timer has not already been removed\r\n\t\tif ( !timer() && timers[ i ] === timer ) {\r\n\t\t\ttimers.splice( i--, 1 );\r\n\t\t}\r\n\t}\r\n\r\n\tif ( !timers.length ) {\r\n\t\tjQuery.fx.stop();\r\n\t}\r\n\tfxNow = undefined;\r\n};\r\n\r\njQuery.fx.timer = function( timer ) {\r\n\tjQuery.timers.push( timer );\r\n\tif ( timer() ) {\r\n\t\tjQuery.fx.start();\r\n\t} else {\r\n\t\tjQuery.timers.pop();\r\n\t}\r\n};\r\n\r\njQuery.fx.interval = 13;\r\n\r\njQuery.fx.start = function() {\r\n\tif ( !timerId ) {\r\n\t\ttimerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );\r\n\t}\r\n};\r\n\r\njQuery.fx.stop = function() {\r\n\tclearInterval( timerId );\r\n\ttimerId = null;\r\n};\r\n\r\njQuery.fx.speeds = {\r\n\tslow: 600,\r\n\tfast: 200,\r\n\t\/\/ Default speed\r\n\t_default: 400\r\n};\r\n\r\n\r\n\/\/ Based off of the plugin by Clint Helfers, with permission.\r\n\/\/ http:\/\/blindsignals.com\/index.php\/2009\/07\/jquery-delay\/\r\njQuery.fn.delay = function( time, type ) {\r\n\ttime = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;\r\n\ttype = type || \"fx\";\r\n\r\n\treturn this.queue( type, function( next, hooks ) {\r\n\t\tvar timeout = setTimeout( next, time );\r\n\t\thooks.stop = function() {\r\n\t\t\tclearTimeout( timeout );\r\n\t\t};\r\n\t});\r\n};\r\n\r\n\r\n(function() {\r\n\tvar input = document.createElement( \"input\" ),\r\n\t\tselect = document.createElement( \"select\" ),\r\n\t\topt = select.appendChild( document.createElement( \"option\" ) );\r\n\r\n\tinput.type = \"checkbox\";\r\n\r\n\t\/\/ Support: iOS<=5.1, Android<=4.2+\r\n\t\/\/ Default value for a checkbox should be \"on\"\r\n\tsupport.checkOn = input.value !== \"\";\r\n\r\n\t\/\/ Support: IE<=11+\r\n\t\/\/ Must access selectedIndex to make default options select\r\n\tsupport.optSelected = opt.selected;\r\n\r\n\t\/\/ Support: Android<=2.3\r\n\t\/\/ Options inside disabled selects are incorrectly marked as disabled\r\n\tselect.disabled = true;\r\n\tsupport.optDisabled = !opt.disabled;\r\n\r\n\t\/\/ Support: IE<=11+\r\n\t\/\/ An input loses its value after becoming a radio\r\n\tinput = document.createElement( \"input\" );\r\n\tinput.value = \"t\";\r\n\tinput.type = \"radio\";\r\n\tsupport.radioValue = input.value === \"t\";\r\n})();\r\n\r\n\r\nvar nodeHook, boolHook,\r\n\tattrHandle = jQuery.expr.attrHandle;\r\n\r\njQuery.fn.extend({\r\n\tattr: function( name, value ) {\r\n\t\treturn access( this, jQuery.attr, name, value, arguments.length > 1 );\r\n\t},\r\n\r\n\tremoveAttr: function( name ) {\r\n\t\treturn this.each(function() {\r\n\t\t\tjQuery.removeAttr( this, name );\r\n\t\t});\r\n\t}\r\n});\r\n\r\njQuery.extend({\r\n\tattr: function( elem, name, value ) {\r\n\t\tvar hooks, ret,\r\n\t\t\tnType = elem.nodeType;\r\n\r\n\t\t\/\/ don\'t get\/set attributes on text, comment and attribute nodes\r\n\t\tif ( !elem || nType === 3 || nType === 8 || nType === 2 ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t\/\/ Fallback to prop when attributes are not supported\r\n\t\tif ( typeof elem.getAttribute === strundefined ) {\r\n\t\t\treturn jQuery.prop( elem, name, value );\r\n\t\t}\r\n\r\n\t\t\/\/ All attributes are lowercase\r\n\t\t\/\/ Grab necessary hook if one is defined\r\n\t\tif ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {\r\n\t\t\tname = name.toLowerCase();\r\n\t\t\thooks = jQuery.attrHooks[ name ] ||\r\n\t\t\t\t( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );\r\n\t\t}\r\n\r\n\t\tif ( value !== undefined ) {\r\n\r\n\t\t\tif ( value === null ) {\r\n\t\t\t\tjQuery.removeAttr( elem, name );\r\n\r\n\t\t\t} else if ( hooks && \"set\" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {\r\n\t\t\t\treturn ret;\r\n\r\n\t\t\t} else {\r\n\t\t\t\telem.setAttribute( name, value + \"\" );\r\n\t\t\t\treturn value;\r\n\t\t\t}\r\n\r\n\t\t} else if ( hooks && \"get\" in hooks && (ret = hooks.get( elem, name )) !== null ) {\r\n\t\t\treturn ret;\r\n\r\n\t\t} else {\r\n\t\t\tret = jQuery.find.attr( elem, name );\r\n\r\n\t\t\t\/\/ Non-existent attributes return null, we normalize to undefined\r\n\t\t\treturn ret == null ?\r\n\t\t\t\tundefined :\r\n\t\t\t\tret;\r\n\t\t}\r\n\t},\r\n\r\n\tremoveAttr: function( elem, value ) {\r\n\t\tvar name, propName,\r\n\t\t\ti = 0,\r\n\t\t\tattrNames = value && value.match( rnotwhite );\r\n\r\n\t\tif ( attrNames && elem.nodeType === 1 ) {\r\n\t\t\twhile ( (name = attrNames[i++]) ) {\r\n\t\t\t\tpropName = jQuery.propFix[ name ] || name;\r\n\r\n\t\t\t\t\/\/ Boolean attributes get special treatment (#10870)\r\n\t\t\t\tif ( jQuery.expr.match.bool.test( name ) ) {\r\n\t\t\t\t\t\/\/ Set corresponding property to false\r\n\t\t\t\t\telem[ propName ] = false;\r\n\t\t\t\t}\r\n\r\n\t\t\t\telem.removeAttribute( name );\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\tattrHooks: {\r\n\t\ttype: {\r\n\t\t\tset: function( elem, value ) {\r\n\t\t\t\tif ( !support.radioValue && value === \"radio\" &&\r\n\t\t\t\t\tjQuery.nodeName( elem, \"input\" ) ) {\r\n\t\t\t\t\tvar val = elem.value;\r\n\t\t\t\t\telem.setAttribute( \"type\", value );\r\n\t\t\t\t\tif ( val ) {\r\n\t\t\t\t\t\telem.value = val;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn value;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\/\/ Hooks for boolean attributes\r\nboolHook = {\r\n\tset: function( elem, value, name ) {\r\n\t\tif ( value === false ) {\r\n\t\t\t\/\/ Remove boolean attributes when set to false\r\n\t\t\tjQuery.removeAttr( elem, name );\r\n\t\t} else {\r\n\t\t\telem.setAttribute( name, name );\r\n\t\t}\r\n\t\treturn name;\r\n\t}\r\n};\r\njQuery.each( jQuery.expr.match.bool.source.match( \/\\w+\/g ), function( i, name ) {\r\n\tvar getter = attrHandle[ name ] || jQuery.find.attr;\r\n\r\n\tattrHandle[ name ] = function( elem, name, isXML ) {\r\n\t\tvar ret, handle;\r\n\t\tif ( !isXML ) {\r\n\t\t\t\/\/ Avoid an infinite loop by temporarily removing this function from the getter\r\n\t\t\thandle = attrHandle[ name ];\r\n\t\t\tattrHandle[ name ] = ret;\r\n\t\t\tret = getter( elem, name, isXML ) != null ?\r\n\t\t\t\tname.toLowerCase() :\r\n\t\t\t\tnull;\r\n\t\t\tattrHandle[ name ] = handle;\r\n\t\t}\r\n\t\treturn ret;\r\n\t};\r\n});\r\n\r\n\r\n\r\n\r\nvar rfocusable = \/^(?:input|select|textarea|button)$\/i;\r\n\r\njQuery.fn.extend({\r\n\tprop: function( name, value ) {\r\n\t\treturn access( this, jQuery.prop, name, value, arguments.length > 1 );\r\n\t},\r\n\r\n\tremoveProp: function( name ) {\r\n\t\treturn this.each(function() {\r\n\t\t\tdelete this[ jQuery.propFix[ name ] || name ];\r\n\t\t});\r\n\t}\r\n});\r\n\r\njQuery.extend({\r\n\tpropFix: {\r\n\t\t\"for\": \"htmlFor\",\r\n\t\t\"class\": \"className\"\r\n\t},\r\n\r\n\tprop: function( elem, name, value ) {\r\n\t\tvar ret, hooks, notxml,\r\n\t\t\tnType = elem.nodeType;\r\n\r\n\t\t\/\/ Don\'t get\/set properties on text, comment and attribute nodes\r\n\t\tif ( !elem || nType === 3 || nType === 8 || nType === 2 ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tnotxml = nType !== 1 || !jQuery.isXMLDoc( elem );\r\n\r\n\t\tif ( notxml ) {\r\n\t\t\t\/\/ Fix name and attach hooks\r\n\t\t\tname = jQuery.propFix[ name ] || name;\r\n\t\t\thooks = jQuery.propHooks[ name ];\r\n\t\t}\r\n\r\n\t\tif ( value !== undefined ) {\r\n\t\t\treturn hooks && \"set\" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?\r\n\t\t\t\tret :\r\n\t\t\t\t( elem[ name ] = value );\r\n\r\n\t\t} else {\r\n\t\t\treturn hooks && \"get\" in hooks && (ret = hooks.get( elem, name )) !== null ?\r\n\t\t\t\tret :\r\n\t\t\t\telem[ name ];\r\n\t\t}\r\n\t},\r\n\r\n\tpropHooks: {\r\n\t\ttabIndex: {\r\n\t\t\tget: function( elem ) {\r\n\t\t\t\treturn elem.hasAttribute( \"tabindex\" ) || rfocusable.test( elem.nodeName ) || elem.href ?\r\n\t\t\t\t\telem.tabIndex :\r\n\t\t\t\t\t-1;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\r\n\r\nif ( !support.optSelected ) {\r\n\tjQuery.propHooks.selected = {\r\n\t\tget: function( elem ) {\r\n\t\t\tvar parent = elem.parentNode;\r\n\t\t\tif ( parent && parent.parentNode ) {\r\n\t\t\t\tparent.parentNode.selectedIndex;\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t}\r\n\t};\r\n}\r\n\r\njQuery.each([\r\n\t\"tabIndex\",\r\n\t\"readOnly\",\r\n\t\"maxLength\",\r\n\t\"cellSpacing\",\r\n\t\"cellPadding\",\r\n\t\"rowSpan\",\r\n\t\"colSpan\",\r\n\t\"useMap\",\r\n\t\"frameBorder\",\r\n\t\"contentEditable\"\r\n], function() {\r\n\tjQuery.propFix[ this.toLowerCase() ] = this;\r\n});\r\n\r\n\r\n\r\n\r\nvar rclass = \/[\\t\\r\\n\\f]\/g;\r\n\r\njQuery.fn.extend({\r\n\taddClass: function( value ) {\r\n\t\tvar classes, elem, cur, clazz, j, finalValue,\r\n\t\t\tproceed = typeof value === \"string\" && value,\r\n\t\t\ti = 0,\r\n\t\t\tlen = this.length;\r\n\r\n\t\tif ( jQuery.isFunction( value ) ) {\r\n\t\t\treturn this.each(function( j ) {\r\n\t\t\t\tjQuery( this ).addClass( value.call( this, j, this.className ) );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif ( proceed ) {\r\n\t\t\t\/\/ The disjunction here is for better compressibility (see removeClass)\r\n\t\t\tclasses = ( value || \"\" ).match( rnotwhite ) || [];\r\n\r\n\t\t\tfor ( ; i < len; i++ ) {\r\n\t\t\t\telem = this[ i ];\r\n\t\t\t\tcur = elem.nodeType === 1 && ( elem.className ?\r\n\t\t\t\t\t( \" \" + elem.className + \" \" ).replace( rclass, \" \" ) :\r\n\t\t\t\t\t\" \"\r\n\t\t\t\t);\r\n\r\n\t\t\t\tif ( cur ) {\r\n\t\t\t\t\tj = 0;\r\n\t\t\t\t\twhile ( (clazz = classes[j++]) ) {\r\n\t\t\t\t\t\tif ( cur.indexOf( \" \" + clazz + \" \" ) < 0 ) {\r\n\t\t\t\t\t\t\tcur += clazz + \" \";\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ only assign if different to avoid unneeded rendering.\r\n\t\t\t\t\tfinalValue = jQuery.trim( cur );\r\n\t\t\t\t\tif ( elem.className !== finalValue ) {\r\n\t\t\t\t\t\telem.className = finalValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tremoveClass: function( value ) {\r\n\t\tvar classes, elem, cur, clazz, j, finalValue,\r\n\t\t\tproceed = arguments.length === 0 || typeof value === \"string\" && value,\r\n\t\t\ti = 0,\r\n\t\t\tlen = this.length;\r\n\r\n\t\tif ( jQuery.isFunction( value ) ) {\r\n\t\t\treturn this.each(function( j ) {\r\n\t\t\t\tjQuery( this ).removeClass( value.call( this, j, this.className ) );\r\n\t\t\t});\r\n\t\t}\r\n\t\tif ( proceed ) {\r\n\t\t\tclasses = ( value || \"\" ).match( rnotwhite ) || [];\r\n\r\n\t\t\tfor ( ; i < len; i++ ) {\r\n\t\t\t\telem = this[ i ];\r\n\t\t\t\t\/\/ This expression is here for better compressibility (see addClass)\r\n\t\t\t\tcur = elem.nodeType === 1 && ( elem.className ?\r\n\t\t\t\t\t( \" \" + elem.className + \" \" ).replace( rclass, \" \" ) :\r\n\t\t\t\t\t\"\"\r\n\t\t\t\t);\r\n\r\n\t\t\t\tif ( cur ) {\r\n\t\t\t\t\tj = 0;\r\n\t\t\t\t\twhile ( (clazz = classes[j++]) ) {\r\n\t\t\t\t\t\t\/\/ Remove *all* instances\r\n\t\t\t\t\t\twhile ( cur.indexOf( \" \" + clazz + \" \" ) >= 0 ) {\r\n\t\t\t\t\t\t\tcur = cur.replace( \" \" + clazz + \" \", \" \" );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\/\/ Only assign if different to avoid unneeded rendering.\r\n\t\t\t\t\tfinalValue = value ? jQuery.trim( cur ) : \"\";\r\n\t\t\t\t\tif ( elem.className !== finalValue ) {\r\n\t\t\t\t\t\telem.className = finalValue;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\ttoggleClass: function( value, stateVal ) {\r\n\t\tvar type = typeof value;\r\n\r\n\t\tif ( typeof stateVal === \"boolean\" && type === \"string\" ) {\r\n\t\t\treturn stateVal ? this.addClass( value ) : this.removeClass( value );\r\n\t\t}\r\n\r\n\t\tif ( jQuery.isFunction( value ) ) {\r\n\t\t\treturn this.each(function( i ) {\r\n\t\t\t\tjQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\treturn this.each(function() {\r\n\t\t\tif ( type === \"string\" ) {\r\n\t\t\t\t\/\/ Toggle individual class names\r\n\t\t\t\tvar className,\r\n\t\t\t\t\ti = 0,\r\n\t\t\t\t\tself = jQuery( this ),\r\n\t\t\t\t\tclassNames = value.match( rnotwhite ) || [];\r\n\r\n\t\t\t\twhile ( (className = classNames[ i++ ]) ) {\r\n\t\t\t\t\t\/\/ Check each className given, space separated list\r\n\t\t\t\t\tif ( self.hasClass( className ) ) {\r\n\t\t\t\t\t\tself.removeClass( className );\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tself.addClass( className );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\/\/ Toggle whole class name\r\n\t\t\t} else if ( type === strundefined || type === \"boolean\" ) {\r\n\t\t\t\tif ( this.className ) {\r\n\t\t\t\t\t\/\/ store className if set\r\n\t\t\t\t\tdata_priv.set( this, \"__className__\", this.className );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ If the element has a class name or if we\'re passed `false`,\r\n\t\t\t\t\/\/ then remove the whole classname (if there was one, the above saved it).\r\n\t\t\t\t\/\/ Otherwise bring back whatever was previously saved (if anything),\r\n\t\t\t\t\/\/ falling back to the empty string if nothing was stored.\r\n\t\t\t\tthis.className = this.className || value === false ? \"\" : data_priv.get( this, \"__className__\" ) || \"\";\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\thasClass: function( selector ) {\r\n\t\tvar className = \" \" + selector + \" \",\r\n\t\t\ti = 0,\r\n\t\t\tl = this.length;\r\n\t\tfor ( ; i < l; i++ ) {\r\n\t\t\tif ( this[i].nodeType === 1 && (\" \" + this[i].className + \" \").replace(rclass, \" \").indexOf( className ) >= 0 ) {\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn false;\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\nvar rreturn = \/\\r\/g;\r\n\r\njQuery.fn.extend({\r\n\tval: function( value ) {\r\n\t\tvar hooks, ret, isFunction,\r\n\t\t\telem = this[0];\r\n\r\n\t\tif ( !arguments.length ) {\r\n\t\t\tif ( elem ) {\r\n\t\t\t\thooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];\r\n\r\n\t\t\t\tif ( hooks && \"get\" in hooks && (ret = hooks.get( elem, \"value\" )) !== undefined ) {\r\n\t\t\t\t\treturn ret;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tret = elem.value;\r\n\r\n\t\t\t\treturn typeof ret === \"string\" ?\r\n\t\t\t\t\t\/\/ Handle most common string cases\r\n\t\t\t\t\tret.replace(rreturn, \"\") :\r\n\t\t\t\t\t\/\/ Handle cases where value is null\/undef or number\r\n\t\t\t\t\tret == null ? \"\" : ret;\r\n\t\t\t}\r\n\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tisFunction = jQuery.isFunction( value );\r\n\r\n\t\treturn this.each(function( i ) {\r\n\t\t\tvar val;\r\n\r\n\t\t\tif ( this.nodeType !== 1 ) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tif ( isFunction ) {\r\n\t\t\t\tval = value.call( this, i, jQuery( this ).val() );\r\n\t\t\t} else {\r\n\t\t\t\tval = value;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Treat null\/undefined as \"\"; convert numbers to string\r\n\t\t\tif ( val == null ) {\r\n\t\t\t\tval = \"\";\r\n\r\n\t\t\t} else if ( typeof val === \"number\" ) {\r\n\t\t\t\tval += \"\";\r\n\r\n\t\t\t} else if ( jQuery.isArray( val ) ) {\r\n\t\t\t\tval = jQuery.map( val, function( value ) {\r\n\t\t\t\t\treturn value == null ? \"\" : value + \"\";\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\thooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];\r\n\r\n\t\t\t\/\/ If set returns undefined, fall back to normal setting\r\n\t\t\tif ( !hooks || !(\"set\" in hooks) || hooks.set( this, val, \"value\" ) === undefined ) {\r\n\t\t\t\tthis.value = val;\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n});\r\n\r\njQuery.extend({\r\n\tvalHooks: {\r\n\t\toption: {\r\n\t\t\tget: function( elem ) {\r\n\t\t\t\tvar val = jQuery.find.attr( elem, \"value\" );\r\n\t\t\t\treturn val != null ?\r\n\t\t\t\t\tval :\r\n\t\t\t\t\t\/\/ Support: IE10-11+\r\n\t\t\t\t\t\/\/ option.text throws exceptions (#14686, #14858)\r\n\t\t\t\t\tjQuery.trim( jQuery.text( elem ) );\r\n\t\t\t}\r\n\t\t},\r\n\t\tselect: {\r\n\t\t\tget: function( elem ) {\r\n\t\t\t\tvar value, option,\r\n\t\t\t\t\toptions = elem.options,\r\n\t\t\t\t\tindex = elem.selectedIndex,\r\n\t\t\t\t\tone = elem.type === \"select-one\" || index < 0,\r\n\t\t\t\t\tvalues = one ? null : [],\r\n\t\t\t\t\tmax = one ? index + 1 : options.length,\r\n\t\t\t\t\ti = index < 0 ?\r\n\t\t\t\t\t\tmax :\r\n\t\t\t\t\t\tone ? index : 0;\r\n\r\n\t\t\t\t\/\/ Loop through all the selected options\r\n\t\t\t\tfor ( ; i < max; i++ ) {\r\n\t\t\t\t\toption = options[ i ];\r\n\r\n\t\t\t\t\t\/\/ IE6-9 doesn\'t update selected after form reset (#2551)\r\n\t\t\t\t\tif ( ( option.selected || i === index ) &&\r\n\t\t\t\t\t\t\t\/\/ Don\'t return options that are disabled or in a disabled optgroup\r\n\t\t\t\t\t\t\t( support.optDisabled ? !option.disabled : option.getAttribute( \"disabled\" ) === null ) &&\r\n\t\t\t\t\t\t\t( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, \"optgroup\" ) ) ) {\r\n\r\n\t\t\t\t\t\t\/\/ Get the specific value for the option\r\n\t\t\t\t\t\tvalue = jQuery( option ).val();\r\n\r\n\t\t\t\t\t\t\/\/ We don\'t need an array for one selects\r\n\t\t\t\t\t\tif ( one ) {\r\n\t\t\t\t\t\t\treturn value;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\/\/ Multi-Selects return an array\r\n\t\t\t\t\t\tvalues.push( value );\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn values;\r\n\t\t\t},\r\n\r\n\t\t\tset: function( elem, value ) {\r\n\t\t\t\tvar optionSet, option,\r\n\t\t\t\t\toptions = elem.options,\r\n\t\t\t\t\tvalues = jQuery.makeArray( value ),\r\n\t\t\t\t\ti = options.length;\r\n\r\n\t\t\t\twhile ( i-- ) {\r\n\t\t\t\t\toption = options[ i ];\r\n\t\t\t\t\tif ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {\r\n\t\t\t\t\t\toptionSet = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Force browsers to behave consistently when non-matching value is set\r\n\t\t\t\tif ( !optionSet ) {\r\n\t\t\t\t\telem.selectedIndex = -1;\r\n\t\t\t\t}\r\n\t\t\t\treturn values;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\/\/ Radios and checkboxes getter\/setter\r\njQuery.each([ \"radio\", \"checkbox\" ], function() {\r\n\tjQuery.valHooks[ this ] = {\r\n\t\tset: function( elem, value ) {\r\n\t\t\tif ( jQuery.isArray( value ) ) {\r\n\t\t\t\treturn ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\tif ( !support.checkOn ) {\r\n\t\tjQuery.valHooks[ this ].get = function( elem ) {\r\n\t\t\treturn elem.getAttribute(\"value\") === null ? \"on\" : elem.value;\r\n\t\t};\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\n\/\/ Return jQuery for attributes-only inclusion\r\n\r\n\r\njQuery.each( (\"blur focus focusin focusout load resize scroll unload click dblclick \" +\r\n\t\"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave \" +\r\n\t\"change select submit keydown keypress keyup error contextmenu\").split(\" \"), function( i, name ) {\r\n\r\n\t\/\/ Handle event binding\r\n\tjQuery.fn[ name ] = function( data, fn ) {\r\n\t\treturn arguments.length > 0 ?\r\n\t\t\tthis.on( name, null, data, fn ) :\r\n\t\t\tthis.trigger( name );\r\n\t};\r\n});\r\n\r\njQuery.fn.extend({\r\n\thover: function( fnOver, fnOut ) {\r\n\t\treturn this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );\r\n\t},\r\n\r\n\tbind: function( types, data, fn ) {\r\n\t\treturn this.on( types, null, data, fn );\r\n\t},\r\n\tunbind: function( types, fn ) {\r\n\t\treturn this.off( types, null, fn );\r\n\t},\r\n\r\n\tdelegate: function( selector, types, data, fn ) {\r\n\t\treturn this.on( types, selector, data, fn );\r\n\t},\r\n\tundelegate: function( selector, types, fn ) {\r\n\t\t\/\/ ( namespace ) or ( selector, types [, fn] )\r\n\t\treturn arguments.length === 1 ? this.off( selector, \"**\" ) : this.off( types, selector || \"**\", fn );\r\n\t}\r\n});\r\n\r\n\r\nvar nonce = jQuery.now();\r\n\r\nvar rquery = (\/\\?\/);\r\n\r\n\r\n\r\n\/\/ Support: Android 2.3\r\n\/\/ Workaround failure to string-cast null input\r\njQuery.parseJSON = function( data ) {\r\n\treturn JSON.parse( data + \"\" );\r\n};\r\n\r\n\r\n\/\/ Cross-browser xml parsing\r\njQuery.parseXML = function( data ) {\r\n\tvar xml, tmp;\r\n\tif ( !data || typeof data !== \"string\" ) {\r\n\t\treturn null;\r\n\t}\r\n\r\n\t\/\/ Support: IE9\r\n\ttry {\r\n\t\ttmp = new DOMParser();\r\n\t\txml = tmp.parseFromString( data, \"text\/xml\" );\r\n\t} catch ( e ) {\r\n\t\txml = undefined;\r\n\t}\r\n\r\n\tif ( !xml || xml.getElementsByTagName( \"parsererror\" ).length ) {\r\n\t\tjQuery.error( \"Invalid XML: \" + data );\r\n\t}\r\n\treturn xml;\r\n};\r\n\r\n\r\nvar\r\n\trhash = \/#.*$\/,\r\n\trts = \/([?&])_=[^&]*\/,\r\n\trheaders = \/^(.*?):[ \\t]*([^\\r\\n]*)$\/mg,\r\n\t\/\/ #7653, #8125, #8152: local protocol detection\r\n\trlocalProtocol = \/^(?:about|app|app-storage|.+-extension|file|res|widget):$\/,\r\n\trnoContent = \/^(?:GET|HEAD)$\/,\r\n\trprotocol = \/^\\\/\\\/\/,\r\n\trurl = \/^([\\w.+-]+:)(?:\\\/\\\/(?:[^\\\/?#]*@|)([^\\\/?#:]*)(?::(\\d+)|)|)\/,\r\n\r\n\t\/* Prefilters\r\n\t * 1) They are useful to introduce custom dataTypes (see ajax\/jsonp.js for an example)\r\n\t * 2) These are called:\r\n\t *    - BEFORE asking for a transport\r\n\t *    - AFTER param serialization (s.data is a string if s.processData is true)\r\n\t * 3) key is the dataType\r\n\t * 4) the catchall symbol \"*\" can be used\r\n\t * 5) execution will start with transport dataType and THEN continue down to \"*\" if needed\r\n\t *\/\r\n\tprefilters = {},\r\n\r\n\t\/* Transports bindings\r\n\t * 1) key is the dataType\r\n\t * 2) the catchall symbol \"*\" can be used\r\n\t * 3) selection will start with transport dataType and THEN go to \"*\" if needed\r\n\t *\/\r\n\ttransports = {},\r\n\r\n\t\/\/ Avoid comment-prolog char sequence (#10098); must appease lint and evade compression\r\n\tallTypes = \"*\/\".concat( \"*\" ),\r\n\r\n\t\/\/ Document location\r\n\tajaxLocation = window.location.href,\r\n\r\n\t\/\/ Segment location into parts\r\n\tajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];\r\n\r\n\/\/ Base \"constructor\" for jQuery.ajaxPrefilter and jQuery.ajaxTransport\r\nfunction addToPrefiltersOrTransports( structure ) {\r\n\r\n\t\/\/ dataTypeExpression is optional and defaults to \"*\"\r\n\treturn function( dataTypeExpression, func ) {\r\n\r\n\t\tif ( typeof dataTypeExpression !== \"string\" ) {\r\n\t\t\tfunc = dataTypeExpression;\r\n\t\t\tdataTypeExpression = \"*\";\r\n\t\t}\r\n\r\n\t\tvar dataType,\r\n\t\t\ti = 0,\r\n\t\t\tdataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];\r\n\r\n\t\tif ( jQuery.isFunction( func ) ) {\r\n\t\t\t\/\/ For each dataType in the dataTypeExpression\r\n\t\t\twhile ( (dataType = dataTypes[i++]) ) {\r\n\t\t\t\t\/\/ Prepend if requested\r\n\t\t\t\tif ( dataType[0] === \"+\" ) {\r\n\t\t\t\t\tdataType = dataType.slice( 1 ) || \"*\";\r\n\t\t\t\t\t(structure[ dataType ] = structure[ dataType ] || []).unshift( func );\r\n\r\n\t\t\t\t\/\/ Otherwise append\r\n\t\t\t\t} else {\r\n\t\t\t\t\t(structure[ dataType ] = structure[ dataType ] || []).push( func );\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\n\/\/ Base inspection function for prefilters and transports\r\nfunction inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {\r\n\r\n\tvar inspected = {},\r\n\t\tseekingTransport = ( structure === transports );\r\n\r\n\tfunction inspect( dataType ) {\r\n\t\tvar selected;\r\n\t\tinspected[ dataType ] = true;\r\n\t\tjQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {\r\n\t\t\tvar dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );\r\n\t\t\tif ( typeof dataTypeOrTransport === \"string\" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {\r\n\t\t\t\toptions.dataTypes.unshift( dataTypeOrTransport );\r\n\t\t\t\tinspect( dataTypeOrTransport );\r\n\t\t\t\treturn false;\r\n\t\t\t} else if ( seekingTransport ) {\r\n\t\t\t\treturn !( selected = dataTypeOrTransport );\r\n\t\t\t}\r\n\t\t});\r\n\t\treturn selected;\r\n\t}\r\n\r\n\treturn inspect( options.dataTypes[ 0 ] ) || !inspected[ \"*\" ] && inspect( \"*\" );\r\n}\r\n\r\n\/\/ A special extend for ajax options\r\n\/\/ that takes \"flat\" options (not to be deep extended)\r\n\/\/ Fixes #9887\r\nfunction ajaxExtend( target, src ) {\r\n\tvar key, deep,\r\n\t\tflatOptions = jQuery.ajaxSettings.flatOptions || {};\r\n\r\n\tfor ( key in src ) {\r\n\t\tif ( src[ key ] !== undefined ) {\r\n\t\t\t( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];\r\n\t\t}\r\n\t}\r\n\tif ( deep ) {\r\n\t\tjQuery.extend( true, target, deep );\r\n\t}\r\n\r\n\treturn target;\r\n}\r\n\r\n\/* Handles responses to an ajax request:\r\n * - finds the right dataType (mediates between content-type and expected dataType)\r\n * - returns the corresponding response\r\n *\/\r\nfunction ajaxHandleResponses( s, jqXHR, responses ) {\r\n\r\n\tvar ct, type, finalDataType, firstDataType,\r\n\t\tcontents = s.contents,\r\n\t\tdataTypes = s.dataTypes;\r\n\r\n\t\/\/ Remove auto dataType and get content-type in the process\r\n\twhile ( dataTypes[ 0 ] === \"*\" ) {\r\n\t\tdataTypes.shift();\r\n\t\tif ( ct === undefined ) {\r\n\t\t\tct = s.mimeType || jqXHR.getResponseHeader(\"Content-Type\");\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Check if we\'re dealing with a known content-type\r\n\tif ( ct ) {\r\n\t\tfor ( type in contents ) {\r\n\t\t\tif ( contents[ type ] && contents[ type ].test( ct ) ) {\r\n\t\t\t\tdataTypes.unshift( type );\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Check to see if we have a response for the expected dataType\r\n\tif ( dataTypes[ 0 ] in responses ) {\r\n\t\tfinalDataType = dataTypes[ 0 ];\r\n\t} else {\r\n\t\t\/\/ Try convertible dataTypes\r\n\t\tfor ( type in responses ) {\r\n\t\t\tif ( !dataTypes[ 0 ] || s.converters[ type + \" \" + dataTypes[0] ] ) {\r\n\t\t\t\tfinalDataType = type;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tif ( !firstDataType ) {\r\n\t\t\t\tfirstDataType = type;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\/\/ Or just use first one\r\n\t\tfinalDataType = finalDataType || firstDataType;\r\n\t}\r\n\r\n\t\/\/ If we found a dataType\r\n\t\/\/ We add the dataType to the list if needed\r\n\t\/\/ and return the corresponding response\r\n\tif ( finalDataType ) {\r\n\t\tif ( finalDataType !== dataTypes[ 0 ] ) {\r\n\t\t\tdataTypes.unshift( finalDataType );\r\n\t\t}\r\n\t\treturn responses[ finalDataType ];\r\n\t}\r\n}\r\n\r\n\/* Chain conversions given the request and the original response\r\n * Also sets the responseXXX fields on the jqXHR instance\r\n *\/\r\nfunction ajaxConvert( s, response, jqXHR, isSuccess ) {\r\n\tvar conv2, current, conv, tmp, prev,\r\n\t\tconverters = {},\r\n\t\t\/\/ Work with a copy of dataTypes in case we need to modify it for conversion\r\n\t\tdataTypes = s.dataTypes.slice();\r\n\r\n\t\/\/ Create converters map with lowercased keys\r\n\tif ( dataTypes[ 1 ] ) {\r\n\t\tfor ( conv in s.converters ) {\r\n\t\t\tconverters[ conv.toLowerCase() ] = s.converters[ conv ];\r\n\t\t}\r\n\t}\r\n\r\n\tcurrent = dataTypes.shift();\r\n\r\n\t\/\/ Convert to each sequential dataType\r\n\twhile ( current ) {\r\n\r\n\t\tif ( s.responseFields[ current ] ) {\r\n\t\t\tjqXHR[ s.responseFields[ current ] ] = response;\r\n\t\t}\r\n\r\n\t\t\/\/ Apply the dataFilter if provided\r\n\t\tif ( !prev && isSuccess && s.dataFilter ) {\r\n\t\t\tresponse = s.dataFilter( response, s.dataType );\r\n\t\t}\r\n\r\n\t\tprev = current;\r\n\t\tcurrent = dataTypes.shift();\r\n\r\n\t\tif ( current ) {\r\n\r\n\t\t\/\/ There\'s only work to do if current dataType is non-auto\r\n\t\t\tif ( current === \"*\" ) {\r\n\r\n\t\t\t\tcurrent = prev;\r\n\r\n\t\t\t\/\/ Convert response if prev dataType is non-auto and differs from current\r\n\t\t\t} else if ( prev !== \"*\" && prev !== current ) {\r\n\r\n\t\t\t\t\/\/ Seek a direct converter\r\n\t\t\t\tconv = converters[ prev + \" \" + current ] || converters[ \"* \" + current ];\r\n\r\n\t\t\t\t\/\/ If none found, seek a pair\r\n\t\t\t\tif ( !conv ) {\r\n\t\t\t\t\tfor ( conv2 in converters ) {\r\n\r\n\t\t\t\t\t\t\/\/ If conv2 outputs current\r\n\t\t\t\t\t\ttmp = conv2.split( \" \" );\r\n\t\t\t\t\t\tif ( tmp[ 1 ] === current ) {\r\n\r\n\t\t\t\t\t\t\t\/\/ If prev can be converted to accepted input\r\n\t\t\t\t\t\t\tconv = converters[ prev + \" \" + tmp[ 0 ] ] ||\r\n\t\t\t\t\t\t\t\tconverters[ \"* \" + tmp[ 0 ] ];\r\n\t\t\t\t\t\t\tif ( conv ) {\r\n\t\t\t\t\t\t\t\t\/\/ Condense equivalence converters\r\n\t\t\t\t\t\t\t\tif ( conv === true ) {\r\n\t\t\t\t\t\t\t\t\tconv = converters[ conv2 ];\r\n\r\n\t\t\t\t\t\t\t\t\/\/ Otherwise, insert the intermediate dataType\r\n\t\t\t\t\t\t\t\t} else if ( converters[ conv2 ] !== true ) {\r\n\t\t\t\t\t\t\t\t\tcurrent = tmp[ 0 ];\r\n\t\t\t\t\t\t\t\t\tdataTypes.unshift( tmp[ 1 ] );\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Apply converter (if not an equivalence)\r\n\t\t\t\tif ( conv !== true ) {\r\n\r\n\t\t\t\t\t\/\/ Unless errors are allowed to bubble, catch and return them\r\n\t\t\t\t\tif ( conv && s[ \"throws\" ] ) {\r\n\t\t\t\t\t\tresponse = conv( response );\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\tresponse = conv( response );\r\n\t\t\t\t\t\t} catch ( e ) {\r\n\t\t\t\t\t\t\treturn { state: \"parsererror\", error: conv ? e : \"No conversion from \" + prev + \" to \" + current };\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn { state: \"success\", data: response };\r\n}\r\n\r\njQuery.extend({\r\n\r\n\t\/\/ Counter for holding the number of active queries\r\n\tactive: 0,\r\n\r\n\t\/\/ Last-Modified header cache for next request\r\n\tlastModified: {},\r\n\tetag: {},\r\n\r\n\tajaxSettings: {\r\n\t\turl: ajaxLocation,\r\n\t\ttype: \"GET\",\r\n\t\tisLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),\r\n\t\tglobal: true,\r\n\t\tprocessData: true,\r\n\t\tasync: true,\r\n\t\tcontentType: \"application\/x-www-form-urlencoded; charset=UTF-8\",\r\n\t\t\/*\r\n\t\ttimeout: 0,\r\n\t\tdata: null,\r\n\t\tdataType: null,\r\n\t\tusername: null,\r\n\t\tpassword: null,\r\n\t\tcache: null,\r\n\t\tthrows: false,\r\n\t\ttraditional: false,\r\n\t\theaders: {},\r\n\t\t*\/\r\n\r\n\t\taccepts: {\r\n\t\t\t\"*\": allTypes,\r\n\t\t\ttext: \"text\/plain\",\r\n\t\t\thtml: \"text\/html\",\r\n\t\t\txml: \"application\/xml, text\/xml\",\r\n\t\t\tjson: \"application\/json, text\/javascript\"\r\n\t\t},\r\n\r\n\t\tcontents: {\r\n\t\t\txml: \/xml\/,\r\n\t\t\thtml: \/html\/,\r\n\t\t\tjson: \/json\/\r\n\t\t},\r\n\r\n\t\tresponseFields: {\r\n\t\t\txml: \"responseXML\",\r\n\t\t\ttext: \"responseText\",\r\n\t\t\tjson: \"responseJSON\"\r\n\t\t},\r\n\r\n\t\t\/\/ Data converters\r\n\t\t\/\/ Keys separate source (or catchall \"*\") and destination types with a single space\r\n\t\tconverters: {\r\n\r\n\t\t\t\/\/ Convert anything to text\r\n\t\t\t\"* text\": String,\r\n\r\n\t\t\t\/\/ Text to html (true = no transformation)\r\n\t\t\t\"text html\": true,\r\n\r\n\t\t\t\/\/ Evaluate text as a json expression\r\n\t\t\t\"text json\": jQuery.parseJSON,\r\n\r\n\t\t\t\/\/ Parse text as xml\r\n\t\t\t\"text xml\": jQuery.parseXML\r\n\t\t},\r\n\r\n\t\t\/\/ For options that shouldn\'t be deep extended:\r\n\t\t\/\/ you can add your own custom options here if\r\n\t\t\/\/ and when you create one that shouldn\'t be\r\n\t\t\/\/ deep extended (see ajaxExtend)\r\n\t\tflatOptions: {\r\n\t\t\turl: true,\r\n\t\t\tcontext: true\r\n\t\t}\r\n\t},\r\n\r\n\t\/\/ Creates a full fledged settings object into target\r\n\t\/\/ with both ajaxSettings and settings fields.\r\n\t\/\/ If target is omitted, writes into ajaxSettings.\r\n\tajaxSetup: function( target, settings ) {\r\n\t\treturn settings ?\r\n\r\n\t\t\t\/\/ Building a settings object\r\n\t\t\tajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :\r\n\r\n\t\t\t\/\/ Extending ajaxSettings\r\n\t\t\tajaxExtend( jQuery.ajaxSettings, target );\r\n\t},\r\n\r\n\tajaxPrefilter: addToPrefiltersOrTransports( prefilters ),\r\n\tajaxTransport: addToPrefiltersOrTransports( transports ),\r\n\r\n\t\/\/ Main method\r\n\tajax: function( url, options ) {\r\n\r\n\t\t\/\/ If url is an object, simulate pre-1.5 signature\r\n\t\tif ( typeof url === \"object\" ) {\r\n\t\t\toptions = url;\r\n\t\t\turl = undefined;\r\n\t\t}\r\n\r\n\t\t\/\/ Force options to be an object\r\n\t\toptions = options || {};\r\n\r\n\t\tvar transport,\r\n\t\t\t\/\/ URL without anti-cache param\r\n\t\t\tcacheURL,\r\n\t\t\t\/\/ Response headers\r\n\t\t\tresponseHeadersString,\r\n\t\t\tresponseHeaders,\r\n\t\t\t\/\/ timeout handle\r\n\t\t\ttimeoutTimer,\r\n\t\t\t\/\/ Cross-domain detection vars\r\n\t\t\tparts,\r\n\t\t\t\/\/ To know if global events are to be dispatched\r\n\t\t\tfireGlobals,\r\n\t\t\t\/\/ Loop variable\r\n\t\t\ti,\r\n\t\t\t\/\/ Create the final options object\r\n\t\t\ts = jQuery.ajaxSetup( {}, options ),\r\n\t\t\t\/\/ Callbacks context\r\n\t\t\tcallbackContext = s.context || s,\r\n\t\t\t\/\/ Context for global events is callbackContext if it is a DOM node or jQuery collection\r\n\t\t\tglobalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?\r\n\t\t\t\tjQuery( callbackContext ) :\r\n\t\t\t\tjQuery.event,\r\n\t\t\t\/\/ Deferreds\r\n\t\t\tdeferred = jQuery.Deferred(),\r\n\t\t\tcompleteDeferred = jQuery.Callbacks(\"once memory\"),\r\n\t\t\t\/\/ Status-dependent callbacks\r\n\t\t\tstatusCode = s.statusCode || {},\r\n\t\t\t\/\/ Headers (they are sent all at once)\r\n\t\t\trequestHeaders = {},\r\n\t\t\trequestHeadersNames = {},\r\n\t\t\t\/\/ The jqXHR state\r\n\t\t\tstate = 0,\r\n\t\t\t\/\/ Default abort message\r\n\t\t\tstrAbort = \"canceled\",\r\n\t\t\t\/\/ Fake xhr\r\n\t\t\tjqXHR = {\r\n\t\t\t\treadyState: 0,\r\n\r\n\t\t\t\t\/\/ Builds headers hashtable if needed\r\n\t\t\t\tgetResponseHeader: function( key ) {\r\n\t\t\t\t\tvar match;\r\n\t\t\t\t\tif ( state === 2 ) {\r\n\t\t\t\t\t\tif ( !responseHeaders ) {\r\n\t\t\t\t\t\t\tresponseHeaders = {};\r\n\t\t\t\t\t\t\twhile ( (match = rheaders.exec( responseHeadersString )) ) {\r\n\t\t\t\t\t\t\t\tresponseHeaders[ match[1].toLowerCase() ] = match[ 2 ];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tmatch = responseHeaders[ key.toLowerCase() ];\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn match == null ? null : match;\r\n\t\t\t\t},\r\n\r\n\t\t\t\t\/\/ Raw string\r\n\t\t\t\tgetAllResponseHeaders: function() {\r\n\t\t\t\t\treturn state === 2 ? responseHeadersString : null;\r\n\t\t\t\t},\r\n\r\n\t\t\t\t\/\/ Caches the header\r\n\t\t\t\tsetRequestHeader: function( name, value ) {\r\n\t\t\t\t\tvar lname = name.toLowerCase();\r\n\t\t\t\t\tif ( !state ) {\r\n\t\t\t\t\t\tname = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;\r\n\t\t\t\t\t\trequestHeaders[ name ] = value;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t},\r\n\r\n\t\t\t\t\/\/ Overrides response content-type header\r\n\t\t\t\toverrideMimeType: function( type ) {\r\n\t\t\t\t\tif ( !state ) {\r\n\t\t\t\t\t\ts.mimeType = type;\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t},\r\n\r\n\t\t\t\t\/\/ Status-dependent callbacks\r\n\t\t\t\tstatusCode: function( map ) {\r\n\t\t\t\t\tvar code;\r\n\t\t\t\t\tif ( map ) {\r\n\t\t\t\t\t\tif ( state < 2 ) {\r\n\t\t\t\t\t\t\tfor ( code in map ) {\r\n\t\t\t\t\t\t\t\t\/\/ Lazy-add the new callback in a way that preserves old ones\r\n\t\t\t\t\t\t\t\tstatusCode[ code ] = [ statusCode[ code ], map[ code ] ];\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\/\/ Execute the appropriate callbacks\r\n\t\t\t\t\t\t\tjqXHR.always( map[ jqXHR.status ] );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t},\r\n\r\n\t\t\t\t\/\/ Cancel the request\r\n\t\t\t\tabort: function( statusText ) {\r\n\t\t\t\t\tvar finalText = statusText || strAbort;\r\n\t\t\t\t\tif ( transport ) {\r\n\t\t\t\t\t\ttransport.abort( finalText );\r\n\t\t\t\t\t}\r\n\t\t\t\t\tdone( 0, finalText );\r\n\t\t\t\t\treturn this;\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\/\/ Attach deferreds\r\n\t\tdeferred.promise( jqXHR ).complete = completeDeferred.add;\r\n\t\tjqXHR.success = jqXHR.done;\r\n\t\tjqXHR.error = jqXHR.fail;\r\n\r\n\t\t\/\/ Remove hash character (#7531: and string promotion)\r\n\t\t\/\/ Add protocol if not provided (prefilters might expect it)\r\n\t\t\/\/ Handle falsy url in the settings object (#10093: consistency with old signature)\r\n\t\t\/\/ We also use the url parameter if available\r\n\t\ts.url = ( ( url || s.url || ajaxLocation ) + \"\" ).replace( rhash, \"\" )\r\n\t\t\t.replace( rprotocol, ajaxLocParts[ 1 ] + \"\/\/\" );\r\n\r\n\t\t\/\/ Alias method option to type as per ticket #12004\r\n\t\ts.type = options.method || options.type || s.method || s.type;\r\n\r\n\t\t\/\/ Extract dataTypes list\r\n\t\ts.dataTypes = jQuery.trim( s.dataType || \"*\" ).toLowerCase().match( rnotwhite ) || [ \"\" ];\r\n\r\n\t\t\/\/ A cross-domain request is in order when we have a protocol:host:port mismatch\r\n\t\tif ( s.crossDomain == null ) {\r\n\t\t\tparts = rurl.exec( s.url.toLowerCase() );\r\n\t\t\ts.crossDomain = !!( parts &&\r\n\t\t\t\t( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||\r\n\t\t\t\t\t( parts[ 3 ] || ( parts[ 1 ] === \"http:\" ? \"80\" : \"443\" ) ) !==\r\n\t\t\t\t\t\t( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === \"http:\" ? \"80\" : \"443\" ) ) )\r\n\t\t\t);\r\n\t\t}\r\n\r\n\t\t\/\/ Convert data if not already a string\r\n\t\tif ( s.data && s.processData && typeof s.data !== \"string\" ) {\r\n\t\t\ts.data = jQuery.param( s.data, s.traditional );\r\n\t\t}\r\n\r\n\t\t\/\/ Apply prefilters\r\n\t\tinspectPrefiltersOrTransports( prefilters, s, options, jqXHR );\r\n\r\n\t\t\/\/ If request was aborted inside a prefilter, stop there\r\n\t\tif ( state === 2 ) {\r\n\t\t\treturn jqXHR;\r\n\t\t}\r\n\r\n\t\t\/\/ We can fire global events as of now if asked to\r\n\t\t\/\/ Don\'t fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)\r\n\t\tfireGlobals = jQuery.event && s.global;\r\n\r\n\t\t\/\/ Watch for a new set of requests\r\n\t\tif ( fireGlobals && jQuery.active++ === 0 ) {\r\n\t\t\tjQuery.event.trigger(\"ajaxStart\");\r\n\t\t}\r\n\r\n\t\t\/\/ Uppercase the type\r\n\t\ts.type = s.type.toUpperCase();\r\n\r\n\t\t\/\/ Determine if request has content\r\n\t\ts.hasContent = !rnoContent.test( s.type );\r\n\r\n\t\t\/\/ Save the URL in case we\'re toying with the If-Modified-Since\r\n\t\t\/\/ and\/or If-None-Match header later on\r\n\t\tcacheURL = s.url;\r\n\r\n\t\t\/\/ More options handling for requests with no content\r\n\t\tif ( !s.hasContent ) {\r\n\r\n\t\t\t\/\/ If data is available, append data to url\r\n\t\t\tif ( s.data ) {\r\n\t\t\t\tcacheURL = ( s.url += ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + s.data );\r\n\t\t\t\t\/\/ #9682: remove data so that it\'s not used in an eventual retry\r\n\t\t\t\tdelete s.data;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Add anti-cache in url if needed\r\n\t\t\tif ( s.cache === false ) {\r\n\t\t\t\ts.url = rts.test( cacheURL ) ?\r\n\r\n\t\t\t\t\t\/\/ If there is already a \'_\' parameter, set its value\r\n\t\t\t\t\tcacheURL.replace( rts, \"$1_=\" + nonce++ ) :\r\n\r\n\t\t\t\t\t\/\/ Otherwise add one to the end\r\n\t\t\t\t\tcacheURL + ( rquery.test( cacheURL ) ? \"&\" : \"?\" ) + \"_=\" + nonce++;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Set the If-Modified-Since and\/or If-None-Match header, if in ifModified mode.\r\n\t\tif ( s.ifModified ) {\r\n\t\t\tif ( jQuery.lastModified[ cacheURL ] ) {\r\n\t\t\t\tjqXHR.setRequestHeader( \"If-Modified-Since\", jQuery.lastModified[ cacheURL ] );\r\n\t\t\t}\r\n\t\t\tif ( jQuery.etag[ cacheURL ] ) {\r\n\t\t\t\tjqXHR.setRequestHeader( \"If-None-Match\", jQuery.etag[ cacheURL ] );\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Set the correct header, if data is being sent\r\n\t\tif ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {\r\n\t\t\tjqXHR.setRequestHeader( \"Content-Type\", s.contentType );\r\n\t\t}\r\n\r\n\t\t\/\/ Set the Accepts header for the server, depending on the dataType\r\n\t\tjqXHR.setRequestHeader(\r\n\t\t\t\"Accept\",\r\n\t\t\ts.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?\r\n\t\t\t\ts.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== \"*\" ? \", \" + allTypes + \"; q=0.01\" : \"\" ) :\r\n\t\t\t\ts.accepts[ \"*\" ]\r\n\t\t);\r\n\r\n\t\t\/\/ Check for headers option\r\n\t\tfor ( i in s.headers ) {\r\n\t\t\tjqXHR.setRequestHeader( i, s.headers[ i ] );\r\n\t\t}\r\n\r\n\t\t\/\/ Allow custom headers\/mimetypes and early abort\r\n\t\tif ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {\r\n\t\t\t\/\/ Abort if not done already and return\r\n\t\t\treturn jqXHR.abort();\r\n\t\t}\r\n\r\n\t\t\/\/ Aborting is no longer a cancellation\r\n\t\tstrAbort = \"abort\";\r\n\r\n\t\t\/\/ Install callbacks on deferreds\r\n\t\tfor ( i in { success: 1, error: 1, complete: 1 } ) {\r\n\t\t\tjqXHR[ i ]( s[ i ] );\r\n\t\t}\r\n\r\n\t\t\/\/ Get transport\r\n\t\ttransport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );\r\n\r\n\t\t\/\/ If no transport, we auto-abort\r\n\t\tif ( !transport ) {\r\n\t\t\tdone( -1, \"No Transport\" );\r\n\t\t} else {\r\n\t\t\tjqXHR.readyState = 1;\r\n\r\n\t\t\t\/\/ Send global event\r\n\t\t\tif ( fireGlobals ) {\r\n\t\t\t\tglobalEventContext.trigger( \"ajaxSend\", [ jqXHR, s ] );\r\n\t\t\t}\r\n\t\t\t\/\/ Timeout\r\n\t\t\tif ( s.async && s.timeout > 0 ) {\r\n\t\t\t\ttimeoutTimer = setTimeout(function() {\r\n\t\t\t\t\tjqXHR.abort(\"timeout\");\r\n\t\t\t\t}, s.timeout );\r\n\t\t\t}\r\n\r\n\t\t\ttry {\r\n\t\t\t\tstate = 1;\r\n\t\t\t\ttransport.send( requestHeaders, done );\r\n\t\t\t} catch ( e ) {\r\n\t\t\t\t\/\/ Propagate exception as error if not done\r\n\t\t\t\tif ( state < 2 ) {\r\n\t\t\t\t\tdone( -1, e );\r\n\t\t\t\t\/\/ Simply rethrow otherwise\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthrow e;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t\/\/ Callback for when everything is done\r\n\t\tfunction done( status, nativeStatusText, responses, headers ) {\r\n\t\t\tvar isSuccess, success, error, response, modified,\r\n\t\t\t\tstatusText = nativeStatusText;\r\n\r\n\t\t\t\/\/ Called once\r\n\t\t\tif ( state === 2 ) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ State is \"done\" now\r\n\t\t\tstate = 2;\r\n\r\n\t\t\t\/\/ Clear timeout if it exists\r\n\t\t\tif ( timeoutTimer ) {\r\n\t\t\t\tclearTimeout( timeoutTimer );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Dereference transport for early garbage collection\r\n\t\t\t\/\/ (no matter how long the jqXHR object will be used)\r\n\t\t\ttransport = undefined;\r\n\r\n\t\t\t\/\/ Cache response headers\r\n\t\t\tresponseHeadersString = headers || \"\";\r\n\r\n\t\t\t\/\/ Set readyState\r\n\t\t\tjqXHR.readyState = status > 0 ? 4 : 0;\r\n\r\n\t\t\t\/\/ Determine if successful\r\n\t\t\tisSuccess = status >= 200 && status < 300 || status === 304;\r\n\r\n\t\t\t\/\/ Get response data\r\n\t\t\tif ( responses ) {\r\n\t\t\t\tresponse = ajaxHandleResponses( s, jqXHR, responses );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Convert no matter what (that way responseXXX fields are always set)\r\n\t\t\tresponse = ajaxConvert( s, response, jqXHR, isSuccess );\r\n\r\n\t\t\t\/\/ If successful, handle type chaining\r\n\t\t\tif ( isSuccess ) {\r\n\r\n\t\t\t\t\/\/ Set the If-Modified-Since and\/or If-None-Match header, if in ifModified mode.\r\n\t\t\t\tif ( s.ifModified ) {\r\n\t\t\t\t\tmodified = jqXHR.getResponseHeader(\"Last-Modified\");\r\n\t\t\t\t\tif ( modified ) {\r\n\t\t\t\t\t\tjQuery.lastModified[ cacheURL ] = modified;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tmodified = jqXHR.getResponseHeader(\"etag\");\r\n\t\t\t\t\tif ( modified ) {\r\n\t\t\t\t\t\tjQuery.etag[ cacheURL ] = modified;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ if no content\r\n\t\t\t\tif ( status === 204 || s.type === \"HEAD\" ) {\r\n\t\t\t\t\tstatusText = \"nocontent\";\r\n\r\n\t\t\t\t\/\/ if not modified\r\n\t\t\t\t} else if ( status === 304 ) {\r\n\t\t\t\t\tstatusText = \"notmodified\";\r\n\r\n\t\t\t\t\/\/ If we have data, let\'s convert it\r\n\t\t\t\t} else {\r\n\t\t\t\t\tstatusText = response.state;\r\n\t\t\t\t\tsuccess = response.data;\r\n\t\t\t\t\terror = response.error;\r\n\t\t\t\t\tisSuccess = !error;\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\t\/\/ Extract error from statusText and normalize for non-aborts\r\n\t\t\t\terror = statusText;\r\n\t\t\t\tif ( status || !statusText ) {\r\n\t\t\t\t\tstatusText = \"error\";\r\n\t\t\t\t\tif ( status < 0 ) {\r\n\t\t\t\t\t\tstatus = 0;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Set data for the fake xhr object\r\n\t\t\tjqXHR.status = status;\r\n\t\t\tjqXHR.statusText = ( nativeStatusText || statusText ) + \"\";\r\n\r\n\t\t\t\/\/ Success\/Error\r\n\t\t\tif ( isSuccess ) {\r\n\t\t\t\tdeferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );\r\n\t\t\t} else {\r\n\t\t\t\tdeferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Status-dependent callbacks\r\n\t\t\tjqXHR.statusCode( statusCode );\r\n\t\t\tstatusCode = undefined;\r\n\r\n\t\t\tif ( fireGlobals ) {\r\n\t\t\t\tglobalEventContext.trigger( isSuccess ? \"ajaxSuccess\" : \"ajaxError\",\r\n\t\t\t\t\t[ jqXHR, s, isSuccess ? success : error ] );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Complete\r\n\t\t\tcompleteDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );\r\n\r\n\t\t\tif ( fireGlobals ) {\r\n\t\t\t\tglobalEventContext.trigger( \"ajaxComplete\", [ jqXHR, s ] );\r\n\t\t\t\t\/\/ Handle the global AJAX counter\r\n\t\t\t\tif ( !( --jQuery.active ) ) {\r\n\t\t\t\t\tjQuery.event.trigger(\"ajaxStop\");\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn jqXHR;\r\n\t},\r\n\r\n\tgetJSON: function( url, data, callback ) {\r\n\t\treturn jQuery.get( url, data, callback, \"json\" );\r\n\t},\r\n\r\n\tgetScript: function( url, callback ) {\r\n\t\treturn jQuery.get( url, undefined, callback, \"script\" );\r\n\t}\r\n});\r\n\r\njQuery.each( [ \"get\", \"post\" ], function( i, method ) {\r\n\tjQuery[ method ] = function( url, data, callback, type ) {\r\n\t\t\/\/ Shift arguments if data argument was omitted\r\n\t\tif ( jQuery.isFunction( data ) ) {\r\n\t\t\ttype = type || callback;\r\n\t\t\tcallback = data;\r\n\t\t\tdata = undefined;\r\n\t\t}\r\n\r\n\t\treturn jQuery.ajax({\r\n\t\t\turl: url,\r\n\t\t\ttype: method,\r\n\t\t\tdataType: type,\r\n\t\t\tdata: data,\r\n\t\t\tsuccess: callback\r\n\t\t});\r\n\t};\r\n});\r\n\r\n\r\njQuery._evalUrl = function( url ) {\r\n\treturn jQuery.ajax({\r\n\t\turl: url,\r\n\t\ttype: \"GET\",\r\n\t\tdataType: \"script\",\r\n\t\tasync: false,\r\n\t\tglobal: false,\r\n\t\t\"throws\": true\r\n\t});\r\n};\r\n\r\n\r\njQuery.fn.extend({\r\n\twrapAll: function( html ) {\r\n\t\tvar wrap;\r\n\r\n\t\tif ( jQuery.isFunction( html ) ) {\r\n\t\t\treturn this.each(function( i ) {\r\n\t\t\t\tjQuery( this ).wrapAll( html.call(this, i) );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif ( this[ 0 ] ) {\r\n\r\n\t\t\t\/\/ The elements to wrap the target around\r\n\t\t\twrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );\r\n\r\n\t\t\tif ( this[ 0 ].parentNode ) {\r\n\t\t\t\twrap.insertBefore( this[ 0 ] );\r\n\t\t\t}\r\n\r\n\t\t\twrap.map(function() {\r\n\t\t\t\tvar elem = this;\r\n\r\n\t\t\t\twhile ( elem.firstElementChild ) {\r\n\t\t\t\t\telem = elem.firstElementChild;\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn elem;\r\n\t\t\t}).append( this );\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\twrapInner: function( html ) {\r\n\t\tif ( jQuery.isFunction( html ) ) {\r\n\t\t\treturn this.each(function( i ) {\r\n\t\t\t\tjQuery( this ).wrapInner( html.call(this, i) );\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\treturn this.each(function() {\r\n\t\t\tvar self = jQuery( this ),\r\n\t\t\t\tcontents = self.contents();\r\n\r\n\t\t\tif ( contents.length ) {\r\n\t\t\t\tcontents.wrapAll( html );\r\n\r\n\t\t\t} else {\r\n\t\t\t\tself.append( html );\r\n\t\t\t}\r\n\t\t});\r\n\t},\r\n\r\n\twrap: function( html ) {\r\n\t\tvar isFunction = jQuery.isFunction( html );\r\n\r\n\t\treturn this.each(function( i ) {\r\n\t\t\tjQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );\r\n\t\t});\r\n\t},\r\n\r\n\tunwrap: function() {\r\n\t\treturn this.parent().each(function() {\r\n\t\t\tif ( !jQuery.nodeName( this, \"body\" ) ) {\r\n\t\t\t\tjQuery( this ).replaceWith( this.childNodes );\r\n\t\t\t}\r\n\t\t}).end();\r\n\t}\r\n});\r\n\r\n\r\njQuery.expr.filters.hidden = function( elem ) {\r\n\t\/\/ Support: Opera <= 12.12\r\n\t\/\/ Opera reports offsetWidths and offsetHeights less than zero on some elements\r\n\treturn elem.offsetWidth <= 0 && elem.offsetHeight <= 0;\r\n};\r\njQuery.expr.filters.visible = function( elem ) {\r\n\treturn !jQuery.expr.filters.hidden( elem );\r\n};\r\n\r\n\r\n\r\n\r\nvar r20 = \/%20\/g,\r\n\trbracket = \/\\[\\]$\/,\r\n\trCRLF = \/\\r?\\n\/g,\r\n\trsubmitterTypes = \/^(?:submit|button|image|reset|file)$\/i,\r\n\trsubmittable = \/^(?:input|select|textarea|keygen)\/i;\r\n\r\nfunction buildParams( prefix, obj, traditional, add ) {\r\n\tvar name;\r\n\r\n\tif ( jQuery.isArray( obj ) ) {\r\n\t\t\/\/ Serialize array item.\r\n\t\tjQuery.each( obj, function( i, v ) {\r\n\t\t\tif ( traditional || rbracket.test( prefix ) ) {\r\n\t\t\t\t\/\/ Treat each array item as a scalar.\r\n\t\t\t\tadd( prefix, v );\r\n\r\n\t\t\t} else {\r\n\t\t\t\t\/\/ Item is non-scalar (array or object), encode its numeric index.\r\n\t\t\t\tbuildParams( prefix + \"[\" + ( typeof v === \"object\" ? i : \"\" ) + \"]\", v, traditional, add );\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t} else if ( !traditional && jQuery.type( obj ) === \"object\" ) {\r\n\t\t\/\/ Serialize object item.\r\n\t\tfor ( name in obj ) {\r\n\t\t\tbuildParams( prefix + \"[\" + name + \"]\", obj[ name ], traditional, add );\r\n\t\t}\r\n\r\n\t} else {\r\n\t\t\/\/ Serialize scalar item.\r\n\t\tadd( prefix, obj );\r\n\t}\r\n}\r\n\r\n\/\/ Serialize an array of form elements or a set of\r\n\/\/ key\/values into a query string\r\njQuery.param = function( a, traditional ) {\r\n\tvar prefix,\r\n\t\ts = [],\r\n\t\tadd = function( key, value ) {\r\n\t\t\t\/\/ If value is a function, invoke it and return its value\r\n\t\t\tvalue = jQuery.isFunction( value ) ? value() : ( value == null ? \"\" : value );\r\n\t\t\ts[ s.length ] = encodeURIComponent( key ) + \"=\" + encodeURIComponent( value );\r\n\t\t};\r\n\r\n\t\/\/ Set traditional to true for jQuery <= 1.3.2 behavior.\r\n\tif ( traditional === undefined ) {\r\n\t\ttraditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;\r\n\t}\r\n\r\n\t\/\/ If an array was passed in, assume that it is an array of form elements.\r\n\tif ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {\r\n\t\t\/\/ Serialize the form elements\r\n\t\tjQuery.each( a, function() {\r\n\t\t\tadd( this.name, this.value );\r\n\t\t});\r\n\r\n\t} else {\r\n\t\t\/\/ If traditional, encode the \"old\" way (the way 1.3.2 or older\r\n\t\t\/\/ did it), otherwise encode params recursively.\r\n\t\tfor ( prefix in a ) {\r\n\t\t\tbuildParams( prefix, a[ prefix ], traditional, add );\r\n\t\t}\r\n\t}\r\n\r\n\t\/\/ Return the resulting serialization\r\n\treturn s.join( \"&\" ).replace( r20, \"+\" );\r\n};\r\n\r\njQuery.fn.extend({\r\n\tserialize: function() {\r\n\t\treturn jQuery.param( this.serializeArray() );\r\n\t},\r\n\tserializeArray: function() {\r\n\t\treturn this.map(function() {\r\n\t\t\t\/\/ Can add propHook for \"elements\" to filter or add form elements\r\n\t\t\tvar elements = jQuery.prop( this, \"elements\" );\r\n\t\t\treturn elements ? jQuery.makeArray( elements ) : this;\r\n\t\t})\r\n\t\t.filter(function() {\r\n\t\t\tvar type = this.type;\r\n\r\n\t\t\t\/\/ Use .is( \":disabled\" ) so that fieldset[disabled] works\r\n\t\t\treturn this.name && !jQuery( this ).is( \":disabled\" ) &&\r\n\t\t\t\trsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&\r\n\t\t\t\t( this.checked || !rcheckableType.test( type ) );\r\n\t\t})\r\n\t\t.map(function( i, elem ) {\r\n\t\t\tvar val = jQuery( this ).val();\r\n\r\n\t\t\treturn val == null ?\r\n\t\t\t\tnull :\r\n\t\t\t\tjQuery.isArray( val ) ?\r\n\t\t\t\t\tjQuery.map( val, function( val ) {\r\n\t\t\t\t\t\treturn { name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\r\n\t\t\t\t\t}) :\r\n\t\t\t\t\t{ name: elem.name, value: val.replace( rCRLF, \"\\r\\n\" ) };\r\n\t\t}).get();\r\n\t}\r\n});\r\n\r\n\r\njQuery.ajaxSettings.xhr = function() {\r\n\ttry {\r\n\t\treturn new XMLHttpRequest();\r\n\t} catch( e ) {}\r\n};\r\n\r\nvar xhrId = 0,\r\n\txhrCallbacks = {},\r\n\txhrSuccessStatus = {\r\n\t\t\/\/ file protocol always yields status code 0, assume 200\r\n\t\t0: 200,\r\n\t\t\/\/ Support: IE9\r\n\t\t\/\/ #1450: sometimes IE returns 1223 when it should be 204\r\n\t\t1223: 204\r\n\t},\r\n\txhrSupported = jQuery.ajaxSettings.xhr();\r\n\r\n\/\/ Support: IE9\r\n\/\/ Open requests must be manually aborted on unload (#5280)\r\n\/\/ See https:\/\/support.microsoft.com\/kb\/2856746 for more info\r\nif ( window.attachEvent ) {\r\n\twindow.attachEvent( \"onunload\", function() {\r\n\t\tfor ( var key in xhrCallbacks ) {\r\n\t\t\txhrCallbacks[ key ]();\r\n\t\t}\r\n\t});\r\n}\r\n\r\nsupport.cors = !!xhrSupported && ( \"withCredentials\" in xhrSupported );\r\nsupport.ajax = xhrSupported = !!xhrSupported;\r\n\r\njQuery.ajaxTransport(function( options ) {\r\n\tvar callback;\r\n\r\n\t\/\/ Cross domain only allowed if supported through XMLHttpRequest\r\n\tif ( support.cors || xhrSupported && !options.crossDomain ) {\r\n\t\treturn {\r\n\t\t\tsend: function( headers, complete ) {\r\n\t\t\t\tvar i,\r\n\t\t\t\t\txhr = options.xhr(),\r\n\t\t\t\t\tid = ++xhrId;\r\n\r\n\t\t\t\txhr.open( options.type, options.url, options.async, options.username, options.password );\r\n\r\n\t\t\t\t\/\/ Apply custom fields if provided\r\n\t\t\t\tif ( options.xhrFields ) {\r\n\t\t\t\t\tfor ( i in options.xhrFields ) {\r\n\t\t\t\t\t\txhr[ i ] = options.xhrFields[ i ];\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Override mime type if needed\r\n\t\t\t\tif ( options.mimeType && xhr.overrideMimeType ) {\r\n\t\t\t\t\txhr.overrideMimeType( options.mimeType );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ X-Requested-With header\r\n\t\t\t\t\/\/ For cross-domain requests, seeing as conditions for a preflight are\r\n\t\t\t\t\/\/ akin to a jigsaw puzzle, we simply never set it to be sure.\r\n\t\t\t\t\/\/ (it can always be set on a per-request basis or even using ajaxSetup)\r\n\t\t\t\t\/\/ For same-domain requests, won\'t change header if already provided.\r\n\t\t\t\tif ( !options.crossDomain && !headers[\"X-Requested-With\"] ) {\r\n\t\t\t\t\theaders[\"X-Requested-With\"] = \"XMLHttpRequest\";\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Set headers\r\n\t\t\t\tfor ( i in headers ) {\r\n\t\t\t\t\txhr.setRequestHeader( i, headers[ i ] );\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Callback\r\n\t\t\t\tcallback = function( type ) {\r\n\t\t\t\t\treturn function() {\r\n\t\t\t\t\t\tif ( callback ) {\r\n\t\t\t\t\t\t\tdelete xhrCallbacks[ id ];\r\n\t\t\t\t\t\t\tcallback = xhr.onload = xhr.onerror = null;\r\n\r\n\t\t\t\t\t\t\tif ( type === \"abort\" ) {\r\n\t\t\t\t\t\t\t\txhr.abort();\r\n\t\t\t\t\t\t\t} else if ( type === \"error\" ) {\r\n\t\t\t\t\t\t\t\tcomplete(\r\n\t\t\t\t\t\t\t\t\t\/\/ file: protocol always yields status 0; see #8605, #14207\r\n\t\t\t\t\t\t\t\t\txhr.status,\r\n\t\t\t\t\t\t\t\t\txhr.statusText\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\t\tcomplete(\r\n\t\t\t\t\t\t\t\t\txhrSuccessStatus[ xhr.status ] || xhr.status,\r\n\t\t\t\t\t\t\t\t\txhr.statusText,\r\n\t\t\t\t\t\t\t\t\t\/\/ Support: IE9\r\n\t\t\t\t\t\t\t\t\t\/\/ Accessing binary-data responseText throws an exception\r\n\t\t\t\t\t\t\t\t\t\/\/ (#11426)\r\n\t\t\t\t\t\t\t\t\ttypeof xhr.responseText === \"string\" ? {\r\n\t\t\t\t\t\t\t\t\t\ttext: xhr.responseText\r\n\t\t\t\t\t\t\t\t\t} : undefined,\r\n\t\t\t\t\t\t\t\t\txhr.getAllResponseHeaders()\r\n\t\t\t\t\t\t\t\t);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t};\r\n\t\t\t\t};\r\n\r\n\t\t\t\t\/\/ Listen to events\r\n\t\t\t\txhr.onload = callback();\r\n\t\t\t\txhr.onerror = callback(\"error\");\r\n\r\n\t\t\t\t\/\/ Create the abort callback\r\n\t\t\t\tcallback = xhrCallbacks[ id ] = callback(\"abort\");\r\n\r\n\t\t\t\ttry {\r\n\t\t\t\t\t\/\/ Do send the request (this may raise an exception)\r\n\t\t\t\t\txhr.send( options.hasContent && options.data || null );\r\n\t\t\t\t} catch ( e ) {\r\n\t\t\t\t\t\/\/ #14683: Only rethrow if this hasn\'t been notified as an error yet\r\n\t\t\t\t\tif ( callback ) {\r\n\t\t\t\t\t\tthrow e;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t},\r\n\r\n\t\t\tabort: function() {\r\n\t\t\t\tif ( callback ) {\r\n\t\t\t\t\tcallback();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\n\/\/ Install script dataType\r\njQuery.ajaxSetup({\r\n\taccepts: {\r\n\t\tscript: \"text\/javascript, application\/javascript, application\/ecmascript, application\/x-ecmascript\"\r\n\t},\r\n\tcontents: {\r\n\t\tscript: \/(?:java|ecma)script\/\r\n\t},\r\n\tconverters: {\r\n\t\t\"text script\": function( text ) {\r\n\t\t\tjQuery.globalEval( text );\r\n\t\t\treturn text;\r\n\t\t}\r\n\t}\r\n});\r\n\r\n\/\/ Handle cache\'s special case and crossDomain\r\njQuery.ajaxPrefilter( \"script\", function( s ) {\r\n\tif ( s.cache === undefined ) {\r\n\t\ts.cache = false;\r\n\t}\r\n\tif ( s.crossDomain ) {\r\n\t\ts.type = \"GET\";\r\n\t}\r\n});\r\n\r\n\/\/ Bind script tag hack transport\r\njQuery.ajaxTransport( \"script\", function( s ) {\r\n\t\/\/ This transport only deals with cross domain requests\r\n\tif ( s.crossDomain ) {\r\n\t\tvar script, callback;\r\n\t\treturn {\r\n\t\t\tsend: function( _, complete ) {\r\n\t\t\t\tscript = jQuery(\"<script>\").prop({\r\n\t\t\t\t\tasync: true,\r\n\t\t\t\t\tcharset: s.scriptCharset,\r\n\t\t\t\t\tsrc: s.url\r\n\t\t\t\t}).on(\r\n\t\t\t\t\t\"load error\",\r\n\t\t\t\t\tcallback = function( evt ) {\r\n\t\t\t\t\t\tscript.remove();\r\n\t\t\t\t\t\tcallback = null;\r\n\t\t\t\t\t\tif ( evt ) {\r\n\t\t\t\t\t\t\tcomplete( evt.type === \"error\" ? 404 : 200, evt.type );\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t);\r\n\t\t\t\tdocument.head.appendChild( script[ 0 ] );\r\n\t\t\t},\r\n\t\t\tabort: function() {\r\n\t\t\t\tif ( callback ) {\r\n\t\t\t\t\tcallback();\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t};\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\nvar oldCallbacks = [],\r\n\trjsonp = \/(=)\\?(?=&|$)|\\?\\?\/;\r\n\r\n\/\/ Default jsonp settings\r\njQuery.ajaxSetup({\r\n\tjsonp: \"callback\",\r\n\tjsonpCallback: function() {\r\n\t\tvar callback = oldCallbacks.pop() || ( jQuery.expando + \"_\" + ( nonce++ ) );\r\n\t\tthis[ callback ] = true;\r\n\t\treturn callback;\r\n\t}\r\n});\r\n\r\n\/\/ Detect, normalize options and install callbacks for jsonp requests\r\njQuery.ajaxPrefilter( \"json jsonp\", function( s, originalSettings, jqXHR ) {\r\n\r\n\tvar callbackName, overwritten, responseContainer,\r\n\t\tjsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?\r\n\t\t\t\"url\" :\r\n\t\t\ttypeof s.data === \"string\" && !( s.contentType || \"\" ).indexOf(\"application\/x-www-form-urlencoded\") && rjsonp.test( s.data ) && \"data\"\r\n\t\t);\r\n\r\n\t\/\/ Handle iff the expected data type is \"jsonp\" or we have a parameter to set\r\n\tif ( jsonProp || s.dataTypes[ 0 ] === \"jsonp\" ) {\r\n\r\n\t\t\/\/ Get callback name, remembering preexisting value associated with it\r\n\t\tcallbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?\r\n\t\t\ts.jsonpCallback() :\r\n\t\t\ts.jsonpCallback;\r\n\r\n\t\t\/\/ Insert callback into url or form data\r\n\t\tif ( jsonProp ) {\r\n\t\t\ts[ jsonProp ] = s[ jsonProp ].replace( rjsonp, \"$1\" + callbackName );\r\n\t\t} else if ( s.jsonp !== false ) {\r\n\t\t\ts.url += ( rquery.test( s.url ) ? \"&\" : \"?\" ) + s.jsonp + \"=\" + callbackName;\r\n\t\t}\r\n\r\n\t\t\/\/ Use data converter to retrieve json after script execution\r\n\t\ts.converters[\"script json\"] = function() {\r\n\t\t\tif ( !responseContainer ) {\r\n\t\t\t\tjQuery.error( callbackName + \" was not called\" );\r\n\t\t\t}\r\n\t\t\treturn responseContainer[ 0 ];\r\n\t\t};\r\n\r\n\t\t\/\/ force json dataType\r\n\t\ts.dataTypes[ 0 ] = \"json\";\r\n\r\n\t\t\/\/ Install callback\r\n\t\toverwritten = window[ callbackName ];\r\n\t\twindow[ callbackName ] = function() {\r\n\t\t\tresponseContainer = arguments;\r\n\t\t};\r\n\r\n\t\t\/\/ Clean-up function (fires after converters)\r\n\t\tjqXHR.always(function() {\r\n\t\t\t\/\/ Restore preexisting value\r\n\t\t\twindow[ callbackName ] = overwritten;\r\n\r\n\t\t\t\/\/ Save back as free\r\n\t\t\tif ( s[ callbackName ] ) {\r\n\t\t\t\t\/\/ make sure that re-using the options doesn\'t screw things around\r\n\t\t\t\ts.jsonpCallback = originalSettings.jsonpCallback;\r\n\r\n\t\t\t\t\/\/ save the callback name for future use\r\n\t\t\t\toldCallbacks.push( callbackName );\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Call if it was a function and we have a response\r\n\t\t\tif ( responseContainer && jQuery.isFunction( overwritten ) ) {\r\n\t\t\t\toverwritten( responseContainer[ 0 ] );\r\n\t\t\t}\r\n\r\n\t\t\tresponseContainer = overwritten = undefined;\r\n\t\t});\r\n\r\n\t\t\/\/ Delegate to script\r\n\t\treturn \"script\";\r\n\t}\r\n});\r\n\r\n\r\n\r\n\r\n\/\/ data: string of html\r\n\/\/ context (optional): If specified, the fragment will be created in this context, defaults to document\r\n\/\/ keepScripts (optional): If true, will include scripts passed in the html string\r\njQuery.parseHTML = function( data, context, keepScripts ) {\r\n\tif ( !data || typeof data !== \"string\" ) {\r\n\t\treturn null;\r\n\t}\r\n\tif ( typeof context === \"boolean\" ) {\r\n\t\tkeepScripts = context;\r\n\t\tcontext = false;\r\n\t}\r\n\tcontext = context || document;\r\n\r\n\tvar parsed = rsingleTag.exec( data ),\r\n\t\tscripts = !keepScripts && [];\r\n\r\n\t\/\/ Single tag\r\n\tif ( parsed ) {\r\n\t\treturn [ context.createElement( parsed[1] ) ];\r\n\t}\r\n\r\n\tparsed = jQuery.buildFragment( [ data ], context, scripts );\r\n\r\n\tif ( scripts && scripts.length ) {\r\n\t\tjQuery( scripts ).remove();\r\n\t}\r\n\r\n\treturn jQuery.merge( [], parsed.childNodes );\r\n};\r\n\r\n\r\n\/\/ Keep a copy of the old load method\r\nvar _load = jQuery.fn.load;\r\n\r\n\/**\r\n * Load a url into a page\r\n *\/\r\njQuery.fn.load = function( url, params, callback ) {\r\n\tif ( typeof url !== \"string\" && _load ) {\r\n\t\treturn _load.apply( this, arguments );\r\n\t}\r\n\r\n\tvar selector, type, response,\r\n\t\tself = this,\r\n\t\toff = url.indexOf(\" \");\r\n\r\n\tif ( off >= 0 ) {\r\n\t\tselector = jQuery.trim( url.slice( off ) );\r\n\t\turl = url.slice( 0, off );\r\n\t}\r\n\r\n\t\/\/ If it\'s a function\r\n\tif ( jQuery.isFunction( params ) ) {\r\n\r\n\t\t\/\/ We assume that it\'s the callback\r\n\t\tcallback = params;\r\n\t\tparams = undefined;\r\n\r\n\t\/\/ Otherwise, build a param string\r\n\t} else if ( params && typeof params === \"object\" ) {\r\n\t\ttype = \"POST\";\r\n\t}\r\n\r\n\t\/\/ If we have elements to modify, make the request\r\n\tif ( self.length > 0 ) {\r\n\t\tjQuery.ajax({\r\n\t\t\turl: url,\r\n\r\n\t\t\t\/\/ if \"type\" variable is undefined, then \"GET\" method will be used\r\n\t\t\ttype: type,\r\n\t\t\tdataType: \"html\",\r\n\t\t\tdata: params\r\n\t\t}).done(function( responseText ) {\r\n\r\n\t\t\t\/\/ Save response for use in complete callback\r\n\t\t\tresponse = arguments;\r\n\r\n\t\t\tself.html( selector ?\r\n\r\n\t\t\t\t\/\/ If a selector was specified, locate the right elements in a dummy div\r\n\t\t\t\t\/\/ Exclude scripts to avoid IE \'Permission Denied\' errors\r\n\t\t\t\tjQuery(\"<div>\").append( jQuery.parseHTML( responseText ) ).find( selector ) :\r\n\r\n\t\t\t\t\/\/ Otherwise use the full result\r\n\t\t\t\tresponseText );\r\n\r\n\t\t}).complete( callback && function( jqXHR, status ) {\r\n\t\t\tself.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );\r\n\t\t});\r\n\t}\r\n\r\n\treturn this;\r\n};\r\n\r\n\r\n\r\n\r\n\/\/ Attach a bunch of functions for handling common AJAX events\r\njQuery.each( [ \"ajaxStart\", \"ajaxStop\", \"ajaxComplete\", \"ajaxError\", \"ajaxSuccess\", \"ajaxSend\" ], function( i, type ) {\r\n\tjQuery.fn[ type ] = function( fn ) {\r\n\t\treturn this.on( type, fn );\r\n\t};\r\n});\r\n\r\n\r\n\r\n\r\njQuery.expr.filters.animated = function( elem ) {\r\n\treturn jQuery.grep(jQuery.timers, function( fn ) {\r\n\t\treturn elem === fn.elem;\r\n\t}).length;\r\n};\r\n\r\n\r\n\r\n\r\nvar docElem = window.document.documentElement;\r\n\r\n\/**\r\n * Gets a window from an element\r\n *\/\r\nfunction getWindow( elem ) {\r\n\treturn jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;\r\n}\r\n\r\njQuery.offset = {\r\n\tsetOffset: function( elem, options, i ) {\r\n\t\tvar curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,\r\n\t\t\tposition = jQuery.css( elem, \"position\" ),\r\n\t\t\tcurElem = jQuery( elem ),\r\n\t\t\tprops = {};\r\n\r\n\t\t\/\/ Set position first, in-case top\/left are set even on static elem\r\n\t\tif ( position === \"static\" ) {\r\n\t\t\telem.style.position = \"relative\";\r\n\t\t}\r\n\r\n\t\tcurOffset = curElem.offset();\r\n\t\tcurCSSTop = jQuery.css( elem, \"top\" );\r\n\t\tcurCSSLeft = jQuery.css( elem, \"left\" );\r\n\t\tcalculatePosition = ( position === \"absolute\" || position === \"fixed\" ) &&\r\n\t\t\t( curCSSTop + curCSSLeft ).indexOf(\"auto\") > -1;\r\n\r\n\t\t\/\/ Need to be able to calculate position if either\r\n\t\t\/\/ top or left is auto and position is either absolute or fixed\r\n\t\tif ( calculatePosition ) {\r\n\t\t\tcurPosition = curElem.position();\r\n\t\t\tcurTop = curPosition.top;\r\n\t\t\tcurLeft = curPosition.left;\r\n\r\n\t\t} else {\r\n\t\t\tcurTop = parseFloat( curCSSTop ) || 0;\r\n\t\t\tcurLeft = parseFloat( curCSSLeft ) || 0;\r\n\t\t}\r\n\r\n\t\tif ( jQuery.isFunction( options ) ) {\r\n\t\t\toptions = options.call( elem, i, curOffset );\r\n\t\t}\r\n\r\n\t\tif ( options.top != null ) {\r\n\t\t\tprops.top = ( options.top - curOffset.top ) + curTop;\r\n\t\t}\r\n\t\tif ( options.left != null ) {\r\n\t\t\tprops.left = ( options.left - curOffset.left ) + curLeft;\r\n\t\t}\r\n\r\n\t\tif ( \"using\" in options ) {\r\n\t\t\toptions.using.call( elem, props );\r\n\r\n\t\t} else {\r\n\t\t\tcurElem.css( props );\r\n\t\t}\r\n\t}\r\n};\r\n\r\njQuery.fn.extend({\r\n\toffset: function( options ) {\r\n\t\tif ( arguments.length ) {\r\n\t\t\treturn options === undefined ?\r\n\t\t\t\tthis :\r\n\t\t\t\tthis.each(function( i ) {\r\n\t\t\t\t\tjQuery.offset.setOffset( this, options, i );\r\n\t\t\t\t});\r\n\t\t}\r\n\r\n\t\tvar docElem, win,\r\n\t\t\telem = this[ 0 ],\r\n\t\t\tbox = { top: 0, left: 0 },\r\n\t\t\tdoc = elem && elem.ownerDocument;\r\n\r\n\t\tif ( !doc ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tdocElem = doc.documentElement;\r\n\r\n\t\t\/\/ Make sure it\'s not a disconnected DOM node\r\n\t\tif ( !jQuery.contains( docElem, elem ) ) {\r\n\t\t\treturn box;\r\n\t\t}\r\n\r\n\t\t\/\/ Support: BlackBerry 5, iOS 3 (original iPhone)\r\n\t\t\/\/ If we don\'t have gBCR, just use 0,0 rather than error\r\n\t\tif ( typeof elem.getBoundingClientRect !== strundefined ) {\r\n\t\t\tbox = elem.getBoundingClientRect();\r\n\t\t}\r\n\t\twin = getWindow( doc );\r\n\t\treturn {\r\n\t\t\ttop: box.top + win.pageYOffset - docElem.clientTop,\r\n\t\t\tleft: box.left + win.pageXOffset - docElem.clientLeft\r\n\t\t};\r\n\t},\r\n\r\n\tposition: function() {\r\n\t\tif ( !this[ 0 ] ) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tvar offsetParent, offset,\r\n\t\t\telem = this[ 0 ],\r\n\t\t\tparentOffset = { top: 0, left: 0 };\r\n\r\n\t\t\/\/ Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent\r\n\t\tif ( jQuery.css( elem, \"position\" ) === \"fixed\" ) {\r\n\t\t\t\/\/ Assume getBoundingClientRect is there when computed position is fixed\r\n\t\t\toffset = elem.getBoundingClientRect();\r\n\r\n\t\t} else {\r\n\t\t\t\/\/ Get *real* offsetParent\r\n\t\t\toffsetParent = this.offsetParent();\r\n\r\n\t\t\t\/\/ Get correct offsets\r\n\t\t\toffset = this.offset();\r\n\t\t\tif ( !jQuery.nodeName( offsetParent[ 0 ], \"html\" ) ) {\r\n\t\t\t\tparentOffset = offsetParent.offset();\r\n\t\t\t}\r\n\r\n\t\t\t\/\/ Add offsetParent borders\r\n\t\t\tparentOffset.top += jQuery.css( offsetParent[ 0 ], \"borderTopWidth\", true );\r\n\t\t\tparentOffset.left += jQuery.css( offsetParent[ 0 ], \"borderLeftWidth\", true );\r\n\t\t}\r\n\r\n\t\t\/\/ Subtract parent offsets and element margins\r\n\t\treturn {\r\n\t\t\ttop: offset.top - parentOffset.top - jQuery.css( elem, \"marginTop\", true ),\r\n\t\t\tleft: offset.left - parentOffset.left - jQuery.css( elem, \"marginLeft\", true )\r\n\t\t};\r\n\t},\r\n\r\n\toffsetParent: function() {\r\n\t\treturn this.map(function() {\r\n\t\t\tvar offsetParent = this.offsetParent || docElem;\r\n\r\n\t\t\twhile ( offsetParent && ( !jQuery.nodeName( offsetParent, \"html\" ) && jQuery.css( offsetParent, \"position\" ) === \"static\" ) ) {\r\n\t\t\t\toffsetParent = offsetParent.offsetParent;\r\n\t\t\t}\r\n\r\n\t\t\treturn offsetParent || docElem;\r\n\t\t});\r\n\t}\r\n});\r\n\r\n\/\/ Create scrollLeft and scrollTop methods\r\njQuery.each( { scrollLeft: \"pageXOffset\", scrollTop: \"pageYOffset\" }, function( method, prop ) {\r\n\tvar top = \"pageYOffset\" === prop;\r\n\r\n\tjQuery.fn[ method ] = function( val ) {\r\n\t\treturn access( this, function( elem, method, val ) {\r\n\t\t\tvar win = getWindow( elem );\r\n\r\n\t\t\tif ( val === undefined ) {\r\n\t\t\t\treturn win ? win[ prop ] : elem[ method ];\r\n\t\t\t}\r\n\r\n\t\t\tif ( win ) {\r\n\t\t\t\twin.scrollTo(\r\n\t\t\t\t\t!top ? val : window.pageXOffset,\r\n\t\t\t\t\ttop ? val : window.pageYOffset\r\n\t\t\t\t);\r\n\r\n\t\t\t} else {\r\n\t\t\t\telem[ method ] = val;\r\n\t\t\t}\r\n\t\t}, method, val, arguments.length, null );\r\n\t};\r\n});\r\n\r\n\/\/ Support: Safari<7+, Chrome<37+\r\n\/\/ Add the top\/left cssHooks using jQuery.fn.position\r\n\/\/ Webkit bug: https:\/\/bugs.webkit.org\/show_bug.cgi?id=29084\r\n\/\/ Blink bug: https:\/\/code.google.com\/p\/chromium\/issues\/detail?id=229280\r\n\/\/ getComputedStyle returns percent when specified for top\/left\/bottom\/right;\r\n\/\/ rather than make the css module depend on the offset module, just check for it here\r\njQuery.each( [ \"top\", \"left\" ], function( i, prop ) {\r\n\tjQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,\r\n\t\tfunction( elem, computed ) {\r\n\t\t\tif ( computed ) {\r\n\t\t\t\tcomputed = curCSS( elem, prop );\r\n\t\t\t\t\/\/ If curCSS returns percentage, fallback to offset\r\n\t\t\t\treturn rnumnonpx.test( computed ) ?\r\n\t\t\t\t\tjQuery( elem ).position()[ prop ] + \"px\" :\r\n\t\t\t\t\tcomputed;\r\n\t\t\t}\r\n\t\t}\r\n\t);\r\n});\r\n\r\n\r\n\/\/ Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods\r\njQuery.each( { Height: \"height\", Width: \"width\" }, function( name, type ) {\r\n\tjQuery.each( { padding: \"inner\" + name, content: type, \"\": \"outer\" + name }, function( defaultExtra, funcName ) {\r\n\t\t\/\/ Margin is only for outerHeight, outerWidth\r\n\t\tjQuery.fn[ funcName ] = function( margin, value ) {\r\n\t\t\tvar chainable = arguments.length && ( defaultExtra || typeof margin !== \"boolean\" ),\r\n\t\t\t\textra = defaultExtra || ( margin === true || value === true ? \"margin\" : \"border\" );\r\n\r\n\t\t\treturn access( this, function( elem, type, value ) {\r\n\t\t\t\tvar doc;\r\n\r\n\t\t\t\tif ( jQuery.isWindow( elem ) ) {\r\n\t\t\t\t\t\/\/ As of 5\/8\/2012 this will yield incorrect results for Mobile Safari, but there\r\n\t\t\t\t\t\/\/ isn\'t a whole lot we can do. See pull request at this URL for discussion:\r\n\t\t\t\t\t\/\/ https:\/\/github.com\/jquery\/jquery\/pull\/764\r\n\t\t\t\t\treturn elem.document.documentElement[ \"client\" + name ];\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\/\/ Get document width or height\r\n\t\t\t\tif ( elem.nodeType === 9 ) {\r\n\t\t\t\t\tdoc = elem.documentElement;\r\n\r\n\t\t\t\t\t\/\/ Either scroll[Width\/Height] or offset[Width\/Height] or client[Width\/Height],\r\n\t\t\t\t\t\/\/ whichever is greatest\r\n\t\t\t\t\treturn Math.max(\r\n\t\t\t\t\t\telem.body[ \"scroll\" + name ], doc[ \"scroll\" + name ],\r\n\t\t\t\t\t\telem.body[ \"offset\" + name ], doc[ \"offset\" + name ],\r\n\t\t\t\t\t\tdoc[ \"client\" + name ]\r\n\t\t\t\t\t);\r\n\t\t\t\t}\r\n\r\n\t\t\t\treturn value === undefined ?\r\n\t\t\t\t\t\/\/ Get width or height on the element, requesting but not forcing parseFloat\r\n\t\t\t\t\tjQuery.css( elem, type, extra ) :\r\n\r\n\t\t\t\t\t\/\/ Set width or height on the element\r\n\t\t\t\t\tjQuery.style( elem, type, value, extra );\r\n\t\t\t}, type, chainable ? margin : undefined, chainable, null );\r\n\t\t};\r\n\t});\r\n});\r\n\r\n\r\n\/\/ The number of elements contained in the matched element set\r\njQuery.fn.size = function() {\r\n\treturn this.length;\r\n};\r\n\r\njQuery.fn.andSelf = jQuery.fn.addBack;\r\n\r\n\r\n\r\n\r\n\/\/ Register as a named AMD module, since jQuery can be concatenated with other\r\n\/\/ files that may use define, but not via a proper concatenation script that\r\n\/\/ understands anonymous AMD modules. A named AMD is safest and most robust\r\n\/\/ way to register. Lowercase jquery is used because AMD module names are\r\n\/\/ derived from file names, and jQuery is normally delivered in a lowercase\r\n\/\/ file name. Do this after creating the global so that if an AMD module wants\r\n\/\/ to call noConflict to hide this version of jQuery, it will work.\r\n\r\n\/\/ Note that for maximum portability, libraries that are not jQuery should\r\n\/\/ declare themselves as anonymous modules, and avoid setting a global if an\r\n\/\/ AMD loader is present. jQuery is a special case. For more information, see\r\n\/\/ https:\/\/github.com\/jrburke\/requirejs\/wiki\/Updating-existing-libraries#wiki-anon\r\n\r\nif ( typeof define === \"function\" && define.amd ) {\r\n\tdefine( \"jquery\", [], function() {\r\n\t\treturn jQuery;\r\n\t});\r\n}\r\n\r\n\r\n\r\n\r\nvar\r\n\t\/\/ Map over jQuery in case of overwrite\r\n\t_jQuery = window.jQuery,\r\n\r\n\t\/\/ Map over the $ in case of overwrite\r\n\t_$ = window.$;\r\n\r\njQuery.noConflict = function( deep ) {\r\n\tif ( window.$ === jQuery ) {\r\n\t\twindow.$ = _$;\r\n\t}\r\n\r\n\tif ( deep && window.jQuery === jQuery ) {\r\n\t\twindow.jQuery = _jQuery;\r\n\t}\r\n\r\n\treturn jQuery;\r\n};\r\n\r\n\/\/ Expose jQuery and $ identifiers, even in AMD\r\n\/\/ (#7102#comment:10, https:\/\/github.com\/jquery\/jquery\/pull\/557)\r\n\/\/ and CommonJS for browser emulators (#13566)\r\nif ( typeof noGlobal === strundefined ) {\r\n\twindow.jQuery = window.$ = jQuery;\r\n}\r\n\r\n\r\n\r\n\r\nreturn jQuery;\r\n\r\n}));\r\n\r\n(function (f, l, h) {\r\n  if (!l) {\r\n    if (!(window.JSON && window.sessionStorage && window.localStorage && Array.prototype.sort && Array.prototype.join)) return console.log(\"Minimum requirements not met to run AWC.\");\r\n    var g = {\r\n      version: \"2-0\",\r\n      mobile: window.AWC_dev_mobile || !(!navigator.userAgent.match(\/Android|webOS|BlackBerry|iP([oa]d|hone)|MeeGo|Mobile|PlayBook\/i) && !navigator.userAgent.match(\/Windows Phone\/i)),\r\n      logged_in: !1,\r\n      last_data: {\r\n        connected: !1,\r\n        users: [],\r\n        messages: []\r\n      },\r\n      user_data: {},\r\n      inactive_refreshes: 0,\r\n      refresh_timeout: null,\r\n      plain_text: \"\",\r\n      config: {\r\n        chat_title: \"AvacWeb Chatbox\",\r\n        stylesheet: \"http:\/\/chat.avacweb.net\/avacweb_chat_2.css\",\r\n        allow_private_messaging: 1,\r\n        allow_user_resize: 1,\r\n        custom_placement: null,\r\n        allow_copyrights: 1,\r\n        loading_image: \"http:\/\/i40.servimg.com\/u\/f40\/17\/20\/25\/96\/26-110.gif\",\r\n        template: {\r\n          markup: \'<div id=\"avacweb_chat\" style=\"display:none\"><div id=\"awc_header\"><div id=\"awc_buttons\"><\/div><span id=\"awc_title\"><\/span><\/div><div id=\"awc_userlist\"><\/div><div id=\"awc_rightbox\"><div id=\"awc_tabs\"><\/div><div id=\"awc_messages\"><\/div><\/div><div id=\"awc_footer\"><div id=\"awc_form\"><input name=\"message\" id=\"awc_message\" maxlength=\"1024\" autocomplete=\"off\" onkeydown=\"if(event.keyCode==13)avacweb_chat.submit()\"><\/div><\/div><\/div>\',\r\n          ids: {\r\n            header: \"awc_header\",\r\n            footer: \"awc_footer\",\r\n            userlist: \"awc_userlist\",\r\n            messages: \"awc_messages\",\r\n            messagebox: \"awc_message\",\r\n            tabs: \"awc_tabs\",\r\n            buttons: \"awc_buttons\",\r\n            title: \"awc_title\",\r\n            usercount: \"achat_user_count\",\r\n            chat: \"avacweb_chat\"\r\n          }\r\n        },\r\n        filters: {}\r\n      },\r\n      refresh_rates: {\r\n        normal: 3E3,\r\n        in10: 8E3,\r\n        in20: 2E4,\r\n        in30: 4E4,\r\n        in40: 6E4\r\n      },\r\n      init: function (a, b) {\r\n        var c = document.getElementById(\"achat_script\"),\r\n          d = this;\r\n        \/\/if (!c || \"script\" !== c.tagName.toLowerCase() || -1 === c.src.indexOf(\"avacweb.net\/v\" + this.version)) throw Error(\"Avacweb chat has detected that you have installed it from another source. To prevent theft and copyright issues AWC can only be used via the AWC server\");\r\n        this.tid = a;\r\n        this._user = b;\r\n        b.session_logged_in && (f(\"head\").prepend(\'<link rel=\"stylesheet\" href=\"\' + this.config.stylesheet + \'\">\'), c = f(this.config.custom_placement), c[0] ? c.html(\'<div id=\"avacweb_chat_holder\" class=\"custom_placement\' + (this.mobile ? \" mobile\" : \"\") + \'\"><\/div>\') : (c = \'<div id=\"avacweb_chat_button\" class=\"achat_button\" onclick=\"avacweb_chat.settings.toggle(\\\'open\\\');\">\' + this.t(\"Chat\") + \': <span id=\"achat_user_count\">0<\/span><\/div>\', f(document.body).append(c + \'<div id=\"avacweb_chat_holder\"\' + (this.mobile ? \' class=\"mobile\"\' : \"\") + \"><\/div>\")), this.settings.init(), f.get(\"\/chatbox\/actions.forum?archives=\" + this.settings.value(\"archives\") + \"&method=\" + (this.config.auto_log_in ? \"connect\" : \"get\") + \"&tid=\" + a, function (a) {\r\n          d.load_template.call(d, a)\r\n        }, \"json\"))\r\n      },\r\n      load_template: function (a) {\r\n        var b = this.config.template.markup,\r\n          c = document.getElementById(\"avacweb_chat_holder\");\r\n        if (c) {\r\n          c.innerHTML = b;\r\n          this.loading();\r\n          this.create_userbase(a.users);\r\n          this.get_template_item(\"title\").innerHTML = \'<span title=\"Avacweb Chat V\' + this.version + \' - Copyright (c) 2015\">\' + this.config.chat_title + \"<\/span>\";\r\n          b = \'<span class=\"achat_button\" id=\"achat_reading\" onclick=\"avacweb_chat.settings.toggle(\\\'reading\\\');\">\' + this.t(\"Reading\") + \"<\/span>\";\r\n          b += \'<span class=\"achat_button\" onclick=\"avacweb_chat.settings.toggle(\\\'archives\\\')\">\' + this.t(\"Archives\") + \': <span id=\"archives\">\' + (this.settings.on(\"archives\") ? this.t(\"On\") : this.t(\"Off\")) + \"<\/span><\/span>\";\r\n          b += \'<span class=\"achat_button\" onclick=\"avacweb_chat.log_in(1)\" style=\"color:red\">\' + this.t(\"Log Out\") + \"<\/span>\";\r\n          this.get_template_item(\"buttons\").innerHTML = b;\r\n          f(this.get_template_item(\"messagebox\")).after(\'<span class=\"achat_button\" onclick=\"avacweb_chat.submit()\">\' + this.t(\"Send\") + \"<\/span>\");\r\n          footer_html = \'<div onclick=\"avacweb_chat.showhide(\\\'achat_user_prefs\\\')\" class=\"achat_button\">\' + this.t(\"User Options\") + \"<\/div>\";\r\n          footer_html += \'<div id=\"achat_user_prefs\" style=\"display:none\"><\/div>\';\r\n          footer_html += \'<div id=\"achat_popup\" style=\"display:none;\"><span class=\"awc_x\" onclick=\"avacweb_chat.popup();\">x<\/span><p><\/p><\/div>\';\r\n          footer_html += \'<div class=\"achat_button\" onclick=\"avacweb_chat.showhide(\\\'achat_smilies\\\')\">\' + this.t(\"Smilies\") + \'<\/div><div id=\"achat_smilies\" style=\"display:none\"><\/div>\';\r\n          footer_html += \'<div class=\"achat_button\" id=\"achat_color_button\" onclick=\"avacweb_chat.showhide(\\\'achat_colors\\\')\">\' + this.t(\"Colors\") + \'<\/div><div id=\"achat_colors\" style=\"display:none\"><\/div>\';\r\n          window.AWC_update && this.cookie(\"update\") !== AWC_update.id && this._user.user_level && (footer_html += \'<div class=\"achat_button\" id=\"achat_update\" onclick=\"avacweb_chat.popup(\\\'update\\\')\">AWC Message!<\/div>\');\r\n          f(this.get_template_item(\"footer\")).append(footer_html);\r\n          this.get_template_item(\"chat\").style.display = this.settings.on(\"open\") || this.config.custom_placement ? \"\" : \"none\";\r\n          if (this.config.allow_user_resize && !this.mobile && !this.config.custom_placement) {\r\n            f(this.get_template_item(\"header\")).prepend(\'<div id=\"achat_dimensions\"><span id=\"achat_resizer\"><\/span><span id=\"achat_mover\"><\/span><\/div>\');\r\n            if (b = this.cookie(\"dimensions\")) {\r\n              var b = JSON.parse(b),\r\n                d;\r\n              for (d in b) this.get_template_item(\"chat\").style[d] = b[d]\r\n            }\r\n            f(\"#achat_resizer\").mousedown(function (a) {\r\n              0 === a.button && avacweb_chat.resize.init(a, \"drag\")\r\n            });\r\n            f(\"#achat_mover\").mousedown(function (a) {\r\n              0 === a.button && avacweb_chat.resize.init(a, \"move\")\r\n            })\r\n          }\r\n          this.config.allow_copyrights && f(this.get_template_item(\"chat\")).prepend(\'<span style=\"font-size: 0.8em;\">AWC2.0 &copy; Copyright 2015 <a href=\"http:\/\/avacweb.com\">AvacWeb<\/a> All rights reserved.<\/span>\');\r\n          this.switch_display(a.connected);\r\n          this.handle_data(a);\r\n          this.event.fire(\"onload\")\r\n        }\r\n      },\r\n      switch_display: function (a) {\r\n        0 === arguments.length && (a = this.logged_in);\r\n        this.logged_in = a;\r\n        var b = this.get_template_item(\"buttons\"),\r\n          c = this.get_template_item(\"footer\"),\r\n          d = this.get_template_item(\"tabs\");\r\n        a ? b.style.display = c.style.display = d.style.display = \"\" : (b.style.display = c.style.display = d.style.display = \"none\", this.get_template_item(\"messages\").innerHTML = \'<div id=\"achat_login\">\' + this.t(\"You are disconnected. Click log in to join the chat.\") + \'<br><br><div class=\"achat_button\" onclick=\"avacweb_chat.log_in()\">\' + this.t(\"Log In\") + \"<\/div><\/div>\")\r\n      },\r\n      log_in: function (a) {\r\n        this.last_data.messages = [];\r\n        var b = this;\r\n        this.refresh_timeout && clearTimeout(this.refresh_timeout);\r\n        a ? this.event.fire(\"onlogout\") && (this.switch_display(!1), f.get(\"\/chatbox\/actions.forum?method=disconnect&tid=\" + this.tid, function (a) {\r\n          b.handle_data.call(b, a)\r\n        })) : this.event.fire(\"onlogin\") && (this.loading(), f.get(\"\/chatbox\/actions.forum?archives=\" + this.settings.value(\"archives\") + \"&method=connect&tid=\" + this.tid, function (a) {\r\n          b.switch_display(!0);\r\n          b.handle_data.call(b, a)\r\n        }))\r\n      },\r\n      refresh: function () {\r\n        this.refresh_timeout && clearTimeout(this.refresh_timeout);\r\n        var a = avacweb_chat;\r\n        if (a.event.fire(\"onrefresh\", a.logged_in)) {\r\n          if (a.logged_in && a.settings.on(\"disable timeout\")) return a.simple_send(\"method=send&message=\");\r\n          f.get(\"\/chatbox\/actions.forum?archives=\" + a.settings.value(\"archives\") + \"&method=get&tid=\" + this.tid, function (b) {\r\n            a.handle_data.call(a, b)\r\n          }, \"json\")\r\n        }\r\n      },\r\n      submit: function (a) {\r\n        if (!a) {\r\n          var b = this.get_template_item(\"messagebox\");\r\n          a = b.value;\r\n          b.value = \"\";\r\n          b.focus()\r\n        }\r\n        if (this.event.fire(\"onsend\", a)) {\r\n          a = a.replace(\/^\\s+\/, \"\");\r\n          this.tabs.in_tab() && \"\/\" !== a.charAt(0) && ((b = this.tabs.get()) && b.user_tab ? a = \"\/tab(\" + b.name + \") \" + a : b && (a = \"\/pm(\" + b.users.join(\", \") + \") \" + a));\r\n          if (\"\/\" === a.charAt(0)) {\r\n            b = this.parse_command(a);\r\n            if (!1 === b) return;\r\n            \"string\" === typeof b && (a = b)\r\n          }\r\n          var c = \"method=send&message=\" + encodeURIComponent(a),\r\n            d = this;\r\n          this.array_walk([\"bold\", \"italic\", \"underline\", \"strike\"], function (a) {\r\n            d.settings.on(a) && (c += \"&\" + a + \"=on\")\r\n          });\r\n          c += \"&scolor=\" + this.settings.value(\"color\");\r\n          this.simple_send(c);\r\n          return !1\r\n        }\r\n      },\r\n      simple_send: function (a) {\r\n        var b = this;\r\n        f.post(\"\/chatbox\/actions.forum?archives=\" + this.settings.value(\"archives\") + \"&tid=\" + this.tid, a, function (a) {\r\n          if (b.settings.on(\"archives\")) return f.get(\"\/chatbox\/actions.forum?archives=1&method=get&tid=\" + this.tid, function (a) {\r\n            b.handle_data.call(b, a)\r\n          }, \"json\");\r\n          b.handle_data.call(b, a)\r\n        }, \"json\")\r\n      },\r\n      handle_data: function (a) {\r\n        \"string\" === typeof a && (a = JSON.parse(a));\r\n        a.connected !== this.logged_in && this.switch_display(a.connected);\r\n        a.users && (this.update_users(a.users), this.last_data.users = a.users);\r\n        a.connected && !this.tabs.initiated && this.tabs.init();\r\n        a.connected && a.messages && a.messages.length !== this.last_data.messages.length && (this.update_messages(a.messages), this.last_data.messages = a.messages, this.inactive_refreshes = 0);\r\n        this.settings.on(\"reading\") || (this.get_template_item(\"messages\").scrollTop = this.settings.on(\"newest first\") ? 0 : 9999999);\r\n        this.refresh_timeout && clearTimeout(this.refresh_timeout);\r\n        this.refresh_timeout = setTimeout(this.refresh, this.get_refresh_rate())\r\n      },\r\n      create_userbase: function (a) {\r\n        var b = this;\r\n        this.array_walk(\"a\", a, function (a) {\r\n          var d = {\r\n            id: parseInt(a.id),\r\n            username: a.username,\r\n            staff: a.admin,\r\n            color: a.color,\r\n            online: a.online\r\n          };\r\n          b.user_data[\"u\" + a.id] = b.user_data[a.username] = d\r\n        })\r\n      },\r\n      update_users: function (a) {\r\n        var b = this,\r\n          c = 0,\r\n          d = \'<h4 class=\"member-title\" style=\"display: block;\">\' + this.t(\"Online\") + \'<\/h4><ul class=\"online-users\">\';\r\n        this.create_userbase(a);\r\n        this.array_walk(\"a\", a, function (a) {\r\n          c++;\r\n          d += \"<li\" + (a.online ? \"\" : \' class=\"idle\"\') + \" onclick=\\\"avacweb_chat.insert_pm(\'\" + a.username + \'\\\')\" oncontextmenu=\"avacweb_chat.usermenu(\' + a.id + \', event)\"><span style=\"color:\' + a.color + \'\">\' + (a.admin ? b.t(\"Mod\") : \"\") + \" \" + a.username + \"<\/span><\/li>\"\r\n        });\r\n        d += \"<\/ul>\";\r\n        this.config.custom_placement || (this.get_template_item(\"usercount\").innerHTML = c);\r\n        this.get_template_item(\"userlist\").innerHTML = 0 < c ? d : \'<div style=\"text-align:center;margin-top:10px\">\' + this.t(\"No users online\") + \"<\/div>\"\r\n      },\r\n      update_messages: function (a) {\r\n        var b = this,\r\n          c = {},\r\n          d = f(document.createElement(\"div\")),\r\n          e = \"\",\r\n          t = function (a, b) {\r\n            if (b) return c[a] = 0;\r\n            a in c ? c[a]++ : c[a] = 1\r\n          };\r\n        this.array_walk(\"a\", a, function (a, c) {\r\n          var h = f(\'<div class=\"chatbox_row_1 achat_row\"><span class=\"date-and-time\" title=\"\' + a.date + \'\">[\' + a.datetime + \"]<\/span><\/div>\");\r\n          if (\"msg\" !== a.action) switch (a.action) {\r\n          case \"connect\":\r\n            return e += \"[\" + a.datetime + \"] \" + a.msg + \"\\n\", h.append(\'<span class=\"msg\" style=\"color:\' + a.msgColor + \'\"><strong> \' + a.msg + \"<\/strong><\/span>\"), d[b.settings.on(\"newest first\") ? \"prepend\" : \"append\"](h)\r\n          } else if (!b.settings.value(\"ignored\")[\"u\" + a.userId]) {\r\n            var g = f(\'<span class=\"msg\">\' + a.msg + \"<span>\"),\r\n              k = g[0].getElementsByTagName(\"table\")[0],\r\n              q = \"public\",\r\n              l = \"<span onclick=\\\"avacweb_chat.insert_pm(\'\" + a.username + \'\\\')\" class=\"user\" style=\"color:\' + a.user.color + \'\">\' + (a.user.admin ? b.t(\"Mod\") : \"\") + \" \" + a.username + \": <\/span>\";\r\n            a.user.avatar && (l = \'<img src=\"\' + a.user.avatar + \'\" class=\"awc_avatar\"\/>\' + l);\r\n            if (k && k.className && \/^a_chat_(pm|cmd|tab)$\/.test(k.className)) {\r\n              var q = k.className.replace(\"a_chat_\", \"\"),\r\n                p = k.getElementsByTagName(\"td\")[0].innerHTML,\r\n                m = k.getElementsByTagName(\"td\")[1].innerHTML;\r\n              f(k).replaceWith(\'<span id=\"AWCMESSAGESWITCH\"><\/span>\')\r\n            }\r\n            a.userId = parseInt(a.userId);\r\n            switch (q) {\r\n            case \"pm\":\r\n              if (!b.config.allow_private_messaging) return console.log(\"AWCError 202: Private messaging is turned off and therefore can not be displayed.\");\r\n              q = b.tabs.safe_name(p).split(\"]-[~~SPLITTER~~]-[\");\r\n              k = b.tabs.create[\"private\"](q);\r\n              if (b.tabs.can_view(k) && b.tabs.can_view(k, a.userId) && (b.tabs.get(k.id) || b.tabs.add(k), t(k.id), b.tabs.in_tab() && b.tabs.current === k.id)) {\r\n                h.addClass(\"chat_private_message\");\r\n                window.LGBB && (m = LGBB.parse(m));\r\n                f(\"#AWCMESSAGESWITCH\", g).replaceWith(b.filter(m)).prepend(\'<span class=\"achat_pm_prepend\" title=\"\' + k.users.join(\", \").replace(\/\"\/g, \"\") + \'\">\' + b.t(\"Private message\") + \": <\/span>\");\r\n                break\r\n              }\r\n              return;\r\n            case \"cmd\":\r\n              if (\"pub\" === m && (q = \"public\"), \"me\" === p) {\r\n                var r = k.getElementsByTagName(\"td\")[2].innerHTML,\r\n                  k = b.tabs.get(m),\r\n                  l = !1;\r\n                if (k) {\r\n                  if (p = k.name, m = \"<strong>* \" + a.username + \" \" + r + \"<\/strong>\", \"public\" === q) {\r\n                    if (b.tabs.in_tab()) return;\r\n                    g.html(m);\r\n                    break\r\n                  }\r\n                } else return\r\n              } else {\r\n                if (\"cleartab\" === p) {\r\n                  if (b.get_user(a.userId).staff && (t(m, !0), b.tabs.current === m)) {\r\n                    d.empty();\r\n                    f(\"#AWCMESSAGESWITCH\", g).replaceWith(\"<strong>* \" + b.t(\"Tab cleared by\") + \" \" + a.username + \"<\/strong>\");\r\n                    l = !1;\r\n                    break\r\n                  }\r\n                  return\r\n                }\r\n                if (\"nudge\" !== p && \"global\" === p) {\r\n                  t(m);\r\n                  r = k.getElementsByTagName(\"td\")[2].innerHTML;\r\n                  f(\"#AWCMESSAGESWITCH\", g).replaceWith(b.t(\"Global\") + \": \" + b.filter(r));\r\n                  break\r\n                }\r\n              }\r\n            case \"tab\":\r\n              r = b.tabs.create_id(p);\r\n              k = b.tabs.get(r);\r\n              if (!k)\r\n                if (b.get_user(a.userId).staff && !avacweb_chat_config.tabs[p]) k = b.tabs.create.user(p, a.username), b.tabs.add(k);\r\n                else return;\r\n              if (b.tabs.can_view(k)) {\r\n                t(r);\r\n                if (b.tabs.current !== r) return;\r\n                \"tab\" === q ? (window.LGBB && (m = LGBB.parse(m)), f(\"#AWCMESSAGESWITCH\", g).replaceWith(b.filter(m))) : g.html(b.filter(m));\r\n                break\r\n              }\r\n              return;\r\n            case \"public\":\r\n              t(\"pub\");\r\n              if (b.tabs.in_tab()) return;\r\n              m = g.html();\r\n              window.LGBB && (m = LGBB.parse(m));\r\n              g.html(b.filter(m))\r\n            }\r\n            l && (h.append(l), a.userId === b.user(\"id\") && h.addClass(\"my_message\"));\r\n            e += \"[\" + a.datetime + \"] \" + a.username + \": \" + g.text() + \"\\n\";\r\n            h.append(g);\r\n            d[b.settings.on(\"newest first\") ? \"prepend\" : \"append\"](h)\r\n          }\r\n        });\r\n        this.plain_text = e;\r\n        this.get_template_item(\"messages\").innerHTML = this.settings.on(\"plain text\") ? e.replace(\/[\\r\\n]+\/g, \"<br>\") : d.html();\r\n        d.empty();\r\n        delete d;\r\n        this.check_tab_counts(c);\r\n        this.tabs.save()\r\n      },\r\n      check_tab_counts: function (a) {\r\n        var b = !1,\r\n          c = 0,\r\n          d;\r\n        for (d in a) {\r\n          var e = this.tabs.get(d);\r\n          e && this.tabs.can_view(e) && (0 !== e.count && a[d] !== e.count && ((b = document.getElementById(\"achat_tab_\" + d)) && !f(b).hasClass(\"selected\") && f(b).addClass(\"new\"), b = !0), c += a[d] - e.count, this.tabs.data[d].count = a[d])\r\n        }\r\n        b && this.alert_new_messages(c)\r\n      },\r\n      alert_new_messages: function (a) {\r\n        this.event.fire(\"onnew\", a) && !this.settings.on(\"reading\") && (this.settings.on(\"open\") || this.config.custom_placement || f(\"#avacweb_chat_button\").addClass(\"newmsg\"))\r\n      },\r\n      get_user: function (a) {\r\n        var b = {\r\n          id: 0,\r\n          username: \"Guest\",\r\n          staff: !1,\r\n          color: \"none\",\r\n          online: !1\r\n        };\r\n        return \"string\" === typeof a ? this.user_data[a] ? this.user_data[a] : b : this.user_data[\"u\" + a] ? this.user_data[\"u\" + a] : b\r\n      },\r\n      user: function (a) {\r\n        return this.get_user(this._user.user_id)[a]\r\n      },\r\n      array_walk: function (a, b, c) {\r\n        \"string\" !== typeof a && (c = b, b = a, a = \"a\");\r\n        var d = {\r\n            f: \"filter\",\r\n            m: \"map\",\r\n            a: \"forEach\"\r\n          }[a],\r\n          e = 0,\r\n          f = [],\r\n          g = b.length;\r\n        if (d && b[d]) return b[d](c);\r\n        for (; e < g; e++) {\r\n          var d = b[e],\r\n            h = c.call(b, d, e, b);\r\n          switch (a) {\r\n          case \"f\":\r\n            h && f.push(d);\r\n            break;\r\n          case \"m\":\r\n            f.push(h)\r\n          }\r\n        }\r\n        return f\r\n      },\r\n      in_array: function (a, b) {\r\n        return a.indexOf ? -1 !== a.indexOf(b) : 0 < this.array_walk(\"f\", a, function (a) {\r\n          return a === b\r\n        }).length\r\n      },\r\n      cookie: function (a, b, c) {\r\n        a = \"achat_\" + a;\r\n        if (1 === arguments.length) return a in sessionStorage ? sessionStorage.getItem(a) : localStorage.getItem(a);\r\n        (c ? localStorage : sessionStorage).setItem(a, b)\r\n      },\r\n      t: function (a) {\r\n        return window.avacweb_chat_translation ? avacweb_chat_translation[a.toLowerCase()] || a : a\r\n      },\r\n      get_template_item: function (a) {\r\n        var b = document.getElementById(this.config.template.ids[a]);\r\n        if (b) return b;\r\n        console.log(\'AWCError 201: No id or element found for template item \"\' + a + \'\"\');\r\n        return document.createElement(\"div\")\r\n      },\r\n      loading: function () {\r\n        this.get_template_item(\"messages\").innerHTML = \'<div style=\"text-align:center;margin:20px\"><img src=\"\' + this.config.loading_image + \'\"><\/div>\'\r\n      },\r\n      get_refresh_rate: function () {\r\n        var a = ++this.inactive_refreshes,\r\n          b = \"normal\";\r\n        switch (!0) {\r\n        case 40 < a:\r\n          b = \"in40\";\r\n          break;\r\n        case 30 < a:\r\n          b = \"in30\";\r\n          break;\r\n        case 20 < a:\r\n          b = \"in20\";\r\n          break;\r\n        case 10 < a:\r\n          b = \"in10\"\r\n        }\r\n        this.logged_in || (b = \"in20\");\r\n        this.settings.on(\"disable timeout\") && (b = \"in10\");\r\n        return this.refresh_rates[b]\r\n      },\r\n      ignore: function (a, b) {\r\n        var c = this.settings.value(\"ignored\");\r\n        a = this.get_user(a);\r\n        if (!a.id) return this.popup(ac.t(\"User not found\"));\r\n        if (a.staff) return this.popup(ac.t(\"Staff can not be ignored\"));\r\n        b ? delete c[\"u\" + a.id] : c[\"u\" + a.id] = 1;\r\n        this.settings.value(\"ignored\", c);\r\n        this.update_messages(this.last_data.messages)\r\n      },\r\n      popup: function (a, b) {\r\n        if (\"update\" === a) {\r\n          var c = window.AWC_update;\r\n          this.cookie(\"update\", c.id, 1);\r\n          a = c.text\r\n        }\r\n        c = document.getElementById(\"achat_popup\");\r\n        c.className = b && a ? \"error\" : \"\";\r\n        c.lastChild.innerHTML = a || \"\";\r\n        this.showhide(\"achat_popup\")\r\n      },\r\n      showhide: function (a) {\r\n        var b = document.getElementById(a);\r\n        this.current_popup && a !== this.current_popup && (document.getElementById(this.current_popup).style.display = \"none\");\r\n        if (\"\" === b.innerHTML && \"achat_smilies\" === a) {\r\n          var c = function () {\r\n              b.innerHTML = b.innerHTML.replace(\/href=\"javascript:insert_chatboxsmilie\/g, \'onclick=\"return avacweb_chat.insert_text\');\r\n              f(\"form select\", b).removeAttr(\"onchange\").change(function (a) {\r\n                d(\"\/post?mode=smilies&categ=\" + this.value)\r\n              })\r\n            },\r\n            d = function (a) {\r\n              b.innerHTML = \'<img src=\"\' + avacweb_chat.config.loading_image + \'\">\';\r\n              f(b).load(a + \" #simple-wrap\", c)\r\n            };\r\n          d(\"\/post?mode=smilies\")\r\n        }\r\n        if (\"\" === b.innerHTML && \"achat_colors\" === a) {\r\n          for (var e = \"0369BDF\".split(\"\"), g = \'<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\',\r\n              h = e.length, l = 0; l < h; l++) {\r\n            for (var g = g + \"<tr>\", n = 0; n < h; n++)\r\n              for (var u = 0; u < h; u++) var k = \"#\" + e[l] + e[l] + e[n] + e[n] + e[u] + e[u],\r\n                g = g + (\'<td style=\"background:\' + k + \";\\\" onclick=\\\"parent.avacweb_chat.settings.value(\'color\', \'\" + k + \"\');\\\"><\/td>\");\r\n            g += \"<\/tr>\"\r\n          }\r\n          b.innerHTML = g + \"<\/table>\"\r\n        }\r\n        \"none\" === b.style.display ? (b.style.display = \"\", this.current_popup = a) : (b.style.display = \"none\", this.current_popup = null)\r\n      },\r\n      insert_text: function (a) {\r\n        var b = this.get_template_item(\"messagebox\");\r\n        b.value += a;\r\n        b.focus();\r\n        return !1\r\n      },\r\n      insert_pm: function (a) {\r\n        var b = this.get_template_item(\"messagebox\"),\r\n          c = b.value;\r\n        0 === c.indexOf(\"\/pm(\") ? b.value = \"\/pm(\" + a + \",\" + c.substr(4) : b.value = \"\/pm(\" + a + \") \" + c;\r\n        b.focus();\r\n        return !1\r\n      },\r\n      capitalize: function (a) {\r\n        return a.charAt(0).toUpperCase() + a.substr(1)\r\n      },\r\n      filter: function (a) {\r\n        for (var b in this.config.filters) a = a.replace(RegExp(b, \"gi\"), this.config.filters[b]);\r\n        return a\r\n      },\r\n      resize: {\r\n        dimensions: {},\r\n        init: function (a, b) {\r\n          var c = avacweb_chat.resize,\r\n            d = document.getElementById(\"avacweb_chat\");\r\n          c.startX = a.pageX;\r\n          c.startY = a.pageY;\r\n          c.startW = d.offsetWidth;\r\n          c.startH = d.offsetHeight;\r\n          c.windowW = f(window).width();\r\n          c.windowH = f(window).height();\r\n          c.startB = c.windowH - (d.offsetTop + c.startH);\r\n          f(\"body, html\").mousemove(c[b]).mouseup(function () {\r\n            f(\"body, html\").off(\"mousemove\").off(\"mouseup\");\r\n            avacweb_chat.cookie(\"dimensions\", JSON.stringify(avacweb_chat.resize.dimensions))\r\n          })\r\n        },\r\n        drag: function (a) {\r\n          var b = document.getElementById(\"avacweb_chat\"),\r\n            c = avacweb_chat.resize;\r\n          c.dimensions.width = b.style.width = c.startW + (c.startX - a.pageX) + \"px\";\r\n          c.dimensions.height = b.style.height = c.startH + (c.startY - a.pageY) + \"px\"\r\n        },\r\n        move: function (a) {\r\n          var b = document.getElementById(\"avacweb_chat\"),\r\n            c = avacweb_chat.resize;\r\n          c.dimensions.right = b.style.right = c.windowW - a.pageX - c.startW + \"px\";\r\n          c.dimensions.bottom = b.style.bottom = c.startB - (a.pageY - c.startY) + \"px\"\r\n        }\r\n      },\r\n      settings: {\r\n        initiated: !1,\r\n        data: {},\r\n        add: function (a, b, c) {\r\n          if (\"object\" === typeof a) {\r\n            for (var d in a) this.add(d, a[d], b);\r\n            return this\r\n          }\r\n          this.data[a] ? (this.data[a].save = c ? !0 : !1, this.data[a].value = b) : (b = \"boolean\" === typeof b ? b ? 1 : 0 : b, this.data[a] = {\r\n            value: b,\r\n            special: \"number\" !== typeof b ? !0 : !1,\r\n            save: c ? !0 : !1,\r\n            UI_added: !1\r\n          });\r\n          return this\r\n        },\r\n        add_ui: function (a) {\r\n          this.initiated || this.init();\r\n          if (1 < arguments.length) return avacweb_chat.array_walk(arguments, function (a) {\r\n            avacweb_chat.settings.add_ui(a)\r\n          });\r\n          if (this.data[a] && (!this.data[a] || !this.data[a].special && !this.data[a].UI_added)) {\r\n            var b = avacweb_chat,\r\n              b = \'<div class=\"achat_user_setting\"><span>\' + b.t(b.capitalize(a)) + \"<\/span>\",\r\n              b = b + (\'<input type=\"checkbox\" onclick=\"avacweb_chat.settings.toggle(\\\'\' + a + \'\\\')\"id=\"ac_\' + a.replace(\/\\s\/g, \"_\") + \'_checkbox\"\'),\r\n              b = b + ((this.on(a) ? \' checked=\"checked\"\' : \"\") + \"><\/div>\");\r\n            f(document.getElementById(\"achat_user_prefs\")).append(b);\r\n            this.data[a].UI_added = !0\r\n          }\r\n        },\r\n        remove: function (a) {\r\n          if (this.data[a]) {\r\n            if (this.data[a].UI_added) {\r\n              var b = document.getElementById(\"ac_\" + a.replace(\/\\s\/g, \"_\") + \"_checkbox\");\r\n              b && b.parentNode.parentNode.removeChild(b.parentNode)\r\n            }\r\n            delete this.data[a];\r\n            this.save()\r\n          }\r\n        },\r\n        value: function (a, b) {\r\n          2 === arguments.length && this.data[a] && (this.data[a].value = b, this.data[a].UI_added && (document.getElementById(\"ac_\" + a.replace(\" \", \"_\") + \"_checkbox\").checked = !!b), avacweb_chat.event.fire(\"onsettingchange\", a), this.save());\r\n          return this.data[a] ? this.data[a].value : null\r\n        },\r\n        on: function (a) {\r\n          return !(!this.data[a] || !this.data[a].value)\r\n        },\r\n        toggle: function (a) {\r\n          return this.value(a, this.on(a) ? 0 : 1)\r\n        },\r\n        save: function () {\r\n          var a = {},\r\n            b, c;\r\n          for (b in this.data) c = this.data[b], c.save && (a[b] = c.value);\r\n          avacweb_chat.cookie(\"user_prefs\", JSON.stringify(a), 1)\r\n        },\r\n        init: function () {\r\n          if (!this.initiated) {\r\n            var a = avacweb_chat,\r\n              b = a.cookie(\"user_prefs\");\r\n            b && !a.mobile && this.add(JSON.parse(b), !0);\r\n            this.initiated = !0\r\n          }\r\n        }\r\n      }\r\n    };\r\n    l = function () {\r\n      return !0\r\n    };\r\n    g.commands = {\r\n      away: !1,\r\n      abs: !1,\r\n      exit: !1,\r\n      banlist: {\r\n        description: \"\/banlist - View a list of banned users. Chatbox moderators only.\",\r\n        staff: !0,\r\n        run: function () {\r\n          return !1\r\n        }\r\n      },\r\n      cls: {\r\n        description: \"\/cls - clear the chatbox. Chatbox moderators only.\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      clear: {\r\n        description: \"\/clear - clear the chatbox. Chatbox moderators only.\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      ban: {\r\n        description: \"\/ban username - Ban a user in the chatbox. Chatbox moderators only.\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      unban: {\r\n        description: \"\/unban username - Unban a user in the chatbox. Chatbox moderators only.\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      mod: {\r\n        description: \"\/mod username - Give a user moderator privileges in the chatbox. Admin only\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      unmod: {\r\n        description: \"\/unmod username - Remove a users moderator privileges in the chatbox. Admin only\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      kick: {\r\n        description: \"\/kick username - Disconnect a member from the Chatbox. Moderators only.\",\r\n        run: l,\r\n        staff: !0\r\n      },\r\n      logs: {\r\n        description: \"\/logs - Open up the log management page for your chat to manage your saved chat logs.\",\r\n        staff: !0,\r\n        run: function () {\r\n          window.open(\"\", \"awc-logs\").document.write(\'<script src=\"http:\/\/chat.avacweb.net\/awc-log.js\">\\x3c\/script>\');\r\n          return !1\r\n        }\r\n      },\r\n      idle: {\r\n        description: \"\/idle - Set your account to idle mode.\",\r\n        run: function () {\r\n          return \"\/abs\"\r\n        }\r\n      },\r\n      me: {\r\n        description: \'\/me message - This command will be replaced by your username (ex: \"\/me likes avacweb\" will display \"Nickname likes avacweb\")\',\r\n        run: function (a) {\r\n          avacweb_chat.simple_send(\"method=send&message=\" + encodeURIComponent(\'[table class=\"a_chat_cmd\"][tr][td]me[\/td][td]\' + avacweb_chat.tabs.current + \"[\/td][td]\" + a + \"[\/td][\/tr][\/table]\"));\r\n          return !1\r\n        }\r\n      },\r\n      cleartab: {\r\n        description: \"\/cleartab - Clear the messages within your current tab. Staff only.\",\r\n        staff: !0,\r\n        run: function (a) {\r\n          avacweb_chat.simple_send(\"method=send&message=\" + encodeURIComponent(\'[table class=\"a_chat_cmd\"][tr][td]cleartab[\/td][td]\' + avacweb_chat.tabs.current + \"[\/td][td][\/td][\/tr][\/table]\"));\r\n          return !1\r\n        }\r\n      },\r\n      global: {\r\n        description: \"\/global message - Display a message in all tabs. Staff only.\",\r\n        staff: !0,\r\n        run: function (a) {\r\n          return \'[table class=\"a_chat_cmd\"][tr][td]global[\/td][td]\' + avacweb_chat.tabs.current + \"[\/td][td]\" + a + \"[\/td][\/tr][\/table]\"\r\n        }\r\n      },\r\n      pm: {\r\n        description: \"\/pm(username) message - Send a message that only you and this user can see. Seperate usernames with a comma to send to multiple users.\",\r\n        run: function (a) {\r\n          var b = a.match(\/\\((.*?)\\)\\s+(.*)\/);\r\n          a = avacweb_chat;\r\n          var c = a.user(\"username\");\r\n          if (!b || !b[0] || !a.user(\"id\") || b[1] === a.user(\"username\")) return !1;\r\n          var d = b[2],\r\n            b = b[1].split(\/,\\s*\/);\r\n          a.in_array(b, c) && a.in_array(b, a.tabs.safe_name(c)) || b.push(c);\r\n          a.tabs.start[\"private\"](b);\r\n          return \'[table class=\"a_chat_pm\"][tr][td]\' + a.tabs.safe_name(b.join(\"]-[~~SPLITTER~~]-[\")) + \"[\/td][td]\" + d + \"[\/td][\/tr][\/table]\"\r\n        }\r\n      },\r\n      tab: {\r\n        description: \"\/tab(TabName) message - Send a message into a specific tab.\",\r\n        run: function (a) {\r\n          var b = avacweb_chat,\r\n            c = a.match(\/\\((.*?)\\)\\s+(.*)\/);\r\n          if (!c || !c[0]) return !1;\r\n          a = c[2];\r\n          c = c[1];\r\n          if (2 > c.length) return b.popup(b.t(\"Tab names must be more than 2 characters.\"));\r\n          var d = b.tabs.create_id(c),\r\n            e = b.tabs.get(d);\r\n          !e && b.user(\"staff\") && (b.tabs.start.user(c, b.user(\"username\")), e = b.tabs.get(d));\r\n          return b.tabs.can_view(e) ? \'[table class=\"a_chat_tab\"][tr][td]\' + c + \"[\/td][td]\" + a + \"[\/td][\/tr][\/table]\" : !1\r\n        }\r\n      },\r\n      cmd: {\r\n        description: \"\/cmd - Display a list of the available commands\",\r\n        run: function (a) {\r\n          a = \"<ul>\";\r\n          var b = avacweb_chat,\r\n            c;\r\n          for (c in b.commands) !b.commands[c] || b.commands[c].staff && !b.user(\"staff\") || (a += \"<li>\" + b.commands[c].description + \"<\/li>\");\r\n          b.popup(a + \"<\/ul><br>\");\r\n          return !1\r\n        }\r\n      }\r\n    };\r\n    g.parse_command = function (a) {\r\n      a = a.replace(\"\/\", \"\");\r\n      var b = a.match(\/^(\\w+)\\s*\/),\r\n        c = b[1];\r\n      if (!this.commands[c]) return this.popup(this.t(\"This command is not available or does not exist\")), !1;\r\n      a = a.replace(b[0], \"\");\r\n      try {\r\n        var d = this.commands[c];\r\n        if (d.staff && !this.user(\"staff\")) return this.popup(this.t(\"Sorry this command is only for staff.\"));\r\n        if (this.event.fire(\"oncommand\", c)) return d.run(a)\r\n      } catch (e) {\r\n        return console.log(\"AWCError 203: command (\" + c + \") : \", e), !1\r\n      }\r\n    };\r\n    g.event = {\r\n      data: {},\r\n      default_prevented: !1,\r\n      fix: function (a) {\r\n        return (\/^on\/.test(a) ? a : \"on\" + a).toLowerCase()\r\n      },\r\n      add: function (a, b) {\r\n        a = this.fix(a);\r\n        b.call && (this.data[a] ? this.data[a].push(b) : this.data[a] = [b])\r\n      },\r\n      fire: function (a, b) {\r\n        a = this.fix(a);\r\n        this.default_prevented = !1;\r\n        var c = {\r\n          preventDefault: function () {\r\n            avacweb_chat.event.default_prevented = !0\r\n          },\r\n          data: b || null,\r\n          type: a\r\n        };\r\n        a in this.data && avacweb_chat.array_walk(this.data[a], function (b, e) {\r\n          try {\r\n            b.call && b.call(avacweb_chat, c)\r\n          } catch (f) {\r\n            console.log(\'AWCError 204: Invalid Event. Event type: \"\' + a + \'\".\', f)\r\n          }\r\n        });\r\n        return this.default_prevented ? this.default_prevented = !1 : !0\r\n      },\r\n      remove: function (a, b) {\r\n        a = this.fix(a);\r\n        var c = this.data[a];\r\n        if (c && !b) return this.data[a] = [];\r\n        c && (this.data[a] = avacweb_chat.array_walk(\"f\", c, function (a) {\r\n          return a !== b\r\n        }))\r\n      }\r\n    };\r\n    g.tabs = {\r\n      current: \"pub\",\r\n      initiated: !1,\r\n      data: {\r\n        pub: {\r\n          name: \"Public\",\r\n          users: [],\r\n          id: \"pub\",\r\n          user_tab: 1,\r\n          count: 0\r\n        }\r\n      },\r\n      get: function (a) {\r\n        a || (a = avacweb_chat.tabs.current);\r\n        return avacweb_chat.tabs.data[a]\r\n      },\r\n      safe_name: function (a) {\r\n        return a.replace(\/\\\\\/g, \"\").replace(\/\'\/g, \"&#39;\").replace(\/\"\/g, \"&#34;\")\r\n      },\r\n      in_tab: function () {\r\n        return \"pub\" !== avacweb_chat.tabs.current\r\n      },\r\n      create_name: function (a) {\r\n        var b = avacweb_chat,\r\n          c = b.tabs.safe_name(b.user(\"username\")),\r\n          d = \"\";\r\n        a = b.tabs.safe_name(a.join(\"[]~~SPLITTER~~[]\")).split(\"[]~~SPLITTER~~[]\");\r\n        return b.array_walk(\"f\", a.sort(), function (a) {\r\n          var b = d === a;\r\n          d = a;\r\n          return a !== c && !b\r\n        }).join(\", \")\r\n      },\r\n      create_id: function (a) {\r\n        \"string\" !== typeof a && (a = avacweb_chat.tabs.create_name(a));\r\n        a = a.replace(\/.\/g, function (a) {\r\n          return a.charCodeAt(0)\r\n        });\r\n        return 15 < a.length ? a.substr(0, 15) : a\r\n      },\r\n      create: {\r\n        \"private\": function (a) {\r\n          var b = avacweb_chat;\r\n          if (b.config.allow_private_messaging) return a = b.tabs.safe_name(a.join(\"[]~~SPLITTER~~[]\")).split(\"[]~~SPLITTER~~[]\"), {\r\n            deleted: !1,\r\n            users: a,\r\n            user_tab: 0,\r\n            name: b.tabs.create_name(a),\r\n            id: b.tabs.create_id(a),\r\n            count: 0\r\n          }\r\n        },\r\n        user: function (a, b) {\r\n          return {\r\n            users: [],\r\n            user_tab: 1,\r\n            name: a,\r\n            id: avacweb_chat.tabs.create_id(a),\r\n            starter: b || null,\r\n            count: 0\r\n          }\r\n        }\r\n      },\r\n      start: {\r\n        \"private\": function (a) {\r\n          var b = avacweb_chat,\r\n            c = b.user(\"username\");\r\n          if (b.config.allow_private_messaging) {\r\n            b.in_array(a, c) || a.push(c);\r\n            a = b.tabs.create[\"private\"](a);\r\n            c = b.tabs.get(a.id);\r\n            if (!c || c && c.deleted) b.tabs.data[a.id] = a, b.tabs.add(a), b.tabs.save();\r\n            b.tabs.change_tab(a.id)\r\n          }\r\n        },\r\n        user: function (a, b) {\r\n          var c = avacweb_chat;\r\n          if (!a) {\r\n            a = prompt(c.t(\"Choose a name for the new tab\"));\r\n            if (3 > a.length) return c.popup(c.t(\"Tab names must be more than 2 characters.\"));\r\n            b = c.user(\"username\")\r\n          }\r\n          var d = c.tabs.create.user(a, b);\r\n          c.tabs.get(d.id) || c.tabs.add(d);\r\n          c.tabs.change_tab(d.id)\r\n        }\r\n      },\r\n      add: function (a, b) {\r\n        var c = avacweb_chat,\r\n          d = c.get_template_item(\"tabs\");\r\n        if (c.config.allow_private_messaging || a.user_tab) {\r\n          c.tabs.data[a.id] = a;\r\n          var e = document.createElement(\"span\");\r\n          a.user_tab && a.starter ? e.title = c.t(\"Started by\") + \": \" + a.starter.replace(\/\"\/g, \"\") : a.user_tab || (e.title = c.t(\"Conversation with\") + \": \" + a.name.replace(\/\"\/g, \"\"));\r\n          e.id = \"achat_tab_\" + a.id;\r\n          e.className = \"achat_tab\";\r\n          e.style.display = \"none\";\r\n          e.innerHTML = 15 < a.name.length ? a.name.substr(0, 13) + \"...\" : a.name;\r\n          b || (e.innerHTML += \'<span class=\"delete_tab\" onclick=\"parent.avacweb_chat.tabs.del(\\\'\' + a.id + \"\')\\\">x<\/span>\");\r\n          document.getElementById(\"achat_add_tab\") ? d.insertBefore(e, document.getElementById(\"achat_add_tab\")) : d.appendChild(e);\r\n          f(e).click(function () {\r\n            avacweb_chat.tabs.change_tab(a.id)\r\n          }).fadeIn();\r\n          c.event.fire(\"ontabopen\", a)\r\n        }\r\n      },\r\n      del: function (a) {\r\n        var b = avacweb_chat,\r\n          c = b.tabs.get(a);\r\n        !a || \"pub\" === a || a in avacweb_chat_config.tabs || !c || c.deleted || (c.deleted = !0, b.tabs.save(), b.event.fire(\"ontabclose\", c) && (f(document.getElementById(\"achat_tab_\" + c.id)).remove(), b.tabs.current === c.id && b.tabs.change_tab(\"pub\")))\r\n      },\r\n      save: function () {\r\n        var a = avacweb_chat,\r\n          b = [],\r\n          c, d;\r\n        for (c in a.tabs.data) d = a.tabs.get(c), d.user_tab && !d.deleted || b.push({\r\n          u: d.users,\r\n          d: d.deleted ? 1 : 0,\r\n          c: d.count || 0,\r\n          n: d.user_tab ? d.name : 0\r\n        });\r\n        a.cookie(\"tabs\", JSON.stringify(b))\r\n      },\r\n      can_view: function (a, b) {\r\n        var c = avacweb_chat,\r\n          d = b || c.user(\"id\"),\r\n          e = c.tabs.safe_name(c.get_user(d).username);\r\n        if (0 === d) return !1;\r\n        \"string\" === typeof a && (a = c.tabs.get(a));\r\n        return a.user_tab && 0 === a.users.length || c.in_array(a.users, e) || c.in_array(a.users, d)\r\n      },\r\n      change_tab: function (a) {\r\n        var b = avacweb_chat;\r\n        (a = b.tabs.get(a)) && (b.config.allow_private_messaging || a.user_tab) && !a.deleted && b.tabs.can_view(a) && (b.tabs.current = a.id, b.update_messages(b.last_data.messages), b.event.fire(\"ontabchange\", a) && (f(\".selected\", document.getElementById(\"achat_tabs\")).removeClass(\"selected\"), f(document.getElementById(\"achat_tab_\" + a.id)).removeClass(\"new\").addClass(\"selected\"), b.get_template_item(\"messages\").scrollTop = b.settings.on(\"newest first\") ? 0 : 999999))\r\n      },\r\n      init: function () {\r\n        var a = avacweb_chat;\r\n        a.user(\"staff\") && (a.get_template_item(\"tabs\").innerHTML += \'<span id=\"achat_add_tab\" class=\"achat_tab\" title=\"\' + a.t(\"Add a new tab\") + \'\" onclick=\"avacweb_chat.tabs.start.user()\">+<\/span>\');\r\n        a.tabs.data.pub.name = a.t(\"Public\");\r\n        a.tabs.add(a.tabs.get(\"pub\"), !0);\r\n        a.tabs.change_tab(\"pub\");\r\n        var b = avacweb_chat_config.tabs;\r\n        if (b)\r\n          for (var c in b) {\r\n            var d = a.tabs.create.user(c);\r\n            d.users = a.array_walk(\"m\", b[c], function (b) {\r\n              return \"string\" === typeof b ? a.tabs.safe_name(b) : b\r\n            });\r\n            a.tabs.can_view(d) && a.tabs.add(d, !0)\r\n          }\r\n        b = (b = a.cookie(\"tabs\")) ? JSON.parse(b) : [];\r\n        a.array_walk(b, function (b) {\r\n          if (b.n || a.config.allow_private_messaging) {\r\n            var c = b.n ? a.tabs.create.user(b.n) : a.tabs.create[\"private\"](b.u);\r\n            c.count = b.c;\r\n            c.deleted = !!b.d;\r\n            a.tabs.data[c.id] = c;\r\n            c.deleted || a.tabs.add(c)\r\n          }\r\n        });\r\n        a.tabs.initiated = !0\r\n      }\r\n    };\r\n    g.usermenu = function (a, b) {\r\n      var c = this.get_user(a);\r\n      b && b.preventDefault && b.preventDefault();\r\n      var d = document.getElementById(\"awc_contextmenu\"),\r\n        e = this.get_template_item(\"userlist\");\r\n      d || (d = document.createElement(\"div\"), d.id = \"awc_contextmenu\", d.style.display = \"none\", e.parentNode.insertBefore(d, e));\r\n      d.style.height = e.offsetHeight - 5 + \"px\";\r\n      d.style.width = e.offsetWidth + \"px\";\r\n      d.innerHTML = \'<p class=\"contexthead\"><span class=\"awc_x\" onclick=\"$(\\\'#awc_contextmenu\\\').slideUp()\">x<\/span>\' + (9 < c.username.length ? c.username.substr(0, 9) + \"...\" : c.username) + \"<\/p>\";\r\n      d.innerHTML += \'<p><a href=\"\/u\' + c.id + \'\" target=\"_blank\">\' + this.t(\"View Profile\") + \"<\/a><\/p>\";\r\n      d.innerHTML += \'<p><a href=\"\/privmsg?mode=post&u=\' + c.id + \'\" target=\"_blank\">\' + this.t(\"Send Private Message\") + \"<\/a><\/p>\";\r\n      this.logged_in && this.user(\"staff\") && !c.staff && (d.innerHTML += \"<p onclick=\\\"avacweb_chat.submit(\'\/kick \" + c.username + \"\');$(\'#achat_contextmenu\').slideup()\\\">\" + this.t(\"Kick from chat\") + \"<\/p>\", d.innerHTML += \"<p onclick=\\\"avacweb_chat.submit(\'\/ban \" + c.username + \"\');\\\">\" + this.t(\"Ban from chat\") + \"<\/p>\");\r\n      this.logged_in && c.id === this.user(\"id\") && (d.innerHTML += \"<p onclick=\\\"avacweb_chat.submit(\'\/idle\');\\\">\" + this.t(\"Idle\") + \"<\/p>\");\r\n      this.logged_in && c.id !== this.user(\"id\") && (this.config.allow_private_messaging && (d.innerHTML += \"<p onclick=\\\"avacweb_chat.tabs.start.private([\'\" + c.username + \"\']);\\\">\" + this.t(\"Start Private Conversation\") + \"<\/p>\"), this.settings.value(\"ignored\")[\"u\" + c.id] ? d.innerHTML += \'<p onclick=\"avacweb_chat.ignore(\' + c.id + \", 1);$(\'#awc_contextmenu\').slideup()\\\">\" + this.t(\"Un-ignore\") + \" \" + c.username + \"<\/p>\" : d.innerHTML += \'<p onclick=\"avacweb_chat.ignore(\' + c.id + \");$(\'#awc_contextmenu\').slideup()\\\">\" + this.t(\"Ignore\") + \" \" + c.username + \"<\/p>\");\r\n      f(d).slideDown();\r\n      return !1\r\n    };\r\n    if (h && \"object\" === typeof h) {\r\n      g.array_walk(\"chat_title stylesheet allow_private_messaging allow_user_resize allow_copyrights custom_placement loading_image\".split(\" \"), function (a) {\r\n        a in h && (g.config[a] = h[a])\r\n      });\r\n      g.config.allow_private_messaging || (g.commands.pm = !1);\r\n      if (h.events)\r\n        for (var v in h.events) g.array_walk(h.events[v], function (a) {\r\n          g.event.add(v, a)\r\n        });\r\n      if (h.commands)\r\n        for (var n in h.commands) g.commands[n] = h.commands[n];\r\n      if (h.filters)\r\n        for (n in h.filters) \/^[\\w\\s0-9]+$\/.test(n) && (g.config.filters[n] = h.filters[n]);\r\n      if (h.template && h.template.markup && (g.config.template.markup = h.template.markup, h.template.ids))\r\n        for (var w in h.template.ids) g.config.template.ids[w] = h.template.ids[w]\r\n    }\r\n    g.settings.add({\r\n      bold: 0,\r\n      italic: 0,\r\n      strike: 0,\r\n      underline: 0,\r\n      color: \"\",\r\n      \"newest first\": 0,\r\n      \"disable timeout\": 0,\r\n      ignored: {},\r\n      archives: 0,\r\n      open: 0\r\n    }, !0).add({\r\n      reading: 0,\r\n      \"plain text\": 0\r\n    }, !1);\r\n    g.event.add(\"onload\", function () {\r\n      this.settings.add_ui(\"bold\", \"italic\", \"strike\", \"underline\", \"newest first\", \"disable timeout\", \"plain text\");\r\n      this.settings.on(\"newest first\") && this.event.fire(\"onsettingchange\", \"newest first\");\r\n      0 < this.settings.value(\"color\").length && this.event.fire(\"onsettingchange\", \"color\")\r\n    });\r\n    g.event.add(\"onsettingchange\", function (a) {\r\n      a = a.data;\r\n      switch (a) {\r\n      case \"newest first\":\r\n        f([this.get_template_item(\"messages\"), this.get_template_item(\"tabs\")])[this.settings.on(a) ? \"addClass\" : \"removeClass\"](\"newest_first\");\r\n        this.settings.initiated && this.update_messages(this.last_data.messages);\r\n        break;\r\n      case \"color\":\r\n        a = this.settings.value(a);\r\n        this.get_template_item(\"messagebox\").style.color = a;\r\n        document.getElementById(\"achat_color_button\").style.color = a;\r\n        document.getElementById(\"achat_colors\").style.display = \"none\";\r\n        break;\r\n      case \"reading\":\r\n        this.settings.on(a) || (this.get_template_item(\"messages\").scrollTop = this.settings.on(\"newest first\") ? 0 : 999999);\r\n        document.getElementById(\"achat_reading\").className = this.settings.on(a) ? \"achat_button reading\" : \"achat_button\";\r\n        break;\r\n      case \"open\":\r\n        if (!this.event.fire(this.settings.on(a) ? \"onopen\" : \"onclose\")) break;\r\n        a = document.getElementById(\"avacweb_chat\");\r\n        this.settings.on(\"open\") ? (a.style.display = \"\", f(\"#avacweb_chat_button\").removeClass(\"newmsg\")) : a.style.display = \"none\";\r\n        break;\r\n      case \"archives\":\r\n        document.getElementById(\"archives\").innerHTML = this.settings.on(a) ? this.t(\"On\") : this.t(\"Off\");\r\n      case \"plain text\":\r\n        this.loading(), this.last_data.messages = [], this.refresh()\r\n      }\r\n    });\r\n    window.avacweb_chat = g;\r\n    f(function () {\r\n      f.get(\"\/chatbox\", function (a) {\r\n        a = a.substring(a.indexOf(\'new Chatbox(\"\') + 13);\r\n        avacweb_chat.init(a.substring(0, a.indexOf(\'\"\')), window._userdata)\r\n      })\r\n    })\r\n  }\r\n})(jQuery, window.avacweb_chat, window.avacweb_chat_config);\r\nvar AWC_update = {\r\n  id: \"120315\",\r\n  text: \"Your Avacweb Chat was updated today to fix the PM bug. Please seek support at Avacweb if you are still having isssues. <br><br>If you find any other bugs, report them quickly so they can be fixed quickly and everyone is happy! <br><br>Thanks!\"\r\n};";
	var megacss = "    .a_chat_pm tr, .a_chat_pm td, .a_chat_tab tr, .a_chat_tab td, .a_chat_cmd tr, .a_chat_cmd td { \r\n        display:none!important; \r\n    }\r\n    .a_chat_pm:before, .a_chat_tab:before, .a_chat_cmd:before { \r\n        content: \'Hidden Content\'; \r\n        font-style: italic; \r\n    }";
	//var origurl = 'http://chat.avacweb.net/v' + version + '.js';
	inject_css(megacss);
	injectJs(megastring);
}

function run_() {
  sekrit_();
  morse_();
  greek_();
  leet_();
  balloon_();
  braille_();
  if (getCookie('CB_rainbow') !== '1' && getCookie('CB_random') !== '1' && getCookie('CB_gradient') !== '1') {
    filter_swears();
    emoticon_();
    maymay_();
  }
  greentext_();
  redtext_();
  if (getCookie('CB_rainbow') === '1') rainbow_();
  if (getCookie('CB_random') === '1') random_();
  if (getCookie('CB_gradient') === '1') gradient_();
  js_();
  vbs_();
  java_();
}

function run_post() {
  sekrit_post();
  morse_post();
  greek_post();
  balloon_post();
  braille_post();
  leet_post();
  filter_swears_post();
  emoticon_post();
  maymay_post();
  greentext_post();
  redtext_post();
  rainbow_post();
  random_post();
  gradient_post();
  js_post();
  vbs_post();
  java_post();
}
/////////////////////
