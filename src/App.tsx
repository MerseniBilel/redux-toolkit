import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  // the value of the reservation input
  const [reservationNameInput, setreservationNameInput] = useState("");
  
  // all the reservations from the global state
  const reservation = useSelector((state : RootState) => state.reservation.value);

  // all the customers from the global state
  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();

  // handler reservation and call the state to insert the name inside the state
  const handlerAddReservation = () => {
    // we dont accept empty strings
    if(!reservationNameInput) return;  
    // if the input is valid call dispatch
    dispatch(addReservation(reservationNameInput));
    // clear the input feild
    setreservationNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => {
                return <ReservationCard key={index} name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setreservationNameInput(e.target.value)}/>
            <button onClick={handlerAddReservation} >Add</button>
          </div>
        </div>
        <div className="customer-food-container">
              {customers.map((cust, index) => {
                return <CustomerCard key={index} customerName={cust.customerName} orderLisr={cust.orderLisr} />
              })}
             
        </div>
      </div>
    </div>
  );
}

export default App;