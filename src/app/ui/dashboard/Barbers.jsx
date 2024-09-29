import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Barbers() {
    return (
        <>
            <h2 className="text-3xl text-center font-bold m-2">Barberos</h2>
            <article className="card lg:card-side bg-base-100 shadow-xl m-4 text-center">
                <figure>
                    <Image
                        width={500}
                        height={500}
                        src="/jony.jpeg"
                        alt="Jony" />
                </figure>
                <article className="card-body">
                    <h2 className="text-center font-bold text-3xl">Jony</h2>
                    <p>Barber profesional con experiencia de 4 años junto al equipo de Barrio Fino.</p>
                    <div className="card-actions justify-between mt-2">
                        <button className="btn btn-outline btn-error"><FaInstagram /><a target="_blank" href="https://www.instagram.com/jonimasna?igsh=MTR1ZW5rMmY3MDhvaQ==">Ver Perfil</a></button>
                        <button className="btn btn-outline btn-accent"><FaWhatsapp /><a target="_blank" href="https://wa.me/+54901131675543?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"></a>Solicitar turno</button>
                    </div>
                </article>
            </article>

            <article className="card lg:card-side bg-base-100 shadow-xl m-4 text-center">
                <figure>
                    <Image
                        width={500}
                        height={500}
                        src="/juan.jpeg"
                        alt="Juan" />
                </figure>
                <article className="card-body">
                    <h2 className="text-center font-bold text-3xl">Juan Ignacio</h2>
                    <p>Barber profesional - Fundador de Barrio Fino.</p>
                    <div className="card-actions justify-between mt-2">
                        <button className="btn btn-outline btn-error"><FaInstagram /><a target="_blank" href="https://www.instagram.com/san_cristobal13?igsh=YnhtdGdwNXZmNGM2">Ver Perfil</a></button>
                        <button className="btn btn-outline btn-accent"><FaWhatsapp /><a target="_blank" href="https://wa.me/+54901123835826?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"></a>Solicitar turno</button>
                    </div>
                </article>
            </article>

            <article className="card lg:card-side bg-base-100 shadow-xl m-4 text-center">
                <figure>
                    <Image
                        width={500}
                        height={500}
                        src="/juanm.jpeg"
                        alt="JuanManuel" />
                </figure>
                <article className="card-body">
                    <h2 className="text-center font-bold text-3xl">Juan Manuel</h2>
                    <p>Barber profesional Fundador de Barrio Fino.</p>
                    <div className="card-actions justify-between mt-2">
                        <button className="btn btn-outline btn-error"><FaInstagram /><a target="_blank" href="https://www.instagram.com/lemosjuan23?igsh=Nnl2Y3B1OXphb2lr">Ver Perfil</a></button>
                        <button className="btn btn-outline btn-accent"><FaWhatsapp /><a target="_blank" href="https://wa.me/+54901141949307?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor">Solicitar turno</a></button>
                    </div>
                </article>
            </article>
        </>
    )
}