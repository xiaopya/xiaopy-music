export const routes = [

    {
        path: '/',
        redirect: '/music',
    },
    {
        path: '/music',
        component: '@/pages/Music',
        name: "音乐",
    },
    {
        path: '/timeline',
        component: '@/pages/GlobalMusic',
        name: '搜搜',
    },
    // {
    //     path: '/individuals',
    //     component: "@/pages/Individuals",
    //     name: '个人',
    // },
    {
        path: '*',
        redirect: '/music'
    },
]