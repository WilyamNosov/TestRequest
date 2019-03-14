var table = document.querySelector('tbody');

var requestJson = 'https://raw.githubusercontent.com/WilyamNosov/TestRequest/master/js/toPars.json';
var request = new XMLHttpRequest();
request.open('GET', requestJson);

request.responseType = 'json';
request.send();

request.onload = function() {
	var peoples = request.response;
	createPeople(peoples);
	var timerId = setInterval(function() {
  		createPeople(peoples);
	}, 300000);
}

function createPeople(jsonObj){
	var tableLenght = document.getElementsByTagName('tr');
	
	var peoplesList = jsonObj['employee'];

	for (var i = tableLenght.length - 1; i < peoplesList.length; i++) {

		var trElem = document.createElement('tr');
		var tdId = document.createElement('td');
		var tdFirstName = document.createElement('td');
		var tdLastdName = document.createElement('td');

		tdId.textContent = peoplesList[i].id;
		tdFirstName.textContent = peoplesList[i].firstName;
		tdLastdName.textContent = peoplesList[i].lastName;

		trElem.appendChild(tdId);
		trElem.appendChild(tdFirstName);
		trElem.appendChild(tdLastdName);
		trElem.appendChild(tdId);

		table.appendChild(trElem);
	}
}