import React from "react"
import {
  Button,
  Card,
  CardBody,
  Typography,
  IconButton,
  ButtonGroup,
} from "@material-tailwind/react"
import { StaticImage } from "gatsby-plugin-image"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveWaffle } from "@nivo/waffle"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

const data_quiz = [
  {
    quiz: "꿈돌이 행사",
    정답: 101,
    정답Color: "hsl(228, 70%, 50%)",
    오답: 41,
    오답Color: "hsl(33, 70%, 50%)",
  },
  {
    quiz: "꿈돌이 연도",
    정답: 106,
    정답Color: "hsl(224, 70%, 50%)",
    오답: 33,
    오답Color: "hsl(338, 70%, 50%)",
  },
  {
    quiz: "꿈돌이 귀",
    정답: 82,
    정답Color: "hsl(237, 70%, 50%)",
    오답: 54,
    오답Color: "hsl(38, 70%, 50%)",
  },
  {
    quiz: "누리호 기관",
    정답: 64,
    정답Color: "hsl(96, 70%, 50%)",
    오답: 47,
    오답Color: "hsl(161, 70%, 50%)",
  },
  {
    quiz: "누리호 연료",
    정답: 50,
    정답Color: "hsl(259, 70%, 50%)",
    오답: 61,
    오답Color: "hsl(312, 70%, 50%)",
  },
  {
    quiz: "누리호 재료",
    정답: 103,
    정답Color: "hsl(83, 70%, 50%)",
    오답: 11,
    오답Color: "hsl(177, 70%, 50%)",
  },
]

const data_1 = [
  {
    id: "1",
    label: "정답 - 엑스포",
    value: 101,
  },
  {
    id: "2",
    label: "오답 - 대전사이언스페스티벌",
    value: 22,
  },
  {
    id: "3",
    label: "오답 - 대전빵축제",
    value: 19,
  },
]

const data_2 = [
  {
    id: "1",
    label: "정답 - 1993년",
    value: 106,
  },
  {
    id: "2",
    label: "오답 - 1997년",
    value: 22,
  },
  {
    id: "3",
    label: "오답 - 1990년",
    value: 11,
  },
]

const data_3 = [
  {
    id: "1",
    label: "정답 - 삼각형",
    value: 82,
  },
  {
    id: "2",
    label: "오답 - 구",
    value: 44,
  },
  {
    id: "3",
    label: "오답 - 사각형",
    value: 10,
  },
]

const data_4 = [
  {
    id: "1",
    label: "정답 - KARI",
    value: 64,
  },
  {
    id: "2",
    label: "오답 - KAIST",
    value: 38,
  },
  {
    id: "3",
    label: "오답 - ETRI",
    value: 9,
  },
]

const data_5 = [
  {
    id: "1",
    label: "정답 - 액체연료",
    value: 50,
  },
  {
    id: "2",
    label: "오답 - 고체연료",
    value: 38,
  },
  {
    id: "3",
    label: "오답 - 기체연료",
    value: 23,
  },
]

const data_6 = [
  {
    id: "1",
    label: "정답 - 티타늄",
    value: 103,
  },
  {
    id: "2",
    label: "오답 - 다이아몬드",
    value: 8,
  },
  {
    id: "3",
    label: "오답 - 은",
    value: 3,
  },
]

const QuizStats = () => {
  const [active, setActive] = React.useState(1)
  const getItemProps = index => ({
    className: active === index ? "bg-blue-gray-100 text-blue-gray-900" : "",
    onClick: () => setActive(index),
  })

  const next = () => {
    if (active === 7) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-center mt-8">
        <Button size="lg" className="cursor-default">
          <p className="text-xl">상호작용 - 퀴즈 통계</p>
        </Button>
      </div>
      {active === 1 ? (
        <Card className="mt-6 w-[750px]">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-1 flex justify-center"
            >
              퀴즈 액티비티
            </Typography>
            <div className="flex flex-col justify-center">
              <StaticImage
                className="w-[320px] rounded-3xl self-center"
                src="../images/q.png"
              />
              <Typography className="mb-4 mt-2 flex justify-center text-gray-800 text-sm">
                참여자가 대전에 대한 6가지 퀴즈를 풀어보는 액티비티
              </Typography>
            </div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 mt-2 flex justify-center"
            >
              전체 통계
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                총 <span class="text-blue-800">753회</span>의 퀴즈 참여 이벤트
                발생.
              </p>
              <p className="self-center">
                정답 <span class="text-blue-800">506회</span>, 오답{" "}
                <span class="text-blue-800">247회</span>로 총 정답률{" "}
                <span class="text-blue-800">67.2%</span>
              </p>
            </div>
            <div className="h-[220px]">
              <ResponsiveBar
                data={data_quiz}
                keys={["정답", "오답"]}
                indexBy="quiz"
                margin={{ top: 10, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "pastel2" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "quiz",
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "수",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]],
                }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                ariaLabel="Quiz"
                barAriaLabel={e =>
                  e.id + ": " + e.formattedValue + " in quiz: " + e.indexValue
                }
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 2 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/ggg.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 1. 꿈돌이가 처음 참석한 행사는?
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">101회</span>, 오답{" "}
                <span class="text-blue-800">41회</span>로 총 정답률{" "}
                <span class="text-blue-800">71.1%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_1}
                total={142}
                rows={18}
                columns={14}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "paired" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 3 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/ggg.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 2. 꿈돌이가 탄생한 연도는?
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">106회</span>, 오답{" "}
                <span class="text-blue-800">33회</span>로 총 정답률{" "}
                <span class="text-blue-800">76.3%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_2}
                total={139}
                rows={18}
                columns={14}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "paired" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 4 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/ggg.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 3. 꿈돌이의 귀 모양은??
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">82회</span>, 오답{" "}
                <span class="text-blue-800">54회</span>로 총 정답률{" "}
                <span class="text-blue-800">60.3%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_3}
                total={136}
                rows={18}
                columns={14}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "paired" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 5 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/nuri.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 4. 누리호를 만든 주관기관은?
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">64회</span>, 오답{" "}
                <span class="text-blue-800">47회</span>로 총 정답률{" "}
                <span class="text-blue-800">57.7%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_4}
                total={111}
                rows={18}
                columns={15}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "pastel2" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 6 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/nuri.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 5. 누리호가 사용한 연료의 종류는?
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">50회</span>, 오답{" "}
                <span class="text-blue-800">61회</span>로 총 정답률{" "}
                <span class="text-blue-800">45.0%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_5}
                total={111}
                rows={18}
                columns={15}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "pastel2" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </CardBody>
        </Card>
      ) : active === 7 ? (
        <Card className="mt-6 w-[680px]">
          <CardBody>
            <div className="flex justify-center">
              <StaticImage className="w-[140px]" src="../images/nuri.png" />
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 mt-2 flex justify-center"
            >
              퀴즈 6. 누리호에 사용된 재료는?
            </Typography>
            <div className="mb-3 flex flex-col justify-center text-gray-800 text-sm">
              <p className="self-center">
                정답 <span class="text-blue-800">103회</span>, 오답{" "}
                <span class="text-blue-800">11회</span>로 총 정답률{" "}
                <span class="text-blue-800">90.4%</span>
              </p>
            </div>
            <div className="h-[440px]">
              <ResponsiveWaffle
                data={data_6}
                total={114}
                rows={18}
                columns={15}
                padding={1}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "pastel2" }}
                borderRadius={3}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.3]],
                }}
                motionStagger={2}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    justify: false,
                    translateX: -100,
                    translateY: 0,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    itemTextColor: "#777",
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                          itemBackground: "#f7fafb",
                        },
                      },
                    ],
                  },
                ]}
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
          <IconButton {...getItemProps(5)}>5</IconButton>
          <IconButton {...getItemProps(6)}>6</IconButton>
          <IconButton {...getItemProps(7)}>7</IconButton>
          <IconButton onClick={next}>
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default QuizStats
