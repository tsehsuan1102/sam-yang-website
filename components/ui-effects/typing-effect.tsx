"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypingEffect({ text, speed = 50, className = "", onComplete }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete && onComplete()
    }
  }, [currentIndex, isComplete, onComplete, speed, text])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-primary animate-blink ml-1"></span>
      )}
    </span>
  )
}

