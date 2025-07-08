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

export function LineChart({ data }: any) {
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

export function PieChartComponent({ data }: any) {
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

function groupByMonth(data: any[]) {
  const months: { [key: string]: number } = {}

  data.forEach((item) => {
    const date = new Date(item.createdAt)
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    months[key] = (months[key] || 0) + 1
  })

  return Object.entries(months).map(([month, count]) => ({ month, count }))
}
