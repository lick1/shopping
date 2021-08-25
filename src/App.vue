<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTab from './components/content/maintab/MainTab.vue';
export default {
  name: 'App',
  components:{
    MainTab
  }
}
</script>

<style scoped="scoped">
	@import url("assets/css/base.css");
</style>
