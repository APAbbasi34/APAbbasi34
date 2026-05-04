"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, X, Image as ImageIcon, FileText, CheckCircle, AlertCircle, Clock } from "lucide-react"

interface ProofUploadProps {
  type: "deposit" | "withdrawal"
  amount: string
  currency: string
  address: string
  onSubmit: (proof: any) => void
}

export function ProofUpload({ type, amount, currency, address, onSubmit }: ProofUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [transactionId, setTransactionId] = useState("")
  const [description, setDescription] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Validate file type and size
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
      const maxSize = 10 * 1024 * 1024 // 10MB

      if (!validTypes.includes(file.type)) {
        alert('Please upload an image (JPG, PNG) or PDF file')
        return
      }

      if (file.size > maxSize) {
        alert('File size must be less than 10MB')
        return
      }

      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = async () => {
    if (!selectedFile || !transactionId) {
      alert('Please upload proof and enter transaction ID')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    setTimeout(() => {
      setIsUploading(false)
      setUploadProgress(0)
      
      const proof = {
        id: Date.now(),
        type,
        amount,
        currency,
        address,
        transactionId,
        description,
        fileName: selectedFile?.name || "",
        fileSize: selectedFile?.size || 0,
        fileType: selectedFile?.type || "",
        proofUrl: previewUrl,
        status: 'pending',
        submittedAt: new Date().toISOString()
      }

      onSubmit(proof)
      
      // Reset form
      setSelectedFile(null)
      setPreviewUrl("")
      setTransactionId("")
      setDescription("")
      setUploadProgress(0)
    }, 2000)
  }

  const removeFile = () => {
    setSelectedFile(null)
    setPreviewUrl("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className="bg-gradient-to-b from-[#1a1a28] to-[#12121c] border-[#252535]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#d4a84b]" />
          {type === "deposit" ? "Deposit Proof" : "Withdrawal Proof"}
        </CardTitle>
        <CardDescription>
          {type === "deposit" 
            ? "Upload proof of your deposit to verify the transaction" 
            : "Upload proof of withdrawal request for verification"
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Transaction Details */}
        <div className="p-4 rounded-lg bg-[#0a0a12]/50 border border-[#252535]">
          <h4 className="font-medium text-foreground mb-2">Transaction Details</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type:</span>
              <Badge className={type === "deposit" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}>
                {type === "deposit" ? "Deposit" : "Withdrawal"}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount:</span>
              <span className="text-foreground font-medium">{amount} {currency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Address:</span>
              <span className="text-foreground font-mono text-xs">{address}</span>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-4">
          <Label>Upload Proof Image/PDF</Label>
          <div 
            className="border-2 border-dashed border-[#252535] rounded-lg p-8 text-center cursor-pointer hover:border-[#d4a84b]/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*,.pdf"
              onChange={handleFileSelect}
            />
            
            {previewUrl ? (
              <div className="space-y-4">
                {selectedFile?.type.startsWith('image/') ? (
                  <img 
                    src={previewUrl} 
                    alt="Proof preview" 
                    className="max-w-full h-64 object-cover rounded-lg mx-auto"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-[#d4a84b]/10 flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-[#d4a84b]" />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {selectedFile?.name} ({selectedFile ? (selectedFile.size / 1024 / 1024).toFixed(2) : '0'} MB)
                  </div>
                  <Button size="sm" variant="outline" onClick={(e) => {
                    e.stopPropagation()
                    removeFile()
                  }}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4a84b]/10 flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-[#d4a84b]" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Click to upload proof</p>
                  <p className="text-sm text-muted-foreground">JPG, PNG, PDF (Max 10MB)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Transaction ID */}
        <div className="space-y-2">
          <Label htmlFor="transactionId">Transaction ID / Hash</Label>
          <Input
            id="transactionId"
            placeholder="Enter transaction ID or hash"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="bg-[#0a0a12] border-[#252535] focus:border-[#d4a84b]"
          />
          <p className="text-xs text-muted-foreground">
            Enter the transaction hash or ID from your wallet/exchange
          </p>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Additional Information</Label>
          <textarea
            id="description"
            placeholder="Add any additional information about this transaction..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0a0a12] border-[#252535] focus:border-[#d4a84b] text-sm min-h-[100px] resize-none"
          />
        </div>

        {/* Upload Progress */}
        {isUploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Uploading...</span>
              <span className="text-foreground">{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}

        {/* Submit Button */}
        <Button 
          className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3d] text-[#0a0a12] hover:from-[#e0b85c] hover:to-[#d4a84b]"
          onClick={handleSubmit}
          disabled={!selectedFile || !transactionId || isUploading}
        >
          {isUploading ? "Uploading..." : "Submit Proof"}
        </Button>

        {/* Instructions */}
        <Alert className="border-blue-500/20 bg-blue-500/10">
          <AlertCircle className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-400 text-sm">
            {type === "deposit" 
              ? "Please upload a screenshot of your successful deposit transaction showing the amount, address, and transaction ID."
              : "Please upload a screenshot of your withdrawal request or transaction confirmation."
            }
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
