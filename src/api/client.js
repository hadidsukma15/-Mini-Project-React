export const BASE_URL = 'https://dummyjson.com'

export async function request(path, { method = 'GET', body, token, signal } = {}) {
  const headers = {}

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message =
      data?.message || `Permintaan ke server gagal (${response.status}).`
    throw new Error(message)
  }

  return data
}
