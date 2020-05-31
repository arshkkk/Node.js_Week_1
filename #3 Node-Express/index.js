const express = require('express')
const morgan = require('morgan')

const app = express()

const hostname='localhost'
const port = 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.static(__dirname+'/public'))

app.route('/dishes')
.all((req,res,next)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Willl send you dishes')
})
.post((req,res,next)=>{
    console.log(req.body)
    res.end('Willl Save your Dish')
})
.put((req,res,next)=>{
    console.log(req.body)
    res.end('Will update your dish')
})
.delete((req,res,next)=>{
    console.log(req.body)
    res.end('Willl delete your dish')
})




app.listen(3000)