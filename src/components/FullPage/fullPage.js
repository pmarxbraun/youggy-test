import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as fullPage from "./fullpage.module.css"

const FullPage = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "logo-ecrit-blanc" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 700
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)
  return (
    <section className={`${fullPage.main} snap-child`}>
      <GatsbyImage
        alt=""
        image={data.file.childImageSharp.gatsbyImageData}
        className={fullPage.img}
      />
    </section>
  )
}

export default FullPage
