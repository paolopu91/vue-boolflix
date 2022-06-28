<template>
  <div>
    <div id="moviesList">

      <ul>
        <!-- Stampare una MovieCard per ogni film con il ciclo -->
      </ul>
      
    </div>

    <div id="seriesList">

        <ul>
            <!-- Stampare una MovieCard per ogni film con il ciclo -->
        </ul>
      
    </div>
  </div>
</template>

<script>
import { state } from "../store";
export default {
  computed: {
    moviesList() {
      return state.moviesList;
    },
  },
  methods: {
    
  },
};
</script>

<style></style>