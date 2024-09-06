const SERVICES = [
  {
    id: 1,
    imageURL: '/corte3.jpeg',
    name: 'CORTES UNISEX / NIÑOS',
    description: 'Clásico o moderno. Marcamos tendencia combinando máquinas y tijeras.'
  },
  {
    id: 2,
    name: 'CORTE + BARBA',
    imageURL: 'corte1.jpeg',
    description: 'Clásico o moderno más afeitada tradicional o recorte de barba.'
  },
  {
    id: 3,
    imageURL: '/corte2.jpeg',
    name: 'COLORES',
    description: 'Proceso de coloracion para cabello. Consultar gama de colores'
  }]

export default function Services() {
  return (
    < section className = "flex flex-wrap justify-center gap-4 m-3" >
   {
      SERVICES.map(service => (
        <article className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={service.id}>
          <img className="rounded-t-lg" src={service.imageURL} alt="img" />
          <h2 className="text-2xl p-5">{service.name}</h2>
          <p className="mb-3 text-2lg font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
        </article>
      ))
    }
    </section >
  )
}