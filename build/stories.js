 // DATA
 window.renderTemplate = function(alias, data) {
   console.log(data);
  return `<head>
            <h1 class="slide_title">${data.title}</h1>
            <h2 class="slide_subtitle">${data.subtitle}</h2>
            </head>
            <div class="users">
                <div class="user third left">
                  <div class="user_info people">
                    <div class="user_img">
                        <img src="assets/images/1x/${data.users[4].avatar}" alt="">           
                    </div>
                    <div class="user_name">
                        ${data.users[4].name}             
                    </div>  
                    <div class="user_commits">
                        ${data.users[4].valueText}             
                    </div>    
                  </div>     
                  <div class="user_stend">
                        ${data.users[4].id}          
                  </div>
              
                </div>  
                <div class="user second left">
                  <div class="user_info">
                    <div class="user_img">
                        <img src="assets/images/1x/${data.users[2].avatar}" alt="">           
                    </div>
                    <div class="user_name">
                        ${data.users[2].name}             
                    </div>  
                    <div class="user_commits">
                        ${data.users[2].valueText}             
                    </div>    
                  </div>     
                  <div class="user_stend">
                        3          
                  </div>
              
                </div>    
                <div class="user top">
                  <div class="user_info">
                    
                    <div class="user_img">
                        <div class="user_emoji">
                          ${data.emoji}          
                        </div>
                        <img src="assets/images/1x/${data.users[0].avatar}" alt="">           
                    </div>
                    <div class="user_name">
                        ${data.users[0].name}             
                    </div>  
                    <div class="user_commits">
                        ${data.users[0].valueText}             
                    </div>    
                  </div>     
                  <div class="user_stend">
                        1          
                  </div>
              
                </div>     
                 <div class="user right second">
                   <div class="user_info">
                      <div class="user_img">
                          <img src="assets/images/1x/${data.users[1].avatar}" alt="">           
                      </div>
                      <div class="user_name">
                          ${data.users[1].name}             
                      </div>  
                      <div class="user_commits">
                          ${data.users[1].valueText}             
                      </div>    
                    </div>     
                    <div class="user_stend">
                          2        
                    </div>
                
                </div>
                <div class="user right third">
                   <div class="user_info">
                      <div class="user_img">
                          <img src="assets/images/1x/${data.users[3].avatar}" alt="">           
                      </div>
                      <div class="user_name">
                          ${data.users[3].name}             
                      </div>  
                      <div class="user_commits">
                          ${data.users[3].valueText}             
                      </div>    
                    </div>     
                    <div class="user_stend">
                          4          
                    </div>
                
                </div>            
            </div>
            
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

