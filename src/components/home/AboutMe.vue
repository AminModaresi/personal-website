<template>
  <div class="container-fluid mt-5">
    <p class="title">درباره‌ی من</p>
    <section class="about-me">
      <p class="about-me__text">
        من امین مدرسی هستم ، توسعه دهنده فرانت‌اند ، در شرکت <a class="text-blue" href="https://paykan.ir">پیکان</a> مشغول به کار هستم <br class="d-none d-lg-block"> در تلاش برای موفق شدن یا شاید تلاش برای غرق نشدن . <br class="d-none d-lg-block">
        تفریح من سه‌تار نوازی و دوچرخه سواری هستش (برای بقیه خیلی مهمه &#128516;) . با خودم میگم شاید بتونم با دوچرخه سواری به مادر طبیعت کمک کنم و مادر طبیعت هم به من کمک کنه  &#127793;.  <br class="d-none d-lg-block">
        عاشق حیوانات &#128021; و کمک کردن به اون ها . خلاصه که زندگی میکنم و به زندگی لبخند میزنم &#128522;
      </p>
      <div class="row">
          <div class="col-md-4 mb-4" v-for="(item , idx) in AboutItemData" :key="idx" >
              <AboutItem :title="item.title" :text="item.text" :img="item.img"/>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutItem from "./AboutItem.vue"
export default {
    components : {
        AboutItem
    },
    data : () => ({
        AboutItemData : [
            {title : "کافئین دوست" , text : "دوست‌دار قهوه‌ی سر صبحی" , img : require("../../assets/images/home/aboutIcon/coffee.png")},
            {title : "دانشجوی تاره وارد" , text : "با هیچ سابقه خاصی" , img : require("../../assets/images/home/aboutIcon/graduation.png")},
            {title : "زاده‌ی مشهد" , text : "سرزمین بیخود" , img : require("../../assets/images/home/aboutIcon/location.png")},
            {title : "پروردگار خجالتی" , text : "کم صحبت در جمع" , img : require("../../assets/images/home/aboutIcon/meeting.png")},
            {title : "دوچرخه سوار" , text : "دوست‌دار دوچرخه سواران" , img : require("../../assets/images/home/aboutIcon/motorcycle.png")},
            {title : "خودآموز" , text : "با‌تشکر از w3schools" , img : require("../../assets/images/home/aboutIcon/web.png")},
        ]
    })
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/home/aboutMe.scss";
</style>