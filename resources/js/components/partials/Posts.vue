<template>
   <div>
      <Spinner v-if="isLoading == true" />

      <div v-if="posts.length">
         <Pagination :pagination="pagination" @pageChange="getPosts" />

         <div class="d-flex flex-wrap mt-5 justify-content-between">
            <div class="card mb-5" style="width: 18rem; height: 440px" v-for="post in posts" :key="post.id">
               <img
                  v-if="post.image"
                  class="card-img-top mx-auto"
                  :src="post.image"
                  :alt="`${post.title} image`"
                  style="width: 180px"
               />

               <div class="card-body">
                  <div class="d-flex justify-content-between">
                     <h5 class="card-title text-primary">{{ post.title }}</h5>

                     <div class="text-center">
                        <span
                           v-if="post.tags != 0"
                           v-for="tag in post.tags"
                           :key="tag.id"
                           class="badge align-self-auto"
                           :style="`background-color: ${tag.color}`"
                        >
                           {{ tag.label }}
                        </span>

                        <span v-else class="badge align-self-auto"> No Tags </span>
                     </div>
                  </div>
                  <p class="card-text">
                     <span
                        v-for="category in post.categories"
                        :key="category.id"
                        :class="`text-${category.color}`"
                        class="text-uppercase mr-2 badge badge-secondary"
                     >
                        {{ category.label }}
                     </span>
                  </p>

                  <p class="card-text">{{ post.content }}</p>
               </div>
               <router-link :to="{ name: 'post-details', params: { id: post.id } }" class="btn btn-primary">
                  Vai al post
               </router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import Axios from "axios";
   import Spinner from "../Spinner.vue";
   import Pagination from "./Pagination.vue";

   export default {
      name: "Posts",
      components: { Spinner, Pagination },
      props: {},
      data() {
         return {
            posts: [],
            pagination: {},
            isLoading: true,
         };
      },
      methods: {
         getPosts(page = 1) {
            Axios.get("http://127.0.0.1:8000/api/posts?page=" + page)
               .then((res) => {
                  const { data, current_page, last_page } = res.data;

                  this.posts = data;

                  this.pagination = {
                     currentPage: current_page,
                     lastPage: last_page,
                  };
               })
               .then(() => {
                  this.isLoading = false;
               });
         },
      },

      mounted() {
         this.getPosts();
      },
   };
</script>

<style scoped lang="scss"></style>
