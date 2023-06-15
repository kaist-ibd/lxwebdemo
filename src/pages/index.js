import * as React from "react"
import { Helmet } from 'react-helmet';

import StatsCards from "../components/statsCards";
import Data from "../components/data";

const IndexPage = () => (
  <main>
    <Helmet>
      <title>IBD-LX Demo</title>
    </Helmet>
    <StatsCards stats={Data} />
  </main>
)

export default IndexPage
