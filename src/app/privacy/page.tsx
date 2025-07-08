// app/privacy/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-sm leading-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              This DeepFake Detection Dashboard (“we”, “our”, or “the App”) respects your privacy. This policy outlines how we collect, use, and protect any data when you use this application.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. What We Collect</h2>
            <p>
              Our current mockup does not collect or transmit any personal data to servers. All scan results are stored locally in your browser using <code>localStorage</code>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. Uploaded Files</h2>
            <p>
              Files uploaded for scanning are processed locally within your browser and never sent to a remote server. No media files are saved, shared, or analyzed outside your device.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. Cookies and Tracking</h2>
            <p>
              We do not use cookies or any third-party trackers. This application is designed for demonstration and testing purposes only.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Security</h2>
            <p>
              While no actual user data is stored or transmitted, we still encourage safe practices when uploading sensitive files. Avoid using this demo app for confidential or personal media.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Changes to This Policy</h2>
            <p>
              This privacy policy may be updated to reflect changes in our practices. You will be notified through the application if this occurs.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Contact</h2>
            <p>
              If you have any questions or feedback regarding this policy, please reach out to us via email at <a className="text-blue-500 hover:underline" href="mailto:cleardroptech@gmail.com">cleardroptech@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
