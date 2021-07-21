import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import AppleStore from "../../svg/appleStore"
import GoogleStore from "../../svg/googleStore"

import * as section from "./section.module.css"

import Button from "../Button/button"

const SectionTwo = (props) => {
  return (
    <section className={`${section.main} snap-child`}>
      <div className={section.imageWrapper}>
        <GatsbyImage image={props.image} alt={props.title} />
      </div>
      <div className={`${section.right}`}>
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
        {props.store === true && (
          <div className={`${section.storebadges} flex-row`}>
            <a
              href="https://apps.apple.com/fr/app/youggy/id1523407652"
              target="_blank"
              rel="noreferrer"
            >
              <AppleStore />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.youggyi"
              target="_blank"
              rel="noreferrer"
            >
              <GoogleStore />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionTwo
