const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

module.exports = router;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(router); // Requests processing will be defined in the file router


const persons=[
    {id:0,name:'John'},
    {id:1,name:'Jane'}
];

router.get("/", (req, res) => {
  res.json("Hello world!!");
});

router.get("/persons",(req,res)=>{
  res.json(persons);
})

router.post("/person", (req, res) => {
  const p = req.body;
  p.id = persons.length;
  persons.push(p);
  res.status(201).set('Location', '/persons').json(p);
})


router.use((req, res) => {
  res.status(404);
  res.json({
    error: "Page not found"
  });
});

port = process.env.PORT || 8080;

app.listen(port, () => {
   console.log('Server app listening on port ' + port);
});
