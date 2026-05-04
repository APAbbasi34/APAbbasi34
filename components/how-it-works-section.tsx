import { Wallet, ShoppingBag, Coins, Repeat } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Connect Wallet",
    description: "Connect your crypto wallet to access the Thunder Storm marketplace. We support MetaMask, Trust Wallet, and more.",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Browse & Collect",
    description: "Explore thousands of unique NFTs across various categories. Find rare gems and build your digital collection.",
  },
  {
    icon: Coins,
    step: "03",
    title: "Earn Rewards",
    description: "Our AI-powered trading model automatically generates rewards. Earn passive income through trading and referrals.",
  },
  {
    icon: Repeat,
    step: "04",
    title: "Trade & Grow",
    description: "Trade your NFTs on the marketplace. Watch your portfolio grow as the market evolves.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d0d16] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#d4a84b]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4a84b]/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#d4a84b]/10 text-[#d4a84b] text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Started in <span className="text-[#d4a84b]">4 Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey to earning with NFTs in just a few simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#d4a84b]/20 via-[#d4a84b]/50 to-[#d4a84b]/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1a1a28] to-[#12121c] border-2 border-[#252535] flex items-center justify-center group-hover:border-[#d4a84b]/50 transition-colors">
                      <item.icon className="w-10 h-10 text-[#d4a84b]" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a84b] to-[#b8902f] flex items-center justify-center shadow-lg shadow-[#d4a84b]/20">
                      <span className="text-[#0a0a12] font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
