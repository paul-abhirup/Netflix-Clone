import React,{useEffect,useState} from 'react'
import './Row.css'
// import request from './Request'
import axios from './axios'

//this down will destructure the props component
function Row( { title , fetUrl , isLargeRow = false }) {

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    //if [], run once when the row loads, and dont run again
    async function fetchData(){
      const request = await axios.get(fetUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetUrl]);

  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      {/* container -> posters */}

      {movies.map((movie) => {
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                  alt={movie.name}
                   />
        })}
      </div>
      );
}

export default Row;
