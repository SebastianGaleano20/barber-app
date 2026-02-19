'use client'
import { useState } from "react";
import Image from "next/image";
import ExternalLinkModal from "../../ui/ExternalLinkModal";

const IG_URL = "https://www.instagram.com/barriofino_barberia/reels/?__d=1%2F";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="group card-hover-lift relative w-full rounded-2xl shadow-md overflow-hidden animate-fade-in-up animation-delay-200">
      {/* Background image */}
      <figure className="relative">
        <Image
          width={500}
          height={350}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          src="/ig.jpeg"
          alt="Instagram Barrio Fino"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </figure>

      {/* Content over image */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg mb-1 text-shadow-dark">
          Instagram
        </h3>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed text-shadow-dark">
          ¡Visitanos en nuestro Instagram para ver más diseños y contactarnos!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 text-sm"
        >
          Ir a Instagram
        </button>
      </div>

      {/* Modal confirmación */}
      {showModal && (
        <ExternalLinkModal
          href={IG_URL}
          platformName="Instagram"
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  )
}