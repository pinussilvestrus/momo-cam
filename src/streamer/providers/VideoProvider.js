/* global $ */
import BaseProvider from './BaseProvider';

export default class VideoProvider extends BaseProvider {

  constructor(options) {
        
    super({
      ...options,
      name: 'video'
    });

    this.video = $('<video controls autoplay></video>');
  
  }

  getFrame() {

    const canvas = $('<canvas/>');

    canvas[0].width = this.video[0].videoWidth;
    canvas[0].height = this.video[0].videoHeight;
    canvas[0].getContext('2d').drawImage(this.video[0], 0, 0);

    const data = canvas[0].toDataURL('image/png');

    return data;

  }

  provideStream() {

    this.video[0].src = process.env.VID_MEDIA_URL;
    
    this.streamerDiv.append(this.video);

    this.updateStatus();

  }

}
