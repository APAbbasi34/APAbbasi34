"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, Eye, EyeOff, Mail, Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isConnectingWallet, setIsConnectingWallet] = useState(false)
  const [loginType, setLoginType] = useState<"email" | "phone">("email")
  const router = useRouter()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Check if user exists in localStorage (for demo purposes)
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const existingUser = users.find((u: any) => 
        loginType === "email" ? u.email === email : u.phone === email
      )
      
      if (existingUser) {
        // Check password if provided
        if (password && existingUser.password !== password) {
          setError("Invalid password")
          setIsLoading(false)
          return
        }
        
        // Login existing user
        localStorage.setItem("user", JSON.stringify(existingUser))
        router.push("/dashboard")
      } else {
        // Create new user if no password provided (quick login)
        if (!password) {
          const newUser = {
            email: loginType === "email" ? email : `user${Math.random().toString(36).substring(7)}@thunderstorm.com`,
            phone: loginType === "email" ? `+1${Math.floor(Math.random() * 9000000000) + 1000000000}` : email,
            password: Math.random().toString(36).substring(8) + "123",
            method: "email",
            name: loginType === "email" ? email.split('@')[0] : `User${Math.random().toString(36).substring(5)}`,
            trc20Address: "TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5",
            ethAddress: "0x" + Math.random().toString(36).substring(2, 15)
          }
          
          // Save to users array
          users.push(newUser)
          localStorage.setItem("users", JSON.stringify(users))
          
          // Login user
          localStorage.setItem("user", JSON.stringify(newUser))
          router.push("/dashboard")
        } else {
          setError("User not found. Please register first.")
        }
      }
    }
    
    setIsLoading(false)
  }

  const connectWallet = async (walletType: string) => {
    setIsConnectingWallet(true)
    setError("")

    try {
      // Simulate wallet connection - always succeed for demo
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem("user", JSON.stringify({ 
            address: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4Db45", 
            method: "wallet",
            walletType,
            name: "Wallet User",
            trc20Address: "TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5",
            ethAddress: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4Db45"
          }))
          router.push("/dashboard")
        }
        setIsConnectingWallet(false)
      }, 2000)
    } catch (error) {
      setError("Failed to connect wallet")
      setIsConnectingWallet(false)
    }
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
            <CardTitle className="text-foreground">Join Thunder Storm NFT Marketplace</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="flex gap-2 mb-4">
                <Button
                  type="button"
                  variant={loginType === "email" ? "default" : "outline"}
                  className={`flex-1 ${loginType === "email" ? "bg-[#d4a84b] text-[#0a0a12]" : "border-[#252535] text-muted-foreground"}`}
                  onClick={() => setLoginType("email")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button
                  type="button"
                  variant={loginType === "phone" ? "default" : "outline"}
                  className={`flex-1 ${loginType === "phone" ? "bg-[#d4a84b] text-[#0a0a12]" : "border-[#252535] text-muted-foreground"}`}
                  onClick={() => setLoginType("phone")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Phone
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{loginType === "email" ? "Email Address" : "Phone Number"}</Label>
                <div className="relative">
                  {loginType === "email" ? (
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  )}
                  <Input
                    id="email"
                    type={loginType === "email" ? "email" : "tel"}
                    placeholder={loginType === "email" ? "Enter your email" : "Enter your phone number"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0a0a12] border-[#252535] text-foreground pl-10"
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
              <div className="text-center text-sm text-muted-foreground mb-4">Or connect with wallet</div>
              <Button 
                className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b]"
                onClick={handleEmailLogin}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            
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
                  Enter email or phone number. Password is optional - quick login if not provided.
                </AlertDescription>
              </Alert>
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="text-[#d4a84b] hover:underline">
                  Sign up now
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
