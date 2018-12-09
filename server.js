const express = require('express');
const app = express();
const multer = require("multer");
const path = require('path');
const crypto = require('crypto');
//var hash = crypto.createHash('md5')
const fs = require ('fs');

//app.locals.preview = getimagename();


app.set('view engine', 'ejs')

app.get('/',function (req,res){
    res.render('E:/img/Public/index.ejs')
})

 function hashnator(filename) {
  let md5 = crypto.createHash('md5').update(filename+Date.now()).digest("hex");
    
   return md5;
    
   }



const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'Public/file');
    },
    filename:  function(req,file,cb){
        let  md5 = hashnator(file.originalname);
    cb(null, `${md5}${path.extname(file.originalname)}`);
    //getimagename(md5,path.extname(file.originalname));

    }

})


const upload = multer({ storage:storage,
    fileFilter: function (req, file, cb) {
        ext = path.extname(file.originalname)
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return cb(new Error('Only images are allowed'))
        }
        
        cb(null, true)

      },



});



app.post('/file/upload', upload.single('imagem'), 
   async  (req, res,next) => {
      
       var imagename = req.file.filename
       console.log(imagename)
        //let extension = path.extname(imagename)
        //res.send('<h2>Upload realizado com sucesso</h2> <br> <br> <h2> Filename: '+ imagename+'</h2>')
        //res.sendFile('E://img//Public//image.html');

    }) 


    




const listener = app.listen(8080, function(){
    console.log("Shit is listening on port " + listener.address().port);
    
})

