/*

Google Map

*/

import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import SbEditable from "storyblok-react"

const googleMapStyles = require("./GoogleMapStyles.json")

const containerStyle = {
  width: "100%",
  height: "545px",
}

const center = {
  lat: 53.64904,
  lng: -1.78416,
}

const position = {
  lat: 53.64904,
  lng: -1.78416,
}

/*

const options = {
  strokeColor: '#fdb813',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#fdb813',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 20000, 
  zIndex: 1
}

*/

const onLoad = marker => {
  console.log("marker: ", marker)
}

const GoogleMaps = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
        <LoadScript googleMapsApiKey="AIzaSyCojalgf3Ff7vrjGMxjan_o-aNe5vhWeMA">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={{ styles: googleMapStyles }}
          >
            {
              /* Child components, such as markers, info windows, etc. */

              <Marker
                onLoad={onLoad}
                position={position}
                icon={{
                  url:
                    "https://a.storyblok.com/f/110989/x/3634c0c896/map-marker.svg",
                }}
              />
            }

            <></>
          </GoogleMap>
        </LoadScript>
    </SbEditable>
  )
}

export default GoogleMaps
