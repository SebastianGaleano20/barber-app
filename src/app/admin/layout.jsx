import "@/styles/globals.css";

export const metadata = {
  title: 'Admin — Barrio Fino',
  description: 'Panel de administración de Barrio Fino',
}

/**
 * Admin layout.
 * Client-side auth guard is handled inside each page via the AuthGuard
 * component so this layout can remain a Server Component.
 */
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-800 dark:text-gray-100">
      {children}
    </div>
  )
}
