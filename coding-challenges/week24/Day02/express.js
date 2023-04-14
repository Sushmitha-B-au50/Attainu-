const express = require('express')
const app = express()
var path = require('path')
// app.use(express.static('Images'));
// app.use(express.static('stylesheets'));
app.use(express.static(path.join(__dirname, 'Images')));
app.use(express.static(path.join(__dirname, 'stylesheets')));
//  app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
//  app.use('/css',express.static((__dirname, 'stylesheets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html", (err) => {
        console.log(err)
    })
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html", (err) => {
        console.log(err)
    })
})

app.listen(5001, () => {
    console.log("server is live")
})

// send() => directly sends the response data
// render() => to render templates
// sendFile() => send html files on client