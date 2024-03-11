import React from "react"
import ReactDOM from "react-dom/client"
import ReactModal from "react-modal"
import { ToastContainer } from "react-toastify"

import { ContextProvider } from "context"

import App from "./App.tsx"

import "./index.scss"

ReactModal.setAppElement("#root")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
)
