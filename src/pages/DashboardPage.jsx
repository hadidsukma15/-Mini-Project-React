import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useUsers } from '../hooks/useUsers'
import { createUser, deleteUser, updateUser } from '../api/users'
import UserForm from '../components/UserForm'
import UserCard from '../components/ui/UserCard'
import Pagination from '../components/ui/Pagination'
import { LoadingBlock } from '../components/ui/Spinner'
import Alert from '../components/ui/Alert'
import Button from '../components/ui/Button'

function getInitialFormValues(user) {
  if (!user) return undefined

  return {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    age: user.age != null ? String(user.age) : '',
    role: user.role ?? 'student',
    university: user.university ?? '',
    city: user.address?.city ?? '',
  }
}

function Avatar({ user }) {
  const initials = `${user.firstName?.[0] ?? ''}${
    user.lastName?.[0] ?? ''
  }`.toUpperCase()

  if (user.image) {
    return (
      <img
        src={user.image}
        alt={user.firstName}
        className="h-9 w-9 flex-none rounded-full border border-[#e7e7e3] object-cover"
      />
    )
  }

  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#eef2ff] text-[11px] font-extrabold text-[#2b45b8]">
      {initials || 'U'}
    </span>
  )
}

function DashboardPage() {
  const { user: authUser } = useAuth()
  const {
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
  } = useUsers(8)

  const [formState, setFormState] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  function openCreateForm() {
    setNotice(null)
    setFormState({ mode: 'create', user: null })
  }

  function openEditForm(user) {
    setNotice(null)
    setFormState({ mode: 'edit', user })
  }

  function closeForm() {
    setFormState(null)
  }

  async function handleSubmit(payload) {
    setSubmitting(true)
    setNotice(null)

    try {
      if (formState.mode === 'create') {
        const created = await createUser(payload)
        const newUser = {
          ...payload,
          ...created,
          id: created.id ?? Date.now(),
          username: created.username ?? `newuser${created.id ?? ''}`,
          image: created.image ?? '',
        }
        mutateUsers((prev) => [newUser, ...prev].slice(0, 8))
        adjustTotal(1)
        setNotice({
          type: 'success',
          message: 'Siswa baru berhasil ditambahkan melalui API.',
        })
      } else {
        const id = formState.user.id
        const updated = await updateUser(id, payload)
        mutateUsers((prev) =>
          prev.map((row) =>
            row.id === id
              ? {
                  ...row,
                  ...payload,
                  ...updated,
                  address: { ...row.address, ...payload.address },
                }
              : row,
          ),
        )
        setNotice({
          type: 'success',
          message: 'Data siswa berhasil diperbarui.',
        })
      }

      setFormState(null)
    } catch (err) {
      setNotice({ type: 'error', message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return

    setSubmitting(true)
    setNotice(null)

    try {
      await deleteUser(deleteTarget.id)
      mutateUsers((prev) => prev.filter((row) => row.id !== deleteTarget.id))
      adjustTotal(-1)
      setNotice({
        type: 'success',
        message: `Data ${deleteTarget.firstName} berhasil dihapus.`,
      })
      setDeleteTarget(null)

      if (users.length === 1 && page > 1) {
        setPage(page - 1)
      }
    } catch (err) {
      setNotice({ type: 'error', message: err.message })
      setDeleteTarget(null)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-[1096px] px-8 py-10 max-[860px]:px-5 max-[860px]:py-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-[-0.025em] text-[#15181c]">
            Dashboard Siswa
          </h1>
          <p className="mt-1 text-[12.5px] text-[#6d7279]">
            Halo {authUser?.firstName ?? authUser?.username}, kelola data siswa
            di sini.
          </p>
        </div>

        <Button size="sm" onClick={openCreateForm}>
          + Tambah Siswa
        </Button>
      </div>

      {notice && (
        <Alert type={notice.type} className="mt-4">
          {notice.message}
        </Alert>
      )}

      {formState && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-extrabold text-[#15181c]">
              {formState.mode === 'create' ? 'Tambah Siswa Baru' : 'Edit Data Siswa'}
            </h2>
            <span className="text-[11px] text-[#9aa0a8]">POST/PUT DummyJSON API</span>
          </div>
          <UserForm
            key={formState.user?.id ?? 'create'}
            initialValues={getInitialFormValues(formState.user)}
            onSubmit={handleSubmit}
            onCancel={closeForm}
            submitting={submitting}
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-2">
        <span className="rounded-full border border-[#e7e7e3] bg-[#f6f7f3] px-3 py-1 text-[11px] font-bold text-[#4f5560]">
          {total} pengguna
        </span>
      </div>

      {loading ? (
        <div className="mt-4">
          <LoadingBlock message="Memuat data siswa…" />
        </div>
      ) : error ? (
        <Alert type="error" className="mt-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>{error}</span>
            <Button variant="outline" size="sm" onClick={reload}>
              Coba lagi
            </Button>
          </div>
        </Alert>
      ) : (
        <>
          <div className="mt-3 hidden overflow-hidden rounded-lg border border-[#e7e7e3] bg-white md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-[#f6f7f3]">
                <tr className="text-[10.5px] uppercase tracking-wide text-[#7d828a]">
                  <th className="px-4 py-2.5 font-bold">Siswa</th>
                  <th className="px-4 py-2.5 font-bold">Email</th>
                  <th className="px-4 py-2.5 font-bold">Peran</th>
                  <th className="px-4 py-2.5 font-bold">Usia</th>
                  <th className="px-4 py-2.5 text-right font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((row) => (
                  <tr
                    key={row.id}
                    className="border-t border-[#f0f1ed] text-[12px] text-[#4f5560]"
                  >
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <Avatar user={row} />
                        <div className="min-w-0">
                          <p className="truncate font-bold text-[#15181c]">
                            {row.firstName} {row.lastName}
                          </p>
                          <p className="truncate text-[10.5px] text-[#9aa0a8]">
                            @{row.username ?? 'user'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-[200px] truncate px-4 py-2.5">
                      {row.email ?? '-'}
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="rounded-full bg-[#eef2ff] px-2 py-0.5 text-[10px] font-bold capitalize text-[#2b45b8]">
                        {row.role ?? 'student'}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">{row.age ?? '-'}</td>
                    <td className="px-4 py-2.5">
                      <div className="flex justify-end gap-1.5">
                        <Link
                          to={`/dashboard/users/${row.id}`}
                          className="rounded px-2 py-1 text-[11px] font-bold text-[#3b5df5] hover:bg-[#eef2ff]"
                        >
                          Detail
                        </Link>
                        <button
                          type="button"
                          className="rounded px-2 py-1 text-[11px] font-bold text-[#9a6400] hover:bg-[#fdf1d8]"
                          onClick={() => openEditForm(row)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="rounded px-2 py-1 text-[11px] font-bold text-[#dc2626] hover:bg-[#fdf1f1]"
                          onClick={() => setDeleteTarget(row)}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <p className="px-4 py-10 text-center text-xs text-[#9aa0a8]">
                Belum ada data pada halaman ini.
              </p>
            )}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:hidden">
            {users.map((row) => (
              <div key={row.id} className="space-y-2">
                <UserCard user={row} detailTo={`/dashboard/users/${row.id}`} />
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => openEditForm(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="flex-1"
                    onClick={() => setDeleteTarget(row)}
                  >
                    Hapus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-7">
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
          disabled={loading || submitting}
        />
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
          <div className="w-full max-w-[380px] rounded-lg bg-white p-5 shadow-xl">
            <h2 className="text-sm font-extrabold text-[#15181c]">
              Hapus data siswa?
            </h2>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[#6d7279]">
              Data <span className="font-bold">{deleteTarget.firstName} {deleteTarget.lastName}</span>{' '}
              akan dihapus dari daftar. Tindakan ini memanggil endpoint DELETE.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDeleteTarget(null)}
                disabled={submitting}
              >
                Batal
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={confirmDelete}
                disabled={submitting}
              >
                {submitting ? 'Menghapus…' : 'Ya, Hapus'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DashboardPage
