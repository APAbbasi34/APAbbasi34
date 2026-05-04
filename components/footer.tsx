import Link from "next/link"
import { Twitter, Send, MessageCircle } from "lucide-react"

const footerLinks = {
  marketplace: [
    { name: "Explore", href: "#" },
    { name: "Collections", href: "#" },
    { name: "Top Artists", href: "#" },
    { name: "Trending", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: "#", label: "Discord" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-[#252535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The world&apos;s first encrypted NFT integrated marketplace. Explore, discover, and earn with NFTs.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-[#1a1a28] border border-[#252535] flex items-center justify-center text-muted-foreground hover:text-[#d4a84b] hover:border-[#d4a84b]/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-3">
              {footerLinks.marketplace.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-[#d4a84b] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-[#d4a84b] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-[#d4a84b] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-[#d4a84b] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-[#d4a84b] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-muted-foreground hover:text-[#d4a84b] transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252535] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Thunder Storm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">Supported Chains:</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#627EEA] flex items-center justify-center" title="Ethereum">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#8247E5] flex items-center justify-center" title="Polygon">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#F0B90B] flex items-center justify-center" title="BNB">
                <span className="text-[#0a0a12] text-xs font-bold">B</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#FF0013] flex items-center justify-center" title="TRON">
                <span className="text-white text-xs font-bold">T</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
