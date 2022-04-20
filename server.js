var express = require('express');
var cors = require('cors');
var multer = require('multer');
const upload = multer()
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
  console.log(req.body);
  console.log(req.query);
  console.log(req.files);
  res.json({name: upload.originalname,type: upload.mimetype,size: upload.size});
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
