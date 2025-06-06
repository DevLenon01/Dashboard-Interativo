import './globals.css'

export const metadata = {
  title: 'Finance Dashboard',
  description: 'Visualize seus gastos com gráficos interativos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        {children}
      </body>
    </html>
  )
}