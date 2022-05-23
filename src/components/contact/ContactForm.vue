<template>
  <div class="container-fluid">
    <h1 class="title">تماس با من</h1>
    <div class="form-contact">
      <p class="form-contact__text">
        به راستی که ارتباط توی <a href="https://t.me/AminModaresii">تلگرام</a> و
        <a href="mailto:amin.modaresi82@yahoo.com">ایمیل</a> بهتر خواهد بود اما
        اگر به رسمی بودن شرایط اهمیت میدید، شاد باش میگم! این فرم برای همین
        اینجاست
      </p>
      <div class="row">
        <div class="col-lg-6">
          <img
            src="../../assets/images/contact/contact.png"
            class="w-100"
            alt=""
          />
        </div>
        <div class="col-lg-6">
          <div
            :class="{ active: this.name.isValid }"
            class="form-contact__input_group"
          >
            <input
              @blur="blurInput(name)"
              v-model.trim="name.value"
              type="text"
              class="form-control"
              placeholder="نام"
            />
            <p class="form-contact__text_alert">این فیلد را پر کنید</p>
          </div>
          <div
            :class="{ active: this.email.isValid }"
            class="form-contact__input_group"
          >
            <input
              @blur="blurInput(email)"
              v-model.trim="email.value"
              type="email"
              class="form-control"
              placeholder="ایمیل"
            />
            <p class="form-contact__text_alert">این فیلد را پر کنید</p>
          </div>
          <div
            :class="{ active: this.description.isValid }"
            class="form-contact__input_group"
          >
            <textarea
              @blur="blurInput(description)"
              v-model.trim="description.value"
              class="form-control resize-disable"
              placeholder="متن"
              cols="30"
              rows="10"
            ></textarea>
            <p class="form-contact__text_alert">این فیلد را پر کنید</p>
          </div>
          <button
            class="btn btn-primary"
            :disabled="disabledBtn"
            @click="submitForm()"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    disabledBtn: false,
    ErrorMessage: "",
    email: {
      value: "",
      isValid: false,
    },
    name: {
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
    async submitForm() {
      this.valid = true;
      this.ErrorMessage = "";
      if (
        this.email.value == "" ||
        !this.email.value.includes("@") ||
        !this.email.value.includes(".")
      ) {
        this.email.isValid = true;
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
        this.disabledBtn = true;
        const formData = new FormData();
        formData.append("email", this.email.value);
        formData.append("name", this.name.value);
        formData.append("description", this.description.value);
        try {
          await this.$store.dispatch("ContactData/postContact", formData);
        } catch (error) {
          this.ErrorMessage = error;
        }
        this.disabledBtn = false;

        if (!this.ErrorMessage) {
          this.email.value = "";
          this.name.value = "";
          this.description.value = "";
          this.$toast.success("با موفقیت ارسال شد", {
            position: "top",
          });
        } else {
          this.$toast.error(this.ErrorMessage, {
            position: "top",
          });
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/contact/contactForm.scss";
</style>