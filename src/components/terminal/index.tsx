"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@yopem-ui/utils"

import { useTerminal } from "./context"

type TerminalProps = {
  className?: string
}

// Available commands for autocomplete
const AVAILABLE_COMMANDS = [
  "help",
  "clear",
  "whoami",
  "projects",
  "contact",
  "blog",
  "history",
  "date",
  "echo",
]

export function Terminal({ className }: TerminalProps) {
  const {
    commands,
    addCommand,
    clearCommands,
    directory,
    history,
    addToHistory,
  } = useTerminal()
  const [input, setInput] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const historyIndexRef = useRef<number>(-1)

  // Focus the input when the terminal is clicked
  const focusInput = () => {
    inputRef.current?.focus()
  }

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) return

    addCommand(trimmedCmd)

    // Handle built-in commands
    switch (trimmedCmd.toLowerCase()) {
      case "help":
        addToHistory(`Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  whoami   - About me
  projects - View my projects
  contact  - Contact information
  blog     - View my blog posts
  history  - Command history
  date     - Show current date
  echo     - Echo text to the terminal`)
        break
      case "clear":
        clearCommands()
        break
      case "whoami":
        addToHistory(`I'm Karyana Yandi, but you can call me Yandi or Adi.

I am a freelance full-stack developer on Fiverr, specializing in headless technologies and AI-powered tools.

I also build open-source projects that provide smart, AI-enhanced alternatives to popular software solutions.

I primarily work with JavaScript or TypeScript, but I also have experience with Lua, Go, Python, and PHP.`)
        break
      case "projects":
        addToHistory(
          `Check on my github account: https://github.com/karyanayandi`,
        )
        break
      case "contact":
        addToHistory(`Email: karyana@yandi.me
Github: https://github.com/karyanayandi
X: https://x.com/@karyanayandi
Blue Sky: https://bsky.app/profile/yandi.me
Linkedin: https://linkedin.com/in/karyanayandi`)
        break
      case "blog":
        window.open("/blog", "_blank")
        addToHistory("Opening blog in new tab...")
        break
      case "history":
        if (commands.length > 0) {
          addToHistory(commands.map((cmd, i) => `${i + 1}  ${cmd}`).join("\n"))
        } else {
          addToHistory("No commands in history")
        }
        break
      case "date":
        addToHistory(new Date().toString())
        break
      default:
        if (trimmedCmd.startsWith("echo ")) {
          addToHistory(trimmedCmd.substring(5))
        } else {
          addToHistory(
            `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
          )
        }
    }

    // Reset history index after executing a command
    historyIndexRef.current = -1
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Use the full input including any accepted suggestion
    const fullInput = input + suggestion
    executeCommand(fullInput)
    setInput("")
    setSuggestion("")
  }

  // Get command suggestion based on input
  const getSuggestion = (value: string): string => {
    if (!value) return ""
    const lowerValue = value.toLowerCase()
    const matchingCommand = AVAILABLE_COMMANDS.find(
      (cmd) => cmd.startsWith(lowerValue) && cmd !== lowerValue,
    )
    return matchingCommand ? matchingCommand.substring(value.length) : ""
  }

  // Handle key down events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      // Accept the suggestion if there is one
      const fullInput = input + suggestion
      executeCommand(fullInput)
      setInput("")
      setSuggestion("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commands.length > 0) {
        // Navigate through command history
        if (historyIndexRef.current === -1) {
          historyIndexRef.current = commands.length - 1
        } else if (historyIndexRef.current > 0) {
          historyIndexRef.current--
        }
        if (historyIndexRef.current >= 0) {
          setInput(commands[historyIndexRef.current])
          setSuggestion("")
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (commands.length > 0) {
        // Navigate through command history
        if (
          historyIndexRef.current >= 0 &&
          historyIndexRef.current < commands.length - 1
        ) {
          historyIndexRef.current++
          setInput(commands[historyIndexRef.current])
        } else {
          historyIndexRef.current = -1
          setInput("")
          setSuggestion("")
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Accept the current suggestion
      if (suggestion) {
        setInput(input + suggestion)
        setSuggestion("")
      }
    } else if (e.key === "ArrowRight") {
      // Accept the current suggestion if present
      if (suggestion) {
        e.preventDefault()
        setInput(input + suggestion)
        setSuggestion("")
      }
    } else if (e.key === "Escape") {
      // Clear suggestions
      setSuggestion("")
    }
  }

  // Update suggestion when input changes
  useEffect(() => {
    const newSuggestion = getSuggestion(input)
    setSuggestion(newSuggestion)
  }, [input])

  // Focus the input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, commands])

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-green-400 bg-black shadow-lg shadow-green-400/10",
        className,
      )}
      onClick={focusInput}
      ref={terminalRef}
    >
      <div className="flex items-center border-b border-green-400/30 px-4 py-2">
        <div className="flex-1 text-center text-xs text-green-400/70">
          karyana@yandi.me:~
        </div>
      </div>

      <div className="p-4 font-mono text-sm">
        <div className="mb-4">
          {history.map((output, index) => (
            <div key={index} className="mb-2 whitespace-pre-wrap">
              {output}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2 text-green-400">{directory} $</span>
          <div className="relative flex-1">
            {/* Main input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-green-400 caret-green-400 outline-none"
              spellCheck="false"
              autoFocus
            />

            {/* Fish-shell style autocomplete suggestion */}
            {suggestion && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0 text-green-400/50">
                <span className="opacity-0">{input}</span>
                <span className="text-green-400/70">{suggestion}</span>
              </div>
            )}
          </div>
          <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-green-400"></span>
        </form>
      </div>
    </div>
  )
}
