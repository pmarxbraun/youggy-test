import React, { useState } from "react"
import { Link } from "gatsby"

import * as styles from "./forgotPassword.module.css"

function ForgotPassword() {
  const [formStep, setFormStep] = useState(1)
  const [email, setEmail] = useState("")

  const handSubmit = (e) => {
    e.preventDefault()
    setFormStep((curr) => curr + 1)
    console.log(email)
  }

  console.log(formStep)
  return (
    <section className={`${styles.section} padding-t-sm`}>
      <Link
        style={{ color: "white" }}
        className="margin-t-md margin-l-md"
        to="/app/login"
      >
        ← Retour
      </Link>
      {formStep === 1 && (
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <h1
              className="margin-t-sm margin-b-lg  text-lg"
              style={{ color: "white" }}
            >
              Mot de passe oublié
            </h1>
            <form onSubmit={handSubmit} className="flex-column">
              <label className="flex-column">
                Adresse email
                <input
                  type="text"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button className={styles.button} type="submit">
                Continuer
              </button>
            </form>
          </main>
        </div>
      )}
      {formStep === 2 && (
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <h1
              className="margin-t-sm margin-b-lg  text-lg"
              style={{ color: "white" }}
            >
              Mot de passe oublié
            </h1>
            <p style={{ color: "white" }} className="margin-b-sm">
              Un e-mail a été envoyé à <b>{email}</b>. Confirmez votre adresse
              e-mail en ouvrant l’e-mail que vous avez reçu et en cliquant sur
              le lien qui apparaît.
            </p>
            <button className={styles.button} onClick={() => setFormStep(3)}>
              Besoin aide
            </button>
          </main>
        </div>
      )}
      {formStep === 3 && (
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <h1
              className="margin-t-sm margin-b-sm text-lg"
              style={{ color: "white" }}
            >
              Besoin d’aide : mot de passe oublié
            </h1>
            <p style={{ color: "white" }} className="margin-b-md">
              Si vous n’avez pas reçu d’e-mail suite à votre mot de passe
              oublié, vérifiez que l’adresse e-mail que vous avez entré est
              correct.
            </p>
            <p style={{ color: "white" }} className="margin-b-md">
              Si c’est le cas, vérifiez vos spams. Si vous êtes déjà inscrit
              chez nous et que vous avez des difficultés à vous connecter, nous
              vous invitons à nous écrire :
            </p>
            <a style={{ color: "white" }} href="mailto:asso@youggy.com">
              <b>asso@youggy.com</b>
            </a>
          </main>
        </div>
      )}
    </section>
  )
}

export default ForgotPassword
