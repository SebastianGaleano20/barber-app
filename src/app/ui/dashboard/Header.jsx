
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <section className="grid justify-items-center content-center items-center text-center h-5/6 w-screen">
          <Image
           src="/logo.jpeg"
           width={300}
           height={300}
           alt="logo"
          />
        <p className="text-lg font-bold">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</p>
      </section>
    </div>
  )
}