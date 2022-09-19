export const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: '@/pages/Home',
        name: "首页",
    },
    {
        path: '/relaxed',
        component: '@/pages/Relaxed',
        name: "音乐",
    },
    {
        path: '/images',
        component: "@/pages/Gallery",
        name: '图库',
    },
    {
        path: '/individuals',
        component: "@/pages/Individuals",
        name: '个人',
    }
]