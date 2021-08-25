<template>
  <div class="cart-list-item">
    <div class="list-item-left">
      <btn-checked :is-show-checked="product.checked"
      @click.native = "checkedBtn"
      ></btn-checked>
    </div>
    <div class="item-img">
      <img :src="product.image">
    </div>
    <div class="list-item-ringht">
      <div class="item-title">
        {{product.title}}
      </div>
      <div class="item-description">商品描述:{{product.title}}</div>
      <div class="item-price">
        <div class="item-price-left">
          <span>￥{{product.price}}</span>
        </div>
        <div class="item-price-ring">
          <span class="num-change" @click="reduceCount">-</span>
          <span class="count">{{product.count}}</span>
          <span class="num-change" @click="addCount">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BtnChecked from 'components/common/btnChecked/BtnChecked.vue'
  export default {
    name: "CartListItem",
    components: {
      BtnChecked
    },
    props: {
      product: {
        type: Object,
        default: {}
      }
    },
    methods:{
      checkedBtn(){
        this.product.checked = !this.product.checked;
      },
      addCount(){
        this.product.count += 1;
      },
      reduceCount(){
        if(this.product.count > 1){
          this.product.count -= 1;
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .cart-list-item {
    height: 90px;
    display: flex;
    width: 100vw;
/*    justify-content: center;
    align-items: center; */
    padding: 10px 10px;
    box-sizing: content-box;
    border-bottom: 1px solid #333;
  }
  .list-item-left{
    margin: auto 0;
  }
  .item-img img {
    width: 60px;
    height: 90px;
    /* margin: 0 10px; */
    margin:0 10px;
    border-radius: 4px;
  }
  .list-item-ringht{
    width: 240px;
  }
  .item-title {
    font-size: 18px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-description{
    margin: 16px 0;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-price{
    display: flex;
    justify-content: space-between;
  }
  .item-price-left span{
    font-size: 18px;
    color: #f4632f;
  }
  .count{
    margin: 0 10px;
  }
  .num-change{
    padding: 6px;
    /* display: block; */
    background: #eee;
  }
</style>
