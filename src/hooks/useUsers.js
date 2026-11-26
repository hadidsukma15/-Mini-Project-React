import { useCallback, useEffect, useState } from 'react'
import { fetchUsers } from '../api/users'
import { useAuth } from './useAuth'

const MAX_STUDENTS = 50

export function useUsers(limit = 8) {
  const { token } = useAuth()
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [total, setTotal] = useState(0)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)
  const [resultKey, setResultKey] = useState('')

  const skip = (page - 1) * limit
  const requestKey = `${page}|${limit}|${token ?? 'guest'}|${refreshKey}`
  const loading = resultKey !== requestKey

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    fetchUsers({ limit, skip, signal: controller.signal, token })
      .then((data) => {
        if (!active) return
        const remaining = Math.max(0, MAX_STUDENTS - skip)
        setUsers((data.users ?? []).slice(0, remaining))
        setTotal(Math.min(data.total ?? 0, MAX_STUDENTS))
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
  }, [limit, skip, token, refreshKey, requestKey])

  const reload = useCallback(() => {
    setRefreshKey((key) => key + 1)
  }, [])

  const mutateUsers = useCallback((updater) => {
    setUsers(updater)
  }, [])

  const adjustTotal = useCallback((delta) => {
    setTotal((current) =>
      Math.min(MAX_STUDENTS, Math.max(0, current + delta)),
    )
  }, [])

  const totalPages = Math.max(1, Math.ceil(total / limit))

  return {
    users,
    total,
    page,
    setPage,
    totalPages,
    loading,
    error,
    reload,
    mutateUsers,
    adjustTotal,
  }
}
