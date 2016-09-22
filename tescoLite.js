var watson = require('watson-developer-cloud');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

//app.get('/index.htm', function (req, res) {
//   res.sendFile( __dirname + "/" + "index.htm" );
//})

app.post('/tescoLite', urlencodedParser, function (req, res) {

   var conversation = watson.conversation({
     username: '34021464-26ac-4021-bcf7-cc957d666027',
     password: 'eUqt0sbKnAfi',
     version: 'v1',
     version_date: '2016-07-11'
   });

        var context = {};

        conversation.message({
          workspace_id: 'bdd0345f-712a-4171-8f1b-33e8782f232d',
          input: {'text': req.body.textFromUser},
          context: context
        },  function(err, response) {
          if (err)
            console.log('error:', err);
          else
            console.log(JSON.stringify(response, null, 2));
            res.end(JSON.stringify(response));
        });
   // Prepare output in JSON format
   //res.end(JSON.stringify(""));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

