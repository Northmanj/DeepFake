// app/faq/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    question: 'What is a DeepFake?',
    answer: 'A DeepFake is a synthetic media where a person in an existing image or video is replaced with someone else using artificial intelligence.',
  },
  {
    question: 'Whats the function of the application',
    answer: 'The main function for this deepfake application is to ensure accuracy n sharing of information making it sare for the authenticity of the information being shared',
  },
  {
    question: 'Is This application going to replace AI Contents',
    answer: 'No, DeepFake is only going to verify the authenticity of information being shared nothing else. Its main function is to determine weather a video or image or speach is AI Edited or real ',
  },
  {
    question: 'How accurate are the results?',
    answer: 'This dashboard is a mockup simulation. In production, detection accuracy would depend on the ML model used.',
  },
  {
    question: 'Can I use this tool for real-world analysis?',
    answer: 'Not yet. This is a front-end showcase and not connected to a real AI detection API.',
  },
  {
    question: 'Is my uploaded data stored?',
    answer: 'In this version, scans are saved locally in your browser only.',
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
