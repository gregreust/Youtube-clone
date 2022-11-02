import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "../../components/SearchBar";
import {KEY} from '../../localKey';
import {VIDEO_DATA} from '../../localData';
import { Link } from 'react-router-dom';

const PublicHomePage = () => {

    const [videosList, setVideoList] = useState(VIDEO_DATA.items); //video data I want to loop through is in "items"      
    const [searchInput, setSearchInput] = useState("dogs");



    // function getSearchInput(input) {
    //     setSearchInput(input);
        // let searchResults = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=${KEY}`);
        // console.log(searchResults);
        // setVideoList(searchResults);
    //}

    return ( 
        <div className="HomePage">
            <SearchBar searchInputInfo={getSearchInput}/>
            <div class="video-list">
                <ul>
                    {videosList.map((video, index) => {
                        return (
                            <Link to={`/${video.id.videoId}`} state={video}> 
                                <li key={index}>{video.snippet.title} 
                                        <img src={`${video.snippet.thumbnails.default.url}`} alt={`${video.snippet.description}`}/>
                                    </li>
                            
                            </Link>
                    )})}
                </ul>   

            </div>
        </div>
     );
}
 
export default PublicHomePage;

     