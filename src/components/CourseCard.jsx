import { CourseThumbnail } from './icons.jsx'

function CourseCard({ thumbnail, title, description, price }) {
  return (
    <article className="group min-w-0 max-[860px]:min-w-[250px] max-[860px]:snap-start max-[560px]:min-w-0">
      <div className="aspect-[16/9.3] overflow-hidden rounded-[6px] bg-[#e8ebe2]">
        <CourseThumbnail variant={thumbnail} />
      </div>
      <h3 className="mt-[11px] text-[13px] font-extrabold tracking-[-0.01em] text-[#15181c]">
        {title}
      </h3>
      <p className="mt-1 text-[11.5px] leading-[1.6] text-[#6d7279]">
        {description}
      </p>
      <p className="mt-2 text-xs font-extrabold text-[#000]">{price}</p>
    </article>
  )
}

export default CourseCard
