import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import {
  loginUser,
  useAuthState,
  useAuthDispatch,
} from "../../Context/index.js"
import Logo from "../../svg/logo"

import * as styles from "./login.module.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useAuthDispatch() //get the dispatch method from the useDispatch custom hook
  const { loading, errorMessage } = useAuthState() //read the values of loading and errorMessage from context

  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = { email, password }
    try {
      let response = await loginUser(dispatch, payload) //loginUser action makes the request and handles all the neccessary state changes
      console.log(response)
      if (!response.user) {
        setEmail("")
        setPassword("")
        return
      }
      navigate(`/app/profile`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.section}>
      <main className={styles.main}>
        <Logo />
        <h1
          className="margin-t-sm margin-b-md  text-lg"
          style={{ color: "white" }}
        >
          Inscrivez-vous, présentez votre association, profitez de publier vos
          missions et trouver vos bénévoles !
        </h1>
        <form onSubmit={handleLogin} className="flex-column">
          <label className="flex-column">
            Adresse email{" "}
            <input
              type="text"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex-column">
            Mot de passe{" "}
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Link
            className={styles.textButton}
            to="/app/forgot-password"
            disabled={loading}
          >
            Mot de passe oublié
          </Link>
          <div
            className="margin-t-sm flex-row space-around"
            style={{ columnGap: "var(--space-xs)" }}
          >
            <button className={styles.button} type="submit" disabled={loading}>
              Connexion
            </button>
            <Link className={styles.button} to="/app/signup" disabled={loading}>
              Inscription
            </Link>
          </div>
          {errorMessage === 500 && (
            <p>
              Oups, nous n'avons pas trouvé de compte avec ces identifiants.
            </p>
          )}
        </form>
      </main>
    </div>
  )
}

export default Login
