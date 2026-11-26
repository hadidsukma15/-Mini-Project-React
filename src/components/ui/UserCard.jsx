import { Link } from 'react-router-dom'

function getInitials(user) {
  const first = user.firstName?.[0] ?? ''
  const last = user.lastName?.[0] ?? ''
  return `${first}${last}`.toUpperCase() || 'U'
}

function getRoleStyle(role) {
  if (role === 'admin') {
    return 'bg-[#fdf1d8] text-[#9a6400]'
  }
  if (role === 'moderator') {
    return 'bg-[#e9f6ee] text-[#1b6b3a]'
  }
  return 'bg-[#eef2ff] text-[#2b45b8]'
}

function UserCard({ user, detailTo }) {
  const fullName = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()

  return (
    <article className="flex h-full flex-col rounded-lg border border-[#e7e7e3] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#d8d9d3] hover:shadow-[0_12px_24px_rgba(28,32,40,0.06)]">
      <div className="flex items-start gap-3">
        {user.image ? (
          <img
            src={user.image}
            alt={fullName}
            loading="lazy"
            className="h-12 w-12 flex-none rounded-full border border-[#e7e7e3] bg-[#f0f1ed] object-cover"
          />
        ) : (
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#eef2ff] text-sm font-extrabold text-[#2b45b8]">
            {getInitials(user)}
          </span>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-extrabold tracking-[-0.01em] text-[#15181c]">
            {fullName || user.username}
          </h3>
          <p className="truncate text-[11.5px] text-[#6d7279]">
            @{user.username ?? 'user'}
          </p>
        </div>

        <span
          className={`flex-none rounded-full px-2 py-0.5 text-[10px] font-bold capitalize ${getRoleStyle(
            user.role,
          )}`}
        >
          {user.role ?? 'student'}
        </span>
      </div>

      <p className="mt-3 truncate text-[11.5px] text-[#4f5560]">
        {user.email ?? 'Email belum tersedia'}
      </p>

      <dl className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <div>
          <dt className="text-[#9aa0a8]">Usia</dt>
          <dd className="font-bold text-[#2d3137]">
            {user.age ? `${user.age} tahun` : '-'}
          </dd>
        </div>
        <div>
          <dt className="text-[#9aa0a8]">Gender</dt>
          <dd className="font-bold capitalize text-[#2d3137]">
            {user.gender ?? '-'}
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="text-[#9aa0a8]">Institusi / Perusahaan</dt>
          <dd className="truncate font-bold text-[#2d3137]">
            {user.university || user.company?.name || '-'}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-[#f0f1ed] pt-3">
        <span className="text-[10.5px] text-[#9aa0a8]">
          {user.address?.city
            ? `${user.address.city}, ${user.address.country ?? ''}`
            : 'Lokasi belum tersedia'}
        </span>
        <Link
          to={detailTo ?? `/users/${user.id}`}
          className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#3b5df5] hover:text-[#2c4ad8]"
        >
          Lihat Detail
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default UserCard
