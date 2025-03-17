"use client"

import { useEffect } from "react"

export const THEME_MAP = {
  light: "light",
  dark: "dark",
  system: undefined,
} as const

export type ThemeKey = keyof typeof THEME_MAP
export type ThemeValue = (typeof THEME_MAP)[ThemeKey]

export const STORAGE_THEME_KEY = "theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const userTheme = localStorage.getItem(STORAGE_THEME_KEY)

    if (
      userTheme === THEME_MAP.dark ||
      (!userTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return <>{children}</>
}
