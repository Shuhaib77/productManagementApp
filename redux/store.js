import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/productSlice'
import subCatogeryslice from '../redux/subCatogeryslice'
import Catogeryslice from '../redux/catogerySlice'

export const store=configureStore({
    reducer:{
        productData:productSlice,
        catogeryData:Catogeryslice,
        subCatogerydata:subCatogeryslice

    }
})

export default store