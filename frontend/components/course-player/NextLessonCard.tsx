"use client"

import {
  ArrowRight,
  Clock3,
  PlayCircle,
} from "lucide-react"

interface NextLessonCardProps {
  title?: string
  module?: string
  duration?: string
}

export function NextLessonCard({
  title = "2.2 Estrutura básica do HTML",
  module = "Módulo 2 • HTML e CSS",
  duration = "12:10",
}: NextLessonCardProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-lime-50 to-white shadow-sm">
      
      <div className="flex flex-col gap-8 p-6 xl:flex-row xl:items-center xl:justify-between">
        
        {/* ESQUERDA */}
        <div className="flex items-start gap-5">
          
          {/* Ícone */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
            <PlayCircle className="h-8 w-8 text-lime-700" />
          </div>

          {/* Infos */}
          <div>
            
            <span className="text-sm font-semibold uppercase tracking-wide text-lime-700">
              Próxima aula
            </span>

            <h2 className="mt-2 text-2xl font-bold text-neutral-900">
              {title}
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              
              <span className="font-medium">
                {module}
              </span>

              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {duration}
              </div>
            </div>
          </div>
        </div>

        {/* BOTÃO */}
        <button className="flex items-center justify-center gap-3 rounded-2xl bg-green-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-800 hover:scale-[1.02]">
          
          Continuar aprendizado

          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}