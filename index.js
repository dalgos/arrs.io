/* @flow */
var request = require('request');
var cheerio = require('cheerio');

var opt = {
  urls : {
    'news' : 'http://clien.net/cs2/bbs/board.php?bo_table=news'
  }
};

request(opt.urls.news, function(err, res, html){
  if(!err && res.statusCode == 200){
    var _ = cheerio.load(html);
    _('td.post_subject').each(function(idx, el){
      var a = _(this);
      console.log(a.text());
    });
  }
});
