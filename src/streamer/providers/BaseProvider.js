export default class BaseProvider {

  constructor(options) {

    const {
      name,
      streamerDiv
    } = options;

    this.streamerDiv = streamerDiv;

    const strategyDiv = streamerDiv.find('#strategy');

    strategyDiv.text(name);

    console.log(`Streaming via ${name}-strategy`);
  
  }

  provideStream() {

    throw new Error('#provideStream method has to be implemented!');
  
  }

  updateStatus() {

    const statusDiv = this.streamerDiv.find('#status');
    const statusIconDiv = this.streamerDiv.find('.status-icon');

    statusDiv.text('online');

    console.log(statusIconDiv);
    statusIconDiv.removeClass('fa-times-circle');
    statusIconDiv.addClass('fa-check-circle');
  
  }

}
