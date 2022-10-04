import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Image from "mui-image";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import Home from "./components/Home";
import Counter from "./components/Counter";
import logo from "./assets/logo.png"
function App() {
  const theme = createTheme({
    palette: {
      deepblue: {
        main: '#0a4499',
        contrastText: '#fff'
      }
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 2 }}>
          <AppBar position="sticky" color="deepblue">
            <Toolbar>
              <Image
                src={logo}
                width="120px"
                height="60px"
                fit="cover"
                duration="0"
                sx={{ margin: "0px", padding: "0px" }}
              />
              <Typography variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer" }}>
								Việc làm
              </Typography>
              <Typography variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer" }}>
								Hồ sơ & CV
              </Typography>
              <Typography variant="a" component="a" sx={{ mx: 4, fontWeight: 500, cursor: "pointer", flexGrow: 1 }}>
								Công cụ
              </Typography>
              <>
                <Button sx={{
                  m: 2
                }} color="inherit">Đăng nhập</Button>
                <Button sx={{
                  m: 2
                }} color="inherit">Đăng ký</Button>
                <Button variant="outlined" sx={{
                  m: 2
                }} color="inherit">Đăng tuyển & tìm hồ sơ</Button>
              </>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="/count" element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
