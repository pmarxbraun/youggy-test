import React from "react"
// import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useForm } from "react-hook-form"

import * as styles from "./signup.module.css"
import { countryList } from "../../Config/countries"

const Signup = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true })
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <section className={styles.section}>
      <div className={styles.formWrapper}>
        <h1 className="margin-b-md">Inscription Association</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div
            className="flex-row space-between margin-b-md"
            style={{ columnGap: "var(--space-lg)" }}
          >
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Nom de l’association
                <input
                  type="text"
                  placeholder="Nom de l’association"
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Secteur d’activité
                <input
                  type="text"
                  placeholder="Secteur d’activité"
                  {...register("sector", { required: true, maxLength: 100 })}
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
                Pays de provenance
                <select {...register("country", { required: true })}>
                  {countryList.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Numéro RNA
                <input
                  type="number"
                  placeholder="Numéro RNA"
                  {...register("RNA", { required: true })}
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
                Numéro de téléphone
                <input
                  type="tel"
                  placeholder="Téléphone"
                  {...register("mobile_number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Adresse email
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Créer un compte"
            className={`${styles.submit}`}
          />
        </form>
      </div>
      <div className={styles.rightSection}>
        <h2 className="padding-md text-xl" style={{ textAlign: "right" }}>
          Prêt à nous faire partager vos futures missions ?
        </h2>
        <GatsbyImage image={getImage(data.file)} alt={data.file.name} />
      </div>
    </section>
  )
}

export default Signup
