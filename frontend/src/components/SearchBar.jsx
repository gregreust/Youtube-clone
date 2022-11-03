import React, {useState} from 'react';


const  SearchBar = ({getSearchInput}) => {

    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchInput(searchInput);
    }
    return ( 
        <div className="search-bar">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
     );
}
 
export default SearchBar;