<template>
  <div class="py-5 base">
    <TheNavbar @close-mobile-menu="closeMobileMenu" :show-menu="showMenuMobile"/>
    <section class="container">
      <div class="body container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <TheSidebar/>
          </div>
          <div class="col-lg-9">
            <main>
              <router-view></router-view>
            </main>
          </div>
        </div>
      </div>
    </section>
    <div :class="{'active' : !showMenuMobile}" @click="showMenuMobile = !showMenuMobile" class="d-lg-none d-block mobile-mene__btn">
      <span class="mobile-mene__btn_text">منو</span>
      <span class="mobile-mene__btn_close"></span>
      <span class="mobile-mene__btn_close"></span>
    </div>
  </div>
</template>
<script>
import TheNavbar from "./components/layout/TheNavbar.vue"
import TheSidebar from "./components/layout/TheSidebar.vue"
export default {
  data : () => ({
    showMenuMobile : true, 
  }),
  components : {
    TheNavbar,
    TheSidebar
  },
  methods :{
    closeMobileMenu(val){
      this.showMenuMobile = val
    },
    darkMode(){
      let body = document.querySelector("#app")
      body.classList.add("dark")
    }
  },
  mounted() {
      // this.darkMode()
  }
};
</script>
<style lang="scss">
@import "./assets/sass/app.scss";
@import "./assets/sass/grid.scss";
</style>
