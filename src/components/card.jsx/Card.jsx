import "./card.css"
import Map from "../map/map";

export default function Card(props) {

    const { data, error} = props;

    return (
        <>
            {error ? (
                <p style={{ padding: "1rem", color: "red" }}>
                    No Shipments Found with the provided Tracking Number, Please provide a valid Tracking Number
                </p>
            ) : (
                
                <div className="card">
                    
                     <Map data={data} />

                    <div className="details-card">
                        <div className="sender_div my_div">
                                <h2>SENDER INFO</h2>
                                <span>Sender Name:&nbsp; &nbsp;{data.sender_name}</span>
                                <span>Sender Number:&nbsp; &nbsp;{data.sender_number}</span>
                        </div>
                            <div className="receiver_div my_div">
                                <h2>RECEIVER INFO</h2>
                                <span>Receiver Name:&nbsp; &nbsp;{data.receiver_name}</span>
                                <span>Receiver Number:&nbsp; &nbsp;{data.receiver_number}</span>
                                <span>Receiver Address:&nbsp; &nbsp;{data.receiver_address}</span>
                            </div>
                            <div className="package_div my_div">
                                <h2>PACKAGE INFORMATION</h2>
                                <span>Package weight:&nbsp; &nbsp;&nbsp;{data.weight}</span>
                                <span>Shipping Method:&nbsp; &nbsp;{data.method}</span>
                                <span>Status:&nbsp; &nbsp;{data.status}</span>
                                <span>Current Location:&nbsp; &nbsp;{data.current_location}</span>
                                <span>Package Type:&nbsp; &nbsp;{data.package_type}</span>
                                <span>Description:&nbsp; &nbsp; *** {data.desc}**** </span>
                            </div>
                    </div>

                </div>
            )}
        </>
    )
}