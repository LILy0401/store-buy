import HomePage from '../views/homePage'
import ListPage from '../views/listPage'
import Home from '../views/home/home'
import ShopCar from '../views/shopCar'
import MePage from '../views/mePage'
import ProDetail from '../views/productDetail/proDetail';
import Hot from '../views/hot/hotBuy'
let routers = [
     {
        path:"/",
        redirect:"/ListPage"
    },{
        name:'home',
        path:'/Home',
        component:Home,
        children:[{
            name:'HomePage',
            path:'/Home/HomePage',
            component:HomePage,
            children:[{
                name:'hot',
                path:'/Home/HomePage/hot',
                component:Hot,
            }]
        },{
            name:'ShopCar',
            path:'/Home/ShopCar',
            component:ShopCar
        },{
            name:'MePage',
            path:'/Home/MePage',
            component:MePage
        }]
    },{
        name:'ListPage',
        path:'/ListPage',
        component:ListPage
    },{
        name:'proDetail',
        path:'/proDetail',
        component:ProDetail
    }
 
]

export default routers;
