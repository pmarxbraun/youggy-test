// import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import "../Navbar/navbar.css"
import images from "../../images/logo-ecrit-blanc.png"
import menu from "../../images/menu.png"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [largeur, setLargeur] = useState(window.innerWidth)

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)
      if (window.innerWidth > 500) {
        setToggleMenu(false)
      }
    }
    window.addEventListener("resize", changeWidth)

    return () => {
      window.addEventListener("resize", changeWidth)
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <a href="/">
            <img src={images} alt="Logo" className="IMG" />
          </a>
          <li className="items">
            <a href="/qui-sommes-nous/">Qui sommes nous ?</a>
          </li>
          <li className="items">
            <a href="/associations/">Nos associations</a>
          </li>
          <li className="items">
            <a href="/missions/">Les missions</a>
          </li>
          <li className="items">
            <a href="/notre-equipe/">Notre equipe</a>
          </li>
          <li className="items">Recherche FR ( à venir)</li>
        </ul>
      )}

      <button onClick={toggleNavSmallScreen} className="BTN">
        <img src={menu} className="img2" />
      </button>
    </nav>
  )
}
