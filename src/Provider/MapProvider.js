import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { UserContext } from './UserProvider';

export const MapContext = createContext()
export  const MapProvider = (props) => {

    const [userPosition, setUserPosition] = useState([]);
    const { connected } = useContext(UserContext)

    const getCurrentPos = (socket) => {
        navigator.geolocation.watchPosition(
            (position) => {
                return socket.emit("update_position", {point_lat: position.coords.latitude, point_lon: position.coords.longitude} );
            },
        ) 
    }

    const setIoMapData = () => {
        //get current position
      
        const socket = io("http://edu.project.etherial.fr");

        socket.emit("auth", localStorage.getItem("token"));
        getCurrentPos(socket);
        socket.on("positions", (arg) => {
            setUserPosition(Object.entries(arg.data));
        });

    }

    useEffect(() => {
        if (connected === true) {
            setIoMapData();
        }
    }, [connected])
        
    if (connected === true) {

        return (
            <MapContext.Provider value={{ userPosition }}>
                {props.children}
            </MapContext.Provider>
        )
    }
    else {
        return (
            <div>
            </div>
        )
    }
    
}