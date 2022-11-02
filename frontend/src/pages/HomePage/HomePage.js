import React, { useEffect, useState }from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar";
import { Link } from 'react-router-dom';

import {VIDEO_DATA} from '../../localData';
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoList, setVideoList] = useState(VIDEO_DATA.items);
  const [searchInput, setSearchInput] = useState("dogs");

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
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* <SearchBar />   */}
      <div class="video-list">
        {console.log(videoList)}
        <ul>
          {videoList.map((video, index) => {
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
