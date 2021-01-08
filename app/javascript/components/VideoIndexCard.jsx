import React from 'react';
import VideoThumbnail from 'react-video-thumbnail'; 

/**
 * Index component showing a thumbnail and description for a video
 * 
 * @param {*} props 
 */

const VideoIndexCard = (props) => {
    const {video} = props;
    return (
        <div className="video-index-card">
            <VideoThumbnail 
              videoUrl={video.video_url}
              thumbnailHandler={(thumbnail) => console.log(thumbnail)}
              width={120}
              height={80}
              />
            <h3>{video.title}</h3>
        </div>
    )
}

export default VideoIndexCard;