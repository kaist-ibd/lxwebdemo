import React from "react"

import { SectionsContainer, Section } from "react-fullpage"

// import LeafletMain from "./leafletMain"
// import LeafletDT from "./leafletDT"
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
    verticalAlign: true,
    arrowNavigation: true,
  }

  return (
    <>
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
