/* global $ */
import BaseProvider from './BaseProvider';

export default class ImageProvider extends BaseProvider {

  constructor(options) {

    super({
      ...options,
      name: 'image'
    });

    this.streamerDiv = options.streamerDiv;
    this.src = process.env.IMG_MEDIA_URL;
    this.image = $('<img />');
  
  }

  refreshImageHandler() {

    const self = this;

    setInterval(() => {

      self.image.src = `${self.src}/${new Date().getTime()}`;

      // console.log(`Refreshed image-src: ${self.image.src}`);
    
    }, 500);
  
  }

  provideStream() {

    this.image.attr('width', 200);
    this.image.attr('height', 200);
    this.image.addClass('center');
    this.image.attr('src', this.src);
    this.image.attr('crossOrigin', 'anonymous');

    this.refreshImageHandler();

    this.streamerDiv.append(this.image);

    this.updateStatus();
  
  }

  getFrame() {

    const canvas = $('<canvas/>');

    canvas.width = this.image.width();
    canvas.height = this.image.height();
    canvas[0].getContext('2d').drawImage(this.image[0], 0, 0);

    const data = canvas[0].toDataURL('image/png');

    return data;

  }

}
