import React, {useState} from 'react';


const  SearchBar = ({getSearchInput}) => {

    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchInput(input)
    }
    return ( 
        <form class="search-bar" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)}>Search</input>
            <button type="submit"  />
        </form>
     );
}
 
export default SearchBar;