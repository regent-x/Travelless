const express = require('express')
const { engine } =require('express-handlebars')

const port = process.env.PORT

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('view', './view')

app.get("/", (req, res)=>{
    res.type("text/plain")
    res.status(404)
    res.send("Travelless Homepage")
})

app.get("/about", (req, res)=>{
    res.type("text/plain")
    res.send("about travelless")
})

app.use((req, res)=>{
    res.type("text/plain")
    res.status(404)
    res.send("404 - status not found")
})

app.use((err, req, res, next)=>{
    console.log(err.message)
    res.type("text/plain")
    res.status(500)
    res.send("500 - Internal Server Error")
})

app.listen(port, ()=>{
    console.log(`Express Running at http://localhost:${port}, Press Crtl+c to terminate`)
})
