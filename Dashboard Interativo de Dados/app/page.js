'use client'

import Header from './components/Header'
import Chart from './components/Chart'
import Card from './components/Card'
import ToggleTheme from './components/ToggleTheme'

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <Header />
      <ToggleTheme />
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Gastos Totais" value="R$ 3.150" />
        <Card title="Fixos" value="R$ 2.000" />
        <Card title="Variáveis" value="R$ 1.150" />
      </section>
      <section className="mt-10">
        <Chart />
      </section>
    </main>
  )
}