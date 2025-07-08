// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} DEEPFAKE - All Rights Reserved. Designed by Northman</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/faq" className="hover:underline">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
