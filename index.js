const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/view'));

app.use(express.static('assets'));
app.use(express.urlencoded({
    extended: true
}));
const detail = {};
detail.education_detail = [];

app.get("/", (req, res) => {
    console.log(detail);
    res.render('index', {
        detail: detail
    });
});
app.get("/personal-detail", (req, res) => {
    res.render('personal-detail')
});
app.get("/education-detail", (req, res) => {
    res.render('education-detail');
});




app.post("/personal-detail", (req, res) => {
    detail.personal_detail = req.body;
    res.redirect('/');
});
app.post("/education-detail", (req, res) => {
    detail.education_detail.push(req.body);
    console.log(detail);
    res.redirect('/');
});


app.listen(port, function() {
    console.log("Server is running on port", port);
})