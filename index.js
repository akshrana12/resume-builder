const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const {
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');

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
});

// edited
app.get('/personal-detail/:id', (req, res) => {
    res.send(`hello personal detail with id:${req.params.id}`);
});
app.get('/education-detail/:id', (req, res) => {
    res.send(`hello education detail with id:${req.params.id}`);
});
app.get('/project/:id', (req, res) => {
    res.send(`hello project detail with id:${req.params.id}`);
});
app.get('/achievements/:id', (req, res) => {
    res.send(`hello personal detail with id:${req.params.id}`);
});
app.get('/work-experience/:id', (req, res) => {
    res.send(`hello personal detail with id:${req.params.id}`);
});
app.get('/technical-skills/:id', (req, res) => {
    res.send(`hello personal detail with id:${req.params.id}`);
});




app.post("/personal-detail", (req, res) => {
    req.body.id = uuidv4();
    detail.personal_detail = req.body;
    res.redirect('/');
});
app.post("/education-detail", (req, res) => {
    req.body.id = uuidv4();
    detail.education_detail.push(req.body);
    res.redirect('/');
});
app.post("/technical-skills", (req, res) => {
    req.body.id = uuidv4();
    detail.technical_skills = req.body;
    res.redirect('/');
});
app.post('/project', (req, res) => {
    req.body.id = uuidv4();
    detail.project.push(req.body);
    res.redirect('/');
});
app.post('/work-experience', (req, res) => {
    req.body.id = uuidv4();
    detail.work_experience.push(req.body);
    res.redirect('/');
});
app.post('/achievement', (req, res) => {
    req.body.id = uuidv4();
    detail.achievement.push(req.body);
    res.redirect('/');
});

app.listen(port, function() {
    console.log("Server is running on port", port);
})