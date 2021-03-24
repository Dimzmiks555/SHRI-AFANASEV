// Пример скрипта stories.js
window.renderTemplate = function(alias, data) {
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
      let theme = getQueryParam('theme');
    
 }