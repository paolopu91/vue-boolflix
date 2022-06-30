<template>
  <div class="my-section ">
    <div class="container py-3 d-flex justify-content-between">
      <div class="container my-container-size">
        <img class="w-100" src="../../public/img/logo.png" alt="">
      </div>
      <div class="container my-container-input input-group mb-3">
        <input type="text" class="form-control" placeholder="What do you want to see" v-model="userSearch" aria-describedby="button-addon2">
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
    background-color: black;
}
.my-container-size{

}
.my-container-input{
  align-items: center;
}
</style>