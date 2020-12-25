<template>
  <div id="app">
    <Header/>
    <Mynav/>
    <!-- <List/> -->
    <!-- 下一行是放路由的位置 -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Mynav from '@/components/Nav/Nav'

export default {
  name: 'App',
  components: {
    Header,
    Mynav, 
  }
}
</script>

<style>
#app {
}
</style>
