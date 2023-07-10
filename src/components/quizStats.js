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
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

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

const QuizStats = () => {
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
          <p className="text-xl">상호작용 - 퀴즈 통계</p>
        </Button>
      </div>
      {active === 1 ? (
        <Card className="mt-6 w-[580px]"></Card>
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
          </CardBody>
        </Card>
      ) : (
        active === 3 ? <Card className="mt-6 w-[580px]"></Card> : null
      )}

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

export default QuizStats
