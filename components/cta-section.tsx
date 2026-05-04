import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a12]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a84b]/10 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#1a1a28] via-[#12121c] to-[#1a1a28] border border-[#d4a84b]/20 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4a84b]/5 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4a84b]/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#d4a84b]/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4a84b]/10 border border-[#d4a84b]/30 mb-6">
              <Smartphone className="w-4 h-4 text-[#d4a84b]" />
              <span className="text-sm text-[#d4a84b] font-medium">Available on iOS & Android</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a84b] to-[#f0c860]">
                NFT Journey
              </span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of users already earning with Thunder Storm. Download our app today and explore the future of digital assets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b] font-semibold px-10 py-6 text-base rounded-xl">
                Download App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#d4a84b]/50 text-[#d4a84b] hover:bg-[#d4a84b]/10 px-10 py-6 text-base rounded-xl bg-transparent">
                Learn More
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              No credit card required. Free to join.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
