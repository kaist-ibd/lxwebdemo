import React from "react"

import { SectionsContainer, Section } from "react-fullpage"
import { Navbar, Typography } from "@material-tailwind/react"

import MapSecondScreen from "./MapSecondScreen"
import MapFirstScreen from "./MapFirstScreen"
import MainCarousel from "./mainCarousel"
import OverallStats from "./overallStats"
import McMap from "./mcMap"
import SiteStats from "./siteStats"
import QuizStats from "./quizStats"
import EtcStats from "./etcStats"
import NPCStats from "./npcStats"

const Layout = () => {
  const options = {
    sectionClassName: "section",
    anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    scrollBar: false,
    navigation: true,
    // verticalAlign: true,
    arrowNavigation: true,
  }

  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          {url.slice(-1) === "1" ? (
            <Typography
              as="a"
              href="#1"
              className="mr-4 cursor-pointer font-bold text-kaist"
            >
              대전 메타버스
            </Typography>
          ) : (
            <Typography
              as="a"
              href="#2"
              className="mr-4 cursor-pointer font-bold"
            >
              대전 메타버스
            </Typography>
          )}
          <div className="flex gap-5">
            {url.slice(-1) === "2" ? (
              <Typography
                as="a"
                href="#2"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                디지털 트윈
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#2"
                className="mr-4 cursor-pointer font-medium"
              >
                디지털 트윈
              </Typography>
            )}
            {url.slice(-1) === "3" ? (
              <Typography
                as="a"
                href="#3"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                메타버스 갤러리
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#4"
                className="mr-4 cursor-pointer font-medium"
              >
                메타버스 갤러리
              </Typography>
            )}
            {url.slice(-1) === "4" ? (
              <Typography
                as="a"
                href="#4"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                데이터 현황
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#2"
                className="mr-4 cursor-pointer font-medium"
              >
                데이터 현황
              </Typography>
            )}
            {url.slice(-1) === "5" ? (
              <Typography
                as="a"
                href="#5"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                공간정보 시각화
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#5"
                className="mr-4 cursor-pointer font-medium"
              >
                공간정보 시각화
              </Typography>
            )}
            {url.slice(-1) === "6" ? (
              <Typography
                as="a"
                href="#6"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                구역 통계
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#6"
                className="mr-4 cursor-pointer font-medium"
              >
                구역 통계
              </Typography>
            )}
            {url.slice(-1) === "7" ? (
              <Typography
                as="a"
                href="#7"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                퀴즈 통계
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#7"
                className="mr-4 cursor-pointer font-medium"
              >
                퀴즈 통계
              </Typography>
            )}
            {url.slice(-1) === "8" ? (
              <Typography
                as="a"
                href="#8"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                NPC 통계
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#8"
                className="mr-4 cursor-pointer font-medium"
              >
                NPC 통계
              </Typography>
            )}
            {url.slice(-1) === "9" ? (
              <Typography
                as="a"
                href="#9"
                className="mr-4 cursor-pointer font-medium text-kaist"
              >
                그외 통계
              </Typography>
            ) : (
              <Typography
                as="a"
                href="#9"
                className="mr-4 cursor-pointer font-medium"
              >
                그외 통계
              </Typography>
            )}
          </div>
        </div>
      </Navbar>
      <SectionsContainer {...options}>
        <Section>
          <MapFirstScreen />
        </Section>
        <Section>
          <MapSecondScreen />
        </Section>
        <Section>
          <MainCarousel />
        </Section>
        <Section>
          <OverallStats />
        </Section>
        <Section>
          <McMap />
        </Section>
        <Section>
          <SiteStats />
        </Section>
        <Section>
          <QuizStats />
        </Section>
        <Section>
          <NPCStats />
        </Section>
        <Section>
          <EtcStats />
        </Section>
      </SectionsContainer>
    </>
  )
}

export default Layout
