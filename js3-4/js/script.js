var data = {
	'pageTitle' : 'Тест по программированию' ,
	'categories' : [{
		'categoryName': '1. Вопрос №1',
		'categoryList': [{
			'checkbox',
             'title': 'Вариант ответа №1'
         },
         {
         	'checkbox',
         	'title': 'Вариант ответа №2'
         },
         {
         	'checkbox',
         	'title': 'Вариант ответа №3'
		}],
	
		'categoryName': '2. Вопрос №2',
        'categoryList' : [{
        	'checkbox',
        	'title': 'Вариант ответа №1'
		},
		{
			'checkbox',
			'title': 'Вариант ответа №2'
		},
		{
			'checkbox',
			'title': 'Вариант ответа №3'
	    }]
    }]

	'categoryName': '3. Вопрос №3',
        'categoryList' : [{
        	'checkbox',
        	'title': 'Вариант ответа №1'
		},
		{
			'checkbox',
			'title': 'Вариант ответа №2'
		},
		{
			'checkbox',
			'title': 'Вариант ответа №3'
	    }]
    }]

}

    var page = {
    	buildPage: function(){
    		var wrapper = document.createElement('div');
    		wrapper.className = 'wrapper';
    		document.body.appendChild(wrapper);

    		var titlePage = document.createElement('h1');
    		titlePage.innerHTML = data.pageTitle;
    		wrapper.appendChild(titlePage);
    	},
    	buildList: function() {
    		for(var i = 0; i < data.categories.length; i++) {
    			var categoryBlock = document.createElement('checkbox');
    			categoryBlock.className = 'categoryBlock';
    			document.querySelector('.wrapper').appendChild(categoryBlock);

    			var titleCategory = document.createElement('h3');
    			titleCategory.innerHTML = data.categories[i].categoryName;
    			categoryBlock.appendChild(titleCategory);

    			 var element = document.createElement('checkbox');
    			 element.innerHTML = 'Вариант ответа №1';
    			 var wrapper = document.querySelector(element);
    		}
    	}
    };
        console.log(data);

    page.buildPage(data.pageTitle);
    page.buildList(data.checkbox);

    page.buildList();
    page.buildList();
    console.log(this.document);