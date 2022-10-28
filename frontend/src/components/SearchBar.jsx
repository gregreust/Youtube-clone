import React, {useState} from 'react';


const  SearchBar = ({getSearchInput}) => {

    const [input, setInput] = useState("");

    return ( 
        <form class="search-bar">
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)}>Search</input>
            <input type="submit" onClick={getSearchInput(input)} />
        </form>
     );
}
 
export default SearchBar;