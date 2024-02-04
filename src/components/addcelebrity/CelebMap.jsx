import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';


const CelebMap = () => {
    const [position, setPosition] = useState({ lat: 0, lng: 0 });
    const [address, setAddress] = useState('');

    const handleMapClick = async (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });

        // Reverse geocoding: Get address from coordinates
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
            const { display_name } = response.data;
            setAddress(display_name);
        } catch (error) {
            console.error('Reverse geocoding error:', error);
        }
    };

    const handleInputChange = async (e) => {
        const inputAddress = e.target.value;
        setAddress(inputAddress);

        // Geocoding: Get coordinates from address
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${inputAddress}`);
            const { lat, lon } = response.data[0];
            setPosition({ lat: parseFloat(lat), lng: parseFloat(lon) });
        } catch (error) {
            console.error('Geocoding error:', error);
        }
    };

    const containerStyle = {
        height: '200px',
        width: '100%',
    };
    return (
        <div className='w-full h-auto flex flex-col justify-start items-start gap-2'>

            <div className='w-full h-auto flex flex-col gap-1 justify-start items-start'>
                <label className='ml-1 text-gray-300' >Search Location</label>
                <input value={address} onChange={handleInputChange} className='w-full h-12 bg-[#1c1c1c]  outline-none border-none px-2' type='text' />
            </div>
            <MapContainer center={position} zoom={13} onClick={handleMapClick} style={containerStyle}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Your selected location</Popup>
                </Marker>
            </MapContainer>


        </div>
    )
}

export default CelebMap