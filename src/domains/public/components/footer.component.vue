<script setup>
  import {ref} from "vue";
  const authorName = ref('u202317638 Jhosepmyr Gutierrez')
</script>

<template>
  <footer class="footer">
    <p>Copyright © 2024 Fake Lottery, inc. All rights reserved.</p>
    <p>Develop by {{authorName}}</p>
  </footer>
</template>

<style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-top: 1px solid white;
  }
</style>