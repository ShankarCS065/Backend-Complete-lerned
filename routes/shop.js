// const express = require('express');

// const router = express.Router();

// router.get('/',(req,res,next) => {
//     // console.log('In another middleware!');
   
//      res.send('<h1>Hello from express!</h>');
      
//    });

// module.exports=router;



//serving html page

// const path = require('path');

// const express = require('express');

// const rootDir= require('../util/path');

// const router = express.Router();

// router.get('/',(req,res,next) => {
//   //  res.sendFile(path.join(__dirname,'../','views','shop.html'));
//   //res.sendFile(path.join(__dirname,'..','views','shop.html'));
//     res.sendFile(path.join(rootDir,'views','shop.html'));   
//    });

// module.exports=router;


//Sharing data Across Request and Users

// const path = require('path');

// const express = require('express');

// const rootDir= require('../util/path');
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/',(req,res,next) => {
//   console.log('shop.js',adminData.products);
//     res.sendFile(path.join(rootDir,'views','shop.html'));   
//    });
   
// module.exports=router;


///installing and implementing pug

const path = require('path');

const express = require('express');

const rootDir= require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req,res,next) => {
  const products = adminData.products;
  res.render('shop',{prods:products,
    pageTitle: 'Shop',
      path:'/',
      hasProducts: products.length > 0,
      activeShop:true,
      productCSS: true
      //layout: false
    });
      
     });
   
module.exports=router;

