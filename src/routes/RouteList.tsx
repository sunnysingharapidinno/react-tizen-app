import { gameDetailsPath, homePath, profileDetailsPath } from "./path"
import GameDetails from "modules/game-details/GameDetails"
import Home from "modules/home/Home"
import ProfileDetails from "modules/profile-details/ProfileDetails"
import { RouteObject } from "react-router-dom"

export const routeList: RouteObject[] = [
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: gameDetailsPath,
    element: <GameDetails />,
  },
  {
    path: profileDetailsPath,
    element: <ProfileDetails />,
  },
]
