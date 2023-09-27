import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import AddEdit from "./Components/AddEdit/AddEdit";
import Order from "./Components/order/Order";
import OTPValidate from "./Components/Login/OTPValidation";
import ForgotPswd from "./Components/ForgotPswd/ForgotPswd"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import AddEdit from "../../../adminLogin/client/src/Components/AddEdit";

    //router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/ForgotPswd",
    element: (
      <div>
        <ForgotPswd/>
      </div>
    ),
  },
  
  {
    path: "/addProducts",element: (
      <div>
      <AddEdit/>
      </div>
    ),
  },
  {
    path: "update/:id" ,element:(
      <div>
        <AddEdit />
      </div>
    ),
  },
  {
    path: "/panel",element:(
      <div><Home /></div>
    ),
  },
  { 
    path: "/ShowOrders" ,element:(
      <div><Order /></div>
    ),
  },
  {
    path:"/otpValidate", element:(
      <div><OTPValidate/></div>
    ),
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;