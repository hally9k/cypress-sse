# cypress-sse

This is a simple app that sends an incrementing number to the browser via server sent events.
This reproduces a bug where the cypress test does not correctly terminate the SSE connection leaving SSE connections to accumulate on the server for the duration of the run.

- `yarn start` - Runs the app. Navigate to `http://localhost:8080` to observe the incrementing number and close the connection successfully.
- `yarn debug` - Runs the app with the `ndb` node debugger attached and starts up cypress.

## Reproduction Steps

1. Install `ndb` node debugging tools. `yarn global ndb`.
2. Run `yarn debug`. 
3. Enter the ndb debugger and set a break point it `sseclient.js` on line `11` where the SSE cient handles the close event on the response.
4. *The connection correctly terminating in a normal Chrome tab:* open a chrome tab and navigate to `http://localhost:8080`, observe the incrementing integer getting pushed down the SSE connection.
   4.1 Press the close connection button and observe the breakpoint getting hit on the server's connection close handler.
   4.2 Continue and release the breakpoint.
5. *The connection not correctly terminating in the Cypress browser:* Enter the Cypress window and run all tests, ensuring the breakpoint is still set in the node debugger.
   5.1 The single test does exactly what we just did in the chrome tab and will pass, but...
   5.2 Notice that the breakpoint does not get hit when the connection closes and the connection is not correctly released on the server side.

## Notes

We suspect that there may be some thing in the Cypress proxy layer holding this connection open.
