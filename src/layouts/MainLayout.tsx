import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
