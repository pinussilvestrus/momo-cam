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

  base64Encode(str) {

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let out = ''; let i = 0; const len = str.length; let c1; let c2; let
      c3;
    while (i < len) {

      c1 = str.charCodeAt(i++) & 0xff;
      if (i === len) {

        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt((c1 & 0x3) << 4);
        out += '==';
        break;
      
      }
      c2 = str.charCodeAt(i++);
      if (i === len) {

        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += CHARS.charAt((c2 & 0xF) << 2);
        out += '=';
        break;
      
      }
      c3 = str.charCodeAt(i++);
      out += CHARS.charAt(c1 >> 2);
      out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
      out += CHARS.charAt(c3 & 0x3F);
    
    }
    return out;

  }

  refreshImageHandler() {

    const self = this;

    setInterval(() => {

      $.ajax({
        url: `${self.src}`,
        type: 'GET',
        mimeType: 'text/plain; charset=x-user-defined',
        success: (data) => {

          const img = self.base64Encode(data);


          self.image.attr('src', `data:image/gif;base64,${img}`);

          // console.log(`Refreshed image-src: ${self.image[0].src}`);
        
        }
      });
    
    }, 500);
  
  }

  provideStream() {

    this.image.addClass('center');
    this.image.attr('src', this.src);
    this.image.attr('crossOrigin', 'anonymous');

    this.refreshImageHandler();

    this.streamerDiv.append(this.image);
  
  }

  getFrame() {

    const canvas = $('<canvas/>');

    canvas[0].width = this.image[0].width;
    canvas[0].height = this.image[0].height;
    canvas[0].getContext('2d').drawImage(this.image[0], 0, 0);

    const data = canvas[0].toDataURL('image/png');

    return data;

  }

}
