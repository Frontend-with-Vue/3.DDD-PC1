<script setup>
  import Footer from "../components/footer.component.vue";
  import Header from "../components/header.component.vue";
  import WinnerList from "../../commerce/components/winner-list.component.vue";
</script>

<template>
  <div class="container">
    <Header/>
    <main>
      <WinnerList></WinnerList>
    </main>
    <Footer class="footer"/>
  </div>
</template>

<style scoped>
  .container{
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
        'header'
        'main'
        'footer';
  }
  .footer{
    grid-area: footer;
  }
</style>