<template>
    <article class="about-me__item">
        <img class="about-me__item_icon" :src="img" alt="">
        <h6 class="about-me__item_title">{{ title }}</h6>
        <p class="about-me__item_text">{{ text }}</p>
    </article>
</template>

<script>
export default {
    props : ["img" , "title" , "text"]
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/home/aboutMe.scss";
</style>