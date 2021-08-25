<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="nav-content">购物街</div>
    </nav-bar>
    <tab-control @tabClick="tabClick" class="tab-control controlTab"
     :titles="['流行', '新款', '精选']"
     ref="topControl" v-show="isControlShow"/>
    <scroll class="content"
            :probeType="3"
            :pullUpLoad="true"
            @scroll="scrollPosition"
            @pullingUp="loadMove"
            ref="scroll">
      <!-- banner轮播图 -->
      <home-swiper class="home-swiper" :banner="banner" @swperLoad="imageSwperLoad"></home-swiper>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行 -->
      <fashion-view />
      <!-- 商品tab -->
      <tab-control @tabClick="tabClick"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      ref="controlTabTop"
      v-show="!isControlShow"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import HomeSwiper from 'views/home/childComps/HomeSwper.vue';
  import RecommendView from 'views/home/childComps/RecommendView.vue';

  import FashionView from 'views/home/childComps/FashionView.vue';
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue';

  import Scroll from 'components/common/scroll/Scroll.vue';


  import {debounce} from 'common/index.js';
  import {itemImgListenerMixin,showBackTopMixin} from 'common/mixin.js';
  import {
    getHomeMultidata,
    getHomeGoodsdata
  } from 'network/home.js';
  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isControlShow:false,
        scrollY:null
      }
    },
    mixins:[itemImgListenerMixin,showBackTopMixin],
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FashionView,
      TabControl,
      GoodsList,
      Scroll,
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoodsdata('pop');
      this.getHomeGoodsdata('new');
      this.getHomeGoodsdata('sell');


    },
    //计算属性
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
      //

    },
    mounted() {
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.scrollY,0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // console.log('home deactivated');
      this.scrollY = this.$refs.scroll.getScrollY();
    },
    // 方法
    methods: {

      /*
        事件
      */
     // 获取tab-control的offsetTop
     imageSwperLoad(){
        this.controlTop = this.$refs.controlTabTop.$el.offsetTop
     },
     // 加载更多商品
     loadMove(){
       this.getHomeGoodsdata(this.currentType);
       this.$refs.scroll.refresh();
     },
     // 回到顶部


     scrollPosition(position){
       // console.log(position.y);

      this.isControlShow = (-position.y) > this.controlTop;
      this.lisntShowBackTop(position);
     },
     // 点击tab获取下标对应的商品
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.topControl.currentIndex = index;
        this.$refs.controlTabTop.currentIndex = index;
      },
      /*
      数据请求
      数据存储
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // 获取banner图片数据
          this.banner = res.data.banner.list;

          this.recommends = res.data.recommend.list;
          // console.log(res.data);
        })
      },
      // 商品
      getHomeGoodsdata(type) {
        const page = this.goods[type].page + 1;
        getHomeGoodsdata(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      }
    },


  }
</script>

<style scoped="scoped">
  #home {
    height: 100vh;
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 19;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 1;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    z-index: 1;
    overflow: hidden;
  }
  .controlTab{
    z-index: 999;
  }
</style>
