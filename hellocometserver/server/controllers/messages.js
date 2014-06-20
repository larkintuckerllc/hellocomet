var defers = [];

exports.watch = function(req, res) {
	res.set({
  		'Cache-Control': 'no-store',
		'Access-Control-Allow-Origin': '*'
	});
	defers.push(res);
};

exports.post = function(req, res) {
	for (var i=0; i < defers.length; i++) {
		defers[i].send('');	
	}
	defers = [];
	res.set({
		'Access-Control-Allow-Origin': '*'
	});
	res.send('');
};
