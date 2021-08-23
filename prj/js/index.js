function setIndex() {
    //2초마다 4개의 사진을 번갈아가며 만들고 싶으면 0246 1set / 1357 2set
    var contents = document.getElementsByClassName('main-container')[0];
    var imgArr1 = [];
    var imgArr2 = [];
    imgArr1[0] = '/prj/img/클릭축작동.gif';
    imgArr1[2] = '/prj/img/러버돔구조.jpg';
    imgArr1[4] = '/prj/img/정전용량작동방식.gif';
    imgArr1[6] = '/prj/img/토프레구조.png';
    imgArr1[1] = '/prj/img/클릭축작동.gif';
    imgArr1[3] = '/prj/img/러버돔구조.jpg';
    imgArr1[5] = '/prj/img/정전용량작동방식.gif';
    imgArr1[7] = '/prj/img/토프레구조.png';

    imgArr2[0] = '/prj/img/housing-alu.png';
    imgArr2[2] = '/prj/img/housing-arc1.jpg';
    imgArr2[4] = '/prj/img/housing-arc2.jpg';
    imgArr2[6] = '/prj/img/housing-time.jpg';
    imgArr2[1] = '/prj/img/housing-alu.png';
    imgArr2[3] = '/prj/img/housing-arc1.jpg';
    imgArr2[5] = '/prj/img/housing-arc2.jpg';
    imgArr2[7] = '/prj/img/housing-time.jpg';
    let random = new Date();

    random = random.getSeconds() % 8;

    contents.children[0].children[1].children[0].src = imgArr1[random];
    contents.children[1].children[1].children[0].src = imgArr2[random];

    setTimeout(setIndex, 2000);
};

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

    //ver 1.01 추가
    var sideNav = document.getElementsByClassName('nav_style')[0];
    var m_contents = document.getElementsByClassName('main-container')[0];
    sideNav.children[1].addEventListener('click', function () {
        window.open("/prj/ref/ref1.html", "윤활", "width=680, height=310, top=300")
    });

    sideNav.children[2].addEventListener('click', function () {
        window.open("/prj/ref/ref2.html", "스위치의 압력", "width=680, height=310, top=300")
    });

    sideNav.children[3].addEventListener('click', function () {
        window.open("/prj/ref/ref3.html", "솔더링과 핫스왑 키보드", "width=680, height=310, top=300")
    });

    sideNav.children[4].addEventListener('click', function () {
        window.open("/prj/ref/ref4.html", "용어 정리", "width=680, height=310, top=300")
    });


    sideNav.children[5].addEventListener('click', function () {
        location.href = 'https://typing.works/';
    });

    m_contents.children[0].addEventListener('click', function () {
        location.href = '/prj/switch/linear.html';
    });

    m_contents.children[1].addEventListener('click', function () {
        location.href = '/prj/housing/alu.html';
    });

    m_contents.children[2].addEventListener('click', function () {
        location.href = '/prj/mount/sandwich.html';
    });

    m_contents.children[3].addEventListener('click', function () {
        location.href = '/prj/plate/alu.html';
    });

    m_contents.children[4].addEventListener('click', function () {
        location.href = '/prj/keycaps/pbt.html';
    });

    //대문 시계
    setClock();
    setInterval(setClock, 1000);

    //메인화면 변경
    setIndex();

    //엘리먼트
    var rec = document.getElementsByClassName('rec')[0];
    var time = document.getElementsByClassName('time')[0];
    var date = document.getElementsByClassName('date')[0];

    //이벤트
    rec.addEventListener('click', function () {
        location.href = 'recommendKeyboard.html';
    })
    time.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });

    date.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });
});