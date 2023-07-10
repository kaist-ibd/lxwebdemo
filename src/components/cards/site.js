import React, { useEffect, useRef } from "react"
import { Chart, initTE } from "tw-elements"
import { Card, Typography } from "@material-tailwind/react"

const TABLE_HEAD = ["순위", "지역", "평균 접속 시간", "비율"]

const TABLE_ROWS = [
  {
    rank: "#1",
    region: "한빛탑 일대",
    time: "20분 27초",
    ratio: "37.6%",
  },
  {
    rank: "#2",
    region: "대동벽화마을",
    time: "11분 39초",
    ratio: "21.4%",
  },
  {
    rank: "#3",
    region: "대전시청",
    time: "11분 37초",
    ratio: "21.3%",
  },
  {
    rank: "#4",
    region: "으능정이 거리",
    time: "10분 42초",
    ratio: "19.7%",
  },
]

const Site = () => {
  useEffect(() => {
    initTE({ Chart })
  }, [])

  const ref = useRef();

  return (
    <>
      <div>
        <Typography variant="h5">1. 유저가 머문 대전 지역</Typography>
        <p>최종참여자 <span class="text-blue-600">237명</span>이 1초마다 기록한 <span class="text-blue-600">729,479개</span>의 로그 중 <span class="text-blue-600">81.3%</span>인 <span class="text-blue-600">592,884개</span>가 4개의 집중구역에서 기록되었습니다.</p>
      </div>
      <div class="mx-auto w-3/5 overflow-hidden mb-4">
        <canvas
          ref={ref}
          data-te-chart="pie"
          data-te-dataset-label="Traffic"
          data-te-labels="['한빛탑 일대', '대전시청' , '으능정이 거리' , '대동벽화마을']"
          data-te-dataset-data="[37.6, 21.3, 19.7, 21.4]"
          data-te-dataset-background-color="['rgba(77, 182, 172, 0.5)', 'rgba(66, 133, 244, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(233, 30, 99, 0.5)']"
        ></canvas>
      </div>
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ rank, region, time, ratio }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50"
              return (
                <tr key={region}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {rank}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {region}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {time}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {ratio}
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </>
  )
}

export default Site
