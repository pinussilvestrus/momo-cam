import { html, render } from 'lit-html';

export default class ClientRenderer {

  static clientTemplate(options) {

    const {
      src
    } = options;

    return html`<h1>Streaming  Client</h1>
    
    <img class="client-img" src=${src} width="700" height="500"/>`;
  
  }

  static render(options) {

    const {
      renderNode
    } = options;

    render(this.clientTemplate(options), renderNode);

  }

}
