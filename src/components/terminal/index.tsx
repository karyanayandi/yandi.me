"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@yopem-ui/utils"

import { useTerminal } from "./context"

type TerminalProps = {
  className?: string
}

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
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(input)
    setInput("")
  }

  // Handle key down events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input)
      setInput("")
    }
  }

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
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 caret-green-400 outline-none"
            spellCheck="false"
            autoFocus
          />
          <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-green-400"></span>
        </form>
      </div>
    </div>
  )
}
