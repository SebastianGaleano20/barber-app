import LoginForm from '@/components/admin/LoginForm'

export const metadata = {
  title: 'Admin — Barrio Fino',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark px-4">
      <div className="w-full max-w-sm">
        {/* Logo + title */}
        <div className="text-center mb-8">
          <img
            src="/logo.jpeg"
            alt="Barrio Fino"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-black gradient-text">Panel Administrativo</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Acceso exclusivo para administradores
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
