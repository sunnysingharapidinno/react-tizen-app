import { Route, Routes } from "react-router-dom"
import { routeList } from "./RouteList"

const Routing = () => {
  return (
    <Routes>
      {routeList.map((item, i) => (
        <Route key={`${i + 1}`} path={item.path} element={item.element} />
      ))}
    </Routes>
  )
}

export default Routing
