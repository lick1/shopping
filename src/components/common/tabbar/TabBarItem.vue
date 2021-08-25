<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    props:{
      path:String
    },
    data(){
      return {
      }
    },
    //计算属性
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1;
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
    vertical-align: middle;
  }
  .tab-bar-item img{
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }
  .active{
    color: red;
  }
</style>
