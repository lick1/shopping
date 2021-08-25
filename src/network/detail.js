import {request} from "./request";

export function getDetailData(iid){
   return request({
     url:'detail',
     params:{
       iid
     }
   })
}
export function getRecommendData(){
  return request({
    url:"recommend"
  })
}
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.reaPrice = itemInfo.lowNowPrice;
  }
}
export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}
