// function action(mode, type, selection) {
//     var em = cm.getEventManager("Juliet");
//     if (em == null) {
// 	cm.sendOk("找不到脚本，请联系GM！");
// 	cm.dispose();
// 	return;
//     }
//     switch(cm.getPlayer().getMapId()) {
// 	case 261000021:
// 	    cm.removeAll(4001130);
// 	    cm.removeAll(4001131);
// 	    cm.removeAll(4001132);
// 	    cm.removeAll(4001133);
// 	    cm.removeAll(4001134);
// 	    cm.removeAll(4001135);
// 	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
// 		cm.sendOk("请找队长来和我谈。");
// 	    } else {
// 		var party = cm.getPlayer().getParty().getMembers();
// 		var mapId = cm.getPlayer().getMapId();
// 		var next = true;
// 		var size = 0;
// 		var it = party.iterator();
// 		while (it.hasNext()) {
// 			var cPlayer = it.next();
// 			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
// 			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 120) {
// 				next = false;
// 				break;
// 			}
// 			size += (ccPlayer.isGM() ? 4 : 1);
// 		}	
// 		if (next && (cm.getPlayer().isGM() || size >= 4)) {
// 			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
// 		} else {
// 			cm.sendOk("请你的队员大于4个人(含)都要70等以上(含)120等以下(120也可)都要在这张地图再来找我");
// 		}
// 	    }
// 	    break;
// 	case 926110000:
// 	    cm.sendOk("你应该尝试在这里调查各地。看看库中的文件，直到你可以找到入口实验室.");
// 	    break;
// 	case 926110001:
// 	    cm.sendOk("请消除所有的怪物。");
// 	    break;
// 	case 926110100:
// 	    cm.sendOk("请把烧杯里的溢体装满。");
// 	    break;
// 	case 926110200:
// 	    if (cm.haveItem(4001131,1)) {
// 		cm.sendOk("哦，我的信找到了，谢谢！");
// 		cm.gainItem(4001131,-1);
// 		em.setProperty("stage", "1");
// 	    } else if (cm.haveItem(4001134,1)) {
// 		cm.gainItem(4001134,-1);
// 		cm.sendOk("谢谢你，现在帮我找#t4001135#.");
// 		em.setProperty("stage4", "1");
// 	    } else if (cm.haveItem(4001135,1) && em.getProperty("stage4").equals("1")) {
// 		cm.gainItem(4001135,-1);
// 		cm.sendOk("谢谢你，已经过关了。.");
// 		em.setProperty("stage4", "2");
// 		cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
// 	    } else {
// 	    	cm.sendOk("现在我们必须停止冲突，请帮我找出#t4001134# 和 #t4001135#。");
// 	    }
// 	    break;
// 	case 926100300:
// 	    cm.sendOk("我们一定要到实验室的顶部.");
// 	    break;
// 	case 926100400:
// 	    cm.sendOk("当你准备好了，我们要快去救救我的爱人.");
// 	    break;
// 	case 926110401:
// 	    cm.warpParty(926110500); //urete
// 	    break;
//     }
//     cm.dispose();
// }
/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC 克莱丽丝
*/

var bossmaps = Array(
	// Array(103000802,0,"#r20级#b   废弃任务第三阶段"), 
	// Array(103000803,0,"#r20级#b   废弃任务第四阶段"), 
	// Array(103000804,0,"#r20级#b   废弃任务最后阶段"), 
	// Array(930000200,0,"#r20级#b   毒雾森林1"),
	// Array(930000300,0,"#r20级#b   毒雾森林2"),
	// Array(930000500,0,"#r20级#b   毒雾森林3"),
	Array(140010100,0,"#r0级#b    里恩修炼场入口")
   );
var monstermaps = Array(                                             

Array
(40000,0,    "#r1级#b    蜗牛打猎场Ⅰ"),                                            
Array
(781000000,0,"#r1级#b    多数怪物大擂台1"),  
Array
(104040000,0,"#r4级#b    射手训练场Ⅰ"),  
Array
(101010100,0,"#r6级#b    大木林Ⅰ"),  
Array
(104010001,0,"#r7级#b    猪的海岸"),  
Array
(104030001,0,"#r8级#b    蘑菇山"),  
Array
(912000000,0,"#r9级#b    秘密场所"),  
Array
(219010000,0,"#r10级#b   可乐滑雪营<黄>"),  
Array
(680010000,0,"#r10级#b   幸福之路1"),  
Array
(910010200,0,"#r15级#b   猪猪村庄"),  
Array
(103000101,0,"#r20级#b   地铁一号线<第1地区>"),  
Array
(190000000,0,"#r20级#b   呼吸寺院门口"),  
Array
(100030001,0,"#r20级#b   青蘑菇树林"),  
Array
(103000805,0,"#r21级#b   组队训练场<奖金地点>"),  
Array
(107000501,0,"#r22级#b   黑森林沼泽"),  
Array
(540000200,0,"#r23级#b   主要通道2"),  
Array
(230030200,0,"#r23级#b   矩形地带"),  
Array
(260010301,0,"#r24级#b   沙漠蛇先生的窝"),  
Array
(101030101,0,"#r24级#b   遗迹发掘地Ⅰ"),  
Array
(740010200,0,"#r25级#b   西门町街道Ⅲ"),  
Array
(674020000,0,"#r25级#b   唯我独清"),  
Array
(101040001,0,"#r25级#b   野猪的领地Ⅰ"),  
Array
(101030001,0,"#r25级#b   野猪的领地Ⅱ"),  
Array
(260010100,0,"#r25级#b   仙人掌沙漠1"),  
Array
(105070300,0,"#r27级#b   火独眼兽洞穴Ⅲ"),  
Array
(600010100,0,"#r27级#b   丛林空地"),  
Array
(260010201,0,"#r28级#b   仙人掌爸爸沙漠"),  
Array
(106000200,0,"#r28级#b   幽深峡谷Ⅲ"),  
Array
(600010200,0,"#r28级#b   克兰卡丛林盆地"),  
Array
(600010300,0,"#r29级#b   丛林山谷"),  
Array
(260020600,0,"#r29级#b   沙哈地带4"),  
Array
(702090101,0,"#r29级#b   英语村初级1"),  
Array
(702090302,0,"#r30级#b   英语村高级2"),  
Array
(219010101,0,"#r30级#b   可乐滑雪营<小丘2>"),  
Array
(260020200,0,"#r30级#b   北沙漠之路2"),  
Array
(197000000,0,"#r30级#b   暴风露台Ⅰ"),  
Array
(682000301,0,"#r30级#b   鬼宅卧室A"),  
Array
(260020620,0,"#r31级#b   梦游沙漠"),  
Array
(220010700,0,"#r32级#b   天空露台<2>"),  
Array
(106000101,0,"#r32级#b   火焰之地Ⅰ"),  
Array
(192000001,0,"#r32级#b   火焰山Ⅱ"),  
Array
(260020610,0,"#r32级#b   沉睡的沙漠"),  
Array
(260020700,0,"#r32级#b   沙哈地带1"),  
Array
(682000303,0,"#r34级#b   鬼宅图书馆"),  
Array
(110020001,0,"#r37级#b   黄金海岸Ⅱ"),  
Array
(742000102,0,"#r37级#b   捷运车厢内部3"),  
Array
(105040200,0,"#r37级#b   黑森林打猎场Ⅱ"),  
Array
(261010003,0,"#r37级#b   研究所103号"),  
Array
(701010600,0,"#r38级#b   徐州平原3"),  
Array
(220010000,0,"#r38级#b   白云舞台<5>"),  
Array
(107000403,0,"#r39级#b   猴子沼泽地Ⅲ"),  
Array
(191000000,0,"#r40级#b   猴子森林"),  
Array
(250010000,0,"#r41级#b   通天林入口"),  
Array
(220040000,0,"#r41级#b   时间之路<1>"),  
Array
(200040001,0,"#r42级#b   暗影花园"),  
Array
(800040307,0,"#r42级#b   梦幻之间5"),  
Array
(300010000,0,"#r42级#b   苔藓树丛入口"),   
Array
(100000003,0,"#r42级#b   铁甲猪公园Ⅰ"),   
Array
(101030105,0,"#r44级#b   遗迹之墓Ⅰ"),   
Array
(221030300,0,"#r44级#b   鲁斯韦尔草原"),   
Array
(221040400,0,"#r45级#b   库尔兰草原"),   
Array
(501020000,0,"#r45级#b   暹罗野外Ⅲ"),   
Array
(800020110,0,"#r45级#b   林野的松林"),   
Array
(106000001,0,"#r45级#b   危险的峡谷"),   
Array
(101040003,0,"#r46级#b   钢之黑怪之地"),   
Array
(103000105,0,"#r48级#b   地铁一号线<第4地区>"),   
Array
(110030001,0,"#r48级#b   青螃蟹海滩Ⅱ"),   
Array
(550000100,0,"#r48级#b   泥泞的河岸外围"),   
Array
(222010102,0,"#r50级#b   老虎树林Ⅱ"),   
Array
(250020000,0,"#r50级#b   初级训练场"),   
Array
(211010000,0,"#r50级#b   冰面Ⅰ"),   
Array
(741010200,0,"#r50级#b   夜市徒步区3"),   
Array
(107000400,0,"#r52级#b   鳄鱼潭Ⅱ"),   
Array
(200080000,0,"#r52级#b   云彩公园Ⅵ"),   
Array
(251010200,0,"#r53级#b   百年药草地"),   
Array
(200010131,0,"#r53级#b   蓝色庭院Ⅱ"),   
Array
(922200000,0,"#r53级#b   野生猪的领域"),   
Array
(261020300,0,"#r54级#b   研究所C-1地区"),   
Array
(200010200,0,"#r54级#b   天空楼梯Ⅰ"),   
Array
(250010501,0,"#r55级#b   迷雾森林"),   
Array
(222010201,0,"#r55级#b   乌山峡谷"),   
Array
(190000002,0,"#r55级#b   呼吸的寺院Ⅱ"),   
Array
(211020000,0,"#r55级#b   冰面Ⅱ"),   
Array
(300020200,0,"#r55级#b   蘑菇山丘入口"),   
Array
(801000110,0,"#r55级#b   神秘温泉(男)"),   
Array
(222010310,0,"#r56级#b   月岭"),   
Array
(300010400,0,"#r57级#b   石头山入口"),   
Array
(106010106,0,"#r57级#b   石人寺院Ⅳ"),   
Array
(211041300,0,"#r57级#b   死亡之林Ⅲ"),   
Array
(105040305,0,"#r58级#b   森林迷宫Ⅴ"),   
Array
(925100400,0,"#r58级#b   航行的海盗船"),   
Array
(541010000,0,"#r58级#b   幽灵船1"),   
Array
(261020500,0,"#r58级#b   研究所C-3地区"),   
Array
(551000200,0,"#r59级#b   大红花路2"),   
Array
(105040306,0,"#r59级#b   巨人之林"),   
Array
(500020400,0,"#r60级#b   深丛林"),   
Array
(541000301,0,"#r60级#b   船只留下的记忆"),   
Array
(800020120,0,"#r60级#b   从地图中失踪的村庄"),   
Array
(219020301,0,"#r61级#b   可乐巨人树林"),   
Array
(195030000,0,"#r62级#b   怪猫打猎场"),   
Array
(801020000,0,"#r62级#b   昭和内部街道2"),   
Array
(101030110,0,"#r63级#b   第1军营"),   
Array
(200010302,0,"#r63级#b   黑暗庭院Ⅱ"),   
Array
(251010500,0,"#r64级#b   孤立的湿地"),   
Array
(550000400,0,"#r65级#b   泥泞的河岸3"),   
Array
(261010101,0,"#r65级#b   研究所201号"),   
Array
(250010504,0,"#r66级#b   妖怪森林2"),   
Array
(541010050,0,"#r68级#b   幽灵船6"),   
Array
(251010402,0,"#r68级#b   红鼻子海盗团老巢2"),   
Array
(261020401,0,"#r68级#b   禁止出入(除相关者外)"),   
Array
(251010410,0,"#r70级#b   红鼻子海盗团隐藏处"),   
Array
(551010000,0,"#r72级#b   梦幻主题公园1"),   
Array
(551030001,0,"#r72级#b   掰掰站最久的一环"),   
Array
(682000600,0,"#r72级#b   鬼宅走廊D"),   
Array
(261010102,0,"#r73级#b   研究所202号"),   
Array
(682000501,0,"#r73级#b   鬼宅卧室C"),   
Array
(240010000,0,"#r74级#b   神木村西边森林"),   
Array
(801040001,0,"#r76级#b   停车场"),   
Array
(742010100,0,"#r80级#b   都会广场东部区域"),   
Array
(910500000,0,"#r80级#b   异界弓箭手修炼场"),   
Array
(742010101,0,"#r81级#b   都会广场北部区域"),   
Array
(742010102,0,"#r82级#b   都会广场西部区域"),   
Array
(742010103,0,"#r83级#b   都会广场南部区域"),   
Array
(600020300,0,"#r84级#b   机械蜘蛛洞穴"),   
Array
(742010203,0,"#r84级#b   名人大道南部区域"),   
Array
(240010500,0,"#r84级#b   山羊峡谷"),   
Array
(240050300,0,"#r84级#b   光明洞穴"),   
Array
(240020200,0,"#r88级#b   暗黑半人马领土"),   
Array
(240020200,0,"#r88级#b   暗黑半人马领土"),   
Array
(240020501,0,"#r88级#b   半人马的隐身处"),   
Array
(501030103,0,"#r90级#b   神像秘穴Ⅴ"),   
Array
(801040004,0,"#r90级#b   武器库"),   
Array
(541020200,0,"#r90级#b   乌鲁庄园Ⅱ"),   
Array
(230040100,0,"#r92级#b   深海峡谷2"),   
Array
(551030100,0,"#r94级#b   阴深世界入口"),   
Array
(240040401,0,"#r97级#b   大海兽峡谷"),   
Array
(220060301,0,"#r98级#b   怪异的时间"),   
Array
(881000000,0,"#r98级#b   死灵海岸"),   
Array
(220070301,0,"#r99级#b   时间停止的时间"),   
Array
(240030103,0,"#r99级#b   被隐藏的龙庙1"),   
Array
(240030101,0,"#r100级#b  火焰树林"),   
Array
(702050000,0,"#r100级#b  广场"),   
Array
(230040400,0,"#r102级#b  受难船的墓地"),   
Array
(800020130,0,"#r103级#b  大佛的邂逅"),   
Array
(240040521,0,"#r105级#b  危险的龙之巢穴"),   
Array
(800040315,0,"#r105级#b  梦幻之间"),   
Array
(800040207,0,"#r106级#b  百间廊下"),   
Array
(800040400,0,"#r107级#b  天守阁1阶"),   
Array
(240040510,0,"#r110级#b  死龙巢穴"),   
Array
(240040800,0,"#r110级#b  复活的记忆"),   
Array
(541020400,0,"#r110级#b  乌鲁城外围"),   
Array
(541020610,0,"#r115级#b  毁灭公园Ⅱ"),   
Array
(610020006,0,"#r120级#b  焰红深林堡垒"),   
Array
(270030200,0,"#r124级#b  忘却之路2"),   
Array
(702070400,0,"#r130级#b  藏经阁七层")   


); 
var townmaps = Array(
Array(910000000,0,"#r0级#b    自由市场"), 
Array(1010000,0,  "#r1级#b    彩虹村"), 
Array(60000,0,    "#r1级#b    南港"), 
Array(104000000,0,"#r5级#b    明珠港"), 
Array(100000000,0,"#r8级#b    射手村"), 
Array(101000000,0,"#r8级#b    魔法密林"), 
Array(102000000,0,"#r8级#b    勇士部落"), 
Array(103000000,0,"#r8级#b    废弃都市"), 
Array(120000000,0,"#r8级#b    海盗码头"),
Array(105040300,0,"#r15级#b   林中之城"),  
Array
(110000000,0,"#r37级#b   黄金海岸"),   
Array(200000000,0,"#r35级#b   天空之城"),
Array(220000000,0,"#r30级#b   玩具城"), 
Array(211000000,0,"#r50级#b   冰峰雪域"),  
Array
(240000000,0,"#r70级#b   神木村"),
Array(130000000,0,"#r3级#b    圣地"), 
Array(130000200,0,"#r5级#b    圣地岔路"), 
Array(680000000,0,"#r8级#b    幸福天堂"),
Array(219000000,0,"#r15级#b   可口可乐城"),  
Array(600000000,0,"#r19级#b   新叶城"),
Array(260000000,0,"#r20级#b   沙漠之城"), 
Array(230000000,0,"#r25级#b   水下世界"), 
Array(702090101,0,"#r28级#b   英语村"), 
Array(261000000,0,"#r32级#b   沙翁小镇"), 
Array(800040000,0,"#r36级#b   枫城"),
Array(221000000,0,"#r40级#b   地球防御本部"),
Array(300000000,0,"#r42级#b   艾林森林"),    
Array(222000000,0,"#r45级#b   童话村"),
Array
(682000000,0,"#r48级#b   闹鬼宅邸外部"),
Array(930000000,0,"#r63级#b   毒雾森林"),
Array(270000100,0,"#r91级#b   时间神殿"),
Array(701000000,0,"#r20级#b   东方神州"),
Array(250000000,0,"#r40级#b   武陵"), 
Array(251000000,0,"#r47级#b   百草堂"), 
Array(702000000,0,"#r80级#b   少林寺"), 
Array(702100000,0,"#r80级#b   大雄宝殿"),
Array(740000000,0,"#r24级#b   西门町"), 
Array(741000000,0,"#r37级#b   不夜城"),
Array(742000000,0,"#r80级#b   台湾101大道"),   
Array(800000000,0,"#r8级#b    古代神社"),
Array(801000000,0,"#r43级#b   昭和村"),
Array(500000000,0,"#r8级#b    泰国水上市场"), 
Array(501000000,0,"#r42级#b   暹罗"), 
Array(540010000,0,"#r28级#b   新加坡机场"),
Array(541000000,0,"#r36级#b   新加坡码头"),
Array(261000000,0,"#r45级#b   马来西亚"),  
Array(550000000,0,"#r50级#b   吉隆大都市"),  
Array(551000000,0,"#r61级#b   甘榜村"),
Array(970000000,0,"#r0级#b    各大城市欣赏"),
Array(701000200,0,"#r0级#b    上海豫园"),
Array(925020000,0,"#r0级#b    武陵道场入口"),
Array(709000101,0,"#r0级#b    夏日竞舟"),
Array(802000100,0,"#r0级#b    古代森林"),
Array(741000208,0,"#r0级#b    钓鱼场"),
Array(700000000,0,"#r0级#b    红鸾宫")


	);

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;

importPackage(net.sf.odinms.client);

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dpose();
}
else {
if (status >= 0 && mode == 0) {
cm.sendOk("下次再见!.");
cm.dispose();
return;                    
}
if (mode == 1) {
status++;
}
else {
status--;
}
if (status == 0) {
if (selection == 0) {
cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0##b城镇地图#l\r\n#L1#练级地图#l\r\n#L2#任务地图#l");
}
else if (selection == 1) {
cm.dispose();
}
}
else if (status == 1) {
if (selection == 0) {
var selStr = "选择你的目的地吧.#b";
for (var i = 0; i < townmaps.length; i++) {
selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
}
cm.sendSimple(selStr);
towns = 1;
}
if (selection == 1) {
var selStr = "选择你的目的地吧.#b";
for (var i = 0; i < monstermaps.length; i++) {
selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
}
cm.sendSimple(selStr);
monsters = 1;
}
if (selection == 2) {
var selStr = "选择你的目的地吧.#b";
for (var i = 0; i < bossmaps.length; i++) {
selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
}
cm.sendSimple(selStr);
bosses = 1;
}
if (selection == 3) {
var selStr = "选择你的目的地吧.#b";
for (var i = 0; i < maps.length; i++) {
selStr += "\r\n#L" + i + "#" + maps[i][2] + "";
}
cm.sendSimple(selStr);
bosses = 1;
}
}
else if (status == 2) {
if (towns == 1) {
cm.sendYesNo("你确定要去 " + townmaps[selection][2] + "#k ？");
chosenMap = selection;
towns = 2;
}
else if (monsters == 1) {
cm.sendYesNo("你确定要去 " + monstermaps[selection][2] + "#k ？");
chosenMap = selection;
monsters = 2;
}
else if (bosses == 1) {
cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "#k ？");
chosenMap = selection;
bosses = 2;
}
}
else if (status == 3) {
if (towns == 2) {
if(cm.getMeso()>=townmaps[chosenMap][1]){
cm.warp(townmaps[chosenMap][0], 0);
cm.gainMeso(-townmaps[chosenMap][1]);
}else{
cm.sendOk("你没有足够的金币哦!");
}
cm.dispose();
}
else if (monsters == 2) {
if(cm.getMeso()>=monstermaps[chosenMap][1]){
cm.warp(monstermaps[chosenMap][0], 0);
cm.gainMeso(-monstermaps[chosenMap][1]);
}else{
cm.sendOk("你没有足够的金币哦!");
}
cm.dispose();
}
else if (bosses == 2) {
if(cm.getMeso()>=bossmaps[chosenMap][1]){
cm.warp(bossmaps[chosenMap][0], 0);
cm.gainMeso(-bossmaps[chosenMap][1]);
}else{
cm.sendOk("你没有足够的金币哦!");
}
cm.dispose();
}
}

}
}
