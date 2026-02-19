export default function ImageGalleryLg() {
  const galleryImages = [
    { src: "/local.jpeg", alt: "Local Barrio Fino" },
    { src: "/corte9.jpeg", alt: "Corte de pelo" },
    { src: "/corte3.jpeg", alt: "Corte de pelo" },
    { src: "/corte4.jpeg", alt: "Corte de pelo" },
    { src: "/corte5.jpeg", alt: "Corte de pelo" },
    { src: "/corte6.jpeg", alt: "Corte de pelo" },
  ];

  return (
    <section className="w-full hidden lg:block py-6 animate-fade-in">
      <h2 className="section-title text-3xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
        Nuestros Trabajos
      </h2>
      <div className="carousel carousel-center w-full gap-3 px-6 overflow-x-auto pb-2">
        {galleryImages.map((img, index) => (
          <article
            key={index}
            className="carousel-item group relative overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:ring-amber-400/60 dark:hover:ring-amber-500/60"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={img.src}
              className="w-72 h-64 object-cover"
              alt={img.alt}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        ))}
      </div>
    </section>
  );
}