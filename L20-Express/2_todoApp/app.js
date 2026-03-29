const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

let todos = [
    { id: 1, userId: 1, completed: false, title: 'Cricket' },
    { id: 2, userId: 1, completed: true, title: 'Football' },
    { id: 3, userId: 2, completed: false, title: 'Reading' },
    { id: 4, userId: 2, completed: true, title: 'Cooking' },
    { id: 5, userId: 3, completed: false, title: 'Swimming' },
    { id: 6, userId: 3, completed: true, title: 'Cycling' },
    { id: 7, userId: 4, completed: false, title: 'Gaming' },
    { id: 8, userId: 4, completed: true, title: 'Hiking' },
    { id: 9, userId: 5, completed: false, title: 'Photography' },
    { id: 10, userId: 5, completed: true, title: 'Painting' },
    { id: 11, userId: 1, completed: false, title: 'Running' },
    { id: 12, userId: 2, completed: true, title: 'Yoga' },
    { id: 13, userId: 3, completed: false, title: 'Dancing' },
    { id: 14, userId: 4, completed: true, title: 'Singing' },
    { id: 15, userId: 5, completed: false, title: 'Writing' },
    { id: 16, userId: 1, completed: true, title: 'Gardening' },
    { id: 17, userId: 2, completed: false, title: 'Traveling' },
    { id: 18, userId: 3, completed: true, title: 'Fishing' },
    { id: 19, userId: 4, completed: false, title: 'Blogging' },
    { id: 20, userId: 5, completed: true, title: 'Meditation' }
];

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.listen(4444, () => {
    console.log(`http://localhost:` + 4444);
});