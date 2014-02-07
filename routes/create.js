var data = require('../data.json');

exports.view = function(req, res){
   res.render('user_content/create_content', data);
}

