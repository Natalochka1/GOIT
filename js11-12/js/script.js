$(function() {
    $('.carousel-list').Carousel();



var html = $('#test').html();
    var articles = [
      {
          title: 'info',
          firstName: 'Наталия',
          lastName: 'Типаева',
          email: 'natatipaeva@mail.ru',
          college: 'Восточноукраинский Национальный Университет им. Владимира Даля',
          country: 'Украина,',
          city: 'Харьков',
      }, 
    ];

    var content = tmpl(html, {
        data: articles
    });

    $('body').append(content);

});
    
    
