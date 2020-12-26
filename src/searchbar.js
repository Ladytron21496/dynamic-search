
import React from "react";

function SearchBar({value,handleChange})
{
    return(  <div className="search-container">
    <input value={value} onChange={handleChange} placeholder="Search For Books" className="search"></input>
</div>)
}

export default SearchBar;