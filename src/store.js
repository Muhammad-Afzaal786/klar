import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./components/reducers/reducer";

const store = configureStore({
    reducer : {
        custom:customReducer,
    }
   
});



export default store;