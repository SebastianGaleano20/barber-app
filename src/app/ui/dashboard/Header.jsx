
import Image from 'next/image'

export default function Header() {
  return (
    <section className="h-5/6 w-full bg-white dark:bg-dark">
      <article className='w-full m-0  flex flex-col justify-center items-center text-center '>
        <figure className='m-4'>
          <Image
            width={500}
            height={500}
            style={{ height: "auto" }}
            src="/logo.jpeg"
            alt="logo" />
        </figure>
        <h2 className="text-gray-800 dark:text-gray-100 lg:text-2xl text-shadow text-xl font-black mb-2">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</h2>
      </article>
    </section>
  )
}