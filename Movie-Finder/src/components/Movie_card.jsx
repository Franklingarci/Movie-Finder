import React from 'react'

const Movie_card = ({movie}) => {
  const {poster_path, original_language, title, vote_average,release_date} = movie;
  return (
    <div className='movie-card'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}/>


        <div className='mt-4'>
        <h3> {title}</h3>

          <div className='content'>
            <div className='rating'>
              <img src = "/src/assets/star.svg"/>
              <p>{vote_average?vote_average.toFixed(1):'no rating'} </p>
              <span>•</span>
              <p className='lang'>{original_language? original_language:"No Lang"}</p>
              <span>•</span>
              <p className='year'>{release_date?release_date.split("-")[0]:"no data"}</p>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Movie_card