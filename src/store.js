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
        api_key: "66da9c9715a8aa6ea7123977e1274068",
        query: searchText,
        language: "it-IT",
      },
    })
    .then((resp) => {
      state.moviesList = resp.data.results;
    });
}