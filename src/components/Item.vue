
<!-- Item.vue -->
<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性类型是boolean
      //   required:true, //约束该属性必须要传递
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("active");
    },
  },
};
</script>

<style scoped>
.active {
  background: #e7e7e7;
}
.item:hover {
  background-color: #f4f4f4;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}
</style>  
