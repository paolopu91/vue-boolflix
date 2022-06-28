import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
  moviesList: [],
  seriesList: [],
});

export function searchMovies(userSearch) {


  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "087170f6b5443a479b740284b253376d",
        query: userSearch,
        language: "it-IT",
      },
    })
    .then((resp) => {
      state.moviesList = resp.data.results;
    });
    
    // callback for series
    axios
    .get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: "087170f6b5443a479b740284b253376d",
        query: userSearch,
        language: "it-IT",
      },
    })
    .then((resp) => {
      state.seriesList = resp.data.results;
    });
}