import { useRef } from 'react'
import { useUsers } from '../hooks/useUsers'
import { LoadingBlock } from './ui/Spinner'
import Pagination from './ui/Pagination'
import UserCard from './ui/UserCard'
import Alert from './ui/Alert'
import Button from './ui/Button'

function StudentDirectory() {
  const { users, total, page, setPage, totalPages, loading, error, reload } =
    useUsers(8)
  const sectionRef = useRef(null)

  function handlePageChange(nextPage) {
    setPage(nextPage)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      id="students"
      className="mx-auto max-w-[1096px] scroll-mt-20 pt-[60px] max-[1160px]:mx-8 max-[860px]:mx-5 max-[860px]:pt-[42px]"
      aria-labelledby="students-title"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <header>
          <h2
            id="students-title"
            className="text-[clamp(24px,2.4vw,29px)] font-extrabold tracking-[-0.025em] text-[#15181c]"
          >
            Student &amp; Instructor Directory
          </h2>
        </header>

        <span className="rounded-full border border-[#e7e7e3] bg-[#f6f7f3] px-3 py-1 text-[11px] font-bold text-[#4f5560]">
          {total} pengguna terdaftar
        </span>
      </div>

      {loading ? (
        <div className="mt-5">
          <LoadingBlock message="Memuat daftar siswa…" />
        </div>
      ) : error ? (
        <Alert type="error" className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>{error}</span>
            <Button variant="outline" size="sm" onClick={reload}>
              Coba lagi
            </Button>
          </div>
        </Alert>
      ) : (
        <div className="mt-5 grid grid-cols-4 gap-4 max-[960px]:grid-cols-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      <div className="mt-7">
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={handlePageChange}
          disabled={loading}
        />
      </div>
    </section>
  )
}

export default StudentDirectory
