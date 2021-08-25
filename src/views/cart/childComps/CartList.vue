<template>
  <div class="cart-list">
    <cart-list-item
     v-for="(item,index) in cartList"
     :key="index"
      :product="item"/>
  </div>
</template>

<script>
  import CartListItem from 'views/cart/childComps/CartListItem.vue'
  import {mapGetters} from 'vuex';
  export default{
    name:"CartList",
    components:{
      CartListItem,
    },
    computed:{
      ...mapGetters({
        cartList:"cartList",
      })
    }
  }
</script>

<style>
</style>
