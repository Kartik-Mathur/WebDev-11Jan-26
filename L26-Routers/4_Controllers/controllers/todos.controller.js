let todos = [
    { id: 1, name: 'Cricket' },
    { id: 2, name: 'Dance' },
    { id: 3, name: 'Sing' },
    { id: 4, name: 'Hockey' },
    { id: 5, name: 'Code' },
]

module.exports.myapp = (req,res)=>{
    res.render('index',{
        todos
    })
}

module.exports.increasePriority = (req, res) => {
    const { id } = req.params;
    let indx = todos.findIndex(t => t.id == id);
    if (indx > 0 && indx < todos.length) {
        [todos[indx], todos[indx - 1]] = [todos[indx - 1], todos[indx]];
    }
    res.redirect('/v1/app');
}


module.exports.decreasePriority = (req, res) => {
    const { id } = req.params;
    let indx = todos.findIndex(t => t.id == id);
    if (indx >= 0 && indx < todos.length - 1) {
        [todos[indx], todos[indx + 1]] = [todos[indx + 1], todos[indx]];
    }
    res.redirect('/v1/app');
}


module.exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id != id);
    res.redirect('/v1/app');
}


module.exports.addTodo = (req, res) => {
    const { name } = req.body;
    todos.push({
        id: new Date().getTime(),
        name
    })
    res.redirect('/v1/app');
}