class NewsController {
    index(req, res) {
        res.render("home");
    }
    show(req, res) {
        res.send("News Detail");
    }
}
module.exports = new NewsController();
