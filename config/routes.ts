export const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: '@/pages/Home',
        name: "首页",
    },
    // {
    //     path: '/resources',
    //     component: '@/pages/Resources',
    //     name: '链接',
    // },
    // {
    //     path: '/relaxed',
    //     component: '@/pages/Relaxed',
    //     name: "音乐",
    // },
    // {
    //     path: '/images',
    //     component: "@/pages/Gallery",
    //     name: '图库',
    // },
    {
        path: '/timeline',
        component: '@/pages/GitLogTime',
        name: '日志',
    },
    {
        path: '/individuals',
        component: "@/pages/Individuals",
        name: '个人',
    },
    {
        path: '*',
        redirect: '/home'
    },
]