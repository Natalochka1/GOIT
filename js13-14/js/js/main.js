var data = {
	pageTitle: 'Тест по програмированию',
	categories:[
	{
		categoryName : "Вопрос №1",
		variant : [
			{
				answer: 'Вариант ответа №1',
				rigth: true
			},
			{
				answer: 'Вариант ответа №2',
				rigth: false
			},
			{
				answer: 'Вариант ответа №3',
				rigth: false
			},
		],
		inputName: ['11','12','13'],
	},
	{
		categoryName : "Вопрос №2",

		variant : [
			{
				answer: 'Вариант ответа №1',
				rigth: true
			},
			{
				answer: 'Вариант ответа №2',
				rigth: false
			},
			{
				answer: 'Вариант ответа №3',
				rigth: false
			},
		],
		inputName: ['21','22','23'],
	},
	{
		categoryName : "Вопрос №3",

		variant : [
			{
				answer: 'Вариант ответа №1',
				rigth: true
			},
			{
				answer: 'Вариант ответа №2',
				rigth: false
			},
			{
				answer: 'Вариант ответа №3',
				rigth: false
			},
		],
		inputName: ['31','32','33'],
	}
	],
	result: "Проверить мои результаты"	
}

localStorage.setItem('questions', JSON.stringify(data));




var newObj = JSON.parse(localStorage.getItem('questions'));

//console.log(newObj);
console.log(newObj.categories[0].variant);


var page = {
	buildTitle : function () {
		var wrap = document.createElement('form');
		wrap.classList.add('wrapper');
		wrap.setAttribute("id", "wrapper");
		
		var body = document.querySelector('body');
		document.body.insertBefore(wrap, body.children[0]);

		var h1 = document.createElement('h1');
		wrap.appendChild(h1);
		h1.innerHTML = newObj.pageTitle;
	},
	buildQuestion : function () {

		for(var i = 0; i < newObj.categories.length; i++){
			var wrapper = document.querySelector('.wrapper');
			var block = document.createElement('div');
			block.classList.add('block');
			wrapper.appendChild(block);
			
			var span = document.createElement('p');
			block.appendChild(span)
			span.innerHTML = (i+1) + '. ' + newObj.categories[i].categoryName;

			//console.log( newObj.categories[i].categoryName );

			var listWrap = document.createElement('ul');
			block.appendChild(listWrap);

			for(var j = 0; j < newObj.categories[i].variant.length; j++) {
				//console.log( newObj.categories[i].variant[j] );

				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);
				var label = document.createElement('label');
				listItem.appendChild(label);
				// 	

				var input = document.createElement('input');
				label.appendChild(input);
				input.setAttribute('type', 'checkbox');
				input.setAttribute('name', newObj.categories[i].inputName[j])

				var spanLabel = document.createElement('span')
				label.appendChild(spanLabel);

				spanLabel.innerHTML = newObj.categories[i].variant[j].answer;

			}
		}
	},
	btn: function () {
		var block = document.querySelector('.wrapper');
		var btn = document.createElement('input');
		block.appendChild(btn);
		btn.setAttribute('type', 'button');
		btn.classList.add('btn', 'btn-primary', 'js-send');
		btn.value = newObj.result;
	},
	pageInit: function() {
		this.buildTitle();
		this.buildQuestion();
		this.btn();
	},
	pageSend: function() {
		console.log($('.wrapper'))
		$('.block').each(function(){
			var $_this = $(this);
			//console.log($_this);
			$_this.find('input[type="checkbox"]');
		});

		var rightAnswers = [];
        var getRightAnswers = function () {
            for (var i = 0; i < newObj.categories.length; i++) {
                for (var j = 0; j < newObj.categories[i].variant.length; j++) {
                    var currentAnswer = newObj.categories[i].variant[j].rigth;
                    rightAnswers.push(currentAnswer);
                }
            }
        };
        getRightAnswers();
        console.log(rightAnswers);

        var givenAnswers = [];
        var getGivenAnswers = function () {
            $('input[type="checkbox"]').each(function () {
                if ($(this).prop('checked')) {
                    givenAnswers.push(true);
                } else {
                    givenAnswers.push(false);
                }
            });
        };
        getGivenAnswers();
        console.log(givenAnswers)
        
        var answered = 0;
        var check = function () {
            for (var i = 0; i < rightAnswers.length; i++) {
                if (rightAnswers[i] === true) {
                    if (rightAnswers[i] === givenAnswers[i]) {
                        answered++;
                    }
                }
            }
        };
        check();
        console.log(answered);
	}	
}

page.pageInit();

var sendBtn = document.querySelector('.js-send');

sendBtn.addEventListener('click', page.pageSend);









