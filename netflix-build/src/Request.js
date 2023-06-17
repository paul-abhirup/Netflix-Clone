//typically we would store in {process.env.API_KEY}

const API_KEY = "7543524441a260664a97044b8e2dc621";
// const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";

const requests = {

  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  // fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  // fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  // fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`,

};

export default requests;
