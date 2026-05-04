import { Sparkles, TrendingUp, Shield, Users, Zap, Gift } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Multi-Reward",
    description: "Thunder Storm leverages a proprietary AI-powered algorithmic trading model, and provides a dual earnings mechanism with trading rewards as well as referral rewards.",
  },
  {
    icon: TrendingUp,
    title: "Earn Future Value",
    description: "Thunder Storm reduces the entry hurdles of the NFT market and expands the boundaries of the NFT collection & trading through its innovative AI algorithmic trading process.",
  },
  {
    icon: Shield,
    title: "Secure & Encrypted",
    description: "World-class security infrastructure with end-to-end encryption ensuring your digital assets are protected with military-grade security protocols.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of collectors, artists, and traders. Participate in governance and shape the future of the platform together.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Lightning-fast transactions powered by optimized blockchain technology. Trade, buy, and sell NFTs with minimal gas fees and instant confirmations.",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    description: "Earn generous rewards by inviting friends to join the platform. Our multi-tier referral system ensures continuous passive income.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative bg-[#0a0a12]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0d0d16] to-[#0a0a12]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4a84b]/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4a84b]/10 text-[#d4a84b] text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-[#d4a84b]">Thunder Storm</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make us the leading encrypted NFT marketplace in the Web3 ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#1a1a28] to-[#12121c] border border-[#252535] hover:border-[#d4a84b]/50 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4a84b]/0 to-[#d4a84b]/0 group-hover:from-[#d4a84b]/5 group-hover:to-transparent transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#d4a84b]/10 flex items-center justify-center mb-5 group-hover:bg-[#d4a84b]/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-[#d4a84b]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
