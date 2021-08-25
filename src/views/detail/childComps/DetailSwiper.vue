<template>
  <div class="detail-swiper" v-if="Object.keys(banners).length !== 0">
    <swiper class="ds-swiper">
      <swiper-item v-for="(item,index) in banners">
        <img :src="item" alt="" @load="detailImgLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js';
  export default{
    name:"DetailSwiper",
    props:{
      banners:{
        type:Array,
        default:[]
      }
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
      detailImgLoad(){
        if(!this.isLoad){
          this.isLoad = true;
          this.$emit("bannerLoad")
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .ds-swiper{
    height: 300px;
  }
</style>
