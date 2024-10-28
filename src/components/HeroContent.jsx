import axios from 'axios'
import React, { useState } from 'react';
// import 'dotenv/config';


const HeroContent = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY;

    const handleSearch = () => {
        if (!query) return;

        axios
            .get(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`)
            .then(res => {
                console.log(res.data)
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
    <div className='flex-col justify-center '>
        <div className='border-2 rounded border-red-700 w-500'>
                <h1>Welcome to Watchlists</h1>
                <p>Browse movies, add them to watchlists and share them with friends.</p>
                <p>Just click the <span>icon</span> to add a movie, the poster to see more details to mark the movie as watched.</p>
        </div>

        <div className='mt-10'>
            <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className='flex justify-center'>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div key={movie.imdbID}>
                            <strong>{movie.Title}</strong> ({movie.Year})
                            <img src={movie.Poster} alt={movie.Title}/>
                        </div>
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
            </div>
    </div>
  )
}

export default HeroContent