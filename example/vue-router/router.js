import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const RoutedComponent = Vue.component('RoutedComponent', {
  render (h) {
    return (
      <p>Routed Vue Component!</p>
    )
  }
})

export const router = new VueRouter({
  mode: 'hash',
  routes: [
    {name: 'hello-vue', path: '/vue-routed', component: RoutedComponent}
  ]
})
