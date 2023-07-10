import React from "react"
import { Button } from "@material-tailwind/react"

const McMap = () => (
  <div className="w-full h-full relative">
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex justify-center z-[1200]">
        <Button size="lg" className="cursor-default">
        <p className="text-xl">공간정보 데이터 시각화</p>
        <p className="text-sm text-gray-300">마인크래프트 2.5D 지도</p>
      </Button>
    </div>
    <iframe
      id="map"
      src="https://daejeon.n-e.kr/webmap/"
      width={"100%"}
      height="100%"
      title="map"
    />

  </div>
)

export default McMap
