import { useState } from 'react'
import CourseCard from './CourseCard.jsx'

function CourseSection({ courses }) {
  const [showAll, setShowAll] = useState(false)
  const visibleCourses = showAll ? courses : courses.slice(0, 3)

  return (
    <section
      className="mx-auto max-w-[1096px] pt-[60px] max-[1160px]:mx-8 max-[860px]:mx-5 max-[860px]:pt-[42px]"
      id="courses"
      aria-labelledby="courses-title"
    >
      <header>
        <h2
          id="courses-title"
          className="text-[19px] font-extrabold tracking-[-0.02em] text-[#15181c]"
        >
          Featured Courses
        </h2>
      </header>

      <div className="mt-[18px] grid grid-cols-3 gap-[18px] max-[860px]:flex max-[860px]:snap-x max-[860px]:snap-mandatory max-[860px]:overflow-x-auto max-[860px]:pb-2 max-[560px]:flex-col max-[560px]:overflow-visible">
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.id}
            thumbnail={course.thumbnail}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>

      <div className="mt-[42px] flex justify-center">
        <button
          type="button"
          className="rounded-[5px] border-0 bg-[#f0f1ed] px-[18px] py-2.5 text-[11.5px] font-bold text-[#2d3137] transition hover:-translate-y-px hover:bg-[#e6e7e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b5df5]"
          onClick={() => setShowAll((value) => !value)}
          aria-expanded={showAll}
        >
          {showAll ? 'Show Less Courses' : 'View All Courses'}
        </button>
      </div>
    </section>
  )
}

export default CourseSection
