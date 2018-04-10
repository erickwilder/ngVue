import angular from 'angular'
import uiRouter from '@uirouter/angularjs'
import Vue from 'vue'
import '../../src/index.js'
import '../../src/plugins'

import { router } from './router'

const ngHello = {
  // AngularJS wrapper to our Vue component.
  template: `
    <div>
      <p>A simple routed AngularJS component</p>

      <hr />
      <vue-component name="VueRoot"></vue-component>
    <div>
  `
}

const ngPure = {
  template: '<p>Pure AngularJS component. No VueJS here.</p>'
}

const VueRoot = Vue.component('VueRoot', {
  // The main Vue component used to hold the entire component tree under a wrapped
  // ui-router state.
  render (h) {
    return (
      <div>
        <p>My Root View Component</p>

        <router-link to={{'name': 'hello-vue'}}>Go to routed component</router-link>

        <hr />
        <router-view />
      </div>
    )
  }
})

appConfig.$inject = [
  '$urlRouterProvider',
  '$stateProvider',
  '$locationProvider',
  '$ngVueProvider'
]
function appConfig (
  $urlRouterProvider,
  $stateProvider,
  $locationProvider,
  $ngVueProvider
) {
  $ngVueProvider.enableVueRouter(router)

  $locationProvider.html5Mode(false).hashPrefix('')

  $stateProvider
    .state({
      name: 'hello',
      url: '/hello',
      component: 'ngHello'
    })
    .state({
      name: 'pure-angular',
      url: '/pure-angular',
      component: 'ngPure'
    })
}

angular.module('vue.router', [uiRouter, 'ngVue', 'ngVue.plugins'])
  .config(appConfig)
  .component('ngHello', ngHello)
  .component('ngPure', ngPure)
  .value('VueRoot', VueRoot)
