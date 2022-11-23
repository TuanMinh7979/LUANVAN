import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "./components/Home";
import Header from "./components/Header.js";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Upload from "./components/other/Upload";
import Jobs from "./components/Jobs";
import RichText from "./components/RichText";
import HrHub from "./components/HrHub";
import JobDetail from "./components/JobDetail";
import HrRegister from "./components/HrRegister";
import HrLogin from "./components/HrLogin";
import Company from "./components/Company";
import UpdateProfile from "./components/UpdateProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="jobs"
              element={
                <>
                  <Header />
                  <Jobs />
                  <Footer />
                </>
              }
            />
            <Route
              path="hrhub/*"
              element={
                <>
                  <Header forHr />
                  <HrHub />
                  <Footer />
                </>
              }
            />
            <Route
              path="jobdetail"
              element={
                <>
                  <Header />
                  <JobDetail />
                  <Footer />
                </>
              }
            />
             <Route
              path="updateprofile"
              element={
                <>
                  <Header />
                  <UpdateProfile />
                  <Footer />
                </>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="hrlogin" element={<HrLogin />} />
            <Route path="hrsignup" element={<HrRegister />} />
            <Route path="upload" element={<Upload />} />
            <Route path="test" element={<RichText />} />
          </Route>

 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
