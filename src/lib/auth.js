/**
 * Auth utilities for admin section.
 * Replace API_BASE_URL with the actual API endpoint.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
const TOKEN_KEY = 'admin_token';

/**
 * Send login credentials to the API and store the returned token.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function login(email, password) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data.message || 'Credenciales incorrectas.' };
    }

    const data = await res.json();
    if (data.token) {
      sessionStorage.setItem(TOKEN_KEY, data.token);
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Error de conexión. Intentá de nuevo.' };
  }
}

/** Remove the stored token (logout). */
export function logout() {
  sessionStorage.removeItem(TOKEN_KEY);
}

/** Return the stored token or null. */
export function getToken() {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(TOKEN_KEY);
}

/** Return true if a token is present. */
export function isAuthenticated() {
  return Boolean(getToken());
}
