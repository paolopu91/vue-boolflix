<template>
  <div>
    <!-- userò questa card dalla milestone numero 4 -->
    <div>
      <ul class="list-unstyled text-center" v-for="(movie,i) in moviesList" :key="i">
          <li>
            <div class="container text-start">
              <span class=" text-danger fs-3">MOVIES</span>
            </div>
          </li>           
        <li class="my-2">
            <span class="text-primary">Title</span> : 
            <span class="text-success">{{movie.title}}</span>                           <!-- title of films -->
        </li>                                        
        <li class="my-2">
            <span class="text-primary">Original Title</span> : 
            <span class="text-danger">{{movie.original_title}}</span>                  <!-- original title of films -->
        </li>                                  
        <li class="my-2">
            <span class="text-primary">Languages </span> : 
            <span class="text-info">{{movie.original_language}}</span>
            <lang-flag :iso="movie.original_language" ></lang-flag>             <!-- languages of films -->
        </li>                               
        <li class="my-2 border-bottom">
            <span class="text-primary">Vote </span> : 
            <span class="">{{movie.vote_average}}</span>                    <!-- vote_average of films -->
        </li> 
      </ul>   
    </div> 
        
    <!-- series list -->
    <div>
      <ul class="list-unstyled text-center" v-for="(serie,i) in seriesList" :key="i">
        <li>
          <div class="container text-start">
            <span class="text-secondary fs-3">SERIES TV</span>
          </div>
        </li>
        <li class="my-2 ">
          <span class="text-warning">Title</span> <span class="text-success">{{serie.name}} </span>                                      <!-- title of series -->
        </li>
        <li class="my-2 ">
          <span class="text-warning">Original Title</span> <span class="text-danger">{{serie.original_name}}</span>                     <!-- original title of series -->
        </li>
        <li class="my-2 ">
          <span class="text-warning">Languages</span> <span class="text-info">{{serie.original_language}}</span> 
          <lang-flag :iso="serie.original_language"></lang-flag>                     <!-- languages of series -->
        </li>
        <li class="my-2 border-bottom">
          <span class="text-warning">Vote</span> <span>{{serie.vote_average}} </span>                               <!-- vote_average of series -->
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { state } from "../store";

export default {
  data (){
    return{

    }
  },
  computed:{
      moviesList() {
          return state.moviesList;
        },
        seriesList() {
          return state.seriesList;
        },
    
  }
}
</script>

<style>
</style>