import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface NewOrder{
    customerName : String
    Order: String
}

export interface Orders{
    customerName : String
    orderLisr : String[]
}

interface CustomerState{
    value: Orders[]
}

const initialState : CustomerState = {
    value : []
}

export const CustomersSlice = createSlice({
    name : "customers",
    initialState,
    reducers : {
        addCustomer : (state, action : PayloadAction<String>) => {
            state.value.push({
                customerName : action.payload,
                orderLisr : []
            });
        },

        addFood : (state, action : PayloadAction<NewOrder>) => {
            const index = state.value.findIndex(item => item.customerName === action.payload.customerName);
            state.value[index].orderLisr.push(action.payload.Order);
        }
    }
});

export const {addCustomer, addFood} = CustomersSlice.actions;
export default CustomersSlice.reducer;
