// Пример скрипта stories.js
window.renderTemplate = function(alias, data) {
    const slide = app.get('/', (req, res) => {
        return req.query.slide;
    });
    const theme = app.get('/', (req, res) => {
        return theme = req.query.theme;
    });
    return theme;
    return 'HTML-разметка отдельного слайда в виде строки';
    
 }