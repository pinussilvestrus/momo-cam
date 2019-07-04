/* global $ */
import BaseProvider from './BaseProvider';

export default class WebcamProvider extends BaseProvider {
    
  constructor(options) {

    super({
      ...options,
      name: 'webcam'
    });

    this.navigator = options.navigator;
    this.video = $('<video autoplay></video>');
  
  }

  provideStream() {

    this.streamerDiv.append(this.video);

    this.navigator.mediaDevices.getUserMedia({

      video: {
        width: 426, height: 240
      }
    }).then((stream) => {

      this.video[0].srcObject = stream;

      this.updateStatus();
    
    });
  
  }

  getFrame() {

    const canvas = $('<canvas/>');

    canvas.width = this.video[0].videoWidth;
    canvas.height = this.video[0].videoHeight;
    canvas[0].getContext('2d').drawImage(this.video[0], 0, 0);

    const data = canvas[0].toDataURL('image/png');

    return data;

  }

}
