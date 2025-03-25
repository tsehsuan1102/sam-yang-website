"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  className?: string
  onComplete?: () => void
  speed?: number
  text: string
}

export function TypingEffect({ className = "", onComplete, speed = 50, text }: TypingEffectProps) {
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

