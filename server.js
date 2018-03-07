var SSE = require('./sse'),
	http = require('http')

const server = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/plain')
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Request-Method', '*')
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
	res.setHeader('Access-Control-Allow-Headers', '*')
	res.end('')
	return
})

server.listen(9876, '127.0.0.1', function(options) {
	var sse = new SSE(server)
	sse.on('connection', function(client) {
		let incrementer = 0
		setInterval(() => {
			client.send(`${++incrementer}`)
		}, 1000)
	})
})
