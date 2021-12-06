import { configureStore } from "@reduxjs/toolkit"; 
import reservationReducer from "../features/reservationSlice";

export const store = configureStore({
    reducer : {
        reservation: reservationReducer,
    }
}); //create store

// the type of the root state always return unkown so let's create a new type
// store.getState ==>  read the current state tree on your store
// we use the dispatcher to trigger state changes to the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;