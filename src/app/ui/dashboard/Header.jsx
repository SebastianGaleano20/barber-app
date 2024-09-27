
import Image from 'next/image'

export default function Header() {
  return (
    <section
      className="bg-[url(/fondo2.png)] bg-center bg-no-repeat bg-cover lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:image-full grid text-center h-5/6 w-full">
      <figure>
        <img
          src="/logo.jpeg"
          alt="logo" />
      </figure>
      <div className='bg-gray-500 bg-opacity-10 lg:bg-opacity-5 w-full m-0'>
        <h2 className="lg:text-3xl text-shadow text-black text-2xl font-bold">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</h2>
      </div>
    </section>
  )
}