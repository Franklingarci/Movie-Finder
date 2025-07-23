import React from 'react'

const Search = ({searchTerm, setSearch}) => {
  return (
    <div className='search'>
        <div> 
            <img src='src\assets\search.svg'/>
             <input type = "text" placeholder='Search through 300+ movies online' value={searchTerm } 
             onChange={(e) => setSearch(e.target.value)}
             /> 
        </div>
    </div>
  )
}

export default Search