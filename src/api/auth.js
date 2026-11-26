import { request } from './client'

export function loginRequest({ username, password }) {
  return request('/auth/login', {
    method: 'POST',
    body: { username, password, expiresInMins: 60 },
  })
}

export function registerRequest(payload) {
  return request('/users/add', { method: 'POST', body: payload })
}
