import {Home} from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { ProductByCat } from './pages/ProductByCat'


const routes = [
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/product/:id",
        element:<Product/>
    },
    {
        path:"/category/:cid",
        element:<ProductByCat/>
    },
    {
        path:"/cart",
        element:<Cart/>
    },
]

export default routes;