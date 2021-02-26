const express = require('express')
const TodoController = require('./src/controllers/todoController')
const RegisterController = require('./src/controllers/registerController')
const LoginController = require('./src/controllers/loginController')
const app = express()
const port = 3000

app.use(express.json())

app.get('/todos/', TodoController.get)
app.post('/todos/', TodoController.create)
app.put('/todos/:id', TodoController.update)
app.delete('/todos/:id', TodoController.delete)

app.get('/register/', RegisterController.get)
app.post('/register/', RegisterController.create)
app.delete('/register/:id', RegisterController.delete)

app.get('/logins', LoginController.get)

//Static Files
app.use(express.static('public'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/img', express.static(__dirname + 'public/css'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/regist', (req, res) => {
    res.sendFile(__dirname + '/views/regist.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const { Sequelize } = require('sequelize');
const db = require('./src/config/database.json')
const sequelize = new Sequelize(db.development)
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }