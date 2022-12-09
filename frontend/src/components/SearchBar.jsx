import React, {useState} from 'react';


const  SearchBar = ({getSearchInput}) => {

    const [searchInput, setSearchInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchInput(searchInput);
    }
    return ( 
        <div className="search-bar">
            <form>
                <input type="text" placeholder="Search..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
                <button onClick={(event) => handleSubmit(event)}><i class="fa fa-search"></i></button>
            </form>
        </div>
     );
}
 
export default SearchBar;