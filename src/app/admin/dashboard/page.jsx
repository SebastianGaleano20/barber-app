'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import AuthGuard from '@/components/admin/AuthGuard'
import AppointmentsTable from '@/components/admin/AppointmentsTable'
import { logout, getToken } from '@/lib/auth'
import { LogOut, RefreshCw } from 'lucide-react'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export default function DashboardPage() {
  const router = useRouter()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchAppointments = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE_URL}/api/appointments`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      if (res.status === 401) {
        logout()
        router.replace('/admin/login')
        return
      }
      if (!res.ok) throw new Error('No se pudieron cargar los turnos.')
      const data = await res.json()
      setAppointments(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    fetchAppointments()
  }, [fetchAppointments])

  function handleLogout() {
    logout()
    router.replace('/admin/login')
  }

  async function handleConfirm(id) {
    await fetch(`${API_BASE_URL}/api/appointments/${id}/confirm`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    fetchAppointments()
  }

  async function handleCancel(id) {
    await fetch(`${API_BASE_URL}/api/appointments/${id}/cancel`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    fetchAppointments()
  }

  const enriched = appointments.map((a) => ({
    ...a,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  }))

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-dark">
        {/* Top bar */}
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Barrio Fino" className="h-8 w-auto" />
            <div>
              <h1 className="text-base font-bold text-gray-800 dark:text-gray-100">
                Panel de Administración
              </h1>
              <p className="text-xs text-gray-400 dark:text-gray-500">Barrio Fino</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition font-semibold"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Gestión de Turnos
              </h2>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">
                Administrá los turnos del local
              </p>
            </div>
            <button
              onClick={fetchAppointments}
              disabled={loading}
              className="inline-flex items-center gap-2 text-sm btn-gradient text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            {loading ? (
              <div className="text-center py-16 text-gray-400 dark:text-gray-500 text-sm">
                Cargando turnos...
              </div>
            ) : (
              <AppointmentsTable appointments={enriched} />
            )}
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
