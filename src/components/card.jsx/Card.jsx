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
                            <span>Order tracking - {data.tracking_number}</span>
                        </div>
                        <div className="card_details">
                            <span className="status">IN TRANSIT</span>
                            <span className="delivery_date">JUN 12 2024</span>
                        </div>
                        <div className="card_body">
                            <div className="status_div">
                                <div className={data.processing_status ? "icon pending": "icon"}>
                                    <i class="fa-solid fa-truck-fast fa-2x"></i>
                                </div>
                                <span>Picked up</span>
                            </div>
                            <span className={data.processing_status ? "bar pending" : "bar"}></span>
                            <div className="status_div">
                                <div className={data.shipped_status ? "icon pending" : "icon"}>
                                    <i class="fa-solid fa-dolly fa-2x"></i>
                                </div>
                                <span>Shipped</span>
                            </div>
                            <span className={data.shipped_status ? "bar pending" : "bar"}> </span>
                            <div className="status_div">
                                <div className={data.arrival_status ? "icon pending" : "icon"}>
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