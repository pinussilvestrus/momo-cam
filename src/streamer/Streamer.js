import {
  getStreamStrategy,
  ImageProvider,
  WebcamProvider,
  VideoProvider
} from './providers';

import createWSConnection from '../web-socket/createWSConnection';

const FPS = 10;

const providers = {
  image: ImageProvider,
  webcam: WebcamProvider,
  video: VideoProvider
};

export default class Streamer {

  constructor(options) {

    this.navigator = options.navigator;
    this.streamerDiv = options.streamerDiv;
    this.provider = this.initStreamingProvider();

  }

  initStreamingProvider() {

    const flags = process.env;

    const Provider = providers[getStreamStrategy(flags)];

    return new Provider({
      navigator: this.navigator,
      streamerDiv: this.streamerDiv
    });
  
  }

  init() {

    const self = this;

    this.provider.provideStream();
    
    createWSConnection({
      openFn: (ws) => {

        setInterval(() => {

          ws.send(self.provider.getFrame());
        
        }, 1000 / FPS);
      
      }
    });
        
  }

}
