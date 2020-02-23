import React from 'react';
import { Player } from "video-react";

const VideoShow = props => {
    debugger;
return (
  <div className="video-show-page">
    <div className="middle-content">
      <div className="video-container">
        <Player
          playsInline
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
      <div className="comments-section">
            <p>
                Comments will go here when implemented.
            </p>
      </div>
    </div>
  </div>
);
}

export default VideoShow;