import Profile from "../components/Private/profile"
import Login from "../components/Private/login"
import Signup from "../components/Private/sign-up"
import ForgotPassword from "../components/Private/forgotPassword"
import NotFound from "../components/Private/notFound"
import Mission from "../components/PublishMission/mission"
import Dates from "../components/PublishMission/dates"
import Times from "../components/PublishMission/times"
import Place from "../components/PublishMission/place"

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: Signup,
    isPrivate: false,
  },
  {
    path: "/app/profile",
    component: Profile,
    isPrivate: false,
  },
  {
    path: "/app/forgot-password",
    component: ForgotPassword,
    isPrivate: false,
  },
  {
    path: "/app/*",
    component: NotFound,
    isPrivate: true,
  },
  {
    path: "/app/publish/mission",
    component: Mission,
    isPrivate: false,
  },
  {
    path: "/app/publish/dates",
    component: Dates,
    isPrivate: false,
  },
  {
    path: "/app/publish/times",
    component: Times,
    isPrivate: false,
  },
  {
    path: "/app/publish/place",
    component: Place,
    isPrivate: false,
  },
]

export default routes
