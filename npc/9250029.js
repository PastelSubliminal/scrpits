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
	text += "哈哈，我就是本服的觉醒商人塔俞，我有强悍的觉醒方法可以帮助你把#v1142007##r★暗黑龙王杀手勋章★#k完成一次#b神级觉醒（全属性80，攻击力80，魔力100）#k\r\n需要以下物品：（确定时请在装备栏和其他栏空出一格，已经完成过神级觉醒的装备无效！）\r\n#v1142007# * 1个\r\n#v4000021##d#z4000021# * 500个\r\n#v4000237##d#z4000237# * 200个\r\n#v4000331##d#z4000331# * 200个\r\n#v4000313##d#z4000313# * 300张\r\n#v4032226##d#z4032226# * 300只\r\n#v2140002##d金币 * 2000W\r\n#v4032187##d#z4032187# * 1个\r\n~\r\n"
	text += "\r\n#L1##b我收集了以上物品。确定开始觉醒装备";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(cm.haveItem(4000313, 500) && cm.haveItem(4000021,500) && cm.haveItem(4000237,200) && cm.haveItem(4000331,200)  && cm.haveItem(4032226,500) && cm.haveItem(1142007,1) && cm.canHold(1142007,1)){
				cm.gainItem(4000313, -500);
				cm.gainItem(4000021, -500);
				cm.gainItem(4000237, -300);
				cm.gainItem(4000331, -300);
				cm.gainItem(4032226, -500);
                                cm.gainMeso(-50000000);
				cm.gainItem(1142007, -1);
                cm.gainItem(4032187,-1)
                                cm.gainItem(1142007,80,80,80,80,0,0,80,120,0,0,0,0,0,0);
            cm.sendOk("觉醒成功，您的勋章已经超越古今！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]★暗黑龙王杀手勋章★神级觉醒成功，威力突破天际，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你的材料不足，请核对材料后再试！\r\n");
            cm.dispose();
			}
		}
    }
}




