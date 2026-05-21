import { Navbar } from "@/components/layout/Navbar"
import { Sidebar } from "@/components/layout/Sidebar"

import { LessonBreadcrumb } from "@/components/course-player/LessonBreadcrumb"
import { VideoPlayer } from "@/components/course-player/VideoPlayer"
import { LessonHeader } from "@/components/course-player/LessonHeader"
import { LessonTabs } from "@/components/course-player/LessonTabs"
import { CourseSidebar } from "@/components/course-player/CourseSidebar"
import { NextLessonCard } from "@/components/course-player/NextLessonCard"
import { LessonNavigation } from "@/components/course-player/LessonNavigation"

interface LessonPageProps {
  params: {
    id: string
    lessonId: string
  }
}

export default function LessonPage({
  params,
}: LessonPageProps) {

  /* -------------------------- */
  /* PARAMS DA ROTA */
  /* -------------------------- */

  const courseId = params.id
  const lessonId = params.lessonId

  /* -------------------------- */
  /* MOCK TEMPORÁRIO */
  /* -------------------------- */

  // futuramente isso virá da API
  const course = {
    id: courseId,
    title: "Desenvolvimento Web Completo",
  }

  const lesson = {
    id: lessonId,
    title: "2.1 Introdução ao HTML",
    module: "Módulo 2 • HTML e CSS",
    description:
      "Nesta aula você vai aprender os conceitos fundamentais do HTML e criar sua primeira estrutura de página web.",
  }

  return (
    <div className="min-h-screen bg-[#F6F8F2]">
      
      {/* NAVBAR */}
      <Navbar />

      <div className="flex">
        
        {/* SIDEBAR GLOBAL */}
        <Sidebar />

        {/* CONTEÚDO */}
        <main className="flex-1 p-8">
          
          {/* BREADCRUMB */}
          <LessonBreadcrumb
            items={[
              "Início",
              "Meus Cursos",
              course.title,
              lesson.module,
              lesson.title,
            ]}
          />

          {/* GRID PRINCIPAL */}
          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
            
            {/* ESQUERDA */}
            <div>
              
              {/* PLAYER */}
              <VideoPlayer
                title={lesson.title}
              />

              {/* HEADER */}
              <LessonHeader
                module={lesson.module}
                title={lesson.title}
                description={lesson.description}
              />

              {/* TABS */}
              <LessonTabs />

              {/* PRÓXIMA AULA */}
              <NextLessonCard />

              {/* NAVEGAÇÃO */}
              <LessonNavigation />
            </div>

            {/* DIREITA */}
            <div>
              
              {/* SIDEBAR CURSO */}
              <CourseSidebar />

            </div>
          </div>

          {/* DEBUG TEMPORÁRIO */}
          <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-white p-4 text-sm text-neutral-500">
            <p>Course ID: {courseId}</p>
            <p>Lesson ID: {lessonId}</p>
          </div>
        </main>
      </div>
    </div>
  )
}