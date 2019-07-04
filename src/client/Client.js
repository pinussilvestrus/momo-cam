import createWSConnection from '../web-socket/createWSConnection';

export default class Client {

  constructor(options) {

    this.img = options.img;
  
  }

  init() {

    console.log('Frontend will be established here soon ....');

    createWSConnection({
      messageFn: (message) => {

        console.log('Received:', message);
        // set the base64 string to the src tag of the image
        this.img.src = message.data;
      
      }
    });

  }

}
