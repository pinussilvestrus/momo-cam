const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const serve = require('koa-static');
const WebSocket = require('ws');

const app = new Koa();

const WS_PORT = process.env.WS_PORT || 3001;
const HTTP_PORT = process.env.HTTP_PORT || 4000;

const wsServer = new WebSocket.Server({ port: WS_PORT },
  () => console.log(`WS server is listening at ws://localhost:${WS_PORT}`));

const connectedClients = [];

wsServer.on('connection', (ws) => {

  console.log('Connected');

  // add new connected client
  connectedClients.push(ws);

  // listen for messages from the streamer, the clients will not send anything so we
  // don't need to filter
  ws.on('message', (data) => {

    // send the base64 encoded frame to each connected ws
    connectedClients.forEach((ws2, i) => {

      if (ws.readyState === ws2.OPEN) { // check if it is still connected

        ws2.send(data);
      
      } else { // if it's not connected remove from the array of connected ws

        connectedClients.splice(i, 1);
      
      }
    
    });
  
  });

});

app
  .use(bodyParser())
  .use(serve(path.join(__dirname, 'public')))
  .use(cors({
    origin: '*'
  }))

  .listen(HTTP_PORT, () => {

    console.log(`Server Started on http://localhost:${HTTP_PORT.toString()}`);
  
  });
