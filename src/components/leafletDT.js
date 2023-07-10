import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { MarkerLayer, Marker } from "react-leaflet-marker"
import {
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react"
import { StaticImage } from "gatsby-plugin-image"

import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const LeafletDT = () => {
  return (
    <div className="relative">
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
                  src="../images/s1.png"
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
                  src="../images/s2.png"
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
                  src="../images/s3.png"
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
                  src="../images/s4.png"
                />
              </PopoverContent>
            </Popover>
          </Marker>
        </MarkerLayer>
      </MapContainer>
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm z-[1000]">
        <div className="flex flex-wrap flex-col">
          <Typography
            variant="h4"
            color="blue-gray"
            className="justify-center flex"
          >
            디지털 트윈
          </Typography>
          <Typography
            variant="h6"
            className="justify-center flex text-gray-800"
          >
            메타버스 테스트베드: 대전의 명소 4곳
          </Typography>
        </div>
        <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-[100%] flex justify-center z-[1001]">
          <img src="https://i.ibb.co/JCYvLw2/pngwing-com.png" width={"50%"} />
        </div>
      </div>
    </div>
  )
}

export default LeafletDT
