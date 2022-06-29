<template>
  <div class="my-section">
    <div class="container py-3">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Which movies do you want to see?" v-model="userSearch" aria-describedby="button-addon2">
            <button class="btn btn-outline-primary" type="button" id="button-addon2" @click="onSearch">Search</button>
        </div>
    </div>
  </div>
</template>

<script>
import {searchMovies} from "../store";

export default {
    data(){
        return{
          name:"TheHeader",
          userSearch:"",
        }
    },
  methods:{
    onSearch(){
      console.log(this.userSearch)
      searchMovies(this.userSearch)
    }
  },
}
</script>

<style scoped>
.my-section{
    background-color: slategray;
}
</style>