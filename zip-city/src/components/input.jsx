import React, {useEffect, useState} from "react";
import axios from "axios";

const Input = () => {
    // useState for input before we use it to change zipCode
    const [userInput, setUserInput] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [placeName, setPlaceName] = useState("");

    // const Button = () => {
    //     return ;
    // }
    
    // 
    useEffect(() => {
        async function getZipCode() {
            try {
                setZipCode(userInput);
                const placeName = await axios.get(`https://zip-api.eu/api/v1/info/US-${[zipCode]}`);
                console.log(placeName);
                setPlaceName(placeName.data);
                
            } catch(error) {
                console.error(error);
            }
        }
        getZipCode();
    }, []);

    /* search() {
        const userInput = 
        setUserInput(userInput);
        setZipCode(userInput);
    };
    */

    return (
        <div> 
            <input value={userInput} onInput={e => setUserInput(e.target.value)}/>
            { /*<button onchange={e => setZipCode(e.target.value)}>Search</button> */}
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