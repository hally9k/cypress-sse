var es = new EventSource("http://127.0.0.1:9876/sse");
var es2 = new EventSource("http://127.0.0.1:9876/sse");

const incrementer = document.querySelector("#incrementer");
const connectionState = document.querySelector("#connection-state");

es.onmessage = function(event) {
  incrementer.innerHTML = event.data;
};

const closeConnectionButton = document.querySelector(
  "#close-connection-button"
);
closeConnectionButton.addEventListener("click", () => {
  es.close();
});

const READY_STATE = {
  0: "Connecting",
  1: "Open",
  2: "Closed"
};

es2.onmessage = function(event) {
  connectionState.innerHTML = READY_STATE[es.readyState];
};
