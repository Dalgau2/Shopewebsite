import { createContext, useState } from "react";

export const AddTocart = createContext({
  addToCart: "",
  setAddToCart: () => {},
});

export const AddCartoProvider=({child})=>{
    const [addTocart,setAddToCart]=useState([])
    const value={addTocart,setAddToCart}
    return <AddCartoProvider.provider value={value}>{child}</AddCartoProvider.provider>
}
