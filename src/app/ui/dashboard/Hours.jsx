const SCHEDULE = [
  { day: "Lunes",    hours: "Cerrado",    closed: true  },
  { day: "Martes",   hours: "12hs - 19hs", closed: false },
  { day: "Miercoles",hours: "12hs - 19hs", closed: false },
  { day: "Jueves",   hours: "12hs - 19hs", closed: false },
  { day: "Viernes",  hours: "11hs - 20hs", closed: false },
  { day: "Sabado",   hours: "11hs - 20hs", closed: false },
  { day: "Domingo",  hours: "Cerrado",    closed: true  },
];

export default function Hours() {
  return (
    <section className="w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md p-6 animate-fade-in-up animation-delay-400">
      <h2 className="section-title text-xl sm:text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Horarios
      </h2>
      <div className="flex flex-col gap-2">
        {SCHEDULE.map((item) => (
          <div
            key={item.day}
            className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-colors duration-200 ${
              item.closed
                ? "bg-gray-50 dark:bg-gray-700/50"
                : "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"
            }`}
          >
            <span className={`text-sm font-semibold w-24 ${item.closed ? "text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-200"}`}>
              {item.day}
            </span>
            <span className={`text-sm font-medium ${item.closed ? "text-gray-400 dark:text-gray-500 italic" : "text-blue-600 dark:text-blue-400"}`}>
              {item.hours}
            </span>
            <span className={`w-2 h-2 rounded-full ${item.closed ? "bg-gray-300 dark:bg-gray-600" : "bg-green-400 animate-pulse"}`} />
          </div>
        ))}
      </div>
    </section>
  )
}