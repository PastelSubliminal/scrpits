function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("感谢使用.");
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
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "哈哈，我就是本服的觉醒商人大师，我有专业的觉醒方法可以帮助你把#v1142007##r★暗黑龙王杀手勋章★#k完成一次#b中级觉醒（全属性30，攻击力20，魔力30）#k\r\n需要以下物品：（确定时请在装备栏和其他栏空出一格，已经完成过中级觉醒的装备无效！）\r\n#v1142007# * 1个\r\n#v4000006##d#z4000006# * 100个\r\n#v4000023##d#z4000023# * 100个\r\n#v4000095##d#z4000095# * 100个\r\n#v4000313##d#z4000313# * 200张\r\n#v4032226##d#z4032226# * 200只\r\n#v2140002##d金币 * 1000W\r\n#v4032185##d#z4032185# * 1个~\r\n"
	text += "\r\n#L1##b我收集了以上物品。确定开始觉醒装备";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313, 200) && cm.haveItem(4000006,100) && cm.haveItem(4000023,100) && cm.haveItem(4000095,100)  && cm.haveItem(4032226,200) && cm.haveItem(1142007,1) && cm.canHold(1142007,1) && cm.haveItem(4032185,1) && cm.canHold(4032186,1)){
				cm.gainItem(4000313, -200);
				cm.gainItem(4000006, -100);
				cm.gainItem(4000023, -100);
				cm.gainItem(4000095, -100);
				cm.gainItem(4032226, -200);
                        cm.gainMeso(-10000000);
				cm.gainItem(1142007, -1);
                cm.gainItem(4032185,-1);
                cm.gainItem(4032186,1)
                        cm.gainItem(1142007,30,30,30,30,0,0,20,30,0,0,0,0,0,0);
            cm.sendOk("觉醒成功，威力显著提升！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]★暗黑龙王杀手勋章★中级觉醒成功，威力显著提升，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你的材料不足，或背包空间不足，请核对材料后再试！\r\n");
            cm.dispose();
			}
		}
    }
}




