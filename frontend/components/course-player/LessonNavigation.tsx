"use client"

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

interface LessonNavigationProps {
  previousLesson?: string
  nextLesson?: string
}

export function LessonNavigation({
  previousLesson = "2.0 Introdução ao módulo",
  nextLesson = "2.2 Estrutura básica do HTML",
}: LessonNavigationProps) {
  return (
    <div className="mt-6 grid gap-4 xl:grid-cols-2">
      
      {/* AULA ANTERIOR */}
      <button className="group flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-6 text-left shadow-sm transition hover:border-lime-300 hover:bg-lime-50">
        
        <div className="flex items-center gap-4">
          
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 transition group-hover:bg-lime-100">
            <ArrowLeft className="h-6 w-6 text-neutral-700 group-hover:text-lime-700" />
          </div>

          <div>
            
            <p className="text-sm font-medium text-neutral-500">
              Aula anterior
            </p>

            <h3 className="mt-1 text-lg font-semibold text-neutral-900">
              {previousLesson}
            </h3>
          </div>
        </div>
      </button>

      {/* PRÓXIMA AULA */}
      <button className="group flex items-center justify-between rounded-3xl border border-lime-200 bg-lime-50 p-6 text-left shadow-sm transition hover:border-lime-300 hover:bg-lime-100">
        
        <div>
          
          <p className="text-sm font-medium text-lime-700">
            Próxima aula
          </p>

          <h3 className="mt-1 text-lg font-semibold text-neutral-900">
            {nextLesson}
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 transition group-hover:bg-lime-200">
          <ArrowRight className="h-6 w-6 text-lime-700" />
        </div>
      </button>
    </div>
  )
}