<template>
  <div>
    <h1>联系</h1>
    <button @click="homeFn">跳转到首页</button>
    <button @click="movieFn">电影</button>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.params)
  },
  methods: {
    homeFn () {
      this.$router.push('/home')
      this.$router.go(0)
      // push有历史记录，能通过back / go跳转  go(n) 是back(n) forward（n）功能结合
      // replace替换上次跳转页面的记录，不能通过back / go跳转
    },
    movieFn () {
      this.$router.push({
        path: '/about',
        query: {
          movie: '长津湖'
        }

      })
      this.$nextTick(localStorage.setItem('da', JSON.stringify(this.$route.query)))
    }
  }
}
</script>

<style scoped>
</style>
