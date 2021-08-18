<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
var map = {
  arrowUp: "icon-jiantou9",
  arrowDown: "icon-shangjiantou",
  search: "icon-search",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2745060_oxy9jvf5yxi.css";
</style>