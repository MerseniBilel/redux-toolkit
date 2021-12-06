import { useDispatch } from "react-redux";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
interface ReservationCardTypes{ // the props type
    name: String;
    index : number;
}
const ReservationCard = ({name, index} : ReservationCardTypes) => {
    const  dispatch = useDispatch();
    const handelCustomers = () => {
        // add to the customers list
        dispatch(addCustomer(name));    
        //deleted from the wait list
        dispatch(removeReservation(index));
    }
    return <div onClick={handelCustomers} className="reservation-card-container">{name}</div>;
}

export default ReservationCard
