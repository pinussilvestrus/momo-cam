/* global document, navigator */
import initStream from './initStream';

/** Frontend */
const client = document.querySelector('#client');

if (client) {

  console.log('Frontend will be established here soon ....');

}

/** Backend */
const streamer = document.querySelector('#streamer');

if (streamer) {

  const video = document.querySelector('video');

  initStream({
    video,
    navigator
  });

}
