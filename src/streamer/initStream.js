const {
  VID_MEDIA_URL,
  IMG_MEDIA_URL
} = process.env;


/**
 *  @param {DOMNavigator} options.navigator
 *  @param {DOMElement} options.video 
 */
const initStream = (options) => {

  const {
    navigator,
    video
  } = options;

  /** STRATEGIES */

  if (VID_MEDIA_URL) { // 1: video from url

    console.log('Streaming from video url');

    video.src = VID_MEDIA_URL;
  
  } else if (IMG_MEDIA_URL) { // 2: video generated from img url

    console.log('Streaming from image url');

    // TODO
  
  } else { // 3: web cam from device

    console.log('Streaming from webcam');

    navigator.mediaDevices.getUserMedia({

      video: {
        width: 426, height: 240
      }
    }).then((stream) => {

      video.srcObject = stream;
    
    });
  
  }

};

export default initStream;
