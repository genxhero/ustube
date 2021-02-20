import React from 'react';
import VideoIndexCard from './VideoIndexCard';

/**
 * Index page for videos
 * @param {*} props 
 */

const VideosIndex = props => {
    const {videos} = props;
    return (
    <div>
        <h1>Latest Videos</h1>
        <div className="videos-gallery">
            {videos.map( video => <VideoIndexCard video={video}/>)}
        </div>
    </div>)
}

export default VideosIndex;