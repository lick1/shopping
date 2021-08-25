<template>
  <div>
    <cart-nav-bar />
    <scroll
    class="conten"
    :probeType="3"
    >
      <cart-list></cart-list>
    </scroll>
      <cart-bottom-bar></cart-bottom-bar>

  </div>
</template>

<script>
  import CartNavBar from 'views/cart/childComps/CartNavBar.vue'

  import CartList from 'views/cart/childComps/CartList.vue'

  import CartBottomBar from 'views/cart/childComps/CartBottomBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  export default{
    name:'Cart',
    components:{
      CartNavBar,
      CartList,
      Scroll,
      CartBottomBar
    }
  }
</script>

<style scoped="scoped">
  .conten{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 99px;
    z-index: 1;
    overflow: hidden;
  }
</style>
