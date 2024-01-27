// const express = require('express');

// const router = express.Router();

// router.use('/add-product',(req,res,next) => {    
//       res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>'); 
    
//     });
//     router.post('/product',(req,res,next)=>{
//        console.log(req.body);
//         res.redirect('/');
//     });

// module.exports = router;


//filtering paths

// const express = require('express');

// const router = express.Router();

// router.get('/add-product',(req,res,next) => {    
//       res.send('<form action ="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>'); 
    
//     });
    
// router.post('/add-product',(req,res,next)=>{
//        console.log(req.body);
//         res.redirect('/');
//     });

// module.exports = router;


//serving html page

// const path = require('path')
// const express = require('express');

// const rootDir = require('../util/path');

// const router = express.Router();

// router.get('/add-product',(req,res,next) => {    
//         // res.sendFile(path.join(__dirname,'../','views','add-product.html'));    
//         res.sendFile(path.join(rootDir,'views','add-product.html'));    

//     });
    
// router.post('/add-product',(req,res,next)=>{
//        console.log(req.body);
//         res.redirect('/');
//     });

// module.exports = router;


//Sharing Data Across Requests & Users

// const path = require('path')
// const express = require('express');

// const rootDir = require('../util/path');

// const router = express.Router();

// const products = [];

// router.get('/add-product',(req,res,next) => {    
//         // res.sendFile(path.join(__dirname,'../','views','add-product.html'));    
//         res.sendFile(path.join(rootDir,'views','add-product.html'));    

//     });
    
// router.post('/add-product',(req,res,next)=>{
//       products.push({ title: req.body.title });
//         res.redirect('/');
//     });

// exports.routes = router;
// exports.products = products;

//converting html file to pug
const path = require('path')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product',(req,res,next) => {    
        res.render('add-product',{ pageTitle: 'Add Product', path:'/admin/add-product',formsCSS:true,productCSS: true,activeAddProduct:true});
    });
    
router.post('/add-product',(req,res,next)=>{
      products.push({ title: req.body.title });
        res.redirect('/');
    });

exports.routes = router;
exports.products = products;