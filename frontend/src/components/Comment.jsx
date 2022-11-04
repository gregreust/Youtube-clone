import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Comment = ({fetchComments}) => {

    const comment = useLocation();

    const handleLike = async () => {
        let likedComment = {...comment, likes:comment.likes+1};
        await axios.put(`http://127.0.0.1:8000/api/comments/`, likedComment).then(()=>{fetchComments()});
    }

    const handleDislike = async () => {
        let dislikedComment = {...comment, dislikes:comment.dislikes+1};
        await axios.put(`http://127.0.0.1:8000/api/comments/`, dislikedComment).then(()=>{fetchComments()});
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
