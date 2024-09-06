import styles from '@/app/styles/background.module.css'

export default function Header() {
  return (
    <div className={styles.backgroundImage}>
      <section className="grid justify-center items-center text-center p-2 h-5/6 w-screen">
        <h1 className="text-4xl italic uppercase font-extrabold pt-8">💈Barrio Fino BarberÍa💈</h1>
        <p className="text-lg font-bold">Barbería familiar ubicada en el barrio de Parque Patricios, desde el año 2020 brindando la mejor experiencia.</p>
      </section>
    </div>
  )
}