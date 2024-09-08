import Image from "next/image"

export default function ImageGallery() {
  return (
    <section className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
      <article className="carousel-item">
        <img
          src="/logo.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-box" />
      </article>
      <article className="carousel-item">
        <img
          src="/corte1.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-box" />
      </article>
      <article className="carousel-item">
        <img
          src="/corte2.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-box" />
      </article>
      <article className="carousel-item">
        <img
          src="/corte3.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-box" />
      </article>
      <article className="carousel-item">
        <img
          src="/logo.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-box" />
      </article>
    </section>
  )
}