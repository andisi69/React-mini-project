import React, { useEffect, useState } from 'react'

function Movies() {
     
    const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState('1')

    useEffect(() => {
        const fetchData = async () => {
            const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${inputValue}`;

            try {
                const response = await fetch(api_url);
                const data = await response.json();
                const moviesData = data.results;
                setMovies(moviesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [inputValue])

    const handleNextPage = () => {
        setInputValue(inputValue + 1)
        window.scrollTo(0, 0)
    }

    const handlePrevPage = () => {
        if(inputValue > 1) {
            setInputValue(inputValue - 1)
        }
    }

    

  return (
    <>
        <div className='container mt-5'>
            <h3 className='text-center mb-5'>List of Films</h3>
            <div className='row'>
                {movies.map((movie) => (
                    <div key={movie.id} className="card mb-4" style={{ width: '280px', margin: '0 auto' }}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" style={{width: '280px', height: '350px', marginLeft: '-12px'}}
                            alt="Movies" />

                        <div className="card-body">
                            <h5 className="card-title" style={{ height: '40px', color: 'rgb(33, 37, 41)' }}>{movie.title.slice(0, 40)}</h5>

                            {movie.overview ? (
                                <p className="card-text mt-2">{movie.overview.slice(0, 90)}</p>
                            ) : (
                                <p className='card-text mt-2'>No Description</p>  
                            )}
                            
                            <a href="#" className="btn btn-dark">Watch Movie</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className='d-flex justify-content-center mt-4'>
                <button className='btn btn-dark m-2 px-3' onClick={handlePrevPage}><i className='bx bx-left-arrow-alt'></i>Back</button>
                <button className='btn btn-dark m-2 px-3' onClick={handleNextPage}>Next<i className='bx bx-right-arrow-alt'></i></button>
            </div>
        </div>
    </>
    )
}

export default Movies