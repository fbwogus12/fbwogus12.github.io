

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

    //대문 시계
    setClock();
    setInterval(setClock, 1000);

    //엘리먼트
    var rec = document.getElementsByClassName('rec')[0];
    var time = document.getElementsByClassName('time')[0];
    var date = document.getElementsByClassName('date')[0];
    var navs = document.getElementsByClassName('page_nav')[0];
    var pages = document.getElementsByClassName('book')[0];

    //이벤트
    navs.children[1].addEventListener('click', function () {
        pages.children[0].style.display = 'block';

        pages.children[1].style.display = 'none';
        pages.children[2].style.display = 'none';
        pages.children[3].style.display = 'none';
        pages.children[4].style.display = 'none';

        navs.children[1].style.textDecoration = 'underline';
        navs.children[1].style.textDecorationColor = 'rgb(255, 119, 119)';

        navs.children[2].style.textDecoration = 'none';
        navs.children[3].style.textDecoration = 'none';
        navs.children[4].style.textDecoration = 'none';
        navs.children[5].style.textDecoration = 'none';
    })

    navs.children[2].addEventListener('click', function () {
        pages.children[1].style.display = 'block';

        pages.children[0].style.display = 'none';
        pages.children[2].style.display = 'none';
        pages.children[3].style.display = 'none';
        pages.children[4].style.display = 'none';

        navs.children[2].style.textDecoration = 'underline';
        navs.children[2].style.textDecorationColor = 'rgb(255, 119, 119)';

        navs.children[1].style.textDecoration = 'none';
        navs.children[3].style.textDecoration = 'none';
        navs.children[4].style.textDecoration = 'none';
        navs.children[5].style.textDecoration = 'none';
    })

    navs.children[3].addEventListener('click', function () {
        pages.children[2].style.display = 'block';

        pages.children[0].style.display = 'none';
        pages.children[1].style.display = 'none';
        pages.children[3].style.display = 'none';
        pages.children[4].style.display = 'none';

        navs.children[3].style.textDecoration = 'underline';
        navs.children[3].style.textDecorationColor = 'rgb(255, 119, 119)';

        navs.children[1].style.textDecoration = 'none';
        navs.children[2].style.textDecoration = 'none';
        navs.children[4].style.textDecoration = 'none';
        navs.children[5].style.textDecoration = 'none';
    })

    navs.children[4].addEventListener('click', function () {
        pages.children[3].style.display = 'block';

        pages.children[0].style.display = 'none';
        pages.children[1].style.display = 'none';
        pages.children[2].style.display = 'none';
        pages.children[4].style.display = 'none';

        navs.children[4].style.textDecoration = 'underline';
        navs.children[4].style.textDecorationColor = 'rgb(255, 119, 119)';

        navs.children[1].style.textDecoration = 'none';
        navs.children[2].style.textDecoration = 'none';
        navs.children[3].style.textDecoration = 'none';
        navs.children[5].style.textDecoration = 'none';
    })

    navs.children[5].addEventListener('click', function () {
        pages.children[4].style.display = 'block';

        pages.children[0].style.display = 'none';
        pages.children[1].style.display = 'none';
        pages.children[2].style.display = 'none';
        pages.children[3].style.display = 'none';

        navs.children[5].style.textDecoration = 'underline';
        navs.children[5].style.textDecorationColor = 'rgb(255, 119, 119)';

        navs.children[1].style.textDecoration = 'none';
        navs.children[2].style.textDecoration = 'none';
        navs.children[3].style.textDecoration = 'none';
        navs.children[4].style.textDecoration = 'none';
    })

    rec.addEventListener('click', function () {
        location.href = '/prj/main/recommendKeyboard.html';
    })
    time.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });

    date.addEventListener('click', function () {
        location.href = '/prj/main/index.html';
    });
});