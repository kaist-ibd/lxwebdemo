import * as React from "react"
import { Helmet } from 'react-helmet';

import Layout from "../components/layout";

import "leaflet/dist/leaflet.css";

const IndexPage = () => (
  <main>
    <Helmet>
      <title>IBD-LX Demo</title>
    </Helmet>
    <Layout />
  </main>
)

export default IndexPage
