
interface CustomerCardPropTypes{
    name : String
}

const CustomerCard = ({name} : CustomerCardPropTypes) => {
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food"></div>
                <div className="customer-food-input-container">
                    <input />
                    <button >Add</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard
