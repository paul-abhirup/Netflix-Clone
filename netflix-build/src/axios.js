import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
//helps to append the base url to every request we make
//the beggining of the url is the same for every request we make


export default instance;
//to use this outside
//fetch info outside of this file