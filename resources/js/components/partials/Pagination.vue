<template>
   <div>
      <nav aria-label="Page navigation example">
         <ul class="pagination">
            <li class="page-item">
               <a
                  class="page-link"
                  :class="{ 'pointer-none': pagination.currentPage == 1 }"
                  @click="$emit('pageChange', pagination.currentPage - 1)"
               >
                  <
               </a>
            </li>
            <li
               v-for="page in pagination.lastPage"
               :key="page.id"
               class="page-item"
               role="button"
               @click="$emit('pageChange', page)"
            >
               <a class="page-link" :class="{ 'active-page': pagination.currentPage == page }">{{ page }}</a>
            </li>
            <li class="page-item">
               <a
                  class="page-link"
                  :class="{ 'pointer-none': pagination.currentPage == pagination.lastPage }"
                  @click="$emit('pageChange', pagination.currentPage + 1)"
               >
                  >
               </a>
            </li>
         </ul>
      </nav>
   </div>
</template>

<script>
   export default {
      name: "Pagination",
      props: ["pagination"],
      data() {
         return {};
      },
      methods: {},
   };
</script>

<style scoped lang="scss">
   .pointer-none {
      pointer-events: none;
      background-color: lightgrey;
   }

   .active-page {
      background-color: black;
   }
</style>
