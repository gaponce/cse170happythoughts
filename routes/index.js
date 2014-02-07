var data = require('../data.json');

exports.view = function(req, res){
  // Handlebars.registerHelper('agree_button', function() {
  //   return new Handlebars.SafeString(
  //     "<button>I agree. I " + this.emotion + " " + this.name + "</button>"
  //   );
  // });

   res.render('index', data);
}

