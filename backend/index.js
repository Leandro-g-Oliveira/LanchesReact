const express = require ("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const session = require ("express-session");
const cors = require("cors");
const port = process.env.PORT || 3001;
//const admin = require ("./routes/admin")
const client = require ("./routes/client");
const cart = require ("./routes/cart");
const Controller = require("./src/controller/Controller");
const app = express();

//config
  //cors
  app.use(cors());
  //session
app.use(session({
  secret: "Lanche#@.Brasa",
  resave: true,
  saveUninitialized: true
}));
  //body-parser
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
  //helmet
app.use(helmet());

//rotas
app.get("/",Controller.home);
app.use("/client",client);
app.use("/cart",cart);
app.listen(port,()=>{
  console.log(`Servidor rodando em http://localhost:${port}`);
});