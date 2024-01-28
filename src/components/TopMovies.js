import React, { useEffect, useState } from 'react'

function TopMovies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
            const api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0'

            fetch(api_url)
            .then((response) => response.json())
            .then((data) => {
                const moviesData = data.results.slice(0,8)
                setMovies(moviesData)
            })
    }, [])


  return (
    <div className='container mt-5'>
        <h3 className='text-center mb-5'>Top Movies</h3>
        <div className='row'>
            {movies.map((movie) => (
                <div key={movie.id} className="card mb-4" style={{ width: '280px', margin: '0 auto' }}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" style={{width: '280px', height: '350px', marginLeft: '-12px'}}
                    alt="Movies" />

                    <div className="card-body">
                        <h5 className="card-title" style={{ height: '40px' }}>{movie.title.slice(0, 20)}</h5>

                        {movie.overview ? (
                                <p className="card-text mt-2">{movie.overview.slice(0, 90)}</p>
                            ) : (
                                <p className='card-text mt-2'>No Description</p>  
                        )}
                        <a href="/" className="btn btn-dark">Watch Film</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default TopMovies