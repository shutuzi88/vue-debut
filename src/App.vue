<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Mynav/>
    <!-- <List/> -->
    <!-- 下一行是放路由的位置 -->
    <router-view/>
  </div>
</template>

<script>
import Mynav from '@/components/Nav/Nav'

export default {
  name: 'App',
  components: {
    // List
    Mynav, 
  }
}
</script>

<style>
#app {
}
</style>
