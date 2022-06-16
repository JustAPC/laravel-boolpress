<template>
    <div>
        <Spinner v-if="isLoading == true" />

        <div v-if="posts.length">
            <Pagination :pagination="pagination" />
            <div class="d-flex flex-wrap mt-3 justify-content-between">
                <div
                    class="card mb-5"
                    style="width: 18rem"
                    v-for="post in posts"
                >
                    <img
                        v-if="post.image"
                        class="card-img-top mx-auto"
                        :src="post.image"
                        :alt="`${post.title} image`"
                        style="width: 180px"
                    />
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title text-primary">
                                {{ post.title }}
                            </h5>
                            <div class="text-center">
                                <span
                                    v-for="tag in post.tags"
                                    class="badge align-self-auto"
                                    :style="`background-color: ${tag.color}`"
                                    >{{ tag.label }}</span
                                >
                            </div>
                        </div>
                        <p class="card-text">
                            <span
                                v-for="category in post.categories"
                                :class="`text-${category.color}`"
                                class="text-uppercase mr-2 badge badge-secondary"
                                >{{ category.label }}</span
                            >
                        </p>

                        <p class="card-text">
                            {{ post.content }}
                        </p>
                        <a
                            :href="`/user/posts/${post.id}`"
                            class="btn btn-primary"
                            >Vai al post</a
                        >
                        <router-link
                            :to="{
                                name: 'post-details',
                                params: { id: post.id },
                            }"
                            class="btn btn-primary"
                            >View</router-link
                        >
                    </div>
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
        getPosts() {
            Axios.get("http://127.0.0.1:8000/api/posts")
                .then((res) => {
                    console.log(res.data.data);

                    const { data, current_page, last_page } = res.data.posts;

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
