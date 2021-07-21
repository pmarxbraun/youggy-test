import React from "react"

import Navbar from "../Navbar-Second/navbar"
import Footer from "../Footer/footer"

import * as layoutStyles from "./layout.module.css"

const Layout = (props) => {
  return (
    <div className={layoutStyles.main}>
      <Navbar asso={props.asso} />
      <div
        className={
          props.snap
            ? `${layoutStyles.children} ${layoutStyles.wrapperSnap}`
            : `${layoutStyles.children}`
        }
      >
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
