"use client"

import { ChevronRight } from "lucide-react"

interface LessonBreadcrumbProps {
  items?: string[]
}

export function LessonBreadcrumb({
  items = [
    "Início",
    "Meus Cursos",
    "Desenvolvimento Web Completo",
    "Módulo 2 - HTML e CSS",
    "2.1 Introdução ao HTML",
  ],
}: LessonBreadcrumbProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div
            key={item}
            className="flex items-center gap-2"
          >
            
            <span
              className={
                isLast
                  ? "font-medium text-neutral-900"
                  : "transition hover:text-lime-700 cursor-pointer"
              }
            >
              {item}
            </span>

            {!isLast && (
              <ChevronRight className="h-4 w-4 text-neutral-400" />
            )}
          </div>
        )
      })}
    </div>
  )
}