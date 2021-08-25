<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">￥{{goods.reaPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span>
    </div>
     <div class="info-other">
       <span>{{goods.columns[0]}}</span>
       <span>{{goods.columns[1]}}</span>
       <span>{{goods.services[goods.services.length - 1].name}}</span>
     </div>
     <div class="info-service">
       <div v-for="index in goods.services.length - 1" v-if="index !== 1">
         <img :src="goods.services[index - 1].icon" >
         <span>{{goods.services[index - 1].name}}</span>
       </div>
     </div>
  </div>
</template>

<script>
  export default{
    name:'BaseInfo',
    props:{
      goods:{
        type:Object,
        default:{}
      }
    },

  }
</script>

<style scoped="scoped">
  .base-info{
    margin-top: 20px;
    padding: 0 10px;
  }
  .info-title{
    color: #222222;
  }
  .info-price{
    margin-top: 10px;
  }
  .new-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .old-price{
    font-size: 14px;
    margin-left: 10px;
    text-decoration: line-through;
    color: #999;
  }
  .discount{
    margin-left: 10px;
    background: #ff6981;
    color: #fff;
    padding: 2px 6px;
    font-size: 16px;
    border-radius: 8px;
  }
  .info-other{
    margin-top: 20px;
    font-size: 0.875rem;
    color: #999;
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .info-service{
    font-size: 14px;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22px;
  }
  .info-service img{
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
  .info-service div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
