import { FeatureIcon } from './icons.jsx'

function FeatureCard({ icon, title, description }) {
  return (
    <article className="flex min-h-[168px] flex-col items-start rounded-md border border-[#e7e7e3] bg-white px-5 pb-[22px] pt-5 transition hover:-translate-y-0.5 hover:border-[#d8d9d3] hover:shadow-[0_12px_24px_rgba(28,32,40,0.06)] max-[860px]:min-w-[230px] max-[860px]:flex-1 max-[860px]:snap-start max-[560px]:min-w-0">
      <FeatureIcon name={icon} />
      <h3 className="mt-[13px] text-[13.5px] font-extrabold tracking-[-0.01em] text-[#15181c]">
        {title}
      </h3>
      <p className="mt-[5px] text-xs leading-[1.65] text-[#6d7279]">
        {description}
      </p>
    </article>
  )
}

export default FeatureCard
