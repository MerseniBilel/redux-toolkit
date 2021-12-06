
interface ReservationCardTypes{ // the props type
    name: String
}
const ReservationCard = ({name} : ReservationCardTypes) => {
    return <div className="reservation-card-container">{name}</div>;
}

export default ReservationCard
