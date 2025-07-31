import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { MemoryRouter } from "react-router-dom"
import App from "App"
import { Provider } from "react-redux"
import store from "state-management/redux/store.redux"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  </StrictMode>
)
