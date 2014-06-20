This is a demonstration of a COMET (long polling) application; split into two separate Node.js applciations.

_hellocometserver_

This is the server component of a COMET (long polling) "Hello World" application. This server essentially sits of port 3001 and has two endpoints: GET /messages and POST /messages.  GET /messages stays open until a message is pushed out and POST /messages pushes a message out (by simply closing all the open GET /message connections).  With Node.js, this is particularly simple due to Javascript's asynchronous behavior.

One key is to deal with the Javascript same-origin policy; solution is to use Cross-Origin Resource Sharing (CORS).

_hellocometclient_

This is the client component of a COMET (long polling) "Hello World" application. This client essentially opens up an AJAX connection to the server application on port 3001 and waits for a messages to be pushed. Like the server programming, this is pretty easy due to Javascript's asynchronous behavior.

In this version, I do not worry about dealing with the browser's timout, e.g., 5 minutes for Firefox.  The fix that I am contemplating is to set the timeout to a known, e.g., 3 minutes.  Then on the server side, force out a "ping" message every two minutes that refreshes all the connections (also allows me to detect clients dropping off).
