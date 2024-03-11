import { Outlet } from "react-router-dom"

import { DashboardComponent } from "./Dashboard.types"

import "./Dashboard.scss"

const Dashboard: DashboardComponent = () => {
  return (
    <div className='dashboard'>
      <header>
        <h1>Dashboard</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Dashboard
