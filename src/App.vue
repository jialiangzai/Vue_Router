<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">首页</router-link>
      <!-- <router-link to="/about">关于</router-link> -->
      <!-- query传参 -->
      <router-link to="/found">发现音乐</router-link>
      <router-link to="/about?id=16&&name=dijia">关于</router-link>
      <!-- params传参 也可以是查询字符串但是是对象形式必须name这样不会显示数据在url中   否则会被误认为是路径，显示在路径中 -->
      <router-link :to="{ name: 'marrage', params: { a: 18, b: '未婚' } }"
        >联系</router-link
      >
      <router-link to="/my">我的音乐</router-link>
    </div>
    <hr />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.menu {
  background-color: crimson;
  display: flex;
  a {
    margin: 15px;
    color: #fff;
    text-decoration: none;
    // 类似伪元素选择器，必须用less的&语法
    &:hover,
    &.router-link-exact-active {
      color: skyblue;
    }
  }
}
.content {
  width: 660px;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid #ddd;
}
</style>
