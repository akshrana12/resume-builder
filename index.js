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
detail.project = [];
detail.work_experience = [];
detail.achievement = [];

app.get("/", (req, res) => {
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
app.get("/technical-skills", (req, res) => {
    res.render('technical-skills');
});
app.get("/project", (req, res) => {;
    res.render('project');
});
app.get('/work-experience', (req, res) => {
    res.render('work-experience');
});
app.get('/achievement', (req, res) => {
    res.render('achievement');
})


app.post("/personal-detail", (req, res) => {
    detail.personal_detail = req.body;
    res.redirect('/');
});
app.post("/education-detail", (req, res) => {
    detail.education_detail.push(req.body);
    res.redirect('/');
});
app.post("/technical-skills", (req, res) => {
    detail.technical_skills = req.body;
    res.redirect('/');
});
app.post('/project', (req, res) => {
    detail.project.push(req.body);
    res.redirect('/');
});
app.post('/work-experience', (req, res) => {
    detail.work_experience.push(req.body);
    res.redirect('/');
});
app.post('/achievement', (req, res) => {
    detail.achievement.push(req.body);
    res.redirect('/');
});

app.listen(port, function() {
    console.log("Server is running on port", port);
})