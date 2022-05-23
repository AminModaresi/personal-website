<template>
  <div class="container-fluid" v-if="onload">
    <p class="title">نظری راجب من</p>
    <blockquote class="quote">
      <p class="quote__text">{{ showQuotation.description }}</p>
      <cite class="quote__member">~ {{ showQuotation.userName }}</cite>
      <div class="quote__sender">
        <span><span>همان </span>{{ showQuotation.name }}</span>
        <time datetime="2021-05-17T19:07:16.203841+00:00">۱۴۰۰/۲/۲۷</time>
        <button @click="showDialog = true" class="btn quote__btn">
          نقل‌قول تازه
        </button>
      </div>
      <font-awesome-icon class="quote__icon" icon="quote-left" />
    </blockquote>
  </div>
  <div class="container-fluid" v-else>
    <h5 class="mb-3">
      برای باز شدن اینجا <span class="text-blue">فیلترشکن</span> رو روشن کن.
    </h5>
    <h3 class="ant-skeleton mb-3 w-50"></h3>
    <ul class="list-unstyled">
      <li class="w-100 mb-3 ant-skeleton"></li>
      <li class="w-100 mb-3 ant-skeleton"></li>
      <li class="w-75 ant-skeleton"></li>
    </ul>
  </div>
  <teleport to="#app">
    <QuotationDialog @close-dialog="closeDialog" v-if="showDialog"/>
  </teleport>
</template>

<script>
import QuotationDialog from "./QuotationDialog.vue"
export default {
  components : {
    QuotationDialog
  },
  data: () => ({
    error: "",
    valid: true,
    onload: true,
    showDialog: false,
  }),

  methods: {
    async getQuotation() {
      this.onload = false;
      await this.$store.dispatch("HomeData/getQuotation");
      this.onload = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
  created() {
    this.getQuotation();
  },
  computed: {
    showQuotation() {
      return this.$store.getters["HomeData/showQuotation"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/home/quotation.scss";
</style>