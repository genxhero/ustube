import React from 'react'
import PropTypes from 'prop-types'

const VideoInformation = (props) => {
    const {currentUser, creator, description} = props
    return (
        <div className="video-information">
              <p>{description}</p>  
        </div>
    )
}

export default VideoInformation;