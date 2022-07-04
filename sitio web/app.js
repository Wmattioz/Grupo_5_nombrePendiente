const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// esta porción de código hay que poner para traer el modulo de ruta y asi vincular controlador// 
const mainRoute =require('./routes/mainRoute')


//si optimizamos el código a MVC este const path ya no sirve //
const path = require('path');


app.listen(process.env.PORT || 3000, () => console.log('Server runnning'));



////mejorar este código con propuesta debajo///
app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/', (req, res) => {
  res.render('cart');
});

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/', (req, res) => {
  res.render('producto');
});

app.get('/', (req, res) => {
  res.render('register');
});

  /* Nuevo código código MVC. - creo estructura de carpetas y controlador + archivo rutas




app.set('view engine', 'ejs');

app.use('/', mainRoute);
app.use('/login', mainRoute);
app.use('/register', mainRoute);
app.use('/producto', mainRoute);


  */
