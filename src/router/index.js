import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: 'Inicio | Asao_Parrillao' }
    },
    {
        path: '/servicios',
        name: 'services',
        component: ServicesView,
        meta: { title: 'Servicios | Asao_Parrillao' }
    },
    {
        path: '/nosotros',
        name: 'about',
        component: AboutView,
        meta: { title: 'Nosotros | Asao_Parrillao' }
    },
    {
        path: '/contacto',
        name: 'contact',
        component: ContactView,
        meta: { title: 'Contacto | Asao_Parrillao' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { top: 0 }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Asao_Parrillao'
    next()
})

export default router
