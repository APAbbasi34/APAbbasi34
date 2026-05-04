"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Shield, Users, DollarSign, AlertTriangle, CheckCircle, FileText, Scale, Gavel } from "lucide-react"

export default function TermsPage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleAcceptTerms = () => {
    setAcceptedTerms(true)
    localStorage.setItem("termsAccepted", "true")
    // Redirect to previous page or dashboard
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a12] to-[#12121c]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#d4a84b] hover:text-[#e0b85c] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Terms & Conditions</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Terms Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#d4a84b]" />
                  Welcome to Thunder Storm
                </CardTitle>
                <CardDescription>
                  Last updated: {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms and Conditions govern your use of Thunder Storm, the world's first encrypted NFT integrated marketplace. 
                  By accessing or using our platform, you agree to be bound by these terms.
                </p>
                <Alert className="border-blue-500/20 bg-blue-500/10">
                  <AlertTriangle className="h-4 w-4 text-blue-500" />
                  <AlertDescription className="text-blue-400">
                    Please read these terms carefully before using our platform.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#d4a84b]" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Account Security</h4>
                      <p className="text-sm text-muted-foreground">
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Accurate Information</h4>
                      <p className="text-sm text-muted-foreground">
                        You must provide accurate, current, and complete information during registration and keep your account information updated.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Compliance with Laws</h4>
                      <p className="text-sm text-muted-foreground">
                        You must comply with all applicable laws and regulations when using our platform, including tax obligations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Prohibited Activities</h4>
                      <p className="text-sm text-muted-foreground">
                        You may not use the platform for illegal activities, fraud, money laundering, or any unauthorized purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NFT Transactions */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#d4a84b]" />
                  NFT Transactions & Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Smart Contract Risk</h4>
                      <p className="text-sm text-muted-foreground">
                        All NFT transactions are executed via smart contracts. You acknowledge that smart contracts carry inherent risks and we are not liable for code vulnerabilities or exploits.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Payment Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        All payments are processed through blockchain networks. Transaction fees, gas fees, and network congestion may affect processing times and costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Refund Policy</h4>
                      <p className="text-sm text-muted-foreground">
                        All NFT transactions are final and non-refundable once confirmed on the blockchain. No refunds will be provided for completed transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#d4a84b]" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Gavel className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">NFT Ownership</h4>
                      <p className="text-sm text-muted-foreground">
                        When you purchase an NFT, you own the token but not necessarily the underlying intellectual property rights unless explicitly stated.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gavel className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Platform Content</h4>
                      <p className="text-sm text-muted-foreground">
                        All platform content, including logos, designs, and text, is owned by Thunder Storm and protected by intellectual property laws.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gavel className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">User-Generated Content</h4>
                      <p className="text-sm text-muted-foreground">
                        You retain rights to content you create but grant us a license to use, display, and promote it on our platform.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-red-500/20 bg-red-500/10">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-400">
                    Important: Please read this section carefully
                  </AlertDescription>
                </Alert>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Thunder Storm provides the platform "as is" without warranties of any kind. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>Direct, indirect, incidental, or consequential damages</li>
                    <li>Loss of funds, NFTs, or digital assets</li>
                    <li>Smart contract vulnerabilities or exploits</li>
                    <li>Network failures or blockchain issues</li>
                    <li>Third-party service interruptions</li>
                    <li>Market volatility and price fluctuations</li>
                  </ul>
                  <p className="text-sm text-muted-foreground font-medium">
                    Your use of the platform is at your own risk. Never invest more than you can afford to lose.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#d4a84b]" />
                  Service Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Service Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        We strive to maintain high availability but cannot guarantee uninterrupted service. Scheduled maintenance may occur without prior notice.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Platform Modifications</h4>
                      <p className="text-sm text-muted-foreground">
                        We reserve the right to modify, suspend, or discontinue any part of the platform at any time without liability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Account Termination</h4>
                      <p className="text-sm text-muted-foreground">
                        We may suspend or terminate accounts that violate these terms or engage in fraudulent activities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/auth/register">
                  <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                    Create Account
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Sign In
                  </Button>
                </Link>
                <Link href="/admin/login">
                  <Button variant="outline" className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10">
                    Admin Access
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Support:</strong> support@thunderstorm.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal:</strong> legal@thunderstorm.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Discord:</strong> discord.gg/thunderstorm
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accept Terms */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Accept Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-500/20 bg-green-500/10">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <AlertDescription className="text-green-400">
                    By clicking "Accept", you agree to be bound by these terms and conditions.
                  </AlertDescription>
                </Alert>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white"
                  onClick={handleAcceptTerms}
                  disabled={acceptedTerms}
                >
                  {acceptedTerms ? "Terms Accepted" : "Accept Terms & Conditions"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
