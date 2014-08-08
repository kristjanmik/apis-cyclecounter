var parser = require('apis-parser');

module.exports = function(app,prefix){
	var cyclecounter = require('cyclecounter');

	app.get(prefix,function(req,res){
		parser(res)(function(cb){
			cyclecounter.is(cb);
		});
	});
}