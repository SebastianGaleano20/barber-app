export default function Contact() {
    return (
        <section className="card bg-base-100 image-full max-w-md lg:w-lg m-3 shadow-xl">
            <figure>
                <img
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