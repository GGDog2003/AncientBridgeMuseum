import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)
import about from '../pages/AboutPage.vue'
import bridgeCarousel from "@/components/HomePage/Bridge-Carousel.vue";
import studyBridge from "@/pages/StudyBridge.vue";
import BaiShaYan from "@/pages/bridgeInfo/JinHua/BaiShaYan.vue";
import ShuXiQiao from "@/pages/bridgeInfo/JinHua/ShuXiQiao.vue";
import DetailPage from "@/pages/bridgeInfo/DetailPage.vue";
const routers=[

    {
       path:'/about',
       component:about
    },
    {
       path:'/',
        component: bridgeCarousel
    },
    {
        path: '/StudyBridge',
        component: studyBridge,
        children:[
            {
                path:'BaiShaYan',
                component:BaiShaYan
            },
            {
                path:'ShuXiQiao',
                component:ShuXiQiao
            },
            {
                path:'DetailPage',
                component:DetailPage
            }
        ]
    }
]


let router = new VueRouter({
    //上线时候mode不能为history
    mode: 'hash',
    //base也要改
    base:'/bridge/',
    routes:routers
})
//{ familyMenu, headMenu,routerMenu}
export default router