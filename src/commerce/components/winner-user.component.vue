<script setup>
defineProps(['winner']);
</script>

<template>
  <pv-card>
    <template #header>
      <img :alt="winner.login.username" :src="winner.picture.thumbnail">
    </template>
    <template #title></template>
    <template #subtitle></template>
    <template #content></template>
    <template #footer>
      <p>{{winner.name.title +' '+winner.name.first+' '+winner.name.last}}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>