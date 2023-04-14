<<<<<<< HEAD

const express = require("express");
const multer = require("multer");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const fs = require("fs");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
  
var upload = multer({ storage: storage });
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
    res.sendFile(__dirname + "/public/upload.html");
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
  

function buildSuccessMsg(urlList) {
 console.log(urlList);

    for (var i = 0; i < urlList.length; i++) {
        var response = "File uploaded successfully.<br><br>";
        response += `FILE URL: <a href="${urlList[i]}">
                    ${urlList[i]}</a>.<br><br>`;
        response += `<img src="${urlList[i]}" /><br><hr>`;
    }
  
    return response;
}
  

app.post( "/gallery", 
    upload.single('myFile'),
   async (req, res, next) => {
    var locaFilePath = req.file.path;
        var result =  await uploadToCloudinary(locaFilePath);

        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);


app.get(
    "/gallery", 
    upload.single("myFile"),
   async (req, res, next) => {
        
        var locaFilePath = req.file.path;
        var result =  await uploadToCloudinary(locaFilePath);

        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);

app.listen(8000, (req, res) => {
    console.log("server is live")
=======

const express = require("express");
const multer = require("multer");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const fs = require("fs");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
  
var upload = multer({ storage: storage });
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
    res.sendFile(__dirname + "/public/upload.html");
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
  

function buildSuccessMsg(urlList) {
 console.log(urlList);

    for (var i = 0; i < urlList.length; i++) {
        var response = "File uploaded successfully.<br><br>";
        response += `FILE URL: <a href="${urlList[i]}">
                    ${urlList[i]}</a>.<br><br>`;
        response += `<img src="${urlList[i]}" /><br><hr>`;
    }
  
    return response;
}
  

app.post( "/gallery", 
    upload.single('myFile'),
   async (req, res, next) => {
    var locaFilePath = req.file.path;
        var result =  await uploadToCloudinary(locaFilePath);

        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);


app.get(
    "/gallery", 
    upload.single("myFile"),
   async (req, res, next) => {
        
        var locaFilePath = req.file.path;
        var result =  await uploadToCloudinary(locaFilePath);

        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);

app.listen(8000, (req, res) => {
    console.log("server is live")
>>>>>>> 8e952e028f60f486d8f722c3b977f770833354ff
})