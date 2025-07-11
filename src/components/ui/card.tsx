import { ReactNode } from 'react'

type CardProps = {
  title: string
  value: string | number
  icon: ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'
}

export function Card({ title, value, icon, color = 'blue' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 border-l-4 border-${color}-500`}>
      <div className="text-sm text-gray-500 mb-1">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className="text-2xl">{icon}</div>
      </div>
    </div>
  )
}

type CardContentProps = {
  title: string
  children: ReactNode
}

export function CardContent({ title, children }: CardContentProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}
