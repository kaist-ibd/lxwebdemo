import React from "react"
import { Button } from "@material-tailwind/react"
import Stat from "./stat"

const Data = [
  {
    id: 2,
    name: "액티비티 - 벽화그리기",
    text: "대동벽화마을의 액티비티로 ~~",
    img: "paint",
    size: "xl",
  },
]

const EtcStats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
    <div className="flex justify-center pb-8 -pt-8">
      <Button size="lg" className="cursor-default">
        <p className="text-xl">그외 통계</p>
      </Button>
    </div>
      <div className="flex flex-wrap justify-center">
        {Data.map(stat => (
          <Stat
            key={stat.id}
            text={stat.text}
            image={stat.img}
            name={stat.name}
            size={stat.size}
          />
        ))}
      </div>
    </div>
  )
}

export default EtcStats
