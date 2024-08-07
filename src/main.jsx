import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./Component/Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import AllCategoryList from "./Component/CardComponent/CardlistComponent/AllCategoryList.jsx";
import AllCategoryCard from "./Component/CardComponent/CarComponent/AllCategoryCard.jsx";
import OneProductCard from "./Component/CardComponent/CarComponent/OneProductCard.jsx";
import OneProduct from "./Component/SingleCategory/OneProduct.jsx";
import MyRating from "./Component/Rating/MyRating.jsx";
import OneProductSkeleton from "./Secelaton/oneProductSecleaton.jsx";
import SingleCategorySkeleton from "./Secelaton/SingleCategorySkeleton.jsx";
import Navbar from "./Component/NavBar/Navbar.jsx";
import { store } from "./Component/Store/store.jsx";
import { Provider } from "react-redux";
import DropdownBag from "./Utiles/DropDownBag.jsx";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    
  <BrowserRouter>
    <Provider store={store}>
        <App />
        <ToastContainer/>
    </Provider>
  </BrowserRouter>
     
);
