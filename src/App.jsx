import { Route, Routes } from "react-router";
import Layout from "./Component/Layout/Layout";
import LoginPage from "./Component/Login/Login";
import Navbar from "./Component/NavBar/Navbar";
import HomePage from "./Component/Page/Home";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      
      </Route>


    </Routes>
    </>
  );
}

export default App;
