<template>
  <div class="comment-info" >
    <div class="info-header">
      <div class="header-title">用户评论</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user" v-if="Object.keys(rate).length !== 0">
      <img :src="rate.user.avatar" alt="">
      <span>{{rate.user.uname}}</span>
    </div>
    <div class="info-detail" v-if="Object.keys(rate).length !== 0">
      {{rate.content}}
    </div>
    <div class="info-other" v-if="Object.keys(rate).length !== 0">
        <span class="date">{{rate.created | showDate}}</span>
        <span>{{rate.style}}</span>
    </div>
    <div class="info-img" v-if="Object.keys(rate).length !== 0">
      <img :src="item" v-for="item in rate.images">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils.js"
  export default{
    name:"DetailCommentInfo",
    props:{
      rate:{
        type:Object,
        default:{}
      }
    },
    // 过滤器
    filters:{
      showDate(value){
        const date = new Date(value * 1000);

        return formatDate(date,'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
</script>

<style scoped="scoped">
  .comment-info{
    padding: 0 10px;
    padding-bottom: 15px;
    border-bottom: 2px solid #ccc;
  }
  .info-header{
    display: flex;
    justify-content: space-between;
    line-height: 52px;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
  }
  .header-more{
    position: relative;
    padding-right: 20px;
  }
  .header-more::after{
    content: '';
    width: 14px;
    height: 14px;
    display: block;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    transform: rotate(-45deg);
    position: absolute;
    right: 8px;
    bottom: 18px;
  }
  .info-user{
    margin: 15px 0;
  }
  .info-user img{
    width: 70px;
    vertical-align: middle;
    margin-right: 15px;
  }
  .info-user  span{
    font-size: 24px;
  }
  .info-detail{
    color: #333;
  }
  .info-other{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .info-img {
    margin-top: 10px;
  }
  .info-img img{
    height: 70px;
    margin-left: 10px;
  }
</style>
