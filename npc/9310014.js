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
	text += "想要#v1002357##r★扎昆头盔★#k\r\n需要以下物品：（普通属性，未来可通过觉醒提升）\r\n#v4000313##d#z4000313# * 100张\r\n#v4032226##d#z4032226# * 100只\r\n#v2140002##d金币 * 500W\r\n~\r\n"
	text += "\r\n#L1##b我已集齐物品。确定兑换装备";
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
            if(cm.haveItem(4000313,100) && cm.haveItem(4032226,100) && cm.canHold(1002357,1)){
				cm.gainItem(4000313, -100);
				cm.gainItem(4032226, -100);
                cm.gainMeso(-5000000);
                cm.gainItem(1002357,1);
            cm.sendOk("恭喜你，兑换成功，快穿上它吧！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]★扎昆头盔★兑换成功，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你的材料不足，请核对材料后再试！\r\n");
            cm.dispose();
			}
		}
    }
}




