import { Images } from "../../images.js"

export default function ImageGallery() {
  return (
    <>
      <section className="carousel w-full lg:hidden">
        {
          Images.map((image, index) => (
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


      <div className="carousel lg:flex hidden overflow-hidden">
        <div className="carousel-item">
          <img
            src="/corte6.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
        <div className="carousel-item">
          <img
            src="/corte7.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
        <div className="carousel-item">
          <img
            src="/corte8.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
        <div className="carousel-item">
          <img
            src="/corte9.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
        <div className="carousel-item">
          <img
            src="/corte2.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
        <div className="carousel-item">
          <img
            src="/corte1.jpeg"
            className="max-w-md"
            alt="img" />
        </div>
      </div>
    </>
  )
}