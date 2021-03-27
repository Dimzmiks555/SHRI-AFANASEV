 // DATA
 window.renderTemplate = function(alias, data) {
   console.log(data);
  return `<h1 class="slide_title">${data.title}</h1> 
  `
}

document.addEventListener("DOMContentLoaded", function(event) { 
     // Глобальная функция рендера шаблона
    
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
 
  async function Add() {
    fetch("/api").then(response => {return response.json()}).then(test => {
      
      aliass = test;
      
      return aliass;
      
    })
  }
  Add();
  console.log(aliass);
 
  // alias = jsonData.alias;
  // data = jsonData.data;
  // console.log(alias);

  // Получение данных параметров
  let theme = getQueryParam('theme');
  let slide = getQueryParam('slide');
  // Установка темы
  // if (!theme){
  //   body.classList.remove('theme_light');
  //   body.classList.add('theme_dark');
  // }
  // if (theme == 'light') {
  //   body.classList.add('theme_light');
  // } else if (theme == 'dark'){
  //   body.classList.remove('theme_light');
  //   body.classList.add('theme_dark');
  // } else {
    
  // }




 
});

