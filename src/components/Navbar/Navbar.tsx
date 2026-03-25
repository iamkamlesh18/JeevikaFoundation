import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"
import Logo from "../Logo"
import "../../styles/navbar.css"
import { siteConfig, sitePaths } from "../../site"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const menuId = "primary-navigation"

  const isActive = (path: string) => {
    const isExactMatch = location.pathname === path
    const isNestedMatch = path !== sitePaths.home && location.pathname.startsWith(`${path}/`)
    return isExactMatch || isNestedMatch ? "active" : ""
  }

  const toggleMenu = () => {
    setOpen(prev => !prev)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  // Handle scroll to hide navbar when reaching footer
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromBottom = documentHeight - (currentScrollY + windowHeight)

      // Hide navbar when within 200px of footer
      if (distanceFromBottom < 200) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navLinks = siteConfig.navigation

  return (
    <header ref={navRef} className={`navbar navbar-slide ${open ? "nav-open" : ""} ${isHidden ? "navbar-hidden" : ""}`}>
      <Link to={sitePaths.home} className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <Logo />
        </div>
        <div className="logo-lockup">
          <span className="logo-text">{siteConfig.name}</span>
          <span className="logo-subtitle">Grounded in community trust</span>
        </div>
      </Link>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <nav id={menuId} className="nav-menu" aria-label="Primary">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${isActive(link.path)}`}
            onClick={closeMenu}
            aria-current={isActive(link.path) ? "page" : undefined}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}

