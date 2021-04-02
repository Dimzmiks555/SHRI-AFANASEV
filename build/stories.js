 // DATA
window.renderTemplate = function(alias, data) {
  
  let name = data.users[4].name.replace(" ", "<br>");
  function createBlock(e, cls, html){
    let elem = document.createElement(e);
    if (cls) {
      elem.className = cls;
    }
    if (html) {
      elem.innerHTML = html;
    }
    return elem;
  };
  //Header

  let header = createBlock('header');

      // Title

      let title = createBlock('h1', 'slide_title', data.title);
      header.append(title);

      // Subtitle 

      let subtitle = createBlock('h2', 'slide_subtitle', data.subtitle);
      header.append(subtitle);

  // Content
  let content = createBlock('main');
  
  let users = createBlock('div', 'users');
  content.append(users);
    // User Left
    // User Top
    

    function createUser(id) {
      let userBlock, userInfo, userImgBlock, userEmoji, userImg, userName, userCommits, userStend;
        userBlock = createBlock('div','user');
        if (id == 0) {
          userBlock.className = 'top';
        } 
        else if (id == 1) {
          userBlock.className = 'second right';
        }
        else if (id == 2) {
          userBlock.className = 'second left';
        }
        else if (id == 3) {
          userBlock.className = 'third right';
        }
        else if (id == 4) {
          userBlock.className = 'third left';
        }
        // User Info
        userInfo = createBlock('div','user_info');
        userBlock.append(userInfo);

          // User Img Block
          userImgBlock = createBlock('div','user_img');
          userInfo.append(userImgBlock);

            // User Emoji

            if (id == 0) {
              console.log(1);
              userEmoji = createBlock('div','user_emoji', data.emoji);
              userImgBlock.append(userEmoji);
            }
            // User Img
            userImg = createBlock('img');
            userImg.src = `assets/images/1x/${data.users[id].avatar}`;
            userImg.alt = 'Пользователь';
            userImgBlock.append(userImg);
          
          // User Name
            userName = createBlock('div', 'user_name', data.users[id].name)
            userInfo.append(userName);
          // User Commits
            userCommits = createBlock('div', 'user_commits', data.users[id].valueText) 
            userInfo.append(userCommits);

        // User Stend
          userStend = createBlock('div', 'user_stend', Number(id) + 1);
          userBlock.append(userStend);
        return userBlock;
    };
    console.log(createUser(3));
  if (alias == 'leaders') {

    // Users 

    let = usersArray = Array();
    for (let i = 0; i < 5; i++){
        usersArray[i] = createUser(i);
    }
    users.append(usersArray[4],usersArray[2],usersArray[0],usersArray[1],usersArray[3]);
      //        <div class="user_info">
               
      //          <div class="user_img">
      //              <div class="user_emoji">
      //                ${data.emoji}          
      //              </div>
      //              <img src="assets/images/1x/${data.users[0].avatar}" alt="">           
      //          </div>
      //          <div class="user_name">
      //              ${data.users[0].name}             
      //          </div>  
      //          <div class="user_commits">
      //              ${data.users[0].valueText}             
      //          </div>    
      //        </div>     
      //        <div class="user_stend">
      //              1          
      //        </div>
         
    

  }

  

  // Return HTML
  return (header.outerHTML + content.outerHTML);
   


//    if (alias == 'leaders') {
//      let content = `<div class="users">
//      <div class="user third left">
//        <div class="user_info people">
//          <div class="user_img">
//              <img src="assets/images/1x/${data.users[4].avatar}" alt="">           
//          </div>
//          <div class="user_name">
//              ${name}             
//          </div>  
//          <div class="user_commits">
//              ${data.users[4].valueText}             
//          </div>    
//        </div>     
//        <div class="user_stend">
//              5         
//        </div>
   
//      </div>  
//      <div class="user second left">
//        <div class="user_info">
//          <div class="user_img">
//              <img src="assets/images/1x/${data.users[2].avatar}" alt="">           
//          </div>
//          <div class="user_name">
//              ${data.users[2].name}             
//          </div>  
//          <div class="user_commits">
//              ${data.users[2].valueText}             
//          </div>    
//        </div>     
//        <div class="user_stend">
//              3          
//        </div>
   
//      </div>    
//      
//       <div class="user right second">
//         <div class="user_info">
//            <div class="user_img">
//                <img src="assets/images/1x/${data.users[1].avatar}" alt="">           
//            </div>
//            <div class="user_name">
//                ${data.users[1].name}             
//            </div>  
//            <div class="user_commits">
//                ${data.users[1].valueText}             
//            </div>    
//          </div>     
//          <div class="user_stend">
//                2        
//          </div>
     
//      </div>
//      <div class="user right third">
//         <div class="user_info">
//            <div class="user_img">
//                <img src="assets/images/1x/${data.users[3].avatar}" alt="">           
//            </div>
//            <div class="user_name">
//                ${data.users[3].name}             
//            </div>  
//            <div class="user_commits">
//                ${data.users[3].valueText}             
//            </div>    
//          </div>     
//          <div class="user_stend">
//                4          
//          </div>
     
//      </div>            
//  </div>
//      `
//    }
//   return `<head>
//             <h1 class="slide_title">${data.title}</h1>
//             <h2 class="slide_subtitle">${data.subtitle}</h2>
//           </head>
            
            
//   `
}

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

