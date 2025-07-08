'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: July 8, 2025</p>

        <section className="space-y-6 text-base leading-relaxed">
          <p>
            Welcome to <strong>DEEPFAKE</strong> – your trusted tool for media integrity verification. By using our application, you agree to the following terms:
          </p>

          <div>
            <h2 className="font-semibold text-lg">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the DeepFake platform, you agree to be bound by these Terms of Service and our{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">2. Eligibility</h2>
            <p>You must be at least 13 years old to use this application. By using the service, you confirm that you meet this requirement.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">3. Account and Access</h2>
            <ul className="list-disc pl-5">
              <li>Some features may require registration.</li>
              <li>You are responsible for keeping your login credentials safe.</li>
              <li>Notify us immediately if you detect unauthorized account use.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">4. Use of the Service</h2>
            <ul className="list-disc pl-5">
              <li>No illegal, harmful, or misleading activity is allowed.</li>
              <li>Do not upload content that violates rights of others.</li>
              <li>Do not misuse the app to promote deepfake creation.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">5. Data and Results</h2>
            <p>Scan results are AI-generated and meant for informational purposes. We do not guarantee 100% accuracy.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">6. Limitation of Liability</h2>
            <p>We are not liable for any damages caused by the use or inability to use this service.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">7. Changes to the Service</h2>
            <p>We may modify or discontinue any feature without notice.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">8. Termination</h2>
            <p>We may suspend or terminate your account for violating these terms.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">9. Governing Law</h2>
            <p>These terms are governed by the laws of Kenya.</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">10. Contact</h2>
            <p>
              For questions, contact us at <a href="mailto:cleardroptech@gmail.com" className="text-blue-600 hover:underline">cleardroptech@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
