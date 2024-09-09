<script setup>
  import Footer from "../components/footer.component.vue";
  import WinnerList from "../../commerce/components/winner-list.component.vue";
</script>

<template>
  <div class="container">
    <header>
      <pv-toolbar>
        <template #start>
          <h4>Fake Lottery API Showcase</h4>
        </template>
      </pv-toolbar>
    </header>
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