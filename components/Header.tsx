"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import NavigationItem from "./NavigationItem"

export default function Header({ totalProjects }: any) {
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [padding, setPadding] = useState(4)

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (prevScrollpos < 180) {
        setPadding(4) // Show navbar
      } else {
        setPadding(1) // Hide navbar
      }

      setPrevScrollpos(currentScrollPos)
    }
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollpos])

  return (
    <motion.header
      className={`transition-all duration-500 py-16 fixed top-0 left-0 right-0  z-40 ${padding < 4 ? "bg-grey-500/20 backdrop-blur-sm" : ""}`}
      style={{ paddingTop: `${padding}rem`, paddingBottom: `${padding}rem` }}
    >
      <div className="container flex flex-wrap gap-6 items-center justify-between">
        <Link
          href="/"
          title="Back to the home page"
          className="font-semibold large p tracking-wide"
        >
          Jack Whiting
        </Link>

        <nav className="flex gap-6 sm:gap-8 lg:mt-0 lg:gap-12">
          <NavigationItem href="/about" title="About" />
          <NavigationItem href="/projects" title="Projects">
            <pre className="absolute text-sm text-black/30 font-semibold -right-3 -top-2">
              {totalProjects}
            </pre>
          </NavigationItem>
          <NavigationItem href="/posts" title="Articles" />
          <NavigationItem href="/contact" title="Contact" />
        </nav>
      </div>
    </motion.header>
  )
}
