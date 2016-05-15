'use strict';
$(document).ready(function(){
	var data='{"pageTitle":"Тест по программированию","ulQuestions":["1. Вопрос 1",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]},"2. Вопрос 2",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]},"3. Вопрос 3",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]}],"inputSubmit":"Проверить результаты"}';
	 localStorage.setItem('dataBase', data);
	var dataNew=localStorage.getItem('dataBase');
	dataNew = JSON.parse(dataNew);
	var html = $('#tmpl').html();
	var content = tmpl(html,dataNew);
	$('.wrapper').append(content);
		 var handler = function (event){
			event = event || window.event;
			var target = event.target || event.srcElement;
			if ( target.nodeType == 1 && target.className.toLowerCase() == "single" && target.type == "checkbox" && target.checked ) {
				var inputs = document.getElementsByClassName("single");
				for ( var i = 0; inputs[i]; i++ ) {
					if ( inputs[i].type == "checkbox" && inputs[i] != target ) {
						inputs[i].checked = false;
					}
				}
			}
		}
	if (document.addEventListener){
		document.addEventListener('click', handler, false);
	} else if (document.attachEvent){
		document.attachEvent('onclick', handler);
	}
	var button = document.querySelector('button');
	button.addEventListener('click', function(){
		var answers = document.getElementsByTagName('input');
		if (answers[1].checked && answers[3].checked && answers[4].checked && answers[7].checked && answers[8].checked == true) {			
			alert('Молодец!')
		} else {
			alert('Попробуй еще раз!');
		}
	});
});