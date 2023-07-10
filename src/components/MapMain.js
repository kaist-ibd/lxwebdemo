import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { MarkerLayer, Marker } from "react-leaflet-marker"
import { Typography } from "@material-tailwind/react"

const MapMain = () => {
  return (
    <MapContainer
      center={[36.3503, 127.4653]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-screen"
      attributionControl={false}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}"
        ext={"png"}
      />
      <MarkerLayer>
        <Marker position={[36.37388, 127.36228]}>
          <div className="rounded-xl border-4 py-1 px-1 bg-white w-fit">
            <img
              src="https://images.squarespace-cdn.com/content/v1/54027144e4b0897ca33a9713/1602218481630-WN0CHJ393P9UJ2N4PIGZ/kaist_logo.png"
              className="h-6"
            />
          </div>
        </Marker>
        <Marker position={[35.83254, 127.02072]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white -mt-10 -ml-5">
            <img src="https://lxsiri.re.kr/images/site/frt/logo/h1.gif" />
          </div>
        </Marker>
        <Marker position={[36.37655, 127.38806]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
            <Typography variant="h6" color="blue-gray">
              한빛탑 일대
            </Typography>
          </div>
        </Marker>
        <Marker position={[36.35051, 127.38498]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
            <Typography variant="h6" color="blue-gray">
              대전시청
            </Typography>
          </div>
        </Marker>
        <Marker position={[36.32839, 127.42824]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
            <Typography variant="h6" color="blue-gray">
              으능정이 거리
            </Typography>
          </div>
        </Marker>
        <Marker position={[36.33216, 127.4516]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
            <Typography variant="h6" color="blue-gray">
              대동벽화마을
            </Typography>
          </div>
        </Marker>
      </MarkerLayer>
    </MapContainer>
  )
}

export default MapMain