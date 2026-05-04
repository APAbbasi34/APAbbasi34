"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Cookie, Settings, Shield, Eye, CheckCircle, AlertTriangle } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a12] to-[#12121c]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#d4a84b] hover:text-[#e0b85c] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Cookie Policy</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cookie Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-[#d4a84b]" />
                  Cookie Policy
                </CardTitle>
                <CardDescription>
                  Last updated: {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This Cookie Policy explains how Thunder Storm uses cookies and similar technologies when you visit our website. 
                  Learn about what cookies are, how we use them, and your choices regarding their use.
                </p>
              </CardContent>
            </Card>

            {/* What Are Cookies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-[#d4a84b]" />
                  What Are Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                    They help us provide you with a better experience by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                    <li>Remembering your preferences and settings</li>
                    <li>Keeping you logged in to your account</li>
                    <li>Understanding how you use our website</li>
                    <li>Personalizing your experience</li>
                    <li>Improving our website performance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Types of Cookies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#d4a84b]" />
                  Types of Cookies We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Essential Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function properly, including authentication, security, and basic functionality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Analytics Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Functional Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Enable enhanced functionality and personalization, such as remembering your preferences and customizing content.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Advertising Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Used to deliver advertisements that are relevant to you and your interests, both on and off our website.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Cookies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#d4a84b]" />
                  How We Use Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Authentication & Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep you logged in and protect your account from unauthorized access.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Personalization</h4>
                      <p className="text-sm text-muted-foreground">
                        Remember your preferences, language settings, and customize your experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Analytics & Improvement</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyze website usage patterns to improve our services and user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#d4a84b]" />
                  Managing Your Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Browser Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4 mt-2">
                        <li>Accept or reject all cookies</li>
                        <li>Delete existing cookies</li>
                        <li>Block cookies from specific websites</li>
                        <li>Set notifications when cookies are sent</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cookie className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Cookie Consent Banner</h4>
                      <p className="text-sm text-muted-foreground">
                        Our cookie consent banner allows you to choose which types of cookies you want to accept when visiting our site.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Cookies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#d4a84b]" />
                  Third-Party Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use third-party services that may set their own cookies on your device:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Analytics Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Google Analytics and similar tools to understand website usage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Payment Processors</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure payment processing services for NFT transactions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cookie className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Social Media</h4>
                      <p className="text-sm text-muted-foreground">
                        Social media platforms for sharing and authentication.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#d4a84b]" />
                  Updates to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                  We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending email notifications for significant changes</li>
                  <li>Displaying a notice on our website</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Cookie Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                  Manage Preferences
                </Button>
                <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                  Accept All Cookies
                </Button>
                <Button variant="outline" className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10">
                  Reject Non-Essential
                </Button>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Related Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/terms">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Terms & Conditions
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/compliance">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Compliance
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  If you have questions about our Cookie Policy, contact us:
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Email:</strong> privacy@thunderstorm.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
