
const { create, edit,del, get, list } = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get('/api/jokes', list);    
    app.get('/api/jokes/:id', get);
   // app.get('/api/jokes/random', random);
    app.post('/api/jokes/new', create);
    app.put('/api/jokes/update/:id', edit);
    app.delete('/api/jokes/delete/:id', del);
}