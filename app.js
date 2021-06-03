const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const hbs = require('express-handlebars');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//setting public folder
app.use(express.static('public'));

//MIDDLEWARES
if(process.env.NODE_ENV="development"){
	app.use(morgan('dev'));
};

//view engines
app.set('view engine','hbs');

app.engine('hbs',hbs({
		extname:'hbs',
	layoutDir:`${__dirname}/views/layout`,
	layoutDir:`${__dirname}/views/partials`,
	defaultLayout:'index'

}));

//content setting for site
const header = {
	nav1:"Food delivery",
	nav2:"How it works",
	nav3:"our cities",
	nav4:"sign up",
	nav5:"About",
	heroText1:"GoodBye Junk food!",
	heroText2:"Hello SuperHealthy Meals",
	heroButtonFull:"I'm Hungry",
	heroButtonGhost:"Show me more",
};

//HOME ROUTE
app.get('/',(req,res)=>{
  res.render("home",{
		layout:"index",
		nav1:header.nav1,
		nav2:header.nav2,
		nav3:header.nav3,
		nav4:header.nav4,
		nav5:header.nav5,
		heroText1:header.heroText1,
		heroText2:header.heroText2,
		heroButtonFull:header.heroButtonFull,
		heroButtonGhost:header.heroButtonGhost,
	});
});

//name ke through hm parameter paas kr rhe hain isse index.hbs file me jahan name variable hoga
//wahan 'tej' show hoga
//yahan agar hm body2 render krenge to body ka content show hoga


//view engine routes
app.get('/about',(req,res)=>{
	res.render('about',{
		layout:"index"
	});
});

//isi tarah alag alag route pr alag alag file render kr skte hain

//for post something
app.get('/form',(req,res)=>{
	res.render('form');

});

app.post('/uploads',(req,res)=>{

     const age = req.body.age;
		console.log({age});
		res.send("Form sent");
	

});









module.exports = app;
