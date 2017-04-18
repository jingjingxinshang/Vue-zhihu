import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import content from './views/content.vue'
import theme from './views/theme.vue'
Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            component: home,
            name: 'home'
        },
        {
            path: '/content',
            component: content,
            name: 'content'
        },
        {
            path: '/theme',
            component: theme,
            name: 'theme'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
export default router