import React from 'react';
import VideoThumbnail from 'react-video-thumbnail'; 

/**
 * Index component showing a thumbnail and description for a video
 * 
 * Need to figure out the thumbnail situation perhaps during upload
 * 
 * @param {*} props 
 */

const VideoIndexCard = (props) => {
    const {video} = props;
    console.log(video)
    return (
        <div className="video-index-card">
            <h3>{video.title}</h3>
            <img className="video-thumbnail" src={video.image_url}/>
        </div>
    )
}

export default VideoIndexCard;

/**
 * <VideoThumbnail 
              videoUrl={video.video_url}
              thumbnailHandler={(thumbnail) => console.log(thumbnail)}
              width={120}
              height={80}
              />
This shit doesn't work due to CORS issues.
 */