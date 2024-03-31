import { configureStore } from "@reduxjs/toolkit"
import { cartReducer,addItem,removeItem } from "./Slice/cartSlice"
const rootReducer={
    data:cartReducer
}

const store=configureStore({
    name:"cartStore",
    reducer:rootReducer
})

export{store,addItem,removeItem}
console.log(JSON.stringify(store.getState()))