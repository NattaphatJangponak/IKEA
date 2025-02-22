import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// add context
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'

// add ProtectedRoute for protect home page
import ProtectedRoute from './auth/ProtectedRoute.jsx';

// add react-router-dom
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// add router
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'
import Home from './component/Home.jsx'

import AdminHomePage from './administrator/AdminHomePage.jsx'
import Store from './administrator/Store.jsx';
import Create from './administrator/Create.jsx';
import Add_Products from './administrator/Add_Products.jsx';
import Edit_Products from './administrator/Edit_Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <ProtectedRoute><Home /></ProtectedRoute>
  },

  {
    path: '/adminhomepage',
    element: <AdminHomePage />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/create',
    element: <Create />
  },
  {
    path: '/add_products',
    element: <Add_Products />
  },
  {
    path: '/edit_products',
    element: <Edit_Products />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
)
