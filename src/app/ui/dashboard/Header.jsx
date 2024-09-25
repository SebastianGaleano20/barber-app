
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <section 
      className="lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:image-full grid p-4 text-center h-5/6 w-96">
          <figure>
            <img
              src="/logo.jpeg"
              alt="logo" />
          </figure>
        <p className="lg:text-2xl lg: text-lg font-bold">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</p>
      </section>
    </div>
  )
}