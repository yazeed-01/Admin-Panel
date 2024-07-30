const express = require('express');
const app = express();
const path = require('path')
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('views', path.join(__dirname, 'views'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const fileUpload = require('express-fileupload')
app.use(fileUpload())



const config = require('./db/config');
const connect =  require('./db/connect')



const homePage = require('./controllers/homePage')
const clients = require('./controllers/clientsPage')
const employees = require('./controllers/employeesPage')
const addEmployee = require('./controllers/addEmployee')
const addClient = require('./controllers/addClient')
const updateEmployee = require('./controllers/editEmployee');
const deleteEmployee = require('./controllers/deleteEmployee');
const editClient = require('./controllers/editClient');
const deleteClient = require('./controllers/deleteClient');
const productPage = require('./controllers/productPage');
const addProduct = require('./controllers/addProduct');
const editProduct = require('./controllers/editProduct');
const deleteProduct = require('./controllers/deleteProduct');
const categoryPage = require('./controllers/categoryPage');
//const addCategory = require('./controllers/addCategory');
//const editCategory = require('./controllers/editCategory');
//const deleteCategory = require('./controllers/deleteCategory'); 
//const oderPage = require('./controllers/oderPage');
//const addOrder = require('./controllers/addOrder');
//const editOrder = require('./controllers/editOrder');
//const deleteOrder = require('./controllers/deleteOrder');

app.get('/',homePage)
app.get('/clients',clients)
app.get('/employees',employees)
app.get('/products',productPage)
//app.get('/categories',categoryPage)
//app.get('/orders',oderPage)


app.post('/addEmployee',addEmployee)
app.post('/updateEmployee', updateEmployee)
app.post('/deleteEmployee', deleteEmployee)
app.post('/addClient',addClient)
app.post('/editClient', editClient)
app.post('/deleteClient', deleteClient)
app.post('/addProduct',addProduct)
app.post('/editProduct',editProduct)
app.post('/deleteProduct',deleteProduct)
//app.post('/addCategory',addCategory)
//app.post('/editCategory',editCategory)
//app.post('/deleteCategory',deleteCategory)
//app.post('/addOrder',addOrder)
//app.post('/editOrder',editOrder)
//app.post('/deleteOrder',deleteOrder)





app.listen(4000, ()=>{
    console.log('App listening on port 4000')
    })
    