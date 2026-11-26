import { HeroIllustration } from './icons.jsx'

function Hero() {
  return (
    <section
      className="relative isolate mx-auto mt-[26px] flex min-h-[clamp(340px,34vw,460px)] max-w-[1096px] items-center justify-center overflow-hidden rounded-lg bg-[#939d85] max-[1160px]:mx-8 max-[1160px]:max-w-none max-[860px]:mx-5 max-[860px]:mt-3 max-[860px]:min-h-[320px] max-[540px]:min-h-[290px] max-[540px]:rounded-md"
      id="top"
      aria-labelledby="hero-title"
    >
      <HeroIllustration />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(36,44,33,0.08)_0%,rgba(36,44,33,0.16)_100%)]" />
      <div className="relative z-[2] max-w-[700px] px-7 py-14 text-center text-white max-[860px]:px-[22px] max-[860px]:py-11">
        <h1
          id="hero-title"
          className="text-[clamp(30px,3.9vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] [text-shadow:0_2px_18px_rgba(28,35,26,0.22)] max-[540px]:text-[27px]"
        >
          Unlock Your Potential
          <br className="max-[540px]:hidden" /> with DibiEdu
        </h1>
        <p className="mx-auto mt-4 max-w-[520px] text-[13.5px] leading-[1.65] text-white/94 [text-shadow:0_1px_10px_rgba(28,35,26,0.2)] max-[860px]:text-[12.5px] max-[540px]:text-xs">
          Embark on a journey of knowledge and skill development with our
          comprehensive online courses. Learn at your own pace, anytime,
          anywhere.
        </p>
        <a
          className="mt-6 inline-flex rounded-md bg-[#3b5df5] px-[26px] py-[11px] text-[13.5px] font-bold text-white shadow-[0_10px_22px_rgba(32,52,156,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2c4ad8] max-[540px]:px-[22px] max-[540px]:py-2.5 max-[540px]:text-xs"
          href="#students"
        >
          Browse Students
        </a>
      </div>
    </section>
  )
}

export default Hero
