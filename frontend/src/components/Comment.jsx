import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Comment = () => {

    const comment = useLocation();

    function handleLike = async () => {
        let likedComment = {...comment, likes:comment.likes+1};
        await axios.put(``)
    }

    return ( 
        <div className="comment">
            <div>
                {comment.user.username}
            </div>
            <div>
                {comment.text}
            </div>
            <div>
                {comment.likes}
            </div>
            <div>
                {comment.dislikes}
            </div>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
        
     );
}
 
export default Comment;
