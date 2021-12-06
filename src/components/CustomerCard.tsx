import { addFood, Orders } from "../features/customerSlice"
import { useState } from "react";
import { useDispatch } from "react-redux";
const CustomerCard = ({customerName, orderLisr} : Orders) => {
    
    const [customerInput, setcustomerInput] = useState("");

    const dispatch = useDispatch();

    const handelFood = () => {
        // add a food to this specific customer
        dispatch(addFood({
            customerName : customerName,
            Order : customerInput,
        }));

        setcustomerInput("");
    }

    return (
        <div className="customer-food-card-container">
            <p>{customerName}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {orderLisr.map((order, index) => {
                        return <p key={index}>{order}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input value={customerInput} onChange={(e) => setcustomerInput(e.target.value)} />
                    <button onClick={handelFood} >Add</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard
