/* global navigator, $ */
import Client from './client';
import Streamer from './streamer';

/** Client */
const clientDiv = $('#client');

if (clientDiv.length) {

  const [img] = clientDiv.children('img');

  const client = new Client({
    img
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
