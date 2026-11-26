import { Link, useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { LoadingBlock } from '../components/ui/Spinner'
import Alert from '../components/ui/Alert'
import Button from '../components/ui/Button'

function InfoItem({ label, value }) {
  return (
    <div className="rounded-md border border-[#eef0ea] bg-[#fafbf8] px-3.5 py-2.5">
      <dt className="text-[10.5px] font-medium uppercase tracking-wide text-[#9aa0a8]">
        {label}
      </dt>
      <dd className="mt-0.5 break-words text-[12.5px] font-bold text-[#2d3137]">
        {value || '-'}
      </dd>
    </div>
  )
}

function UserDetailPage({
  backTo = '/#students',
  backLabel = 'Kembali ke daftar siswa',
}) {
  const { id } = useParams()
  const { user, loading, error, reload } = useUser(id)

  const fullName = user
    ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()
    : ''

  return (
    <section className="mx-auto max-w-[900px] px-8 py-10 max-[860px]:px-5 max-[860px]:py-7">
      <Link
        to={backTo}
        className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#3b5df5] hover:text-[#2c4ad8]"
      >
        <span aria-hidden="true">←</span> {backLabel}
      </Link>

      {loading && (
        <div className="mt-5">
          <LoadingBlock message="Memuat detail siswa…" />
        </div>
      )}

      {error && !loading && (
        <Alert type="error" className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>{error}</span>
            <Button variant="outline" size="sm" onClick={reload}>
              Coba lagi
            </Button>
          </div>
        </Alert>
      )}

      {user && !loading && (
        <article className="mt-5 overflow-hidden rounded-xl border border-[#e7e7e3] bg-white shadow-[0_18px_40px_rgba(28,32,40,0.06)]">
          <div className="relative bg-[linear-gradient(120deg,#939d85_0%,#6f7a63_100%)] px-6 pb-5 pt-6 text-white">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/70">
              Profil Siswa / Instruktur
            </p>
            <div className="mt-3 flex items-center gap-4">
              {user.image ? (
                <img
                  src={user.image}
                  alt={fullName}
                  className="h-20 w-20 flex-none rounded-full border-4 border-white/70 bg-white object-cover"
                />
              ) : (
                <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full border-4 border-white/70 bg-white text-xl font-extrabold text-[#2b45b8]">
                  {(fullName || 'U').slice(0, 2).toUpperCase()}
                </span>
              )}
              <div className="min-w-0">
                <h1 className="truncate text-2xl font-extrabold tracking-[-0.02em]">
                  {fullName || user.username}
                </h1>
                <p className="mt-0.5 text-[12.5px] text-white/85">
                  @{user.username ?? 'user'} · {user.email ?? '-'}
                </p>
                <span className="mt-2 inline-flex rounded-full bg-white/20 px-2.5 py-0.5 text-[10.5px] font-bold capitalize">
                  {user.role ?? 'student'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6 max-[860px]:p-5">
            <div>
              <h2 className="text-sm font-extrabold text-[#15181c]">
                Informasi Pribadi
              </h2>
              <dl className="mt-2.5 grid grid-cols-3 gap-2.5 max-[640px]:grid-cols-2 max-[420px]:grid-cols-1">
                <InfoItem label="Usia" value={user.age ? `${user.age} tahun` : ''} />
                <InfoItem label="Gender" value={user.gender} />
                <InfoItem label="Tanggal Lahir" value={user.birthDate} />
                <InfoItem label="Golongan Darah" value={user.bloodGroup} />
                <InfoItem label="Tinggi" value={user.height ? `${user.height} cm` : ''} />
                <InfoItem label="Berat" value={user.weight ? `${user.weight} kg` : ''} />
              </dl>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-[#15181c]">Kontak</h2>
              <dl className="mt-2.5 grid grid-cols-3 gap-2.5 max-[640px]:grid-cols-2 max-[420px]:grid-cols-1">
                <InfoItem label="Email" value={user.email} />
                <InfoItem label="Telepon" value={user.phone} />
                <InfoItem label="Username" value={user.username} />
              </dl>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default UserDetailPage
