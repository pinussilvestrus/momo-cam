import BaseProvider from './BaseProvider';

export default class ImageProvider extends BaseProvider {

  constructor(options) {

    super({
      ...options,
      name: 'image'
    });
  
  }

}
