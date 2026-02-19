'use client'
import { IMAGES } from "../../images.js"
import { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(IMAGES);
  }, []);

  return (
    <section className="w-full px-4 py-6 lg:hidden animate-fade-in">
      <h2 className="section-title text-2xl sm:text-3xl text-center font-bold mb-6 text-gray-800 dark:text-gray-100">
        Nuestros Trabajos
      </h2>
      <div className="max-w-sm sm:max-w-md mx-auto ring-2 ring-blue-500/30 dark:ring-blue-400/30 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        <article className="carousel w-full">
          {images.map((image, index) => (
            <article
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img
                src={image.image}
                className="w-full h-80 sm:h-96 object-cover"
                alt={image.alt}
              />
              <article className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-circle btn-sm bg-black/40 hover:bg-black/60 border-none text-white"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle btn-sm bg-black/40 hover:bg-black/60 border-none text-white"
                >
                  ❯
                </a>
              </article>
            </article>
          ))}
        </article>
        <div className="flex justify-center gap-2 py-3 bg-gray-50 dark:bg-gray-800/80">
          {images.map((_, index) => (
            <a
              key={index}
              href={`#slide${index + 1}`}
              className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  )
}