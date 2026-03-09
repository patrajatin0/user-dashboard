
import ReactDOM from "react-dom/client"
import './index.css'
import App from './App'
import User from "./components/User"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Outlet />
    </>
  )
}
const appLayOut = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [{
    path: "/",
    element: <App />
  },
  {
    path: "/user/:id",
    element: <User />
  }
  ],
  errorElement: <Error />
}])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={appLayOut} />

)
export default Main