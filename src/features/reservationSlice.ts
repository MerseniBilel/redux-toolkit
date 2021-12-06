import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// the type of the state
interface ReservationState{
    value:String[];
}

//the initialstate object
const initialState: ReservationState = {
    value: []
}

// let's create the slice
export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        addReservation : (state, action: PayloadAction<String>) => {
            state.value.push(action.payload);
        },
        removeReservation : (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1); 
        }
    }
});
export const { addReservation, removeReservation } = reservationSlice.actions
export default reservationSlice.reducer