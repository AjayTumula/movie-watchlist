// BookmarkContext.js
import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => {
    return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }) => {
    const [bookmarkedMovies, setBookmarkedMovies] = useState({});

    const toggleBookmark = (imdbID) => {
        setBookmarkedMovies(prev => ({
            ...prev,
            [imdbID]: !prev[imdbID],
        }));
    };

    return (
        <BookmarkContext.Provider value={{ bookmarkedMovies, toggleBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
};
