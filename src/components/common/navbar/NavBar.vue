<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="nav-left"></slot>
    </div>
    <div class="content">
      <slot name="nav-content"></slot>
    </div>
    <div class="right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    name:"NavBar",
  }
</script>

<style>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
  }
  .nav-bar .left{
    width: 60px;

  }
  .content{
    flex: 1;
  }
  .nav-bar .right{
    width: 60px;
  }
</style>
