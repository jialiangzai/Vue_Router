<template>
  <div>
    <button @click="logi">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    logi () {
      localStorage.setItem('author', Math.floor(Math.random() * 10))
      this.$router.push('/my')
    }
  }
}
</script>

<style scoped>
</style>
