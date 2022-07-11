<template>
    <nav :class="{'d-none' : showMenu}" class="nav d-lg-block">
        <div class="container">
            <ul class="navbar-list">
                <li class="navbar-list__item">
                    <router-link @click="closeMobileMenu" to="/" exact-path class="navbar-list__link">درباره من</router-link>
                </li>
                <li class="navbar-list__item">
                    <router-link @click="closeMobileMenu" to="/skill" class="navbar-list__link">مهارت ها</router-link>
                </li>
                <li class="navbar-list__item">
                    <router-link @click="closeMobileMenu" to="/contact" class="navbar-list__link">تماس با من</router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    props : ["showMenu"],
    methods : {
        closeMobileMenu(){
            this.$emit("close-mobile-menu" , true)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/sass/layout/header.scss";
</style>