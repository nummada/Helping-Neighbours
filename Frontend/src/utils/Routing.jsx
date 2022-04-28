import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import ModifyPost from "../pages/ModifyPost";
import MyPosts from "../pages/MyPosts";
import Profile from "../pages/Profile";
import WannaHelp from "../pages/WannaHelp";
import ChangePassword from "../pages/ChangePassword";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/modify-post" element={<ModifyPost />} />
        <Route exact path="/my-posts" element={<MyPosts />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/want-to-help" element={<WannaHelp />} />
        <Route exact path="/change-password" element={<ChangePassword />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;
