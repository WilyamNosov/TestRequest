var requestJson = 'https://raw.githubusercontent.com/WilyamNosov/TestRequest/master/js/codebeautify.json';

var request = new XMLHttpRequest();
request.open('GET', requestJson);

request.responseType = 'json';
request.send();

request.onload = function() {
	var urls = request.response;
	getPersonData(urls);
}

/*
Прокрутка елементів сторінки
*/
function getPersonData(jsonObj){
	var urlsList = jsonObj['user'];


	for (var k = 0; k < urlsList.length; k++) {
		window.open(urlsList[i].authorChannelUrl);


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
	}

}