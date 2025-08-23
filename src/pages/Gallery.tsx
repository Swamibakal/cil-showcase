const imgs = Array.from({length:8}, (_,i)=>`https://picsum.photos/seed/cil${i}/600/400`)
export default function Gallery(){
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {imgs.map((src,i)=> (
        <img key={i} src={src} className="w-full h-60 object-cover rounded-2xl"/>
      ))}
    </div>
  )
}