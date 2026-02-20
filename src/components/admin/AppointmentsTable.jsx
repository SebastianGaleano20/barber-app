'use client'

const STATUS_STYLES = {
  pendiente:   'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  confirmado:  'bg-green-100  text-green-700  dark:bg-green-900/30  dark:text-green-400',
  cancelado:   'bg-red-100    text-red-700    dark:bg-red-900/30    dark:text-red-400',
}

export default function AppointmentsTable({ appointments = [] }) {
  if (appointments.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400 dark:text-gray-500">
        <p className="text-lg font-medium">No hay turnos registrados.</p>
        <p className="text-sm mt-1">Los turnos aparecerán aquí cuando estén disponibles.</p>
      </div>
    )
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">
            <th className="px-4 py-3 font-semibold">Fecha</th>
            <th className="px-4 py-3 font-semibold">Hora</th>
            <th className="px-4 py-3 font-semibold">Cliente</th>
            <th className="px-4 py-3 font-semibold">Barbero</th>
            <th className="px-4 py-3 font-semibold">Servicio</th>
            <th className="px-4 py-3 font-semibold">Estado</th>
            <th className="px-4 py-3 font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
          {appointments.map((appt) => (
            <tr
              key={appt.id}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors"
            >
              <td className="px-4 py-3 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {appt.date}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {appt.time}
              </td>
              <td className="px-4 py-3 text-gray-800 dark:text-gray-100 font-medium whitespace-nowrap">
                {appt.client}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {appt.barber}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {appt.service}
              </td>
              <td className="px-4 py-3">
                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[appt.status] ?? ''}`}>
                  {appt.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {appt.status === 'pendiente' && (
                    <button
                      onClick={() => appt.onConfirm?.(appt.id)}
                      className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition font-semibold"
                    >
                      Confirmar
                    </button>
                  )}
                  <button
                    onClick={() => appt.onCancel?.(appt.id)}
                    className="text-xs px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
