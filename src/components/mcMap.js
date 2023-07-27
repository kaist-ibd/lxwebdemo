import React from "react"
import { Button } from "@material-tailwind/react"

const McMap = () => (
  <div className="w-full h-full mx-auto my-auto flex items-center justify-center">
    <div className="flex justify-center -mt-16">
      <Button
        size="lg"
        className="cursor-default"
        onClick={() => window.open("http://152.70.247.28/webmap", "_blank")}
      >
        <p className="text-xl">공간정보 데이터 시각화</p>
        <p className="text-sm text-gray-300">마인크래프트 2.5D 지도</p>
      </Button>
    </div>
  </div>
)

export default McMap
