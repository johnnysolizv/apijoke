const Joke = require('../models/jokes.models');


module.exports.list = (req, resp) => {
    Joke.find()
        .then(data => resp.status(200).json({ ok: true, message: 'Jokes', data: data}))
        .catch(error => {
            console.log('LIST', error);
            resp.status(500).json({ok: false, message: 'Error al obtener los Jokes'})
        });
}


module.exports.get = (req, resp) => {
    Joke.findById(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Jokes', data: data}))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener el Jokes'})
        });
}


module.exports.random = (req, resp) => {
    Joke.find()
        .then(data => resp.status(200).json({ ok: true, message: 'Jokes', data: data}))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener el Jokes'})
        });
}




module.exports.create = (req, resp) => {
    const joke = req.body;
    Joke.create(joke)
        .then(data => resp.status(200).json({ ok: true, message: 'Se agregó el joke', data: data}))
        .catch(error => {
            console.log('CREATE', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el joke'})    
            }
        });
}


module.exports.edit = (req, resp) => {
    const joke = req.body;
    Joke.findOneAndUpdate({_id: req.params.id }, joke)
        .then(data => resp.status(200).json({ ok: true, message: 'Se actualizó el joke', data: joke}))
        .catch(error => {
            console.log('EDIT', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{ 
                resp.status(500).json({ok: false, message: 'Error al guardar el joke'})    
            }
        });
}






module.exports.del = (req, resp) => {
    Joke.findByIdAndRemove(req.params.id)
        .then(data => resp.status(200).json({ ok: true, message: 'Se eliminó  el joke', data: data}))
        .catch(error => {
            console.log('DELETE', error);
            resp.status(500).json({ok: false, message: 'Error al eliminar el joke'})
        });
}