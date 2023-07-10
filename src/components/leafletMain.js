import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { MarkerLayer, Marker } from "react-leaflet-marker"
import { Typography } from "@material-tailwind/react"

const LeafletMain = () => (
  <div className="relative">
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
            <Typography variant="h6" color="blue-gray">한빛탑 일대</Typography>
          </div>
        </Marker>
        <Marker position={[36.35051, 127.38498]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
          <Typography variant="h6" color="blue-gray">대전시청</Typography>
          </div>
        </Marker>
        <Marker position={[36.32839, 127.42824]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
          <Typography variant="h6" color="blue-gray">으능정이 거리</Typography>
          </div>
        </Marker>
        <Marker position={[36.33216, 127.4516]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white w-fit">
          <Typography variant="h6" color="blue-gray"> 대동벽화마을</Typography>
          </div>
        </Marker>
      </MarkerLayer>
    </MapContainer>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center rounded-xl border-4 border-white bg-white/50 py-[48px] px-[64px] shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm z-[1000]">
      <div className="flex flex-wrap flex-col">
        <Typography
          variant="h2"
          color="blue-gray"
          className="justify-center flex"
        >
          대전 메타버스
        </Typography>
        <Typography
          variant="h5"
          className="justify-center flex text-gray-800"
        >
          KAIST IBD & LX 공간정보연구원
        </Typography>
        <Typography
          variant="h6"
          color="gray"
          className="mt-6 font-normal justify-center flex"
        >
          실공간 기반 메타버스의 GIS 구축방안:
        </Typography>
        <Typography
          variant="h6"
          color="gray"
          className="mt font-light justify-center flex"
        >
          AI 기반의 공간정보 사용 예측 및 효율적 유지보수 방법 개발 연구
        </Typography>
      </div>
    </div>
  </div>
)

export default LeafletMain
