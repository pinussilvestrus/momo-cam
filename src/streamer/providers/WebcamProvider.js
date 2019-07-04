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

}
