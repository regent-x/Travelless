const express = require('express')
const { engine } = require('express-handlebars')

const port = process.env.PORT

const app = express()

app.engine('handlebars', engine({defaultLayout: 'main'}))

app.set('view engine', 'handlebars')
app.set('views', './views')
app.set(express.static(__dirname+ '/public'))

app.get("/", (req, res)=>{
    res.render("home")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.use((req, res)=>{
    res.status(500)
    res.render('404')
})

app.use((err, req, res, next)=>{
    console.log(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=>{
    console.log(`Express Running at http://localhost:${port}, Press Crtl+c to terminate`)
})
