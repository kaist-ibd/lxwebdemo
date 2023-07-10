import React from "react"
import {
  Button,
  Card,
  CardBody,
  Typography,
  IconButton,
  ButtonGroup,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react"
import { StaticImage } from "gatsby-plugin-image"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveRadar } from "@nivo/radar"
// import { ResponsiveCirclePacking } from "@nivo/circle-packing"

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

const data_radar = [
  {
    id: "머문 시간",
    "한빛탑 일대": 0.376,
    대전시청: 0.213,
    "으능정이 거리": 0.197,
    대동벽화마을: 0.214,
  },
  {
    id: "집중구역 셀 수",
    "한빛탑 일대": 0.38,
    대전시청: 0.426,
    "으능정이 거리": 0.154,
    대동벽화마을: 0.04,
  },
  {
    id: "첫 선택",
    "한빛탑 일대": 0.364,
    대전시청: 0.232,
    "으능정이 거리": 0.268,
    대동벽화마을: 0.136,
  },
]

const data = [
  {
    id: "한빛탑 일대",
    label: "한빛탑 일대",
    value: 0.376,
  },
  {
    id: "대전시청",
    label: "대전시청",
    value: 0.213,
  },
  {
    id: "으능정이 거리",
    label: "으능정이 거리",
    value: 0.197,
  },
  {
    id: "대동벽화마을",
    label: "대동벽화마을",
    value: 0.214,
  },
]

const data_cart = [
  {
    id: "한빛탑 일대",
    label: "한빛탑 일대",
    value: 102,
  },
  {
    id: "대전시청",
    label: "대전시청",
    value: 65,
  },
  {
    id: "으능정이 거리",
    label: "으능정이 거리",
    value: 75,
  },
  {
    id: "대동벽화마을",
    label: "대동벽화마을",
    value: 38,
  },
]
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

const SiteStats = () => {
  const [active, setActive] = React.useState(1)
  const getItemProps = index => ({
    className: active === index ? "bg-blue-gray-100 text-blue-gray-900" : "",
    onClick: () => setActive(index),
  })

  const next = () => {
    if (active === 4) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-center">
        <Button size="lg" className="cursor-default">
          <p className="text-xl">구역 관련 데이터 통계</p>
        </Button>
      </div>
      {active === 1 ? (
        <Card className="mt-6 w-[650px]">
          <div class="h-[450px]">
            <ResponsiveRadar
              data={data_radar}
              keys={[
                "한빛탑 일대",
                "대전시청",
                "으능정이 거리",
                "대동벽화마을",
              ]}
              indexBy="id"
              valueFormat=" >-.1%"
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ from: "color" }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: "background" }}
              dotBorderWidth={2}
              colors={{ scheme: "pastel1" }}
              blendMode="multiply"
              motionConfig="wobbly"
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  translateX: -50,
                  translateY: -40,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: "#999",
                  symbolSize: 12,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
            {/* <ResponsiveCirclePacking
              data={data_circle}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              id="name"
              value="loc"
              colors={{ scheme: "nivo" }}
              childColor={{
                from: "color",
                modifiers: [["brighter", 0.4]],
              }}
              padding={4}
              enableLabels={true}
              labelsFilter={n => 2 === n.node.depth}
              labelsSkipRadius={10}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.5]],
              }}
              defs={[
                {
                  id: "lines",
                  type: "patternLines",
                  background: "none",
                  color: "inherit",
                  rotation: -45,
                  lineWidth: 5,
                  spacing: 8,
                },
              ]}
              fill={[
                {
                  match: {
                    depth: 1,
                  },
                  id: "lines",
                },
              ]}
            /> */}
          </div>
        </Card>
      ) : active === 2 ? (
        <Card className="mt-6 w-[580px]">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              집중구역
            </Typography>
            <div className="flex justify-center">
            <Popover>
            <PopoverHandler>
              <Button
                variant="outlined"
                className="flex items-center gap-2 rounded-3xl whitespace-nowrap"
              >
                <p className="text-sm">지도 보기</p>
              </Button>
            </PopoverHandler>
            <PopoverContent className="w-[400px] bg-transparent border-0">
              <StaticImage
                className="h-full w-full rounded-3xl"
                src="../images/sites.png"
              />
            </PopoverContent>
          </Popover>
            </div>
            <Typography className="mb-4 mt-2 flex justify-center text-gray-800 text-sm">
              높은 세밀도의 집중구역 (LOD2-4)
            </Typography>
            <div className="h-[240px] mt-12">
              그래프 radial
            </div>
          </CardBody>
        </Card>
      ) : active === 3 ? (
        <Card className="mt-6 w-[580px]">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              참여자가 머문 집중구역
            </Typography>
            <div className="h-[240px]">
              <ResponsivePie
                data={data}
                margin={{ top: 20, right: 60, bottom: 40, left: 60 }}
                valueFormat=" >-.1%"
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: "pastel1" }}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
              />
            </div>
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
          </CardBody>
        </Card>
      ) : active === 4 ? (
        <Card className="mt-6 w-[580px]">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              참여자가 처음 선택한 지역
            </Typography>
            <div className="flex justify-center">
              <StaticImage
                className="w-[360px] rounded-3xl"
                src="../images/cart.png"
              />
            </div>
            <Typography className="mb-4 mt-2 flex justify-center text-gray-800 text-sm">
              참여자가 메타버스에 첫 접속 후, 이동수단인 카트를 타고 처음 이동할
              지역으로 선택한 순위
            </Typography>
            <div className="h-[240px] mt-12">
              <ResponsivePie
                data={data_cart}
                margin={{ top: 20, right: 60, bottom: 40, left: 60 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: "pastel2" }}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
              />
            </div>
          </CardBody>
        </Card>
      ) : null}

      <div className="mt-6">
        <ButtonGroup variant="outlined" color="blue-gray">
          <IconButton onClick={prev}>
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton onClick={next}>
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default SiteStats
