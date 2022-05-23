<template>
  <base-dialog @close-dialog="closeDialog">
    <template #header>
      <h6>ارسال یک نقل‌قول تازه</h6>
    </template>
    <p class="dialog__text">
      اگر شعر، جمله، دیالوگ یا نوشته‌ای دیدی که از نظرت جالب بود، خیلی خوشحال
      میشم که با ما هم در میون بذاری <br />
      تلاش میکنم خیلی زود نوشته‌ات رو تایید کنم، پس از اون بالای بلاگم نشون داده
      میشه و همه کیف میکنیم از خوندنش
    </p>
    <div class="form-row mb-3">
      <input
        type="text"
        :class="{ isValid: userName.isValid }"
        class="form-control dialog__input"
        placeholder="گوینده"
        @blur="blurInput(userName)"
        v-model.trim="userName.value"
      />
      <p :class="{ 'd-none': !userName.isValid }" class="text-danger font-size">
        این فیلد الزامی است
      </p>
    </div>
    <div class="form-row mb-3">
      <input
        type="text"
        :class="{ isValid: name.isValid }"
        class="form-control dialog__input"
        @blur="blurInput(name)"
        placeholder="نام‌شما"
        v-model.trim="name.value"
      />
      <p :class="{ 'd-none': !name.isValid }" class="text-danger font-size">
        این فیلد الزامی است
      </p>
    </div>
    <div class="form-row mb-3">
      <input
        type="text"
        :class="{ isValid: link.isValid }"
        class="form-control dialog__input"
        placeholder="یک لینک از شما"
        v-model.trim="link.value"
      />
      <p :class="{ 'd-none': !link.isValid }" class="text-danger font-size">
        این فیلد الزامی است
      </p>
    </div>
    <div class="form-row mb-3">
      <textarea
        :class="{ isValid: description.isValid }"
        class="form-control dialog__input resize-disable"
        @blur="blurInput(description)"
        placeholder="متن‌شما"
        cols="10"
        rows="2"
        v-model.trim="description.value"
      ></textarea>
      <p
        :class="{ 'd-none': !description.isValid }"
        class="text-danger font-size"
      >
        این فیلد الزامی است
      </p>
    </div>
    <button class="btn btn-primary btn-sm" @click.prevent="submitForn()">
      ارسال
    </button>
  </base-dialog>
</template>
<script>
export default {
  data: () => ({
    valid : false,
    error: "",
    formData : "",
    userName: {
      value: "",
      isValid: false,
    },
    name: {
      value: "",
      isValid: false,
    },
    link: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  }),
  methods: {
    blurInput(value) {
      value.isValid = false;
    },
    async submitForn() {
      this.valid = true;
      if (this.userName.value == "") {
        this.userName.isValid = true;
        this.valid = false;
      }
      if (this.name.value == "") {
        this.name.isValid = true;
        this.valid = false;
      }
      if (this.description.value == "") {
        this.description.isValid = true;
        this.valid = false;
      }
      if (this.valid) {
        this.formData = {
            'userName' : this.userName.value,
            'name' : this.name.value,
            'link' : this.link.value,
            'description' : this.description.value
        }
        try {
          await this.$store.dispatch("HomeData/postQuotation", this.formData);
          this.$toast.success("با موفقیت ارسال شد", {
            position: "top",
          });
        } catch (error) {
          this.error = error;
          this.$toast.error("دوباره تلاش کن شاید شد :(", {
            position: "top",
          });
        }
        if (this.error == "") {
          this.closeDialog()
          this.description.value = "";
          this.name.value = "";
          this.link.value = "";
          this.userName.value = "";
          await this.$store.dispatch("HomeData/getQuotation");
        } else {
          this.$toast.error("دوباره تلاش کنید :(", {
            position: "top",
          });
        }
      }
    },
    closeDialog() {
      this.$emit("close-dialog" , false)
    },
  },
};
</script>