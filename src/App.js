import { createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home' 
import Login from './pages/Login' 
import Admin from './pages/Admin' 
import PageError from './pages/PageError'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "*",
    element: <PageError/>
  }
])

export {router};