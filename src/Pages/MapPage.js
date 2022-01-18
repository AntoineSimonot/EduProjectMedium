import React, { useContext } from "react";
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import '../App.css';
import ReactLeafletDriftMarker from "react-leaflet-drift-marker"


import { MapContext } from '../Provider/MapProvider';
import { UserContext } from "../Provider/UserProvider";

function MapPage(props) {
    const { userPosition } = useContext(MapContext)
    const { connected } = useContext(UserContext)
    const position = [48.882460, 2.38950]

    if (connected === true && userPosition) {
        return (
            <MapContainer center={position} zoom={12}scrollWheelZoom={false}>
              <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {userPosition.map(user => {
                return (
                    <ReactLeafletDriftMarker  position={[user[1].location.latitude, user[1].location.longitude]} duration={1000}
                    >
                        <Popup>
                            {user[0]}
                        </Popup>
                    </ReactLeafletDriftMarker >
                )
              }
            )}

            </MapContainer>
          );
    }
    else {
        return (
            <div>
               
            </div>
        )
    }
}

export default MapPage