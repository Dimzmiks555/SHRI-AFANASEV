document.addEventListener("DOMContentLoaded", function(event) { 
    //Получение параметров из адресной строки
  var getQueryParam = function getQueryParam (param) {
    var queries = window.location.search, regex, resRegex, results, response;
    param = encodeURIComponent(param);
    regex = new RegExp('[\\?&]' + param + '=([^&#]*)', 'g');
    resRegex = new RegExp('(.*)=([^&#]*)');
    results = queries.match(regex);

    if (!results) {
        return '';
    }
    response = results.map(function (result) {
      var parsed = resRegex.exec(result);

      if (!parsed) {
          return '';
      }

      return parsed[2].match(/(^\d+$)/) ? Number(parsed[2]) : parsed[2];
    })

    return response.length > 1 ? response : response[0];
  };
  // DATA
  const title = document.querySelector('.slide_title');

  // Получение данных параметров
  let theme = getQueryParam('theme');
  let slide = getQueryParam('slide');
  // Установка темы

  if (theme == 'light') {
    body.classList.add('theme_light');
  } else if (theme == 'dark'){
    body.classList.remove('theme_light');
    body.classList.add('theme_dark');
  } else {
    body.classList.remove('theme_light');
    body.classList.add('theme_dark');
  }
  //Слайд 1
  let slideLeaders =  body.innerHTML = window.renderTemplate();




  // Глобальная функция рендера шаблона
  window.renderTemplate = function(alias, data) {
    
  }
});

