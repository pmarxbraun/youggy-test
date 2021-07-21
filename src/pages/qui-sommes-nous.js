import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/layout"
import Hero from "../components//Hero/hero"
import Section from "../components/Section/section"
import SectionTwo from "../components/SectionTwo/section"

const IndexPage = ({ data }) => {
  const image = getImage(data.iphone)
  const assocation = getImage(data.assocation)
  const benevole = getImage(data.benevole)
  const ipadiphone = getImage(data.ipadiphone)

  const sections = [
    {
      title: "Qui sommes-nous ?",
      image: image,
      subtitle: "NOUS SOMMES",
      description:
        "l’application mobile qui vous permet de publier vos missions",
    },
    {
      title: "Qui sommes-nous ?",
      image: image,
      subtitle: "NOUS SOMMES",
      description: "ou qui vous permet de trouver des missions de bénévolat.",
    },
    {
      title: "Pourquoi choisir YOUGGY ?",
      image: assocation,
      subtitle: "VOUS FAÎTES PARTIE D’UNE ASSOCIATION",
      description:
        "Mettez en avant votre association. Téléchargez l’application, inscrivez votre association, publiez vos missions et trouvez vos bénévoles gratuitement.",
      buttonLabel: "En savoir plus ...",
      buttonURL: "/en-savoir-plus",
      color: "yellow",
    },
    {
      title: "Pourquoi choisir YOUGGY ?",
      image: benevole,
      subtitle: "TU VEUX AGIR EN TANT QUE BÉNÉVOLE",
      description:
        "Accède aux missions qui sont autour de toi. Télécharge l’application, inscris-toi et participe aux missions qui te ressemblent et correspondent à tes attentes.",
      buttonLabel: "En savoir plus ...",
      buttonURL: "/en-savoir-plus",
      color: "red",
    },
  ]

  return (
    <Layout background="yellow">
      <Hero />
      {sections.map((section, i) => (
        <Section
          key={i}
          title={section.title}
          image={section.image}
          subtitle={section.subtitle}
          description={section.description}
          buttonLabel={section.buttonLabel}
          buttonURL={section.buttonURL}
          color={section.color}
        />
      ))}
      <SectionTwo
        title="Comment ça fonctionne ?"
        image={ipadiphone}
        subtitle="L’APPLICATION EST DISPONIBLE !"
        description="YOUGGY est désormais présente sur Apple Store et Google Play
        et disponible sur smartphones et tablettes. "
        store={true}
        color="red"
      />
    </Layout>
  )
}

export const query = graphql`
  {
    iphone: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "association-benevole-iphone" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    assocation: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "association-iphone" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    benevole: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "benevole-iphone" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    ipadiphone: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "ipad-iphone-asso-bene" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 500
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
  }
`

export default IndexPage
