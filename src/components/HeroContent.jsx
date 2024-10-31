// HeroContent.js
import axios from 'axios';
import React, { useState } from 'react';
import { useBookmarks } from '../BookmarkContext';

const HeroContent = () => {
    const { bookmarkedMovies, toggleBookmark } = useBookmarks();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY;

    const handleSearch = () => {
        if (!query) return;

        axios
            .get(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`)
            .then(res => {
                if (res.data.Response === 'True') {
                    setMovies(res.data.Search);
                    setError('');
                } else {
                    setMovies([]);
                    setError(res.data.Error);
                }
            })
            .catch(err => {
                console.error(err);
                setError('Error fetching data.');
                setMovies([]);
            });
    };

    return (
        <div className='w-full'>
            {/* Other UI components */}
            <div className='mt-10 flex flex-wrap justify-center'>
                <div className='mt-10'>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a movie..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className='flex flex-wrap justify-center'>
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <div key={movie.imdbID} className='m-4 p-2 border rounded shadow-lg' style={{ width: '200px' }}>
                                <strong>{movie.Title}</strong> ({movie.Year})
                                <img src={movie.Poster} alt={movie.Title} height={150} width={200} />
                                <button 
                                    onClick={() => toggleBookmark(movie.imdbID)} 
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                >
                                    <i className={`fa-bookmark ${bookmarkedMovies[movie.imdbID] ? 'fa-solid' : 'fa-regular'}`} style={{ color: bookmarkedMovies[movie.imdbID] ? 'green' : 'gray' }}></i>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
