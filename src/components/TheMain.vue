<template>
  <div class="container">
    <div id=" moviesList">  

      <div>
        <TheCardMovie></TheCardMovie>
      </div>

      <div>
        <TheCardMovie></TheCardMovie>
      </div>  
      
    </div>

    <div id="seriesList">
      <TheCardMovie />  
    </div>
  </div>
</template>



<script>
// import { state } from "../store";
import TheCardMovie from "./TheCardMovie.vue";
export default {
    data() {
        return {
            name: "TheMain"
        };
    },
    computed: {
    
    },
    methods: {},
    components: { TheCardMovie }
};
</script>



<style scoped>

</style>

