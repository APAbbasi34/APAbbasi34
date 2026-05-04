"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, ArrowDownRight, TrendingUp, Users, DollarSign, Activity, Copy, Check, Upload, X } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [showDepositProof, setShowDepositProof] = useState(false)
  const [showWithdrawalProof, setShowWithdrawalProof] = useState(false)
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [depositProof, setDepositProof] = useState<File | null>(null)
  const [withdrawalProof, setWithdrawalProof] = useState<File | null>(null)
  const [copied, setCopied] = useState(false)

  // Random NFT data with prices from $50 to $500,000
  const mockNFTs = [
    { id: 1, name: "Cyber Punk #4201", owner: "CryptoKing", price: "$125,000", status: "listed", views: 1234, likes: 89, category: "Art", rarity: "Legendary" },
    { id: 2, name: "Golden Dragon #999", owner: "DragonLord", price: "$450,000", status: "listed", views: 5678, likes: 234, category: "Gaming", rarity: "Mythic" },
    { id: 3, name: "Space Explorer #123", owner: "AstroTrader", price: "$75,000", status: "sold", views: 890, likes: 156, category: "Art", rarity: "Epic" },
    { id: 4, name: "Digital Mona Lisa", owner: "ArtCollector", price: "$500,000", status: "listed", views: 9876, likes: 567, category: "Art", rarity: "Unique" },
    { id: 5, name: "Pixel Warrior #777", owner: "GameMaster", price: "$3,500", status: "listed", views: 456, likes: 78, category: "Gaming", rarity: "Rare" },
    { id: 6, name: "Abstract Mind #456", owner: "MindBender", price: "$12,000", status: "pending", views: 234, likes: 45, category: "Art", rarity: "Rare" },
    { id: 7, name: "Crypto Kitty #888", owner: "CatLover", price: "$8,500", status: "listed", views: 789, likes: 123, category: "Collectibles", rarity: "Epic" },
    { id: 8, name: "Future City #2025", owner: "CityBuilder", price: "$25,000", status: "listed", views: 1234, likes: 234, category: "Art", rarity: "Legendary" },
    { id: 9, name: "Diamond Hand #69", owner: "DiamondKing", price: "$180,000", status: "sold", views: 3456, likes: 456, category: "Trading", rarity: "Mythic" },
    { id: 10, name: "Moon Ape #42", owner: "ApeTrader", price: "$95,000", status: "listed", views: 2345, likes: 345, category: "Collectibles", rarity: "Epic" },
    { id: 11, name: "Neon Samurai #333", owner: "SamuraiX", price: "$45,000", status: "listed", views: 678, likes: 89, category: "Art", rarity: "Rare" },
    { id: 12, name: "Crystal Phoenix #111", owner: "PhoenixRiser", price: "$220,000", status: "pending", views: 1567, likes: 267, category: "Fantasy", rarity: "Legendary" },
    { id: 13, name: "Robot Dog #555", owner: "TechFan", price: "$2,800", status: "listed", views: 345, likes: 67, category: "Collectibles", rarity: "Common" },
    { id: 14, name: "Golden Skull #666", owner: "SkullCollector", price: "$15,000", status: "sold", views: 890, likes: 134, category: "Horror", rarity: "Rare" },
    { id: 15, name: "Ocean Wave #789", owner: "WaveRider", price: "$6,500", status: "listed", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 16, name: "Fire Phoenix #101", owner: "FireBird", price: "$350,000", status: "listed", views: 4567, likes: 789, category: "Fantasy", rarity: "Mythic" },
    { id: 17, name: "Crypto Card #202", owner: "CardMaster", price: "$1,200", status: "listed", views: 234, likes: 34, category: "Trading", rarity: "Common" },
    { id: 18, name: "Magic Sword #303", owner: "SwordWielder", price: "$28,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 19, name: "Crystal Ball #404", owner: "MysticEye", price: "$19,500", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 20, name: "Golden Crown #505", owner: "CrownJewel", price: "$420,000", status: "listed", views: 6789, likes: 890, category: "Royalty", rarity: "Legendary" },
    { id: 21, name: "Pixel Art #606", owner: "PixelPerfect", price: "$850", status: "listed", views: 123, likes: 23, category: "Art", rarity: "Common" },
    { id: 22, name: "Dragon Egg #707", owner: "DragonBorn", price: "$55,000", status: "listed", views: 1567, likes: 278, category: "Fantasy", rarity: "Epic" },
    { id: 23, name: "Space Ship #808", owner: "SpaceCaptain", price: "$125,000", status: "pending", views: 2345, likes: 456, category: "Sci-Fi", rarity: "Legendary" },
    { id: 24, name: "Magic Potion #909", owner: "PotionMaster", price: "$3,200", status: "sold", views: 456, likes: 78, category: "Fantasy", rarity: "Common" },
    { id: 25, name: "Crypto Gem #1111", owner: "GemHunter", price: "$9,800", status: "listed", views: 678, likes: 123, category: "Collectibles", rarity: "Rare" }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem("user")
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
  }, [])

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDeposit = () => {
    setShowDepositProof(true)
  }

  const handleWithdrawal = () => {
    setShowWithdrawalProof(true)
  }

  const handleDepositSubmit = () => {
    setTimeout(() => {
      setShowDepositProof(false)
      setDepositAmount("")
      setDepositProof(null)
    }, 1500)
  }

  const handleWithdrawalSubmit = () => {
    setTimeout(() => {
      setShowWithdrawalProof(false)
      setWithdrawalAmount("")
      setWithdrawalProof(null)
    }, 1500)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Please login to access dashboard</h1>
          <Link href="/auth/login">
            <Button className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
              Login
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <header className="border-b border-[#252535] bg-[#0a0a12]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4a84b] to-[#b8902f] rounded-xl" />
                  <div className="absolute inset-[2px] bg-[#0a0a12] rounded-[10px] flex items-center justify-center">
                    <span className="text-[#d4a84b] font-bold text-lg">TS</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Thunder<span className="text-[#d4a84b]">Storm</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-[#d4a84b]/20 text-[#d4a84b] border-[#d4a84b]/30">
                {user.name || "User"}
              </Badge>
              <Button variant="outline" onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem("user")
                  window.location.href = "/auth/login"
                }
              }}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name || "User"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Manage your TRC-20 assets and track your trading performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-[#d4a84b]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$12,450</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Trades</CardTitle>
              <Activity className="h-4 w-4 text-[#d4a84b]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">24</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">$3,240</div>
              <p className="text-xs text-muted-foreground">+5.2% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Referrals</CardTitle>
              <Users className="h-4 w-4 text-[#d4a84b]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#1a1a28] border border-[#252535]">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#d4a84b] data-[state=active]:text-[#0a0a12]">
              Overview
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-[#d4a84b] data-[state=active]:text-[#0a0a12]">
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="wallet" className="data-[state=active]:bg-[#d4a84b] data-[state=active]:text-[#0a0a12]">
              Wallet
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-[#d4a84b] data-[state=active]:text-[#0a0a12]">
              Rewards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle>TRC-20 Wallet Address</CardTitle>
                  <CardDescription>Your unique deposit address</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 p-3 bg-[#0a0a12]/50 rounded-lg border border-[#252535]">
                    <span className="text-sm text-foreground font-mono flex-1">
                      TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyAddress}
                      className="text-[#d4a84b] hover:text-[#d4a84b]/80"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]" onClick={handleDeposit}>
                      <ArrowDownRight className="w-4 h-4 mr-2" />
                      Deposit
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleWithdrawal}>
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Withdraw
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest deposit and withdrawal activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                          <ArrowDownRight className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">TRC-20 Deposit</p>
                          <p className="text-xs text-muted-foreground">USDT • 1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground">$500</p>
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Completed</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">TRC-20 Withdrawal</p>
                          <p className="text-xs text-muted-foreground">USDT • 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground">$200</p>
                        <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">Completed</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                          <ArrowDownRight className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">TRC-20 Deposit</p>
                          <p className="text-xs text-muted-foreground">USDT • 3 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground">$50</p>
                        <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Processing</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Trading Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Trades</span>
                  <span className="text-foreground">47</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-foreground">89%</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                  Invite Friends
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {showDepositProof && (
            <Dialog open={showDepositProof} onOpenChange={setShowDepositProof}>
              <DialogContent className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Deposit Proof</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Upload your deposit transaction proof
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="depositAmount">Deposit Amount (USDT)</Label>
                    <Input
                      id="depositAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="bg-[#0a0a12] border-[#252535] text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="depositProof">Transaction Proof</Label>
                    <div className="border-2 border-dashed border-[#252535] rounded-lg p-4 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        {depositProof ? depositProof.name : "Click to upload or drag and drop"}
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setDepositProof(e.target.files?.[0] || null)}
                        className="hidden"
                        id="depositFile"
                      />
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById('depositFile')?.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]" onClick={handleDepositSubmit}>
                      Submit Proof
                    </Button>
                    <Button variant="outline" onClick={() => setShowDepositProof(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          {showWithdrawalProof && (
            <Dialog open={showWithdrawalProof} onOpenChange={setShowWithdrawalProof}>
              <DialogContent className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Withdrawal Request</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Enter withdrawal amount and upload proof
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="withdrawalAmount">Withdrawal Amount (USDT)</Label>
                    <Input
                      id="withdrawalAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={withdrawalAmount}
                      onChange={(e) => setWithdrawalAmount(e.target.value)}
                      className="bg-[#0a0a12] border-[#252535] text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="withdrawalProof">Transaction Proof</Label>
                    <div className="border-2 border-dashed border-[#252535] rounded-lg p-4 text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        {withdrawalProof ? withdrawalProof.name : "Click to upload or drag and drop"}
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setWithdrawalProof(e.target.files?.[0] || null)}
                        className="hidden"
                        id="withdrawalFile"
                      />
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById('withdrawalFile')?.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]" onClick={handleWithdrawalSubmit}>
                      Submit Request
                    </Button>
                    <Button variant="outline" onClick={() => setShowWithdrawalProof(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <TabsContent value="portfolio" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>My NFT Collection</CardTitle>
                <CardDescription>Browse and manage your NFT portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockNFTs.slice(0, 6).map((nft) => (
                    <div key={nft.id} className="bg-[#0a0a12]/50 rounded-lg border border-[#252535] overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-[#d4a84b]/20 to-[#b8902f]/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#d4a84b]/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <span className="text-[#d4a84b] text-xs font-bold">NFT</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{nft.category}</p>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-foreground text-sm mb-1">{nft.name}</h3>
                        <p className="text-[#d4a84b] font-bold text-sm mb-2">{nft.price}</p>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={
                            nft.status === 'sold' ? 'bg-green-500/20 text-green-500 border-green-500/30' :
                            nft.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30' :
                            'bg-blue-500/20 text-blue-500 border-blue-500/30'
                          }>
                            {nft.status}
                          </Badge>
                          <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/30 text-xs">
                            {nft.rarity}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>👁 {nft.views}</span>
                          <span>❤️ {nft.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Wallet Management</CardTitle>
                <CardDescription>Manage your TRC-20 wallet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert className="border-[#d4a84b]/20 bg-[#d4a84b]/10">
                    <AlertDescription className="text-[#d4a84b]">
                      Only TRC-20 (USDT) deposits are supported. Please ensure you're sending to the correct address.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Label>Your TRC-20 Address</Label>
                    <div className="flex items-center gap-2 p-3 bg-[#0a0a12]/50 rounded-lg border border-[#252535]">
                      <span className="text-sm text-foreground font-mono flex-1">
                        TGAJ7LAMd9xT3krMNGQtjpPRG6pWcfWNV5
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopyAddress}
                        className="text-[#d4a84b] hover:text-[#d4a84b]/80"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Referral Rewards</CardTitle>
                <CardDescription>Earn rewards by inviting friends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Referrals</span>
                    <span className="text-2xl font-bold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Rewards Earned</span>
                    <span className="text-green-500">$320</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12]">
                    Invite Friends
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
