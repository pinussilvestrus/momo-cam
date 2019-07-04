/* global document */
import initStream from './initStream';

import createWSConnection from '../web-socket/createWSConnection';

const FPS = 5;

export default class Streamer {

  constructor(options) {

    this.navigator = options.navigator;
    this.video = options.video;

  }

  init() {

    const self = this;

    initStream({
      navigator: this.navigator,
      video: this.video
    });
    
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
