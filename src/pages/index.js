import * as React from "react"

import Layout from "../components/Layout/layout"
import FullPage from "../components/FullPage/fullPage"
import TwoColSection from "../components/TwoColSection/twoColSection"

const IndexPage = () => {
  return (
    <Layout background="yellow">
      <FullPage />
      <TwoColSection />
    </Layout>
  )
}

export default IndexPage
