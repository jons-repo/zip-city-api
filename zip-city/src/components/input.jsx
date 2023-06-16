import React, {useEffect, useState} from "react";
import axios from "axios";

const Input = () => {
    // useState for input before we use it to change zipCode
    const [userInput, setUserInput] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [placeName, setPlaceName] = useState("");

    const Button = () => {
        return <button>Search</button>;
    }
    
    // 
    useEffect(() => {
        async function getZipCode() {
            try {
                const placeName = await axios.get(`https://zip-api.eu/api/v1/info/US-${[11371]}`);
                console.log(placeName);
                setPlaceName(placeName.data);
                
            } catch(error) {
                console.error(error);
            }
        }
        getZipCode();
    }, []);

    return (
        <div>
            <input type="text"/>
            {/* Looping through JSON */}
            <p key={placeName.url}>{placeName.place_name}</p>
            {/* {placeName.data.map(placeName => {
                return <p key={placeName.url}>{placeName.place_name}</p>
            })
            } */}
        </div>
    );
};

export default Input;