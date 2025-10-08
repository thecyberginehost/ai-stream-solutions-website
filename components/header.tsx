"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Newspaper, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/process", label: "How It Works" },
    { href: "/services", label: "Services" },
  ]

  const resourcesLinks = [
    { href: "/blog", label: "Blog", icon: Newspaper },
    { href: "/departmental-automation-examples", label: "Departmental Examples", icon: Lightbulb },
  ]

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/ai-stream-logo.png"
                alt="AI Stream Solutions Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-slate-800">AI Stream Solutions</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">
                {link.label}
              </Link>
            ))}
            {/* Desktop Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-slate-600 hover:text-blue-600 hover:bg-slate-100 px-3 py-2 flex items-center space-x-1 rounded-md transition-colors">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="flex items-center space-x-2 w-full">
                      <link.icon className="h-4 w-4 text-slate-500" />
                      <span>{link.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/schedule">Book Strategy Call</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Resources Accordion-like section */}
            <div>
              <button
                onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                <span>Resources</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", isResourcesMenuOpen && "rotate-180")} />
              </button>
              {isResourcesMenuOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-100"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsResourcesMenuOpen(false)
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <link.icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4 space-y-3">
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <Link href="/schedule">Book Strategy Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
