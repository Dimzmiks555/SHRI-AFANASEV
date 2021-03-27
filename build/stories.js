document.addEventListener("DOMContentLoaded", function(event) { 
    let body = document.querySelector('body');
     // Глобальная функция рендера шаблона
    window.renderTemplate = function(alias, data) {
      console.log(alias);
      return alias;
    }
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
  async function GetData() {
        // отправляет запрос и получаем ответ
        const response = await fetch("/api", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
            // получаем данные
            const jsonData = await response.json();
            return jsonData;
        } else {
          console.log("Ошибка HTTP: " + response.status);
        }
    }
    let alias;
    let data;
  let jsonData = GetData().then(data => {
    console.log(data);
    alias = data.alias;
    data = data.data;
    return alias,data;
  });
  
  console.log(alias);

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




 
});

