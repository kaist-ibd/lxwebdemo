import React from "react"
import { Typography } from "@material-tailwind/react"
// import loadable from '@loadable/component'

const MapMain = React.lazy(() => import("./MapMain"))

// const MapMain = loadable(() => import('./MapMain'))

const MapFirstScreen = () => {
  const isSSR = typeof window === "undefined"

  return (
    <div className="relative">
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <MapMain />
        </React.Suspense>
      )}

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
}

export default MapFirstScreen
