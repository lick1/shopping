<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNav"></detail-nav-bar>
    <scroll class="content"
    :probeType="3"
    @scroll="scrollPosition"
    ref="scroll">
      <detail-swiper :banners="topImage" @bannerLoad="bannerLoad" />
      <base-info :goods="goods" />
      <shop-info :shop="shop" />
      <goods-info :detailInfo="detailInfo" @infoImgLoad="infoImgLoad"/>
      <param-info :paramsInfo="itemParams" ref="param" />
      <detail-comment-info :rate="rate" ref="detail" />
      <goods-list :goods="showGoods" ref="recommend" />
    </scroll>
    <detail-bottom-bar @shopCart="addCart"/>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from 'views/detail/childComps/DetailNavBar.vue';
  import DetailSwiper from 'views/detail/childComps/DetailSwiper.vue';

  import BaseInfo from 'views/detail/childComps/BaseInfo.vue';
  import ShopInfo from 'views/detail/childComps/ShopInfo.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';


  import GoodsInfo from 'views/detail/childComps/GoodsInfo.vue';
  import ParamInfo from 'views/detail/childComps/ParamInfo.vue';
  import DetailCommentInfo from 'views/detail/childComps/DetailCommentInfo.vue';

  import DetailBottomBar from 'views/detail/childComps/DetailBottomBar.vue';

  import GoodsList from 'components/content/goods/GoodsList.vue';

  import {itemImgListenerMixin,showBackTopMixin} from 'common/mixin.js';
  import {
    debounce
  } from 'common/index.js'
  import {
    getDetailData,
    getRecommendData,
    Goods,
    Shop
  } from "network/detail.js"
  export default {
    name: "Detail",
    data() {
      return {
        goods: {},
        topImage: [],
        iid: null,
        shop: {},
        detailInfo: {},
        itemParams:{},
        rate:{},
        showGoods:[],
        itemImgListener:null,
        themeTopYs:[],
        currIndex:null
      }
    },
    mixins:[itemImgListenerMixin,showBackTopMixin],
    components: {
      DetailNavBar,
      DetailSwiper,
      BaseInfo,
      ShopInfo,
      Scroll,
      GoodsInfo,
      ParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.根据iid请求详情数据
      getDetailData(this.iid).then(res => {
        let result = res.result;

        // 1.获取顶部的图片轮播数据
        this.topImage = result.itemInfo.topImages;

        // 商品详情
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
        // 店铺
        this.shop = new Shop(result.shopInfo);
        this.shopInfo();
        //尺码说明
        this.detailInfo = result.detailInfo
        // 产品参数
        this.itemParams = result.itemParams;

        //  获取评论信息
        if(result.rate.cRate !== 0){
          this.rate = result.rate.list[0];
        }

      })

      // 获取推荐信息
      getRecommendData().then(res=>{
        this.showGoods = res.data.list
      })
      this.getThemeTopYs = debounce(()=>{
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.detail.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      },100);
    },
    deactivated(){
    },
    mounted() {
    },
    methods: {
      // swiper图片加载
      bannerLoad() {
        this.refresh()
      },
      shopInfo() {
        if (this.shop.cSells > 10000) {
          this.shop.cSells = (this.shop.cSells / 10000).toFixed(1) + '万';
        }
      },
      // 详情图片加载完成后，scroll刷新
      infoImgLoad(){
        this.refresh();
        this.getThemeTopYs();
      },
      // top点击对应的坐标
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
      },
      // 获取滑动的坐标
      scrollPosition(position){
        this.lisntShowBackTop(position);
        for(let i = 0;i < this.themeTopYs.length;i++){
          if(this.currIndex !== i && ( this.themeTopYs[i] <= - position.y && (this.themeTopYs[i + 1] > - position.y || (i + 1) >= this.themeTopYs.length))){
            this.currIndex = i;
            this.$refs.detailNav.isCurrent = this.currIndex;
          }
        }
      },

      // 添加购物车
      addCart(){
        // console.log('----');
        const product = {};

        product.image = this.topImage[0];
        product.iid = this.iid;
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.reaPrice;
        console.log(product);
        this.$store.dispatch('addCart',product)
      }
    }
  }
</script>

<style scoped="scoped">
  #detail {
    height: 100vh;
    background: #fff;
    position: relative;
    z-index: 1;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
