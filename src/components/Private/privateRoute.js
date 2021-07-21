import React from "react"
import { navigate } from "gatsby"

import { useAuthState } from "../../Context/index.js"

const AppRoutes = ({ component: Component, isPrivate, ...rest }) => {
  const user = useAuthState()

  if (isPrivate && !Boolean(user.token)) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}

export default AppRoutes
