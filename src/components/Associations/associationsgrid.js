import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { fetchAssosications } from "../../utils/fetchAssociations"

import image from "../../images/wings.svg"
import * as associationsgrid from "./associationsGrid.module.css"

const AssociationsGrid = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const scopedAssoFetch = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const movies = await fetchAssosications()
        setData(movies)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    scopedAssoFetch()
  }, [])

  return (
    <main className={associationsgrid.main}>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <h1>Patience, nous recherchons les associations...</h1>
      ) : (
        data?.results.map((movie, i) => {
          const slug = movie.title.replace(/\s+/g, "-").toLowerCase()
          return (
            <Link to={`/association/${slug}`} key={i} className="text-center">
              <div
                className={associationsgrid.card}
                style={{ backgroundImage: `url(${image})` }}
              >
                <img
                  src="https://picsum.photos/100/100"
                  style={{ width: "100px" }}
                  alt="Alt"
                />
              </div>
              <p className={associationsgrid.title}>{movie.title}</p>
              <p className={associationsgrid.producer}>{movie.producer}</p>
            </Link>
          )
        })
      )}
    </main>
  )
}

export default AssociationsGrid
