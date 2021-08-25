<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="params-size">
      <div class="content">{{paramsInfo.rule.key}}</div>
      <table class="info-size">
        <tr v-for="(item,index) in paramsInfo.rule.tables[0]">
          <td v-for="size in item">{{size}}</td>
         </tr>
      </table>
    </div>
    <div class="info-param">
      <div class="content">{{paramsInfo.info.key}}</div>
        <table >
          <tr v-for="(item,index) in paramsInfo.info.set">
            <td class="info-param-key">{{item.key}}</td>
            <td class="param-set-value">{{item.value}}</td>
           </tr>
        </table>
    </div>
  </div>
</template>

<script>
  export default{
    name:"ParamInfo",
    props:{
      paramsInfo:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped="scoped">
  .param-info{
    padding: 0 10px;
    padding-bottom: 20px;
    border-bottom: 3px solid #dcdcdc;
  }
  .content{
    text-align: center;
    font-size: 20px;
    margin: 10px 0;
  }
  .info-size{
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  .info-size tr{
    height: 40px;
    border-bottom: 1px solid #999;
  }
  .info-param table{
    border-collapse: collapse;
  }
  .info-param tr{
    height: 44px;
    border-bottom: 1px solid #eee;
  }
  .info-param-key{
    padding-left: 10px;
    width: 65px;
  }
  .param-set-value{
    padding-left: 20px;
    color: #f49caf;
  }
</style>
