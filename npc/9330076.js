//odinms_MS
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.1sendSimple("\t\t\t\t\t#e#r流浪商人#b系列#n\r\n#d====================================================\r\n#d目前账户剩余金币:"+ cm.getMeso() + "\r\n====================================================\r\n#k#b阿弥陀佛，贫僧法号法海，#n\r\n\r\n歌云：法海你不懂爱，雷峰塔会掉下来#k\r\n#k#r#e非洲农业不发达，必须要用金克拉！所有攻击200的武器都在我这，随便挑随便选啦。。。#n\r\n\r\n#L1##r#e聊聊关于流浪商人的事)#b#n\r\n\r\n#L2#新黄金枫叶单手剑（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L3#新黄金枫叶斧子（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L4#新黄金枫叶锤子（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L5#新黄金枫叶短刀（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L6#新黄金枫叶短杖（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L7#新黄金枫叶枪（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L8#新黄金枫叶弓（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L9#新黄金枫叶弩（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L10#新黄金枫叶拳套（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L11#新黄金枫叶指节（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L12#新黄金枫叶短枪（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L13#新黄金枫叶双手剑（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L14#新黄金枫叶战斧（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L15#新黄金枫叶巨锤（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L16#新黄金枫叶开山斧（全属性200==#r300张#k#v4000313#）#b#n\r\n\r\n#L17#新黄金枫叶长杖（全属性200==#r300张#k#v4000313#）");			               
    } else if (status == 1) {
      if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b装备兑换规则（很重要）#n#d\r\n====================================================#k\r\n哈哈，原来是那只小猪猪啊，想当初老衲出门修行，途中偶遇几只猪猪，正所谓众生皆苦，老衲为了让它免受杀戮，用法力点化了它的身体，长出翅膀也不稀奇啊！#d\r\n====================================================#k\r\n你说什么，它都肥得飞不动啦，老衲这就写信督促它快快减肥，以免它之前的修行毁于一旦！#d\r\n====================================================#k\r\n哎呀，有一件大事我给忘记了，你能帮老衲一个忙吗？#k#d\r\n====================================================#k\r\n在#r东南亚国家#k，有一只飞天猪，已经独自修行了999年，老衲年事已高不便远行，你能替老衲去看看它吗？#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶单手剑.");
                cm.gainItem(1302172,200,200,200,200,0,0,90,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶单手剑！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶斧子.");
                cm.gainItem(1312071,200,200,200,200,0,0,90,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶斧子！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 4){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶锤子.");
                cm.gainItem(1322105,200,200,200,200,0,0,90,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶锤子！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 5){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶短刀.");
                cm.gainItem(1332147,200,200,200,200,0,0,86,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶短刀！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 6){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶短杖.");
                cm.gainItem(1372099,200,200,200,200,150,150,56,94,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶短杖！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 7){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶枪.");
                cm.gainItem(1432098,200,200,200,200,0,0,94,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶枪！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 8){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶弓.");
                cm.gainItem(1452128,200,200,200,200,150,0,87,0,0,0,0,0,13,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶弓！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 9){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶弩.");
                cm.gainItem(1462116,200,200,200,200,150,0,90,0,0,0,0,0,13,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶弩！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 10){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶拳套.");
                cm.gainItem(1472139,200,200,200,200,0,0,40,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶拳套！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 11){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶指节.");
                cm.gainItem(1482101,200,200,200,200,150,0,68,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶指节！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 12){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶短枪.");
                cm.gainItem(1492100,200,200,200,200,200,200,200,200,100,100,100,100,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶短枪！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 13){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶双手剑.");
                cm.gainItem(1402109,200,200,200,200,0,0,92,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶双手剑！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 14){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶战斧.");
                cm.gainItem(1412070,200,200,200,200,0,0,94,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶战斧！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 15){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶巨锤.");
                cm.gainItem(1422072,200,200,200,200,0,0,94,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶巨锤！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
                  }else if(selection == 16){ 	           
                if (cm.haveItem(4000313,300)){
                cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶开山斧.");
                cm.gainItem(1442135,200,200,200,200,0,0,94,0,0,0,0,0,0,0);
                cm.gainItem(4000313,-300);
                cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶开山斧！！");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
                cm.dispose();	 
                  }
             }else if(selection == 17){ 	           
              if (cm.haveItem(4000313,300)){
              cm.sendOk("#r#e恭喜您获得全属性200的新黄金枫叶长杖.");
              cm.gainItem(1382123,200,200,200,200,200,80,61,96,0,0,0,0,0,0);
              cm.gainItem(4000313,-300);
              cm.喇叭(3,"厉害了word哥！！恭喜您获得了全属性200的新黄金枫叶长杖！！");
              cm.dispose();		
              }else{ 
              cm.sendOk("#b您没有足够的黄金枫叶进行购买,请努力收集吧.");
              cm.dispose();	 
                }
           }
	}
    }
}
