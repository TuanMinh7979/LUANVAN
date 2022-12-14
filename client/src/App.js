import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
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
import { useSelector } from "react-redux";
import UpdateProfile from "./components/UpdateProfile";
import Profile from "./components/Profile";
import ManageCV from "./components/ManageCV";

import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";


import ProtectedRoute from "./page/ProtectedRoute";
import MyCV from "./components/MyCV";

import Stats from "./components/admincomponents/Stats";
import JobMn from "./components/admincomponents/JobMn";
import RecMn from "./components/admincomponents/RecMn";
import CandidateMn from "./components/admincomponents/CandidateMn";
import CVCard from "./components/CV/CVCard";
import AppliedJobs from "./components/AppliedJobs";
import DashBoard from "./components/admincomponents/DashBoard";

function App() {
  // sessionStorage.clear();
  const user = useSelector((state) => state.user);

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
              path="admin/*"
              element={
                <>
                  <Header  />
                  <DashBoard />
                  <Footer />
                </>
              }
            />
            <Route
              path="jobdetail/:id"
              element={
                <>
                  <Header />
                  <JobDetail user={user} />
                  <Footer />
                </>
              }
            />
            <Route
              path="updateprofile/*"
              element={
                <>
                  <Header />
                  <UpdateProfile user={user} />
                  <Footer />
                </>
              }
            />
            <Route
              path="myprofile"
              element={
                <>
                  <Header />
                  <Profile user={user} />
                  <Footer />
                </>
              }
            />
            <Route
              path="createcv"
              element={
                <>
                  <Header />
                  <ManageCV user={user} />
                  <Footer />
                </>
              }
            />
            <Route
              path="cv/:id"
              element={
                <>
                  <Header />
                  <MyCV user={user} />
                  <Footer />
                </>
              }
            />

            <Route
              path="appliedjobs"
              element={
                <>
                  <Header />
                  <AppliedJobs user={user} />
                  <Footer />
                </>
              }
            />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="hrlogin" element={<HrLogin />} />
            <Route path="hrsignup" element={<HrRegister />} />


            <Route path="test" element={<CVCard />} />
          </Route>
        </Routes>
      </BrowserRouter>



      <ToastContainer
        color="success"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
}

export default App;
