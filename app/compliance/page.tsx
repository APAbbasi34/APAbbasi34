"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Scale, CheckCircle, AlertTriangle, FileText, Users, Gavel, Lock, Eye } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a12] to-[#12121c]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-[#d4a84b] hover:text-[#e0b85c] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Compliance & Regulation</h1>
          <div className="w-24"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compliance Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#d4a84b]" />
                  Compliance Commitment
                </CardTitle>
                <CardDescription>
                  Last updated: {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Thunder Storm is committed to maintaining the highest standards of regulatory compliance and legal adherence. 
                  Our comprehensive compliance program ensures that we operate transparently, securely, and in accordance with applicable laws and regulations.
                </p>
              </CardContent>
            </Card>

            {/* Regulatory Framework */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-[#d4a84b]" />
                  Regulatory Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">AML/KYC Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Anti-Money Laundering (AML) and Know Your Customer (KYC) procedures to prevent financial crimes and ensure user identity verification.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Data Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Compliance with GDPR, CCPA, and other data protection regulations to safeguard user privacy and data security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Financial Regulations</h4>
                      <p className="text-sm text-muted-foreground">
                        Adherence to financial services regulations and securities laws applicable to digital assets and NFTs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Standards */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4a84b]" />
                  Security & Safety Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Smart Contract Audits</h4>
                      <p className="text-sm text-muted-foreground">
                        All smart contracts undergo rigorous security audits by independent third-party firms to ensure code integrity and vulnerability prevention.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Platform Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security measures including encryption, multi-factor authentication, and continuous monitoring.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">User Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive user protection measures including dispute resolution, fraud prevention, and secure fund management.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Programs */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#d4a84b]" />
                  Compliance Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Risk Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular risk assessments and compliance audits to identify and mitigate potential regulatory risks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gavel className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Legal Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Continuous monitoring of regulatory developments and updates to ensure ongoing compliance with changing laws.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Training & Education</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular compliance training for our team to ensure understanding and adherence to regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reporting & Transparency */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#d4a84b]" />
                  Reporting & Transparency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Regular Reporting</h4>
                      <p className="text-sm text-muted-foreground">
                        Quarterly compliance reports and annual transparency disclosures to regulatory authorities and stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Incident Response</h4>
                      <p className="text-sm text-muted-foreground">
                        Established protocols for reporting and responding to compliance incidents, security breaches, and regulatory inquiries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Whistleblower Protection</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure channels for reporting compliance concerns with protection for whistleblowers under applicable laws.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Compliance */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-[#d4a84b]" />
                  Geographic Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain compliance with regulations in multiple jurisdictions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">North America</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• USA (SEC, FinCEN regulations)</li>
                      <li>• Canada (FINTRAC requirements)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Europe</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• EU (MiCA regulation, GDPR)</li>
                      <li>• UK (FCA guidelines)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Asia Pacific</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Singapore (MAS regulations)</li>
                      <li>• Japan (FSA requirements)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Global Standards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• FATF recommendations</li>
                      <li>• IOSCO principles</li>
                    </ul>
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
                <CardTitle>Compliance Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                  Download Compliance Report
                </Button>
                <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                  Request Audit Certificate
                </Button>
                <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                  Report Compliance Issue
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
                <Link href="/cookies">
                  <Button variant="outline" className="w-full border-[#d4a84b]/30 text-[#d4a84b] hover:bg-[#d4a84b]/10">
                    Cookie Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Compliance Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  For compliance-related inquiries:
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> compliance@thunderstorm.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Hotline:</strong> +1 (555) COMPLY
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Secure:</strong> compliance.thunderstorm.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">SOC 2 Type II Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">PCI DSS Level 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
