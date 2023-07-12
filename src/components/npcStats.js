import React from "react"
import {
  Button,
  Card,
  CardBody,
  Typography,
  IconButton,
  Carousel,
} from "@material-tailwind/react"
import { StaticImage } from "gatsby-plugin-image"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"

const NPCStats = () => {

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-center mt-8">
        <Button size="lg" className="cursor-default">
          <p className="text-xl">상호작용 - NPC 통계</p>
        </Button>
      </div>
        <Card className="mt-6 w-[780px]">
          <CardBody>
            <div className="flex justify-center">
              <Carousel
                className="rounded-xl"
                loop={true}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="black"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4"
                  >
                    <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="black"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4"
                  >
                    <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                  </IconButton>
                )}
              >
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/1.png"
                    />
                    <p className="self-center mt-3 text-xl">1위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대동벽화마을</span> 벽화
                      그리기 액티비티 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 230회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/2.png"
                    />
                    <p className="self-center mt-3 text-xl">2위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 166회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/3.png"
                    />
                    <p className="self-center mt-3 text-xl">3위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">한빛탑 일대</span> DCC 실내전시장 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 151회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/4.png"
                    />
                    <p className="self-center mt-3 text-xl">4위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">한빛탑 일대</span> DCC 퀴즈 성공 후 히든 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 126회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/5.png"
                    />
                    <p className="self-center mt-3 text-xl">5위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 교육청 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 107회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/6.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 6위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대동벽화마을</span> 일반 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 94회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/6-1.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 6위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 일반 병아리 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 94회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/8.png"
                    />
                    <p className="self-center mt-3 text-xl">8위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대동벽화마을</span> 텔레포트 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 93회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/9.png"
                    />
                    <p className="self-center mt-3 text-xl">9위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 앉기 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 89회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/10.png"
                    />
                    <p className="self-center mt-3 text-xl">10위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대동하늘공원</span> 공원 입구 일반 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 83회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/11.png"
                    />
                    <p className="self-center mt-3 text-xl">11위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 둔산1동 행정복지센터 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 78회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/12.png"
                    />
                    <p className="self-center mt-3 text-xl">12위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 둔산2동 행정복지센터 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 75회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/13-1.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 13위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 대전경찰청 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 74회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/13-2.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 13위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">으능정이 거리</span> 스카이로드 입구 일반 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 74회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/13-3.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 13위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">으능정이 거리</span> 스카이로드 일반 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 74회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/16.png"
                    />
                    <p className="self-center mt-3 text-xl">16위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">으능정이 거리</span> 스카이로드 일반 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 73회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/17.png"
                    />
                    <p className="self-center mt-3 text-xl">17위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대전시청</span> 서구청 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 68회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/18.png"
                    />
                    <p className="self-center mt-3 text-xl">18위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">한빛탑 일대</span> DCC 내부 꿈돌이정보 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 67회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/19.png"
                    />
                    <p className="self-center mt-3 text-xl">19위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">한빛탑 일대</span> DCC 내부 히든장소 안내 NPC
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 66회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/20.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 20위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">한빛탑 일대</span> DCC 내부 누리호정보 NPC 
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 65회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/20-2.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 20위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">대동벽화마을</span> 하늘공원 일반 NPC 
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 65회
                    </p>
                  </div>
                </div>
                <div className="relative h-[600px] flex justify-center">
                  <div className="flex flex-col">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-8 mt-2 flex justify-center"
                    >
                      NPC 상호작용 순위
                    </Typography>
                    <StaticImage
                      className="rounded-3xl w-[400px] h-[400px]"
                      src="../images/npc/20-1.png"
                    />
                    <p className="self-center mt-3 text-xl">공동 20위</p>
                    <p className="self-center mt-2 text-gray-800">
                      <span className="text-cyan-800">으능정이 거리</span> 은행교 앞 일반 NPC 
                    </p>
                    <p className="self-center mt-3 mb-10 text-kaist">
                      총 65회
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </CardBody>
        </Card>
    </div>
  )
}

export default NPCStats
