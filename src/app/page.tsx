'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-12">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Detect AI-generated DeepFakes <span className="text-blue-600">instantly</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload videos or images and get real-time analysis on whether they are fake or authentic.
            Protect yourself and your organization from misinformation.
          </p>
          <div className="flex gap-4">
            <Link href="/upload">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
            <Link href="/history">
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition">
                View Scan History
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/deepfake.PNG"
            alt="AI Detection"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Scanning</h3>
            <p className="text-gray-600">
              Our intelligent engine detects even subtle signs of DeepFake manipulation.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Real-Time Results</h3>
            <p className="text-gray-600">
              Get results in seconds with confidence scores and breakdowns.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              Your data is never stored or shared. Total privacy and security guaranteed.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
