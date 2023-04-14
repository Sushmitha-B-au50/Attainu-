
// Requiring module
const express = require("express");
const multer = require("multer");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const fs = require("fs");
const upload = require('express-fileupload');
  

app.use(upload())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
  
// Cloudinary configuration
cloudinary.config({
    cloud_name: "dzs4hawdx",
    api_key: "973997748437857",
    api_secret: "M6mKU-7bOvl2nng0__j4C_zfvmo",
});


app.get('/upload', (req, res) => {
    res.sendFile(__dirname + "/upload.html");
})



async function uploadToCloudinary(locaFilePath) {
  
    var mainFolderName = "main";
    var filePathOnCloudinary = 
        mainFolderName + "/" + locaFilePath;
  
    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {
            fs.unlinkSync(locaFilePath);
            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
}
  

app.post(
    "/gallery",
    async (req, res, next) => {
  
        var locaFilePath = req.file.path;
        var result = await uploadToCloudinary(locaFilePath);

        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);
function buildSuccessMsg(urlList) {
  
    var response = `<h1>
                   <a href="/">Click to go to Home page</a><br>
                  </h1><hr>`;
  
    for (var i = 0; i < urlList.length; i++) {
        response += "File uploaded successfully.<br><br>";
        response += `FILE URL: <a href="${urlList[i]}">
                    ${urlList[i]}</a>.<br><br>`;
        response += `<img src="${urlList[i]}" /><br><hr>`;
    }
  
    response += `<br>
<p>Now you can store this url in database or 
  // do anything with it  based on use case.</p>
`;
    return response;
}
  



app.listen(5001, (req, res) => {
    console.log("server is live")
})