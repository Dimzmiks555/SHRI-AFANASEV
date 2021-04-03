 // DATA
window.renderTemplate = function(alias, data) {
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
  
    // User Left
    function ActiveValue(){
      if (data.values){
        for (i = 0; i < data.values.length; i++) {
          if (data.values[i].active){
            return data.values[i].value;
          }
        }
      }
    }
    
    let activeValue = ActiveValue();
    function renderChart(id){
      let  chartStend, chartAmount, chartBody, chartPeriod;
      // Chart

        // Chart Stend
        chartStend = createBlock('div', 'chart_stend');

          // Chart Amount
          chartAmount = createBlock('div', 'chart_amount', data.values[id].value);
          chartStend.append(chartAmount);
          // Chart Body
          chartBody = createBlock('div', 'chart_body');
          if (data.values[id].active) {
            chartStend.classList.add('active');
            chartBody.style.height = '100%'
          } else {
            chartBody.style.height = data.values[id].value / ( activeValue / 100 );
          }
          chartStend.append(chartBody);
          // Chart Period
          chartPeriod = createBlock('div', 'chart_period', data.values[id].title);
          chartStend.append(chartPeriod);

      return chartStend;
    }
    function renderUser(id) {
      let userBlock, userInfo, userImgBlock, userEmoji, userImg, userName, userCommits, userStend;
              
        userBlock = createBlock('div','user');

        if (id == 0) {
          userBlock.classList.add('top');
        } 
        else if (id == 1) {
          userBlock.classList.add('second','right');
        }
        else if (id == 2) {
          userBlock.classList.add('second','left');
        }
        else if (id == 3) {
          userBlock.classList.add('third','right');
        }
        else if (id == 4) {
          userBlock.classList.add('third','left');
        }
        // User Info
        userInfo = createBlock('div','user_info');
        userBlock.append(userInfo);

          // User Img Block
          userImgBlock = createBlock('div','user_img');
          userInfo.append(userImgBlock);

            // User Emoji

            if (id == 0) {
              userEmoji = createBlock('div','user_emoji', data.emoji);
              userImgBlock.append(userEmoji);
            }
            if (data.selectedUserId &&  data.users[id].id == data.selectedUserId){
              userEmoji = createBlock('div','user_emoji', '👍');
              userImgBlock.append(userEmoji);
            } 
            // User Img
            userImg = createBlock('img');
            userImg.src = `assets/images/1x/${data.users[id].avatar}`;
            userImg.alt = 'Пользователь';
            userImgBlock.append(userImg);
          
          // User Name
            userName = createBlock('div', 'user_name', data.users[id].name.replace(" ", "<br>"))
            userInfo.append(userName);
          // User Commits
            userCommits = createBlock('div', 'user_commits', data.users[id].valueText) 
            userInfo.append(userCommits);

        // User Stend
          userStend = createBlock('div', 'user_stend', Number(id) + 1);
          userBlock.append(userStend);
        return userBlock;
    };
  if (alias == 'leaders') {

    // Users 
    
    let users = createBlock('div', 'users');
    content.append(users);
    let = usersArray = Array();
    for (let i = 0; i < 5; i++){
        usersArray[i] = renderUser(i);
    }

    users.append(usersArray[4],usersArray[2],usersArray[0],usersArray[1],usersArray[3]);

  }
  if (alias == 'chart'){
    
    let chart = createBlock('div', 'chart');
    content.append(chart);
    let = chartArray = Array();

    function Active(){
      for (i = 0; i < data.values.length; i++) {
        if (data.values[i].active){
          return i;
        }
      }
    }
    let minAm = Active() - 6;
    let maxAm = Active() + 3;
    for (i = minAm; i < maxAm; i++) {
      chartArray[i] = renderChart(i);
      chart.append(chartArray[i]);
    }
    // Leaders Block
    let leaders = createBlock('div', 'leaders');
    content.append(leaders);

      // Leader

      for (i = 0; i < 2; i++) {
        let leader = createBlock('div', 'leader');
        leaders.append(leader);

        leaderImg = createBlock('img');
        leaderImg.src = `assets/images/1x/${data.users[i].avatar}`;
        leaderImg.alt = 'Пользователь';
        leader.append(leaderImg);

        leaderInfo = createBlock('div', 'leader_info');
        leader.append(leaderInfo);

          leaderName = createBlock('div', 'leader_name', data.users[i].name);
          leaderCommits = createBlock('div', 'leader_commits', data.users[i].valueText);
          leaderInfo.append(leaderName, leaderCommits);
        if (i == 0){
          let hr = createBlock('div', 'hr');
          leader.after(hr);
        }
      }

  }

  

  // Return HTML
  return (header.outerHTML + content.outerHTML);
   


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




 
});

