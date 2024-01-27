//const http = require('http');
//const fs= require('fs')
//1.mehod
/*function rqListener(req,res){

}

http.createServer(rqListener);*/
//2.method
/*http.createServer(function(req,res){

});*/

//3.method
/*const server = http.createServer((req,res)=>{
console.log(req);
//process.exit();
});

server.listen(3000);*/

//uderstanding Requests

/*const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    //process.exit();
    });
    
    server.listen(3000);*/


    //sending responses
   /* const server = http.createServer((req,res)=>{
        console.log(req.url,req.method,req.headers);
        //process.exit();
        res.setHeader('Content-Type','text/html');
        res.write('<html');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');        
        res.write('</html>');
        res.end();
        res.write();
        });
        
        server.listen(3000);*/
        

      //  Routing Requests
        // const server = http.createServer((req,res)=>{
        //     const url = req.url;
        //    const method = req.method;

        //      if(url === '/'){
        //         res.write('<html');
        //         res.write('<head><title>Enter message</title></head>');
        //         res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');       
        //         res.write('</html>');
        //        return res.end();
                
        //     }
        //     if(url === '/message' && method === 'POST'){
        //         fs.writeFileSync('message.txt','DUMMY');
        //         res.statusCode = 302;
        //         res.setHeader('Location','/');
        //        return res.end();
            
        //     }
        //     //console.log(req.url,req.method,req.headers);
        //     //process.exit();
        //     res.setHeader('Content-Type','text/html');
        //     res.write('<html');
        //     res.write('<head><title>My First Page</title></head>');
        //     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');        
        //     res.write('</html>');
        //     res.end();
        //     });
            
        //     server.listen(3000);


//parsing request bodies
// const server = http.createServer((req,res)=>{
//             const url = req.url;
//            const method = req.method;

//              if(url === '/'){
//                 res.write('<html');
//                 res.write('<head><title>Enter message</title></head>');
//                 res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');      
//                 res.write('</html>');
//                return res.end();
                
//             }
//             if(url === '/message' && method === 'POST'){
//                 const body=[];
//                 req.on('data',(chunk)=>{
//                     console.log(chunk);
//                      body.push(chunk);                });
//                 req.on('end',()=>{
//                const parsedBody =Buffer.concat(body).toString();
//                const message=parsedBody.split('=')[1];
//                fs.writeFileSync('message.txt',message); 
//                res.statusCode = 302;
//                res.setHeader('Location','/');
//               return res.end();
           
//             });
              
//             }
//             //console.log(req.url,req.method,req.headers);
//             //process.exit();
//             res.setHeader('Content-Type','text/html');
//             res.write('<html');
//             res.write('<head><title>My First Page</title></head>');
//             res.write('<body><h1>Hello from my Node.js Server!</h1></body>');        
//             res.write('</html>');
//             res.end();
//             });
            
//             server.listen(3000);


     //Blocking and non blocking code
     
    //  const server = http.createServer((req,res)=>{
    //   const url = req.url;
    //  const method = req.method;

    //    if(url === '/'){
    //       res.write('<html');
    //       res.write('<head><title>Enter message</title></head>');
    //       res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');      
    //       res.write('</html>');
    //      return res.end();
          
    //   }
    //   if(url === '/message' && method === 'POST'){
    //       const body=[];
    //       req.on('data',(chunk)=>{
    //           console.log(chunk);
    //            body.push(chunk);                });
    //       req.on('end',()=>{
    //      const parsedBody =Buffer.concat(body).toString();
    //      const message=parsedBody.split('=')[1];
    //      fs.writeFile('message.txt',message,err =>{
    //       res.statusCode = 302;
    //       res.setHeader('Location','/');
    //      return res.end();
    //      }); 
        
    //   });
        
    //   }
    //   //console.log(req.url,req.method,req.headers);
    //   //process.exit();
    //   res.setHeader('Content-Type','text/html');
    //   res.write('<html');
    //   res.write('<head><title>My First Page</title></head>');
    //   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');        
    //   res.write('</html>');
    //   res.end();
    //   });
      
    //   server.listen(3000);

      //using node modules system

      // const http = require('http');
      // const routes= require('./routes');
      // console.log(routes.someText);
      // const server = http.createServer(routes.handler);
      //   server.listen(3000);


        //installing express.js

        //using node modules system

      //const http = require('http');

    //   const express = require('express');

    //   const app= express();

    //   app.use((req,res,next) => {
    //      console.log('In the middleware!');
    //      next();
    //   });

    //   app.use((req,res,next) => {
    //     console.log('In another middleware!');
    //     //...
    //     res.send('<h1>Hello from express!</h>');
         
    //  });

    //   // const server = http.createServer(app);
    //   //  server.listen(3000);
    //   app.listen(3000);


    //handling different routes

    // const express = require('express');

    //   const app= express();

    //   app.use('/',(req,res,next) => {
    //     console.log('this always runs!');
    //   next();
         
    //  });

    //   app.use('/add-product',(req,res,next) => {
    //     console.log('In another middleware!');
      
    //     res.send('<h1>add product page!</h>'); 
        
         
    //  });

    //   app.use('/',(req,res,next) => {
    //     console.log('In another middleware!');
      
    //     res.send('<h1>Hello from express!</h>');
         
    //  });

    //   app.listen(3000);


//parsing incoming request

// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminRoutes = require('./Routes/admin');
// const shopRoutes = require('./Routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.use('/add-product',(req,res,next) => {
//   console.log('In another middleware!');

//   res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>'); 

// });
// app.post('/product',(req,res,next)=>{
//    console.log(req.body);
//     res.redirect('/');
// });

// app.use('/',(req,res,next) => {
//  // console.log('In another middleware!');

//   res.send('<h1>Hello from express!</h>');
   
// });

// app.listen(3000);


// adding a 404 error page

// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page not found </h1>');
// });

// app.listen(3000);


//filtering paths

// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page not found </h1>');
// });

// app.listen(3000);


/// creating a html page

// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page not found </h1>');
// });

// app.listen(3000);

//returning 404 page

// const path = require('path');
// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'));
// });

// app.listen(3000);


///Sharing Data Across Request and Users

// const path = require('path');
// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminData.routes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'));
// });

// app.listen(3000);



/// Installing and impleamenting pug

// const path = require('path');
// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// app.set('view engine','pug');
// app.set('views','views')



// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminData.routes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'));
// });

// app.listen(3000);



//converting html file to pug

// const path = require('path');
// const express = require('express');

// const bodyParser=require('body-parser');

// const app = express();

// app.set('view engine','pug');
// app.set('views','views')



// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminData.routes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).render('404',{pageTitle:'page not found!'});
// });

// app.listen(3000);


//working with handlebars

// const path = require('path');
// const express = require('express');

// const bodyParser=require('body-parser');
// const expressHbs = require('express-handlebars');


// const app = express();
// app.engine('hbs',expressHbs({layoutsDir: 'views/layouts/',defaultLayout: 'main-layouts',extname:'hbs'}));
// app.set('view engine','hbs');
// app.set('views','views')


// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',adminData.routes);
// app.use(shopRoutes);

// app.use((req,res,next)=>{
//     res.status(404).render('404',{pageTitle:'page not found!'});
// });

// app.listen(3000);



// Working with Ejs

const path = require('path');
const express = require('express');

const bodyParser=require('body-parser');


const app = express();
app.set('view engine','ejs');
app.set('views','views')


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found!'});
});

app.listen(3000);