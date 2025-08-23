export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1626378722070-14adad9a5f85')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-5xl font-bold mb-4">
          Center For Immersive Learning
        </h1>
        <h2 className="text-2xl font-light">
          BITS PILANI Work Integrated Learning Program
        </h2>
      </div>
    </div>
  );
}
