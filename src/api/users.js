import { request } from './client'

const USER_FIELDS = [
  'id',
  'firstName',
  'lastName',
  'maidenName',
  'age',
  'gender',
  'email',
  'phone',
  'username',
  'image',
  'role',
  'address',
  'company',
  'university',
].join(',')

export function fetchUsers({ limit = 8, skip = 0, signal, token } = {}) {
  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
    select: USER_FIELDS,
  })

  return request(`/users?${params.toString()}`, { signal, token })
}

export function fetchUserById(id, { signal, token } = {}) {
  return request(`/users/${id}`, { signal, token })
}

export function createUser(payload) {
  return request('/users/add', { method: 'POST', body: payload })
}

export function updateUser(id, payload) {
  return request(`/users/${id}`, { method: 'PUT', body: payload })
}

export function deleteUser(id) {
  return request(`/users/${id}`, { method: 'DELETE' })
}
