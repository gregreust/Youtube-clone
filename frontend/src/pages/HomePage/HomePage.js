import React, { useEffect, useState }from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar";
import { Link } from 'react-router-dom';
import {KEY} from '../../localKey';

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [videoList, setVideoList] = useState([]);
  const [searchInput, setSearchInput] = useState("dogs");

  useEffect(() => {    
    fetchVideos();
  },[searchInput]);
  
  const fetchVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=${KEY}&part=snippet&maxResults=10`);
      console.log(response.data.items);
      setVideoList(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  function getSearchInput(input){
    console.log(input);
    let newSearchInput = input;
    setSearchInput(newSearchInput);
  }

  return (
    <div className="container">
      <SearchBar getSearchInput={getSearchInput}/>  
      <div className="video-list">
        {console.log(videoList)}
        <ul>
          {videoList&&videoList.map((video, index) => {
            return (
              <Link to={`/${video.id.videoId}`} state={video} key={index}> 
                <li>{video.snippet.title} 
                  <img src={`${video.snippet.thumbnails.default.url}`} alt={`${video.snippet.description}`}/>
                </li>
              </Link>
                    )})}
                </ul>
      </div>
      
    </div>
  );
};

export default HomePage;
