import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as hero from "./hero.module.css"

import Card from "./card"

const EQUIPE_DATA = [
  {
    name: "Mélissa Aoun",
    desc: "Fondatrice de YOUGGY",
    img: "melissa",
    title: "Aider ne devrait pas être le parcours du combattant !",
    quote:
      " J'ai imaginé YOUGGY car j'étais dans l'impossibilité de venir en aide quand j'en ai ressenti le besoin.",
  },
  {
    name: "Yvette Dorcin",
    desc: "Responsable des partenaires",
    img: "yvette",
    title: "Aider ne devrait pas être le parcours du combattant !",
    quote:
      " J'ai imaginé YOUGGY car j'étais dans l'impossibilité de venir en aide quand j'en ai ressenti le besoin.",
  },
  {
    name: "Émilie Tossan",
    desc: "Product Owner Partner",
    img: "emilie",
    title: "Aider ne devrait pas être le parcours du combattant !",
    quote:
      " J'ai imaginé YOUGGY car j'étais dans l'impossibilité de venir en aide quand j'en ai ressenti le besoin.",
  },
  {
    name: "Philippe Braun",
    desc: "Responsable Technique",
    img: "philippe",
    title: "Aider ne devrait pas être le parcours du combattant !",
    quote:
      " J'ai imaginé YOUGGY car j'étais dans l'impossibilité de venir en aide quand j'en ai ressenti le besoin.",
  },
]

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      melissa: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "Melissa" }
      ) {
        childImageSharp {
          gatsbyImageData(
            height: 400
            width: 250
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      yvette: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "Yvette" }
      ) {
        childImageSharp {
          gatsbyImageData(
            height: 400
            width: 250
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      emilie: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "Emilie" }
      ) {
        childImageSharp {
          gatsbyImageData(
            height: 400
            width: 250
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      philippe: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "Philippe" }
      ) {
        childImageSharp {
          gatsbyImageData(
            height: 400
            width: 250
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)
  return (
    <section className={`margin-t-xl ${hero.main}`}>
      {EQUIPE_DATA.map((person, i) => {
        return (
          <Card
            key={i}
            name={person.name}
            desc={person.desc}
            img={data[person.img].childImageSharp.gatsbyImageData}
            title={person.title}
            quote={person.quote}
          />
        )
      })}
    </section>
  )
}

export default Hero
