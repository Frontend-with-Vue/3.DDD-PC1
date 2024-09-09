<script setup>
  import axios from "axios";
  import {ref, onMounted} from "vue";
  import {Winner} from "../model/winner.entity.js";
  import Winner from "./winner.component.vue";

  const API_URL = "https://randomuser.me/api/?results=5";
  const winnerList = ref([]);

  function getDataWinners(){
    axios.get(API_URL)
        .then(response => {
          response.data.results.forEach(item => {
            const auxWinner = new Winner(item.name, item.gender, item.email, item.login, item.phone, item.picture.medium, item,nat);
            winnerList.value.push(auxWinner);
          });
        }).catch(error =>console.log(error));
  }
  onMounted(getDataWinners);
</script>
<template>
  <section v-for="winner in winnerList" :key="winner">

  </section>
</template>

<style scoped>

</style>