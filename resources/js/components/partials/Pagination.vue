<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#"> < </a>
                </li>
                <li
                    v-for="page in pagination.lastPage"
                    class="page-item"
                    :key="page"
                >
                    <a class="page-link" href="#">{{ page }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#"> > </a>
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

<style scoped lang="scss"></style>
