"use client"

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react"
import { cn } from "@yopem-ui/utils"

import { useTerminal } from "./context"

interface TerminalProps {
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
  "cv",
  "history",
  "date",
  "echo",
  "ls",
  "pwd",
  "uname",
  "fortune",
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

    switch (trimmedCmd.toLowerCase()) {
      case "help":
        addToHistory(`Available commands:
  help         - Show this help message
  clear        - Clear the terminal
  whoami       - Who am I?
  about        - About me
  projects     - View my projects
  contact      - Contact information
  blog         - View my blog posts
  cv           - Open my CV in a new tab
  history      - Command history
  date         - Show current date
  echo         - Echo text to the terminal
  ls           - List files
  pwd          - Print working directory
  uname        - Show system info
  fortune      - Get a random quote`)
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
        addToHistory("Opening blog...")
        window.location.href = "/blog"
        break
      case "cv":
        addToHistory("Opening CV...")
        window.open("/cv", "_blank")
        break
      case "about":
        addToHistory("Opening about...")
        window.location.href = "/about"
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
      case "ls":
        addToHistory("README.md")
        break
      case "pwd":
        addToHistory(directory)
        break
      case "uname":
        addToHistory("Linux yandi.me 6.9.9-arch1-1")
        break
      case "fortune":
        {
          const fortunes = [
            "The best way to predict the future is to invent it.",
            "Code is like humor. When you have to explain it, it’s bad.",
            "Simplicity is the soul of efficiency.",
            "There are two ways to write error-free programs; only the third one works.",
            "AI will not replace you, but a person using AI might.",
            "The only constant in the technology industry is change.",
            "Good design adds value faster than it adds cost.",
            "The function of good software is to make the complex appear simple.",
            "Programmer: A machine that turns coffee into code.",
            "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
          ]
          addToHistory(fortunes[Math.floor(Math.random() * fortunes.length)])
        }
        break
      default:
        if (trimmedCmd.startsWith("echo ")) {
          addToHistory(trimmedCmd.substring(5))
        } else if (trimmedCmd === "cat README.md") {
          addToHistory(
            "# yandi.me\nKaryana Yandi's personal website.\nBuilt with Next.js, Tailwind, and Contentlayer.",
          )
        } else {
          addToHistory(
            `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
          )
        }
    }

    // Reset history index after executing a command
    historyIndexRef.current = -1
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Use the full input including any accepted suggestion
    const fullInput = input + suggestion
    executeCommand(fullInput)
    setInput("")
    setSuggestion("")
  }

  const getSuggestion = (value: string): string => {
    if (!value) return ""
    const lowerValue = value.toLowerCase()
    const matchingCommand = AVAILABLE_COMMANDS.find(
      (cmd) => cmd.startsWith(lowerValue) && cmd !== lowerValue,
    )
    return matchingCommand ? matchingCommand.substring(value.length) : ""
  }

  // Handle key down events
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const fullInput = input + suggestion
      executeCommand(fullInput)
      setInput("")
      setSuggestion("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commands.length > 0) {
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
        "overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-lg shadow-foreground/10",
        className,
      )}
      onClick={focusInput}
      ref={terminalRef}
    >
      <div className="flex items-center border-b border-border/30 px-4 py-2">
        <div className="flex-1 text-center text-xs text-foreground/70">
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
          <span className="mr-2 text-foreground">{directory} $</span>
          <div className="relative flex-1">
            {/* Main input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="text-frouground w-full bg-transparent caret-foreground outline-none"
              spellCheck="false"
              autoFocus
            />

            {/* Fish-shell style autocomplete suggestion */}
            {suggestion && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0 text-foreground/50">
                <span className="opacity-0">{input}</span>
                <span className="text-foreground/70">{suggestion}</span>
              </div>
            )}
          </div>
          <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-foreground"></span>
        </form>
      </div>
    </div>
  )
}
