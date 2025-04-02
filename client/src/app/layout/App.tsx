import { Box, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
 
  return (
    <>
      <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
        <CssBaseline />
        <NavBar  />
        <Box sx={{ mt: 3, mx: 10 }}>
            <Outlet/>
        </Box>
      </Box>

    </>

  )
}

export default App
