import BaseProvider from './BaseProvider';

export default class VideoProvider extends BaseProvider {

  constructor(options) {
        
    super({
      ...options,
      name: 'video'
    });

    this.video = options.video;
  
  }

  provideStream() {

    this.video.src = process.env.VID_MEDIA_URL;

    this.updateStatus();

  }

}
