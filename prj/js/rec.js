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

    //엘리먼트
    var rec = document.getElementsByClassName('rec')[0];
    var page1 = document.getElementsByClassName('page1')[0];
    var page2 = document.getElementsByClassName('page2')[0];
    var findBtn = document.getElementsByClassName('find')[0];

    //이벤트
    rec.addEventListener('click', function () {
        location.href = 'recommendKeyboard.html';
    })

    page1.addEventListener('click', function () {
        if (switch1 == true) {
            page1.style.transform = 'rotateY(-160deg)';
            page1.innerHTML = '<h1>☞</h1> '
            page2.style.height = '1000px';
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
            switch1 = true;
        }
    });

    findBtn.addEventListener('click', function () {
        //엘리먼트
        var sound1 = document.querySelector('input[name="sound1"]:checked').value;
        var sound2 = document.querySelector('input[name="sound2"]:checked').value;
        var sound3 = document.querySelector('input[name="sound3"]:checked').value;
        var sound4 = document.querySelector('input[name="sound4"]:checked').value;
        var sound5 = document.querySelector('input[name="sound5"]:checked').value;
        var sound6 = document.querySelector('input[name="sound6"]:checked').value;
        var sound7 = document.querySelector('input[name="sound7"]:checked').value;
        var sound8 = document.querySelector('input[name="sound8"]:checked').value;
        var q1 = document.querySelector('input[name="q1"]:checked').value;
        var q2 = document.querySelector('input[name="q2"]:checked').value;
    })
});
