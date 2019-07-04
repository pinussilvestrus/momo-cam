/* global WebSocket */
const WS_URL = 'ws://localhost:3001';

/**
 * @param {Function} options.messageFn
 */
const createWSConnection = (options) => {

  const {
    messageFn,
    openFn
  } = options;
  
  const ws = new WebSocket(WS_URL);

  ws.onopen = () => {

    console.log(`Connected to ${WS_URL}`);

    if (typeof openFn === 'function') {

      openFn(ws);
    
    }
  
  };

  ws.onmessage = messageFn;
  
};

export default createWSConnection;
