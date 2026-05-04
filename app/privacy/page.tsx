"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a12] to-[#12121c]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#d4a84b] hover:text-[#e0b85c] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Privacy Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4a84b]" />
                  Your Privacy Matters
                </CardTitle>
                <CardDescription>
                  Last updated: {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  At Thunder Storm, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and protect your data when you use our NFT marketplace platform.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#d4a84b]" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Account Information</h4>
                      <p className="text-sm text-muted-foreground">
                        Email address, username, wallet addresses, and profile information you provide during registration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Usage Data</h4>
                      <p className="text-sm text-muted-foreground">
                        Pages visited, time spent, interactions, and other behavioral data to improve our services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Transaction Data</h4>
                      <p className="text-sm text-muted-foreground">
                        NFT transaction history, bidding activities, and marketplace interactions stored on blockchain.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#d4a84b]" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Service Provision</h4>
                      <p className="text-sm text-muted-foreground">
                        To provide, maintain, and improve our NFT marketplace services and customer support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Security & Fraud Prevention</h4>
                      <p className="text-sm text-muted-foreground">
                        To detect and prevent fraud, illegal activities, and ensure platform security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Personalization</h4>
                      <p className="text-sm text-muted-foreground">
                        To personalize your experience and provide relevant NFT recommendations and marketplace features.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#d4a84b]" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Encryption</h4>
                      <p className="text-sm text-muted-foreground">
                        All personal data is encrypted using industry-standard encryption protocols.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Access Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Strict access controls and authentication mechanisms protect your data from unauthorized access.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Blockchain Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Transaction data is secured by blockchain technology, ensuring immutability and transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#d4a84b]" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Access & Correction</h4>
                      <p className="text-sm text-muted-foreground">
                        You have the right to access and correct your personal information stored in our systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Data Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        You can request a copy of your data in a machine-readable format.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Deletion</h4>
                      <p className="text-sm text-muted-foreground">
                        You can request deletion of your personal data, subject to legal and regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#d4a84b]" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> privacy@thunderstorm.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Address:</strong> 123 Blockchain Street, Crypto City, Web3 12345
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/terms">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Terms & Conditions
                  </Button>
                </Link>
                <Link href="/cookies">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Cookie Policy
                  </Button>
                </Link>
                <Link href="/compliance">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Compliance
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Data Request */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Data Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Exercise your privacy rights by submitting a data request:
                </p>
                <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                  Submit Data Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
