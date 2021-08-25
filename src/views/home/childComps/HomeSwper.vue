<template>
  <div>
    <swiper class="home-swiper">
      <swiper-item v-for="(item,index) in banner">
        <a href="">
          <img :src="item.image" @load="swperLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper/index.js';
  export default{
    props:{
      banner:[]
    },
    data(){
      return {
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swperLoad(){
        if(!this.isLoad){
          this.$emit('swperLoad');
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style>
</style>
