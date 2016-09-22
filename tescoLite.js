var watson = require('watson-developer-cloud');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/tescoLite', urlencodedParser, function (req, res) {

   var conversation = watson.conversation({
     username: 'c9941228-7439-40a0-b5b4-257e8d12ec41',
     password: 'LRcQoVvpGmii',
     version: 'v1',
     version_date: '2016-07-11'
   });

        var context = {};
console.log(req.body.textFromUser);

        conversation.message({
          workspace_id: '6f038651-7a41-44c3-88fc-6f73547c6723',
          input: {'text': req.body.textFromUser},
          context: context
        },  function(err, response) {
          if (err)
            console.log('error:', err);
          else
            console.log(JSON.stringify(response, null, 2));
            res.end(JSON.stringify(response));
        });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
