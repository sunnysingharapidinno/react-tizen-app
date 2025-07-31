import "./App.css"
import PageWrapper from "shared/page-wrapper/PageWrapper"
import { ThemeContextProvider } from "state-management/context/ThemeContext"
import Routing from "routes/Routing"
import { init } from "lib/spatial-navigation"
import { useRemoteControl } from "hooks/useRemoteControl"
import { useNavigate } from "react-router-dom"

init({
  debug: false,
  visualDebug: false,
  distanceCalculationMethod: "center",
})

const App: React.FC = () => {
  const navigate = useNavigate()
  useRemoteControl({
    onBack: () => {
      navigate(-1)
    },
  })
  return (
    <div id='main-app' data-testid='main-app'>
      <ThemeContextProvider>
        <PageWrapper>
          <Routing />
        </PageWrapper>
      </ThemeContextProvider>
    </div>
  )
}

export default App
