1. npm init -y
2. npm i express mongoose
3. mongod --dbpath=data
4. Setup the mongoose
```js
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/myDB')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })

```


# Mongoose Steps
- Create a schema
- Create a model via Schema
- Now using this model we can perform CRUD operations
- Model is the collection only