"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a12]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#d4a84b]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4a84b]/5 rounded-full blur-[100px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,168,75,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,168,75,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a84b]/10 border border-[#d4a84b]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d4a84b] animate-pulse" />
              <span className="text-sm text-[#d4a84b] font-medium">Web3 NFT Marketplace</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              Explore, Discover and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a84b] to-[#f0c860]">
                Earn Big
              </span>{" "}
              with NFTs
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              The world&apos;s first encrypted NFT integrated marketplace. One of the top Web3 NFT Marketplaces in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold px-8 py-6 text-base rounded-xl" onClick={() => {
                // Check if user is logged in
                if (typeof window !== 'undefined') {
                  const user = localStorage.getItem("user")
                  if (!user) {
                    window.location.href = '/auth/login'
                  } else {
                    window.location.href = '/dashboard'
                  }
                }
              }}>
                Start Earning Now
              </Button>
              <Button size="lg" variant="outline" className="border-[#d4a84b]/50 text-[#d4a84b] hover:bg-[#d4a84b]/10 px-8 py-6 text-base rounded-xl bg-transparent" onClick={() => {
                // Show download app message
                alert('App download coming soon! Available on iOS and Android.')
              }}>
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">$50M+</p>
                <p className="text-muted-foreground text-sm mt-1">Trading Volume</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">100K+</p>
                <p className="text-muted-foreground text-sm mt-1">Active Users</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">150+</p>
                <p className="text-muted-foreground text-sm mt-1">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Content - NFT Cards Stack */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-[450px] h-[500px]">
              {/* Back Card */}
              <div className="absolute top-8 right-0 w-[320px] h-[380px] rounded-3xl bg-gradient-to-br from-[#2a2a3d] to-[#1a1a28] border border-[#3a3a4d] transform rotate-6 shadow-2xl overflow-hidden">
                <Image 
                  src="/images/hero-nft-3.jpg" 
                  alt="NFT Artwork" 
                  fill 
                  className="object-cover opacity-80"
                />
              </div>
              
              {/* Middle Card */}
              <div className="absolute top-4 right-8 w-[320px] h-[380px] rounded-3xl bg-gradient-to-br from-[#2a2a3d] to-[#1a1a28] border border-[#3a3a4d] transform rotate-3 shadow-2xl overflow-hidden">
                <Image 
                  src="/images/hero-nft-2.jpg" 
                  alt="NFT Artwork" 
                  fill 
                  className="object-cover opacity-90"
                />
              </div>
              
              {/* Front Card */}
              <div className="absolute top-0 right-16 w-[320px] h-[380px] rounded-3xl bg-gradient-to-br from-[#1e1e2d] to-[#12121c] border border-[#d4a84b]/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b]/10 to-transparent z-10" />
                <div className="p-6 h-full flex flex-col relative z-20">
                  <div className="flex-1 rounded-2xl overflow-hidden relative">
                    <Image 
                      src="/images/hero-nft-1.jpg" 
                      alt="Thunder Storm NFT" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 bg-[#12121c]/80 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Current Price</span>
                      <span className="text-xs text-green-500">+12.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-foreground">2.45 ETH</span>
                      <span className="text-sm text-muted-foreground">$4,890</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -left-4 top-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a84b] to-[#b8902f] flex items-center justify-center shadow-lg shadow-[#d4a84b]/20 animate-bounce">
                <span className="text-2xl font-bold text-[#0a0a12]">$</span>
              </div>
              <div className="absolute right-0 bottom-8 w-12 h-12 rounded-xl bg-[#1a1a28] border border-[#d4a84b]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#d4a84b]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
