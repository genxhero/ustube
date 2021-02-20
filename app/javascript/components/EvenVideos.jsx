import React from 'react';
import { Video } from 'video-react';
import VideoIndexCard from './VideoIndexCard';

/**
 * Dummy component as a proof of concept.
 * @param {*} props 
 */

const EvenVideos = props => {
    const {videos} = props;
    return (
    <div>
        <h1>Latest Videos</h1>
        <div className="videos-gallery">
            {videos.map( video => <VideoIndexCard video={video}/>)}
        </div>
    </div>)
}

export default EvenVideos;