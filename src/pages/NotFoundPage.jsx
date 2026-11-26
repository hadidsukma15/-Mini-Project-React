import Button from '../components/ui/Button'

function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-[640px] flex-col items-center px-8 py-20 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9aa0a8]">
        404
      </p>
      <h1 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-[#15181c]">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-[13px] text-[#6d7279]">
        Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak pernah ada.
      </p>
      <Button className="mt-6" to="/">
        Kembali ke Home
      </Button>
    </section>
  )
}

export default NotFoundPage
