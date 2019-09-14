//Imports
const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

//Sendgrid API setup
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

//Create server
const app = express();
app.use(express.static(__dirname + '/dist/client'));
app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

//Set-up server
app.use(bodyParser.json());

//Set-up database
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "projects"
// });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Start server
app.listen(8000, () => {
    console.log('Server started and updated!');
})

// Start database
// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Database connected!');
// });

// //Get all data
// app.route('/api/projects').get((req, res) => {
//     console.log('getting all data');
//     res.send(201, {projects: [{ name: 'kymera' }, { name: 'pley' }]});
// })

// //Get specific data using dynamic route
// app.route('/api/projects/:name').get((req, res) => {
//     const requestedProjectName = req.params['name'];
//     res.send(201, { name: requestedProjectName });
// })

// //Create new entry in database
// app.route('/api/projects').post((req, res) => {
//     var sql = `INSERT INTO projects (project_name, project_url) VALUES ('test-name','test-url')`;
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("test-name inserted into database");
//     });
//     res.send(201, req.body);
// })

// //Delete entry
// app.route('/api/projects/:name').delete((req, res) => {
//     console.log('hit endpoint');
//     const projectName = req.params['name'];
//     var sql = `DELETE FROM projects WHERE project_name = '` + projectName + `'`;
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         else console.log(projectName + " deleted from database");
//     });
//     res.sendStatus(204);
// })

//Send email
app.route('/api/email').post((req, res) => {
    console.log('sending email.\nsubject = ' + req.body.subject + '\ntext = ' + req.body.text)
    const newMessage = {
        to: 'dylanwraith@gmail.com',
        from: 'dylanwraith@gmail.com',
        subject: ' ' + req.body.subject,
        text: ' ' + req.body.text,
        html: '<strong>' + req.body.text + '</strong>'
    };
    console.log('message created. now sending')
    sgMail.send(newMessage);
    console.log('message sent. returning status 201')
    res.status(201).send(req.body);
})