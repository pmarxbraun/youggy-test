import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as cardstyles from "./card.module.css"

const Card = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        className={`${cardstyles.card}`}
        role="button"
        tabIndex={0}
      >
        <div
          className={
            !visible ? `${cardstyles.hidden}` : `${cardstyles.visible}`
          }
        >
          <div>
            <h3
              className={`text-base text-center margin-b-xs ${cardstyles.title}`}
            >
              {props.title}
            </h3>
            <p className={`text-sm text-center`}>{props.quote}</p>
          </div>
        </div>
        <div>
          <GatsbyImage
            image={props.img}
            className={`margin-b-xs ${cardstyles.img}`}
          />
          <div>
            <h2 className={`text-base ${cardstyles.name}`}>{props.name}</h2>
            <p className={`text-sm ${cardstyles.desc}`}>{props.desc}</p>
          </div>
        </div>
      </div>
      <div className={`snap-child ${cardstyles.mobileCard}`}>
        <GatsbyImage
          image={props.img}
          className={`margin-b-xs ${cardstyles.img}`}
        />
        <div className="margin-b-sm">
          <h2 className={`text-base ${cardstyles.name}`}>{props.name}</h2>
          <p className={`text-sm ${cardstyles.desc}`}>{props.desc}</p>
        </div>
        <div className="margin-b-xl">
          <h3
            className={`text-base text-center margin-b-xs ${cardstyles.title}`}
          >
            {props.title}
          </h3>
          <p className={`text-sm text-center`}>{props.quote}</p>
        </div>
      </div>
    </>
  )
}

export default Card
