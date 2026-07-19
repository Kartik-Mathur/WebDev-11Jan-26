const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 4444;
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/upload', upload.single('myimage'), (req, res) => {
    // req.file is the myimage
    console.log(req.file);
    // Binary data of image: req.file.buffer
    
    var blob = new Blob([req.file.buffer], { type: 'image/webp' });
    var blobUrl = URL.createObjectURL(blob);

    res.render('image', {
        blobUrl
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});