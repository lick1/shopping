<template>
  <div class="detail-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="nav-left" class="nav-left" @click="backClick"></div>
      <div slot="nav-content" class="title">
        <div v-for="(item,index) in itemTitles" :class="{current:isCurrent == index}" class="item-title" @click="titleClick(index)">{{item}}</div>
      </div>
     
    </nav-bar >
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  export default{
    name:'DetailNavBar',
    data(){
      return {
        itemTitles:['商品','参数','评论','推荐'],
        isCurrent:0,
      }
    },
    components:{
      NavBar,
    },
    methods:{
      titleClick(index){
        this.isCurrent = index;
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-nav-bar{
    background: #fff;
  }
  .title{
    display: flex;
  }
  .item-title{
    flex: 1;
    font-size: 14px;
  }
  .current{
    color: var(--color-tint);
  }
  .nav-left{
    height: 100%;
    position: relative;
  }
  .nav-left::after{
    content: '';
    width: 14px;
    height: 14px;
    /* background: pink; */
    display: block;
    border-left: 2px solid #666;
    border-top: 2px solid #666;
    transform: rotate(-45deg);
    position: absolute;
    top: 15px;
    left: 20px;
  }
</style>
