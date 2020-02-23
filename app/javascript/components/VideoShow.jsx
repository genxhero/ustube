import React from 'react';
import { Player } from "video-react";

const VideoShow = props => {
    debugger;
return (
  <div className="video-show-page">
      <div className="header">
        <h1>US Tube - A Platform for All of Us</h1>
      </div>
    <div className="middle-content">
      <div className="video-container">
        <Player
          playsInline
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
      <div className="bottom-content">
        <div className="ratings">
                    <span>Star ratings will go here</span>
            </div>
            <div className="video-information">
                    <span>VIdeo information will go here</span>
            </div>
            <div className="comments-section">
                    <p>
                        Comments will go here when implemented.
                    </p>
            </div>
      </div>
     
    </div>
  </div>
);
}

export default VideoShow;