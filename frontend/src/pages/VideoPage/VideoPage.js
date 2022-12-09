import React from 'react';
import { useLocation } from 'react-router-dom';
import CommentsList from '../../components/CommentsList/CommentsList';
import './VideoPage.css';



const VideoPage = () => {

    const {state} = useLocation();

    //useEffect get comments accociated with videoId 

    return ( 
        <div className="video-page">
            <h2>{state.snippet.title}</h2>
            <iframe title={`${state.snippet.title}`} width="560" height="315"
                src={`https://www.youtube.com/embed/${state.id.videoId}`}>
            </iframe>
            <p>{state.snippet.description}</p>
            <CommentsList/>
        </div>
     );
}
 
export default VideoPage;