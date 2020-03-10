import React from 'react';

/**
 * Index page for videos
 * @param {*} props 
 */

const VideosIndex = props => {
    const {videos} = props;
    return (
    <div>
        <h1>Latest Videos</h1>
        <div>
            {videos.map( video => <div>Your Video Here</div>)}
        </div>
    </div>)
}

export default VideosIndex;