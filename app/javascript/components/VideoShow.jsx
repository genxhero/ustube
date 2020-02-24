import React from 'react';
import Advertisement from './Advertisement';
import Donation from './Donation';
import { Player } from "video-react";

const VideoShow = props => {
  const {video, currentUser} = props;
return (
  <div className="video-show-page">
      <div className="header">
        <h1>US Tube </h1>
      </div>
    <div className="middle-content">
      <h2>{video.title}</h2>
      <Advertisement />
      <Donation />
      <div className="video-container">
        <Player
          playsInline
          src={video.video_url}
        />
      </div>
      <div className="bottom-content">
        <div className="ratings">
            <span>Star ratings will go here</span>
        </div>
            <div className="video-information">
              <p>{video.description}</p>  
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