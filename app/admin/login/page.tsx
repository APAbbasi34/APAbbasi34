"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate admin authentication
    setTimeout(() => {
      if (email === "admin@thunderstorm.com" && password === "Larkanasindhpakistan786@") {
        localStorage.setItem("admin", JSON.stringify({ 
          email, 
          role: "admin",
          name: "Administrator" 
        }))
        router.push("/admin/dashboard")
      } else {
        setError("Invalid admin credentials")
      }
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center p-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#0d0d16] to-[#0a0a12]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a84b]/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 w-full max-w-md">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#d4a84b] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b] to-[#c49a3d] rounded-xl" />
                <div className="absolute inset-[2px] bg-[#0a0a12] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#d4a84b]" />
                </div>
              </div>
            </div>
            <CardTitle className="text-2xl text-foreground">
              Admin Login
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Access Thunder Storm admin panel
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@thunderstorm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0a0a12] border-[#252535] focus:border-[#d4a84b]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] focus:border-[#d4a84b] pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert className="border-[#d4a84b]/20 bg-[#d4a84b]/10">
                  <AlertDescription className="text-[#d4a84b]">{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Login to Admin Panel"}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                <Link href="/auth/login" className="text-[#d4a84b] hover:underline">
                  User Login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
