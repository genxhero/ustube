import React from 'react';
import Advertisement from './Advertisement';
import Donation from './Donation';
import { Player } from "video-react";
import RatingsSection from './RatingsSection';
import CommentsSection from './CommentsSection';
import VideoInformation from './VideoInformation';

/**
 * Show page for a single video
 * 
 * @param {*} props 
 */

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
            <RatingsSection />
            <VideoInformation description={video.description} creator={video.user_id} currentUser={currentUser}/>
            <CommentsSection />
      </div>
     
    </div>
  </div>
);
}

export default VideoShow;