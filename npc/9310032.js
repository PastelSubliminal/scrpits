var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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

            cm.sendOk("��л��Ĺ��٣�");
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
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
                        text += "\t\t\t  #e����׬Ǯϵͳ#b�����鹺��˫�����ʿ��� #k!#n\r\n"
            text += "       "+ ��ɫ��ͷ +"#L21##rLv30.������򼸱��#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "\t\t\t  #e��������ϵͳ#b�����鹺��˫�����ʿ��� #k!#n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#L1##e#d" + ��ɫ��ͷ + "����ţ������#l#L2##d " + ��ɫ��ͷ + "����������#l\r\n\r\n"//3
            text += "#L3##d" + ��ɫ��ͷ + "Ģ��������  #l#L4##d " + ��ɫ��ͷ + "�޾�з����#l\r\n\r\n"//3
            text += "#L5##d" + ��ɫ��ͷ + "��ʬ��������#l#L6##d " + ��ɫ��ͷ + "�ϵ��ܸ���#l\r\n\r\n"//3
            text += "#L7##d" + ��ɫ��ͷ + "������ʦ����#l#L8##d " + ��ɫ��ͷ + "�������#l\r\n\r\n"//3
            text += "#L9##d" + ��ɫ��ͷ + "�����ܸ���  #l#L10##d " + ��ɫ��ͷ + "Ъ���򸱱�#l\r\n\r\n"//3
            text += "#L11##d" + ��ɫ��ͷ + "��β������  #l#L12##d " + ��ɫ��ͷ + "����ָ���#l\r\n\r\n"//3
            text += "#L13##d" + ��ɫ��ͷ + "����Ҷั��#l#L14##d " + ��ɫ��ͷ + "���������#l\r\n\r\n"//3
            text += "#L15##d" + ��ɫ��ͷ + "��ั��#l    #L16##d " + ��ɫ��ͷ + "���������޸���#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
                      text += "\t\t\t#e�߼�����ϵͳ#b����������� #k!#n\r\n"
            text += "" + ��ɫ��ͷ +"#L22##rLv70.�������Ǹ���#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ +"#L17##rLv70.����Ƥ��ū˹��Ѩ#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ +"#L18##rLv70.ʱ�����ı�Դ������ͼ˹#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L19##rLv70.�����ļ�̳��ս#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L20##rLv70.���������ĳ�Ѩ��ս#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//����ţ��
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("����ͼ���Ƶȼ�10������������û���ʸ���ս����ţ������");
                cm.dispose();
              }else{
			cm.warp(104000400);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 2) {//������
            if (cm.getLevel() < 20 ) {  
            cm.sendOk("����ͼ���Ƶȼ�20������������û���ʸ���ս����������");
                cm.dispose();
              }else{
			cm.warp(101030404);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 3) {//Ģ����
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���սĢ��������");
                cm.dispose();
              }else{
			cm.warp(100000005);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 4) {//�޾�з
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���ս�޾�з����");
                cm.dispose();
              }else{
			cm.warp(110040000);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 5) {//��ʬĢ����
            if (cm.getLevel() < 40 ) {  
            cm.sendOk("����ͼ���Ƶȼ�40������������û���ʸ���ս��ʬĢ��������");
                cm.dispose();
              }else{
			cm.warp(105070002);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 6) {//�ϵ���
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�ϵ��ܸ���");
                cm.dispose();
              }else{
			cm.warp(250010304);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 7) {//������ʦ
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս������ʦ����");
                cm.dispose();
              }else{
			cm.warp(250010503);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 8) {//���
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�������");
                cm.dispose();
              }else{
			cm.warp(107000300);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 9) {//������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�����ܸ���");
                cm.dispose();
              }else{
			cm.warp(200010300);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 10) {//Ъ����
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���սЪ���򸱱�");
                cm.dispose();
              }else{
			cm.warp(230020100);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//��β��
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս��β������");
                cm.dispose();
              }else{
			cm.warp(222010310);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 12) {//�����
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս����ָ���");
                cm.dispose();
              }else{
			cm.warp(105090900);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 13) {//����Ҷ�
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս����Ҷั��");
                cm.dispose();
              }else{
			cm.warp(240020101);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//�����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս���������");
                cm.dispose();
              }else{
			cm.warp(240020402);  
				cm.dispose();
                return;
	      }
        } else if (selection == 15) {//���
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս��ั��");
                cm.dispose();
              }else{
			cm.warp(270010500);  
				cm.dispose();
                return;
	      }
        } else if (selection == 16) {//����������
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս���������޸���");
                cm.dispose();
              }else{
			cm.warp(270020500);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 17) {//����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���ս��������");
                cm.dispose();
              }else{
			cm.warp(230040420);  
				cm.dispose();
                return;
	      }
        } else if (selection == 18) {//����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ����Ӹ���");
                cm.dispose();
              }else{
			cm.warp(220080001);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 19) {//����
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ���������");
                cm.dispose();
              }else{
			cm.warp(280030000);  
				cm.dispose();
                return;
	      }
        } else if (selection == 20) {//��������
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ񰵺���������");
                cm.dispose();
              }else{
			cm.warp(240060200);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 21) {//�������
            if (cm.getLevel() < 30) {  
                cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���ս�������");
                cm.dispose();
            }
            if ((cm.getQuestStatus(4103) == 1 && cm.haveItem(4031289 ,1)) || cm.getQuestStatus(8510) == 2) {
                cm.setBossLog("wugong")
                cm.warp(701010321);
                cm.dispose();
                } else if (cm.getBossLog('wugong') > 5){
                    cm.sendOk("���ڻ�������ս������򼣬���������ս5��")
                } else {
                cm.sendOk("��û�����ũ��İ������񣬻���û�о��촦����֤���飡");
                cm.dispose();
            }
            return;
        } else if (selection == 22) {//��������
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ��������Ǹ���");
                cm.dispose();
              }else{
			cm.warp(551030200);  
				cm.dispose();
                return;
	      }  
        }
    }
}