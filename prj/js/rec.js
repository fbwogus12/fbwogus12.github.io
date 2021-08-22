function setClock() {
    var curDate = new Date();
    var hour = curDate.getHours();
    var marker = hour >= 12 ? 'PM' : 'AM';
    var hour_ = hour % 12;
    hour = (hour_ == 0) ? 12 : (hour_ < 10) ? '0' + hour_ : hour_;

    var min = setTime(curDate.getMinutes());
    var sec = setTime(curDate.getSeconds());
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var date = curDate.getDate();

    date = parseInt(date) < 10 ? '0' + date : date;
    const w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateForDay = new Date(year, month, date);
    var day = w[dateForDay.getDay()];

    const m = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct', 'Nov.', 'Dec'];
    document.getElementsByClassName('time')[0].innerHTML = hour + ':' + min + ':' + sec + ', ' + marker;
    document.getElementsByClassName('date')[0].innerHTML = day + ', ' + m[month] + ' ' + date + ', ' + year;
}

function setTime(time) {
    var result = parseInt(time) < 10 ? '0' + time : time;
    return result;
}

window.addEventListener('DOMContentLoaded', function () {
    //대문 시계
    setClock();
    setInterval(setClock, 1000);

    //변수
    var switch1 = true;
    var switch2 = true;
    var random;

    //엘리먼트
    var rec = document.getElementsByClassName('rec')[0];
    var page1 = document.getElementsByClassName('page1')[0];
    var page2 = document.getElementsByClassName('page2')[0];
    var result = document.getElementsByClassName('result-page')[0];
    var findBtn = document.getElementsByClassName('find')[0];

    var time = document.getElementsByClassName('time')[0];
    var date = document.getElementsByClassName('date')[0];

    //이벤트
    time.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });

    date.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });

    rec.addEventListener('click', function () {
        location.href = '/prj/main/recommendKeyboard.html';
    })

    page1.addEventListener('click', function () {
        if (switch1 == true) {
            page1.style.transform = 'rotateY(-160deg)';
            page1.innerHTML = '<h1>☞</h1> '
            page2.style.height = '1750px';
            switch1 = false;
        } else {
            page1.style.transform = 'rotateY(0deg)';
            page1.innerHTML = '<div class="deco-div1"></div>';
            page1.innerHTML += '<p style="font-weight:bolder">각 문항 별로 1(매우 나쁨) 2(나쁨) 3(좋음) 4(매우 좋음)</p>';
            page1.innerHTML += '<p style="font-weight: bolder">을 체크하여 주세요.</p>';
            page1.innerHTML += '<div class="deco-div2"></div>';
            page1.innerHTML += '<h1>시작하려면</h1>';
            page1.innerHTML += '<h1> 아무데나 눌러주세요<h1>';
            page1.innerHTML += '<h2 style="color: red">Click!</h2>';
            page2.style.height = '400px';
            result.style.height = '0';
            page1.style.transform = 'translate(0, 0)';
            page2.style.transform = 'translate(0, 0)';
            switch1 = true;
        }
    });

    findBtn.addEventListener('click', function () {
        //설문조사 결과
        var sound1 = parseInt(document.querySelector('input[name="sound1"]:checked').value);
        var sound2 = parseInt(document.querySelector('input[name="sound2"]:checked').value);
        var sound3 = parseInt(document.querySelector('input[name="sound3"]:checked').value);
        var sound4 = parseInt(document.querySelector('input[name="sound4"]:checked').value);
        var sound5 = parseInt(document.querySelector('input[name="sound5"]:checked').value);
        var sound6 = parseInt(document.querySelector('input[name="sound6"]:checked').value);
        var sound7 = parseInt(document.querySelector('input[name="sound7"]:checked').value);
        var sound8 = parseInt(document.querySelector('input[name="sound8"]:checked').value);
        var sound9 = parseInt(document.querySelector('input[name="sound9"]:checked').value);
        var sound10 = parseInt(document.querySelector('input[name="sound10"]:checked').value);
        var q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
        var q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
        var q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
        var q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
        var q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);

        var linear = sound1 + sound2;
        var noiseless = sound4 + sound9 + sound10;
        var realforce = sound3 + sound4;
        var solidState = sound3 + sound4 + sound5;
        var click = sound6;
        var nonClick = sound7 + sound8;

        var usingTime = q1;
        var usingType = q2;
        var design = q3;
        var numpad = q4;
        var office = q5;
        //--------------------------------------

        var processor = [];
        //결과 조사
        processor[0] = linear >= 6 ? true : false;
        processor[1] = noiseless >= 9 ? true : false;
        processor[2] = realforce >= 6 ? true : false;
        processor[3] = solidState >= 9 ? true : false;
        processor[4] = click >= 3 ? true : false;
        processor[5] = nonClick >= 6 ? true : false;
        processor[6] = usingTime >= 2 ? true : false;
        processor[7] = usingType == 5 || usingType == 3 ? false : true;
        processor[8] = design == 5 ? true : false;
        processor[9] = numpad >= 5 ? true : false;
        processor[10] = office >= 5 ? true : false;
        processor[11] = usingType == 2 ? true : false;
        processor[12] = usingType == 4 ? true : false;
        //
        var remained = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

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

        if ((num = orderShuffle(processor, remained)) != false) {//여러 가지 선택 가능한 집합
            category(num);
        } else {
            //사운드에 모두 1~2점을 줘서 마음에 드는 키보드가 없는 사용자.
            let random = Math.floor(Math.random() * 100);
    /*7*/if (processor[10] && processor[9] && processor[6] && random % 4 == 0) category(7);
    /*8*/else if (processor[10] && processor[9] && processor[6] && random % 4 == 1) category(8);
    /*27*/else if (processor[10] && processor[9] && !processor[6] && random % 2 == 0) category(27);
    /*28*/else if (processor[10] && processor[9] && !processor[6] && random % 2 == 1) category(28);
    /*34*/else if (processor[10] && processor[9] && processor[6] && random % 4 == 2) category(34);
    /*35*/else if (processor[10] && processor[9] && processor[6] && random % 4 == 3) category(35);
    /*9*/else if (processor[10] && !processor[9] && processor[6] && random % 2 == 0) category(9);
    /*10*/else if (processor[10] && !processor[9] && processor[6] && random % 2 == 1) category(10);
    /*29*/else if (processor[10] && !processor[9] && !processor[6] && random) category(29);
        //오직 사무실 제품만 나와야 함.
    /*30*/else if (processor[11] && processor[9] && processor[6] && random % 2 == 0) category(30);
    /*31*/else if (processor[11] && processor[9] && processor[6] && random % 2 == 1) category(31);
    /*32*/else if (processor[11] && !processor[9] && processor[6] && random % 2 == 0) category(32);
    /*33*/else if (processor[11] && !processor[9] && processor[6] && random % 2 == 1) category(33);
    /*27*/else if (processor[12] && processor[9] && processor[6] && random % 2 == 0) category(27)
    /*28*/else if (processor[12] && processor[9] && processor[6] && random % 2 == 1) category(28)
    /*29*/else if (processor[12] && !processor[9] && processor[6]) category(29)
        //여기까지는 게임, 개발 + 사무실 제품
    /*all*/else category((Math.floor(Math.random() * 400) % 36)); //취향 특정 불가 랜덤 추천.
        }



        page2.style.height = '400px';
        page1.style.transform = 'translate(-500px, 0)';
        page2.style.transform = 'translate(-500px, 0)';
        page1.innerHTML = '<div class="deco-div1"></div>';
        page1.innerHTML += '<h1>다시 검사하려면 여기를 클릭해주세요!</h1>';
        page1.innerHTML += '<div class="deco-div2"></div>';
        page1.innerHTML += '<h2 style="color: red">Click!</h2>';
    });
});

function orderShuffle(processor, remained) {
    var slt;
    var result;

    while (true) {
        idx = (Math.floor(Math.random() * 400) % remained.length);
        if (remained.length == 0) {
            result = false;
            break;
        }
        switch (remained[idx]) {
            //case1~3 / case4~6 / case7,8 / case9,10 / case11,12 / case13,14 / case15,16 / case17,18 / case19,20 / case21,22 / case 23,24 / case 25,26 동일 카테고리
            case 1: case 2: case 3:
    /*1,2,3*/  slt = (processor[0] && processor[6] && processor[9] && !processor[10]);
                break;
            case 4: case 5: case 6:
    /*4,5,6*/  slt = (processor[0] && processor[6] && !processor[9] && !processor[10]);
                break;
            case 7: case 8:
    /*7, 8*/  slt = (processor[1] && processor[6] && processor[9]);
                break;
            case 9: case 10:
    /*9, 10*/  slt = (processor[1] && processor[6] && !processor[9]);
                break;
            case 11: case 12:
    /*11,12*/  slt = ((processor[1] || processor[2] || processor[3]) && processor[6] && processor[9] && processor[10]);
                break;
            case 13: case 14:
    /*13,14*/  slt = ((processor[1] || processor[2] || processor[3]) && processor[6] && !processor[9] && processor[10]);
                break;
            case 15: case 16:
    /*15,16*/  slt = ((processor[2] || processor[3]) && processor[6] && processor[9]);
                break;
            case 17: case 18:
    /*17, 18*/  slt = ((processor[2] || processor[3]) && processor[6] && !processor[9]);
                break;
            case 19: case 20:
    /*19, 20*/  slt = (processor[4] && processor[6] && processor[9] && !processor[10]);
                break;
            case 21: case 22:
    /*21,22*/ slt = (processor[4] && processor[6] && !processor[9] && !processor[10]);
                break;
            case 23: case 24:
    /*23,24*/  slt = (processor[5] && processor[6] && processor[9] && !processor[10]);
                break;
            case 25: case 26:
    /*25,26*/  slt = (processor[5] && processor[6] && !processor[9] && !processor[10]);
                break;
            default:
                slt = false;
        }
        if (slt) {
            result = remained[idx];
            break;
        }
        else {
            remained.splice(idx, 1);
            continue;
        }
    }
    return result;
}

function category(num) {
    var resultPage = document.getElementsByClassName('result-page')[0];
    var imgSrc = resultPage.children[0];
    var keyboard = document.getElementsByClassName('keyboard')[0];
    var content = document.getElementsByClassName('content_style')[0];
    var switch_ = content.children[0];
    var plate = content.children[1];
    var housing = content.children[2];
    var keycaps = content.children[3];
    var pressure = content.children[4];
    var price = content.children[5];
    var grade = content.children[6];
    var myOp = content.children[7];

    var slt;
    function category1() { //체리3.0s 풀배열
        resultPage.style.height = '940px';
        imgSrc.setAttribute('src', '../img/cherry3.0s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=Xvh5BlORhB8&ab_channel=jsC" target="_black">체리 3.0s 적축</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리적축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 알루미늄 + 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g - 사무용 키보드보다 가벼움';
        price.innerHTML = '가격 : 89000원(rgb x) / 129,000원(rgb)';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>스위치의 맛을 그대로 느낄 수 있음.</p>';
        myOp.innerHTML += '<p>입문자에게 강추.</p>';
        myOp.innerHTML += '<p>기계식 키보드 중 가장 많이 선호하는 적축 + 넘패드</p>';
        myOp.innerHTML += '<p>rgb 버전은 ABS 키캡이라 별로, 가격도 비쌈.</p>';
        myOp.innerHTML += '<p>rgb가 반드시 필요하지 않은 이상 3.0s일반으로</p>';
    }

    function category2() { //레오폴드 풀배열
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/leopold108.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=vbMVE4mu-UA&ab_channel=%EB%8C%80%EC%9D%B8%EC%B9%AD%EC%8B%9C%EC%A0%90" target="_black">레오폴드 적축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리적축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g - 사무용 키보드보다 가벼움';
        price.innerHTML = '가격 : 142,500원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>좋은 AS와 키캡 품질. 만듦새. 입문자에게 강추.</p>';
        myOp.innerHTML += '<p>기계식 키보드 중 가장 많이 선호하는 적축 + 넘패드</p>';
    }

    function category3() { //바밀로 풀배열
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/vamilo108.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=za0HoBJ3heA&ab_channel=%EB%A7%B9%EC%88%98%EC%9D%98%EC%82%B6" target="_black">바밀로 적축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g - 사무용 키보드보다 가벼움';
        price.innerHTML = '가격 : 13만 원~20만 원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>양호한 키캡 품질. 만듦새.</p>';
        myOp.innerHTML += '<p>예쁜 디자인, 그러나 가격이 너무 비쌈.</p>';
        myOp.innerHTML += '<p>기계식 키보드 중 가장 많이 선호하는 적축 + 넘패드</p>';
    }

    function category4() { //레오폴드 텐키리스 
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/leo87.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=ON4e9POvsVw&ab_channel=%EC%9F%88%EA%B8%80%EB%A7%81-KeyboardHolic" target="_black">레오폴드 적축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리흑축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 80g 이상 - 매우 무거움 / 튜닝필요';
        price.innerHTML = '가격 : 140,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>좋은 AS와 키캡 품질. 만듦새. 입문자에게 강추.</p>';
        myOp.innerHTML += '<p>그러나 흑축은 관절에 무리가 갈 수 있음.</p>';
        myOp.innerHTML += '<p>체리 적축을 추천함..</p>';
    }


    function category5() { //ar87 적축
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/ar87.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=paZSNvIwRJc&ab_channel=%ED%82%A4%EB%B3%B4%EB%93%9C%EC%87%BC%ED%8C%BD" target="_black">ar87 적축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄</a>'
        housing.innerHTML = '<a href="/prj/housing/alu.html">하우징 : 알루미늄</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 200,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>알루미늄으로 만든 하우징 + 알루미늄 보강판</p>';
        myOp.innerHTML += '<p>가격은 좀 비싸지만 리니어 스위치를 돋보이게 해줌.</p>';
        myOp.innerHTML += '<p>예쁜 사이드 RGB 효과</p>';
    }

    function category6() { //체리 3000s
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/cherry3000s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=GLrDu8Qo_Rw&ab_channel=%EA%B0%9C%EB%82%98%EC%86%8C%EB%82%98%ED%82%A4%EB%B3%B4%EB%93%9C" target="_black">체리 3000s 적축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리적축</a>';
        plate.innerHTML = '<a href="/prj/plate/plateless.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 79,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>보강판이 없어 스위치의 특성을 잘 살림</p>';
        myOp.innerHTML += '<p>Non-RGB 버전을 구입해야 효율 극대화</p>';
        myOp.innerHTML += '<p>무난하고 사무용으로도 충분!</p>';
        myOp.innerHTML += '<p>유서 깊은 체리 사의 텐키리스 제품.</p>';
    }

    function category7() { //레오폴드 저소음 적축 풀배열
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/leo108n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=iqn1R5Llmig&ab_channel=%EA%B0%9C%EB%82%98%EC%86%8C%EB%82%98%ED%82%A4%EB%B3%B4%EB%93%9C" target="_black">레오폴드 저소음 적축 풀배열 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 저소음 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g(체감 65g)';
        price.innerHTML = '가격 : 142,500원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>레오폴드 사의 저소음 버전</p>';
        myOp.innerHTML += '<p>좋은 키캡 품질과 스틸 보강판으로 듣기 좋은 타건음</p>';
        myOp.innerHTML += '<p>저소음임에도 불구하고 준수한 타건감 제공</p>';
    }

    function category8() { //덱 거북선 저소음 적축 풀배열
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/deck108n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=iqn1R5Llmig&ab_channel=%EA%B0%9C%EB%82%98%EC%86%8C%EB%82%98%ED%82%A4%EB%B3%B4%EB%93%9C" target="_black">덱 거북선 저소음 적축 풀배열 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 저소음 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g(체감 65g)';
        price.innerHTML = '가격 : 155,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>Deck 사의 저소음 버전</p>';
        myOp.innerHTML += '<p>좋은 키캡 품질과 알루미늄 보강판으로 듣기 좋은 타건음</p>';
        myOp.innerHTML += '<p>저소음임에도 불구하고 준수한 타건감 제공</p>';
        myOp.innerHTML += '<p>AS가 SSS+급. 오래 쓰기 위해서는 이 제품을.</p>';
    }

    function category9() { //레오폴드 저소음 적축 텐키리스 
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/leo87n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=B_Iy1C7FYSI&ab_channel=%EC%9F%88%EA%B8%80%EB%A7%81-KeyboardHolic" target="_black">레오폴드 저소음 적축 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 저소음 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g(체감 65g)';
        price.innerHTML = '가격 : 142,500원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>레오폴드 사의 저소음 버전</p>';
        myOp.innerHTML += '<p>좋은 키캡 품질과 철 보강판으로 듣기 좋은 타건음</p>';
        myOp.innerHTML += '<p>저소음임에도 불구하고 매우 좋은 타건감 제공</p>';
    }

    function category10() { //바밀로 저소음 적축 텐키리스 
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/va87n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=_2bVOFfkbGQ&t=240s&ab_channel=%EB%93%9C%EB%B3%B4%ED%82%A4DBOKEY" target="_black">바밀로 저소음 적축 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 저소음 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href=/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g(체감 65g)';
        price.innerHTML = '가격 : 142,500원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>레오폴드 사의 저소음 버전</p>';
        myOp.innerHTML += '<p>좋은 키캡 품질과 철 보강판으로 듣기 좋은 타건음</p>';
        myOp.innerHTML += '<p>저소음임에도 불구하고 매우 좋은 타건감 제공</p>';
    }
    function category11() { //리얼포스 저소음 무접점 45g 풀배열 
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/real108n45g.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=J2b_NR1I8-Q&ab_channel=%ED%86%A0%EB%A6%AC%EC%9D%98%ED%85%8C%ED%81%AC%EC%9D%BC%EC%83%81" target="_black">리얼포스 저소음 45g 풀배열 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 저소음 토프레</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html>보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 330,000원';
        grade.innerHTML = '별점 : ★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>토프레 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 가장 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>일반/저소음 축 중, 취향에 맞게 구매</p>';
        myOp.innerHTML += '<p>매우 비싼 가격</p>';
    }

    function category12() { //콕스 엠프리스 무접점 50g 
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/cox108n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=HqNuHzqnn5A&ab_channel=QYU" target="_black">콕스 엠프리스 50g 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 노뿌</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 160,000원 // 종종 할인';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>노뿌 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>토프레보다는 구분감이 약하지만, 보글거림은 더 강함.</p>';
        myOp.innerHTML += '<p>취향만 맞는다면 토프레보다 더 좋을 수 있음.</p>';
        myOp.innerHTML += '<p>가벼운 키감을 원하면 35g, 구분감을 원하면 50g</p>';
    }


    function category13() { //리얼포스 텐키리스 저소음 45g 
        resultPage.style.height = '950px';
        imgSrc.setAttribute('src', '../img/real87n45g.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=fhcDW3ZCXpY&ab_channel=TypeRetro" target="_black">리얼포스 저소음 균등 45g 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 토프레</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61~65g';
        price.innerHTML = '가격 : 310,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>토프레 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 가장 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>일반 버전보다는 키캡의 덜그럭거리는 소리가 적음</p>';
        myOp.innerHTML += '<p>취향만 맞는다면 일반보다 더 좋을 수 있음. .</p>';
        myOp.innerHTML += '<p>30/45/55g 중 적당한 키압을 선택해야 함.</p>';
        myOp.innerHTML += '<p>비싼 가격은 큰 단점. </p>';
    }

    function category14() { //콕스 엔데버 50g
        resultPage.style.height = '950px';
        imgSrc.setAttribute('src', '../img/cox87n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=L4deWi4kbfo&t=45s&ab_channel=%EB%93%9C%EB%B3%B4%ED%82%A4DBOKEY" target="_black">콕스 엔데버 50g 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 :노뿌</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61~65g';
        price.innerHTML = '가격 : 130,000원 // 종종 할인';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>노뿌 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>토프레보다는 구분감은 약하지만, 보글거림은 더 강함</p>';
        myOp.innerHTML += '<p>취향만 맞는다면 토프레보다 더 좋을 수 있음. .</p>';
        myOp.innerHTML += '<p>35/50g 중 적당한 키압을 선택해야 함.</p>';
    }

    function category15() { //콕스 엠프리스 무접점 50g 
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/cox108n.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=HqNuHzqnn5A&ab_channel=QYU" target="_black">콕스 엠프리스 50g 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 노뿌</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 160,000원 // 종종 할인';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>노뿌 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>토프레보다는 구분감이 약하지만, 보글거림은 더 강함.</p>';
        myOp.innerHTML += '<p>취향만 맞는다면 토프레보다 더 좋을 수 있음.</p>';
        myOp.innerHTML += '<p>가벼운 키감을 원하면 35g, 구분감을 원하면 50g</p>';
    }

    function category16() { //리얼포스 일반 균등 45g 풀배열
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/real108n45g.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=O7XCGrWYP_M&t=18s&ab_channel=%EC%A1%B0%EC%85%89%EC%8B%9C%EB%93%9C" target="_black">리얼포스 일반 균등 45g 풀배열 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 토프레</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 체감압 61g';
        price.innerHTML = '가격 : 310,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>토프레 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 가장 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>55g 일반 균등보다는 구분감이 약하지만,</p>';
        myOp.innerHTML += '<p>적당한 키압으로 장시간 사용해야 할 때 좋음</p>';
        myOp.innerHTML += '<p>30/45/55g 중 적당한 키압을 찾아야 함.</p>';
    }


    function category17() { //리얼포스 일반 균등 55g 텐키리스 
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/real87-55g.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=O7XCGrWYP_M&t=18s&ab_channel=%EC%A1%B0%EC%85%89%EC%8B%9C%EB%93%9C" target="_black">리얼포스 일반 균등 55g 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 토프레</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 체감압 70g';
        price.innerHTML = '가격 : 280,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>토프레 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 가장 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>강한 구분감으로 인해 토프레 스위치를 그대로 느낄 있음</p>';
        myOp.innerHTML += '<p>그러나 체감 키압이 크기 때문에 장시간 타자 시 불편</p>';
        myOp.innerHTML += '<p>30/45/55g 중 적당한 키압을 찾아야 함.</p>';
    }

    function category18() { //리얼포스 일반 균등 45g 텐키리스 
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/real87n45g.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=qC9YZcLXYUw&t=49s&ab_channel=%ED%99%88%ED%83%80%EA%B1%B4%23hometagun%23" target="_black">리얼포스 일반 균등 45g 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 토프레</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 체감압 61g';
        price.innerHTML = '가격 : 280,000원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>토프레 스위치를 사용하는 키보드</p>';
        myOp.innerHTML += '<p>무접점 중 가장 좋은 키감이나, 호불호가 많이 갈림</p>';
        myOp.innerHTML += '<p>55g보다는 약한 구분감이지만, 토프레 특유의 덜그럭거리는 소리,</p>';
        myOp.innerHTML += '<p>적당한 키압으로 인해 55g보다 선호되는 키압.</p>';
        myOp.innerHTML += '<p>개인적으로는 55g보다는 45g을 추천함.</p>';
        myOp.innerHTML += '<p>30/45/55g 중 적당한 키압을 찾아야 함.</p>';
    }

    function category19() { //체리 3.0s 청축
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/cherry3.0s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=79ZprT_wdJo&t=40s&ab_channel=Keyrung" target="_black">체리3.0s 청축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/click.html">스위치 : 체리 청축</a>';
        plate.innerHTML = '<a href="/prj/plate/plateless.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/alu.html">하우징 : 알루미늄 + 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 89,000원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 청축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>무보강판 덕분에 청축 스위치를 돋보이게 해줌.</p>';
        myOp.innerHTML += '<p>RGB버전 보다는 Non-RGB 버전 추천.</p>';
    }

    function category20() { //k660 카일 광축 클릭
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/k660-108click.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=fI8sY_xeaRc&ab_channel=SCL" target="_black">k660 카일 광축 클릭 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/click.html">스위치 : 카일 광축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 48,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>카일 사의 광축 클릭 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>완전 방수 지원. pc방 키보드</p>';
        myOp.innerHTML += '<p>저렴한 가격에 만족스러운 클릭 키감 제공</p>';
        myOp.innerHTML += '<p>가성비 가장 좋다고 생각함.</p>';
    }

    function category21() { //체리3000s 청축
        resultPage.style.height = '970px';
        imgSrc.setAttribute('src', '../img/cherry3000s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=sp2EgBV2G8Q&ab_channel=%EB%8F%99%ED%82%A4%EC%8A%A4%ED%8C%A8%EB%84%88" target="_black">체리 3000s 청축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/click.html">스위치 : 체리 청축</a>';
        plate.innerHTML = '<a href="/prj/plate/plateless.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : pbt</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 79,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 청축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>보강판이 없어 청축의 느낌 그대로.</p>';
        myOp.innerHTML += '<p>저렴한 가격에 만족스러운 클릭 키감 제공</p>';
        myOp.innerHTML += '<p>가성비 좋다고 생각함.</p>';
        myOp.innerHTML += '<p>키감만 보면, RGB보다는 Non-RGB 추천</p>';
    }

    function category22() { //덱 거북선 청축
        resultPage.style.height = '960px';
        imgSrc.setAttribute('src', '../img/deck87.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=LPurOIJSYW8&ab_channel=%EC%9C%A4%EB%98%90TV" target="_black">덱 거북선 청축 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/click.html">스위치 : 체리 청축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 65g';
        price.innerHTML = '가격 : 150,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 청축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>SSS+급 AS, PBT 키캡+ 알루미늄 보강판</p>';
        myOp.innerHTML += '<p>단단한 키감</p>';
        myOp.innerHTML += '<p>오래 쓰고자 하면 매우 추천함.</p>';
    }

    function category23() { //레오폴드 갈축 풀배열
        resultPage.style.height = '960px';
        imgSrc.setAttribute('src', '../img/leopold108nonclick.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=e0rjnyTzJ8k&ab_channel=%EB%93%9C%EB%B3%B4%ED%82%A4DBOKEY" target="_black">레오폴드 풀배열 갈축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/nonclick.html">스위치 : 체리 갈축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : PBT</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 142,500원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 갈축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>좋은 AS, SS급 레오폴드 자체 PBT 키캡</p>';
        myOp.innerHTML += '<p>단단한 키감</p>';
        myOp.innerHTML += '<p>체리 3.0s와 함께 양대산맥 갈축.</p>';
    }

    function category24() { //체리 3.0s 갈축 풀배열
        resultPage.style.height = '960px';
        imgSrc.setAttribute('src', '../img/cherry3.0s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=du249sovlwk&ab_channel=Keyrung" target="_black">체리3.0s 갈축 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/nonclick.html">스위치 : 체리 갈축</a>';
        plate.innerHTML = '<a href="/prj/plate/plateless.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱 + 알루미늄</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 89,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 갈축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>체리 자체 키보드. 갈축 스위치의 느낌을 매우 잘 살림.</p>';
        myOp.innerHTML += '<p>체리 3.0s와 함께 양대산맥 갈축. 강력 추천</p>';
        myOp.innerHTML += '<p>RGB가 반드시 필요한 게 아니라면, Non-RGB 강력 추천</p>';
    }

    function category25() { //레오폴드 갈축 텐키리스
        resultPage.style.height = '960px';
        imgSrc.setAttribute('src', '../img/leopold87nonclick.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=TUWmRdQsQoI&t=355s&ab_channel=%EC%A0%9C%EC%9D%B4%EB%B7%B0J-VIEW" target="_black">레오폴드 갈축 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/nonclick.html">스위치 : 체리 갈축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : pbt</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 140,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 갈축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>좋은 AS, SS급 레오폴드 자체 PBT 키캡</p>';
        myOp.innerHTML += '<p>단단한 키감, 입문자에게 매우 강력 추천</p>';
        myOp.innerHTML += '<p>체리 3000s와 함께 양대산맥 갈축.</p>';
    }

    function category26() { //체리 3000s 갈축
        resultPage.style.height = '960px';
        imgSrc.setAttribute('src', '../img/cherry3000s.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=Wh75In0oZP8&t=54s&ab_channel=%ED%9A%A8%EC%9E%AC%EC%95%84%EB%B9%A0" target="_black">체리 3000s 갈축 텐키리스 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/nonclick.html">스위치 : 체리 갈축</a>';
        plate.innerHTML = '<a href="/prj/plate/plateless.html">보강판 : 無보강(보강판x)</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/pbt.html">키캡 : pbt</a>';
        pressure.innerHTML = '키 압력 : 바닥압 61g';
        price.innerHTML = '가격 : 79,000원';
        grade.innerHTML = '별점 : ★★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>체리 사의 갈축 스위치를 사용한 키보드</p>';
        myOp.innerHTML += '<p>체리 자체 키보드. 갈축 스위치의 특징을 매우 잘 살림</p>';
        myOp.innerHTML += '<p>입문자에게 강력 추천.</p>';
        myOp.innerHTML += '<p>RGB가 반드시 필요한 게 아니면 Non-RGB 강추</p>';
    }

    function category27() { //일반 사무, dt35
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/dt35.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=iv4HEC2UjT4&ab_channel=Robiky" target="_black">DT-35 일반 사무 키보드 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 멤브레인</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철</a>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<div>키캡 : - </div>';
        pressure.innerHTML = '키 압력 : - ';
        price.innerHTML = '가격 : 13,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>멤브레인, 일반 사무 키보드의 대장</p>';
    }

    function category28() { //일반 사무, k120
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/k120.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=db-PXgn23KA&ab_channel=%EA%B9%80%EC%9D%BC%EB%8B%98" target="_black">k120 일반 사무 키보드 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 멤브레인</a>';
        plate.innerHTML = '<div>보강판 : - </div>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<div>키캡 : - </div>';
        pressure.innerHTML = '키 압력 : - ';
        price.innerHTML = '가격 : 13,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>멤브레인, 일반 사무 키보드의 부대장</p>';
        myOp.innerHTML += '<p>낮은 키캡 프로파일 덕분에 독특한 키감 제공</p>';
        myOp.innerHTML += '<p>다만 오래 사용 시, 키캡 각인 사라짐</p>';
    }

    function category29() { //일반 사무, k150
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/k150.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=Q4eu1KL_pc0&ab_channel=%EC%A0%9C%EC%9D%B4%EB%B7%B0J-VIEW" target="_black">k150 일반 사무 키보드 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/rubber.html">스위치 : 멤브레인</a>';
        plate.innerHTML = '<div>보강판 : - </div>'
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<div>키캡 : - </div>';
        pressure.innerHTML = '키 압력 : - ';
        price.innerHTML = '가격 : 10,000원';
        grade.innerHTML = '별점 : ★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>멤브레인, 일반 사무 키보드</p>';
        myOp.innerHTML += '<p>텐키리스 버전으로 나온 멤브레인 키보드.</p>';
        myOp.innerHTML += '<p>저렴하지만, 키감도 그만큼 많이 저렴하다. </p>';
    }

    function category30() { //k70 
        resultPage.style.height = '900px';
        imgSrc.setAttribute('src', '../img/k70.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=TBv5FQFEiy4&ab_channel=%EB%8B%A4%EB%82%98%EC%99%80" target="_black">커세어 k70 MK.2 적축</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄 </a>';
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS </a>';
        pressure.innerHTML = '바닥압 : 61g ';
        price.innerHTML = '가격 : 140,000 - 220,000원';
        grade.innerHTML = '별점 : ★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>게이밍 제품 전문 회사 커세어의 키보드</p>';
        myOp.innerHTML += '<p>오직 게이밍을 위한 감성</p>';
        myOp.innerHTML += '<p>비싼 가격 대비 좋지 못한 호불호 갈리는 타건감.</p>';
        myOp.innerHTML += '<p>가성비가 매우 좋지 못하지만, 그만한 감성이 있다.</p>';
    }

    function category30() { //k70 
        resultPage.style.height = '970px';
        imgSrc.setAttribute('src', '../img/k70.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=TBv5FQFEiy4&ab_channel=%EB%8B%A4%EB%82%98%EC%99%80" target="_black">커세어 k70 MK.2 적축</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 체리 적축</a>';
        plate.innerHTML = '<a href="/prj/plate/alu.html">보강판 : 알루미늄 </a>';
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS </a>';
        pressure.innerHTML = '바닥압 : 61g ';
        price.innerHTML = '가격 : 140,000 - 220,000원';
        grade.innerHTML = '별점 : ★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>게이밍 제품 전문 회사 커세어의 키보드</p>';
        myOp.innerHTML += '<p>오직 게이밍을 위한 감성</p>';
        myOp.innerHTML += '<p>비싼 가격 대비 좋지 못한 호불호 갈리는 타건감.</p>';
        myOp.innerHTML += '<p>가성비가 매우 좋지 못하지만, 그만한 감성이 있다.</p>';
        myOp.innerHTML += '<p>하지만 게이밍 중심이라면 저가형 제품을 사도 전혀 문제 없다.</p>';
        myOp.innerHTML += '<p>게임에 집중하느라 키보드의 특징을 느껴볼 새가 없다.</p>';
    }

    function category31() { //ck108
        resultPage.style.height = '930px';
        imgSrc.setAttribute('src', '../img/ck108.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=Himcn6dwQkg&ab_channel=%EC%9F%88%EA%B8%80%EB%A7%81-KeyboardHolic" target="_black">ck108 게이트론 황축</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 게이트론 황축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철 </a>';
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS </a>';
        pressure.innerHTML = '바닥압 : 65g~67g ';
        price.innerHTML = '가격 : 60,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>앱코/콕스의 중저가형 제품</p>';
        myOp.innerHTML += '<p>게이밍을 위한 감성, 나름 중저가형에서 준수한 타건감</p>';
        myOp.innerHTML += '<p>체리 적축보다 살짝 무거운 게이트론 황축 장착.</p>';
        myOp.innerHTML += '<p>스위치도 준수하고 전체적인 만듦새도 준수하다..</p>';
    }

    function category32() { //k511
        resultPage.style.height = '950px';
        imgSrc.setAttribute('src', '../img/k511.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=-PANK3Xahzk&ab_channel=%EC%9C%A4%EB%98%90TV" target="_black">k511 광축 클릭</a>'
        switch_.innerHTML = '<a href="/prj/switch/click.html">스위치 : 카일 광축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철 </a>';
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS </a>';
        pressure.innerHTML = '바닥압 : 65g~67g ';
        price.innerHTML = '가격 : 40,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>앱코/콕스의 중저가형 제품</p>';
        myOp.innerHTML += '<p>게이밍을 위한 감성, 나름 중저가형에서 준수한 타건감</p>';
        myOp.innerHTML += '<p>카일 광축을 장착. 클릭/리니어 중 취향에 맞는 스위치를 선택하면 된다.</p>';
        myOp.innerHTML += '<p>스위치도 준수하고 전체적인 만듦새도 준수하다..</p>';
    }

    function category33() { //ck87
        resultPage.style.height = '950px';
        imgSrc.setAttribute('src', '../img/ck87.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=HKapEEdVKwo&ab_channel=JoJeFF%EC%A1%B0%EC%A0%9C%ED%94%84" target="_black">ck87 게이트론 황축</a>'
        switch_.innerHTML = '<a href="/prj/switch/linear.html">스위치 : 게이트론 황축</a>';
        plate.innerHTML = '<a href="/prj/plate/steel.html">보강판 : 철 </a>';
        housing.innerHTML = '<a href="/prj/housing/pla.html">하우징 : 플라스틱</a>';
        keycaps.innerHTML = '<a href="/prj/keycaps/abs.html">키캡 : ABS </a>';
        pressure.innerHTML = '바닥압 : 65g~67g ';
        price.innerHTML = '가격 : 50,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>앱코/콕스의 중저가형 제품</p>';
        myOp.innerHTML += '<p>게이밍을 위한 감성, 나름 중저가형에서 준수한 타건감</p>';
        myOp.innerHTML += '<p>체리 적축보다 살짝 무거운 게이트론 황축 장착.</p>';
        myOp.innerHTML += '<p>스위치도 준수하고 전체적인 만듦새도 준수하다..</p>';
    }

    function category34() { //logitech mx keys
        resultPage.style.height = '970px';
        imgSrc.setAttribute('src', '../img/mxkey.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=fkuUGTFIZlc&ab_channel=InputDevice" target="_black">로지텍 mx keys 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/chiclet.html">스위치 : 펜타그래프 구조체</a>';
        plate.innerHTML = '<div>보강판 : - </div>';
        housing.innerHTML = '<div>하우징 : - </div>';
        keycaps.innerHTML = '<div>키캡 : - </div>';
        pressure.innerHTML = '바닥압 : -  ';
        price.innerHTML = '가격 : 140,000원';
        grade.innerHTML = '별점 : ★★★★';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>로지텍의 사무용 무선 키보드</p>';
        myOp.innerHTML += '<p>펜타그래프 구조체 스위치를 이용하여 키보드 자체의</p>';
        myOp.innerHTML += '<p>높이를 매우 줄여 손목에 부담을 주지 않는다.</p>';
        myOp.innerHTML += '<p>자체 리시버를 사용하면 유선과 비슷한 반응성을 보이며</p>';
        myOp.innerHTML += '<p>블루투스를 이용하여 여러 디바이스와 연결할 수도 있다.</p>';
    }

    function category35() { //logitech k580
        resultPage.style.height = '970px';
        imgSrc.setAttribute('src', '../img/k580.jpg');
        keyboard.innerHTML = '<a href="https://www.youtube.com/watch?v=yBVWQAmtG-U&ab_channel=%EB%B6%95%ED%81%90%EB%8B%B7%EC%BB%B4" target="_black">로지텍 k580 영상</a>'
        switch_.innerHTML = '<a href="/prj/switch/chiclet.html">스위치 : 펜타그래프 구조체</a>';
        plate.innerHTML = '<div>보강판 : - </div>';
        housing.innerHTML = '<div>하우징 : - </div>';
        keycaps.innerHTML = '<div>키캡 : - </div>';
        pressure.innerHTML = '바닥압 : -  ';
        price.innerHTML = '가격 : 60,000원';
        grade.innerHTML = '별점 : ★★★★☆';
        myOp.innerHTML = '<div style="color: red;">한줄 평</div>';
        myOp.innerHTML += '<p>로지텍의 사무용 무선 키보드</p>';
        myOp.innerHTML += '<p>펜타그래프 구조체 스위치를 이용하여 키보드 자체의</p>';
        myOp.innerHTML += '<p>높이를 매우 줄여 손목에 부담을 주지 않는다.</p>';
        myOp.innerHTML += '<p>방향키 공간을 절약해, 공간 확보도 매우 좋다.</p>';
        myOp.innerHTML += '<p>여러 디바이스와 페어링을 할 수 있다.</p>';
    }
    switch (num) {
        case 1:
            slt = category1();
            break;
        case 2:
            slt = category2();
            break;
        case 3:
            slt = category3();
            break;
        case 4:
            slt = category4();
            break;
        case 5:
            slt = category5();
            break;
        case 6:
            slt = category6();
            break;
        case 7:
            slt = category7();
            break;
        case 8:
            slt = category8();
            break;
        case 9:
            slt = category9();
            break;
        case 10:
            slt = category10();
            break;
        case 11:
            slt = category11();
            break;
        case 12:
            slt = category12();
            break;
        case 13:
            slt = category13();
            break;
        case 14:
            slt = category14();
            break;
        case 15:
            slt = category15();
            break;
        case 16:
            slt = category16();
            break;
        case 17:
            slt = category17();
            break;
        case 18:
            slt = category18();
            break;
        case 19:
            slt = category19();
            break;
        case 20:
            slt = category20();
            break;
        case 21:
            slt = category21();
            break;
        case 22:
            slt = category22();
            break;
        case 23:
            slt = category23();
            break;
        case 24:
            slt = category24();
            break;
        case 25:
            slt = category25();
            break;
        case 26:
            slt = category26();
            break;
        case 27:
            slt = category27();
            break;
        case 28:
            slt = category28();
            break;
        case 29:
            slt = category29();
            break;
        case 30:
            slt = category30();
            break;
        case 31:
            slt = category31();
            break;
        case 32:
            slt = category32();
            break;
        case 33:
            slt = category33();
            break;
        case 34:
            slt = category34();
            break;
        case 35:
            slt = category35();
            break;
        default:
            slt = alert('오류 발생. 재시도해 주십시오.');
    }

    return slt;
}




