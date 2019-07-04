/* global $ */
import BaseProvider from './BaseProvider';

export default class WebcamProvider extends BaseProvider {
    

  constructor(options) {

    super({
      ...options,
      name: 'webcam'
    });

    this.navigator = options.navigator;
    this.video = options.video;
  
  }

  provideStream() {

    this.navigator.mediaDevices.getUserMedia({

      video: {
        width: 426, height: 240
      }
    }).then((stream) => {

      this.video.srcObject = stream;

      this.updateStatus();
    
    });
  
  }

  getFrame() {

    const canvas = $('<canvas/>');

    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;
    canvas[0].getContext('2d').drawImage(this.video, 0, 0);

    const data = canvas[0].toDataURL('image/png');

    return data;

  }

}
