import React from "react"
import { Helmet } from "react-helmet"
import { MapContainer, TileLayer } from "react-leaflet"

import Layout from "../../components/Layout/layout"
import image from "../../images/wings.svg"
import logo from "../../images/Les_Restaurants_Du_Coeur-logo.svg"

import * as styles from "./association.module.css"

function AssociationsTemplate(props) {
  const center = [51.505, -0.09]
  const zoom = 13
  console.log(props)
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
      </Helmet>
      <div style={{ overflow: "hidden" }}>
        <img
          style={{ width: "100%" }}
          alt=""
          src="https://via.placeholder.com/1440x300"
        />
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div
            className={styles.wings}
            style={{ backgroundImage: `url(${image})` }}
          >
            <img alt="" src={logo} style={{ width: "130px" }} />
          </div>
          <div className={`${styles.data} margin-t-lg`}>
            <h2 className="text-base margin-b-sm">Qui sommes-nous ?</h2>
            <p className="text-sm margin-b-sm">
              Duis proident veniam amet amet officia laborum dolor ad ut esse
              laboris reprehenderit. Proident ea aliqua velit anim excepteur
              labore laboris velit ex aliquip cillum officia. Labore proident
              amet voluptate veniam excepteur labore. Elit mollit commodo fugiat
              laboris cupidatat veniam Lorem laborum adipisicing qui. Elit dolor
              ex tempor laborum est amet adipisicing qui incididunt. Ipsum
              fugiat veniam Lorem culpa tempor mollit.
            </p>
            <h2 className="text-base margin-b-sm">Quels sont nos besoins ?</h2>
            <p className="text-sm margin-b-sm">
              Voluptate aliquip exercitation est reprehenderit occaecat veniam
              nisi. Fugiat velit do est in voluptate et id aute ad tempor est
              commodo aliqua ut.
            </p>
            <div className="margin-t-md flex-column">
              <a
                href="mailto:contact@restosducoeur.org"
                className={`${styles.contact} bold margin-b-xs`}
              >
                contact@restosducoeur.org
              </a>
              <a
                href="https://www.restosducoeur.org"
                target="_blank"
                rel="noopenner noreferrer"
                className={`${styles.url} bold`}
              >
                www.restosducoeur.org
              </a>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div>
            <h1 className="margin-b-sm text-center">{props.id}</h1>
            <div
              className="flex-row space-even bold"
              style={{ minWidth: "400px" }}
            >
              <div className="margin-b-lg">
                <p className="text-xl">9880</p>
                <p>Participants</p>
              </div>
              <div>
                <p className="text-xl">6000</p>
                <p>J'aime</p>
              </div>
            </div>
          </div>
          <div className={styles.missions}>
            <h2 className="text-sm margin-b-sm">Mission disponibles</h2>
            <div className="grid">
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
              <img
                style={{ width: "100%" }}
                alt=""
                src="https://via.placeholder.com/240x140"
              />
            </div>
          </div>
        </div>
      </div>
      <section className={`${styles.mapSection} margin-t-lg padding-md`}>
        <MapContainer
          className={styles.map}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          // whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </section>
    </Layout>
  )
}

export default AssociationsTemplate
