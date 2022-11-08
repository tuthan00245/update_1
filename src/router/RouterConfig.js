import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useUserLocal from "../hook/useUserLocal";
import Error404 from "../UI/Error404";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Profile from "../UI/profile/Profile";
import Home from "../UI/Home/Home";
import NewsPage from "../UI/News/News";
import CreateNotification from "../UI/Notification/CreateNotification";
import CreateTeacher from "../UI/Teacher/CreateTeacher";
import Login from "../UI/User/Login";

const RouterConfig = () => {
  const userID = useUserLocal("name");

  return (
    <>
      <BrowserRouter>
        {
        userID === null ? 
        (
          <Login></Login>
        ) : 
        (
          <>
            <Header />
            
            <Routes>
              
              <Route path="/" index 
              element={
                <Home />
                
              }>
              </Route>
              <Route
                exact
                path="/Notification/Create"
                element={<CreateNotification />}
              />
              <Route path="/Teacher/Create" exact element={<CreateTeacher />} />
              <Route path="/news/:id" exact element={<NewsPage/>} />
              <Route path="*" exact element={<Error404 />}></Route>
            </Routes>
            <Profile/>
            <Footer />
          </>
        )
        }
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
