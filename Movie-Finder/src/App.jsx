import React, { useEffect } from 'react'
import Search from './components/search'
import { useState } from 'react'
import Movie_card from './components/Movie_card';
import Loading from './components/loading';
const MOVIE_API_BASEURL = "https://api.themoviedb.org/3/discover/movie"
const MOVIE_API_SEARCHURL = "https://api.themoviedb.org/3/search/movie"
const MOVE_API_KEY = import.meta.env.VITE_MOVIE_FINDER_API;


const options = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${MOVE_API_KEY}`
  }
};
// fetching the data with try and catch
 
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
const [errorTerm, setErrorTerm] = useState(false);
const [movieList, setMovieList] = useState([])
const [isLoading, setIsLoading] = useState(false)



useEffect(() => {
const fetchData = async() =>{
  const endpoint = searchTerm ?
    `${MOVIE_API_SEARCHURL}?query=${encodeURIComponent(searchTerm)}`
    :`${MOVIE_API_BASEURL}`;

  try{
  
    setIsLoading(true)
      const response = await fetch(endpoint,options)
      if(!response.ok){
        throw new Error(`Response Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

       setMovieList(data.results)
  }catch(error){
    console.log('Error fetching data:', error);
    setErrorTerm(true)
  }finally{
    setIsLoading(false)
  }
 };

fetchData();
}, [searchTerm])
  return (
    <div className='pattern'>
      <div className=' wrapper'>
    <header>
      <div>
      <img src='src\assets\hero-img.png' alt='Heros'/>
      <h1> Find <span className='text-gradient'>Movies </span> You'll Love Without the Hassle</h1>
       <p className='text-white flex justify-center' > {searchTerm}</p>
       <Search setSearch={setSearchTerm} searchTerm={searchTerm}/>
      {errorTerm? <p className='text-red-500'>Error try again later </p>:''}
      <div className='flex justify-center'> 
    {isLoading?<Loading/>:""}
      </div>
     
      </div>
      <div className='all-movies mt-5'>
        <ul className='text-white'>
          {movieList.map((movie) => 
          <li key = {movie.id}> 
          <Movie_card  key = {movie.id} movie = {movie}/>
          </li>
          )}
        </ul>
      </div>
      
      
    </header>
    </div>
    </div>
  )
}

export default App