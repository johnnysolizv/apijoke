const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'El setup es requerido'],
        minlength: [3, 'El setup debe tener al menos 3 caracteres']
    },
    punchline: {
        type: String,
        required: [true, 'El punchline es requerido']
    },
}, { timestamps: true });

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;