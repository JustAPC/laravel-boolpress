<template>
   <div>
      <Spinner v-if="isLoading == true" />

      <div class="card text-center">
         <div class="card-header"><img :src="post.image" alt="" /></div>
         <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
            <p class="card-text" v-if="post.categories.length == 0">No Categories</p>
            <div v-else>
               <p
                  v-for="category in post.categories"
                  :key="category.id"
                  :class="`text-${category.color}`"
                  class="text-uppercase mr-2 badge badge-secondary"
               >
                  {{ category.label }}
               </p>
            </div>

            <p class="card-text" v-if="post.tags.length == 0">No Tags</p>
            <div v-else>
               <p
                  v-for="tag in post.tags"
                  :key="tag.id"
                  class="badge align-self-auto mr-2"
                  :style="`background-color: ${tag.color}`"
               >
                  {{ tag.label }}
               </p>
            </div>
            <a :href="`http://127.0.0.1:8000/user/posts/${post.id}/edit`" class="btn btn-primary mt-3">Edit</a>
         </div>

         <div class="card-footer text-muted">{{ updated_at }}</div>
      </div>
   </div>
</template>

<script>
   import Axios from "axios";
   import Spinner from "../Spinner.vue";
   export default {
      name: "PostDetails",
      components: { Spinner },
      props: {},
      data() {
         return {
            post: [],
            updated_at: "",
            isLoading: true,
         };
      },
      methods: {
         getPost() {
            Axios.get(`http://127.0.0.1:8000/api/posts/${this.$route.params.id}`)
               .then((res) => {
                  this.post = res.data;
                  this.updated_at = this.post.updated_at.slice(0, 10);
               })
               .then(() => {
                  this.isLoading = false;
               });
         },
      },

      mounted() {
         this.getPost();
      },
   };
</script>

<style scoped lang="scss">
   .card-header img {
      width: 150px;
   }
</style>
