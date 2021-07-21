import React, { useState } from "react"
import { Link } from "gatsby"

import "./navbar.css"

import Close from "../../svg/close"
import Hamburger from "../../svg/hamburger"
import Logo from "../../svg/logo"
import Search from "../../svg/search"
import Profile from "../../svg/profile"
import Settings from "../../svg/settings"

const nav_links = [
  { title: "Qui sommes nous ?", slug: "/qui-sommes-nous/" },
  { title: "Nos associations", slug: "/associations/" },
  { title: "Les missions", slug: "/missions/" },
  { title: "Notre équipe", slug: "/notre-equipe/" },
]

const admin_nav_links = [
  { title: "À propos de Youggy", slug: "/qui-sommes-nous" },
  { title: "Mon association", slug: "/app/profile" },
  { title: "Publier une mission", slug: "/app/publish/mission" },
  { title: "Mes missions", slug: "/app/missions" },
  { title: "Messagerie", slug: "/app/messagerie" },
]

export default function Navbar(props) {
  const [open, setOpen] = useState(false)

  const toggleNavSmallScreen = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <div className="flex-row" style={{ alignItems: "center" }}>
        <Link className="logo margin-r-md" to="/">
          <Logo />
        </Link>
        <ul className={open ? "nav-links active" : "nav-links"}>
          {!props.asso &&
            nav_links.map((link, i) => (
              <li
                key={i}
                className="links"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
                role="presentation"
              >
                <Link to={link.slug}>{link.title}</Link>
              </li>
            ))}
          {props.asso &&
            admin_nav_links.map((link, i) => (
              <li
                key={i}
                className="links"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
                role="presentation"
              >
                <Link to={link.slug}>{link.title}</Link>
              </li>
            ))}
        </ul>
        <div
          className="hamburger"
          onClick={toggleNavSmallScreen}
          onKeyDown={() => toggleNavSmallScreen}
          role="button"
          tabIndex="0"
        >
          {open ? <Close /> : <Hamburger />}
        </div>
      </div>
      <div className="flex-row" style={{ alignItems: "center" }}>
        <Search />
        <p className="margin-l-sm links">FR</p>
        <Link className="margin-r-sm" to="/app/profile/">
          <Profile />
        </Link>
        <Link className="margin-r-sm" to="/app/profile/">
          {props.asso && <Settings />}
        </Link>
      </div>
    </nav>
  )
}
