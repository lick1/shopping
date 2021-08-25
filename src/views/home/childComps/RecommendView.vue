<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" >
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped="scoped">
  .recommends{
    padding-top: 10px;
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;
  }
  .recommends .recommends-item{
    flex: 1;
  }
  .recommends-item img{
    width: 80%;
    height: 80%;
    padding-bottom: 10px;
  }
</style>
