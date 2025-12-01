import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Barbers() {
  return (
    <>
      <h2 className="text-3xl text-center font-bold m-2">Barberos</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        <article className="card max-w-md bg-base-100 shadow-xl m-4 text-center">
          <figure>
            <Image width={500} height={500} src="/jony.jpeg" alt="Jony" />
          </figure>
          <article className="card-body">
            <h2 className="text-center font-bold text-3xl">Jony</h2>
            <p>
              Barber profesional con experiencia de 4 años junto al equipo de
              Barrio Fino.
            </p>
            <div className="card-actions justify-between mt-2">
              <button className="btn btn-outline btn-error">
                <FaInstagram />
                <a
                  target="_blank"
                  href="https://www.instagram.com/jonimasna?igsh=MTR1ZW5rMmY3MDhvaQ=="
                >
                  Ver Perfil
                </a>
              </button>
              <button className="btn btn-outline btn-accent">
                <FaWhatsapp />
                <a
                  target="_blank"
                  href="https://wa.me/+5491131675543?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"
                >
                  Solicitar turno
                </a>
              </button>
            </div>
          </article>
        </article>
        <article className="card max-w-md bg-base-100 shadow-xl m-4 text-center">
          <figure>
            <Image width={500} height={500} src="/juan.jpeg" alt="Juan" />
          </figure>
          <article className="card-body">
            <h2 className="text-center font-bold text-3xl">Juan Ignacio</h2>
            <p>Barber profesional - Fundador de Barrio Fino.</p>
            <div className="card-actions justify-between mt-2">
              <button className="btn btn-outline btn-error">
                <FaInstagram />
                <a
                  target="_blank"
                  href="https://www.instagram.com/san_cristobal13?igsh=YnhtdGdwNXZmNGM2"
                >
                  Ver Perfil
                </a>
              </button>
              <button className="btn btn-outline btn-accent">
                <FaWhatsapp />
                <a
                  target="_blank"
                  href="https://wa.me/+5491123835826?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"
                >
                  Solicitar turno
                </a>
              </button>
            </div>
          </article>
        </article>
        <article className="card max-w-md bg-base-100 shadow-xl m-4 text-center">
          <figure>
            <Image width={500} height={500} src="/jere.jpeg" alt="Jere" />
          </figure>
          <article className="card-body">
            <h2 className="text-center font-bold text-3xl">Jere</h2>
            <p>Nuevo Barber profesional de Barrio Fino</p>
            <div className="card-actions justify-between mt-2">
              <button className="btn btn-outline btn-error">
                <FaInstagram />
                <a
                  target="_blank"
                  href="https://www.instagram.com/jereee21_?igsh=NmYwOXhjbjR6NnJr"
                >
                  Ver Perfil
                </a>
              </button>
              <button className="btn btn-outline btn-accent">
                <FaWhatsapp />
                <a
                  target="_blank"
                  href="https://wa.me/+5491128383067?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor"
                >
                  Solicitar turno
                </a>
              </button>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}
