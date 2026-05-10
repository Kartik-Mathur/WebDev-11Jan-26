const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs')

let todos = [
    { id: 1, name: 'Cricket' },
    { id: 2, name: 'Dance' },
    { id: 3, name: 'Sing' },
    { id: 4, name: 'Hockey' },
    { id: 5, name: 'Code' },
]

app.get('/app',(req,res)=>{
    res.render('index',{
        todos
    })
})


app.get('/increase/:id', (req, res) => {
    const {id} = req.params;
    let indx = todos.findIndex(t => t.id == id);
    if(indx > 0 && indx < todos.length){
        [todos[indx], todos[indx-1]] = [todos[indx-1], todos[indx]];
    }
    res.redirect('/app');
})
app.get('/decrease/:id', (req, res) => {
    const {id} = req.params;
    let indx = todos.findIndex(t => t.id == id);
    if(indx >= 0 && indx < todos.length-1){
        [todos[indx], todos[indx+1]] = [todos[indx+1], todos[indx]];
    }
    res.redirect('/app');
})
app.get('/delete-todos/:id', (req, res) => {
    const {id} = req.params;
    todos = todos.filter(t => t.id != id);
    res.redirect('/app');
})

app.post('/todos', (req, res) => {
    const {name} = req.body;
    todos.push({
        id: new Date().getTime(),
        name
    })
    res.redirect('/app');
})
app.get('/todos', (req, res) => {
    // We are not using this in SSR
    // because JS is disabled on front end
    // toh yeh load hi nhi hoga on front end
    res.send(todos);
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});