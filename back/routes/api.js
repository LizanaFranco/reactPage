var express = require('express');
var router= express.Router();
var gamebd=require('./../models/gamebd');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/', async function (req,res,next) {

    let games = await gamebd.getGame();

    games=games.map(games=>{
        if(games.imgId){
            const imagen = cloudinary.url(games.imgId,{
                crop:'fill'
            });
            return{
                ...games,
                imagen
            }
        }else{
            return{
                ...games,
                imagen:''
            }
        }
    });
    res.json(games);
    
});


router.post('/contacto',async (req,res)=>{
    const mail={
        to: 'franck14141@gmail.com',
        subject:'Contacto web',
        html:`${req.body.nombre} se contacto a traves de la web  y quiere mas informacion a este correo : ${req.body.email} <br> Además , hizo el siguiente  comentario ${req.body.comentario}
        <br> su telefono es : ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });//cierra transp

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message:'Mensaje enviado'
    });
})


module.exports = router;