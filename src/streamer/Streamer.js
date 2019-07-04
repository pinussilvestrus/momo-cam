/* global document */
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
    this.video = options.video;
    this.provider = this.initStreamingProvider();

  }

  initStreamingProvider() {

    const flags = process.env;

    const Provider = providers[getStreamStrategy(flags)];

    return new Provider({
      navigator: this.navigator,
      video: this.video
    });
  
  }

  init() {

    const self = this;

    this.provider.provideStream();
    
    createWSConnection({
      openFn: (ws) => {

        setInterval(() => {

          ws.send(self.getFrame());
        
        }, 1000 / FPS);
      
      }
    });
        
  }

  getFrame() {

    const canvas = document.createElement('canvas');

    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;
    canvas.getContext('2d').drawImage(this.video, 0, 0);

    const data = canvas.toDataURL('image/png');

    return data;

  }

}
