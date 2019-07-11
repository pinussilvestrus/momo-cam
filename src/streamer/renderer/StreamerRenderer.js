import { html, render } from 'lit-html';

export default class StreamerRenderer {

  static streamerTemplate(options) {

    const {
      strategy
    } = options;

    // TODO: create real online/offline status via error handling
    return html`<h2>Streaming Dashboard</h2>

    <p>Stream status: <span id="status">online</span> <i class="status-icon fa fa-check-circle"></i></p>
    <p>Stream strategy: <span id="strategy">${strategy}</span></p>
    
    <!-- real content is rendered in strtagey -->`;
  
  }

  static render(options) {

    const {
      renderNode
    } = options;

    render(this.streamerTemplate(options), renderNode);

  }

}
