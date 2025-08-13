"use client"

import React, { createContext, useContext, useState } from "react"

type TerminalContextType = {
  commands: string[]
  addCommand: (command: string) => void
  clearCommands: () => void
  directory: string
  setDirectory: (path: string) => void
  history: string[]
  addToHistory: (output: string) => void
}

const TerminalContext = createContext<TerminalContextType | null>(null)

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [commands, setCommands] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [directory, setDirectory] = useState("~/yandi.me")

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
