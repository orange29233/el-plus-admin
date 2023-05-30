import { createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        path:"/",
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login.vue')
    },
    {
        path:'/index',
        name:'index',
        component:()=>import('@/layout/index.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router