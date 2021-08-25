import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import Category from '../views/category/Category.vue'
import Profile from '../views/profile/Profile.vue'

import Detail from '../views/detail/Detail.vue'
// 1.
Vue.use(VueRouter);
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
// 2创建router
let  router = new VueRouter({
  routes
})

export default router;
