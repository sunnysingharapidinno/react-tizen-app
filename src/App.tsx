import Home from "modules/home/Home"
import "./App.css"
import { useRoutes } from "react-router-dom"
import { routeList } from "routes/RouteList"
import PageWrapper from "shared/page-wrapper/PageWrapper"
import { ThemeContextProvider } from "state-management/context/ThemeContext"

const App: React.FC = () => {
  const element = useRoutes(routeList)

  return (
    <div id='main-app' data-testid='main-app'>
      <ThemeContextProvider>
        <PageWrapper>
          {/* {element} */}
          <Home />
        </PageWrapper>
      </ThemeContextProvider>
    </div>
  )
}

export default App
