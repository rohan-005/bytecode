'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <footer className="w-full mt-16 py-8 bg-white/5 backdrop-blur-lg border-t border-white/10 text-gray-300 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} ByteCode. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer
