'use client'
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BARBERS } from "@/data/barbers";
import ExternalLinkModal from "@/components/ui/ExternalLinkModal";

function BarberCard({ barber, index, onLinkClick }) {
  return (
    <article
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
            onClick={() => onLinkClick({ href: barber.instagram, platformName: "Instagram" })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gradient text-white transition-all duration-200 text-sm font-semibold hover:scale-105 hover:opacity-90"
          >
            <FaInstagram className="text-base" />
            Ver Perfil
          </button>
          <button
            onClick={() => onLinkClick({ href: barber.whatsapp, platformName: "WhatsApp" })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-gradient text-white transition-all duration-200 text-sm font-semibold hover:scale-105 hover:opacity-90"
          >
            <FaWhatsapp className="text-base" />
            Solicitar turno
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Barbers() {
  const [pendingLink, setPendingLink] = useState(null);

  const [featured, ...rest] = BARBERS;

  return (
    <section className="w-full py-10 px-4 md:px-6 lg:px-8">
      <h2 className="section-title text-2xl sm:text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-100">
        Nuestros Barberos
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Featured barber: Juan Ignacio — centered on top */}
        <div className="w-full flex justify-center">
          <BarberCard barber={featured} index={0} onLinkClick={setPendingLink} />
        </div>

        {/* Rest of barbers — 2-column row below */}
        <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 justify-items-center max-w-2xl">
          {rest.map((barber, index) => (
            <BarberCard
              key={barber.name}
              barber={barber}
              index={index + 1}
              onLinkClick={setPendingLink}
            />
          ))}
        </div>
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
