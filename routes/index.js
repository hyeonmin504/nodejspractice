var express = require('express');
var router = express.Router();
const locationModel = require("../model/location");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload',(req,res,next)=>{
  res.render("upload");
})

router.post('/location',(req,res,next)=>{
  const{title,address} = req.body;
  let location = new locationModel();
  location.title = title;
  location.address = address;
  location
  .save()
  .then((result) =>{
    console.log(result);
    res.json({
      message:"success",
    });
  })
  .catch(error =>{
    console.log(error);
    res.json({
      message: "error",
    });
  });
});

module.exports = router;
