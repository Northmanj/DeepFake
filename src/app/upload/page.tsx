'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<any>(null)

  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setResult(null)
    }
  }

  const simulateUpload = async () => {
    if (!file) return
    setUploading(true)
    setProgress(0)

    for (let i = 1; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 100))
      setProgress(i)
    }

    const url = URL.createObjectURL(file)
    const randomScore = Math.floor(Math.random() * 100) + 1

    const newResult = {
      id: Date.now().toString(),
      filename: file.name,
      fileUrl: url,
      score: randomScore,
      createdAt: new Date().toISOString()
    }

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('scanHistory') || '[]')
    localStorage.setItem('scanHistory', JSON.stringify([newResult, ...existing]))

    setResult(newResult)
    setUploading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-2">DeepFake Upload & Scan</h1>
        <p className="text-center text-gray-500 mb-8">Upload a video or image to check for AI manipulation.</p>

        {/* Upload Box */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          {!file && (
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-gray-500 cursor-pointer hover:border-blue-500 transition">
              <span className="mb-2">Click or drag a file here to upload</span>
              <input type="file" accept="image/*,video/*" onChange={handleFileChange} hidden />
            </label>
          )}

          {file && !uploading && !result && (
            <div className="text-center">
              <p className="mb-2 text-sm text-gray-600">File selected: <strong>{file.name}</strong></p>
              <button
                onClick={simulateUpload}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Start DeepFake Scan
              </button>
            </div>
          )}

          {uploading && (
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Analyzing...</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-4 bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {result && (
            <div className="mt-6 text-center">
              <h2 className="text-xl font-semibold mb-2">{result.filename}</h2>
              {file.type.startsWith('image') ? (
                <Image src={result.fileUrl} alt="Preview" width={400} height={300} className="mx-auto rounded mb-4" />
              ) : (
                <video src={result.fileUrl} controls className="mx-auto rounded mb-4 max-h-60" />
              )}
              <p className="mb-2 text-gray-700">
                DeepFake Score: <span className="font-bold text-lg">{result.score}%</span>
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${getColor(result.score)}`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
              <button
                onClick={() => router.push('/history')}
                className="mt-4 text-blue-600 hover:underline text-sm"
              >
                View Scan History
              </button>
            </div>
          )}
          
        </div>
        
      </div>
    
    </div>
    
  )
}

function getColor(score: number) {
  if (score > 80) return 'bg-red-500'
  if (score > 50) return 'bg-yellow-400'
  return 'bg-green-500'
}
