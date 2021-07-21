import React from "react"
import { Link } from "gatsby"

import SocialIcons from "../../svg/socialIcons"

import * as footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={`snap-child ${footerStyles.footer}`}>
    <h3 className="margin-b-sm">Contact</h3>
    <p>
      Associations : <a href="mailto:asso@youggy.com">asso@youggy.com</a>
    </p>
    <p>
      Bénévoles : <a href="mailto:asso@youggy.com">hello@youggy.com</a>
    </p>
    <SocialIcons />
    <Link
      className="text-xs margin-t-md"
      to="/conditions-generales-d-utilisation"
    >
      Conditions générales d'utilisation
    </Link>
    <p className="text-xs margin-t-sm">
      © 2021 YOUGGY - Paris 75011 - Tous droits réservés
    </p>
  </footer>
)

export default Footer
