<template>
  <div>
    <router-link to="/">找不到路了吧，我带你回家！</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped >
 a {
    text-decoration: none;
    // 类似伪元素选择器，必须用less的&语法
    &:hover,
    &.router-link-exact-active {
      color:skyblue;;
    }
  }
</style>
