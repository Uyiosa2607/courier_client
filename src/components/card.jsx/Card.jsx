import "./card.css"

export default function Card(props){

    const data = props.data

    const error = props.error

    return (
        <>
            {error ? (<p style={{padding: "1rem", color: "red"}}>No Shipments Found with the provided Tracking Number, Please provide a valid Tracking Number</p>) :
             (
                    <div className="card">
                        <div className="top_bar">
                            <span>Order tracking - 9QE282HFHWR9W</span>
                        </div>
                        <div className="card_details">
                            <span className="status">IN TRANSIT</span>
                            <span className="delivery_date">JUN 12 2024</span>
                        </div>
                        <div className="card_body">
                            <div className="status_div">
                                <div className="icon pending">
                                    <i class="fa-solid fa-truck-fast fa-2x"></i>
                                </div>
                                <span>Picked up</span>
                            </div>
                            <span className="bar"></span>
                            <div className="status_div">
                                <div className="icon">
                                    <i class="fa-solid fa-dolly fa-2x"></i>
                                </div>
                                <span>Shipped</span>
                            </div>
                            <span className="bar"> </span>
                            <div className="status_div">
                                <div className="icon">
                                    <i class="fa-solid fa-check fa-2x"></i>
                                </div>
                                <span>Completed</span>
                            </div>
                        </div>
                    </div>
             )}
            
        </>
    )
}