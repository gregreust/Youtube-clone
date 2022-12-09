import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Comment from "../Comment";
import './CommentsList.css';

const CommentsList = () => {
  const { id } = useParams();
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();

  //useEffect get all comments associated with videoId from backend
  useEffect(() => {
    fetchComments();
  }, [comments]);

  const fetchComments = async () => {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //function for posting new comment
  //HOW TO ADD USERNAME TO THIS POST REQUEST PROPERLY?
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    let newCommentObject = {
      video_id: id,
      text: newComment,
      likes: 0,
      dislikes: 0,
    };

    try {
      await axios
        .post("http://127.0.0.1:8000/api/comments/", newCommentObject, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(fetchComments());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      <form
        className="post-comment"
        onSubmit={(event) => handleCommentSubmit(event)}
      >
        <textarea
          value={newComment}
          placeholder="Post a comment..."
          rows="3"
          onChange={(event) => setNewComment(event.target.value)}
        />
        <input type="submit" />
      </form>
      <ul>
        {comments &&
          comments.map((comment, index) => {
            return (
                <li key={index}>
                  
                <Comment
                  comment={comment}
                  fetchComments={fetchComments}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CommentsList;
