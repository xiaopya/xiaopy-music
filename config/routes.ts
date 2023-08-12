export const routes = [

    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        component: "@/pages/Home",
        name: '首页',
    },
    {
        path: '/timeline',
        component: '@/pages/GlobalMusic',
        name: '搜搜',
    },
    {
        path: '/music',
        component: '@/pages/Music',
        name: "音乐",
    },
    {
        path: '*',
        redirect: '/index'
    },
]