import React,{useEffect,useState} from 'react'
import './Row.css'
// import request from './Request'
import axios from './axios'

//this down will destructure the props component
function Row( { title , fetchUrl , isLargeRow = false }) {

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    //if [], run once when the row loads, and dont run again
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

 return(
    <div className='row'>
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
      {movies.map
        (
            (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
            (
                    (
                      <img
                      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                      key={movie.id}
                      src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                      alt={movie.name}
                      />
                    )

            )
        )
      }

      </div>

  </div>
  );
}

export default Row;
