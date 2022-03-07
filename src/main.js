import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'ant-design-vue/dist/antd.css'
import './index.css'

createApp(App).use(router).use(store).use(Antd).mount('#app')
