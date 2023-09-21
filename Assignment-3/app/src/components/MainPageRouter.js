import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch,
  Router,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import MainPage from "./MainPage";
import NoPage from "./NoPage";
const MainPageRouter = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    
    </div>
  );
};

export default MainPageRouter;
