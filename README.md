# cypress-sse

This is a simple app that sends an incrementing number to the browser via server sent events with a cypress test does not correctly terminate the SSE connection.

- `yarn start` - Runs the app. Navigate to `http://localhost:8080` to observe the incrementing number and close the connection successfully.
- `yarn debug` - Runs the app with node debugger attached and starts up cypress.

## Reproduction Steps

1. Install `ndb` node debugging tools. `yarn global ndb`.
2. Run `yarn debug` and open a chrome tab and navigate to `http://localhost:8080`.
3. Enter the ndb debugger and set a break point it `sseclient.js` on line `11` where the SSE cient handles the close event on the response.
4. Enter the chrome tab and refresh, then observe the incrementing integer getting sent down the SSE connection.
   4.1 Press the close connection button and observe the breakpoint getting hit in the connection close handler.
   4.2 Continue and release the breakpoint.
5. Enter the Cypress window and run all tests, ensure the breakpoint is still set in the node debugger.
   5.1 The single test does exactly what we just did in the chrome tab and will pass.
   5.2 Notice that the breakpoint does not get hit when the connection closes and the connection is held on the server side.

## Notes

We suspect that there may be some thing in the Cypress proxy layer holding this connection open.
