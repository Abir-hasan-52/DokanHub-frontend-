import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/main/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    

    children:[
        {
            index:true,
            Component: Home,
        },
        {
          path: "*",
          element: <div>404 Not Found</div>,
        },
        {
          path: "/about-us",
          Component:AboutUs
        },
        {
          path: "/contact-us",
          Component:ContactUs,
        }
    ]
  },
]);