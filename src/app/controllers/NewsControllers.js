class NewsControllers {
    // [GET] /news
    // index la ten tu dat
    index(req, res) {
        res.render('news');
    }
    //    [GET] /news/:slug
    show(red, res) {
        res.send('show delta');
    }
}
module.exports = new NewsControllers();
