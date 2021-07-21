import React from "react"
// import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useForm } from "react-hook-form"

import * as styles from "./publish.module.css"

import { useMissionFormData } from "./publishMissionContext"
import TagsInput from "../TagsInput/tagsInput"
import Logo from "../../svg/logo"
import AppleStore from "../../svg/appleStore"
import GooleStore from "../../svg/googleStore"

const Mission = () => {
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
    setMissionData({ ...missionData, ...data })
    // navigate("/app/publish/dates")
  }

  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault()
  }

  return (
    <section className={styles.section}>
      <div className={styles.formWrapper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => checkKeyDown(e)}
          className={styles.form}
          role="presentation"
        >
          <h1 className="margin-b-md text-center">Décris-nous ta mission !</h1>
          <div className="flex-column margin-b-md">
            <label>
              Titre
              <input
                type="text"
                {...register("title", { required: true, maxLength: 180 })}
              />
            </label>
          </div>
          <div className="flex-column margin-b-md">
            <label>
              Description
              <textarea {...register("description", { required: true })} />
            </label>
          </div>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Nombre de bénévoles souhaités
                <input
                  type="number"
                  {...register("volunteer", { required: true })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Ajoute une photo
                <input
                  type="text"
                  {...register("image", { required: true, maxLength: 100 })}
                />
              </label>
            </div>
          </div>
          <h2 className="margin-b-sm margin-t-md text-center">
            Recherche un type de profil !
          </h2>
          <p className="text-center padding-l-lg padding-r-lg margin-b-md">
            Entrez les compétences et centres d’intérêt que vous recherchez chez
            vos bénévoles. Un système de matching est prévu pour aider les
            bénévoles à trouver les missions.
          </p>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label htmlFor="compInput">
                Compétences
                <TagsInput
                  id="compInput"
                  title="competencies"
                  useMissionFormData={[missionData, setMissionData]}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label htmlFor="IntInput">
                Centre d'intéret
                <TagsInput
                  id="IntInput"
                  title="interests"
                  useMissionFormData={[missionData, setMissionData]}
                />
              </label>
            </div>
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

export default Mission
