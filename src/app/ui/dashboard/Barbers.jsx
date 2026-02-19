'use client'
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import ExternalLinkModal from "../../ui/ExternalLinkModal";

const BARBERS = [
  {
    name: "Jony",
    photo: "/jony.jpeg",
    bio: "Barber profesional con experiencia de 4 años junto al equipo de Barrio Fino.",
    instagram: "https://www.instagram.com/jonimasna?igsh=MTR1ZW5rMmY3MDhvaQ==",
    whatsapp: "https://wa.me/+5491131675543?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor",
  },
  {
    name: "Juan Ignacio",
    photo: "/juan.jpeg",
    bio: "Barber profesional - Fundador de Barrio Fino.",
    instagram: "https://www.instagram.com/san_cristobal13?igsh=YnhtdGdwNXZmNGM2",
    whatsapp: "https://wa.me/+5491123835826?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor",
  },
  {
    name: "Jere",
    photo: "/jere.jpeg",
    bio: "Nuevo Barber profesional de Barrio Fino.",
    instagram: "https://www.instagram.com/jereee21_?igsh=NmYwOXhjbjR6NnJr",
    whatsapp: "https://wa.me/+5491128383067?text=Hola%20quiero%20solicitar%20un%20turno%20porfavor",
  },
];

export default function Barbers() {
  const [pendingLink, setPendingLink] = useState(null);

  return (
    <section className="w-full py-10 px-4 md:px-6 lg:px-8">
      <h2 className="section-title text-2xl sm:text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-100">
        Nuestros Barberos
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center">
        {BARBERS.map((barber, index) => (
          <article
            key={barber.name}
            className="group card-hover-lift w-full max-w-sm bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden text-center animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <figure className="overflow-hidden">
              <Image
                width={400}
                height={480}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={barber.photo}
                alt={barber.name}
              />
            </figure>
            <div className="p-5">
              <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-1">
                {barber.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {barber.bio}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => setPendingLink({ href: barber.instagram, platformName: "Instagram" })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gradient text-white transition-all duration-200 text-sm font-semibold hover:scale-105 hover:opacity-90"
                >
                  <FaInstagram className="text-base" />
                  Ver Perfil
                </button>
                <button
                  onClick={() => setPendingLink({ href: barber.whatsapp, platformName: "WhatsApp" })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gradient text-white transition-all duration-200 text-sm font-semibold hover:scale-105 hover:opacity-90"
                >
                  <FaWhatsapp className="text-base" />
                  Solicitar turno
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal confirmación link externo */}
      {pendingLink && (
        <ExternalLinkModal
          href={pendingLink.href}
          platformName={pendingLink.platformName}
          onClose={() => setPendingLink(null)}
        />
      )}
    </section>
  );
}
