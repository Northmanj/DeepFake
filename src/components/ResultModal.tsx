'use client'
import { useEffect } from 'react'
import { ScanResult } from '@/types/scanResult'

export default function ResultModal({ result, onClose }: {
  result: ScanResult | null,
  onClose: () => void
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!result) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">✕</button>

        <h2 className="text-xl font-bold mb-2">{result.filename}</h2>
        <p className="text-sm text-gray-500 mb-4">Scanned on: {new Date(result.createdAt).toLocaleString()}</p>

        <div className="mb-4">
          {result.fileUrl.endsWith('.mp4') ? (
            <video controls src={result.fileUrl} className="rounded w-full max-h-60" />
          ) : (
            <img src={result.fileUrl} alt={result.filename} className="rounded w-full max-h-60 object-contain" />
          )}
        </div>

        <div className="mb-2">
          <div className="text-sm font-semibold">DeepFake Score: {result.score}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
            <div className={`h-2 rounded-full ${getColor(result.score)}`} style={{ width: `${result.score}%` }} />
          </div>
        </div>

        <p className="text-sm mt-2">
          Confidence Level: <strong>{getLabel(result.score)}</strong>
        </p>
      </div>
    </div>
  )
}

function getColor(score: number) {
  if (score > 80) return 'bg-red-500'
  if (score > 50) return 'bg-yellow-400'
  return 'bg-green-500'
}

function getLabel(score: number) {
  if (score > 80) return 'Highly Fake'
  if (score > 50) return 'Possibly Fake'
  return 'Likely Real'
}
