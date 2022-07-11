<template>
  <div class="container-fluid mt-5">
    <p class="title">توییتر</p>
    <div class="social-media">
      <div class="row">
        <div class="mb-3 mb-md-0 col-md-4" v-for="(tweet , idx) in tweets" :key="idx">
          <SocialMediaItem :tweet="tweet"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialMediaItem from "./SocialMediaItem.vue"
export default {
    components : {
        SocialMediaItem
    },
    data : () => ({
        tweets : [
            {url : 'https://twitter.com/Amin_MT_/status/1514601656863760384' , image : require('../../assets/images/social/jIhNT49o_bigger.jpg') , user : 'Amin Modaresi (@Amin_MT_)' , text : 'من خُلم یا این‌همه خلق بی خبر؟' , date : "Apr 14, 2022"},
            {url : 'https://twitter.com/Amin_MT_/status/1541296965673156615' , image : require('../../assets/images/social/jIhNT49o_bigger.jpg') , user : 'Amin Modaresi (@Amin_MT_)' , text : 'جهانِ دروغِ شما چقد قشنگه' , date : "Jun 27, 2022"},
            {url : 'https://twitter.com/Amin_MT_/status/1528592231841636355' , image : require('../../assets/images/social/jIhNT49o_bigger.jpg') , user : 'Amin Modaresi (@Amin_MT_)' , text : 'زندگی خاطراتی از ماست که خالیه .' , date : "May 23, 2022"}
        ]
    })
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/home/social-media.scss";
</style>