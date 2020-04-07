import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', // 当你访问根路径的时候，其实我展示的是Helloworld这个组件---->就App.vue + router + HelloWorld.vue这么一层层连上了且这两个组件的内容共同构成了http://localhost/#的内容
      name: 'Home',
      component: Home
    },{
      path: '/city', // 当你访问根路径的时候，其实我展示的是Helloworld这个组件---->就App.vue + router + HelloWorld.vue这么一层层连上了且这两个组件的内容共同构成了http://localhost/#的内容
      name: 'City',
      component: City
    },{
      path: '/detail/:id', // 当你访问根路径的时候，其实我展示的是Helloworld这个组件---->就App.vue + router + HelloWorld.vue这么一层层连上了且这两个组件的内容共同构成了http://localhost/#的内容
      name: 'Detail',
      component: Detail
    }],
    //消除页面间的滚动影响，每次重新进入新页面的时候就默认从顶部x,y轴为0的地方开始
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
