import { useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
// @ts-ignore
import data from '../data/hardware.json'

function HardwareList() {
  const [q, setQ] = useState('')

  const items = useMemo(() => {
    const t = q.toLowerCase()
    return (data as any[]).filter(d =>
      [d.name, d.category, ...(d.specs || [])]
        .join(' ')
        .toLowerCase()
        .includes(t)
    )
  }, [q])

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="flex items-center gap-3 mb-6">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search hardware..."
          className="px-3 py-2 border rounded-lg w-full max-w-md"
        />
        <span className="text-sm text-gray-500">{items.length} items</span>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((d: any) => (
          <Link
            key={d.id}
            to={d.id}
            className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{d.name}</h3>
              <p className="text-sm text-gray-500">{d.category}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(d.specs || []).map((s: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function HardwareDetail() {
  const nav = useNavigate()
  const { id } = useParams()
  const item: any = (data as any).find((x: any) => x.id === id)

  if (!item) return <p className="p-6">Not found.</p>

  return (
    <article className="bg-white rounded-2xl shadow p-6 m-6">
      <button
        onClick={() => nav(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-contain"
        />
        <div>
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <p className="text-sm text-gray-500">{item.category}</p>

          <h3 className="mt-4 font-semibold">Specs</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {(item.specs || []).map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h3 className="mt-4 font-semibold">Use cases</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {(item.useCases || []).map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Hardware() {
  return (
    <Routes>
      <Route index element={<HardwareList />} />
      <Route path=":id" element={<HardwareDetail />} />
    </Routes>
  )
}
