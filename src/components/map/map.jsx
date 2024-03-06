import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Map({ data }) {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    useEffect(()=>{

        async function getLocation() {

            const payload = await axios.get(
                `https://geocode.maps.co/search?q=${encodeURIComponent(data.current_location)}&api_key=65e7b5ddd0c8b965091770kmt077fd8`
            );

            const response = await payload.data[0];

            setLat(Number(response.lat));
            setLon(Number(response.lon));

        }
        
        getLocation()

    },[])

    const position = [lat, lon]

    return (
        <div>
            { lat && <MapContainer
                style={{ height: '300px', width: '300px' }}
                center={position}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        This is the current package location
                    </Popup>
                </Marker>
            </MapContainer>}
        </div>
    );
}
