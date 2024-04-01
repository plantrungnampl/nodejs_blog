class SiteControllers {
    // [GET] /
    // index la ten tu dat
    index(req, res) {
        res.render('home');
    }
    //    [GET] /search
    search(red, res) {
        res.render('search');
    }
}
module.exports = new SiteControllers();
