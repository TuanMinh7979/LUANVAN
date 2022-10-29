import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Home from "./components/Home";
import Header from "./components/Header.js";
import Login from "./components/Login";
import Register from "./components/Register";
import Other from "./components/other/Other.js";
import Upload from "./components/other/Upload";
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
