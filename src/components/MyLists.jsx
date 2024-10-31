// MyLists.js
import React from 'react';
import { useBookmarks } from '../BookmarkContext';

const MyLists = () => {
    const { bookmarkedMovies } = useBookmarks();
    const movieEntries = Object.keys(bookmarkedMovies).filter(imdbID => bookmarkedMovies[imdbID]);

    return (
        <div>
            <h1>My Bookmarked Movies</h1>
            {movieEntries.length > 0 ? (
                movieEntries.map(imdbID => (
                    <div key={imdbID}>
                        <p>{imdbID}</p> 
                    </div>
                ))
            ) : (
                <p>No bookmarked movies.</p>
            )}
        </div>
    );
};

export default MyLists;
