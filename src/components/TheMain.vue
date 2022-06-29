<template>
  <div class="container">
    <div id=" moviesList">   

        <TheCardMovie>

        </TheCardMovie>
        
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

