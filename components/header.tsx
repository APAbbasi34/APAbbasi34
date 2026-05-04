"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown, LogOut } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminData = localStorage.getItem("admin")
      const userData = localStorage.getItem("user")
      setIsAdmin(!!adminData)
      setIsUser(!!userData)
    }
  }, [])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      if (isAdmin) {
        localStorage.removeItem("admin")
      } else {
        localStorage.removeItem("user")
      }
    }
    window.location.href = "/"
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b] to-[#b8902f] rounded-xl" />
              <div className="absolute inset-[2px] bg-[#0a0a12] rounded-[10px] flex items-center justify-center">
                <span className="text-[#d4a84b] font-bold text-2xl">TS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-tight">
                Thunder<span className="text-[#d4a84b]">Storm</span>
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider">NFT MARKETPLACE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="#" className="px-4 py-2 text-foreground hover:text-[#d4a84b] transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="#features" className="px-4 py-2 text-muted-foreground hover:text-[#d4a84b] transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="px-4 py-2 text-muted-foreground hover:text-[#d4a84b] transition-colors text-sm font-medium">
              How it Works
            </Link>
            <Link href="#faq" className="px-4 py-2 text-muted-foreground hover:text-[#d4a84b] transition-colors text-sm font-medium">
              FAQ
            </Link>
            {!isAdmin && (
              <Link href="/admin/login" className="px-4 py-2 text-red-500 hover:text-red-400 transition-colors text-sm font-medium">
                Admin
              </Link>
            )}
            {isAdmin && (
              <Link href="/admin/dashboard" className="px-4 py-2 text-green-500 hover:text-green-400 transition-colors text-sm font-medium">
                Admin Dashboard
              </Link>
            )}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-[#d4a84b] transition-colors text-sm font-medium">
                <Globe className="w-4 h-4" />
                EN
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isUser && (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-foreground hover:text-[#d4a84b] hover:bg-transparent">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-transparent" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            )}
            {isAdmin && (
              <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-transparent" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Admin Logout
              </Button>
            )}
            {!isUser && !isAdmin && (
              <>
                <Button variant="ghost" className="text-foreground hover:text-[#d4a84b] hover:bg-transparent" onClick={() => window.location.href = '/auth/login'}>
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold px-6" onClick={() => window.location.href = '/auth/register'}>
                  Register
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0a12] border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <Link href="#" className="px-4 py-3 text-foreground hover:text-[#d4a84b] transition-colors">
              Home
            </Link>
            <Link href="#features" className="px-4 py-3 text-muted-foreground hover:text-[#d4a84b] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="px-4 py-3 text-muted-foreground hover:text-[#d4a84b] transition-colors">
              How it Works
            </Link>
            <Link href="#faq" className="px-4 py-3 text-muted-foreground hover:text-[#d4a84b] transition-colors">
              FAQ
            </Link>
            {!isAdmin && (
              <Link href="/admin/login" className="px-4 py-3 text-red-500 hover:text-red-400 transition-colors">
                Admin
              </Link>
            )}
            {isAdmin && (
              <Link href="/admin/dashboard" className="px-4 py-3 text-green-500 hover:text-green-400 transition-colors">
                Admin Dashboard
              </Link>
            )}
            <div className="border-t border-border mt-2 pt-2">
              {isUser && (
                <>
                  <Link href="/dashboard" className="px-4 py-3 text-foreground hover:text-[#d4a84b] transition-colors">
                    Dashboard
                  </Link>
                  <button className="px-4 py-3 text-red-500 hover:text-red-400 transition-colors text-left" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
              {isAdmin && (
                <button className="px-4 py-3 text-red-500 hover:text-red-400 transition-colors text-left" onClick={handleLogout}>
                  Admin Logout
                </button>
              )}
              {!isUser && !isAdmin && (
                <>
                  <button className="px-4 py-3 text-foreground hover:text-[#d4a84b] transition-colors text-left" onClick={() => window.location.href = '/auth/login'}>
                    Login
                  </button>
                  <button className="px-4 py-3 text-[#d4a84b] hover:text-[#e0b85c] transition-colors text-left font-medium" onClick={() => window.location.href = '/auth/register'}>
                    Register
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
