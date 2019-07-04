export default class BaseProvider {

  constructor(name) {

    console.log(`Streaming via ${name}-strategy`);
  
  }

  provideStream() {

    throw new Error('#provideStream method has to be implemented!');
  
  }

}
