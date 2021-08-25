<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-item-left content">
        <div class="sells-count">{{shop.cSells}}</div>
        <div class="sells-text">总销量</div>
      </div>
      <div class="shop-goods content">
        <div class="sells-count">{{shop.cGoods}}</div>
        <div class="sells-text">宝贝</div>
      </div>
      <div class="shop-item-right">
        <table>
          <tr v-for="(item,index) in shop.score">
            <td>{{item.name}}</td>
            <td :style="{color:(item.isBetter == true?'rgb(246, 86, 62)':'rgb(136, 165, 88)')}">{{item.score}}</td>
            <td class="better" v-if="!item.isBetter" style="background: rgb(136, 165, 88);">低</td>
            <td class="better" v-else style="background: rgb(246, 86, 62);">高</td>
          </tr>
        </table>

      </div>

    </div>
    <div class="shop-item-bottom">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"ShopInfo",
    props:{
      shop:{
        type:Object,
        default:{}
      }
    },
    data(){
      return {

      }
    },
    created(){
    },
    computed:{
      // this.sells()
    },
    methods:{
      //
    }
  }
</script>

<style scoped="scoped">
  .shop-info{
    margin-top: 10px;
    padding: 0 10px;
    border-bottom: 5px solid #e3e3e3;
  }
  .shop-logo{
    display: flex;
    align-items: center;
  }
  .shop-logo img{
    width: 6.25rem;
    margin-right: 15px;
  }
  .shop-logo span{
    color: #333;
    font-size: 1.5rem;
  }
  .shop-middle{
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #333;
  }
  .sells-count{
    font-size: 1.375rem;
    margin-bottom: 4px;
  }
  .shop-item-right{
    flex: 2;
    text-align: center;
  }
  .content{
    flex: 1;
    text-align: center;
  }
  .sells-text{
    font-size: 18px;
  }
  table tr td{
    padding-right: 6px;
    padding-top:6px;
    text-align: center;
  }
  .better{
    padding: 3px;
    color: #fff;

  }
  .shop-item-bottom{
    height: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .shop-item-bottom div{
    height: 2.5rem;
    width: 150px;
    background: #f2f5fc;
    font-size: 18px;
    color: #000;
    line-height: 2.5rem;
    text-align: center;
  }
</style>
