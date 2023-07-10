import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Carousel, Button } from "@material-tailwind/react"

const MainCarousel = () => (
  <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0 items-center">
    <div className="flex justify-center pb-8 -pt-8">
      <Button size="lg" className="cursor-default">
        <p className="text-xl">메타버스 갤러리</p>
      </Button>
    </div>
    <div className="flex flex-wrap justify-center">
      <figure className="relative h-full w-full">
        <Carousel loop={true}>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/10-1.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  전경
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/9-1.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  대전컨벤션센터(DCC)
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  한빛탑
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg1.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  DCC 내부 전시장
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg6.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  누리호 모형
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg7.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  한빛탑 일대
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  갑천 캠핑장
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg8.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  대전시청
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  보라매공원
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg9.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  대전시청
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  한밭종각
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/24.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  대동벽화마을
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  전경
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg10.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  대동벽화마을
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  하늘공원
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg11.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  대동벽화마을
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  전경
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/13.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center"
                >
                  으능정이 거리
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  전경
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/15.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  으능정이 거리
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  야경
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg12.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  으능정이 거리
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  버스킹 공연
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg13.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  으능정이 거리
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  은행교
                </Typography>
              </div>
            </figcaption>
          </div>
          <div className="relative">
            <StaticImage
              className="h-full w-full rounded-3xl"
              src="../images/bg14.png"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-wrap flex-col">
                <Typography
                  variant="h6"
                  color="gray"
                  className="justify-center self-center"
                >
                  으능정이 거리
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="justify-center self-center"
                >
                  스카이로드
                </Typography>
              </div>
            </figcaption>
          </div>
        </Carousel>
      </figure>
    </div>
  </div>
)

export default MainCarousel
