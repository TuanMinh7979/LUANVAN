import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";

import Home from "./components/Home";
import Header from "./components/Header.js";
import Login from "./components/Login";
import Register from "./components/Register";

import Upload from "./components/other/Upload";
import Jobs from "./components/Jobs";
import Test from "./components/Test";
import HrHub from "./components/HrHub";
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
                                </>
                            }
                        />
                        <Route
                            path="jobs"
                            element={
                                <>
                                    <Header />
                                    <Jobs />
                                </>
                            }
                        />
                        <Route
                            path="hrhub"
                            element={
                                <>
                                    <Header forHr />
                                    <HrHub />
                                </>
                            }
                        />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="upload" element={<Upload />} />
                        <Route path="test" element={<Test />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
