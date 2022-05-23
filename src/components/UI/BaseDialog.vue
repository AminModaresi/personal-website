<template>
  <div class="bg-dark" @click="closeDialog()"></div>
  <dialog class="dialog" open>
    <header class="dialog__header" @click="closeDialog()">
      <slot name="header"></slot>
      <unicon
        width="20"
        name="multiply"
        fill="red"
        icon-style="thinline"
      ></unicon>
    </header>
    <div class="dialog__body">
      <slot></slot>
    </div>
  </dialog>
</template>

<script>
export default {
    emits : ["close-dialog"],
    methods : {
        closeDialog(){
            this.$emit("close-dialog" , false)
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-dark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.3;
  z-index: 998;
}
.dialog {
  background-color: #fff;
  width: 30rem;
  margin: 0 auto;
  position: fixed;
  top: 3rem;
  z-index: 999;
  border: 1px solid #ccc;
  border-radius: 00.5rem;
  &__header {
    padding: 0.8rem 0.5rem;
    border-bottom: 1px solid #ccc;
    position: relative;
        display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__body {
    padding: 0.7rem 1rem;
  } 
}
.unicon {
    top: 0.6rem;
    left: 1rem;
  position: absolute;
  cursor: pointer;
}
@media (max-width: 575.98px) { 
  .dialog {
    width: 90%;
  }
}
</style>