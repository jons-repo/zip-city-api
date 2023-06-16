/*This Program accepts zipcode and returns city */
import React, {useState} from "react";
import axios from "axios";

const Input = () => {
    const [zipCode, setZipCode] = useState("");
    const [placeName, setPlaceName] = useState("");

    async function getPlaceName() {
        try {
            const placeName = await axios.get(`https://zip-api.eu/api/v1/info/US-${zipCode}`);
            setPlaceName(placeName.data);
            
        } catch(error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        setZipCode(event.target.value);
    }
    
    return (
      <div>
        <input value={zipCode} onChange={handleChange} />
        <button onClick={getPlaceName}>Search</button>
        <p key={placeName.url}>{placeName.place_name}</p>
      </div>
    );
};

export default Input;