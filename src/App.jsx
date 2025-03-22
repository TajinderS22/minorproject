import React ,{useContext, useState, useEffect}from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, createBrowserRouter, RouterProvider,Outlet } from "react-router";
import { useNavigate } from "react-router";
import Home from "./Components/Home";
import Footer from "./Components/Footer"
import About from "./Components/About";
import Signup from "./Components/Authentication/SIgnup";
import UserContext,{UserContextProvider} from "./Utils/UserContext";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
 

  return (
    <UserContextProvider>
      <div>
        <div>
            <div className=" app-container w-11/12  mx-auto h-fit pb-12 rounded-xl  shadow-md " >
            <div className="mx-auto pt-0.5">
                { <Navbar/>}
                  
                
            </div>
            <div className="home-screen max-w-7xl w-11/12 mx-auto ">
              
                
                
                <Outlet/>
                
                {/* </Router> */}
              
              

            </div>

          
            </div>  
          </div>   
          <div className="w-full">
            
              <Footer></Footer>
            
            

      </div>
    </div>
    </UserContextProvider>
  );
};



// createBrowserRouter

const AppRouter=createBrowserRouter(
  [
    {
        path:"/",
        element:<App/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/About",
            element:<About/>
          },
          // {
          //   path:"/Contact",
          //     element:<Contact/>

          // },
          {
            path:"/dashboard",
            element:
            
            <Dashboard/>
            
            

          },
          {
            path:"/auth",
            element:<Signup></Signup> 
          },

        ]
    }
  ]
)

root.render(<RouterProvider router={AppRouter} />);