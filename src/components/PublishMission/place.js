import React from "react"
import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useForm } from "react-hook-form"

import * as styles from "./publish.module.css"

import { useMissionFormData } from "./publishMissionContext"
import { countryList } from "../../Config/countries"
import Logo from "../../svg/logo"
import AppleStore from "../../svg/appleStore"
import GooleStore from "../../svg/googleStore"

const Place = () => {
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
  }

  return (
    <section className={styles.section}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <button
            onClick={() => navigate("/app/publish/times")}
            className="margin-l-sm"
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
          >
            ‹ Retour
          </button>
          <h1 className="margin-t-sm margin-b-xs text-center">
            Indique le lieu de rendez-vous !
          </h1>
          <div className="flex-column margin-b-md">
            <label>
              Nom du lieu (facultatif)
              <input type="text" {...register("place", { maxLength: 180 })} />
            </label>
          </div>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Numero
                <input
                  type="number"
                  {...register("streetNb", { required: true })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Rue
                <input
                  type="text"
                  {...register("street", { required: true, maxLength: 100 })}
                />
              </label>
            </div>
          </div>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Code postal
                <input
                  type="number"
                  {...register("ZIPCode", { required: true })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Ville
                <input
                  type="text"
                  {...register("town", { required: true, maxLength: 100 })}
                />
              </label>
            </div>
          </div>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Pays (si à l'étranger)
                <select {...register}>
                  {countryList.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <h2 className="margin-b-sm margin-t-md text-center">
            Et un numéro de téléphone !
          </h2>
          <p className="text-center padding-l-lg padding-r-lg margin-b-md">
            Entrez le nom et le numéro de téléphone d’un responsable que le
            bénévole pourra appeler pour avoir quelque information avant le
            début de la mission ou informer un cas d’urgence.
          </p>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Nom
                <input
                  type="text"
                  {...register("contactLastName", { required: true })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Prénom
                <input
                  type="text"
                  {...register("contactFirstName", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </label>
            </div>
          </div>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Téléphone
                <input type="tel" {...register("phone", { required: true })} />
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

export default Place
