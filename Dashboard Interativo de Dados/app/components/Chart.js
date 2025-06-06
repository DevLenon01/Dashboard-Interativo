'use client'

import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import transactions from '../../data/transactions.json'

export default function Chart() {
  const [data, setData] = useState([])

  useEffect(() => {
    const monthlyTotals = {}

    transactions.forEach(t => {
      const month = new Date(t.date).toLocaleString('default', { month: 'short' })
      monthlyTotals[month] = (monthlyTotals[month] || 0) + t.amount
    })

    const chartData = Object.keys(monthlyTotals).map(month => ({
      name: month,
      total: monthlyTotals[month]
    }))

    setData(chartData)
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Gastos Mensais</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}