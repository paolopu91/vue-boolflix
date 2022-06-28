import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
  moviesList: [],
  seriesList: [],
});

export function searchMovies(searchText) {
  debugger

  axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "087170f6b5443a479b740284b253376d",
        query: searchText,
        language: "it-IT",
      },
    })
    .then((resp) => {
      state.moviesList = resp.data.results;
    });
}