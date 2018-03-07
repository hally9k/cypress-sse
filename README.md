# cypress-sse

This is a simple app that sends an incrementing number to the browser via server sent events with a cypress test that cannot receive any SSEs.

- `npm start` - Runs the app. Navigate to `http://localhost:8080` to observe the incrementing number.
- `npm test` - Runs the app and calls `cypress open`.
- `npm run debug` - Runs the app with node debugger attached.
