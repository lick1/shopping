<template>
  <div class="goods-item" @click="getGoodsId">
    <img :src="showImg" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default:{}
      }
    },
    data(){
      return {
        iid:null
      }
    },
    computed:{
      showImg(){
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      getGoodsId(){
        // console.log(this.goodsItem.iid);
        this.iid = this.goodsItem.iid;
        // console.log(this.iid);
        this.$router.push(`/detail/${this.iid}`) ;
      }
    }
  }
</script>

<style>
  .goods-item{
    width: 48%;
    padding-bottom: 12.5vw;
    position: relative;
    text-align: center;
  }
  .goods-item img{
    width: 100%;
    border-radius: 4%;
  }
  .goods-info{
    position: absolute;
    bottom: 1.5625vw;
    left: 0;
    right: 0;
    font-size: 3.75vw;
    overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .9375vw;
  }
  .price{
    color: var(--color-tint);
    padding-right: 12px;
  }
  .cfav{
    position: relative;
    padding-left: 12px;
  }
  .goods-info .cfav::before {
    content: '';
    position: absolute;
    left: -6px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
