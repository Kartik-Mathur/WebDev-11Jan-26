require('dotenv').config();
const path = require('path');
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = 4444;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
})

const upload = multer({ storage: storage })

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/upload', upload.single('myimage'), (req, res) => {
    // req.file is the myimage
    console.log(req.file);
    cloudinary.uploader
        .upload(req.file.path)
        .then(result => {
            console.log(result)
            res.send(result);
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        });

})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});