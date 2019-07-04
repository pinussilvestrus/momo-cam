const getStreamStrategy = (flags) => {
  
  const {
    VID_MEDIA_URL,
    IMG_MEDIA_URL
  } = flags;
    
  if (VID_MEDIA_URL) {
      
    return 'video';
    
      
  } if (IMG_MEDIA_URL) {
    
    return 'image';
      
  }
    
  return 'webcam';
    
};

export default getStreamStrategy;
