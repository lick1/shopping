<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">{{detailInfo.desc}}</div>
    <div v-for="(item,index) in detailInfo.detailImage">
      <div class="info-key">{{item.key}}</div>
      <div class="info-img">
        <img v-for="list in item.list" alt="" :src="list" @load="infoImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"GoodsInfo",
    props:{
      detailInfo:{
        type:Object,
        default:{}
      }
    },
    methods:{
      infoImgLoad(){
        this.$emit('infoImgLoad')
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-goods-info{
    padding: 0 10px;
    margin-top: 20px;
  }
  .desc{
    padding-top: 14px;
    padding-bottom: 6px;
    position: relative;
  }
  .desc::after{
    content: '';
    width: 80px;
    height: 6px;
    display: block;
    border-left: 6px solid #333;
    border-bottom: 1px solid #999;

    position: absolute;
    top: 0;
    left: 0;
  }
  .desc::before{
    content: '';
    width: 80px;
    height: 6px;
    display: block;
    border-right: 6px solid #333;
    border-bottom: 1px solid #999;

    position: absolute;
    right: 0;
    bottom: 0;
  }
  .info-key{
    font-size: 18px;
    color: #666;
    padding: 20px 0;
  }
  .info-img img{
    width: 100%;
  }
</style>
