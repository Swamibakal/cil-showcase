// @ts-ignore
import items from '../data/experiences.json'
import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function Experiences(){
  const [active, setActive] = useState<string|undefined>(undefined)
  const video = (items as any[]).find(i=>i.id===active)?.video
  return (
    <section className="grid lg:grid-cols-2 gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {(items as any[]).map(it=> (
          <button key={it.id} onClick={()=>setActive(it.id)} className="bg-white rounded-2xl border p-4 text-left hover:shadow">
            <img src={it.thumb} alt={it.title} className="h-36 w-full object-contain"/>
            <h3 className="mt-2 font-semibold">{it.title}</h3>
            <p className="text-xs text-gray-500">{it.type} · {it.tech.join(', ')}</p>
            <p className="text-sm mt-1 text-gray-700">{it.summary}</p>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border p-4 min-h-[300px] flex items-center justify-center">
        {video ? <ReactPlayer url={video} controls width="100%"/> : <p className="text-gray-500">Select an experience to play a video.</p>}
      </div>
    </section>
  )
}