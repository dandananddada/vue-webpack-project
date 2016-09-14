import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Layout from './view/layout.vue'
import Hello  from './view/hello.vue' 
import Bye    from './view/bye.vue' 


Vue.use(Router)
Vue.use(VueResource);

var router = new Router()

router.map({
  '/hello/:name': {
    component: Hello
  },
  '/bye/:name':{
    component: Bye
  }
})

router.start(Layout, '#app')