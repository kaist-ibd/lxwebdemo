import React from "react"
import Stat from "./stat"
import MapCards from "./mapCards"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Carousel } from "@material-tailwind/react"
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage"

const StatsCards = ({ stats }) => {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  }

  return (
    <div>
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        <Section verticalAlign="true">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0 items-center">
            <div className="flex flex-wrap justify-center mb-36 mt-16">
              <figure className="relative h-full w-full">
                <Carousel className="rounded-xl">
                  <StaticImage
                    className="h-full w-full rounded-full"
                    src="../images/bg.png"
                  />
                  <StaticImage
                    className="h-full w-full rounded-full"
                    src="../images/bg2.png"
                  />
                  <StaticImage
                    className="h-full w-full rounded-full"
                    src="../images/bg3.png"
                  />
                </Carousel>
                <figcaption className="absolute top-16 left-2/4 flex -translate-x-2/4 justify-center rounded-xl border-4 border-white bg-white/50 py-6 px-8 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <div className="flex flex-wrap flex-col">
                    <Typography
                      variant="h3"
                      color="blue-gray"
                      className="justify-center"
                    >
                      KAIST x LX
                    </Typography>
                    <Typography
                      variant="h6"
                      color="gray"
                      className="mt-2 font-normal justify-center flex"
                    >
                      대전 메타버스
                    </Typography>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </Section>
        <Section verticalAlign="true">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="flex flex-wrap justify-center mb-5">
              <div className="w-96 ml-2 mr-2 ">
                <span className="leading-normal font-bold text-2xl">
                  메타버스 공간정보 데이터
                </span>
              </div>
              <div className="w-96 ml-2 mr-2" />
              <div className="w-96 ml-2 mr-2" />
            </div>
            <MapCards />
          </div>
        </Section>
        <Section>
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="flex flex-wrap justify-center mb-5">
              <div className="w-96 ml-2 mr-2">
                <span className="leading-normal font-bold text-2xl">
                  메타버스 사용자 데이터
                </span>
              </div>
              <div className="w-96 ml-2 mr-2" />
              <div className="w-96 ml-2 mr-2" />
            </div>
            <div className="flex flex-wrap justify-center">
              {stats.map(stat => (
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
        </Section>
      </SectionsContainer>
    </div>
  )
}

export default StatsCards
