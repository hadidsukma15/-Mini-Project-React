import { useState } from 'react'
import { loginRequest, registerRequest } from '../api/auth'
import { AuthContext } from './auth-context'

const SESSION_KEY = 'dibiedu:session'
const REGISTERED_KEY = 'dibiedu:registered-users'

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function readRegisteredUsers() {
  try {
    const raw = localStorage.getItem(REGISTERED_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeRegisteredUsers(users) {
  localStorage.setItem(REGISTERED_KEY, JSON.stringify(users))
}

function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession)

  function saveSession(nextSession) {
    setSession(nextSession)
    if (nextSession) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession))
    } else {
      localStorage.removeItem(SESSION_KEY)
    }
  }

  async function login({ username, password }) {
    const cleanUsername = username.trim()

    if (!cleanUsername || !password) {
      throw new Error('Username dan password wajib diisi.')
    }

    const registered = readRegisteredUsers().find(
      (user) => user.username.toLowerCase() === cleanUsername.toLowerCase(),
    )

    if (registered) {
      if (registered.password !== password) {
        throw new Error('Username atau password salah.')
      }

      const user = {
        id: registered.id,
        username: registered.username,
        firstName: registered.firstName,
        lastName: registered.lastName,
        email: registered.email,
        image: '',
        role: 'student',
      }

      const nextSession = { token: `local-${registered.id}`, user }
      saveSession(nextSession)
      return user
    }

    const data = await loginRequest({
      username: cleanUsername,
      password,
    })

    const user = {
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      image: data.image,
      role: 'instructor',
    }

    const nextSession = { token: data.accessToken, user }
    saveSession(nextSession)
    return user
  }

  async function register(payload) {
    const cleanUsername = payload.username.trim()

    if (!cleanUsername) {
      throw new Error('Username wajib diisi.')
    }

    const alreadyRegistered = readRegisteredUsers().some(
      (user) => user.username.toLowerCase() === cleanUsername.toLowerCase(),
    )

    if (alreadyRegistered) {
      throw new Error('Username sudah terdaftar. Silakan gunakan username lain.')
    }

    const data = await registerRequest({
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
      username: cleanUsername,
      email: payload.email.trim(),
      password: payload.password,
    })

    const registeredUsers = readRegisteredUsers()
    registeredUsers.push({
      id: data.id ?? Date.now(),
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
      username: cleanUsername,
      email: payload.email.trim(),
      password: payload.password,
    })
    writeRegisteredUsers(registeredUsers)

    return data
  }

  function logout() {
    saveSession(null)
  }

  const value = {
    user: session?.user ?? null,
    token: session?.token ?? null,
    isAuthenticated: Boolean(session?.token && session?.user),
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
