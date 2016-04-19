var data = {
	pageTitle: 'Тест по программированию',

	ulQuestions: [{
		categoriesName: 'Вопрос №1',

		ulAnswers: [
			'Вариант ответа 1',
			'Вариант ответа 2',
			'Вариант ответа 3'
		]
	}, {
		categoriesName: 'Вопрос №2',

		ulAnswers: [
			'Вариант ответа 1',
			'Вариант ответа 2',
			'Вариант ответа 3'
		]
	}, {
		categoriesName: 'Вопрос №3',

		ulAnswers: [
			'Вариант ответа 1',
			'Вариант ответа 2',
			'Вариант ответа 3',
		]
	}],
	inputSubmit: 'Проверить мои результаты'
}

localStorage.setItem('questions',JOSN.stringifi(data))
console.log(localStorage.getItem(questions));
var newObj = JSON.parselocalStorage.getItem('questions'));
console.log(newObj);







var method = {
	wrapper: function() {

		var element = document.createElement('div');
		element.classList.add('wrapper');

		var pageBuilder = document.querySelector('body');
		document.body.insertBefore(element, pageBuilder.children[0]);

		var title = document.createElement('h1');
		title.classList.add('mainTitle');
		element.appendChild(title);
		title.innerHTML = data.pageTitle;

		var form = document.createElement('form');
		element.appendChild(form);

	},

	list: function() {
		var form = document.querySelector('form');
		console.log(form);

		for (var i = 0; i < data.ulQuestions.length; i++) {

			var ul = document.createElement('ul');
			ul.classList.add('categoria');
			form.appendChild(ul);

			var p = document.createElement('p');
			ul.appendChild(p);
			p.innerHTML = i + 1 + '. ' + data.ulQuestions[i].categoriesName;

			for (var j = 0; j < data.ulQuestions[i].ulAnswers.length; j++) {
				var li = document.createElement('li');
				ul.appendChild(li);

				var label = document.createElement('label');
				label.classList.add('variant');
				li.appendChild(label);

				var checkbox = document.createElement('input');
				label.appendChild(checkbox);
				checkbox.setAttribute('type', 'checkbox');

				var span = document.createElement('span');
				label.appendChild(span);
				span.innerHTML = data.ulQuestions[i].ulAnswers[j]
			}
		}

	},
	submitButton: function() {

		var btn = document.createElement('button');
		var form = document.querySelector('form');
		form.appendChild(btn);
		btn.setAttribute('type', 'button');
		btn.innerHTML = data.inputSubmit;
	},
	pageInit: function() {
		method.wrapper(),
			method.list(),
			method.submitButton()
	}
pageSend: function(){

	$(.block).each(function(){
		var #_this = $(this);
		$_this.find('ul li').each(function(){
			if ($(this).find('input[type="checkbox"]').hasattr('checked',true)) {
			console.log(123);	
			};
		}
	}

}
};

method.pageInit();

var senBtn = document.querySelector('.js-send');
senBtn.addEventListener('click',page.pageSend());