<template>
  <div class="cart-nav-bar">
    <nav-bar class="cart-nav">
      <div slot="nav-content">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  import {mapGetters} from 'vuex';
  export default{
    name:'CartNavBat',
    components:{
      NavBar
    },
    computed:{
      ...mapGetters({
        length:"CartLength",
      })
    }
  }
</script>

<style scoped="scoped">
  .cart-nav{
    background: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
</style>
