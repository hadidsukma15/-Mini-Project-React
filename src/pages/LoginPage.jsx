import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'

function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname ?? '/dashboard'

  const [values, setValues] = useState({
    username: location.state?.username ?? '',
    password: '',
  })
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

  async function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}
    if (!values.username.trim()) nextErrors.username = 'Username wajib diisi.'
    if (!values.password) nextErrors.password = 'Password wajib diisi.'
    setErrors(nextErrors)
    setFormError('')

    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await login(values)
      navigate(redirectTo, { replace: true })
    } catch (error) {
      setFormError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-[960px] px-8 py-12 max-[860px]:px-5 max-[860px]:py-8">
      <div className="grid overflow-hidden rounded-xl border border-[#e7e7e3] bg-white shadow-[0_18px_40px_rgba(28,32,40,0.06)] md:grid-cols-2">
        <div className="hidden flex-col justify-between bg-[#939d85] p-8 text-white md:flex">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              DibiEdu LMS
            </p>
            <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em]">
              Selamat datang kembali, learner!
            </h1>
            <p className="mt-3 text-[13px] leading-relaxed text-white/85">
              Masuk untuk mengakses dashboard, melihat daftar siswa, dan
              mengelola data peserta dengan aman.
            </p>
          </div>
        </div>

        <div className="p-7 max-[860px]:p-6">
          <h2 className="text-xl font-extrabold tracking-[-0.02em] text-[#15181c]">
            Login
          </h2>
          <p className="mt-1 text-[12.5px] text-[#6d7279]">
            Masukkan username dan password akunmu.
          </p>

          {location.state?.message && (
            <Alert type="success" className="mt-4">
              {location.state.message}
            </Alert>
          )}

          {formError && (
            <Alert type="error" className="mt-4">
              {formError}
            </Alert>
          )}

          <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
            <Input
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              placeholder="emilys"
              autoComplete="username"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="••••••••"
              autoComplete="current-password"
            />

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? 'Memproses…' : 'Masuk'}
            </Button>
          </form>

          <div className="mt-4 rounded-md border border-[#e7e7e3] bg-[#f6f7f3] px-3.5 py-2.5 text-[11px] leading-relaxed text-[#4f5560]">
            <p className="font-bold text-[#2d3137]">Akun demo DummyJSON</p>
            <p className="mt-0.5">
              Username: <span className="font-bold">emilys</span> · Password:{' '}
              <span className="font-bold">emilyspass</span>
            </p>
          </div>

          <p className="mt-4 text-center text-[11.5px] text-[#6d7279]">
            Belum punya akun?{' '}
            <Link to="/register" className="font-bold text-[#3b5df5]">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
