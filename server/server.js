const express = require("express");
const app = express();
const port = 8000;

require('./config/mongoose.config');  //sin esto no conecta a la bf

app.use(express.json()); // para que el enrutamiento del metodo trabaje con json
app.use(express.urlencoded({ extended: true })); 


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


require('./routes/jokes.routes')(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );

//para instalar el nodemon si da problemas con algun token o autenticacion, se agrega esta linea de comando en el powershell de windows como administrador set-executionpolicy remotesigned
