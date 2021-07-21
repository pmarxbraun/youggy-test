import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { useAuthDispatch, useAuthState } from "../../Context/index.js"
import { countryList } from "../../Config/countries"

import * as styles from "./profile.module.css"

const Profile = () => {
  const [state, setState] = useState("info")

  // const dispatch = useAuthDispatch() // read dispatch method from context
  // const userDetails = useAuthState() // read user details from context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const sidebar_links = [
    { title: "Informations sur l'association", value: "info" },
    { title: "Présenter votre activité", value: "activity" },
    { title: "Mise à jour du mot de passe", value: "pswd" },
  ]

  const Info = () => {
    const onSubmit = (data) => console.log(data)
    console.log(errors)

    return (
      <div>
        <h1 className="margin-b-md">$NOM DE L'ASSO</h1>
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
                  {...register("Name", { required: true, maxLength: 80 })}
                />
              </label>
            </div>
            <div className="flex-column" style={{ flex: "1 0 45%" }}>
              <label>
                Secteur d’activité
                <input
                  type="text"
                  placeholder="Secteur d’activité"
                  {...register("Sector", { required: true, maxLength: 100 })}
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
                <select {...register("Pays", { required: true })}>
                  {countryList.map((country, i) => (
                    <option value={country}>{country}</option>
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
                  {...register("Mobile number", {
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
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Mettre à jour"
            className={`${styles.submit}`}
          />
        </form>
      </div>
    )
  }

  const Activity = () => {
    const onSubmit = (data) => console.log(data)
    console.log(errors)

    return (
      <div>
        <h1 className="margin-b-md">$NOM DE L'ASSO</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Qui sommes-nous ? Que faisons-nous ?
              <textarea {...register("whoami", {})} />
            </label>
          </div>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Que recherchons-nous? Quels sont nos besoins ?
              <textarea {...register("needs", {})} />
            </label>
          </div>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Où nous trouver ?
              <input
                type="text"
                placeholder="Où nous trouver"
                {...register("findus", { required: true, maxLength: 80 })}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Enregistrer les informations"
            className={`${styles.submit}`}
          />
        </form>
      </div>
    )
  }

  const Pswd = () => {
    const onSubmit = (data) => console.log(data)
    console.log(errors)

    return (
      <div>
        <h1 className="margin-b-md">$NOM DE L'ASSO</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Mot de passe actuelle
              <input
                type="text"
                placeholder="Mot de passe actuelle"
                {...register("OldPassword", { required: true, maxLength: 80 })}
              />
            </label>
          </div>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Nouveau mot de passe
              <input
                type="text"
                placeholder="Nouveau mot de passe"
                {...register("NewPassword", { required: true, maxLength: 80 })}
              />
            </label>
          </div>
          <div className="flex-column margin-b-md" style={{ flex: "1 0 45%" }}>
            <label>
              Confirmation nouveau mot de passe
              <input
                type="text"
                placeholder="Confirmation nouveau mot de passe"
                {...register("NewPasswordConfirmation", {
                  required: true,
                  maxLength: 80,
                })}
              />
            </label>
          </div>
          <input
            type="submit"
            value="Mettre à jour"
            className={`${styles.submit}`}
          />
        </form>
      </div>
    )
  }

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <img
          style={{ width: "100%" }}
          alt=""
          src="https://via.placeholder.com/1440x300"
        />
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          {sidebar_links.map((link, i) => (
            <button
              key={i}
              onClick={() => setState(link.value)}
              className={
                state === link.value
                  ? `${styles.button_clicked}`
                  : `${styles.button_default}`
              }
            >
              {link.title}
            </button>
          ))}
        </div>
        <div className={styles.input}>
          {state === "info" && <Info />}
          {state === "activity" && <Activity />}
          {state === "pswd" && <Pswd />}
        </div>
      </div>
    </div>
  )
}

export default Profile
