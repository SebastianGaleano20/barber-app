import Image from "next/image";

export default function Contact() {
  return (
    <section className="group card-hover-lift relative w-full max-w-md mx-auto lg:row-start-2 lg:col-start-2 rounded-2xl shadow-md overflow-hidden animate-fade-in-up animation-delay-200">
      {/* Background image */}
      <figure className="relative">
        <Image
          width={500}
          height={350}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          src="/ig.jpeg"
          alt="Instagram Barrio Fino"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </figure>

      {/* Content over image */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg mb-1 text-shadow-dark">
          Instagram
        </h3>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed text-shadow-dark">
          ¡Visitanos en nuestro Instagram para ver más diseños y contactarnos!
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/barriofino_barberia/reels/?__d=1%2F"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 text-sm"
        >
          Ir a Instagram
        </a>
      </div>
    </section>
  )
}