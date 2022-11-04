import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';
import axios from 'axios';

const CommentsList = () => {


    //const [user, token] = useAuth();
    const {id} = useParams();
    const [user, token] = useAuth();
    const [comments, setComments] = useState();
    const [newComment, setNewComment] = useState();

    // useEffect get all comments associated with videoId from backend 


    // useEffect(() => 
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);
    useEffect(() => {
        fetchComments();
    }, [])

    const fetchComments = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/${id}/`);
            setComments(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    //function for posting new comment
    async function handleCommentSubmit(event) {
        event.preventDefault();
        let newCommentObject = {
            "video_id": id,
            "text": newComment,
        }

        try {
            await axios.post("http://127.0.0.1:8000/api/comments/", 
            newCommentObject,
            {headers: {
                    Authorization: "Bearer " + token,
                }
            }).then(fetchComments());
            } catch (error) {
                console.log(error);
            }
    }

    return ( 
        <><h3>Comments</h3>
            <div className="comment-list">
                <form className="post-comment" onSubmit={(event) => handleCommentSubmit(event)}>
                    <label>
                        Post a comment
                        <input type="text" value={newComment} onChange={(event) => setNewComment(event.target.value)}/>
                        <button type="submit">Post</button>
                    </label>
                </form>
                <ul>
                    {comments&&comments.map((comment) => {
                        return (
                            <li>
                                <Comment state={comment} fetchComments={fetchComments}/>
                            </li>

                        );
                    })}
                </ul>
            </div></>

     );
}
 
export default CommentsList;