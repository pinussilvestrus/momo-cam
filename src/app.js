/* global navigator, $ */
import Client from './client';
import Streamer from './streamer';

/** Client */
const clientDiv = $('#client');

if (clientDiv.length) {

  const client = new Client({
    clientDiv
  });

  client.init();

}

/** Streamer */
const streamerDiv = $('#streamer');

if (streamerDiv.length) {

  const streamer = new Streamer({
    streamerDiv,
    navigator
  });

  streamer.init();

}
