import React from 'react';
import { Player } from "video-react";

const VideoShow = props => {
return (
  <div>
    <Player
      playsInline
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  </div>
);
}

export default VideoShow;