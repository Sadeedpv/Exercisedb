import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Exercises from "./pages/Exercises";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercises/:id' element={<Exercises />} />
        </Routes>
        <Footer />

      </Box>
    </>
  );
}

export default App;
