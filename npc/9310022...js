var status = 0;
var itemList = 
Array(     
			Array(2040017,800,1,1), //ͷ???????ʾ???60%
			Array(2040105,800,1,1), //????װ?λر??ʾ???10%
			Array(2040106,800,1,1), //????װ?λر??ʾ???60%
			Array(2040200,800,1,1), //?۲?װ???????ʾ???10%
			Array(2040201,800,1,1), //?۲?װ???????ʾ???60%
			Array(2040205,800,1,1), //?۲?װ??????????10%
			Array(2040206,800,1,1), //?۲?װ??????????60%		
			Array(2040301,800,1,1), //???????????? 60
			Array(2040302,800,1,1), //???????????? 10
			Array(2040501,800,1,1), //ȫ?????????ݾ???60
			Array(2040513,800,1,1), //ȫ??????????????60
			Array(2040613,800,1,1), //??ȹ???ݾ???60%
			Array(2040704,800,1,1), //Ь????Ծ????60
			Array(2040705,800,1,1), //Ь????Ծ????10
			Array(2040804,800,1,1), //???׹???????60
			Array(2040805,800,1,1), //???׹???????10
			Array(2040816,800,1,1), // ????ħ??????10%
			Array(2040817,800,1,1), //????ħ??????60%
			Array(2040914,800,1,1), // ???ƹ???????60%
			Array(2041013,800,1,1), //????????????60
			Array(2041016,800,1,1), //????????????60
			Array(2041019,800,1,1), //???????ݾ???60
			Array(2041022,800,1,1), //????????????60
			Array(2043002,800,1,1), //???ֽ?10
			Array(2043001,800,1,1), //???ֽ?60
			Array(2044002,800,1,1), //˫?ֽ?10
			Array(2044001,800,1,1), //˫?ֽ?60
			Array(2044302,800,1,1), //ǹ10
			Array(2044301,800,1,1), //ǹ60
			Array(2044502,800,1,1), //??10
			Array(2044501,800,1,1), //??60
			Array(2044602,800,1,1), //??10
			Array(2044601,800,1,1), //??60
			Array(2044702,800,1,1), //ȭ??10
			Array(2044701,800,1,1), //ȭ??60
			Array(2043802,800,1,1), //????10
			Array(2043801,800,1,1), //????60
			Array(2043702,800,1,1), //????10
			Array(2043701,800,1,1), //????60
			Array(1102289,700,1), //????β??
			Array(1302066,700,1), //30???ֽ?
			Array(1332057,700,1), //?̽?
			Array(1382040,700,1), //????
			Array(1402040,700,1), //˫?ֽ?
			Array(1472056,700,1), //ȭ??
			Array(1452046,700,1), //??
			Array(1432041,700,1), //ǹ
			Array(1012240,700,1), //??Ѫ????
			Array(1112318,700,1) //1????ԧ????ָ.
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("????ʹ???𣿡??ҵĶ??????и???#b???????λ????ᡢװ????????????#kŶ??");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4170013, 1)) {
            cm.sendYesNo("???????????.?????齱?????齱??????????10%/60%???ᣬ??ְҵ#v1382040#,#v1012240#??#v1112318#???Ƚ???.");
        } else {
            cm.sendOk("???????????.?????齱?????齱??????????10%/60%???ᣬ??ְҵ#v1382040#,#v1012240#??#v1112318#???Ƚ???..?㱳??????1??#b#t4170013##k???");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 900);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "??????????齱", notice);
            if (item != -1) {
                cm.gainItem(4170013, -1);
                cm.sendOk("???????? #b#t" + item + "##k " + quantity + "????");
            } else {
                cm.sendOk("??ȷʵ??#b#t4170013##k?????????ǣ?????ȷ???ڱ?????װ???????ģ????????????Ƿ???һ?????ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("???????????????ʲô??û???õ???");
            cm.gainItem(4170013, -1);
            cm.safeDispose();
        }
    }
}