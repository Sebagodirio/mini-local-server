const express = require('express');
const app = express();
const hbs = require('hbs');
require('./views/hbs/helpers')


app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'sebadstiAn',

    })

})

app.get('/about', function(req, res) {

    res.render('about')

})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})