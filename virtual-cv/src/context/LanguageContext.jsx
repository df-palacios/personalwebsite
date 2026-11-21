import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    const newLanguage =
      language === "en"
        ? "es"
        : "en"

    setLanguage(newLanguage)

    localStorage.setItem(
      "language",
      newLanguage
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}