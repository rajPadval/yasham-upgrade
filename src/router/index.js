import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/About.vue')
    },
    {
        path: '/what-we-do',
        name: 'What We Do',
        component: () => import('../views/work/Work.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/contact/Contact.vue')
    },
    {
        path: '/our-impact',
        name: 'Impact',
        component: () => import('../views/impact/Impact.vue')
    },
    {
        path: '/support-us',
        name: 'Support',
        component: () => import('../views/support/Support.vue')
    },
    {
        path: '/programmes/:programmeId',
        name: 'Programme',
        component: () => import('../views/programme/Programme.vue')
    },
    {
        path: '/communities/:communityId',
        name: 'Community',
        component: () => import('../views/community/Community.vue')
    },
    {
        path: '/feature/:featureId',
        name: 'Feature',
        component: () => import('../views/feature/Feature.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router