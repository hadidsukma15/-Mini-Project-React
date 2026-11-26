import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'

const emptyValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function RegisterPage() {
  const { register, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!values.firstName.trim()) nextErrors.firstName = 'Nama depan wajib diisi.'
    if (!values.lastName.trim()) nextErrors.lastName = 'Nama belakang wajib diisi.'

    if (!values.username.trim()) {
      nextErrors.username = 'Username wajib diisi.'
    } else if (values.username.trim().length < 4) {
      nextErrors.username = 'Username minimal 4 karakter.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Format email tidak valid.'
    }

    if (!values.password) {
      nextErrors.password = 'Password wajib diisi.'
    } else if (values.password.length < 6) {
      nextErrors.password = 'Password minimal 6 karakter.'
    }

    if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'Konfirmasi password tidak sama.'
    }

    return nextErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    setFormError('')

    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await register(values)
      navigate('/login', {
        replace: true,
        state: {
          username: values.username.trim(),
          message: 'Registrasi berhasil! Silakan login dengan akun barumu.',
        },
      })
    } catch (error) {
      setFormError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-[620px] px-8 py-12 max-[860px]:px-5 max-[860px]:py-8">
      <div className="rounded-xl border border-[#e7e7e3] bg-white p-7 shadow-[0_18px_40px_rgba(28,32,40,0.06)] max-[860px]:p-6">
        <h1 className="text-xl font-extrabold tracking-[-0.02em] text-[#15181c]">
          Buat Akun Baru
        </h1>
        <p className="mt-1 text-[12.5px] text-[#6d7279]">
          Daftar sebagai siswa untuk mulai belajar di DibiEdu.
        </p>

        {formError && (
          <Alert type="error" className="mt-4">
            {formError}
          </Alert>
        )}

        <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3.5 max-[520px]:grid-cols-1">
            <Input
              label="Nama Depan"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
              placeholder="Budi"
            />
            <Input
              label="Nama Belakang"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
              placeholder="Santoso"
            />
          </div>

          <Input
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
            placeholder="budisantoso"
            autoComplete="username"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="budi@example.com"
            autoComplete="email"
          />

          <div className="grid grid-cols-2 gap-3.5 max-[520px]:grid-cols-1">
            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Minimal 6 karakter"
              autoComplete="new-password"
            />
            <Input
              label="Konfirmasi Password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Ulangi password"
              autoComplete="new-password"
            />
          </div>

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? 'Mendaftar…' : 'Daftar Sekarang'}
          </Button>
        </form>

        <p className="mt-4 text-center text-[11.5px] text-[#6d7279]">
          Sudah punya akun?{' '}
          <Link to="/login" className="font-bold text-[#3b5df5]">
            Login di sini
          </Link>
        </p>
      </div>
    </section>
  )
}

export default RegisterPage
