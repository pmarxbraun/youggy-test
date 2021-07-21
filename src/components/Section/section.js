import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as section from "./section.module.css"

import Button from "../Button/button"

const Section = (props) => {
  return (
    <section
      className={`${section.main} grid-hero padding-t-lg padding-b-lg snap-child`}
    >
      <div style={{ maxWidth: "80%", margin: "auto" }}>
        <div>
          <h1 className="margin-b-xxs">{props.title}</h1>
          <h2
            style={{
              color:
                props.color === "red"
                  ? "var(--youggy-red-color"
                  : "var(--youggy-main-color",
            }}
            className="text-base margin-b-xs"
          >
            {props.subtitle}
          </h2>
          <p className="margin-b-md">{props.description}</p>
          {props.buttonLabel && (
            <Button
              buttonURL={props.buttonURL}
              buttonLabel={props.buttonLabel}
              color={props.color}
            />
          )}
        </div>
      </div>
      <div className={section.imageWrapper}>
        <GatsbyImage image={props.image} alt={props.title} />
      </div>
    </section>
  )
}

export default Section
