import React, { useState } from 'react';

const MoviesList = () => {
    const initialMovies = [
        { title: 'Encryption', genre: 'Action', description: 'A mind-bending thriller.' },
        { title: 'The Logfather', genre: 'Drama', description: 'A mafia saga.' },
        { title: 'My Big Fat Hacked Wedding', genre: 'Animation', description: 'A story about toys.' },
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [showDetails, setShowDetails] = useState({});
    const [showAll, setShowAll] = useState(true);

    const toggleDetails = (index) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [index]: !prevDetails[index],
        }));
    };

    const removeMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    };

    const toggleView = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {showDetails[index] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;