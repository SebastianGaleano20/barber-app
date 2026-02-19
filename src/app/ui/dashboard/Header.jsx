import Image from 'next/image'

export default function Header() {
  return (
    <section className="w-full bg-gray-50 dark:bg-dark overflow-hidden">
      <article className="w-full flex flex-col justify-center items-center text-center px-4 py-10 md:py-14 lg:py-16">

        {/* Logo con animacion flotante */}
        <figure className="mb-6 animate-float">
          <Image
            width={180}
            height={180}
            className="rounded-full shadow-2xl ring-4 ring-amber-400 dark:ring-amber-500 object-cover"
            style={{ width: '180px', height: '180px' }}
            src="/logo.jpeg"
            alt="Barrio Fino logo"
            priority
          />
        </figure>

        {/* Nombre de la marca */}
        <h1 className="section-title gradient-text-amber text-4xl sm:text-5xl lg:text-6xl font-black mb-4 animate-fade-in tracking-tight">
          Barrio Fino
        </h1>

        {/* Descripcion */}
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl font-medium max-w-xl lg:max-w-2xl animate-fade-in-up text-balance px-2">
          Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.
        </p>

        {/* CTA Button */}
        <div className="mt-8 animate-fade-in-up animation-delay-300">
          <a
            href="https://wa.me/+5491123835826?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-glow-pulse text-base sm:text-lg"
          >
            Reservar Turno
          </a>
        </div>

      </article>

      {/* Separador decorativo */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
    </section>
  )
}
