<template>
  <div class="child">
    <h1>发现音乐</h1>
    <div class="menus">
      <router-link to="/found">推荐</router-link>
      <router-link to="/found/top">排行榜</router-link>
      <router-link to="/found/song">歌单</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.child {
  padding: 10px;
  border: 1px solid red;
}
.menus {
  display: flex;
  border: 1px solid #ddd;
  a {
    margin: 10px;
  }
}
</style>
