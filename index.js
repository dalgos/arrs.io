/* @flow */
// var request = require('request');
// var cheerio = require('cheerio');
//
// var opt = {
//   urls : {
//     'news' : 'http://clien.net/cs2/bbs/board.php?bo_table=news'
//   }
// };
//
// request(opt.urls.news, function(err, res, html){
//   if(!err && res.statusCode == 200){
//     var _ = cheerio.load(html);
//     _('td.post_subject').each(function(idx, el){
//       var a = _(this);
//       console.log(a.text());
//     });
//   }
// });
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
