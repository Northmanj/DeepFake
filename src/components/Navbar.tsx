'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import supabase from '@/lib/supabase'
import AuthModal from './AuthModal'

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null)
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
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/upload" className="hover:underline">Upload</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/history" className="hover:underline">History</Link>

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

      {showAuthModal && (
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      )}
    </>
  )
}
