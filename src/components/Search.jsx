import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="../../public/search.svg" alt="search" />
                <input
                type="text"
                placeholder="Search through all the Teams"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search