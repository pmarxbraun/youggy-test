import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import AppleStore from "../../svg/appleStore"
import GoogleStore from "../../svg/googleStore"

import * as twocolsection from "./twocolsection.module.css"

const TwoColSection = (props) => {
  const data = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "iPhone 12" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)
  return (
    <section
      className={`${twocolsection.main} grid-hero padding-t-lg padding-b-lg snap-child`}
    >
      <div className="padding-xl">
        <h1 className="margin-b-xxs">Enfin disponible !</h1>
        <p className="margin-b-md">
          Notre toute nouvelle application enfin disponible sur vos plateformes
          !
        </p>
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
      <div className={twocolsection.imageWrapper}>
        <GatsbyImage alt="" image={data.file.childImageSharp.gatsbyImageData} />
      </div>
    </section>
  )
}

export default TwoColSection
