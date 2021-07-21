import React from "react"

import { Link } from "gatsby"

import * as buttonStyles from "./button.module.css"

const Button = (props) => {
  return (
    <p className={buttonStyles.wrapper}>
      <Link
        className={
          props.color === "red"
            ? `${buttonStyles.red} padding-xs`
            : `${buttonStyles.yellow} padding-xs`
        }
        to={props.buttonURL}
      >
        {props.buttonLabel}
      </Link>
    </p>
  )
}

export default Button
/*  ceci est un test */