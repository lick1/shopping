<template>
  <div class="bottom-bar">
    <div class="bav service">
      <div class="bav-img">
        <img src="~assets/img/detail/detail_bottom.png" >
      </div>
      <div>客服</div>
    </div>
    <div class="bav store">
      <div class="bav-img">
        <img src="~assets/img/detail/detail_bottom.png" >
      </div>
      <div>店铺</div>
    </div>
    <div class="bav collect">
      <div class="bav-img">
        <img src="~assets/img/detail/detail_bottom.png" >
      </div>
      <div>收藏</div>
    </div>
    <div class="shopping-cart" @click="shopCart">
      购物车
    </div>
    <div class="buy">
      购买
    </div>
  </div>
</template>

<script>
  export default{
    name:"DetailBottomBar",
    methods:{
      shopCart(){
        this.$emit('shopCart')
      }
    }
  }
</script>

<style scoped="scoped">
  .bottom-bar{
    width: 100vw;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
  }
  .bav-img{
    width: 22px;
    height: 22px;
    overflow: hidden;
    margin-left: 4px;
  }
  .bottom-bar img{
    width: 22px;
  }
  .service img{
    transform: translateY(-54px);
  }
  .store img{
    transform: translateY(-100px);
  }
  .bav{
    margin-left: 0.625rem;
    flex: 1;
    font-size: 14px;
  }
  .shopping-cart{
    height: 100%;
    width: 85px;
    line-height: 49px;
    background: #f7d103;
    text-align: center;
    color: #333;
    font-size: 18px;
  }
  .buy{
    width: 85px;
    height: 100%;
    background-color: #f40943;
    color: #fff;
    line-height: 49px;
    text-align: center;
    font-size: 18px;
  }
</style>
