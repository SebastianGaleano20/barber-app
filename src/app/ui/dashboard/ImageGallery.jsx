'use client'
import { Images } from "../../images.js"
import { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(Images);
  }, []);
  return (
    <>
      <section className="carousel w-full lg:hidden">
        {
          images.map((image, index) => (
            <article key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img
                src={image.image}
                className="max-w-md"
                alt={image.alt}
              />
              <article className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? Images.length : index}`}
                  className="btn btn-circle">❮</a>
                <a
                  href={`#slide${index === Images.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle">❯</a>
              </article>
            </article >
          ))
        }
      </section >

      <section className="carousel carousel-center rounded-box lg:flex hidden overflow-hidden">
        <article className="carousel-item">
          <img src="/local.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
        <article className="carousel-item">
          <img src="/corte9.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
        <article className="carousel-item">
          <img src="/corte3.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
        <article className="carousel-item">
          <img src="/corte4.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
        <article className="carousel-item">
          <img src="/corte5.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
        <article className="carousel-item">
          <img src="/corte6.jpeg" className="w-96" alt="Corte de pelo" />
        </article>
      </section>
    </>
  )
}