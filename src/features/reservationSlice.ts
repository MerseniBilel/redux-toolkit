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
        }
    }
});
export const { addReservation } = reservationSlice.actions
export default reservationSlice.reducer