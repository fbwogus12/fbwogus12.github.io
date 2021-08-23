findBtn.addEventListener('click', function () {
    var sound1 = parseInt(document.querySelector('input[name="sound1"]:checked').value);
    var sound2 = parseInt(document.querySelector('input[name="sound2"]:checked').value);
    var sound3 = parseInt(document.querySelector('input[name="sound3"]:checked').value);
    var sound4 = parseInt(document.querySelector('input[name="sound4"]:checked').value);
    var sound5 = parseInt(document.querySelector('input[name="sound5"]:checked').value);
    var sound6 = parseInt(document.querySelector('input[name="sound6"]:checked').value);
    var sound7 = parseInt(document.querySelector('input[name="sound7"]:checked').value);
    var sound8 = parseInt(document.querySelector('input[name="sound8"]:checked').value);
    var sound9 = parseInt(document.querySelector('input[name="sound9"]:checked').value);
    var q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    var q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    var q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    var q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
    var q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);

    random = Math.floor(Math.random() * 100);
    var linear = sound1 + sound2;
    var noiseless = sound4 + sound5 + sound9;
    var realforce = sound3 + sound4;
    var solidState = sound3 + sound4 + sound5;
    var click = sound6;
    var nonClick = sound7 + sound8;

    var usingTime = q1;
    var usingType = q2;
    var design = q3;
    var numpad = q4;
    var office = q5;
    console.log(linear);
    processor[0] = linear >= 7 ? true : false;
    processor[1] = noiseless >= 8 ? true : false;
    processor[2] = realforce >= 7 ? true : false;
    processor[3] = solidState >= 9 ? true : false;
    processor[4] = click >= 3 ? true : false;
    processor[5] = nonClick >= 7 ? true : false;
    processor[6] = usingTime >= 3 ? true : false;
    processor[7] = usingType == 5 || usingType == 3 ? false : true;
    processor[8] = design == 5 ? true : false;
    processor[9] = numpad >= 5 ? true : false;
    processor[10] = office >= 5 ? true : false;
    processor[11] = usingType == 2 ? true : false;
    processor[12] = usingType == 4 ? true : false;
        //category1~3 : 리니어 계열 풀배열 키보드
        //category4~6 : 리니어 계열 텐키리스 키보드
        //category7~8 : 저소음 계열 풀배열 키보드
        //category9~10 : 저소음 계열 텐키리스 키보드
        //category11~12 : 저소음 계열 무접점 풀배열 키보드 
        //category13~14 : 저소음 계열 무접점 텐키리스 키보드  
        //category15~16 : 무접점 풀배열 키보드  // 콕무엠, 리얼포스 108
        //category17~18: 무접점 텐키리스 키보드 // 콕무, 리얼포스 사진
        //category19~20 : 클릭 계열 풀배열 키보드 체리 3.0s, k660 108 click
        //category21~22 : 클릭 계열 텐키리스 키보드 체리3000s, 덱거북선 청축
        //category23~24 : 넌클릭 계열 풀배열 키보드 레오폴드 108nonclick, filco108nonclick
        //category25~26 : 넌클릭 계열 텐키리스 키보드 leopold87nonclick, 덱거북선87 사진
        //category27~28 : 일반 사무용 풀배열 키보드 : dt35, k120
        //category29 : 일반 사무용 텐키리스 키보드 : k150
        //category30~31 : 게이밍 풀배열 커세어, ck108
        //category32~33 : k511, ck87
        //category34~35 : 풀배열 펜타그래프 2종 mx key / k580

        //3개의 질문에 체크만 했어도 결과 보여주도록 만들자. 모든 경우의 수를 만들 수는 없음. 1~2점 / 3~4점으로만 나누고 q1~4의 총 경우의 수는 약 37,000가지
        //디자인 + 게임 + 3시간 이상 - 커세어, 로지텍 등
        //장소 : 사무실 or 독실, 집
    /*1*/if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && !processor[10] && random % 3 == 0) category(1);
    /*2*/else if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && !processor[10] && random % 3 == 1) category(2);
    /*3*/else if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && !processor[10] && random % 3 == 2) category(3);
    /*4*/else if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && !processor[10] && random % 3 == 0) category(4);
    /*5*/else if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && !processor[10] && random % 3 == 1) category(5);
    /*6*/else if (processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && !processor[10] && random % 3 == 2) category(6);
    /*7*/else if (!processor[0] && processor[1] && !processor[2] && !processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 0) category(7);
    /*8*/else if (!processor[0] && processor[1] && !processor[2] && !processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 1) category(8);
    /*9*/else if (!processor[0] && processor[1] && !processor[2] && !processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 0) category(9);
    /*10*/else if (!processor[0] && processor[1] && !processor[2] && !processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 1) category(10);
    /*11*/else if (!processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 0) category(11);
    /*12*/else if (!processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 1) category(12);
    /*13*/else if (!processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 0) category(13);
    /*14*/else if (!processor[0] && processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 1) category(14);
    /*15*/else if (!processor[0] && !processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 0) category(15);
    /*16*/else if (!processor[0] && !processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && processor[9] && processor[10] && random % 2 == 0) category(16);
    /*17*/else if (!processor[0] && !processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 0) category(17);
    /*18*/else if (!processor[0] && !processor[1] && processor[2] && processor[3] && !processor[4] && !processor[5] && processor[6] && !processor[9] && processor[10] && random % 2 == 0) category(18);
    /*19*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && processor[4] && !processor[5] && processor[6] && processor[9] && !processor[10] && random % 2 == 0) category(19);
    /*20*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && processor[4] && !processor[5] && processor[6] && processor[9] && !processor[10] && random % 2 == 1) category(20);
    /*21*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && processor[4] && !processor[5] && processor[6] && !processor[9] && !processor[10] && random % 2 == 0) category(21);
    /*22*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && processor[4] && !processor[5] && processor[6] && !processor[9] && !processor[10] && random % 2 == 1) category(22);
    /*23*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && !processor[4] && processor[5] && processor[6] && processor[9] && !processor[10] && random % 2 == 0) category(23);
    /*24*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && !processor[4] && processor[5] && processor[6] && processor[9] && !processor[10] && random % 2 == 1) category(24);
    /*25*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && !processor[4] && processor[5] && processor[6] && !processor[9] && !processor[10] && random % 2 == 0) category(25);
    /*26*/else if (!processor[0] && !processor[1] && !processor[2] && !processor[3] && !processor[4] && processor[5] && processor[6] && !processor[9] && !processor[10] && random % 2 == 1) category(26);
    /*7*/else if (processor[10] && processor[9] && random % 6 == 0) category(7);
    /*8*/else if (processor[10] && processor[9] && random % 6 == 1) category(8);
    /*27*/else if (processor[10] && processor[9] && random % 6 == 2) category(27);
    /*28*/else if (processor[10] && processor[9] && random % 6 == 3) category(28);
    /*34*/else if (processor[10] && processor[9] && random % 6 == 4) category(34);
    /*35*/else if (processor[10] && processor[9] && random % 6 == 5) category(35);
    /*9*/else if (processor[10] && !processor[9] && random % 3 == 0) category(9);
    /*10*/else if (processor[10] && !processor[9] && random % 3 == 1) category(10);
    /*29*/else if (processor[10] && !processor[9] && random % 3 == 2) category(29);
    /*30*/else if (processor[11] && processor[9] && random % 2 == 0) category(30);
    /*31*/else if (processor[11] && processor[9] && random % 2 == 1) category(31);
    /*32*/else if (processor[11] && !processor[9] && random % 2 == 0) category(32);
    /*33*/else if (processor[11] && !processor[9] && random % 2 == 1) category(33);
    /*27*/else if (processor[12] && processor[9] && random % 2 == 0) category(27)
    /*28*/else if (processor[12] && processor[9] && random % 2 == 1) category(28)
    /*29*/else if (processor[12] && !processor[9] && random % 2 == 1) category(29)
    /*all*/else category(random % 36); //취향 특정 불가 랜덤 추천.



    page2.style.height = '400px';
    page1.style.transform = 'translate(-500px, 0)';
    page2.style.transform = 'translate(-500px, 0)';
    page1.innerHTML = '<div class="deco-div1"></div>';
    page1.innerHTML += '<h1>다시 검사하려면 여기를 클릭해주세요!</h1>';
    page1.innerHTML += '<div class="deco-div2"></div>';
    page1.innerHTML += '<h2 style="color: red">Click!</h2>';
});
});