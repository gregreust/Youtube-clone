import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentsList = () => {

    const {id} = useParams();
    const [comments, setComments] = useState();

    // useEffect get all comments associated with videoId from backend 
    useEffect(() => {
        console.log(id);
        const fetchComments = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/${id}`);
                setComments(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchComments();
    })
    return ( 
        <><h3>Comments</h3>
            {/* Need input for adding new comment  */}
            <div class="comment-list">
                <ul>
                    {comments&&comments.map((comment) => {
                        return (
                            <li>
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
                            </li>

                        );
                    })}
                </ul>
            </div></>

     );
}
 
export default CommentsList;