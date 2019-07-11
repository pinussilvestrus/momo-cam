import {
  getStreamStrategy,
  ImageProvider,
  WebcamProvider,
  VideoProvider
} from './providers';

import createWSConnection from '../web-socket/createWSConnection';

import Renderer from './renderer';

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
    this.flags = process.env;
    this.provider = this.initStreamingProvider();

  }

  initStreamingProvider() {

    const Provider = providers[getStreamStrategy(this.flags)];

    return new Provider({
      navigator: this.navigator,
      streamerDiv: this.streamerDiv
    });
  
  }

  init() {

    const self = this;

    Renderer.render({
      renderNode: this.streamerDiv[0],
      strategy: getStreamStrategy(this.flags)
    });

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
