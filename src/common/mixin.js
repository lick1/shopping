  import {debounce} from 'common/index.js'
  import BackTop from 'components/content/backTop/BackTop.vue';
export const itemImgListenerMixin = {
  data(){
    return {
      refresh:null
    }
  },
  mounted() {
    // debounce  防抖动
    this.refresh = debounce(this.$refs.scroll.refresh,200);
    this.itemImgListener = ()=>{
      this.refresh();

    }
    this.$bus.$on('itemImageLoad',this.itemImgListener);

  },
  deactivated() {
    this.$bus.$off('itemImageLoad',this.itemImgListener);
  }
}
export const showBackTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    lisntShowBackTop(position){
      this.isShowBackTop = (-position.y) > 1000;
    },
    backClick(){
       this.$refs.scroll.scrollTo(0,0);
    },
  }
}
