import React from "react"
import { Router } from "@reach/router"

import routes from "../Config/routes"
import AppRoutes from "../components/Private/privateRoute"
import Layout from "../components/Layout/layout"
import { AuthProvider } from "../Context/index.js"
import { PublishMissionProvider } from "../components/PublishMission/publishMissionContext"

const App = () => (
  <Layout asso>
    <AuthProvider>
      <PublishMissionProvider>
        <Router>
          {routes.map((route) => (
            <AppRoutes
              key={route.path}
              path={`${route.path}`}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Router>
      </PublishMissionProvider>
    </AuthProvider>
  </Layout>
)

export default App
