var express = require('express');
var router = express.Router();
var gamebd = require('./../../models/gamebd');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/', async function (req, res, next) {
  var games = await gamebd.getGame();

  games = games.map(game => {
    if (game.imgId) {
      const imagen = cloudinary.image(game.imgId, {
        width: 100,
        height: 100,
        crop: 'fill' //pad 
      });
      return {
        ...game,
        imagen
      }
    } else {
      return {
        ...game,
        imagen: ''
      }
    }
  });

  res.render('admin/games', { //view/carpetaadmin/login.hbs
    layout: 'layout',//view/carpetaadmin/layout.hbs
    games                 //trae los juegos de la base de datos
  });
});

router.get('/agregar', (req, res) => {
  res.render('admin/agregar', {
    layout: 'admin/layout2'
  });
});

router.get('/editar', (req, res, next) => {
  res.render('admin/editar', {
    layout: 'admin/layout2'
  });
});


router.post('/agregar', async (req, res, next) => {
  try {

    var imgId = '';

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      imgId = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.Nombre != "" && req.body.Tipo != "" && req.body.Precio != "" && req.body.Stock != "" && req.body.Descripcion != "") {
      await gamebd.insertGame({
        ...req.body,// Nombre precio , stock .. etc
        imgId
      });
      res.redirect('/')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout2',
        error: true,
        message: 'todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout: 'admin/layout2',
      error: true,
      message: 'no se puedo añadir a la base de datos '
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let game= await gamebd.selectGameONe(id);

  if(game.imgId){
    await (destroy(game.imgId));
  }

  await gamebd.deleteGame(id);
  res.redirect('/');
})

router.get('/editar/:id', async (req, res, next) => {
  let id = req.params.id;
  let game = await gamebd.selectGameONe(id);
  res.render('admin/editar', {
    layout: 'admin/layout2',
    game
  });
});

router.post('/actualizar', async (req, res, next) => {
  try {


    let imgId = req.body.img_original;
    console.log(imgId);
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      imgId = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        imgId = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }

    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    if (req.body.Nombre != "" && req.body.Tipo != "" && req.body.Precio != "" && req.body.Stock != "" && req.body.Descripcion != "") {
      let obj = {
        Nombre: req.body.Nombre,
        Tipo: req.body.Tipo,
        Precio: req.body.Precio,
        Stock: req.body.Stock,
        Descripcion: req.body.Descripcion,
        imgId
      }
      await gamebd.updateGame(obj, req.body.id);
      res.redirect('/');
    }
    else {
      res.render('admin/editar', {
        layout: 'admin/layout2',
        error: true,
        message: ' todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('/editar', {
      layout: 'admin/layout2',
      error: true,
      message: ' No se modifico el juego'
    });
  };
});
module.exports = router;
