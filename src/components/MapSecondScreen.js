import React from "react"
import { Typography } from "@material-tailwind/react"
// import loadable from '@loadable/component'

const MapDT = React.lazy(() => import("./quizStats"))
// const MapDT = loadable(() => import('./MapDT'))

const MapSecondScreen = () => {
  const isSSR = typeof window === "undefined"

  return (
    <div className="relative">
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <MapDT />
        </React.Suspense>
      )}

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

export default MapSecondScreen
