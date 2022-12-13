import React, {useState} from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import {Button} from '@mui/material';
import {ThumbUp, ThumbDown} from '@mui/icons-material';

const Comment = ({fetchComments, comment}) => {

    // const comment = useLocation();
    const [user, token] = useAuth();
    const [likeButtonStatus, setLikeButtonStatus] = useState("inactive");
    const [dislikeButtonStatus, setDislikeButtonStatus] = useState("inactive");
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const clickLike = () => {
        handleLike();
        if (likeButtonStatus=="inactive"){
            setLikeButtonStatus("liked");
        } else {
            setLikeButtonStatus("inactive")
        }
    }

    const clickDislike = () => {
        handleDislike();
        if (dislikeButtonStatus=="inactive"){
            setDislikeButtonStatus("disliked");
        } else {
            setDislikeButtonStatus("inactive");
        }
    }

    const handleLike = async () => {
        let likedComment = {};
        if (likeButtonStatus=="inactive"){
            likedComment = {likes:comment.likes+1};
        }else {
            //clicking a second time will remove the like
            likedComment = {likes:comment.likes-1};
        }
        await axios.put(`http://127.0.0.1:8000/api/comments/comment/${comment.id}/`,  
            likedComment).then(()=>{fetchComments()});
    }

    const handleDislike = async () => {
        let dislikedComment = {};
        if (dislikeButtonStatus=="inactive"){
            dislikedComment = {dislikes:comment.dislikes+1};
        }else {
            dislikedComment = {dislikes:comment.dislikes-1};
        }
        await axios.put(`http://127.0.0.1:8000/api/comments/comment/${comment.id}/`, 
            dislikedComment).then(()=>{fetchComments()});
    }

    return ( 
        <div className="comment">
            <div className="username">
                {comment.user.username}
            </div>
            <div className="text">
                {comment.text}
            </div>
            <div className="like-and-dislike">
                <Button className={likeButtonStatus} onClick={clickLike}><ThumbUp /></Button>
                <div className="likes">
                    {comment.likes}
                </div>
                <Button className={dislikeButtonStatus} onClick={clickDislike}><ThumbDown /></Button>
                <div className="dislikes">
                    {comment.dislikes}
                </div>
            </div>
        </div>
        
     );
}
 
export default Comment;
