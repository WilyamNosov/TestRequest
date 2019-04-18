var table = document.querySelector('tbody');

var requestJson = 'https://raw.githubusercontent.com/WilyamNosov/TestRequest/16e9de9bd8f1dbc6275defc38918b3c2830b3fab/js/toPars.json';
var request = new XMLHttpRequest();
request.open('GET', requestJson);

request.responseType = 'json';
request.send();

request.onload = function() {
	var peoples = request.response;
	createPeople(peoples);
}

function createPeople(jsonObj){
	var tableLenght = document.getElementsByTagName('tr');

	var peoplesList = jsonObj['employee'];

	for (var i = tableLenght.length - 1; i < peoplesList.length; i++) {

		var trElem = document.createElement('tr');
		var tdElem = document.createElement('td');
		var tdId = document.createElement('td');
		var tdFirstName = document.createElement('td');
		var tdLastdName = document.createElement('td');

		tdId.textContent = peoplesList[i].id;
		tdFirstName.textContent = peoplesList[i].firstName;
		tdLastdName.textContent = peoplesList[i].lastName;

		trElem.appendChild(tdId);
		trElem.appendChild(tdFirstName);
		trElem.appendChild(tdLastdName);

		table.appendChild(trElem);
	}
	request.abort();
}
