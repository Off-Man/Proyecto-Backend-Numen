const app = require("./app")
require("dotenv").config();

const port = process.env.PORT || 3000;
//listen a un servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});



