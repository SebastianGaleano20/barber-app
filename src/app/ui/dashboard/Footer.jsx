'use client'
import { useState } from "react";
import ExternalLinkModal from "../../ui/ExternalLinkModal";

export default function Footer() {
  const [pendingLink, setPendingLink] = useState(null);

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-2">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.jpeg"
              className="h-9 w-auto transition-transform duration-200 group-hover:scale-110"
              alt="Barrio Fino logo"
            />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Barrio Fino
            </span>
          </a>

          {/* Social links */}
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li>
              <button
                onClick={() => setPendingLink({ href: "https://www.instagram.com/barriofino_barberia?igsh=N3Jmc3JxNmRyODF3", platformName: "Instagram" })}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Instagram
              </button>
            </li>
            <li>
              <button
                onClick={() => setPendingLink({ href: "https://wa.me/+5491123835826?text=Hola-tengo-una-consulta", platformName: "WhatsApp" })}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                WhatsApp
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-6" />

        <p className="text-xs sm:text-sm text-center text-gray-400 dark:text-gray-500">
          © 2024{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sebastiang.netlify.app/"
            className="text-blue-600 hover:text-blue-500 transition-colors"
          >
            DraCode
          </a>
          . All Rights Reserved.
        </p>
      </div>

      {/* Modal confirmación link externo */}
      {pendingLink && (
        <ExternalLinkModal
          href={pendingLink.href}
          platformName={pendingLink.platformName}
          onClose={() => setPendingLink(null)}
        />
      )}
    </footer>
  )
}