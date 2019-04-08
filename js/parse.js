const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});

/*
Прокрутка елементів сторінки
*/

var clickButton = document.querySelectorAll("button[aria-label='Далі']");
var checkNext = document.querySelectorAll("yt-horizontal-list-renderer");
var stop = 0;
var chanalsNameList = [];
var chanalsUrlList = [];
var chanalsList = null;

var timerScroll = setInterval(function scrollRight(){
	for (var j = 0; j < checkNext.length; j++){
		if (checkNext[j].getAttribute('at-end') != ""){
			for(var i = 0; i < clickButton.length; i++){
				clickButton[i].click();
			}
		} else {
			if (stop == 0) {
				stop++;
				stopTimer();				
			}
		}
	}
}, 1000);

function stopTimer(){

	setTimeout(function() {
		chanalsList = document.querySelectorAll("a[id='channel-info']");
			clearInterval(timerScroll);
			for (var i = 0; i < chanalsList.length; i++){
			chanalsUrlList.push(chanalsList[i].href);
			chanalsNameList.push(chanalsList[i].children[1].innerText);
		}
	}, 1000);
}
