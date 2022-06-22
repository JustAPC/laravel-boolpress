<template>
   <div>
      <Header />
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-md-10">
               <router-view></router-view>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import Header from "./partials/Header.vue";

   export default {
      name: "App",
      components: { Header },
   };
</script>

<style scoped>
   @media (min-width: 1201px) {
      .container {
         max-width: 1500px;
      }
   }
</style>
