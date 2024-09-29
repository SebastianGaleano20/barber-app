
import Image from 'next/image'

export default function Header() {
  return (
    <section className="bg-[url(/fondo2.png)] bg-center bg-no-repeat bg-cover h-5/6 w-full">
      <article className='bg-gray-500 bg-opacity-50 w-full m-0  flex flex-col justify-center items-center text-center '>
        <figure className='m-4'>
          <img
            src="/logo.jpeg"
            alt="logo" />
        </figure>
        <h2 className="lg:text-3xl text-shadow text-black text-xl font-black mb-2">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</h2>
      </article>
    </section>
  )
}