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
                
   cm.sendOk("感谢你的光临！");
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
   cm.sendSimple("      #e您好！我是#r觉醒商人#k活动中心主任：佳佳\r\n\r\n  #d您目前拥有的金币:#r" + cm.getMeso() + "   \r\n#r #L0#告诉我什么是觉醒商人#l #k\r\n\r\n #b#L1#初级勋章觉醒#l #b#L4#中级勋章觉醒#l #L6#高级勋章觉醒#l     \r\n#l #L2#神级勋章觉醒#l  \r\n\r\n #L7#神级扎头觉醒 #L8#神级披风觉醒#l #L9#神级腰带觉醒#l   \r\n #L3#神级项环觉醒 #l");
    } else if (status == 1) {
           if (selection == 0) {
      cm.sendOk("#e觉醒商人是对玩家所拥有的#r特定装备#k进行觉醒交换，玩家在拥有#r对应装备#k的前提下，通过收集#r觉醒材料#k，即可兑换觉醒装备，属性威力大幅度提升！");
            cm.dispose();
    }else if  (selection == 1) {
           cm.sendOk("#e自由市场1洞，快来觉醒吧！");
		       cm.dispose();
    }else if  (selection == 4) {
           cm.sendOk("#e自由市场1洞，快来觉醒吧！");
		       cm.dispose();
    }else if  (selection == 6) {
           cm.sendOk("#e高级觉醒商人不在家！\r\n给点提示：#r中国的地盘，不能查看大地图之处！#k");
		       cm.dispose(); 
    }else if  (selection == 2) {
           cm.sendOk("#e神级觉醒商人出去云游了。。。\r\n给点提示：#r东南亚国家，自己找！");
		       cm.dispose(); 
    }else if  (selection == 7) {
           cm.sendOk("#e提示：炎热的大地，留下了他的足迹。。。");
		       cm.dispose();
    }else if  (selection == 8) {
           cm.sendOk("#e提示：金银岛的核心部位，好像发现了他的踪迹");
		       cm.dispose();
    }else if  (selection == 9) {
          cm.sendOk("#e提示：就在昭和村！");
		       cm.dispose(); 
    }else if  (selection == 3) {
           cm.sendOk("#e提示：还在昭和村！");
		       cm.dispose();
    }else if  (selection == 10) {
           cm.sendOk("#e飞侠的码头，知道在哪吧！");
		       cm.dispose();


}
}
}
}

