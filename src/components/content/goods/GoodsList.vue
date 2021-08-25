<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default{
    name:"GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped="scoped">
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.625vw;
  }
</style>
