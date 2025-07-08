'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { ScanResult } from '@/types/scanResult'
import Footer from '@/components/Footer'

export default function HistoryPage() {
  const [results, setResults] = useState<ScanResult[]>([])
  const [selected, setSelected] = useState<ScanResult | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('scanHistory')
    if (stored) {
      setResults(JSON.parse(stored))
    }
  }, [])

  const getColor = (score: number) => {
    if (score > 80) return 'bg-red-500'
    if (score > 50) return 'bg-yellow-400'
    return 'bg-green-500'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Scan History</h2>

        {results.length === 0 ? (
          <p className="text-gray-500">No scan history found.</p>
        ) : (
          <div className="grid gap-4">
            {results.map((result) => (
              <div
                key={result.id}
                onClick={() => setSelected(result)}
                className="bg-white p-4 rounded shadow hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{result.filename}</h3>
                  <p className="text-sm text-gray-500">{new Date(result.createdAt).toLocaleString()}</p>
                </div>

                <div className="text-right">
                  <div className="text-sm mb-1 font-semibold">{result.score}% DeepFake</div>
                  <div className="w-28 h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${getColor(result.score)}`}
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Result Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-2">{selected.filename}</h3>
            {selected.fileUrl.endsWith('.mp4') ? (
              <video
                src={selected.fileUrl}
                controls
                className="w-full rounded mb-4 max-h-60"
              />
            ) : (
              <img
                src={selected.fileUrl}
                alt="preview"
                className="w-full rounded mb-4"
              />
            )}
            <p className="mb-2 text-sm text-gray-700">
              DeepFake Score: <strong>{selected.score}%</strong>
            </p>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div
                className={`h-2 rounded-full ${getColor(selected.score)}`}
                style={{ width: `${selected.score}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 text-center">
              Scanned on {new Date(selected.createdAt).toLocaleString()}
            </p>
          </div>
          <Footer/>
        </div>
      )}
      
    </div>
  )
}
