'use client'

import { useEffect, useState } from 'react'

export default function ToggleTheme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="mt-4 text-center">
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        {dark ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  )
}