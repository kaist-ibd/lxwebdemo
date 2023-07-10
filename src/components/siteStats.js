import React from "react"
import {
  Button,
  Card,
  CardBody,
  Typography,
  IconButton,
  ButtonGroup,
} from "@material-tailwind/react"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveCirclePacking } from "@nivo/circle-packing"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

const data_circle = {
  "name": "지역",
  "color": "hsl(154, 70%, 50%)",
  "children": [
    {
      "name": "viz",
      "color": "hsl(140, 70%, 50%)",
      "children": [
        {
          "name": "stack",
          "color": "hsl(153, 70%, 50%)",
          "children": [
            {
              "name": "cchart",
              "color": "hsl(79, 70%, 50%)",
              "loc": 85284
            },
            {
              "name": "xAxis",
              "color": "hsl(39, 70%, 50%)",
              "loc": 155050
            },
            {
              "name": "yAxis",
              "color": "hsl(55, 70%, 50%)",
              "loc": 118516
            },
            {
              "name": "layers",
              "color": "hsl(96, 70%, 50%)",
              "loc": 36262
            }
          ]
        },
        {
          "name": "ppie",
          "color": "hsl(219, 70%, 50%)",
          "children": [
            {
              "name": "chart",
              "color": "hsl(87, 70%, 50%)",
              "children": [
                {
                  "name": "pie",
                  "color": "hsl(103, 70%, 50%)",
                  "children": [
                    {
                      "name": "outline",
                      "color": "hsl(26, 70%, 50%)",
                      "loc": 58970
                    },
                    {
                      "name": "slices",
                      "color": "hsl(315, 70%, 50%)",
                      "loc": 74043
                    },
                    {
                      "name": "bbox",
                      "color": "hsl(103, 70%, 50%)",
                      "loc": 173849
                    }
                  ]
                },
                {
                  "name": "donut",
                  "color": "hsl(103, 70%, 50%)",
                  "loc": 140114
                },
                {
                  "name": "gauge",
                  "color": "hsl(42, 70%, 50%)",
                  "loc": 105381
                }
              ]
            },
            {
              "name": "legends",
              "color": "hsl(145, 70%, 50%)",
              "loc": 34333
            }
          ]
        }
      ]
    },
    {
      "name": "colors",
      "color": "hsl(271, 70%, 50%)",
      "children": [
        {
          "name": "rgb",
          "color": "hsl(263, 70%, 50%)",
          "loc": 135565
        },
        {
          "name": "hsl",
          "color": "hsl(318, 70%, 50%)",
          "loc": 192910
        }
      ]
    },
    {
      "name": "utils",
      "color": "hsl(205, 70%, 50%)",
      "children": [
        {
          "name": "randomize",
          "color": "hsl(66, 70%, 50%)",
          "loc": 196850
        },
        {
          "name": "resetClock",
          "color": "hsl(244, 70%, 50%)",
          "loc": 48996
        },
        {
          "name": "noop",
          "color": "hsl(265, 70%, 50%)",
          "loc": 10082
        },
        {
          "name": "tick",
          "color": "hsl(198, 70%, 50%)",
          "loc": 193465
        },
        {
          "name": "forceGC",
          "color": "hsl(221, 70%, 50%)",
          "loc": 118666
        },
        {
          "name": "stackTrace",
          "color": "hsl(333, 70%, 50%)",
          "loc": 195056
        },
        {
          "name": "dbg",
          "color": "hsl(67, 70%, 50%)",
          "loc": 51683
        }
      ]
    },
    {
      "name": "generators",
      "color": "hsl(118, 70%, 50%)",
      "children": [
        {
          "name": "address",
          "color": "hsl(346, 70%, 50%)",
          "loc": 3318
        },
        {
          "name": "city",
          "color": "hsl(26, 70%, 50%)",
          "loc": 193178
        },
        {
          "name": "animal",
          "color": "hsl(329, 70%, 50%)",
          "loc": 195227
        },
        {
          "name": "movie",
          "color": "hsl(294, 70%, 50%)",
          "loc": 1998
        },
        {
          "name": "user",
          "color": "hsl(81, 70%, 50%)",
          "loc": 193308
        }
      ]
    },
    {
      "name": "set",
      "color": "hsl(103, 70%, 50%)",
      "children": [
        {
          "name": "clone",
          "color": "hsl(343, 70%, 50%)",
          "loc": 187870
        },
        {
          "name": "intersect",
          "color": "hsl(338, 70%, 50%)",
          "loc": 185921
        },
        {
          "name": "merge",
          "color": "hsl(116, 70%, 50%)",
          "loc": 166464
        },
        {
          "name": "reverse",
          "color": "hsl(241, 70%, 50%)",
          "loc": 53417
        },
        {
          "name": "toArray",
          "color": "hsl(304, 70%, 50%)",
          "loc": 157320
        },
        {
          "name": "toObject",
          "color": "hsl(73, 70%, 50%)",
          "loc": 66810
        },
        {
          "name": "fromCSV",
          "color": "hsl(156, 70%, 50%)",
          "loc": 137189
        },
        {
          "name": "slice",
          "color": "hsl(193, 70%, 50%)",
          "loc": 14572
        },
        {
          "name": "append",
          "color": "hsl(50, 70%, 50%)",
          "loc": 45356
        },
        {
          "name": "prepend",
          "color": "hsl(274, 70%, 50%)",
          "loc": 78713
        },
        {
          "name": "shuffle",
          "color": "hsl(221, 70%, 50%)",
          "loc": 34571
        },
        {
          "name": "pick",
          "color": "hsl(209, 70%, 50%)",
          "loc": 69669
        },
        {
          "name": "plouc",
          "color": "hsl(189, 70%, 50%)",
          "loc": 146035
        }
      ]
    },
    {
      "name": "text",
      "color": "hsl(304, 70%, 50%)",
      "children": [
        {
          "name": "trim",
          "color": "hsl(57, 70%, 50%)",
          "loc": 157576
        },
        {
          "name": "slugify",
          "color": "hsl(171, 70%, 50%)",
          "loc": 57165
        },
        {
          "name": "snakeCase",
          "color": "hsl(296, 70%, 50%)",
          "loc": 46862
        },
        {
          "name": "camelCase",
          "color": "hsl(314, 70%, 50%)",
          "loc": 43743
        },
        {
          "name": "repeat",
          "color": "hsl(75, 70%, 50%)",
          "loc": 190601
        },
        {
          "name": "padLeft",
          "color": "hsl(117, 70%, 50%)",
          "loc": 145514
        },
        {
          "name": "padRight",
          "color": "hsl(157, 70%, 50%)",
          "loc": 40622
        },
        {
          "name": "sanitize",
          "color": "hsl(61, 70%, 50%)",
          "loc": 6432
        },
        {
          "name": "ploucify",
          "color": "hsl(161, 70%, 50%)",
          "loc": 198528
        }
      ]
    },
    {
      "name": "misc",
      "color": "hsl(35, 70%, 50%)",
      "children": [
        {
          "name": "greetings",
          "color": "hsl(42, 70%, 50%)",
          "children": [
            {
              "name": "hey",
              "color": "hsl(303, 70%, 50%)",
              "loc": 113588
            },
            {
              "name": "HOWDY",
              "color": "hsl(170, 70%, 50%)",
              "loc": 98924
            },
            {
              "name": "aloha",
              "color": "hsl(307, 70%, 50%)",
              "loc": 127380
            },
            {
              "name": "AHOY",
              "color": "hsl(307, 70%, 50%)",
              "loc": 116459
            }
          ]
        },
        {
          "name": "other",
          "color": "hsl(79, 70%, 50%)",
          "loc": 69086
        },
        {
          "name": "path",
          "color": "hsl(134, 70%, 50%)",
          "children": [
            {
              "name": "pathA",
              "color": "hsl(44, 70%, 50%)",
              "loc": 144659
            },
            {
              "name": "pathB",
              "color": "hsl(334, 70%, 50%)",
              "children": [
                {
                  "name": "pathB1",
                  "color": "hsl(9, 70%, 50%)",
                  "loc": 198349
                },
                {
                  "name": "pathB2",
                  "color": "hsl(278, 70%, 50%)",
                  "loc": 75156
                },
                {
                  "name": "pathB3",
                  "color": "hsl(326, 70%, 50%)",
                  "loc": 155795
                },
                {
                  "name": "pathB4",
                  "color": "hsl(202, 70%, 50%)",
                  "loc": 168628
                }
              ]
            },
            {
              "name": "pathC",
              "color": "hsl(177, 70%, 50%)",
              "children": [
                {
                  "name": "pathC1",
                  "color": "hsl(211, 70%, 50%)",
                  "loc": 98954
                },
                {
                  "name": "pathC2",
                  "color": "hsl(288, 70%, 50%)",
                  "loc": 172909
                },
                {
                  "name": "pathC3",
                  "color": "hsl(270, 70%, 50%)",
                  "loc": 45591
                },
                {
                  "name": "pathC4",
                  "color": "hsl(177, 70%, 50%)",
                  "loc": 129232
                },
                {
                  "name": "pathC5",
                  "color": "hsl(309, 70%, 50%)",
                  "loc": 49620
                },
                {
                  "name": "pathC6",
                  "color": "hsl(196, 70%, 50%)",
                  "loc": 182014
                },
                {
                  "name": "pathC7",
                  "color": "hsl(25, 70%, 50%)",
                  "loc": 90894
                },
                {
                  "name": "pathC8",
                  "color": "hsl(35, 70%, 50%)",
                  "loc": 116625
                },
                {
                  "name": "pathC9",
                  "color": "hsl(253, 70%, 50%)",
                  "loc": 42936
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

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
    if (active === 3) return

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
          <p className="text-xl">지역 관련 데이터 통계</p>
        </Button>
      </div>
      {active === 1 ? (
        <Card className="mt-6 w-[580px]">
          <div class="h-[250px]">
            <ResponsiveCirclePacking
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
            />
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
              참여자가 머문 구역
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
      ) : active === 3 ? (
        <Card className="mt-6 w-[580px]"></Card>
      ) : null}

      <div className="mt-6">
        <ButtonGroup variant="outlined" color="blue-gray">
          <IconButton onClick={prev}>
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton onClick={next}>
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default SiteStats
