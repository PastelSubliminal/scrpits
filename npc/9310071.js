/*
*   �����̵꣬��ǿ��  NPC
*   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ���ǻ���ð�յ���#r�һ�ϵͳ#k�����ˣ�30�����ϵ���Ҳſ���ʹ���ҵľ���һ�Ŷ\r\n\r\n��Ŀǰ�У� #e#r" + cm.getMeso() + "#k#n ���\r\n#L0##e100W ���====#r10W ����#n#l#k\r\n\r\n#L1##e100W ���====#r10,000 ��ȯ#k#n#l#k\r\n#L2#100��#d#v4001126##d=====#r10,000��ȯ#k#n#l\r\n#L3#100��#d#v4001126##d=====#r100W ���#n#l#k\r\n#L6#100��#d#v4001126##d=====#r10��#k#v4000313##n#l#k\r\n#L4#10��#d#v4000313##d======#r100W ���#n#l#k\r\n#L5#10ֻ#d#v4032226##d=====#r200W ���#n#l#k\r\n\r\n#L7##e1000W ���====#r100W ����#n#l#k\r\n\r\n#L8##e1�� ���====#r1000W����#n#l#k");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getMeso() >= 1000000 && cm.getLevel() >= 30){
                cm.sendOk("��ϲ�㣬������ 100000 ����ֵ! .");
                cm.gainMeso(-1000000);
                cm.gainExp(100000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң���û�е���30�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������ 10000 ��ȯ! .");
                cm.gainMeso(-1000000);
                cm.gainNX(10000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainNX(10000);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 10000 ��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10000��ȯ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001126,100)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 1000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�1000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,10)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4000313,-10);
				cm.sendOk("��ϲ�㣬������ 1000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10�Żƽ��Ҷ�һ�1000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(2000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10ֻ�ƽ������һ�2000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ��������Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000 && cm.getLevel() >= 30){
                cm.sendOk("��ϲ�㣬������ 1000000 ����ֵ! .");
                cm.gainMeso(-10000000);
                cm.gainExp(1000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң���û�дﵽ30�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000 && cm.getLevel() >= 30){
                cm.sendOk("��ϲ�㣬������ 10000000 ����ֵ! .");
                cm.gainMeso(-100000000);
                cm.gainExp(10000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1�� ��ң���û�дﵽ30�����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}