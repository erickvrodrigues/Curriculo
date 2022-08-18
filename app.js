const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require("cors");
const PORT = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());

app.use(express.static('public'))
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(PORT);

console.log('Running at Port 3000');