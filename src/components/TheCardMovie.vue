<template>

  <div>
    <!-- userò questa card dalla milestone numero 4 -->
    <div class="row row-cols-4 d-flex ">

      <div class="py-3 text-center" v-for="(movie,i) in moviesList" :key="i">
        
        <div class="col-4">
          
            <img :src="boolflixPoster + [movie.poster_path]" :alt="movie.title">         <!-- copertina film-->
                                                                           
        </div>      


        <!-- <div class="col-4">
            <span class="text-primary">Title</span> : 
            <span class="text-success">{{movie.title}}</span>                           
        </div>   


        <div class="col-4">
            <span class="text-primary">Original Title</span> : 
            <span class="text-danger">{{movie.original_title}}</span>                  
        </div> 


        <div class="col-4">
            <span class="text-primary">Languages </span> : 
            <span class="text-info">{{movie.original_language}}</span>
            <lang-flag :iso="movie.original_language" ></lang-flag>                   
        </div>  


        <div class="col-4">
            <span class="text-primary">Vote </span> : 
            <span v-html="movieRating(movie)"></span>                              
        </div>  -->


      </div> 
      
      
    </div> 
        
    <!-- series list -->

    <div class="container row row-cols-4 d-flex">
      <!-- stamp list -->

      <div class="text-center" v-for="(serie,i) in seriesList" :key="i">

          <div class="col-4 py-3">
            <img :src="boolflixPoster + [serie.poster_path]"  :alt="serie.name">  
          </div>

        

        <!-- <li class="my-2 ">
          <span class="text-warning">Title</span> <span class="text-success">{{serie.name}} </span>                                      
        </li>

        <li class="my-2 ">
          <span class="text-warning">Original Title</span> <span class="text-danger">{{serie.original_name}}</span>                       
        </li>

        <li class="my-2 ">
          <span class="text-warning">Languages</span> <span class="text-info">{{serie.original_language}}</span> 
          <lang-flag :iso="serie.original_language"></lang-flag>                                                                         
        </li>

        <li class="my-2 border-bottom">
          <span class="text-warning">Vote</span> 
          <span v-html="movieRating(serie)"></span>                                                                                                                                       
        </li> -->

      </div>

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
     boolflixPoster(){
      return "https://image.tmdb.org/t/p/"+"w185/"
    },
    
  },
  methods:{
    // function for my stars under img
  movieRating(vote){
    const votes = Math.ceil(vote.vote_average / 2);
    const fullStar = [];
    const emptyStar= [];
    for(let i = 0; i<votes ; i++){
      fullStar.push("<i class=\"fa fa-solid fa-star\"></i>");
    }
    for(let i=0; i < (5-votes); i++ ){
      emptyStar.push("<i class=\"fa fa-regular fa-star\"></i>")
    }
    const fullVotes= fullStar.join("") + emptyStar.join("");
    return fullVotes
  },
  },
}
</script>

<style>

</style>