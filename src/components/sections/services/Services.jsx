import Image from "next/image"
import { SERVICES } from "@/data/services"

export default function Services() {
  return (
    <section className="w-full py-10 px-4 md:px-6 lg:px-8">
      <h2 className="section-title text-2xl sm:text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-100">
        Servicios
      </h2>
      <article className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            className="group card-hover-lift bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <figure className="overflow-hidden">
              <Image
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                src={service.imageURL}
                alt={service.name}
              />
            </figure>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-wide">
                {service.name}
              </h3>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </article>
    </section>
  )
}
