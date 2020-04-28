var height = 21; // 数字のイメージの高さ
var width = 16; // 数字のイメージの幅
var now; //現在時刻
var digitImgs; //数字のイメージを格納する配列

//定休日（0:日、1:月、1:火、2:水、3:木、4:金、6:土）
var rClosed = ['1', '2', '3', '4', '5', '6'];
//放送時間
var startTime = 13; //開始時刻
var endTime = 16; //終了時刻
//臨時休業日
var Holidays = [aHoliday(2020, 1, 5)];
function aHoliday(year, month, day) {
	return new Date(year, month - 1, day);
}

//放送中かどうかのメッセージ
var openMsg = " - Broascasting on ニコ生 - ";
var closeMsg = " - Sorry, please wait... -";

//曜日を格納する配列
var days = new Array("日", "月", "火", "水", "木", "金", "土");

//初期化
window.onload = init;
function init() {
	initClock();
	showTime();
}

function initClock() {
	// あらかじめ数のイメージを読み込んでおく
	digitImgs = new Array(10);
	for (var i = 0; i < 10; i++) {
		digitImgs[i] = new Image(height, width);
		digitImgs[i].src = "digits/" + "d" + i + ".gif";
	}
	var Img;
	var size = " width=" + width + " height=" + height + ">";
	// デフォルトのイメージを表示する
	// 時間のイメージ
	Img = "<img src='digits/d0.gif' name='hImg1'";
	Img += size;
	Img += "<img src='digits/d0.gif' name='hImg2'";
	Img += size;
	// コロン
	Img += "<img src='digits/cl.gif' name='colon1'";
	Img += " width=9 height=21>";
	// 分のイメージ
	Img += "<img src='digits/d0.gif' name='mImg1'";
	Img += size;
	Img += "<img src='digits/d0.gif' name='mImg2'";
	Img += size;
	document.getElementById("dClock").innerHTML = Img;

	//日付を表示するためのイベントハンドラ
	document.getElementById("dClock").onmouseover = showDate;
	document.getElementById("dClock").onmouseout = hideDate;
}

function showDate() {
	document.getElementById("date").style.visibility = "visible";
	var date =
		now.getFullYear() +
		"年" +
		(now.getMonth() + 1) +
		"月" +
		now.getDate() +
		"日" +
		"（" +
		days[now.getDay()] +
		"）";

	document.getElementById("date").innerHTML = date;
}

function hideDate() {
	document.getElementById("date").style.visibility = "hidden";
}

//　時計を10秒ごとに更新する関数
function showTime() {
	now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();

	// 時間を文字列にする
	if (hour < 10) {
		hour = "0" + hour;
	} else {
		hour = "" + hour;
	}
	// 分を文字列にする
	if (minute < 10) {
		minute = "0" + minute;
	} else {
		minute = "" + minute;
	}
	// 時間のイメージを更新
	document.hImg1.src = digitImgs[parseInt(hour.charAt(0))].src;
	document.hImg2.src = digitImgs[parseInt(hour.charAt(1))].src;
	// 分のイメージを更新
	document.mImg1.src = digitImgs[parseInt(minute.charAt(0))].src;
	document.mImg2.src = digitImgs[parseInt(minute.charAt(1))].src;

	// 60秒ごとに自分自身を呼び出す
	setTimeout("showTime()", 60000);

	//放送中かどうかを表示する
	setMsg();
}

//放送中かどうかを表示する
function setMsg() {
	theMsg = openMsg;
	for (var i = 0; i < rClosed.length; i++) {
		if (now.getDay() == rClosed[i]) {
			theMsg = closeMsg;
		}
	}

	for (var i = 0; i < Holidays.length; i++) {
		var aDay = Holidays[i];
		if (
			now.getFullYear() == aDay.getFullYear() &&
			now.getMonth() == aDay.getMonth() &&
			now.getDate() == aDay.getDate()
		) {
			theMsg = closeMsg;
		}
	}

	if (now.getHours() < startTime || now.getHours() >= endTime) {
		theMsg = closeMsg;
	}
	document.getElementById("msg").innerHTML = theMsg;
}
