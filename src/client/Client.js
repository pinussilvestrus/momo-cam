import createWSConnection from '../web-socket/createWSConnection';
import Renderer from './renderer';

export default class Client {

  constructor(options) {

    this.clientDiv = options.clientDiv;
  
  }

  init() {

    createWSConnection({
      messageFn: (message) => {

        console.log('Received:', message);

        Renderer.render({
          renderNode: this.clientDiv[0],
          src: message.data
        });
      
      }
    });

  }

}
