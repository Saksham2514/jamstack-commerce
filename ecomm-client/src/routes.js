import {Home} from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'


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
        element:<Product/>
    },
    {
        path:"/cart",
        element:<Cart/>
    },
]

export default routes;