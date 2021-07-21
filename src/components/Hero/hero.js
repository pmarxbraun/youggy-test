import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AppleStore from "../../svg/appleStore"
import GoogleStore from "../../svg/googleStore"

import * as hero from "./hero.module.css"

const Hero = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "logo-ecrit-blanc" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      iPadiPhone: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "ipad-iphone" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const logo = getImage(data.logo)
  const iPadiPhone = getImage(data.iPadiPhone)

  return (
    <section className={`${hero.main} snap-child`}>
      <div>
        <GatsbyImage image={iPadiPhone} alt="" />
      </div>
      <div className={`flex-column flex-align-center`}>
        <GatsbyImage className="margin-b-sm margin-t-xs" image={logo} alt="" />
        <div className="flex-horizontal">
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
      </div>
    </section>
  )
}

export default Hero
