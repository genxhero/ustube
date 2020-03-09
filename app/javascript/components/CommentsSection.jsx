import React from 'react';
import Comment from './Comment';

/**
 * Comments section. 
 * TODO: Something to do with threading the comments. Like maybe show the replies of the comments?
 */

const CommentsSection = props => {
    return (
        <div className="video-comments">
            <Comment />
        </div>
    )
}

export default CommentsSection;