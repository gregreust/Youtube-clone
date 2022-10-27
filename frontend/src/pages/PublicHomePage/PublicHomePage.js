import React, { useState } from 'react';
import SearchBar from '.../components/SearchBar';

const PublicHomePage = () => {

    const [videosList, setVideoList] = useState([]); //insert localdata for the initial useState!       
    return ( 
        <SearchBar />
     );
}
 
export default PublicHomePage;

     