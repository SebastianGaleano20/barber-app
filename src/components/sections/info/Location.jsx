import Image from "next/image";

export default function Location() {
  return (
    <section className="group card-hover-lift w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden animate-fade-in-up">
      <figure className="overflow-hidden">
        <Image
          width={500}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          src="/assets/local.jpeg"
          alt="Local Barrio Fino"
        />
      </figure>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
          Ubicación del local
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Alberti 2031 — Parque Patricios, Buenos Aires
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/CyysiyPupd8qPUur8"
          className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 text-sm"
        >
          Ver en mapa
        </a>
      </div>
    </section>
  );
}
