import { createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home' 
import Login from './pages/Login' 
import Admin from './pages/Admin' 
import PageError from './pages/PageError'
import Private from './Routes/Private'

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
    element: <Private><Admin/></Private>
  },
  {
    path: "*",
    element: <PageError/>
  }
])

export {router};