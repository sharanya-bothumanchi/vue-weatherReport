import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CityWeather from '@/components/cityWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/city/:cityName',
      name: 'CityWeather',
      component: CityWeather,
    },
  ]
})
