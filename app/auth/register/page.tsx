"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Phone, Mail, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleQuickRegister = async () => {
    setIsLoading(true)
    setError("")

    // Validate required fields
    if (!email && !phone) {
      setError("Please enter either email or mobile number")
      setIsLoading(false)
      return
    }

    // Validate password if provided
    if (password && password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Quick registration - generate random user data
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const userEmail = email || `user${Math.random().toString(36).substring(7)}@thunderstorm.com`
        const userPhone = phone || `+1${Math.floor(Math.random() * 9000000000) + 1000000000}`
        const userPassword = password || Math.random().toString(36).substring(8) + "123"
        
        // Get existing users or initialize empty array
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        
        const newUser = {
          email: userEmail,
          phone: userPhone,
          password: userPassword,
          method: "quick",
          name: `User${Math.random().toString(36).substring(5)}`,
          trc20Address: "TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5",
          ethAddress: "0x" + Math.random().toString(36).substring(2, 15)
        }
        
        // Save to users array
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        
        // Login user
        localStorage.setItem("user", JSON.stringify(newUser))
        router.push("/dashboard")
      }
      setIsLoading(false)
    }, 1500)
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
            <CardTitle className="text-foreground">Quick Registration</CardTitle>
            <CardDescription>Get instant access to Thunder Storm</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#d4a84b] to-[#c49a3d] flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-muted-foreground">
                Join Thunder Storm NFT Marketplace instantly
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] text-foreground pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] text-foreground pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password (Optional)</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] text-foreground pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password (Optional)</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] text-foreground pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold"
              onClick={handleQuickRegister}
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Quick Register & Login"}
            </Button>

            <div className="text-center space-y-2">
              {error && (
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertDescription className="text-red-400 text-xs">
                    {error}
                  </AlertDescription>
                </Alert>
              )}
              <Alert className="border-[#d4a84b]/20 bg-[#d4a84b]/10">
                <AlertDescription className="text-[#d4a84b] text-xs">
                  Enter email or mobile number (at least one required). Password is optional - auto-generated if not provided.
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-[#d4a84b] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
