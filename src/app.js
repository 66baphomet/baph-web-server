const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//for git pull
//defining the public, views and partials path

const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setting the public, views and partials path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setting up static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/help', (req, res)=>{
    res.render('help')
})

app.listen(3000, ()=>{
    console.log('Server is upto 3000')
})
