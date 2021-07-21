import React, { useState, useCallback, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"

import * as missionstyles from "./missionMap.module.css"

const center = [51.505, -0.09]
const zoom = 13

const DisplayPosition = ({ map }) => {
  const [position, setPosition] = useState(map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on("move", onMove)
    return () => {
      map.off("move", onMove)
    }
  }, [map, onMove])

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>Recentrer</button>
    </p>
  )
}

const MissionMap = () => {
  const [map, setMap] = useState(null)

  return (
    <div className={missionstyles.main}>
      <div className={missionstyles.missionwrapper}>
        {map ? <DisplayPosition map={map} /> : null}
      </div>
      <MapContainer
        className={missionstyles.map}
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default MissionMap
