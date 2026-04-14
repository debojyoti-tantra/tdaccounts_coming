import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-white">

      {/* 🔥 Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
        alt="Accounting Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">

        {/* Logo / Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          TD ACCOUNTS
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg md:text-2xl font-medium">
          Shape Your Future with Accounting Skills
        </p>

        {/* Coming Soon */}
        <div className="mt-6 text-2xl md:text-3xl font-semibold text-yellow-400">
          🚀 Website Coming Soon
        </div>

        {/* Admission Info */}
        <p className="mt-4 text-md md:text-lg">
          Admission starts from <span className="font-bold">5th May 2026</span>
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://wa.me/916295008610"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Contact on WhatsApp
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-300">
          <p>📍 Near Habu Atta Mill, Rabindra Nagar, Siliguri</p>

          <p className="mt-2">
            Developed by Debojyoti Tantra
          </p>
          <p>Go to his Site 
            <a
              href="https://debojyoti.space"
              target="_blank"
              className="text-blue-400 hover:underline ml-1"
            >
              debojyoti.space
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}