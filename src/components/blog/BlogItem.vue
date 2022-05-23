<template>
  <router-link to="d" class="blog-item">
    <img
      :src="images"
      class="blog-item__img"
    />
    <div>
      <p class="blog-item__title">
        {{ title }}
      </p>
      <p class="blog-item__text">
          {{ excerpt }}
      </p>
      <div class="blog-item__tags">
        <a href="#" class="blog-item__tags_item" v-for="(tag , idx) in tags" :key="idx">
            # {{ tag }}
        </a>
      </div>
    </div>
  </router-link>
</template>
<script>

export default {
    props : ['title' , 'tags' , 'excerpt' , 'img'],
    computed : {
      images(){
        return require(`../../${this.img}`);
      }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/blog/blogItem.scss"
</style>