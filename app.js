const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;




app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Adan',
        title: 'programming'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Adan',
        title: 'programming'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Adan',
        title: 'programming'
    })
})*/

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.listen(port)