const express = require('express')
const upload = require('express-fileupload')
const app = express();

app.use(upload())

let data = []



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/upload.html");
})

app.get('/get', (req, res) => {
    res.sendFile(__dirname + "/getDetails.html");
    

})

app.post('/upload', (req, res) => {
    let my_file = req.files.myFile;
    my_file.mv(__dirname + "/uploads/" + "new_file.jpg", (err) => {
        if(err){
            return res.send("error");
        }
        return res.send(my_file);
    })
})

app.post('/getdata', (req, res) => {
    return res.send(res.my_file);
    // data.push(req.files.myFile);
    // console.log(data);
    // res.send("data added");
})

app.listen(5000, (req, res) => {
    console.log("server is live")
})