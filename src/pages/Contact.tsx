export default function Contact(){
  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl font-semibold">Contact & Collaboration</h2>
      <p className="mt-2 text-gray-600">For lab visits, internships, research, or industry collaboration, reach out:</p>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>Email: <a className="text-blue-600" href="mailto:lab@example.edu">lab@example.edu</a></li>
        <li>Location: New Labs Building, 2nd Floor</li>
        <li>Hours: Mon–Fri, 9:00–17:00</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">Optionally embed a Google Form link here.</p>
    </section>
  )
}