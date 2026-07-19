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

    // var blob = new Blob([req.file.buffer], { type: 'image/webp' });
    // var blobUrl = URL.createObjectURL(blob);
    const buffer = req.file.buffer;
    const mimeType = req.file.mimetype;

    // 3. Convert the buffer to a base64 string
    const base64String = buffer.toString('base64');

    // 4. Combine into a Data URL
    const dataUrl = `data:${mimeType};base64,${base64String}`;

    console.log(dataUrl)
    res.json(dataUrl)
    // res.render('image', {
    //     dataUrl
    // })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});