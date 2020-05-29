<template>
    <nav class="red darken-4">
        <div class="nav-wrapper container">
            <a href="#" class="brand-logo">Tasks</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link
                    to="/"
                    tag="li"
                    active-class="active"
                exact>
                    <a href="#">Create</a>
                </router-link>
                <router-link
                    to="/list"
                    tag="li"
                    active-class="active"
                >
                    <a href="#">List</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>