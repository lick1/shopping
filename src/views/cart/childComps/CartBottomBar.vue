<template>
  <div class="cart-bottom-bar">
    <div class="bottom-bar-left" :is-show-checked="isShow">
      <btn-checked />
      <span>全选</span>
    </div>
    <div class="bottom-bar-rigth">
      <span>合计</span>
      <span>￥{{sunCount}}</span>
      <span class="go-buy">去计算:({{nums}})</span>
    </div>
  </div>
</template>

<script>
  import BtnChecked from 'components/common/btnChecked/BtnChecked.vue';
  import {mapGetters} from 'vuex';
  export default{
    name:"CartBottomBar",
    components:{
      BtnChecked,
    },
    data(){
      return {
        sunCount:0,
        nums:0,
        isShow:false
      }
    },
    methods:{
      ...mapGetters({
        cartList:"cartList",
      }),
    }
  }
</script>

<style scoped="scoped">
  .cart-bottom-bar{
    height: 40px;
    width: 100vw;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 49px;
    line-height: 40px;
  }
  .bottom-bar-left{
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .bottom-bar-left span{
    margin-left: 10px;
  }
  .bottom-bar-rigth{
    display: flex;
  }
  .go-buy{
    margin-left: 14px;
    height: 40px;
    width: 100px;
    text-align: center;
    display: block;
    background: #f11a65;
    color: #fff;
  }
</style>
