"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import Image from "next/image"

const nfts = [
  {
    id: 1,
    name: "Cyber Monkey #3421",
    collection: "CyberApes",
    price: "2.5 ETH",
    usdPrice: "$4,890",
    likes: 234,
    image: "https://picsum.photos/seed/cybermonkey3421/400/400.jpg",
  },
  {
    id: 2,
    name: "Golden Lion #892",
    collection: "RoyalBeasts",
    price: "5.8 ETH",
    usdPrice: "$11,320",
    likes: 567,
    image: "https://picsum.photos/seed/goldenlion892/400/400.jpg",
  },
  {
    id: 3,
    name: "Cyber Warrior #156",
    collection: "WarriorNFT",
    price: "1.2 ETH",
    usdPrice: "$2,340",
    likes: 189,
    image: "https://picsum.photos/seed/cyberwarrior156/400/400.jpg",
  },
  {
    id: 4,
    name: "Chrome Skull #7823",
    collection: "CryptoPunks",
    price: "3.4 ETH",
    usdPrice: "$6,630",
    likes: 423,
    image: "https://picsum.photos/seed/chromeskull7823/400/400.jpg",
  },
  {
    id: 5,
    name: "Space Explorer #512",
    collection: "GalaxyNFT",
    price: "4.2 ETH",
    usdPrice: "$8,190",
    likes: 312,
    image: "https://picsum.photos/seed/spaceexplorer512/400/400.jpg",
  },
  {
    id: 6,
    name: "Golden Dragon #1089",
    collection: "MythicalBeasts",
    price: "7.5 ETH",
    usdPrice: "$14,625",
    likes: 891,
    image: "https://picsum.photos/seed/goldendragon1089/400/400.jpg",
  },
]

export function NFTShowcaseSection() {
  return (
    <section className="py-24 bg-[#0a0a12] relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#d4a84b]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#d4a84b]/10 text-[#d4a84b] text-sm font-medium mb-4">
              Marketplace
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Trending <span className="text-[#d4a84b]">NFTs</span>
            </h2>
          </div>
          <Button className="bg-transparent border border-[#d4a84b]/50 text-[#d4a84b] hover:bg-[#d4a84b]/10 rounded-xl px-6">
            View All
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div 
              key={nft.id} 
              className="group relative rounded-2xl bg-gradient-to-b from-[#1a1a28] to-[#12121c] border border-[#252535] overflow-hidden hover:border-[#d4a84b]/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={nft.image || "/placeholder.svg"} 
                  alt={nft.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-transparent to-transparent opacity-60" />
                
                {/* Likes Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                  <Heart className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-xs font-medium">{nft.likes}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-[#d4a84b] font-medium mb-1">{nft.collection}</p>
                <h3 className="font-semibold text-foreground mb-4 group-hover:text-[#d4a84b] transition-colors">{nft.name}</h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#252535]">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Current Price</p>
                    <p className="text-[#d4a84b] font-bold">{nft.price}</p>
                    <p className="text-xs text-muted-foreground">{nft.usdPrice}</p>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold rounded-xl" onClick={() => {
                    // Check if user is logged in
                    if (typeof window !== 'undefined') {
                      const user = localStorage.getItem("user")
                      if (!user) {
                        window.location.href = '/auth/login'
                      } else {
                        // Handle buy action
                        alert('NFT purchase functionality will be implemented soon!')
                      }
                    }
                  }}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
