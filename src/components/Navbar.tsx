'use client'
import { useEffect, useState } from 'react'
import supabase from '@/lib/supabase'
import AuthModal from './AuthModal'


export default function Navbar() {
  const [user, setUser] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  return (
    <>
      <nav className="bg-white px-6 py-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">DEEPFAKE</h1>

        <div className="flex gap-4 items-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/upload" className="hover:underline">Upload</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/history" className="hover:underline">History</a>
          

          {user ? (
            <span className="text-sm text-gray-600">Hi, {user.email}</span>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="border px-3 py-1 rounded border-blue-600 text-blue-600 hover:bg-blue-100"
            >
              Login / Signup
            </button>
          )}
        </div>
      </nav>

      {/* Show modal when triggered */}
      {showAuthModal && (
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      )}
    </>
  )
}
