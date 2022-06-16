<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <router-link :to="{ name: 'home' }" class="navbar-brand"
                >Boolpress</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'contacts' }" class="nav-link"
                            >Contacts</router-link
                        >
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/user/posts">Post List</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/user/posts/create"
                            >Create a new Post</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
    components: {},
    props: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="scss">
.active_page {
    color: #3490dc !important;
}
</style>
