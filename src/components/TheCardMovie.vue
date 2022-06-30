<template>

  <div>
    <!-- userò questa card dalla milestone numero 4 -->
    <div class="row row-cols-4 d-flex ">
      <div class="position-relative col-3 py-3 text-center" v-for="(movie,i) in moviesList" :key="i">
            <img :src="boolflixPoster + [movie.poster_path]" :alt="movie.title">         <!-- copertina film-->
            
            <div class="poster-overlay overflow-auto">
              <!-- title -->
              <div class="py-2">
                <span class="text-primary">Title</span> : 
                <span class="text-success">{{movie.title}}</span>
              </div>

              <!-- original title -->
              <div class="py-2">
                <span class="text-primary">Original Title</span> : 
                <span class="text-danger">{{movie.original_title}}</span>  
              </div>
              <!-- language movie -->
              <div class="py-2">
                <span class="text-primary">Languages </span> : 
                <span class="text-info">{{movie.original_language}}</span>
                <lang-flag :iso="movie.original_language" ></lang-flag>
              </div>
              <!-- vote rating movie -->
              <div class="py-2">
                <span class="text-primary">Vote </span> : 
                <span v-html="movieRating(movie)"></span>
              </div>
              <!-- overview movies -->
              <div class="py-2 overflow-auto">
                <span class="text-rimary">Overview</span> : 
                <span class="text-secondary text-small">{{movie.overview}}</span>
              </div>
            </div>

      </div> 
      
      
    </div> 
        
    <!-- series list -->

    <div class="container row row-cols-4 d-flex">
      <!-- stamp list -->
      <div class=" position-relative text-center py-3 col-3" v-for="(serie,i) in seriesList" :key="i">
        <img :src="boolflixPoster + [serie.poster_path]"  :alt="serie.name"> 
        <div class="poster-overlay overflow-auto">
          <!-- title series -->
          <div class="py-2">
            <span class="text-warning">Title</span> : 
             <span class="text-success">{{serie.name}} 
            </span>
          </div>
          <!-- original title series -->
          <div class="py-2">
            <span class="text-warning">Original Title</span> :
             <span class="text-danger">{{serie.original_name}}
            </span> 
          </div>
          <!-- language series -->
          <div class="py-2">
            <span class="text-warning">Languages</span> : 
             <span class="text-info">{{serie.original_language}}
            </span> 
            <lang-flag :iso="serie.original_language"></lang-flag>   
          </div>
          <!-- vote rating series -->
          <div class="py-2 ">
            <span class="text-warning">Vote</span> : 
            <span v-html="movieRating(serie)"></span>
          </div>
          <!-- overview series -->
          <div class="py-2 overflow-auto">
            <span class="text-rimary">Overview</span> : 
            <span class="text-secondary text-small">{{serie.overview}}</span>
          </div>
        </div> 
          
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
      return "https://image.tmdb.org/t/p/"+"w300/"
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

<!-- my scss -->
<style lang="scss" scoped>

.col-3{
  &:hover{
    .poster-overlay{
      opacity:.9;
    }
    
  }

  .poster-overlay{
    position: absolute;
    top:0;
    right: 0;
    bottom:0;
    left: 0;
    background-color: black;
    opacity: 0;
  }

}

.text-small{
  font-size: 15px;
}

</style>