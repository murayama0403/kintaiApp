function set2fig(num) {
        // ������1����������擪��0��������2���ɒ�������
        var ret;
        if (num < 10) {
            ret = "0" + num;
        }
        else {
            ret = num;
        }
        return ret;
    }

    function now() {
        var nowTime = new Date();
        var nowHour = set2fig(nowTime.getHours());
        var nowMin = set2fig(nowTime.getMinutes());
        return nowHour + ":" + nowMin
    }

    function showClock() {
        var nowTime = new Date();
        var nowHour = set2fig(nowTime.getHours());
        var nowMin = set2fig(nowTime.getMinutes());
        var nowSec = set2fig(nowTime.getSeconds());
        var msg = nowHour + ":" + nowMin + ":" + nowSec;
        document.getElementById("RealtimeClockArea").innerHTML = msg;
    }
    setInterval('showClock()', 1000);