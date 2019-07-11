export default class BaseProvider {

  constructor(options) {

    const {
      name,
      streamerDiv
    } = options;

    this.streamerDiv = streamerDiv;

    console.log(`Streaming via ${name}-strategy`);
  
  }

  provideStream() {

    throw new Error('#provideStream method has to be implemented!');
  
  }

  getFrame() {

    throw new Error('#getFrame method has to be implemented!');
  
  }

}
