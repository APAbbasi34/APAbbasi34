"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Settings,
  LogOut,
  Shield,
  Eye,
  Ban,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  Activity,
  ShoppingCart,
  Bell,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Crown,
  Gem,
  Target,
  Upload
} from "lucide-react"
import { useRouter } from "next/navigation"

const mockUsers = []

const mockNFTs = []

const mockTransactions = []

const mockDeposits = []

const mockWithdrawals = []

const mockNotifications = []

const mockProofs = []

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminData = localStorage.getItem("admin")
      if (adminData) {
        setAdmin(JSON.parse(adminData))
      } else {
        router.push("/admin/login")
      }
    }
  }, [router])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("admin")
    }
    router.push("/")
  }

  const handleUserAction = (userId: number, action: string) => {
    console.log(`User ${userId}: ${action}`)
  }

  const handleNFTAction = (nftId: number, action: string) => {
    console.log(`NFT ${nftId}: ${action}`)
  }

  if (!admin) {
    return <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-[#0a0a12]">
      {/* Header */}
      <header className="border-b border-[#252535] bg-[#0a0a12]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-xl" />
                  <div className="absolute inset-[2px] bg-[#0a0a12] rounded-[10px] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Admin Panel
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="text-sm text-foreground">{admin.name}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage users, NFTs, and platform settings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <Users className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">0</div>
              <p className="text-xs text-muted-foreground">Total registered users</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total NFTs</CardTitle>
              <Package className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">0</div>
              <p className="text-xs text-muted-foreground">Total NFTs created</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$0</div>
              <p className="text-xs text-muted-foreground">Total revenue generated</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">0</div>
              <p className="text-xs text-muted-foreground">Users currently online</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-[#1a1a28] border border-[#252535]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
            <TabsTrigger value="proofs">Proofs</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-red-500" />
                    Platform Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Daily Active Users</span>
                      <span className="text-muted-foreground">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">NFT Sales</span>
                      <span className="text-muted-foreground">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Revenue Growth</span>
                      <span className="text-muted-foreground">0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-red-500" />
                    Recent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockNotifications.slice(0, 4).map((notification) => (
                      <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0a12]/50">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' :
                          notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.date}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users and their activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#d4a84b]/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#d4a84b]" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-sm text-muted-foreground">{user.phone}</p>
                          <p className="text-xs text-muted-foreground">Joined: {user.registered}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-[#d4a84b]">Active</p>
                          <p className="text-xs text-muted-foreground">Last Login: {user.lastLogin}</p>
                        </div>
                        <Badge className={
                          user.status === 'active' 
                            ? 'bg-green-500/20 text-green-500 border-green-500/30'
                            : 'bg-red-500/20 text-red-500 border-red-500/30'
                        }>
                          {user.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, 'view')}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          {user.status === 'active' ? (
                            <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, 'suspend')}>
                              <Ban className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, 'activate')}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nfts" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>NFT Management</CardTitle>
                <CardDescription>Monitor and manage all NFTs on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockNFTs.map((nft) => (
                    <div key={nft.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#d4a84b]/10 flex items-center justify-center">
                          <Package className="w-5 h-5 text-[#d4a84b]" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{nft.name}</p>
                          <p className="text-sm text-muted-foreground">Owner: {nft.owner}</p>
                          <p className="text-xs text-muted-foreground">{nft.views} views, {nft.likes} likes</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-[#d4a84b]">{nft.price}</p>
                        </div>
                        <Badge className={
                          nft.status === 'listed' 
                            ? 'bg-blue-500/20 text-blue-500 border-blue-500/30'
                            : nft.status === 'sold'
                            ? 'bg-green-500/20 text-green-500 border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                        }>
                          {nft.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleNFTAction(nft.id, 'view')}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleNFTAction(nft.id, 'edit')}>
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle>Transaction Management</CardTitle>
                <CardDescription>Monitor all platform transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#d4a84b]/10 flex items-center justify-center">
                          <ShoppingCart className="w-5 h-5 text-[#d4a84b]" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{tx.nft}</p>
                          <p className="text-sm text-muted-foreground">User: {tx.user}</p>
                          <p className="text-xs text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-[#d4a84b]">{tx.amount}</p>
                          <Badge variant="outline" className="capitalize">{tx.type}</Badge>
                        </div>
                        <Badge className={
                          tx.status === 'completed' 
                            ? 'bg-green-500/20 text-green-500 border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                        }>
                          {tx.status}
                        </Badge>
                        <Button size="sm" variant="outline" onClick={() => console.log(`View transaction ${tx.id}`)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deposits" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-red-500" />
                  Deposit Management
                </CardTitle>
                <CardDescription>Manage user deposits and funding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockDeposits.map((deposit) => (
                    <div key={deposit.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <ArrowDownRight className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{deposit.user}</p>
                          <p className="text-sm text-muted-foreground">Method: {deposit.method}</p>
                          <p className="text-sm text-muted-foreground">Type: {deposit.type}</p>
                          <p className="text-xs text-muted-foreground">TX: {deposit.txHash}</p>
                          <p className="text-xs text-muted-foreground">{deposit.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-green-500">{deposit.amount}</p>
                          <Badge variant="outline" className="capitalize">{deposit.type}</Badge>
                        </div>
                        <Badge className={
                          deposit.status === 'completed' 
                            ? 'bg-green-500/20 text-green-500 border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                        }>
                          {deposit.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => console.log(`View deposit ${deposit.id}`)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          {deposit.status === 'pending' && (
                            <Button size="sm" variant="outline" onClick={() => console.log(`Approve deposit ${deposit.id}`)}>
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdrawals" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-red-500" />
                  Withdrawal Management
                </CardTitle>
                <CardDescription>Process user withdrawal requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockWithdrawals.map((withdrawal) => (
                    <div key={withdrawal.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{withdrawal.user}</p>
                          <p className="text-sm text-muted-foreground">To: {withdrawal.address}</p>
                          <p className="text-xs text-muted-foreground">{withdrawal.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-red-500">{withdrawal.amount}</p>
                        </div>
                        <Badge className={
                          withdrawal.status === 'completed' 
                            ? 'bg-green-500/20 text-green-500 border-green-500/30'
                            : withdrawal.status === 'failed'
                            ? 'bg-red-500/20 text-red-500 border-red-500/30'
                            : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                        }>
                          {withdrawal.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => console.log(`View withdrawal ${withdrawal.id}`)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          {withdrawal.status === 'pending' && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => console.log(`Approve withdrawal ${withdrawal.id}`)}>
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => console.log(`Reject withdrawal ${withdrawal.id}`)}>
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="proofs" className="space-y-6">
            <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-red-500" />
                  Proof Management
                </CardTitle>
                <CardDescription>Review and approve user deposit/withdrawal proofs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProofs.map((proof) => (
                    <div key={proof.id} className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${
                          proof.type === 'deposit' 
                            ? 'bg-green-500/10' 
                            : 'bg-red-500/10'
                        } flex items-center justify-center`}>
                          {proof.type === 'deposit' ? (
                            <ArrowDownRight className="w-5 h-5 text-green-500" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium text-foreground">{proof.user}</p>
                            <Badge className={
                              proof.type === 'deposit' 
                                ? 'bg-green-500/20 text-green-500 border-green-500/30'
                                : 'bg-red-500/20 text-red-500 border-red-500/30'
                            }>
                              {proof.type}
                            </Badge>
                            <Badge className={
                              proof.status === 'approved' 
                                ? 'bg-green-500/20 text-green-500 border-green-500/30'
                                : proof.status === 'rejected'
                                ? 'bg-red-500/20 text-red-500 border-red-500/30'
                                : 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
                            }>
                              {proof.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p>Amount: <span className="text-foreground font-medium">{proof.amount} {proof.currency}</span></p>
                            <p>Address: <span className="font-mono text-xs">{proof.address}</span></p>
                            <p>TX ID: <span className="font-mono text-xs">{proof.transactionId}</span></p>
                            <p>Submitted: {proof.submittedAt}</p>
                            {proof.reviewedAt && (
                              <p>Reviewed: {proof.reviewedAt} by {proof.reviewedBy}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => console.log(`View proof ${proof.id}`)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        {proof.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-green-500/30 text-green-500 hover:bg-green-500/10"
                              onClick={() => console.log(`Approve proof ${proof.id}`)}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                              onClick={() => console.log(`Reject proof ${proof.id}`)}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-500" />
                    Level Settings
                  </CardTitle>
                  <CardDescription>Configure user levels and benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { level: 1, name: "Bronze", minSpending: "0 ETH", benefits: ["Basic trading", "1% referral"], color: "bg-amber-600" },
                      { level: 2, name: "Silver", minSpending: "5 ETH", benefits: ["Advanced trading", "2% referral", "Priority support"], color: "bg-gray-500" },
                      { level: 3, name: "Gold", minSpending: "20 ETH", benefits: ["Pro trading", "3% referral", "VIP support", "Early access"], color: "bg-yellow-500" },
                      { level: 4, name: "Platinum", minSpending: "50 ETH", benefits: ["Elite trading", "5% referral", "Dedicated support", "Exclusive features"], color: "bg-purple-600" }
                    ].map((level) => (
                      <div key={level.level} className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${level.color} flex items-center justify-center`}>
                            {level.level === 1 && <Star className="w-4 h-4 text-white" />}
                            {level.level === 2 && <Crown className="w-4 h-4 text-white" />}
                            {level.level === 3 && <Gem className="w-4 h-4 text-white" />}
                            {level.level === 4 && <Target className="w-4 h-4 text-white" />}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{level.name}</p>
                            <p className="text-sm text-muted-foreground">Min: {level.minSpending}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" onClick={() => console.log(`Edit level ${level.level}`)}>
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-red-500" />
                    Deposit Settings
                  </CardTitle>
                  <CardDescription>Configure deposit limits and methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Minimum Deposit</Label>
                    <Input placeholder="0.1 ETH" className="bg-[#0a0a12] border-[#252535]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Maximum Daily Deposit</Label>
                    <Input placeholder="100 ETH" className="bg-[#0a0a12] border-[#252535]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Deposit Fee (%)</Label>
                    <Input placeholder="1.0" className="bg-[#0a0a12] border-[#252535]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Enabled Payment Methods</Label>
                    <div className="space-y-2">
                      {['MetaMask', 'Trust Wallet', 'Coinbase', 'WalletConnect'].map((method) => (
                        <div key={method} className="flex items-center justify-between p-2 rounded-lg bg-[#0a0a12]/50">
                          <span className="text-sm text-foreground">{method}</span>
                          <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Enabled</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
