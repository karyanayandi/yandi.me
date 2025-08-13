"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface TerminalContextProps {
  commands: string[]
  addCommand: (command: string) => void
  clearCommands: () => void
  directory: string
  setDirectory: (path: string) => void
  history: string[]
  addToHistory: (output: string) => void
}

const TerminalContext = createContext<TerminalContextProps | null>(null)

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [commands, setCommands] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [directory, setDirectory] = useState("~/yandi.me")

  // Set initial welcome message only on client side to avoid hydration mismatch
  useEffect(() => {
    setHistory([
      "Welcome to Karyana Yandi's terminal!",
      "",
      "Available commands:",
      "  help     - Show this help message",
      "  clear    - Clear the terminal",
      "  whoami   - Who am I?",
      "  about    - About me",
      "  projects - View my projects",
      "  contact  - Contact information",
      "  blog     - View my blog posts",
      "  cv       - Open my CV in a new tab",
      "  history  - Command history",
      "  date     - Show current date",
      "  echo     - Echo text to the terminal",
      "  ls       - List files",
      "  pwd      - Print working directory",
      "  uname    - Show system information",
      "  fortune  - Get a random quote",
      "",
      "Type a command and press Enter to get started!",
    ])
  }, [])

  const addCommand = (command: string) => {
    setCommands((prev) => [...prev, command])
  }

  const clearCommands = () => {
    setCommands([])
    setHistory([])
  }

  const addToHistory = (output: string) => {
    setHistory((prev) => [...prev, output])
  }

  return (
    <TerminalContext.Provider
      value={{
        commands,
        addCommand,
        clearCommands,
        directory,
        setDirectory,
        history,
        addToHistory,
      }}
    >
      {children}
    </TerminalContext.Provider>
  )
}

export function useTerminal() {
  const context = useContext(TerminalContext)
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider")
  }
  return context
}
