import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AppleStore from "../svg/appleStore"
import GoogleStore from "../svg/googleStore"

import Layout from "../components/Layout/layout"

const EnSavoirPLus = ({ data }) => {
  const logo = getImage(data.logo)
  const iphone = getImage(data.iphone)

  return (
    <Layout background="yellow">
      <section
        style={{ backgroundColor: "var(--youggy-main-color)" }}
        className="padding-xl flex-column flex-align-center"
      >
        <GatsbyImage image={logo} alt="" />
        <h1
          className="margin-t-md margin-b-md text-md text-center"
          style={{ color: "#fff", maxWidth: "400px" }}
        >
          Télécharge l’application dès maintenant pour en savoir plus !
        </h1>
        <div className="margin-b-lg flex-horizontal">
          <a
            href="https://apps.apple.com/fr/app/youggy/id1523407652"
            target="_blank"
            rel="noreferrer"
            className="margin-r-sm"
          >
            <AppleStore />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.youggyi"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleStore />
          </a>
        </div>
        <GatsbyImage image={iphone} alt="" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    logo: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "logo-ecrit-blanc" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iphone: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "iPhone 12" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default EnSavoirPLus
