var app = require('./config/server');
// var msg = require('./mod_teste');

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaCursos = require('./app/routes/cursos')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function () {
  console.log("on Servidor");
  // console.log(msg());
});