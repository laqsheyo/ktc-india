export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur">
        <h1 className="text-xl font-semibold">KTC India</h1>
        <nav className="space-x-6 text-sm">
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Premium Electronics for India
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Inspired by innovation. Designed for performance. Experience the future with KTC India.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Explore Products
        </button>
      </section>

      {/* Products */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-16">
        {["Smart TV", "Gaming Monitor", "Display Panels"].map((item) => (
          <div
            key={item}
            className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">
              High performance {item.toLowerCase()} built for next-gen users.
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2026 KTC India Display LLP
      </footer>
    </main>
  );
}