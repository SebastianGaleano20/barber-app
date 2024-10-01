import Image from "next/image";

export default function Contact() {
    return (
        <section className="card bg-base-100 image-full max-w-md lg:w-full m-4 shadow-xl lg:row-start-2 lg:col-start-2">
            <figure>
                <Image
                    width={500}
                    height={500}
                    src="/ig.jpeg"
                    alt="imageIg" />
            </figure>
            <article className="card-body">
                <h2 className="card-title text-white">Instagram</h2>
                <p className="text-white">¡Visitanos en nuestro instagram personal para contactarnos y ver mas diseños!</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><a target="_blank" href="https://www.instagram.com/barriofino_barberia/reels/?__d=1%2F">Ir a Instagram</a></button>
                </div>
            </article>
        </section>
    )
}