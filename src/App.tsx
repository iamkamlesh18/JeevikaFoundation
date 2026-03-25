import "./styles/global.css"
import "./styles/forms.css"
import "./styles/policy.css"
import "./styles/animations.css"

import { BrowserRouter, useLocation, Navigate, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import MainLayout from "./layouts/MainLayout"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Impact from "./pages/Impact"
import GetInvolved from "./pages/GetInvolved"
import Team from "./pages/Team"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import CookiePolicy from "./pages/CookiePolicy"
import { sitePaths } from "./site"

function AppContent() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path={sitePaths.home} element={<Home />} />
          <Route path={sitePaths.about} element={<About />} />
          <Route path={sitePaths.projects} element={<Projects />} />
          <Route path={sitePaths.impact} element={<Impact />} />
          <Route path={sitePaths.getInvolved} element={<GetInvolved />} />
          <Route path={sitePaths.team} element={<Team />} />
          <Route path={sitePaths.blog} element={<Blog />} />
          <Route path={`${sitePaths.blog}/:slug`} element={<BlogPost />} />
          <Route path={sitePaths.contact} element={<Contact />} />
          <Route path={sitePaths.privacyPolicy} element={<PrivacyPolicy />} />
          <Route path={sitePaths.termsOfService} element={<TermsOfService />} />
          <Route path={sitePaths.cookiePolicy} element={<CookiePolicy />} />
          <Route path="*" element={<Navigate to={sitePaths.home} replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}

export default App

