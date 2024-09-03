import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
            <div>
               <Image
               src='./logo.svg'
               width={100}
               height={100}
               />
            </div>
     <ul>
        <li><a href="#">Quienes somos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Reservar turno</a></li>
     </ul>
        </nav>
    )
}