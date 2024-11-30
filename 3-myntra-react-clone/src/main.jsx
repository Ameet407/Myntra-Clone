import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './route/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Bag from './route/Bag.jsx'
import Home from './route/Home.jsx'
import {Provider} from 'react-redux'
import myntraStore from './store/index.js'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
  { path: "/Home", element: <Home /> },
  {
  path: "/bag",
  element: <Bag />
}]}]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
