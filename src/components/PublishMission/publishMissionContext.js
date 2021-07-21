import React, { createContext, useContext, useState } from "react"

const PublishMissionContext = createContext()

export function useMissionFormData() {
  const context = useContext(PublishMissionContext)
  if (context === undefined) {
    throw new Error(
      "useMissionFormData must be used within a PublishMissionProvider"
    )
  }
  return context
}

export const PublishMissionProvider = ({ children }) => {
  const [missionData, setMissionData] = useState({})
  console.log(missionData)

  return (
    <PublishMissionContext.Provider value={[missionData, setMissionData]}>
      {children}
    </PublishMissionContext.Provider>
  )
}
