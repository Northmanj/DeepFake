import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
} from 'recharts'

// Define a result type (should match your ScanResult)
type ScanResult = {
  createdAt: string
}

type LineChartProps = {
  data: ScanResult[]
}

export function LineChart({ data }: LineChartProps) {
  const grouped = groupByMonth(data)

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ReLineChart data={grouped}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#1d4ed8" />
      </ReLineChart>
    </ResponsiveContainer>
  )
}

type PieChartComponentProps = {
  data: [number, number] // [fake, real]
}

export function PieChartComponent({ data }: PieChartComponentProps) {
  const COLORS = ['#ef4444', '#10b981']
  const pieData = [
    { name: 'Fake', value: data[0] },
    { name: 'Real', value: data[1] },
  ]

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RePieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {pieData.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </RePieChart>
    </ResponsiveContainer>
  )
}

type GroupedMonthData = {
  month: string
  count: number
}

function groupByMonth(data: ScanResult[]): GroupedMonthData[] {
  const months: Record<string, number> = {}

  data.forEach((item) => {
    const date = new Date(item.createdAt)
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    months[key] = (months[key] || 0) + 1
  })

  return Object.entries(months).map(([month, count]) => ({ month, count }))
}
