import { notFound } from "next/navigation"

import { Sidebar } from "@/components/layout/Sidebar"
import { Navbar } from "@/components/layout/Navbar"

import { CourseHero } from "@/components/course/CourseHero"
import { CourseAbout } from "@/components/course/CourseAbout"
import { CourseModules } from "@/components/course/CourseModules"
import { CourseInfo } from "@/components/course/CourseInfo"
import { CourseInstructor } from "@/components/course/CourseInstructor"
import { CourseProgress } from "@/components/course/CourseProgress"

import { courses } from "@/mocks/courses"

type CoursePageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function CoursePage({
  params,
}: CoursePageProps) {

  const { id } = await params

  const course = courses.find(
    (course) => course.id === Number(id)
  )

  if (!course) {
    notFound()
  }

  /* -------------------------- */
  /* PRIMEIRA AULA */
  /* -------------------------- */

  const firstLesson =
    course.modules[0]?.lessons[0]

  return (
    <main className="flex min-h-screen bg-[#F3F0E6]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* ÁREA PRINCIPAL */}
        <section className="p-10">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-3 text-sm mb-8">

            <span className="text-gray-500">
              Início
            </span>

            <span className="text-gray-400">
              ›
            </span>

            <span className="text-gray-500">
              Cursos
            </span>

            <span className="text-gray-400">
              ›
            </span>

            <span className="font-semibold text-[#1F2E27]">
              {course.title}
            </span>

          </div>

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-12 gap-8">

            {/* COLUNA ESQUERDA */}
            <div className="col-span-8 flex flex-col gap-8">

              {/* HERO */}
              <CourseHero course={course} />

              {/* SOBRE */}
              <CourseAbout course={course} />

              {/* MÓDULOS */}
              <CourseModules course={course} />

            </div>

            {/* COLUNA DIREITA */}
            <div className="col-span-4 flex flex-col gap-8">

              {/* PROGRESSO */}
              <CourseProgress
                courseId={course.id}
                lessonId={firstLesson?.id}
                progress={course.progress}
              />

              {/* INFORMAÇÕES */}
              <CourseInfo course={course} />

              {/* INSTRUTOR */}
              <CourseInstructor />

            </div>

          </div>

        </section>

      </div>

    </main>
  )
}