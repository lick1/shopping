<template>
  <div class="btn-checked">
    <div class="checked-btn">
      <div :class="{showchecked:isShowChecked}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'BtnChecked',
    props:{
      isShowChecked:{
        type:Boolean,
        default:false
      }
    },
  }
</script>

<style scoped="scoped">
  .checked-btn{
    width: 22px;
    height: 22px;
    background: #FFF;
    border: 1px solid #666;
    border-radius: 50%;
  }
  .showchecked{
    width: 8px;
    height: 14px;
    border-bottom: 2px solid  #ea311d;
    border-right: 2px solid  #ea311d;
    transform:translate(6px,2px) rotate(45deg);
  }
</style>
