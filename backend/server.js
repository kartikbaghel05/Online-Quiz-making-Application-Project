const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
// app.use((request, response, next) => {
//   response.setHeader('Access-Control-Allow-Origin', 'https://quizeeeeeeapp-pabak2002s-projects.vercel.app/');
//   next();
// });
app.use(require("./routes/quizzes"));
app.use(require("./routes/ranking"));

const dbo = require("./db/conn");

app.listen(port, ()=> {
    dbo.connectToServer(function(err){
        if (err) console.error(err);
    });
    console.log(`Server is running on ${port}`);
})