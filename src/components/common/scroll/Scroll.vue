<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:false
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.initBscroll()
        // console.log(this.scroll);

    },
    methods:{
      initBscroll(){
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position);
        })
        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
          })
        }
      },
      refresh(){
        this.scroll && this.scroll.refresh();
      },
      scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      getScrollY(){
       return this.scroll ? this.scroll.y : 0;
      }

    }
}
</script>

<style scoped>
</style>>
