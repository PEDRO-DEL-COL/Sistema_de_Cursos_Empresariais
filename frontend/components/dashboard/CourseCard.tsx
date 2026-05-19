import Link from "next/link"

import { Course } from "@/types/course"

type CourseCardProps = {
  course: Course
}

export function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>

      <div
        className="
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          cursor-pointer
        "
      >

        {/* IMAGEM */}
        <div
          className="
            h-[180px]
            bg-cover
            bg-center
            relative
          "
          style={{
            backgroundImage: `url(${course.image})`,
          }}
        >

          {/* CATEGORIA */}
          <span
            className="
              absolute
              bottom-3
              left-3
              bg-[#99CB38]
              text-black
              text-xs
              font-semibold
              px-3
              py-1
              rounded-full
            "
          >
            {course.category}
          </span>

        </div>

        {/* CONTEÚDO */}
        <div className="p-5">

          <h2
            className="
              text-xl
              font-bold
              text-[#33473C]
              mb-2
              leading-tight
            "
          >
            {course.title}
          </h2>

          <p
            className="
              text-gray-600
              text-sm
              mb-5
              leading-relaxed
            "
          >
            {course.description}
          </p>

          {/* FOOTER */}
          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              ⏱ {course.duration}
            </span>

            <span
              className="
                text-sm
                font-semibold
                text-[#99CB38]
              "
            >
              {course.level}
            </span>

          </div>

        </div>
      </div>

    </Link>
  )
}