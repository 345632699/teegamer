// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, NavBar, Toast, Icon } from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Tabbar).use(TabbarItem)
