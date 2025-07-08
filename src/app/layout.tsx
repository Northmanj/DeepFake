import './globals.css'
import { ThemeProvider } from '../context/ThemeProvider'

export const metadata = {
  title: 'DeepFake',
  description: 'DeepFake Detection Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
