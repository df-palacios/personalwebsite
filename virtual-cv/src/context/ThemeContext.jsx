import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Oscuro por defecto. Solo arranca en claro si la persona ya eligió claro
  // antes o si su dispositivo está en modo claro.
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("theme-choice")
      if (saved === "dark") return true
      if (saved === "light") return false
    } catch {
      /* sin almacenamiento: se usa la preferencia del dispositivo */
    }
    return !window.matchMedia("(prefers-color-scheme: light)").matches
  })

  // Solo se guarda cuando la persona usa el botón; así, mientras no elija,
  // el sitio sigue la preferencia de su dispositivo.
  const toggleTheme = () => {
    setDarkMode(prev => {
      try {
        localStorage.setItem("theme-choice", prev ? "light" : "dark")
      } catch {
        /* silencio */
      }
      return !prev
    })
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}