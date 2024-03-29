import { Route, Routes } from "react-router";
import Layout from "./Component/Layout/Layout";
import LoginPage from "./Component/Login/Login";
import Navbar from "./Component/NavBar/Navbar";
import HomePage from "./Component/Page/Home";
import SingleProductList from "./Component/SingleCategory/SingleCategoryList";
import OneProduct from "./Component/SingleCategory/OneProduct";
import ScrollTop from "./windowScrollTop/windowScrol l";


function App() {
  return (
    <>
     <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:title"  element={<SingleProductList />} />
          <Route path="/:title/:id" element={<OneProduct/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
