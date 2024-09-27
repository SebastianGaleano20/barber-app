import { SERVICES } from "../../../services.js"

export default function Services() {
  return (
    < section className="flex flex-wrap justify-center gap-4 m-5 lg:grid-cols-3 lg:gap-8 lg:m-8">
      {
        SERVICES.map(service => (
          <article className="p-5 lg:max-w-sm  max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={service.id}>
            <img className="rounded-t-lg w-full" src={service.imageURL} alt="img" />
            <h2 className="text-2xl p-5">{service.name}</h2>
            <p className="mb-3 text-2lg font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
          </article>
        ))
      }
    </section >
  )
}