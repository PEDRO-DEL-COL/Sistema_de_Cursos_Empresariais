"use client"

import {
  CheckCircle2,
  Bookmark,
} from "lucide-react"

interface LessonHeaderProps {
  module?: string
  title?: string
  description?: string
  progress?: number
}

export function LessonHeader({
  module = "MÓDULO 2 • HTML E CSS",
  title = "2.1 Introdução ao HTML",
  description = "Nesta aula você vai aprender o que é HTML, sua estrutura básica e como criar sua primeira página web.",
  progress = 75,
}: LessonHeaderProps) {
  return (
    <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        
        {/* ESQUERDA */}
        <div className="max-w-3xl">
          
          <span className="text-sm font-semibold uppercase tracking-wide text-lime-700">
            {module}
          </span>

          <h1 className="mt-3 text-4xl font-bold text-neutral-900">
            {title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {description}
          </p>

          {/* BOTÕES */}
          <div className="mt-6 flex flex-wrap gap-4">
            
            <button className="flex items-center gap-2 rounded-xl bg-green-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800">
              <CheckCircle2 className="h-5 w-5" />
              Marcar como concluída
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100">
              <Bookmark className="h-5 w-5" />
              Adicionar aos favoritos
            </button>
          </div>
        </div>

        {/* DIREITA */}
        <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          
          <h3 className="text-lg font-semibold text-neutral-900">
            Progresso da aula
          </h3>

          <div className="mt-5 flex items-center gap-5">
            
            {/* Círculo */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[10px] border-lime-700">
              
              <span className="text-2xl font-bold text-neutral-900">
                {progress}%
              </span>
            </div>

            {/* Infos */}
            <div>
              <p className="font-medium text-neutral-900">
                Assistindo agora
              </p>

              <p className="mt-2 text-sm text-neutral-600">
                Faltam 04:02 para concluir a aula
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}