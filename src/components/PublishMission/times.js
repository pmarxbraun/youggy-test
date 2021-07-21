import React from "react"
import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useForm } from "react-hook-form"

import * as styles from "./publish.module.css"

import { useMissionFormData } from "./publishMissionContext"
import Logo from "../../svg/logo"
import AppleStore from "../../svg/appleStore"
import GooleStore from "../../svg/googleStore"

const Times = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "iPhone 12" }, sourceInstanceName: { eq: "images" }) {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            quality: 100
            placeholder: DOMINANT_COLOR
            height: 500
          )
        }
      }
    }
  `)

  const { register, handleSubmit } = useForm()

  const [missionData, setMissionData] = useMissionFormData()

  const onSubmit = (data) => {
    const { times } = data
    setMissionData({ ...missionData, times })
    navigate("/app/publish/place")
  }

  return (
    <section className={styles.section}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <button
            onClick={() => navigate("/app/publish/dates")}
            className="margin-l-sm"
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
          >
            ‹ Retour
          </button>
          <h1 className="margin-t-sm margin-b-xs text-center">
            Indique tes horaires
          </h1>
          <p className="text-center padding-l-lg padding-r-lg">
            Pour participer à la mission, les bénévoles pourront choisir les
            horaires qui correspondent à leurs disponibilités. Sélectionnez les
            jours et indiquez les horaires.
          </p>
          <div className="flex-column margin-b-md">
            <label>
              Titre
              <input
                type="text"
                {...register("times", { required: true, maxLength: 180 })}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Suivant"
            className={`${styles.submit}`}
            style={{ float: "right" }}
          />
        </form>
      </div>
      <div className={styles.leftSection}>
        <Logo />
        <h2 className="text-center text-md margin-t-sm margin-b-sm">
          Télécharge l'application dès maintenant !
        </h2>
        <div
          className="flex-row margin-b-md"
          style={{ width: "100%", justifyContent: "space-evenly" }}
        >
          <a
            href="https://apps.apple.com/fr/app/youggy/id1523407652"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <AppleStore />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.youggyi"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <GooleStore />
          </a>
        </div>
        <GatsbyImage image={getImage(data.file)} alt={data.file.name} />
      </div>
    </section>
  )
}

export default Times
