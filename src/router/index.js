import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

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
    }]
})
