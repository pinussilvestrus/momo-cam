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
    [this.video] = this.streamerDiv.children('video');
    this.provider = this.initStreamingProvider();

  }

  initStreamingProvider() {

    const flags = process.env;

    const Provider = providers[getStreamStrategy(flags)];

    return new Provider({
      navigator: this.navigator,
      streamerDiv: this.streamerDiv,
      video: this.video
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
