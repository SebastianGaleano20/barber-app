export default function Navbar() {
    return (
        <section className="flex justify-center p-4">
            <article className="card glass max-w-md">
                <figure>
                    <img
                        src="/ubi.jpeg"
                        alt="Ubicacion"
                        className="w-full"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ubicación del local</h2>
                    <p>Alberti 2031 - Parque Patricios, Buenos Aires</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Ver mapa</button>
                    </div>
                </div>
            </article>
        </section>
    )
}