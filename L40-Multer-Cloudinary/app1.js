const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 4444;
const upload = multer({ dest: 'uploads/' })

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/upload', upload.single('myimage'), (req, res) => {
    // req.file is the myimage
    console.log(req.file);
    res.send("image recieved");
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});