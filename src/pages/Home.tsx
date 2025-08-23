export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/assets/vr-bg.jpg')" }}
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
