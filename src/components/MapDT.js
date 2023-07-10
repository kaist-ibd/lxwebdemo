import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { MarkerLayer, Marker } from "react-leaflet-marker"
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react"
import { StaticImage } from "gatsby-plugin-image"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const MapDT = () => {
  return (
    <MapContainer
      center={[36.3503, 127.4653]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-screen"
      attributionControl={false}
      doubleClickZoom={false}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <MarkerLayer>
        <Marker position={[35.83254, 127.02072]}>
          <div className="rounded-xl border-4 py-1 px-3 bg-white -mt-10 -ml-5">
            <img src="https://lxsiri.re.kr/images/site/frt/logo/h1.gif" />
          </div>
        </Marker>
        <Marker position={[36.37655, 127.38806]}>
          <Popover placement="right">
            <PopoverHandler>
              <Button
                variant="gradient"
                className="flex items-center gap-2 rounded-3xl"
              >
                <p className="text-lg">한빛탑 일대</p>
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[800px] bg-transparent border-0">
              <StaticImage
                className="h-full w-full rounded-3xl"
                src="../../images/s1.png"
              />
            </PopoverContent>
          </Popover>
        </Marker>
        <Marker position={[36.35051, 127.38498]}>
          <Popover placement="right">
            <PopoverHandler>
              <Button
                variant="gradient"
                color="green"
                className="flex items-center gap-2 rounded-3xl"
              >
                <p class="text-lg">대전시청</p>
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[800px] bg-transparent border-0">
              <StaticImage
                className="h-full w-full rounded-3xl"
                src="../../images/s2.png"
              />
            </PopoverContent>
          </Popover>
        </Marker>
        <Marker position={[36.32839, 127.42824]}>
          <Popover placement="top-start">
            <PopoverHandler>
              <Button
                variant="gradient"
                color="red"
                className="flex items-center gap-2 rounded-3xl"
              >
                <p class="text-lg">으능정이 거리</p>
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[800px] bg-transparent border-0">
              <StaticImage
                className="h-full w-full rounded-3xl"
                src="../../images/s3.png"
              />
            </PopoverContent>
          </Popover>
        </Marker>
        <Marker position={[36.33216, 127.4516]}>
          <Popover placement="top-start">
            <PopoverHandler>
              <Button
                variant="gradient"
                color="yellow"
                className="flex items-center gap-2 rounded-3xl"
              >
                <p class="text-lg">대동벽화마을</p>
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[800px] bg-transparent border-0">
              <StaticImage
                className="h-full w-full rounded-3xl"
                src="../../images/s4.png"
              />
            </PopoverContent>
          </Popover>
        </Marker>
      </MarkerLayer>
    </MapContainer>
  )
}

export default MapDT
