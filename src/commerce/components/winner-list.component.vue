<script setup>
  import {ref, onMounted} from "vue";
  import WinnerUser from "./winner-user.component.vue";
  import {WinnersApiService} from "../services/fake-lottery-api.service.js";
  import {Winner} from "../model/winner.entity.js";

  const winnerApi = new WinnersApiService();
  const winnerList = ref([]);

  function getDataWinners(){
    winnerApi.getWinners()
        .then(response =>{
          let winners = response.data.results;
          winnerList.value = buildWinnerFromResponseData(winners);
        })
  }
  function buildWinnerFromResponseData(winners){
    return winners.map(winner => {
      const name = winner.name;
      const gender = winner.gender;
      const email = winner.email;
      const login = winner.login;
      const phone = winner.phone;
      const picture = winner.picture;
      const nat = winner.nat;

      console.log(winner)
      return new Winner(name, gender, email,login,phone, picture, nat)
    })
  }
  onMounted(getDataWinners);
</script>
<template>
  <section v-for="winner of winnerList">
    <winner-user :winner="winner"/>
  </section>
</template>

<style scoped>

</style>