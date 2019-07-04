/* global document, navigator */
import Client from './client';
import Streamer from './streamer';

/** Client */
const clientDiv = document.querySelector('#client');

if (clientDiv) {

  const img = document.querySelector('img');
  const client = new Client({
    img
  });

  client.init();

}

/** Streamer */
const streamerDiv = document.querySelector('#streamer');

if (streamerDiv) {

  const video = document.querySelector('video');
  const streamer = new Streamer({
    video,
    navigator
  });

  streamer.init();

}
