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
    { id: 2, name: "Golden Ape #777", owner: "ApeLover", price: "$98,500", status: "sold", views: 2341, likes: 234, category: "Animals", rarity: "Epic" },
    { id: 3, name: "Space Explorer #123", owner: "SpaceNFT", price: "$76,300", status: "pending", views: 890, likes: 67, category: "Space", rarity: "Rare" },
    { id: 4, name: "Dragon Fire #999", owner: "DragonKing", price: "$234,000", status: "listed", views: 3456, likes: 567, category: "Fantasy", rarity: "Legendary" },
    { id: 5, name: "Crystal Gem #456", owner: "GemCollector", price: "$45,000", status: "sold", views: 567, likes: 123, category: "Gems", rarity: "Common" },
    { id: 6, name: "Neon City #789", owner: "CityDweller", price: "$156,000", status: "listed", views: 1890, likes: 345, category: "Urban", rarity: "Epic" },
    { id: 7, name: "Ocean Wave #234", owner: "OceanLover", price: "$67,000", status: "pending", views: 789, likes: 89, category: "Nature", rarity: "Rare" },
    { id: 8, name: "Forest Spirit #567", owner: "ForestKeeper", price: "$89,000", status: "listed", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 9, name: "Thunder Storm #890", owner: "StormChaser", price: "$345,000", status: "sold", views: 4567, likes: 890, category: "Elements", rarity: "Legendary" },
    { id: 10, name: "Moon Light #123", owner: "MoonWatcher", price: "$123,000", status: "listed", views: 2345, likes: 456, category: "Space", rarity: "Epic" },
    { id: 11, name: "Fire Phoenix #456", owner: "PhoenixRiser", price: "$278,000", status: "pending", views: 3456, likes: 678, category: "Fantasy", rarity: "Legendary" },
    { id: 12, name: "Ice Crystal #789", owner: "IceMaster", price: "$56,000", status: "sold", views: 890, likes: 123, category: "Elements", rarity: "Rare" },
    { id: 13, name: "Desert Sand #234", owner: "SandWalker", price: "$34,000", status: "listed", views: 567, likes: 67, category: "Nature", rarity: "Common" },
    { id: 14, name: "Mountain Peak #567", owner: "MountainClimb", price: "$189,000", status: "pending", views: 2789, likes: 389, category: "Nature", rarity: "Epic" },
    { id: 15, name: "Lightning Bolt #890", owner: "BoltCatcher", price: "$412,000", status: "sold", views: 5678, likes: 901, category: "Elements", rarity: "Legendary" },
    { id: 16, name: "Rainbow Bridge #123", owner: "BridgeKeeper", price: "$145,000", status: "listed", views: 1890, likes: 278, category: "Fantasy", rarity: "Epic" },
    { id: 17, name: "Golden Sun #456", owner: "SunWorshipper", price: "$267,000", status: "pending", views: 3456, likes: 567, category: "Elements", rarity: "Legendary" },
    { id: 18, name: "Silver Moon #789", owner: "MoonGazer", price: "$98,000", status: "sold", views: 1234, likes: 234, category: "Space", rarity: "Epic" },
    { id: 19, name: "Emerald Forest #234", owner: "ForestGuardian", price: "$78,000", status: "listed", views: 1567, likes: 189, category: "Nature", rarity: "Rare" },
    { id: 20, name: "Diamond Star #567", owner: "StarCatcher", price: "$523,000", status: "pending", views: 6789, likes: 1234, category: "Space", rarity: "Legendary" },
    { id: 21, name: "Coral Reef #890", owner: "ReefExplorer", price: "$45,000", status: "sold", views: 789, likes: 123, category: "Nature", rarity: "Common" },
    { id: 22, name: "Volcano Fire #123", owner: "FireMaster", price: "$234,000", status: "listed", views: 3456, likes: 678, category: "Elements", rarity: "Legendary" },
    { id: 23, name: "Arctic Ice #456", owner: "IceQueen", price: "$167,000", status: "pending", views: 2345, likes: 456, category: "Elements", rarity: "Epic" },
    { id: 24, name: "Tropical Paradise #789", owner: "ParadiseSeeker", price: "$89,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Rare" },
    { id: 25, name: "Cosmic Dust #234", owner: "DustCollector", price: "$345,000", status: "listed", views: 4567, likes: 890, category: "Space", rarity: "Legendary" },
    { id: 26, name: "Golden Hour #567", owner: "HourKeeper", price: "$123,000", status: "pending", views: 1890, likes: 345, category: "Time", rarity: "Epic" },
    { id: 27, name: "Midnight Sky #890", owner: "SkyWatcher", price: "$256,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 28, name: "Spring Bloom #123", owner: "BloomGardener", price: "$67,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 29, name: "Autumn Leaves #456", owner: "LeafCollector", price: "$45,000", status: "pending", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 30, name: "Winter Frost #789", owner: "FrostBite", price: "$178,000", status: "sold", views: 2345, likes: 456, category: "Elements", rarity: "Epic" },
    { id: 31, name: "Summer Heat #234", owner: "HeatWave", price: "$289,000", status: "listed", views: 3456, likes: 678, category: "Elements", rarity: "Legendary" },
    { id: 32, name: "Cherry Blossom #567", owner: "BlossomLover", price: "$134,000", status: "pending", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 33, name: "Northern Lights #890", owner: "LightChaser", price: "$445,000", status: "sold", views: 5678, likes: 901, category: "Space", rarity: "Legendary" },
    { id: 34, name: "Desert Oasis #123", owner: "OasisFinder", price: "$98,000", status: "listed", views: 1234, likes: 234, category: "Nature", rarity: "Rare" },
    { id: 35, name: "Mountain Lake #456", owner: "LakeDweller", price: "$156,000", status: "pending", views: 2345, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 36, name: "City Lights #789", owner: "CitySlicker", price: "$267,000", status: "sold", views: 3456, likes: 678, category: "Urban", rarity: "Legendary" },
    { id: 37, name: "Beach Sunset #234", owner: "SunsetLover", price: "$78,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 38, name: "Forest Path #567", owner: "PathWalker", price: "$45,000", status: "pending", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 39, name: "River Flow #890", owner: "RiverRider", price: "$189,000", status: "sold", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 40, name: "Cloud Castle #123", owner: "CastleKeeper", price: "$334,000", status: "listed", views: 3456, likes: 678, category: "Fantasy", rarity: "Legendary" },
    { id: 41, name: "Crystal Cave #456", owner: "CaveExplorer", price: "$123,000", status: "pending", views: 1234, likes: 234, category: "Gems", rarity: "Epic" },
    { id: 42, name: "Golden River #789", owner: "RiverGold", price: "$245,000", status: "sold", views: 2345, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 43, name: "Silver Mountain #234", owner: "MountainSilver", price: "$167,000", status: "listed", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 44, name: "Blue Ocean #567", owner: "OceanBlue", price: "$89,000", status: "pending", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 45, name: "Green Forest #890", owner: "ForestGreen", price: "$56,000", status: "sold", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 46, name: "Red Desert #123", owner: "DesertRed", price: "$178,000", status: "listed", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 47, name: "White Snow #456", owner: "SnowWhite", price: "$298,000", status: "pending", views: 2789, likes: 456, category: "Elements", rarity: "Legendary" },
    { id: 48, name: "Black Night #789", owner: "NightOwl", price: "$134,000", status: "sold", views: 1234, likes: 234, category: "Time", rarity: "Epic" },
    { id: 49, name: "Purple Sky #234", owner: "SkyPurple", price: "$423,000", status: "listed", views: 4567, likes: 789, category: "Space", rarity: "Legendary" },
    { id: 50, name: "Orange Sunset #567", owner: "SunsetOrange", price: "$67,000", status: "pending", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 51, name: "Pink Dawn #890", owner: "DawnPink", price: "$45,000", status: "sold", views: 567, likes: 89, category: "Time", rarity: "Common" },
    { id: 52, name: "Yellow Sun #123", owner: "SunYellow", price: "$189,000", status: "listed", views: 1890, likes: 345, category: "Elements", rarity: "Epic" },
    { id: 53, name: "Cyan Water #456", owner: "WaterCyan", price: "$256,000", status: "pending", views: 2345, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 54, name: "Magenta Flower #789", owner: "FlowerMagenta", price: "$123,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 55, name: "Lime Leaf #234", owner: "LeafLime", price: "$78,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 56, name: "Teal Sea #567", owner: "SeaTeal", price: "$156,000", status: "pending", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 57, name: "Indigo Night #890", owner: "NightIndigo", price: "$345,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 58, name: "Brown Earth #123", owner: "EarthBrown", price: "$89,000", status: "listed", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 59, name: "Gray Stone #456", owner: "StoneGray", price: "$45,000", status: "pending", views: 567, likes: 89, category: "Gems", rarity: "Common" },
    { id: 60, name: "Ivory White #789", owner: "WhiteIvory", price: "$234,000", status: "sold", views: 1890, likes: 345, category: "Art", rarity: "Epic" },
    { id: 61, name: "Jet Black #234", owner: "BlackJet", price: "$412,000", status: "listed", views: 4567, likes: 890, category: "Art", rarity: "Legendary" },
    { id: 62, name: "Royal Blue #567", owner: "BlueRoyal", price: "$167,000", status: "pending", views: 1567, likes: 234, category: "Art", rarity: "Epic" },
    { id: 63, name: "Forest Green #890", owner: "GreenForest", price: "$98,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Rare" },
    { id: 64, name: "Sky Blue #123", owner: "BlueSky", price: "$56,000", status: "listed", views: 890, likes: 123, category: "Space", rarity: "Common" },
    { id: 65, name: "Fire Red #456", owner: "RedFire", price: "$278,000", status: "pending", views: 3456, likes: 678, category: "Elements", rarity: "Legendary" },
    { id: 66, name: "Ocean Deep #789", owner: "DeepOcean", price: "$189,000", status: "sold", views: 2345, likes: 456, category: "Nature", rarity: "Epic" },
    { id: 67, name: "Mountain High #234", owner: "HighMountain", price: "$345,000", status: "listed", views: 3456, likes: 678, category: "Nature", rarity: "Legendary" },
    { id: 68, name: "Valley Low #567", owner: "LowValley", price: "$123,000", status: "pending", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 69, name: "River Wide #890", owner: "WideRiver", price: "$78,000", status: "sold", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 70, name: "Lake Clear #123", owner: "ClearLake", price: "$45,000", status: "listed", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 71, name: "Stream Flow #456", owner: "FlowStream", price: "$234,000", status: "pending", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 72, name: "Waterfall Drop #789", owner: "DropWaterfall", price: "$456,000", status: "sold", views: 4567, likes: 890, category: "Nature", rarity: "Legendary" },
    { id: 73, name: "Spring Fresh #234", owner: "FreshSpring", price: "$167,000", status: "listed", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 74, name: "Summer Hot #567", owner: "HotSummer", price: "$89,000", status: "pending", views: 789, likes: 123, category: "Elements", rarity: "Rare" },
    { id: 75, name: "Autumn Cool #890", owner: "CoolAutumn", price: "$134,000", status: "sold", views: 1234, likes: 234, category: "Time", rarity: "Epic" },
    { id: 76, name: "Winter Cold #123", owner: "ColdWinter", price: "$389,000", status: "listed", views: 3456, likes: 678, category: "Elements", rarity: "Legendary" },
    { id: 77, name: "Dawn Early #456", owner: "EarlyDawn", price: "$256,000", status: "pending", views: 2345, likes: 456, category: "Time", rarity: "Legendary" },
    { id: 78, name: "Dusk Late #789", owner: "LateDusk", price: "$178,000", status: "sold", views: 1890, likes: 345, category: "Time", rarity: "Epic" },
    { id: 79, name: "Noon Bright #234", owner: "BrightNoon", price: "$98,000", status: "listed", views: 1234, likes: 234, category: "Elements", rarity: "Rare" },
    { id: 80, name: "Midnight Dark #567", owner: "DarkMidnight", price: "$445,000", status: "pending", views: 5678, likes: 901, category: "Space", rarity: "Legendary" },
    { id: 81, name: "Cosmic Ray #890", owner: "RayCosmic", price: "$223,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 82, name: "Star Bright #123", owner: "BrightStar", price: "$145,000", status: "listed", views: 1890, likes: 345, category: "Space", rarity: "Epic" },
    { id: 83, name: "Moon Glow #456", owner: "GlowMoon", price: "$67,000", status: "pending", views: 890, likes: 123, category: "Space", rarity: "Rare" },
    { id: 84, name: "Sun Shine #789", owner: "ShineSun", price: "$334,000", status: "sold", views: 3456, likes: 678, category: "Elements", rarity: "Legendary" },
    { id: 85, name: "Planet Orbit #234", owner: "OrbitPlanet", price: "$189,000", status: "listed", views: 2345, likes: 456, category: "Space", rarity: "Epic" },
    { id: 86, name: "Galaxy Far #567", owner: "FarGalaxy", price: "$512,000", status: "pending", views: 6789, likes: 1234, category: "Space", rarity: "Legendary" },
    { id: 87, name: "Universe Deep #890", owner: "DeepUniverse", price: "$267,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 88, name: "Nebula Color #123", owner: "ColorNebula", price: "$156,000", status: "listed", views: 1567, likes: 234, category: "Space", rarity: "Epic" },
    { id: 89, name: "Asteroid Rock #456", owner: "RockAsteroid", price: "$89,000", status: "pending", views: 789, likes: 123, category: "Space", rarity: "Rare" },
    { id: 90, name: "Comet Tail #789", owner: "TailComet", price: "$423,000", status: "sold", views: 4567, likes: 890, category: "Space", rarity: "Legendary" },
    { id: 91, name: "Meteor Shower #234", owner: "ShowerMeteor", price: "$234,000", status: "listed", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 92, name: "Solar Flare #567", owner: "FlareSolar", price: "$178,000", status: "pending", views: 2345, likes: 456, category: "Elements", rarity: "Epic" },
    { id: 93, name: "Lunar Eclipse #890", owner: "EclipseLunar", price: "$345,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 94, name: "Solar Wind #123", owner: "WindSolar", price: "$123,000", status: "listed", views: 1234, likes: 234, category: "Elements", rarity: "Epic" },
    { id: 95, name: "Black Hole #456", owner: "HoleBlack", price: "$567,000", status: "pending", views: 6789, likes: 1234, category: "Space", rarity: "Legendary" },
    { id: 96, name: "White Dwarf #789", owner: "DwarfWhite", price: "$289,000", status: "sold", views: 3456, likes: 678, category: "Space", rarity: "Legendary" },
    { id: 97, name: "Red Giant #234", owner: "GiantRed", price: "$456,000", status: "listed", views: 4567, likes: 890, category: "Space", rarity: "Legendary" },
    { id: 98, name: "Blue Supernova #567", owner: "SupernovaBlue", price: "$678,000", status: "pending", views: 7890, likes: 1567, category: "Space", rarity: "Legendary" },
    { id: 99, name: "Dark Matter #890", owner: "MatterDark", price: "$789,000", status: "sold", views: 8901, likes: 1789, category: "Space", rarity: "Legendary" },
    { id: 100, name: "Anti Matter #123", owner: "MatterAnti", price: "$890,000", status: "listed", views: 9876, likes: 2345, category: "Space", rarity: "Legendary" },
    { id: 101, name: "Quantum Field #456", owner: "FieldQuantum", price: "$345,000", status: "pending", views: 4567, likes: 890, category: "Science", rarity: "Legendary" },
    { id: 102, name: "Particle Wave #789", owner: "WaveParticle", price: "$234,000", status: "sold", views: 3456, likes: 678, category: "Science", rarity: "Legendary" },
    { id: 103, name: "Atom Split #234", owner: "SplitAtom", price: "$567,000", status: "listed", views: 6789, likes: 1234, category: "Science", rarity: "Legendary" },
    { id: 104, name: "Molecule Bond #567", owner: "BondMolecule", price: "$178,000", status: "pending", views: 2345, likes: 456, category: "Science", rarity: "Epic" },
    { id: 105, name: "DNA Helix #890", owner: "HelixDNA", price: "$289,000", status: "sold", views: 3456, likes: 678, category: "Science", rarity: "Legendary" },
    { id: 106, name: "Cell Divide #123", owner: "DivideCell", price: "$156,000", status: "listed", views: 1567, likes: 234, category: "Science", rarity: "Epic" },
    { id: 107, name: "Gene Code #456", owner: "CodeGene", price: "$423,000", status: "pending", views: 4567, likes: 890, category: "Science", rarity: "Legendary" },
    { id: 108, name: "Protein Fold #789", owner: "FoldProtein", price: "$267,000", status: "sold", views: 3456, likes: 678, category: "Science", rarity: "Legendary" },
    { id: 109, name: "Enzyme Active #234", owner: "ActiveEnzyme", price: "$189,000", status: "listed", views: 2345, likes: 456, category: "Science", rarity: "Epic" },
    { id: 110, name: "Virus Spread #567", owner: "SpreadVirus", price: "$345,000", status: "pending", views: 3456, likes: 678, category: "Science", rarity: "Legendary" },
    { id: 111, name: "Bacteria Grow #890", owner: "GrowBacteria", price: "$123,000", status: "sold", views: 1234, likes: 234, category: "Science", rarity: "Epic" },
    { id: 112, name: "Fungus Spore #123", owner: "SporeFungus", price: "$78,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 113, name: "Plant Grow #456", owner: "GrowPlant", price: "$45,000", status: "pending", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 114, name: "Tree Tall #789", owner: "TallTree", price: "$234,000", status: "sold", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 115, name: "Flower Bloom #234", owner: "BloomFlower", price: "$156,000", status: "listed", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 116, name: "Fruit Sweet #567", owner: "SweetFruit", price: "$89,000", status: "pending", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 117, name: "Seed Small #890", owner: "SmallSeed", price: "$34,000", status: "sold", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 118, name: "Root Deep #123", owner: "DeepRoot", price: "$178,000", status: "listed", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 119, name: "Leaf Green #456", owner: "GreenLeaf", price: "$267,000", status: "pending", views: 2345, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 120, name: "Branch High #789", owner: "HighBranch", price: "$345,000", status: "sold", views: 3456, likes: 678, category: "Nature", rarity: "Legendary" },
    { id: 121, name: "Bark Hard #234", owner: "HardBark", price: "$123,000", status: "listed", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 122, name: "Sap Sweet #567", owner: "SweetSap", price: "$56,000", status: "pending", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 123, name: "Pollen Fine #890", owner: "FinePollen", price: "$45,000", status: "sold", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 124, name: "Nectar Rich #123", owner: "RichNectar", price: "$189,000", status: "listed", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 125, name: "Honey Gold #456", owner: "GoldHoney", price: "$278,000", status: "pending", views: 2789, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 126, name: "Wax Smooth #789", owner: "SmoothWax", price: "$134,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 127, name: "Comb Hive #234", owner: "HiveComb", price: "$89,000", status: "listed", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 128, name: "Queen Royal #567", owner: "RoyalQueen", price: "$456,000", status: "pending", views: 4567, likes: 890, category: "Nature", rarity: "Legendary" },
    { id: 129, name: "Worker Busy #789", owner: "BusyWorker", price: "$67,000", status: "sold", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 130, name: "Drone Fly #123", owner: "FlyDrone", price: "$34,000", status: "listed", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 131, name: "Larva Small #456", owner: "SmallLarva", price: "$23,000", status: "pending", views: 456, likes: 67, category: "Nature", rarity: "Common" },
    { id: 132, name: "Pupa Transform #789", owner: "TransformPupa", price: "$156,000", status: "sold", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 133, name: "Butterfly Wing #234", owner: "WingButterfly", price: "$289,000", status: "listed", views: 2345, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 134, name: "Ant Colony #567", owner: "ColonyAnt", price: "$78,000", status: "pending", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 135, name: "Spider Web #789", owner: "WebSpider", price: "$45,000", status: "sold", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 136, name: "Bee Sting #123", owner: "StingBee", price: "$167,000", status: "listed", views: 1567, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 137, name: "Wasp Buzz #456", owner: "BuzzWasp", price: "$234,000", status: "pending", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 138, name: "Hornet Attack #789", owner: "AttackHornet", price: "$345,000", status: "sold", views: 3456, likes: 678, category: "Nature", rarity: "Legendary" },
    { id: 139, name: "Ladybug Spot #234", owner: "SpotLadybug", price: "$56,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 140, name: "Beetle Hard #567", owner: "HardBeetle", price: "$89,000", status: "pending", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 141, name: "Grasshopper Jump #789", owner: "JumpGrasshopper", price: "$123,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 142, name: "Cricket Sing #123", owner: "SingCricket", price: "$34,000", status: "listed", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 143, name: "Dragonfly Wing #456", owner: "WingDragonfly", price: "$178,000", status: "pending", views: 1890, likes: 345, category: "Nature", rarity: "Epic" },
    { id: 144, name: "Damselfly Dance #789", owner: "DanceDamselfly", price: "$256,000", status: "sold", views: 2345, likes: 456, category: "Nature", rarity: "Legendary" },
    { id: 145, name: "Mosquito Bite #234", owner: "BiteMosquito", price: "$45,000", status: "listed", views: 567, likes: 89, category: "Nature", rarity: "Common" },
    { id: 146, name: "Fly Buzz #567", owner: "BuzzFly", price: "$23,000", status: "pending", views: 456, likes: 67, category: "Nature", rarity: "Common" },
    { id: 147, name: "Moth Light #789", owner: "LightMoth", price: "$134,000", status: "sold", views: 1234, likes: 234, category: "Nature", rarity: "Epic" },
    { id: 148, name: "Caterpillar Eat #123", owner: "EatCaterpillar", price: "$67,000", status: "listed", views: 890, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 149, name: "Centipede Walk #456", owner: "WalkCentipede", price: "$89,000", status: "pending", views: 789, likes: 123, category: "Nature", rarity: "Rare" },
    { id: 150, name: "Neon Samurai #150", owner: "SamuraiX", price: "$500,000", status: "pending", views: 1234, likes: 234, category: "Art", rarity: "Epic" }
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
    }

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 nft-grid">
                  {getSortedNFTs().map((nft) => (
                    <div key={nft.id} className="bg-[#0a0a12]/50 rounded-lg border border-[#252535] overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-[#d4a84b]/20 to-[#b8902f]/10 flex items-center justify-center">
                        <div className="text-center">
                          <img 
                            src={`https://picsum.photos/seed/${nft.name}${nft.id}/200/200.jpg`}
                            alt={nft.name}
                            className="w-16 h-16 rounded-lg object-cover mx-auto mb-2"
                            onError={(e) => {
                              e.currentTarget.src = `https://picsum.photos/seed/nft${nft.id}/200/200.jpg`
                            }}
                          />
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
