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
  const [sortBy, setSortBy] = useState("default")
  const [lastActivity, setLastActivity] = useState(Date.now())

  // Extended NFT data with 150 NFTs with prices from $50 to $500,000
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
    { id: 25, name: "Crypto Gem #1111", owner: "GemHunter", price: "$9,800", status: "listed", views: 678, likes: 123, category: "Collectibles", rarity: "Rare" },
    { id: 26, name: "Quantum Cat #26", owner: "QuantumLover", price: "$15,500", status: "listed", views: 234, likes: 45, category: "Collectibles", rarity: "Epic" },
    { id: 27, name: "Neon City #27", owner: "CityLights", price: "$85,000", status: "listed", views: 1234, likes: 234, category: "Art", rarity: "Legendary" },
    { id: 28, name: "Cyber Wolf #28", owner: "WolfPack", price: "$22,000", status: "sold", views: 567, likes: 89, category: "Gaming", rarity: "Rare" },
    { id: 29, name: "Crystal Skull #29", owner: "SkullMaster", price: "$45,000", status: "listed", views: 890, likes: 123, category: "Horror", rarity: "Epic" },
    { id: 30, name: "Space Whale #30", owner: "WhaleHunter", price: "$280,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Mythic" },
    { id: 31, name: "Digital Phoenix #31", owner: "PhoenixRise", price: "$125,000", status: "pending", views: 1567, likes: 267, category: "Fantasy", rarity: "Legendary" },
    { id: 32, name: "Crypto Sword #32", owner: "SwordMaster", price: "$3,800", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 33, name: "Magic Shield #33", owner: "ShieldBearer", price: "$35,000", status: "sold", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 34, name: "Golden Eagle #34", owner: "EagleEye", price: "$18,500", status: "listed", views: 1234, likes: 234, category: "Nature", rarity: "Rare" },
    { id: 35, name: "Crystal Castle #35", owner: "CastleKing", price: "$425,000", status: "listed", views: 5678, likes: 890, category: "Fantasy", rarity: "Mythic" },
    { id: 36, name: "Crypto Dragon #36", owner: "DragonLord", price: "$1,800", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 37, name: "Neon Tiger #37", owner: "TigerKing", price: "$65,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 38, name: "Space Robot #38", owner: "RobotMaster", price: "$145,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 39, name: "Magic Wand #39", owner: "WandWielder", price: "$4,200", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 40, name: "Golden Lion #40", owner: "LionHeart", price: "$95,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Mythic" },
    { id: 41, name: "Cyber Ninja #41", owner: "NinjaShadow", price: "$28,000", status: "listed", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 42, name: "Crystal Crown #42", owner: "CrownJewel", price: "$380,000", status: "pending", views: 4567, likes: 567, category: "Royalty", rarity: "Legendary" },
    { id: 43, name: "Crypto Phoenix #43", owner: "PhoenixRise", price: "$2,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 44, name: "Neon Butterfly #44", owner: "ButterflyWing", price: "$18,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 45, name: "Space Castle #45", owner: "CastleKing", price: "$165,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 46, name: "Golden Serpent #46", owner: "SerpentLord", price: "$435,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 47, name: "Crypto Eagle #47", owner: "EagleEye", price: "$3,200", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 48, name: "Magic Armor #48", owner: "ArmorBearer", price: "$42,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 49, name: "Crystal Dragon #49", owner: "DragonMaster", price: "$19,500", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 50, name: "Golden Phoenix #50", owner: "PhoenixLord", price: "$275,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 51, name: "Cyber Wolf #51", owner: "WolfPack", price: "$1,500", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 52, name: "Neon Samurai #52", owner: "SamuraiX", price: "$55,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 53, name: "Space Warrior #53", owner: "WarriorKing", price: "$185,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 54, name: "Magic Sword #54", owner: "SwordMaster", price: "$4,800", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 55, name: "Golden Tiger #55", owner: "TigerKing", price: "$125,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 56, name: "Crypto Castle #56", owner: "CastleLord", price: "$445,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 57, name: "Neon Dragon #57", owner: "DragonLord", price: "$2,800", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 58, name: "Crystal Phoenix #58", owner: "PhoenixRise", price: "$22,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 59, name: "Space Fortress #59", owner: "FortressKing", price: "$195,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 60, name: "Golden Griffin #60", owner: "GriffinLord", price: "$465,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 61, name: "Crypto Unicorn #61", owner: "UnicornRider", price: "$3,500", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 62, name: "Magic Shield #62", owner: "ShieldBearer", price: "$48,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 63, name: "Crystal Armor #63", owner: "ArmorKnight", price: "$25,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 64, name: "Golden Pegasus #64", owner: "PegasusRider", price: "$285,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 65, name: "Cyber Phoenix #65", owner: "PhoenixLord", price: "$4,200", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 66, name: "Neon Samurai #66", owner: "SamuraiX", price: "$58,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 67, name: "Space Explorer #67", owner: "ExplorerKing", price: "$205,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 68, name: "Magic Wand #68", owner: "WandMaster", price: "$5,200", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 69, name: "Golden Eagle #69", owner: "EagleEye", price: "$135,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 70, name: "Crypto Palace #70", owner: "PalaceLord", price: "$475,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 71, name: "Neon Dragon #71", owner: "DragonMaster", price: "$4,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 72, name: "Crystal Castle #72", owner: "CastleKing", price: "$26,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 73, name: "Space Fortress #73", owner: "FortressLord", price: "$215,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 74, name: "Golden Griffin #74", owner: "GriffinLord", price: "$485,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 75, name: "Crypto Phoenix #75", owner: "PhoenixRise", price: "$5,200", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 76, name: "Magic Armor #76", owner: "ArmorKnight", price: "$52,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 77, name: "Crystal Shield #77", owner: "ShieldBearer", price: "$28,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 78, name: "Golden Pegasus #78", owner: "PegasusRider", price: "$295,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 79, name: "Cyber Unicorn #79", owner: "UnicornRider", price: "$5,500", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 80, name: "Neon Samurai #80", owner: "SamuraiX", price: "$62,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 81, name: "Space Voyager #81", owner: "VoyagerKing", price: "$225,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 82, name: "Magic Crown #82", owner: "CrownLord", price: "$6,200", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 83, name: "Golden Dragon #83", owner: "DragonLord", price: "$145,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 84, name: "Crypto Empire #84", owner: "EmpireLord", price: "$485,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 85, name: "Neon Phoenix #85", owner: "PhoenixLord", price: "$6,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 86, name: "Crystal Kingdom #86", owner: "KingdomLord", price: "$30,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 87, name: "Space Citadel #87", owner: "CitadelKing", price: "$235,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 88, name: "Golden Phoenix #88", owner: "PhoenixLord", price: "$495,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 89, name: "Crypto Dragon #89", owner: "DragonMaster", price: "$7,200", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 90, name: "Magic Fortress #90", owner: "FortressLord", price: "$56,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 91, name: "Crystal Armor #91", owner: "ArmorKnight", price: "$32,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 92, name: "Golden Griffin #92", owner: "GriffinLord", price: "$315,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 93, name: "Cyber Unicorn #93", owner: "UnicornRider", price: "$8,200", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 94, name: "Neon Samurai #94", owner: "SamuraiX", price: "$68,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 95, name: "Space Odyssey #95", owner: "OdysseyKing", price: "$245,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 96, name: "Magic Crown #96", owner: "CrownLord", price: "$7,500", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 97, name: "Golden Dragon #97", owner: "DragonLord", price: "$165,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 98, name: "Crypto Kingdom #98", owner: "KingdomLord", price: "$495,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 99, name: "Neon Phoenix #99", owner: "PhoenixLord", price: "$9,200", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 100, name: "Crystal Empire #100", owner: "EmpireLord", price: "$35,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 101, name: "Space Cathedral #101", owner: "CathedralKing", price: "$255,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 102, name: "Golden Phoenix #102", owner: "PhoenixLord", price: "$505,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 103, name: "Crypto Dragon #103", owner: "DragonMaster", price: "$10,500", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 104, name: "Magic Castle #104", owner: "CastleLord", price: "$62,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 105, name: "Crystal Fortress #105", owner: "FortressKing", price: "$38,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 106, name: "Golden Griffin #106", owner: "GriffinLord", price: "$335,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 107, name: "Cyber Unicorn #107", owner: "UnicornRider", price: "$11,500", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 108, name: "Neon Samurai #108", owner: "SamuraiX", price: "$75,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 109, name: "Space Horizon #109", owner: "HorizonKing", price: "$265,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 110, name: "Magic Kingdom #110", owner: "KingdomLord", price: "$8,800", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 111, name: "Golden Dragon #111", owner: "DragonLord", price: "$185,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 112, name: "Crypto Empire #112", owner: "EmpireLord", price: "$505,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 113, name: "Neon Phoenix #113", owner: "PhoenixLord", price: "$12,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 114, name: "Crystal Universe #114", owner: "UniverseLord", price: "$42,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 115, name: "Space Galaxy #115", owner: "GalaxyKing", price: "$275,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 116, name: "Golden Phoenix #116", owner: "PhoenixLord", price: "$515,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 117, name: "Crypto Dragon #117", owner: "DragonMaster", price: "$13,800", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 118, name: "Magic Empire #118", owner: "EmpireLord", price: "$68,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 119, name: "Crystal World #119", owner: "WorldLord", price: "$45,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 120, name: "Golden Griffin #120", owner: "GriffinLord", price: "$355,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 121, name: "Cyber Unicorn #121", owner: "UnicornRider", price: "$15,500", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 122, name: "Neon Samurai #122", owner: "SamuraiX", price: "$82,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 123, name: "Space Infinity #123", owner: "InfinityKing", price: "$285,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 124, name: "Magic Multiverse #124", owner: "MultiverseLord", price: "$10,200", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 125, name: "Golden Dragon #125", owner: "DragonLord", price: "$205,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 126, name: "Crypto Dimension #126", owner: "DimensionLord", price: "$515,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 127, name: "Neon Phoenix #127", owner: "PhoenixLord", price: "$16,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 128, name: "Crystal Cosmos #128", owner: "CosmosLord", price: "$48,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 129, name: "Space Nebula #129", owner: "NebulaKing", price: "$295,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 130, name: "Golden Phoenix #130", owner: "PhoenixLord", price: "$525,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 131, name: "Crypto Dragon #131", owner: "DragonMaster", price: "$17,500", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 132, name: "Magic Cosmos #132", owner: "CosmosLord", price: "$75,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 133, name: "Crystal Reality #133", owner: "RealityLord", price: "$52,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 134, name: "Golden Griffin #134", owner: "GriffinLord", price: "$375,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 135, name: "Cyber Unicorn #135", owner: "UnicornRider", price: "$18,500", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 136, name: "Neon Samurai #136", owner: "SamuraiX", price: "$88,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" },
    { id: 137, name: "Space Eternity #137", owner: "EternityKing", price: "$305,000", status: "sold", views: 2345, likes: 345, category: "Sci-Fi", rarity: "Legendary" },
    { id: 138, name: "Magic Infinity #138", owner: "InfinityLord", price: "$11,500", status: "listed", views: 456, likes: 78, category: "Fantasy", rarity: "Rare" },
    { id: 139, name: "Golden Dragon #139", owner: "DragonLord", price: "$225,000", status: "listed", views: 3456, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 140, name: "Crypto Metaverse #140", owner: "MetaverseLord", price: "$525,000", status: "pending", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 141, name: "Neon Phoenix #141", owner: "PhoenixLord", price: "$20,500", status: "sold", views: 234, likes: 45, category: "Collectibles", rarity: "Common" },
    { id: 142, name: "Crystal Omniverse #142", owner: "OmniverseLord", price: "$55,000", status: "listed", views: 567, likes: 89, category: "Art", rarity: "Rare" },
    { id: 143, name: "Space Universe #143", owner: "UniverseKing", price: "$315,000", status: "listed", views: 2345, likes: 345, category: "Fantasy", rarity: "Epic" },
    { id: 144, name: "Golden Phoenix #144", owner: "PhoenixLord", price: "$535,000", status: "sold", views: 5678, likes: 678, category: "Royalty", rarity: "Mythic" },
    { id: 145, name: "Crypto Dragon #145", owner: "DragonMaster", price: "$22,500", status: "listed", views: 345, likes: 67, category: "Trading", rarity: "Common" },
    { id: 146, name: "Magic Multiverse #146", owner: "MultiverseLord", price: "$82,000", status: "pending", views: 789, likes: 123, category: "Gaming", rarity: "Epic" },
    { id: 147, name: "Crystal Paradise #147", owner: "ParadiseLord", price: "$62,000", status: "sold", views: 1234, likes: 234, category: "Fantasy", rarity: "Rare" },
    { id: 148, name: "Golden Griffin #148", owner: "GriffinLord", price: "$395,000", status: "listed", views: 3456, likes: 456, category: "Royalty", rarity: "Mythic" },
    { id: 149, name: "Cyber Unicorn #149", owner: "UnicornRider", price: "$25,000", status: "listed", views: 234, likes: 34, category: "Collectibles", rarity: "Common" },
    { id: 150, name: "Neon Samurai #150", owner: "SamuraiX", price: "$95,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem("user")
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
  }, [])

  useEffect(() => {
    const handleActivity = () => {
      const currentTime = Date.now()
      setLastActivity(currentTime)
      
      // Check for 10 minutes of inactivity
      const checkInactivity = () => {
        const timeSinceLastActivity = Date.now() - lastActivity
        if (timeSinceLastActivity > 10 * 60 * 1000) { // 10 minutes in milliseconds
          if (typeof window !== 'undefined') {
            localStorage.removeItem("user")
            window.location.href = "/auth/login"
          }
        }
      }

      // Set up activity listeners
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
      events.forEach(event => {
        window.addEventListener(event, handleActivity)
      })

      // Check inactivity every minute
      const inactivityCheck = setInterval(checkInactivity, 60000) // Check every minute

      // Cleanup on unmount
      return () => {
        events.forEach(event => {
          window.removeEventListener(event, handleActivity)
        })
        clearInterval(inactivityCheck)
      }
    }

    handleActivity()
  }, [lastActivity])

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

  const handleSort = (sortType: string) => {
    setSortBy(sortType)
  }

  const getSortedNFTs = () => {
    const sortedNFTs = [...mockNFTs]
    
    switch(sortBy) {
      case "price-low":
        return sortedNFTs.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$,]/g, ''))
          const priceB = parseInt(b.price.replace(/[$,]/g, ''))
          return priceA - priceB
        })
      case "price-high":
        return sortedNFTs.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$,]/g, ''))
          const priceB = parseInt(b.price.replace(/[$,]/g, ''))
          return priceB - priceA
        })
      case "name":
        return sortedNFTs.sort((a, b) => a.name.localeCompare(b.name))
      case "rarity":
        const rarityOrder = { "Common": 1, "Rare": 2, "Epic": 3, "Legendary": 4, "Mythic": 5, "Unique": 6 }
        return sortedNFTs.sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity])
      default:
        return sortedNFTs
    }
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">My NFT Collection</h2>
              <div className="flex items-center gap-2">
                <Label htmlFor="sortBy" className="text-sm text-muted-foreground">Sort by:</Label>
                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="bg-[#0a0a12] border-[#252535] text-foreground px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#d4a84b]"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="rarity">Rarity</option>
                </select>
              </div>
            </div>
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>My NFT Collection</CardTitle>
                <CardDescription>Browse and manage your NFT portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getSortedNFTs().slice(0, 6).map((nft) => (
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
