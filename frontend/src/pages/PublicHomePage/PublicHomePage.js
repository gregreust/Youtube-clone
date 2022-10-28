import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "../../components/SearchBar";
import {KEY} from '../../localKey';
import {VIDEO_DATA} from '../../localData';

const PublicHomePage = () => {

    const [videosList, setVideoList] = useState(VIDEO_DATA.items); //video data I want to loop through is in "items"      
    const [searchInput, setSearchInput] = useState("dogs");

    async function getSearchInput(searchInput) {
        let searchResults = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=${KEY}`);
        console.log(searchResults);
    }

    return ( 
        <div className="HomePage">
            {/* <SearchBar getSearchInput={getSearchInput}/> */}
            <div class="video-list">
            {videosList && videosList.map((video, index) => {
                return <li key={index}>{video.snippet.title} 
                        <img src={`${video.snippet.thumbnails.default.url}`}/>
                    </li>
            })}
            </div>
        </div>
     );
}
 
export default PublicHomePage;

     