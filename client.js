var es = new EventSource('http://127.0.0.1:9876/sse')

const elem = document.querySelector('#incrementer')

es.onmessage = function(event) {
	elem.innerHTML = event.data
}
