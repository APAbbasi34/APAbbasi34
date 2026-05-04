"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Thunder Storm?",
    answer: "Thunder Storm is the world's first encrypted NFT integrated marketplace. We provide a platform for users to explore, discover, and earn with NFTs through our innovative AI-powered algorithmic trading model and dual earnings mechanism.",
  },
  {
    question: "How do I start earning with Thunder Storm?",
    answer: "Getting started is simple! Connect your crypto wallet, browse our marketplace to collect NFTs, and our AI-powered system will automatically generate trading rewards. You can also earn through our referral program by inviting friends.",
  },
  {
    question: "What wallets are supported?",
    answer: "We support a wide range of popular crypto wallets including MetaMask, Trust Wallet, Coinbase Wallet, and WalletConnect-compatible wallets. Simply click 'Connect Wallet' and select your preferred wallet.",
  },
  {
    question: "How does the referral program work?",
    answer: "Our multi-tier referral system rewards you for every friend you invite to the platform. When your referrals trade or earn on Thunder Storm, you receive a percentage of their earnings as passive income.",
  },
  {
    question: "Is TreasureFun secure?",
    answer: "Absolutely. We employ military-grade encryption and world-class security infrastructure. Your digital assets are protected by multiple layers of security, including smart contract audits and secure wallet integration.",
  },
  {
    question: "What blockchains does TreasureFun support?",
    answer: "Thunder Storm supports multiple blockchains including Ethereum, Polygon, BNB Smart Chain, and TRON. This multi-chain support ensures you can trade NFTs across different networks seamlessly.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#0d0d16] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4a84b]/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4a84b]/10 text-[#d4a84b] text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-[#d4a84b]">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Thunder Storm.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-gradient-to-b from-[#1a1a28] to-[#12121c] border border-[#252535] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#d4a84b] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
