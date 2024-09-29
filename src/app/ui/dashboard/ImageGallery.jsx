'use client'
import { IMAGES } from "../../images.js"
import { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(IMAGES);
  }, []);
  return (
    <>
      <h2 className="text-3xl text-center font-bold m-4">Nuestros trabajos</h2>
    <section className="m-4 p-5 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:hidden">
      <article className="carousel w-full">
        {
          images.map((image, index) => (
            <article key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img
                src={image.image}
                className="object-scale-down rounded-t-lg w-full"
                alt={image.alt}
              />
              <article className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? images.length : index}`}
                  className="btn btn-circle">❮</a>
                <a
                  href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle">❯</a>
              </article>
            </article >
          ))
        }
      </article >
    </section>
    </>
  )
}