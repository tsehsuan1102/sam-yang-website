"use client"

import { type ReactNode, useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "down" | "left" | "right" | "up"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getDirectionClasses = () => {
    switch (direction) {
      case "down":
        return "translate-y-[-10px] opacity-0 animate-in:translate-y-0 animate-in:opacity-100"
      case "left":
        return "translate-x-10 opacity-0 animate-in:translate-x-0 animate-in:opacity-100"
      case "right":
        return "translate-x-[-10px] opacity-0 animate-in:translate-x-0 animate-in:opacity-100"
      case "up":
        return "translate-y-10 opacity-0 animate-in:translate-y-0 animate-in:opacity-100"
      default:
        return "opacity-0 animate-in:opacity-100"
    }
  }

  return (
    <div className={`transition-all duration-700 ease-out ${getDirectionClasses()} ${className}`} ref={elementRef}>
      {children}
    </div>
  )
}

