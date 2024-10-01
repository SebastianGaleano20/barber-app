import Image from "next/image.js"
import { SERVICES } from "../../../services.js"

export default function Services() {
  return (
    <section>
      <h2 className="text-3xl text-center font-bold m-2">Servicios</h2>
      <article className="grid justify-center gap-4 m-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:m-8">
        {
          SERVICES.map(service => (
            <article className="p-5 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:max-w-sm" key={service.id}>
              <figure>
              <Image 
              width={500}
              height={500}
              className="rounded-t-lg w-full"
              src={service.imageURL} 
              alt="img" />
              </figure>
              <h2 className="text-2xl p-5">{service.name}</h2>
              <p className="mb-3 text-2lg font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
            </article>
          ))
        }
      </article >
    </section>
  )
}