import HomePage from '../views/homePage'
import ListPage from '../views/listPage'
import Home from '../views/home/home'
import ShopCar from '../views/shopCar'
import MePage from '../views/mePage'
let routers = [
     {
        path:"/",
        redirect:"/Home/HomePage"
    },{
        name:'home',
        path:'/Home',
        component:Home,
        children:[{
            name:'HomePage',
            path:'/Home/HomePage',
            component:HomePage
        },{
            name:'ShopCar',
            path:'/Home/ShopCar',
            component:ShopCar
        },{
            name:'MePage',
            path:'/Home/MePage',
            component:MePage
        }]
    }
 
]

export default routers;
