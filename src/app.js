/* global document, navigator */
import initStream from './initStream';

/** Frontend */
console.log('Frontend will be established here soon ....');

/** Backend */
const video = document.querySelector('video');

if (video) {
  initStream({
    video,
    navigator,
  });
}
