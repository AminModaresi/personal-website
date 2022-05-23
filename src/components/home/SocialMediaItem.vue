<template>
  <a class="social-media_item" :href="tweet.url">
    <blockquote class="twitter-tweet">
      <div class="d-flex align-items-center mb-2">
        <img class="twitter-tweet_image" :src="tweet.image" />
        <span class="twitter-tweet_user">{{ tweet.user }}</span>
      </div>
      <p class="twitter-tweet_text">{{ tweet.text }}</p>
      <span class="twitter-tweet_date">{{ tweet.date }}</span>
    </blockquote>
  </a>
</template>
<script>
export default {
    props : ["tweet"]
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/home/social-media.scss";
</style>