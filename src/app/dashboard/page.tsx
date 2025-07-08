'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { LineChart, PieChartComponent } from '@/components/Charts'
import { ScanResult } from '@/types/scanResult'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  const [results, setResults] = useState<ScanResult[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('scanHistory')
    if (stored) {
      setResults(JSON.parse(stored))
    }
  }, [])

  const totalScans = results.length
  const fakeCount = results.filter(r => r.score >= 50).length
  const realCount = results.filter(r => r.score < 50).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">DeepFake Detection Dashboard</h1>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-lg text-gray-600">Total Scans</h2>
            <p className="text-2xl font-bold text-blue-600">{totalScans}</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-lg text-gray-600">Fake Detected</h2>
            <p className="text-2xl font-bold text-red-500">{fakeCount}</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-lg text-gray-600">Real Media</h2>
            <p className="text-2xl font-bold text-green-500">{realCount}</p>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Monthly Scans Overview</h3>
            <LineChart data={results} />
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Detection Ratio</h3>
            <PieChartComponent data={[fakeCount, realCount]} />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
