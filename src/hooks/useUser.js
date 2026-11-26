import { useCallback, useEffect, useState } from 'react'
import { fetchUserById } from '../api/users'
import { useAuth } from './useAuth'

export function useUser(id) {
  const { token } = useAuth()
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)
  const [resultKey, setResultKey] = useState('')

  const requestKey = `${id}|${token ?? 'guest'}|${refreshKey}`
  const loading = resultKey !== requestKey

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    fetchUserById(id, { signal: controller.signal, token })
      .then((data) => {
        if (!active) return
        setUser(data)
        setError('')
        setResultKey(requestKey)
      })
      .catch((err) => {
        if (!active || err.name === 'AbortError') return
        setError(err.message)
        setResultKey(requestKey)
      })

    return () => {
      active = false
      controller.abort()
    }
  }, [id, token, refreshKey, requestKey])

  const reload = useCallback(() => {
    setRefreshKey((key) => key + 1)
  }, [])

  return { user, loading, error, reload }
}
